export type BeaconValidator = {
  index: string | null;
  balance: string;
  status: string;
  validator: {
    pubkey: string;
    withdrawal_credentials: string;
    effective_balance: string;
    slashed: boolean;
    activation_eligibility_epoch: string;
    activation_epoch: string;
    exit_epoch: string;
    withdrawable_epoch: string;
  };
};

export type BeaconValidatorStatus =
  | 'pending'
  | 'active'
  | 'exited'
  | 'withdrawal_possible'
  | 'withdrawal_done';

export type BeaconValidatorLifecycleStage =
  | 'pending'
  | 'active'
  | 'exited'
  | 'withdrawal_ready'
  | 'withdrawn';

export type RawBeaconValidatorStatus =
  | 'pending_initialized'
  | 'pending_queued'
  | 'active_ongoing'
  | 'active_exiting'
  | 'active_slashed'
  | 'exited_unslashed'
  | 'exited_slashed'
  | 'withdrawal_possible'
  | 'withdrawal_done';

export type BeaconValidatorState = {
  publicKey: string;
  validatorIndex: number | null;
  status: BeaconValidatorStatus;
  rawStatus: RawBeaconValidatorStatus;
  balanceGwei: bigint;
  effectiveBalanceGwei: bigint;
  slashed: boolean;
  activationEligibilityEpoch: number | null;
  activationEpoch: number | null;
  exitEpoch: number | null;
  withdrawableEpoch: number | null;
};

export type WaitForBeaconValidatorActivationArgs = {
  validatorId: string;
  pollIntervalMs: number;
  timeoutMs: number;
  failOnNotFound?: boolean;
  // Caps each individual poll attempt so one stalled request can't consume
  // the whole activation budget. Defaults to DEFAULT_REQUEST_TIMEOUT_MS —
  // deliberately independent of pollIntervalMs, since a short poll interval
  // is a statement about how often to check, not how long a single healthy
  // response is allowed to take.
  requestTimeoutMs?: number;
};

type BeaconResponse<T> = {
  data?: T;
};

export class BeaconHttpError extends Error {
  readonly status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = 'BeaconHttpError';
    this.status = status;
  }
}

// Covers both "the remote response was invalid" and "the caller's own input
// can never succeed" (e.g. a blank validatorId, a non-positive timeoutMs) —
// both are permanent, non-retryable conditions for isRetryableActivationError.
export class BeaconValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BeaconValidationError';
  }
}

// Beacon APIs use the uint64 max value as a sentinel for epochs that are not
// set yet; the same bound doubles as the valid range ceiling for uint64 fields.
const BEACON_FAR_FUTURE_EPOCH = 18446744073709551615n;
const MAX_SAFE_INTEGER_BIGINT = BigInt(Number.MAX_SAFE_INTEGER);
const BEACON_VALIDATORS_PATH = '/eth/v1/beacon/states/head/validators';
const BEACON_GET_VALIDATORS_MAX_URL_LENGTH = 7000;
const BEACON_GET_VALIDATORS_MAX_COUNT = 64;
// Generous default per-attempt budget for waitForBeaconValidatorActivation —
// independent of pollIntervalMs, which only controls check frequency.
const DEFAULT_REQUEST_TIMEOUT_MS = 10_000;

// The shared url-join utility appends the path *after* an existing query
// string (e.g. a provider endpoint configured as
// 'https://host?apiKey=secret' would produce '...?apiKey=secret/eth/v1/...'),
// silently breaking any endpoint with query-string auth. Build on the
// pathname directly instead, which naturally preserves the endpoint's own
// query params so they can be merged with (not clobbered by) route-specific
// ones like the batch GET's id[].
const buildBeaconURL = (endpoint: string, path: string): URL => {
  const url = new URL(endpoint);
  url.pathname = `${url.pathname.replace(/\/+$/, '')}${path}`;
  return url;
};

