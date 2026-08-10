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
export type BeaconValidatorStatus = 'pending' | 'active' | 'exited' | 'withdrawal_possible' | 'withdrawal_done';
export type BeaconValidatorLifecycleStage = 'pending' | 'active' | 'exited' | 'withdrawal_ready' | 'withdrawn';
export type RawBeaconValidatorStatus = 'pending_initialized' | 'pending_queued' | 'active_ongoing' | 'active_exiting' | 'active_slashed' | 'exited_unslashed' | 'exited_slashed' | 'withdrawal_possible' | 'withdrawal_done';
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
    requestTimeoutMs?: number;
};
export declare class BeaconHttpError extends Error {
    readonly status: number;
    constructor(status: number, message: string);
}
export declare class BeaconValidationError extends Error {
    constructor(message: string);
}
export declare const getBeaconValidatorLifecycleStage: (state: Pick<BeaconValidatorState, "status">) => BeaconValidatorLifecycleStage;
export declare const getBeaconValidator: (endpoint: string | undefined, args: {
    validatorId: string;
    signal?: AbortSignal;
}) => Promise<BeaconValidator | null>;
export declare const getBeaconValidators: (endpoint: string | undefined, args: {
    validatorIds: string[];
    signal?: AbortSignal;
}) => Promise<BeaconValidator[]>;
export declare const getBeaconValidatorState: (endpoint: string | undefined, args: {
    validatorId: string;
    signal?: AbortSignal;
}) => Promise<BeaconValidatorState | null>;
export declare const getBeaconValidatorStates: (endpoint: string | undefined, args: {
    validatorIds: string[];
    signal?: AbortSignal;
}) => Promise<Array<BeaconValidatorState | null>>;
export declare const waitForBeaconValidatorActivation: (endpoint: string | undefined, args: WaitForBeaconValidatorActivationArgs) => Promise<BeaconValidatorState>;
export declare const getBeaconAPI: (endpoint?: string) => {
    getBeaconValidator: (args: {
        validatorId: string;
        signal?: AbortSignal;
    }) => Promise<BeaconValidator | null>;
    getBeaconValidators: (args: {
        validatorIds: string[];
        signal?: AbortSignal;
    }) => Promise<BeaconValidator[]>;
    getBeaconValidatorState: (args: {
        validatorId: string;
        signal?: AbortSignal;
    }) => Promise<BeaconValidatorState | null>;
    getBeaconValidatorStates: (args: {
        validatorIds: string[];
        signal?: AbortSignal;
    }) => Promise<(BeaconValidatorState | null)[]>;
    getBeaconValidatorLifecycleStage: (state: Pick<BeaconValidatorState, "status">) => BeaconValidatorLifecycleStage;
    waitForBeaconValidatorActivation: (args: WaitForBeaconValidatorActivationArgs) => Promise<BeaconValidatorState>;
};
