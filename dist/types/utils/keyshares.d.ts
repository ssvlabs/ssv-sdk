import type { KeySharesItem } from '@/libs/ssv-keys/KeyShares/KeySharesItem';
import type { Operator } from '@/types/operator';
export declare const isKeySharesItem: (item: unknown) => item is KeySharesItem;
export declare enum KeysharesValidationErrors {
    OperatorDoesNotExist = 0,
    OperatorMismatch = 1,
    ValidatorAlreadyExists = 2,
    ClusterMismatch = 3,
    DuplicateValidatorKeys = 4,
    InconsistentOperatorPublicKeys = 5,
    InconsistentOperators = 6
}
export declare const KeysharesValidationErrorsMessages: Record<KeysharesValidationErrors, string>;
export declare class KeysharesValidationError extends Error {
    code: KeysharesValidationErrors;
    constructor(code: KeysharesValidationErrors);
}
export declare const validateConsistentOperatorIds: (keyshares: KeySharesItem[]) => number[];
export declare const ensureValidatorsUniqueness: (keyshares: KeySharesItem[]) => boolean;
export declare const validateConsistentOperatorPublicKeys: (keyshares: KeySharesItem[], operators: Pick<Operator, "id" | "publicKey">[]) => true;
export declare const ensureNoKeysharesErrors: (keyshares: KeySharesItem[]) => boolean;