// Throws for an endpoint fetch could never use — malformed syntax, an
// unsupported scheme, or embedded credentials (fetch refuses to construct a
// Request from a URL with a username/password) — before any caller reaches
// fetch() with it. Every entry point that accepts a caller-supplied endpoint
// calls this first: without it, fetch()'s own TypeError for a credentialed
// URL embeds the URL verbatim in its message, and Node's fetch throws that
// TypeError however it's called, not just from the retry loop this was
// originally added for.
//
// The reported endpoint is redacted to origin + our own fixed API path,
// never the caller's own path or query string — a provider's endpoint can
// embed an API key either way (path-based, e.g. '.../v3/<key>', or
// query-string, e.g. '?apiKey=<key>'), and neither is safe to echo into an
// error message, log line, or error tracker. An endpoint that fails to
// parse at all can still visibly contain a credential (e.g.
// 'https://user:secret@' is invalid only because the host is missing, not
// because the credential syntax is), so there's no substring of raw,
// unparsed input that's safe to assume is clean either — a generic
// placeholder is reported instead in that case.
const assertFetchableBeaconEndpoint = (
  endpoint: string,
  methodName: string,
): void => {
  let reportableEndpoint =
    '(unparseable endpoint omitted to avoid leaking embedded credentials)';

  try {
    const url = buildBeaconURL(endpoint, BEACON_VALIDATORS_PATH);

    // An opaque-path scheme (a typo like 'htttps:', or a non-special scheme
    // like 'mailto:'/'admin:') serializes url.origin as the literal string
    // 'null' — not a credential leak on its own, but concatenating it would
    // produce a confusing 'null/eth/v1/...' message. Keep the placeholder
    // instead for anything without a real origin to report.
    if (url.origin !== 'null') {
      reportableEndpoint = `${url.origin}${BEACON_VALIDATORS_PATH}`;
    }

    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      throw new Error('unsupported protocol');
    }

    new Request(url);
  } catch {
    throw new BeaconValidationError(
      `Invalid beacon endpoint for ${methodName}: ${reportableEndpoint}`,
    );
  }
};

// ReadableStream#cancel() can itself reject (e.g. an already-errored stream).
// Releasing the connection is a best-effort courtesy — it must never replace
// the meaningful result (a BeaconHttpError, or a 404's null) with whatever
// cancellation itself failed with.
const cancelResponseBody = async (response: Response): Promise<void> => {
  try {
    await response.body?.cancel();
  } catch {
    // Ignored — see rationale above.
  }
};

const missingBeaconEndpointError = () =>
  new Error(
    'Beacon endpoint is not configured. Provide extendedConfig.beacon.endpoint in SDK config.',
  );

const assertBeaconData = <T>(
  payload: BeaconResponse<T>,
  methodName: string,
): T => {
  if (typeof payload !== 'object' || payload === null || !('data' in payload)) {
    throw new BeaconValidationError(
      `Beacon API returned an invalid response for ${methodName}`,
    );
  }

  if (payload.data === null || typeof payload.data === 'undefined') {
    throw new BeaconValidationError(
      `Beacon API response is missing data for ${methodName}`,
    );
  }

  return payload.data;
};

const parseBeaconJSON = async <T>(
  response: Response,
  methodName: string,
): Promise<BeaconResponse<T>> => {
  try {
    return (await response.json()) as BeaconResponse<T>;
  } catch (error) {
    // response.json() rejects both for malformed JSON content (SyntaxError,
    // once the body has been read in full) and for a body read that never
    // completes (connection drop, or our own attempt-timeout abort firing
    // mid-stream). Only the former is a permanent, non-retryable failure —
    // the latter must propagate as-is so isRetryableActivationError's
    // default (retryable) applies.
    if (error instanceof SyntaxError) {
      throw new BeaconValidationError(
        `Beacon API returned invalid JSON for ${methodName}`,
      );
    }

    throw error;
  }
};

const assertString = (
  value: unknown,
  fieldName: string,
  methodName: string,
) => {
  if (typeof value !== 'string') {
    throw new BeaconValidationError(
      `Beacon API returned an invalid response for ${methodName}: ${fieldName} must be a string`,
    );
  }

  return value;
};

// Beacon validator pubkeys are BLS public keys: 48 bytes, 0x-prefixed hex,
// case insensitive. https://github.com/ethereum/beacon-APIs types/primitive.yaml#Pubkey
const BEACON_PUBKEY_PATTERN = /^0x[a-fA-F0-9]{96}$/;

