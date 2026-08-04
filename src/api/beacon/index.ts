import join from '@/utils/url-join';

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

const assertString = (value: unknown, fieldName: string, methodName: string) => {
  if (typeof value !== 'string') {
    throw new BeaconValidationError(
      `Beacon API returned an invalid response for ${methodName}: ${fieldName} must be a string`,
    );
  }

  return value;
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

  const parsedValue = parseCanonicalUint64String(rawValue, fieldName, methodName);

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

  const parsedValue = parseCanonicalUint64String(rawValue, fieldName, methodName);

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
    controller.abort(new Error(`Beacon request exceeded its ${budgetMs}ms time budget`));
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
    publicKey: assertString(validator.validator.pubkey, 'validator.pubkey', methodName),
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
    slashed: assertBoolean(validator.validator.slashed, 'validator.slashed', methodName),
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

const toValidatorLookupKey = (validatorId: string) => validatorId.toLowerCase();

// Both the GET and POST validator-batch endpoints require unique transport
// ids; deduping here (rather than in getBeaconValidatorStates) keeps this a
// transport-only concern — per-input-position output alignment already comes
// from the lookup-map pass in getBeaconValidatorStates below, independent of
// how many times an id was repeated on the wire.
const dedupeValidatorIds = (validatorIds: string[]): string[] =>
  Array.from(new Set(validatorIds));

// Only ever called with a non-empty, deduped id list (getBeaconValidators
// early-returns before this point for an empty batch), so no empty-array case.
const getBeaconValidatorsURL = (endpoint: string, validatorIds: string[]) =>
  `${join(endpoint, BEACON_VALIDATORS_PATH)}?${validatorIds
    .map((validatorId) => `id=${encodeURIComponent(validatorId)}`)
    .join('&')}`;

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
    url: join(endpoint, BEACON_VALIDATORS_PATH),
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

  if (args.validatorId.trim().length === 0) {
    throw new BeaconValidationError(
      'getBeaconValidator requires a non-empty validatorId; an empty value would request the unfiltered validator list instead',
    );
  }

  const url = join(
    endpoint,
    `/eth/v1/beacon/states/head/validators/${encodeURIComponent(args.validatorId)}`,
  );
  const response = args.signal
    ? await fetch(url, { signal: args.signal })
    : await fetch(url);

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
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

  if (args.validatorIds.some((validatorId) => validatorId.trim().length === 0)) {
    throw new BeaconValidationError(
      'getBeaconValidators requires every validatorId to be non-empty',
    );
  }

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
    (validatorId) => validatorsById.get(toValidatorLookupKey(validatorId)) ?? null,
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
  const pollIntervalMs = assertPositiveInteger(
    args.pollIntervalMs,
    'pollIntervalMs',
    methodName,
  );
  const timeoutMs = assertPositiveInteger(args.timeoutMs, 'timeoutMs', methodName);
  const requestTimeoutMs = assertPositiveInteger(
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

  while (true) {
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
