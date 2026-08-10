"use strict";
const lodashEs = require("lodash-es");
const viem = require("viem");
require("graphql-request");
const zod = require("zod");
class BeaconHttpError extends Error {
  status;
  constructor(status, message) {
    super(message);
    this.name = "BeaconHttpError";
    this.status = status;
  }
}
class BeaconValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "BeaconValidationError";
  }
}
const BEACON_FAR_FUTURE_EPOCH = 18446744073709551615n;
const MAX_SAFE_INTEGER_BIGINT = BigInt(Number.MAX_SAFE_INTEGER);
const BEACON_VALIDATORS_PATH = "/eth/v1/beacon/states/head/validators";
const BEACON_GET_VALIDATORS_MAX_URL_LENGTH = 7e3;
const BEACON_GET_VALIDATORS_MAX_COUNT = 64;
const DEFAULT_REQUEST_TIMEOUT_MS = 1e4;
const buildBeaconURL = (endpoint, path) => {
  const url = new URL(endpoint);
  url.pathname = `${url.pathname.replace(/\/+$/, "")}${path}`;
  return url;
};
const assertFetchableBeaconEndpoint = (endpoint, methodName) => {
  let reportableEndpoint = "(unparseable endpoint omitted to avoid leaking embedded credentials)";
  try {
    const url = buildBeaconURL(endpoint, BEACON_VALIDATORS_PATH);
    if (url.origin !== "null") {
      reportableEndpoint = `${url.origin}${BEACON_VALIDATORS_PATH}`;
    }
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      throw new Error("unsupported protocol");
    }
    new Request(url);
  } catch {
    throw new BeaconValidationError(
      `Invalid beacon endpoint for ${methodName}: ${reportableEndpoint}`
    );
  }
};
const cancelResponseBody = async (response) => {
  try {
    await response.body?.cancel();
  } catch {
  }
};
const missingBeaconEndpointError = () => new Error(
  "Beacon endpoint is not configured. Provide extendedConfig.beacon.endpoint in SDK config."
);
const assertBeaconData = (payload, methodName) => {
  if (typeof payload !== "object" || payload === null || !("data" in payload)) {
    throw new BeaconValidationError(
      `Beacon API returned an invalid response for ${methodName}`
    );
  }
  if (payload.data === null || typeof payload.data === "undefined") {
    throw new BeaconValidationError(
      `Beacon API response is missing data for ${methodName}`
    );
  }
  return payload.data;
};
const parseBeaconJSON = async (response, methodName) => {
  try {
    return await response.json();
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new BeaconValidationError(
        `Beacon API returned invalid JSON for ${methodName}`
      );
    }
    throw error;
  }
};
const assertString = (value, fieldName, methodName) => {
  if (typeof value !== "string") {
    throw new BeaconValidationError(
      `Beacon API returned an invalid response for ${methodName}: ${fieldName} must be a string`
    );
  }
  return value;
};
const BEACON_PUBKEY_PATTERN = /^0x[a-fA-F0-9]{96}$/;
const assertBeaconPubkey = (value, fieldName, methodName) => {
  const rawValue = assertString(value, fieldName, methodName);
  if (!BEACON_PUBKEY_PATTERN.test(rawValue)) {
    throw new BeaconValidationError(
      `Beacon API returned an invalid response for ${methodName}: ${fieldName} must be a 0x-prefixed 48-byte hex string`
    );
  }
  return rawValue;
};
const assertBoolean = (value, fieldName, methodName) => {
  if (typeof value !== "boolean") {
    throw new BeaconValidationError(
      `Beacon API returned an invalid response for ${methodName}: ${fieldName} must be a boolean`
    );
  }
  return value;
};
const mapOptionalString = (value, fieldName, methodName) => {
  if (typeof value === "undefined" || value === null) {
    return null;
  }
  return assertString(value, fieldName, methodName);
};
const CANONICAL_UNSIGNED_INTEGER_PATTERN = /^(0|[1-9][0-9]{0,19})$/;
const parseCanonicalUint64String = (rawValue, fieldName, methodName) => {
  if (!CANONICAL_UNSIGNED_INTEGER_PATTERN.test(rawValue)) {
    throw new BeaconValidationError(
      `Beacon API returned an invalid response for ${methodName}: ${fieldName} must be a canonical non-negative integer string`
    );
  }
  const parsedValue = BigInt(rawValue);
  if (parsedValue > BEACON_FAR_FUTURE_EPOCH) {
    throw new BeaconValidationError(
      `Beacon API returned an invalid response for ${methodName}: ${fieldName} exceeds the uint64 range`
    );
  }
  return parsedValue;
};
const parseBigIntString = (value, fieldName, methodName) => parseCanonicalUint64String(
  assertString(value, fieldName, methodName),
  fieldName,
  methodName
);
const parseOptionalSafeEpochString = (value, fieldName, methodName) => {
  const rawValue = mapOptionalString(value, fieldName, methodName);
  if (rawValue === null) {
    return null;
  }
  const parsedValue = parseCanonicalUint64String(
    rawValue,
    fieldName,
    methodName
  );
  if (parsedValue === BEACON_FAR_FUTURE_EPOCH) {
    return null;
  }
  if (parsedValue > MAX_SAFE_INTEGER_BIGINT) {
    throw new BeaconValidationError(
      `Beacon API returned an invalid response for ${methodName}: ${fieldName} exceeds MAX_SAFE_INTEGER`
    );
  }
  return Number(parsedValue);
};
const parseOptionalSafeNumberString = (value, fieldName, methodName) => {
  const rawValue = mapOptionalString(value, fieldName, methodName);
  if (rawValue === null) {
    return null;
  }
  const parsedValue = parseCanonicalUint64String(
    rawValue,
    fieldName,
    methodName
  );
  if (parsedValue > MAX_SAFE_INTEGER_BIGINT) {
    throw new BeaconValidationError(
      `Beacon API returned an invalid response for ${methodName}: ${fieldName} exceeds MAX_SAFE_INTEGER`
    );
  }
  return Number(parsedValue);
};
const mapBeaconValidatorStatus = (status, methodName) => {
  const normalizedStatus = assertString(status, "status", methodName);
  switch (normalizedStatus) {
    case "pending_initialized":
    case "pending_queued":
      return "pending";
    case "active_ongoing":
    case "active_exiting":
    case "active_slashed":
      return "active";
    case "exited_unslashed":
    case "exited_slashed":
      return "exited";
    case "withdrawal_possible":
    case "withdrawal_done":
      return normalizedStatus;
    default:
      throw new BeaconValidationError(
        `Beacon API returned an invalid response for ${methodName}: unsupported status ${normalizedStatus}`
      );
  }
};
const assertPositiveInteger = (value, fieldName, methodName) => {
  if (!Number.isInteger(value) || value <= 0) {
    throw new BeaconValidationError(
      `Invalid ${fieldName} for ${methodName}: expected a positive integer number of milliseconds`
    );
  }
  return value;
};
const MAX_TIMER_DELAY_MS = 2147483647;
const assertPositiveTimerDelay = (value, fieldName, methodName) => {
  const validated = assertPositiveInteger(value, fieldName, methodName);
  if (validated > MAX_TIMER_DELAY_MS) {
    throw new BeaconValidationError(
      `Invalid ${fieldName} for ${methodName}: expected a positive integer number of milliseconds no greater than ${MAX_TIMER_DELAY_MS}`
    );
  }
  return validated;
};
const sleep = (delayMs) => new Promise((resolve) => {
  setTimeout(resolve, delayMs);
});
const createBudgetSignal = (budgetMs) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    controller.abort(
      new Error(`Beacon request exceeded its ${budgetMs}ms time budget`)
    );
  }, budgetMs);
  return {
    signal: controller.signal,
    dispose: () => clearTimeout(timeoutId)
  };
};
const RETRYABLE_HTTP_STATUSES = /* @__PURE__ */ new Set([408, 429]);
const isRetryableActivationError = (error) => {
  if (error instanceof BeaconValidationError) {
    return false;
  }
  if (error instanceof BeaconHttpError) {
    return RETRYABLE_HTTP_STATUSES.has(error.status) || error.status >= 500;
  }
  const cause = error.cause;
  if (error instanceof TypeError && cause instanceof Error && cause.message === "bad port") {
    return false;
  }
  return true;
};
const describeActivationWaitState = (state) => {
  if (state === null) {
    return "not found";
  }
  return `${getBeaconValidatorLifecycleStage(state)} (${state.rawStatus})`;
};
const getBeaconValidatorLifecycleStage = (state) => {
  switch (state.status) {
    case "pending":
      return "pending";
    case "active":
      return "active";
    case "exited":
      return "exited";
    case "withdrawal_possible":
      return "withdrawal_ready";
    case "withdrawal_done":
      return "withdrawn";
  }
};
const mapBeaconValidatorState = (validator, methodName) => {
  if (typeof validator !== "object" || validator === null) {
    throw new BeaconValidationError(
      `Beacon API returned an invalid response for ${methodName}`
    );
  }
  if (typeof validator.validator !== "object" || validator.validator === null) {
    throw new BeaconValidationError(
      `Beacon API returned an invalid response for ${methodName}: validator must be an object`
    );
  }
  return {
    publicKey: assertBeaconPubkey(
      validator.validator.pubkey,
      "validator.pubkey",
      methodName
    ),
    validatorIndex: parseOptionalSafeNumberString(
      validator.index,
      "index",
      methodName
    ),
    status: mapBeaconValidatorStatus(validator.status, methodName),
    // Safe: mapBeaconValidatorStatus above already threw unless
    // validator.status is one of RawBeaconValidatorStatus's exact values.
    rawStatus: assertString(
      validator.status,
      "status",
      methodName
    ),
    balanceGwei: parseBigIntString(validator.balance, "balance", methodName),
    effectiveBalanceGwei: parseBigIntString(
      validator.validator.effective_balance,
      "validator.effective_balance",
      methodName
    ),
    slashed: assertBoolean(
      validator.validator.slashed,
      "validator.slashed",
      methodName
    ),
    activationEligibilityEpoch: parseOptionalSafeEpochString(
      validator.validator.activation_eligibility_epoch,
      "validator.activation_eligibility_epoch",
      methodName
    ),
    activationEpoch: parseOptionalSafeEpochString(
      validator.validator.activation_epoch,
      "validator.activation_epoch",
      methodName
    ),
    exitEpoch: parseOptionalSafeEpochString(
      validator.validator.exit_epoch,
      "validator.exit_epoch",
      methodName
    ),
    withdrawableEpoch: parseOptionalSafeEpochString(
      validator.validator.withdrawable_epoch,
      "validator.withdrawable_epoch",
      methodName
    )
  };
};
const DECIMAL_LOOKUP_KEY_PATTERN = /^[0-9]+$/;
const toValidatorLookupKey = (validatorId) => {
  const normalized = validatorId.toLowerCase();
  return DECIMAL_LOOKUP_KEY_PATTERN.test(normalized) ? String(Number(normalized)) : normalized;
};
const isDotSegmentValidatorId = (validatorId) => /^\.+$/.test(validatorId);
const assertEncodableValidatorId = (validatorId, methodName) => {
  if (typeof validatorId !== "string") {
    throw new BeaconValidationError(
      `${methodName} requires validatorId to be a string`
    );
  }
  try {
    encodeURIComponent(validatorId);
  } catch {
    throw new BeaconValidationError(
      `${methodName} requires a well-formed validatorId (found an unpaired surrogate)`
    );
  }
};
const dedupeValidatorIds = (validatorIds) => Array.from(new Set(validatorIds));
const getBeaconValidatorsURL = (endpoint, validatorIds) => {
  const url = buildBeaconURL(endpoint, BEACON_VALIDATORS_PATH);
  const idQuery = validatorIds.map((validatorId) => `id=${encodeURIComponent(validatorId)}`).join("&");
  const existingQuery = url.search.replace(/^\?/, "");
  url.search = [existingQuery, idQuery].filter(Boolean).join("&");
  return url.toString();
};
const getBeaconValidatorsRequest = (endpoint, validatorIds, signal) => {
  const url = getBeaconValidatorsURL(endpoint, validatorIds);
  if (validatorIds.length <= BEACON_GET_VALIDATORS_MAX_COUNT && url.length <= BEACON_GET_VALIDATORS_MAX_URL_LENGTH) {
    return {
      url,
      init: signal ? { signal } : void 0
    };
  }
  return {
    url: buildBeaconURL(endpoint, BEACON_VALIDATORS_PATH).toString(),
    init: {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ids: validatorIds }),
      signal
    }
  };
};
const getBeaconValidator = async (endpoint, args) => {
  if (!endpoint) {
    throw missingBeaconEndpointError();
  }
  assertEncodableValidatorId(args.validatorId, "getBeaconValidator");
  if (args.validatorId.trim().length === 0) {
    throw new BeaconValidationError(
      "getBeaconValidator requires a non-empty validatorId; an empty value would request the unfiltered validator list instead"
    );
  }
  if (isDotSegmentValidatorId(args.validatorId)) {
    throw new BeaconValidationError(
      `getBeaconValidator requires a real validatorId, not a dot-segment value ('${args.validatorId}') that URL path normalization would silently redirect elsewhere`
    );
  }
  assertFetchableBeaconEndpoint(endpoint, "getBeaconValidator");
  const url = buildBeaconURL(
    endpoint,
    `${BEACON_VALIDATORS_PATH}/${encodeURIComponent(args.validatorId)}`
  ).toString();
  const response = args.signal ? await fetch(url, { signal: args.signal }) : await fetch(url);
  if (response.status === 404) {
    await cancelResponseBody(response);
    return null;
  }
  if (!response.ok) {
    await cancelResponseBody(response);
    throw new BeaconHttpError(
      response.status,
      `Beacon API request failed for getBeaconValidator with status ${response.status}`
    );
  }
  return assertBeaconData(
    await parseBeaconJSON(response, "getBeaconValidator"),
    "getBeaconValidator"
  );
};
const getBeaconValidators = async (endpoint, args) => {
  if (!endpoint) {
    throw missingBeaconEndpointError();
  }
  if (args.validatorIds.length === 0) {
    return [];
  }
  args.validatorIds.forEach(
    (validatorId) => assertEncodableValidatorId(validatorId, "getBeaconValidators")
  );
  if (args.validatorIds.some((validatorId) => validatorId.trim().length === 0)) {
    throw new BeaconValidationError(
      "getBeaconValidators requires every validatorId to be non-empty"
    );
  }
  if (args.validatorIds.some(isDotSegmentValidatorId)) {
    throw new BeaconValidationError(
      "getBeaconValidators requires every validatorId to be a real id, not a dot-segment value that URL path normalization would silently redirect elsewhere"
    );
  }
  assertFetchableBeaconEndpoint(endpoint, "getBeaconValidators");
  const dedupedValidatorIds = dedupeValidatorIds(args.validatorIds);
  const request = getBeaconValidatorsRequest(
    endpoint,
    dedupedValidatorIds,
    args.signal
  );
  const response = request.init ? await fetch(request.url, request.init) : await fetch(request.url);
  if (!response.ok) {
    await cancelResponseBody(response);
    throw new BeaconHttpError(
      response.status,
      `Beacon API request failed for getBeaconValidators with status ${response.status}`
    );
  }
  const data = assertBeaconData(
    await parseBeaconJSON(response, "getBeaconValidators"),
    "getBeaconValidators"
  );
  if (!Array.isArray(data)) {
    throw new BeaconValidationError(
      "Beacon API returned an invalid response for getBeaconValidators"
    );
  }
  return data;
};
const getBeaconValidatorState = async (endpoint, args) => {
  const validator = await getBeaconValidator(endpoint, args);
  if (validator === null) {
    return null;
  }
  return mapBeaconValidatorState(validator, "getBeaconValidatorState");
};
const getBeaconValidatorStates = async (endpoint, args) => {
  const validators = await getBeaconValidators(endpoint, args);
  const validatorsById = /* @__PURE__ */ new Map();
  for (const validator of validators) {
    const normalizedValidator = mapBeaconValidatorState(
      validator,
      "getBeaconValidatorStates"
    );
    validatorsById.set(
      toValidatorLookupKey(normalizedValidator.publicKey),
      normalizedValidator
    );
    if (normalizedValidator.validatorIndex !== null) {
      validatorsById.set(
        toValidatorLookupKey(String(normalizedValidator.validatorIndex)),
        normalizedValidator
      );
    }
  }
  return args.validatorIds.map(
    (validatorId) => validatorsById.get(toValidatorLookupKey(validatorId)) ?? null
  );
};
const waitForBeaconValidatorActivation = async (endpoint, args) => {
  if (!endpoint) {
    throw missingBeaconEndpointError();
  }
  const methodName = "waitForBeaconValidatorActivation";
  assertFetchableBeaconEndpoint(endpoint, methodName);
  const pollIntervalMs = assertPositiveTimerDelay(
    args.pollIntervalMs,
    "pollIntervalMs",
    methodName
  );
  const timeoutMs = assertPositiveInteger(
    args.timeoutMs,
    "timeoutMs",
    methodName
  );
  const requestTimeoutMs = assertPositiveTimerDelay(
    args.requestTimeoutMs ?? DEFAULT_REQUEST_TIMEOUT_MS,
    "requestTimeoutMs",
    methodName
  );
  const deadline = Date.now() + timeoutMs;
  let lastObservedState = null;
  let lastRetryableError = null;
  const timeoutError = () => lastRetryableError ?? new Error(
    `Timed out waiting for beacon validator activation for ${args.validatorId} after ${timeoutMs}ms; last observed state: ${describeActivationWaitState(lastObservedState)}`
  );
  for (; ; ) {
    const remainingBudgetMs = deadline - Date.now();
    if (remainingBudgetMs <= 0) {
      throw timeoutError();
    }
    const attemptBudgetMs = Math.min(remainingBudgetMs, requestTimeoutMs);
    const { signal, dispose } = createBudgetSignal(attemptBudgetMs);
    let state;
    try {
      state = await getBeaconValidatorState(endpoint, {
        validatorId: args.validatorId,
        signal
      });
    } catch (error) {
      if (!isRetryableActivationError(error)) {
        throw error;
      }
      lastRetryableError = error;
      const remainingMs2 = deadline - Date.now();
      if (remainingMs2 <= 0) {
        throw error;
      }
      await sleep(Math.min(pollIntervalMs, remainingMs2));
      continue;
    } finally {
      dispose();
    }
    lastRetryableError = null;
    lastObservedState = state;
    if (state === null && args.failOnNotFound) {
      throw new Error(
        `Beacon validator ${args.validatorId} was not found while waiting for activation`
      );
    }
    if (state !== null) {
      const lifecycleStage = getBeaconValidatorLifecycleStage(state);
      if (lifecycleStage === "active") {
        return state;
      }
      if (lifecycleStage !== "pending") {
        throw new Error(
          `Beacon validator ${args.validatorId} reached terminal stage ${lifecycleStage} before activation`
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
const getBeaconAPI = (endpoint) => ({
  getBeaconValidator: getBeaconValidator.bind(null, endpoint),
  getBeaconValidators: getBeaconValidators.bind(null, endpoint),
  getBeaconValidatorState: getBeaconValidatorState.bind(null, endpoint),
  getBeaconValidatorStates: getBeaconValidatorStates.bind(null, endpoint),
  getBeaconValidatorLifecycleStage,
  waitForBeaconValidatorActivation: waitForBeaconValidatorActivation.bind(
    null,
    endpoint
  )
});
const numberFormatter = new Intl.NumberFormat("en-US", {
  useGrouping: true,
  maximumFractionDigits: 2
});
const _percentageFormatter = new Intl.NumberFormat("en-US", {
  style: "percent",
  maximumFractionDigits: 2
});
const percentageFormatter = {
  format: (value) => {
    if (!value) return "0%";
    return _percentageFormatter.format(value / 100);
  }
};
const bigintFormatter = new Intl.NumberFormat("en-US", {
  useGrouping: false,
  maximumFractionDigits: 7
});
const ethFormatter = new Intl.NumberFormat("en-US", {
  useGrouping: true,
  maximumFractionDigits: 4
});
const formatSSV = (num, decimals = 18) => ethFormatter.format(+viem.formatUnits(num, decimals));
const formatBigintInput = (num, decimals = 18) => bigintFormatter.format(+viem.formatUnits(num, decimals));
const units = {
  seconds: 1e3,
  minutes: 6e4,
  hours: 36e5,
  days: 864e5,
  weeks: 6048e5,
  months: 2629746e3,
  years: 31556952e3
};
const ms = (value, unit) => {
  return value * units[unit];
};
const sortNumbers = (numbers) => {
  return [...numbers].sort((a, b) => Number(a) - Number(b));
};
const getOperatorIds = (operators) => {
  return sortNumbers(operators.map((operator) => operator.id));
};
const decodeOperatorPublicKey = (publicKey) => {
  return viem.decodeAbiParameters([{ type: "string" }], publicKey)[0];
};
function defineChain(chain) {
  return {
    formatters: void 0,
    fees: void 0,
    serializers: void 0,
    ...chain
  };
}
const mainnet = /* @__PURE__ */ defineChain({
  id: 1,
  name: "Ethereum",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  blockTime: 12e3,
  rpcUrls: {
    default: {
      http: ["https://eth.merkle.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://etherscan.io",
      apiUrl: "https://api.etherscan.io/api"
    }
  },
  contracts: {
    ensUniversalResolver: {
      address: "0xeeeeeeee14d718c2b47d9923deab1335e144eeee",
      blockCreated: 23085558
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601
    }
  }
});
const hoodi = viem.defineChain({
  id: 560048,
  name: "Hoodi",
  rpcUrls: {
    default: {
      http: ["https://rpc.hoodi.ethpandaops.io"]
    }
  },
  nativeCurrency: {
    name: "Hoodi Ether",
    symbol: "ETH",
    decimals: 18
  },
  testnet: true
});
const chains = {
  mainnet,
  hoodi
};
const chainIds = Object.values(chains).map((chain) => chain.id);
const networks = Object.values(chains).map((chain) => chain.name);
const graph_endpoints = {
  [mainnet.id]: "https://api.studio.thegraph.com/query/71118/ssv-network-ethereum/version/latest",
  [hoodi.id]: "https://api.studio.thegraph.com/query/71118/ssv-network-hoodi/version/latest"
};
const paid_graph_endpoints = {
  [mainnet.id]: "https://gateway.thegraph.com/api/subgraphs/id/7V45fKPugp9psQjgrGsfif98gWzCyC6ChN7CW98VyQnr",
  [hoodi.id]: "https://gateway.thegraph.com/api/subgraphs/id/F4AU5vPCuKfHvnLsusibxJEiTN7ELCoYTvnzg3YHGYbh"
};
const rest_endpoints = {
  [mainnet.id]: "https://api.ssv.network/api/v4/mainnet",
  [hoodi.id]: "https://api.ssv.network/api/v4/hoodi"
};
const contracts = {
  [mainnet.id]: {
    setter: "0xDD9BC35aE942eF0cFa76930954a156B3fF30a4E1",
    getter: "0xafE830B6Ee262ba11cce5F32fDCd760FFE6a66e4",
    token: "0x9D65fF81a3c488d585bBfb0Bfe3c7707c7917f54"
  },
  [hoodi.id]: {
    setter: "0x58410Bef803ECd7E63B23664C586A6DB72DAf59c",
    getter: "0x5AdDb3f1529C5ec70D77400499eE4bbF328368fe",
    token: "0x9F5d4Ec84fC4785788aB44F9de973cF34F7A038e"
  }
};
const globals = {
  MAX_WEI_AMOUNT: 115792089237316195423570985008687907853269984665640564039457584007913129639935n,
  CLUSTER_SIZES: {
    QUAD_CLUSTER: 4,
    SEPT_CLUSTER: 7,
    DECA_CLUSTER: 10,
    TRISKAIDEKA_CLUSTER: 13
  },
  FIXED_VALIDATORS_COUNT_PER_CLUSTER_SIZE: {
    QUAD_CLUSTER: 80,
    SEPT_CLUSTER: 40,
    DECA_CLUSTER: 30,
    TRISKAIDEKA_CLUSTER: 20
  },
  BLOCKS_PER_DAY: 7200n,
  OPERATORS_PER_PAGE: 50,
  BLOCKS_PER_YEAR: 2628000n,
  DEFAULT_CLUSTER_PERIOD: 730,
  NUMBERS_OF_WEEKS_IN_YEAR: 52.1429,
  MAX_VALIDATORS_COUNT_MULTI_FLOW: 50,
  CLUSTER_VALIDITY_PERIOD_MINIMUM: 30,
  OPERATOR_VALIDATORS_LIMIT_PRESERVE: 5,
  SSV_DEDUCTED_DIGITS: 10000000n,
  ETH_DEDUCTED_DIGITS: 100000n,
  MINIMUM_OPERATOR_FEE_PER_BLOCK: 1000000000n,
  MIN_VALIDATORS_COUNT_PER_BULK_REGISTRATION: 1,
  DEFAULT_ADDRESS_WHITELIST: "0x0000000000000000000000000000000000000000",
  VUNITS_PRECISION: 1e4
};
const registerValidatorsByClusterSizeLimits = {
  [globals.CLUSTER_SIZES.QUAD_CLUSTER]: globals.FIXED_VALIDATORS_COUNT_PER_CLUSTER_SIZE.QUAD_CLUSTER,
  [globals.CLUSTER_SIZES.SEPT_CLUSTER]: globals.FIXED_VALIDATORS_COUNT_PER_CLUSTER_SIZE.SEPT_CLUSTER,
  [globals.CLUSTER_SIZES.DECA_CLUSTER]: globals.FIXED_VALIDATORS_COUNT_PER_CLUSTER_SIZE.DECA_CLUSTER,
  [globals.CLUSTER_SIZES.TRISKAIDEKA_CLUSTER]: globals.FIXED_VALIDATORS_COUNT_PER_CLUSTER_SIZE.TRISKAIDEKA_CLUSTER
};
const bigintMax = (...args) => {
  return args.filter((x) => !lodashEs.isUndefined(x)).reduce((max, cur) => cur > max ? cur : max);
};
const bigintMin = (...args) => {
  return args.filter((x) => !lodashEs.isUndefined(x)).reduce((min, cur) => cur < min ? cur : min);
};
const bigintRound = (value, precision) => {
  const remainder = value % precision;
  return remainder >= precision / 2n ? value + (precision - remainder) : value - remainder;
};
const bigintFloor = (value, precision = globals.SSV_DEDUCTED_DIGITS) => {
  return value - value % precision;
};
const bigintAbs = (n) => n < 0n ? -n : n;
const isBigIntChanged = (a, b, tolerance = viem.parseUnits("0.0001", 18)) => {
  return bigintAbs(a - b) > tolerance;
};
const roundOperatorFee = (fee, precision = globals.SSV_DEDUCTED_DIGITS) => {
  return bigintRound(fee, precision);
};
const stringifyBigints = (anything) => {
  return lodashEs.cloneDeepWith(anything, (value) => {
    if (typeof value === "bigint") return value.toString();
  });
};
const bigintifyNumbers = (numbers) => {
  return lodashEs.cloneDeepWith(numbers, (value) => {
    if (typeof value === "number") return BigInt(value);
  });
};
const createClusterId = (ownerAddress, operatorIds) => {
  if (!viem.isAddress(ownerAddress)) {
    throw new Error("Invalid owner address");
  }
  return `${ownerAddress.toLowerCase()}-${operatorIds.join("-")}`;
};
const isClusterId = (clusterId) => {
  const [ownerAddress, ...operatorIds] = clusterId.split("-");
  return viem.isAddress(ownerAddress) && operatorIds.length >= 4 && operatorIds.every((id) => !isNaN(Number(id)));
};
const toSolidityCluster = (cluster) => {
  return {
    active: cluster.active,
    balance: BigInt(cluster.balance),
    index: BigInt(cluster.index),
    networkFeeIndex: BigInt(cluster.networkFeeIndex),
    validatorCount: +cluster.validatorCount
  };
};
const createEmptyCluster = (cluster = {}) => lodashEs.merge(
  {
    validatorCount: 0,
    networkFeeIndex: 0n,
    index: 0n,
    balance: 0n,
    active: true
  },
  cluster
);
const add0x = (value) => !value.startsWith("0x") ? `0x${value}` : value;
const isKeySharesItem = (item) => {
  return !!item && typeof item === "object" && "data" in item && "payload" in item && "error" in item;
};
var KeysharesValidationErrors = /* @__PURE__ */ ((KeysharesValidationErrors2) => {
  KeysharesValidationErrors2[KeysharesValidationErrors2["OperatorDoesNotExist"] = 0] = "OperatorDoesNotExist";
  KeysharesValidationErrors2[KeysharesValidationErrors2["OperatorMismatch"] = 1] = "OperatorMismatch";
  KeysharesValidationErrors2[KeysharesValidationErrors2["ValidatorAlreadyExists"] = 2] = "ValidatorAlreadyExists";
  KeysharesValidationErrors2[KeysharesValidationErrors2["ClusterMismatch"] = 3] = "ClusterMismatch";
  KeysharesValidationErrors2[KeysharesValidationErrors2["DuplicateValidatorKeys"] = 4] = "DuplicateValidatorKeys";
  KeysharesValidationErrors2[KeysharesValidationErrors2["InconsistentOperatorPublicKeys"] = 5] = "InconsistentOperatorPublicKeys";
  KeysharesValidationErrors2[KeysharesValidationErrors2["InconsistentOperators"] = 6] = "InconsistentOperators";
  return KeysharesValidationErrors2;
})(KeysharesValidationErrors || {});
const KeysharesValidationErrorsMessages = {
  [
    0
    /* OperatorDoesNotExist */
  ]: "Operator not found. Please verify the operator ID.",
  [
    1
    /* OperatorMismatch */
  ]: "Operator details mismatch. Check provided information.",
  [
    2
    /* ValidatorAlreadyExists */
  ]: "Validator public key already in use. Must be unique.",
  [
    3
    /* ClusterMismatch */
  ]: "The operators in the provided keyshares do not match the provided operators. Please ensure the keyshares correspond to the cluster you are trying to register.",
  [
    4
    /* DuplicateValidatorKeys */
  ]: "Duplicate validator keys detected. Each must be unique.",
  [
    5
    /* InconsistentOperatorPublicKeys */
  ]: "Operator public keys mismatch. Verify operator data.",
  [
    6
    /* InconsistentOperators */
  ]: "Inconsistent operator IDs across keyshares. Check all entries."
};
class KeysharesValidationError extends Error {
  constructor(code) {
    super(KeysharesValidationErrorsMessages[code]);
    this.code = code;
  }
}
const validateConsistentOperatorIds = (keyshares) => {
  const operatorIds = sortNumbers(keyshares[0].payload.operatorIds);
  const hasOperatorData = keyshares.every(
    (share) => (share.data.operators ?? []).length > 0
  );
  keyshares.every(({ payload, data }) => {
    const payloadOperatorIds = sortNumbers(payload.operatorIds).toString();
    if (!hasOperatorData) {
      const valid2 = payloadOperatorIds === operatorIds.toString();
      if (!valid2) {
        throw new KeysharesValidationError(
          6
          /* InconsistentOperators */
        );
      }
      return true;
    }
    const dataOperatorIds = getOperatorIds(data.operators ?? []).toString();
    const valid = payloadOperatorIds === dataOperatorIds && dataOperatorIds === operatorIds.toString();
    if (!valid) {
      throw new KeysharesValidationError(
        6
        /* InconsistentOperators */
      );
    }
    return true;
  });
  return operatorIds;
};
const ensureValidatorsUniqueness = (keyshares) => {
  const keys = keyshares.map(
    ({ data, payload }) => data.publicKey ?? payload.publicKey
  );
  if (keys.some((key) => !key)) {
    throw new KeysharesValidationError(
      4
      /* DuplicateValidatorKeys */
    );
  }
  const set = new Set(keys);
  if (set.size !== keyshares.length) {
    throw new KeysharesValidationError(
      4
      /* DuplicateValidatorKeys */
    );
  }
  return true;
};
const validateConsistentOperatorPublicKeys = (keyshares, operators) => {
  const hasOperatorData = keyshares.every(
    (share) => (share.data.operators ?? []).length > 0
  );
  if (!hasOperatorData) {
    return true;
  }
  const operatorsMap = new Map(operators.map((o) => [o.id, o.publicKey]));
  const valid = keyshares.every(({ data }) => {
    return data.operators?.every(({ id, operatorKey }) => {
      return operatorsMap.get(id.toString()) === operatorKey;
    });
  });
  if (!valid) {
    throw new KeysharesValidationError(
      5
      /* InconsistentOperatorPublicKeys */
    );
  }
  return valid;
};
const ensureNoKeysharesErrors = (keyshares) => {
  keyshares.forEach((share) => {
    if (share.error) {
      throw share.error;
    }
  });
  return true;
};
const tryCatch = (fn) => {
  try {
    return [fn(), null];
  } catch (e) {
    return [null, e];
  }
};
const configArgsSchema = zod.z.object({
  publicClient: zod.z.custom().superRefine((val, ctx) => {
    const client = val;
    if (!client) {
      ctx.addIssue({
        code: zod.z.ZodIssueCode.custom,
        message: "Public client must be provided"
      });
      return false;
    }
    if (client.chain === void 0) {
      ctx.addIssue({
        code: zod.z.ZodIssueCode.custom,
        message: "Public client must have a chain property"
      });
      return false;
    }
    if (![...chainIds].includes(client.chain?.id)) {
      ctx.addIssue({
        code: zod.z.ZodIssueCode.custom,
        message: `Public client chain must be one of [${networks.join(", ")}]`
      });
      return false;
    }
    return true;
  }),
  walletClient: zod.z.custom().optional().superRefine((val, ctx) => {
    const client = val;
    if (!client) return true;
    if (client.chain === void 0) {
      ctx.addIssue({
        code: zod.z.ZodIssueCode.custom,
        message: "Wallet client must have a chain property"
      });
      return false;
    }
    if (![...chainIds].includes(client.chain?.id)) {
      ctx.addIssue({
        code: zod.z.ZodIssueCode.custom,
        message: `Wallet client chain must be one of [${networks.join(", ")}]`
      });
      return false;
    }
    return true;
  }),
  extendedConfig: zod.z.object({
    subgraph: zod.z.object({
      endpoint: zod.z.string().url().optional(),
      apiKey: zod.z.string().optional()
    }).optional(),
    rest: zod.z.object({
      endpoint: zod.z.string().url().optional()
    }).optional(),
    beacon: zod.z.object({
      endpoint: zod.z.string().url().optional()
    }).optional(),
    contracts: zod.z.object({
      setter: zod.z.string().optional(),
      getter: zod.z.string().optional(),
      token: zod.z.string().optional()
    }).optional()
  }).optional()
}).refine(
  (val) => {
    const publicClient = val.publicClient;
    const walletClient = val.walletClient;
    if (!walletClient) {
      return true;
    }
    return publicClient?.chain?.id === walletClient?.chain?.id;
  },
  {
    message: "Public and wallet client chains must be the same"
  }
);
exports.BeaconHttpError = BeaconHttpError;
exports.BeaconValidationError = BeaconValidationError;
exports.KeysharesValidationError = KeysharesValidationError;
exports.KeysharesValidationErrors = KeysharesValidationErrors;
exports.KeysharesValidationErrorsMessages = KeysharesValidationErrorsMessages;
exports._percentageFormatter = _percentageFormatter;
exports.add0x = add0x;
exports.bigintAbs = bigintAbs;
exports.bigintFloor = bigintFloor;
exports.bigintFormatter = bigintFormatter;
exports.bigintMax = bigintMax;
exports.bigintMin = bigintMin;
exports.bigintRound = bigintRound;
exports.bigintifyNumbers = bigintifyNumbers;
exports.chainIds = chainIds;
exports.chains = chains;
exports.configArgsSchema = configArgsSchema;
exports.contracts = contracts;
exports.createClusterId = createClusterId;
exports.createEmptyCluster = createEmptyCluster;
exports.decodeOperatorPublicKey = decodeOperatorPublicKey;
exports.ensureNoKeysharesErrors = ensureNoKeysharesErrors;
exports.ensureValidatorsUniqueness = ensureValidatorsUniqueness;
exports.ethFormatter = ethFormatter;
exports.formatBigintInput = formatBigintInput;
exports.formatSSV = formatSSV;
exports.getBeaconAPI = getBeaconAPI;
exports.getBeaconValidator = getBeaconValidator;
exports.getBeaconValidatorLifecycleStage = getBeaconValidatorLifecycleStage;
exports.getBeaconValidatorState = getBeaconValidatorState;
exports.getBeaconValidatorStates = getBeaconValidatorStates;
exports.getBeaconValidators = getBeaconValidators;
exports.getOperatorIds = getOperatorIds;
exports.globals = globals;
exports.graph_endpoints = graph_endpoints;
exports.hoodi = hoodi;
exports.isBigIntChanged = isBigIntChanged;
exports.isClusterId = isClusterId;
exports.isKeySharesItem = isKeySharesItem;
exports.ms = ms;
exports.networks = networks;
exports.numberFormatter = numberFormatter;
exports.paid_graph_endpoints = paid_graph_endpoints;
exports.percentageFormatter = percentageFormatter;
exports.registerValidatorsByClusterSizeLimits = registerValidatorsByClusterSizeLimits;
exports.rest_endpoints = rest_endpoints;
exports.roundOperatorFee = roundOperatorFee;
exports.sortNumbers = sortNumbers;
exports.stringifyBigints = stringifyBigints;
exports.toSolidityCluster = toSolidityCluster;
exports.tryCatch = tryCatch;
exports.validateConsistentOperatorIds = validateConsistentOperatorIds;
exports.validateConsistentOperatorPublicKeys = validateConsistentOperatorPublicKeys;
exports.waitForBeaconValidatorActivation = waitForBeaconValidatorActivation;