const assertBeaconPubkey = (
  value: unknown,
  fieldName: string,
  methodName: string,
) => {
  const rawValue = assertString(value, fieldName, methodName);

  if (!BEACON_PUBKEY_PATTERN.test(rawValue)) {
    throw new BeaconValidationError(
      `Beacon API returned an invalid response for ${methodName}: ${fieldName} must be a 0x-prefixed 48-byte hex string`,
    );
  }

  return rawValue;
};

const assertBoolean = (
  value: unknown,
  fieldName: string,
  methodName: string,
) => {
  if (typeof value !== 'boolean') {
    throw new BeaconValidationError(
      `Beacon API returned an invalid response for ${methodName}: ${fieldName} must be a boolean`,
    );
  }

  return value;
};

const mapOptionalString = (
  value: unknown,
  fieldName: string,
  methodName: string,
) => {
  if (typeof value === 'undefined' || value === null) {
    return null;
  }

  return assertString(value, fieldName, methodName);
};

// The Beacon API's uint64 primitive is a decimal string; BigInt() itself is
// far more permissive (accepts '', whitespace, signs, and hex), so malformed
// or adversarial responses must be rejected before reaching BigInt(). The
// {0,19} bound caps total digit count at 20 (uint64's max), so a pathological
// digit string is rejected by the regex itself before ever reaching BigInt().
const CANONICAL_UNSIGNED_INTEGER_PATTERN = /^(0|[1-9][0-9]{0,19})$/;

const parseCanonicalUint64String = (
  rawValue: string,
  fieldName: string,
  methodName: string,
): bigint => {
  if (!CANONICAL_UNSIGNED_INTEGER_PATTERN.test(rawValue)) {
    throw new BeaconValidationError(
      `Beacon API returned an invalid response for ${methodName}: ${fieldName} must be a canonical non-negative integer string`,
    );
  }

  const parsedValue = BigInt(rawValue);

  if (parsedValue > BEACON_FAR_FUTURE_EPOCH) {
    throw new BeaconValidationError(
      `Beacon API returned an invalid response for ${methodName}: ${fieldName} exceeds the uint64 range`,
    );
  }

  return parsedValue;
};

const parseBigIntString = (
  value: unknown,
  fieldName: string,
  methodName: string,
) =>
  parseCanonicalUint64String(
    assertString(value, fieldName, methodName),
    fieldName,
    methodName,
  );

// For fields where the far-future sentinel means "not set yet" (epochs only —
// see parseOptionalSafeNumberString for fields like index that have no such
// sentinel semantics).
const parseOptionalSafeEpochString = (
  value: unknown,
  fieldName: string,
  methodName: string,
) => {
  const rawValue = mapOptionalString(value, fieldName, methodName);

  if (rawValue === null) {
    return null;
  }

  const parsedValue = parseCanonicalUint64String(
    rawValue,
    fieldName,
    methodName,
  );

  if (parsedValue === BEACON_FAR_FUTURE_EPOCH) {
    return null;
  }

  if (parsedValue > MAX_SAFE_INTEGER_BIGINT) {
    throw new BeaconValidationError(
      `Beacon API returned an invalid response for ${methodName}: ${fieldName} exceeds MAX_SAFE_INTEGER`,
    );
  }

  return Number(parsedValue);
};

const parseOptionalSafeNumberString = (
  value: unknown,
  fieldName: string,
  methodName: string,
) => {
  const rawValue = mapOptionalString(value, fieldName, methodName);

  if (rawValue === null) {
    return null;
  }

  const parsedValue = parseCanonicalUint64String(
    rawValue,
    fieldName,
    methodName,
  );

  if (parsedValue > MAX_SAFE_INTEGER_BIGINT) {
    throw new BeaconValidationError(
      `Beacon API returned an invalid response for ${methodName}: ${fieldName} exceeds MAX_SAFE_INTEGER`,
    );
  }

  return Number(parsedValue);
};

