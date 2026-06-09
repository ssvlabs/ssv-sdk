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
  rawStatus: string;
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
};

type BeaconResponse<T> = {
  data?: T;
};

// Beacon APIs use the uint64 max value as a sentinel for epochs that are not set yet.
const BEACON_FAR_FUTURE_EPOCH = 18446744073709551615n;
const BEACON_VALIDATORS_PATH = '/eth/v1/beacon/states/head/validators';
const BEACON_GET_VALIDATORS_MAX_URL_LENGTH = 7000;

const missingBeaconEndpointError = () =>
  new Error(
    'Beacon endpoint is not configured. Provide extendedConfig.beacon.endpoint in SDK config.',
  );

const assertBeaconData = <T>(
  payload: BeaconResponse<T>,
  methodName: string,
): T => {
  if (typeof payload !== 'object' || payload === null || !('data' in payload)) {
    throw new Error(`Beacon API returned an invalid response for ${methodName}`);
  }

  if (typeof payload.data === 'undefined') {
    throw new Error(`Beacon API response is missing data for ${methodName}`);
  }

  return payload.data;
};

const assertString = (value: unknown, fieldName: string, methodName: string) => {
  if (typeof value !== 'string') {
    throw new Error(
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
    throw new Error(
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

const parseBigIntString = (
  value: unknown,
  fieldName: string,
  methodName: string,
) => BigInt(assertString(value, fieldName, methodName));

const parseOptionalSafeNumberString = (
  value: unknown,
  fieldName: string,
  methodName: string,
) => {
  const rawValue = mapOptionalString(value, fieldName, methodName);

  if (rawValue === null) {
    return null;
  }

  const parsedValue = BigInt(rawValue);

  if (parsedValue === BEACON_FAR_FUTURE_EPOCH) {
    return null;
  }

  if (parsedValue > BigInt(Number.MAX_SAFE_INTEGER)) {
    throw new Error(
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
      throw new Error(
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
    throw new Error(
      `Invalid ${fieldName} for ${methodName}: expected a positive integer number of milliseconds`,
    );
  }

  return value;
};

const sleep = (delayMs: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, delayMs);
  });

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
    throw new Error(`Beacon API returned an invalid response for ${methodName}`);
  }

  if (typeof validator.validator !== 'object' || validator.validator === null) {
    throw new Error(
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
    rawStatus: assertString(validator.status, 'status', methodName),
    balanceGwei: parseBigIntString(validator.balance, 'balance', methodName),
    effectiveBalanceGwei: parseBigIntString(
      validator.validator.effective_balance,
      'validator.effective_balance',
      methodName,
    ),
    slashed: assertBoolean(validator.validator.slashed, 'validator.slashed', methodName),
    activationEligibilityEpoch: parseOptionalSafeNumberString(
      validator.validator.activation_eligibility_epoch,
      'validator.activation_eligibility_epoch',
      methodName,
    ),
    activationEpoch: parseOptionalSafeNumberString(
      validator.validator.activation_epoch,
      'validator.activation_epoch',
      methodName,
    ),
    exitEpoch: parseOptionalSafeNumberString(
      validator.validator.exit_epoch,
      'validator.exit_epoch',
      methodName,
    ),
    withdrawableEpoch: parseOptionalSafeNumberString(
      validator.validator.withdrawable_epoch,
      'validator.withdrawable_epoch',
      methodName,
    ),
  };
};

const toValidatorLookupKey = (validatorId: string) => validatorId.toLowerCase();

const getBeaconValidatorsURL = (
  endpoint: string,
  validatorIds: string[],
) => {
  const url = join(endpoint, BEACON_VALIDATORS_PATH);

  if (validatorIds.length === 0) {
    return url;
  }

  return `${url}?${validatorIds
    .map((validatorId) => `id=${encodeURIComponent(validatorId)}`)
    .join('&')}`;
};

const getBeaconValidatorsRequest = (
  endpoint: string,
  validatorIds: string[],
): { url: string; init?: RequestInit } => {
  const url = getBeaconValidatorsURL(endpoint, validatorIds);

  // Long validator ids can exceed provider or proxy URL limits before batch size does.
  if (url.length <= BEACON_GET_VALIDATORS_MAX_URL_LENGTH) {
    return {
      url,
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
    },
  };
};

export const getBeaconValidator = async (
  endpoint: string | undefined,
  args: { validatorId: string },
): Promise<BeaconValidator | null> => {
  if (!endpoint) {
    throw missingBeaconEndpointError();
  }

  const response = await fetch(
    join(
      endpoint,
      `/eth/v1/beacon/states/head/validators/${encodeURIComponent(args.validatorId)}`,
    ),
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(
      `Beacon API request failed for getBeaconValidator with status ${response.status}`,
    );
  }

  return assertBeaconData<BeaconValidator>(
    (await response.json()) as BeaconResponse<BeaconValidator>,
    'getBeaconValidator',
  );
};

export const getBeaconValidators = async (
  endpoint: string | undefined,
  args: { validatorIds: string[] },
): Promise<BeaconValidator[]> => {
  if (!endpoint) {
    throw missingBeaconEndpointError();
  }

  if (args.validatorIds.length === 0) {
    return [];
  }

  const request = getBeaconValidatorsRequest(endpoint, args.validatorIds);
  const response = request.init
    ? await fetch(request.url, request.init)
    : await fetch(request.url);

  if (response.status === 404) {
    return [];
  }

  if (!response.ok) {
    throw new Error(
      `Beacon API request failed for getBeaconValidators with status ${response.status}`,
    );
  }

  const data = assertBeaconData<BeaconValidator[]>(
    (await response.json()) as BeaconResponse<BeaconValidator[]>,
    'getBeaconValidators',
  );

  if (!Array.isArray(data)) {
    throw new Error(
      'Beacon API returned an invalid response for getBeaconValidators',
    );
  }

  return data;
};

export const getBeaconValidatorState = async (
  endpoint: string | undefined,
  args: { validatorId: string },
): Promise<BeaconValidatorState | null> => {
  const validator = await getBeaconValidator(endpoint, args);

  if (validator === null) {
    return null;
  }

  return mapBeaconValidatorState(validator, 'getBeaconValidatorState');
};

export const getBeaconValidatorStates = async (
  endpoint: string | undefined,
  args: { validatorIds: string[] },
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
  const deadline = Date.now() + timeoutMs;
  let lastObservedState: BeaconValidatorState | null = null;

  while (true) {
    const state = await getBeaconValidatorState(endpoint, {
      validatorId: args.validatorId,
    });
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
      throw new Error(
        `Timed out waiting for beacon validator activation for ${args.validatorId} after ${timeoutMs}ms; last observed state: ${describeActivationWaitState(lastObservedState)}`,
      );
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