const mapBeaconValidatorStatus = (
  status: unknown,
  methodName: string,
): BeaconValidatorStatus => {
  const normalizedStatus = assertString(status, 'status', methodName);

  switch (normalizedStatus) {
    case 'pending_initialized':
    case 'pending_queued':
      return 'pending';
    case 'active_ongoing':
    case 'active_exiting':
    case 'active_slashed':
      return 'active';
    case 'exited_unslashed':
    case 'exited_slashed':
      return 'exited';
    case 'withdrawal_possible':
    case 'withdrawal_done':
      return normalizedStatus;
    default:
      throw new BeaconValidationError(
        `Beacon API returned an invalid response for ${methodName}: unsupported status ${normalizedStatus}`,
      );
  }
};

const assertPositiveInteger = (
  value: number,
  fieldName: string,
  methodName: string,
) => {
  if (!Number.isInteger(value) || value <= 0) {
    throw new BeaconValidationError(
      `Invalid ${fieldName} for ${methodName}: expected a positive integer number of milliseconds`,
    );
  }

  return value;
};

// setTimeout (and AbortSignal-based timers built on it) silently clamps any
// delay above the 32-bit signed int max down to ~1ms instead of throwing, so
// a valid-looking multi-week value would fire almost immediately and busy-loop
// instead of waiting. This only applies to values that actually reach a timer
// (pollIntervalMs, requestTimeoutMs) — timeoutMs itself is just deadline
// arithmetic (Date.now() + timeoutMs) and can be arbitrarily large, since
// every timer derived from it is separately bounded by one of these two.
const MAX_TIMER_DELAY_MS = 2_147_483_647;

const assertPositiveTimerDelay = (
  value: number,
  fieldName: string,
  methodName: string,
) => {
  const validated = assertPositiveInteger(value, fieldName, methodName);

  if (validated > MAX_TIMER_DELAY_MS) {
    throw new BeaconValidationError(
      `Invalid ${fieldName} for ${methodName}: expected a positive integer number of milliseconds no greater than ${MAX_TIMER_DELAY_MS}`,
    );
  }

  return validated;
};

const sleep = (delayMs: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, delayMs);
  });

// Native AbortSignal.timeout() schedules through an internal timer rather
// than the global setTimeout, so it can't be advanced deterministically by
// swapping the timer implementation in tests. Building it from setTimeout
// keeps a stalled request abortable within the caller's time budget while
// staying controllable by such tests.
const createBudgetSignal = (budgetMs: number) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    controller.abort(
      new Error(`Beacon request exceeded its ${budgetMs}ms time budget`),
    );
  }, budgetMs);

  return {
    signal: controller.signal,
    dispose: () => clearTimeout(timeoutId),
  };
};

// 408/429/5xx and network-level failures (including our own attempt-timeout
// abort) are worth retrying; other 4xx statuses and response-validation
// failures are permanent for a given input and would otherwise spin silently
// until timeout, hiding the actionable error.
const RETRYABLE_HTTP_STATUSES = new Set([408, 429]);

const isRetryableActivationError = (error: unknown): boolean => {
  if (error instanceof BeaconValidationError) {
    return false;
  }

  if (error instanceof BeaconHttpError) {
    return RETRYABLE_HTTP_STATUSES.has(error.status) || error.status >= 500;
  }

  // undici's fetch throws a generic TypeError for a syntactically valid
  // endpoint on a Fetch-spec-blocked port (e.g. :25) — a permanent config
  // error masquerading as a network failure, with this exact cause message
  // as the only distinguishing signal. Deliberately narrow: every other
  // TypeError from fetch (DNS failures, connection resets, etc.) must stay
  // retryable, so only this specific cause is excluded, not TypeError as a
  // whole.
  // Error#cause is ES2022; this repo targets ES2020, so the type isn't on
  // the lib's Error/TypeError declarations even though Node sets it.
  const cause = (error as { cause?: unknown }).cause;

  if (
    error instanceof TypeError &&
    cause instanceof Error &&
    cause.message === 'bad port'
  ) {
    return false;
  }

  return true;
};

const describeActivationWaitState = (state: BeaconValidatorState | null) => {
  if (state === null) {
    return 'not found';
  }

  return `${getBeaconValidatorLifecycleStage(state)} (${state.rawStatus})`;
};

export const getBeaconValidatorLifecycleStage = (
  state: Pick<BeaconValidatorState, 'status'>,
): BeaconValidatorLifecycleStage => {
  switch (state.status) {
    case 'pending':
      return 'pending';
    case 'active':
      return 'active';
    case 'exited':
      return 'exited';
    case 'withdrawal_possible':
      return 'withdrawal_ready';
    case 'withdrawal_done':
      return 'withdrawn';
  }
};

const mapBeaconValidatorState = (
  validator: BeaconValidator,
  methodName: string,
): BeaconValidatorState => {
  if (typeof validator !== 'object' || validator === null) {
    throw new BeaconValidationError(
      `Beacon API returned an invalid response for ${methodName}`,
    );
  }

  if (typeof validator.validator !== 'object' || validator.validator === null) {
    throw new BeaconValidationError(
      `Beacon API returned an invalid response for ${methodName}: validator must be an object`,
    );
  }

  return {
    publicKey: assertBeaconPubkey(
      validator.validator.pubkey,
      'validator.pubkey',
      methodName,
    ),
    validatorIndex: parseOptionalSafeNumberString(
      validator.index,
      'index',
      methodName,
    ),
    status: mapBeaconValidatorStatus(validator.status, methodName),
    // Safe: mapBeaconValidatorStatus above already threw unless
    // validator.status is one of RawBeaconValidatorStatus's exact values.
    rawStatus: assertString(
      validator.status,
      'status',
      methodName,
    ) as RawBeaconValidatorStatus,
    balanceGwei: parseBigIntString(validator.balance, 'balance', methodName),
    effectiveBalanceGwei: parseBigIntString(
      validator.validator.effective_balance,
      'validator.effective_balance',
      methodName,
    ),
    slashed: assertBoolean(
      validator.validator.slashed,
      'validator.slashed',
      methodName,
    ),
    activationEligibilityEpoch: parseOptionalSafeEpochString(
      validator.validator.activation_eligibility_epoch,
      'validator.activation_eligibility_epoch',
      methodName,
    ),
    activationEpoch: parseOptionalSafeEpochString(
      validator.validator.activation_epoch,
      'validator.activation_epoch',
      methodName,
    ),
    exitEpoch: parseOptionalSafeEpochString(
      validator.validator.exit_epoch,
      'validator.exit_epoch',
      methodName,
    ),
    withdrawableEpoch: parseOptionalSafeEpochString(
      validator.validator.withdrawable_epoch,
      'validator.withdrawable_epoch',
      methodName,
    ),
  };
};

// Response-derived index keys are always canonical decimal (they're built via
// String(number)), but a caller-supplied index string might not be (e.g.
// '0012'). Canonicalize plain-decimal lookups so both sides match; pubkeys
// (0x-prefixed hex) never match the digits-only check and fall through
// to a plain case-insensitive compare.
const DECIMAL_LOOKUP_KEY_PATTERN = /^[0-9]+$/;

const toValidatorLookupKey = (validatorId: string) => {
  const normalized = validatorId.toLowerCase();
  return DECIMAL_LOOKUP_KEY_PATTERN.test(normalized)
    ? String(Number(normalized))
    : normalized;
};

// The spec allows any string as a validator id — an unmatched one simply
// returns no data, "but this will not cause an error" (spec's own words).
// A dot-segment id is the one shape that breaks that contract: '.' or '..'
// survives encodeURIComponent unchanged (dots aren't escaped), and the URL
// pathname setter's standard dot-segment normalization then turns the
// request into the unfiltered validators collection or an unrelated parent
// endpoint, silently expanding the query instead of just not matching.
const isDotSegmentValidatorId = (validatorId: string): boolean =>
  /^\.+$/.test(validatorId);

// A caller bypassing this SDK's own TS types via its compiled JS output can
// pass a non-string validatorId, and even a well-typed string can contain
// an unpaired UTF-16 surrogate that throws URIError from
// encodeURIComponent — both are plain TypeError/URIError,
// isRetryableActivationError's default, so left unchecked this retries a
// permanent input error for the entire timeoutMs instead of failing fast.
const assertEncodableValidatorId = (
  validatorId: unknown,
  methodName: string,
): void => {
  if (typeof validatorId !== 'string') {
    throw new BeaconValidationError(
      `${methodName} requires validatorId to be a string`,
    );
  }

  try {
    encodeURIComponent(validatorId);
  } catch {
    throw new BeaconValidationError(
      `${methodName} requires a well-formed validatorId (found an unpaired surrogate)`,
    );
  }
};

// Both the GET and POST validator-batch endpoints require unique transport
// ids; deduping here (rather than in getBeaconValidatorStates) keeps this a
// transport-only concern — per-input-position output alignment already comes
// from the lookup-map pass in getBeaconValidatorStates below, independent of
// how many times an id was repeated on the wire.
const dedupeValidatorIds = (validatorIds: string[]): string[] =>
  Array.from(new Set(validatorIds));

// Only ever called with a non-empty, deduped id list (getBeaconValidators
// early-returns before this point for an empty batch), so no empty-array case.
const getBeaconValidatorsURL = (endpoint: string, validatorIds: string[]) => {
  const url = buildBeaconURL(endpoint, BEACON_VALIDATORS_PATH);
  const idQuery = validatorIds
    .map((validatorId) => `id=${encodeURIComponent(validatorId)}`)
    .join('&');
  // Merge onto (rather than replace) any query the endpoint already carries.
  const existingQuery = url.search.replace(/^\?/, '');
  url.search = [existingQuery, idQuery].filter(Boolean).join('&');
  return url.toString();
};

const getBeaconValidatorsRequest = (
  endpoint: string,
  validatorIds: string[],
  signal?: AbortSignal,
): { url: string; init?: RequestInit } => {
  const url = getBeaconValidatorsURL(endpoint, validatorIds);

  // The GET endpoint's id[] query param is capped at 64 unique items by the
  // spec (maxItems: 64, and a documented 414 above that); long validator ids
  // can also exceed provider/proxy URL limits before that count is reached.
  // The POST body has no such count cap and exists precisely to support
  // larger batches.
  if (
    validatorIds.length <= BEACON_GET_VALIDATORS_MAX_COUNT &&
    url.length <= BEACON_GET_VALIDATORS_MAX_URL_LENGTH
  ) {
    return {
      url,
      init: signal ? { signal } : undefined,
    };
  }

  return {
    url: buildBeaconURL(endpoint, BEACON_VALIDATORS_PATH).toString(),
    init: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ids: validatorIds }),
      signal,
    },
  };
};

// Validates the response envelope only (has a `data` key, right JSON shape).
// Field-level shape (e.g. validator.pubkey, balance) is NOT checked here —
// use getBeaconValidatorState for a fully-validated, normalized read.
export const getBeaconValidator = async (
  endpoint: string | undefined,
  args: { validatorId: string; signal?: AbortSignal },
): Promise<BeaconValidator | null> => {
  if (!endpoint) {
    throw missingBeaconEndpointError();
  }

  assertEncodableValidatorId(args.validatorId, 'getBeaconValidator');

  if (args.validatorId.trim().length === 0) {
    throw new BeaconValidationError(
      'getBeaconValidator requires a non-empty validatorId; an empty value would request the unfiltered validator list instead',
    );
  }

  if (isDotSegmentValidatorId(args.validatorId)) {
    throw new BeaconValidationError(
      `getBeaconValidator requires a real validatorId, not a dot-segment value ('${args.validatorId}') that URL path normalization would silently redirect elsewhere`,
    );
  }

  assertFetchableBeaconEndpoint(endpoint, 'getBeaconValidator');

  const url = buildBeaconURL(
    endpoint,
    `${BEACON_VALIDATORS_PATH}/${encodeURIComponent(args.validatorId)}`,
  ).toString();
  const response = args.signal
    ? await fetch(url, { signal: args.signal })
    : await fetch(url);

  if (response.status === 404) {
    // Same rationale as the !response.ok branch below: without
    // failOnNotFound, this is the branch waitForBeaconValidatorActivation
    // takes on every poll until the validator appears, so it's the
    // higher-frequency path for an uncancelled body to accumulate on.
    await cancelResponseBody(response);
    return null;
  }

  if (!response.ok) {
    // Release the connection back to the pool instead of leaving the body
    // unconsumed — this path runs on every retried poll against an unhealthy
    // endpoint, so an uncancelled body here accumulates across a long wait.
    await cancelResponseBody(response);
    throw new BeaconHttpError(
      response.status,
      `Beacon API request failed for getBeaconValidator with status ${response.status}`,
    );
  }

  return assertBeaconData<BeaconValidator>(
    await parseBeaconJSON<BeaconValidator>(response, 'getBeaconValidator'),
    'getBeaconValidator',
  );
};

// Validates the response envelope and that `data` is an array — not each
// element's field-level shape. Use getBeaconValidatorStates for a fully
// validated, normalized, input-aligned read.
export const getBeaconValidators = async (
  endpoint: string | undefined,
  args: { validatorIds: string[]; signal?: AbortSignal },
): Promise<BeaconValidator[]> => {
  if (!endpoint) {
    throw missingBeaconEndpointError();
  }

  if (args.validatorIds.length === 0) {
    return [];
  }

  args.validatorIds.forEach((validatorId) =>
    assertEncodableValidatorId(validatorId, 'getBeaconValidators'),
  );

  if (
    args.validatorIds.some((validatorId) => validatorId.trim().length === 0)
  ) {
    throw new BeaconValidationError(
      'getBeaconValidators requires every validatorId to be non-empty',
    );
  }

  if (args.validatorIds.some(isDotSegmentValidatorId)) {
    throw new BeaconValidationError(
      'getBeaconValidators requires every validatorId to be a real id, not a dot-segment value that URL path normalization would silently redirect elsewhere',
    );
  }

  assertFetchableBeaconEndpoint(endpoint, 'getBeaconValidators');

  const dedupedValidatorIds = dedupeValidatorIds(args.validatorIds);
  const request = getBeaconValidatorsRequest(
    endpoint,
    dedupedValidatorIds,
    args.signal,
  );
  const response = request.init
    ? await fetch(request.url, request.init)
    : await fetch(request.url);

  // Unlike the single-validator route, the batch route returns 200 with a
  // filtered (possibly empty) list for validators that don't exist. A 404
  // here means the state/route itself is wrong (e.g. misconfigured
  // endpoint), so it must not be swallowed into an empty result.
  if (!response.ok) {
    await cancelResponseBody(response);
    throw new BeaconHttpError(
      response.status,
      `Beacon API request failed for getBeaconValidators with status ${response.status}`,
    );
  }

  const data = assertBeaconData<BeaconValidator[]>(
    await parseBeaconJSON<BeaconValidator[]>(response, 'getBeaconValidators'),
    'getBeaconValidators',
  );

  if (!Array.isArray(data)) {
    throw new BeaconValidationError(
      'Beacon API returned an invalid response for getBeaconValidators',
    );
  }

  return data;
};

export const getBeaconValidatorState = async (
  endpoint: string | undefined,
  args: { validatorId: string; signal?: AbortSignal },
): Promise<BeaconValidatorState | null> => {
  const validator = await getBeaconValidator(endpoint, args);

  if (validator === null) {
    return null;
  }

  return mapBeaconValidatorState(validator, 'getBeaconValidatorState');
};

export const getBeaconValidatorStates = async (
  endpoint: string | undefined,
  args: { validatorIds: string[]; signal?: AbortSignal },
): Promise<Array<BeaconValidatorState | null>> => {
  const validators = await getBeaconValidators(endpoint, args);
  const validatorsById = new Map<string, BeaconValidatorState>();

  for (const validator of validators) {
    const normalizedValidator = mapBeaconValidatorState(
      validator,
      'getBeaconValidatorStates',
    );

    validatorsById.set(
      toValidatorLookupKey(normalizedValidator.publicKey),
      normalizedValidator,
    );

    if (normalizedValidator.validatorIndex !== null) {
      validatorsById.set(
        toValidatorLookupKey(String(normalizedValidator.validatorIndex)),
        normalizedValidator,
      );
    }
  }

  return args.validatorIds.map(
    (validatorId) =>
      validatorsById.get(toValidatorLookupKey(validatorId)) ?? null,
  );
};

export const waitForBeaconValidatorActivation = async (
  endpoint: string | undefined,
  args: WaitForBeaconValidatorActivationArgs,
): Promise<BeaconValidatorState> => {
  if (!endpoint) {
    throw missingBeaconEndpointError();
  }

  const methodName = 'waitForBeaconValidatorActivation';

  // Without this, a malformed/unfetchable endpoint throws a plain TypeError
  // from the first poll's fetch, which isRetryableActivationError treats as
  // retryable by default — silently retrying a failure that can never
  // succeed for the entire timeoutMs instead of failing immediately. This
  // deliberately doesn't cover every way fetch can reject a syntactically
  // valid endpoint (e.g. a Fetch-spec-blocked port) — those are handled in
  // isRetryableActivationError instead, since they can only be observed by
  // actually attempting the request.
  assertFetchableBeaconEndpoint(endpoint, methodName);

  // pollIntervalMs/requestTimeoutMs are passed to setTimeout-based timers and
  // so are bounded by MAX_TIMER_DELAY_MS; timeoutMs is only ever used for
  // Date.now()-based deadline arithmetic and can be arbitrarily large.
  const pollIntervalMs = assertPositiveTimerDelay(
    args.pollIntervalMs,
    'pollIntervalMs',
    methodName,
  );
  const timeoutMs = assertPositiveInteger(
    args.timeoutMs,
    'timeoutMs',
    methodName,
  );
  const requestTimeoutMs = assertPositiveTimerDelay(
    args.requestTimeoutMs ?? DEFAULT_REQUEST_TIMEOUT_MS,
    'requestTimeoutMs',
    methodName,
  );
  const deadline = Date.now() + timeoutMs;
  let lastObservedState: BeaconValidatorState | null = null;
  let lastRetryableError: unknown = null;

  const timeoutError = () =>
    lastRetryableError ??
    new Error(
      `Timed out waiting for beacon validator activation for ${args.validatorId} after ${timeoutMs}ms; last observed state: ${describeActivationWaitState(lastObservedState)}`,
    );

  for (;;) {
    const remainingBudgetMs = deadline - Date.now();

    if (remainingBudgetMs <= 0) {
      throw timeoutError();
    }

    // Bound each attempt by the smaller of the remaining deadline and
    // requestTimeoutMs — not the full remaining budget — so a single stalled
    // request can't consume the entire wait with zero retries in between.
    const attemptBudgetMs = Math.min(remainingBudgetMs, requestTimeoutMs);
    const { signal, dispose } = createBudgetSignal(attemptBudgetMs);
    let state: BeaconValidatorState | null;

    try {
      state = await getBeaconValidatorState(endpoint, {
        validatorId: args.validatorId,
        signal,
      });
    } catch (error) {
      if (!isRetryableActivationError(error)) {
        throw error;
      }

      lastRetryableError = error;

      const remainingMs = deadline - Date.now();

      if (remainingMs <= 0) {
        throw error;
      }

      await sleep(Math.min(pollIntervalMs, remainingMs));
      continue;
    } finally {
      dispose();
    }

    lastRetryableError = null;
    lastObservedState = state;

    if (state === null && args.failOnNotFound) {
      throw new Error(
        `Beacon validator ${args.validatorId} was not found while waiting for activation`,
      );
    }

    if (state !== null) {
      const lifecycleStage = getBeaconValidatorLifecycleStage(state);

      if (lifecycleStage === 'active') {
        return state;
      }

      if (lifecycleStage !== 'pending') {
        throw new Error(
          `Beacon validator ${args.validatorId} reached terminal stage ${lifecycleStage} before activation`,
        );
      }
    }

    const remainingMs = deadline - Date.now();

    if (remainingMs <= 0) {
      throw timeoutError();
    }

    await sleep(Math.min(pollIntervalMs, remainingMs));
  }
};

export const getBeaconAPI = (endpoint?: string) => ({
  getBeaconValidator: getBeaconValidator.bind(null, endpoint),
  getBeaconValidators: getBeaconValidators.bind(null, endpoint),
  getBeaconValidatorState: getBeaconValidatorState.bind(null, endpoint),
  getBeaconValidatorStates: getBeaconValidatorStates.bind(null, endpoint),
  getBeaconValidatorLifecycleStage,
  waitForBeaconValidatorActivation: waitForBeaconValidatorActivation.bind(
    null,
    endpoint,
  ),
});
