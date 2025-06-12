import type { ConfigReturnType } from '@/config/create';
import type { RemoveConfigArg } from '@/types/methods';
export declare const createUtils: (config: ConfigReturnType) => {
    generateKeyShares: (args: {
        operator_keys: string[];
        operator_ids: number[];
        keystore: string | string[];
        keystore_password: string;
        owner_address: string;
        nonce: number;
    }) => Promise<import("ssv-keys/dist/tsc/src/lib/KeyShares/KeySharesData/KeySharesPayload").KeySharesPayload[]>;
    validateKeysharesJSON: ({ account, operators, keyshares, }: {
        account: `0x${string}`;
        operators: Pick<import("../../types/operator").Operator, "id" | "publicKey">[];
        keyshares: string | object;
    }) => Promise<import("ssv-keys").KeySharesItem[]>;
    validateSharesPreRegistration: RemoveConfigArg<(config: ConfigReturnType, { keyshares, operatorIds }: {
        keyshares: string | object;
        operatorIds: string[];
    }) => Promise<{
        available: import("ssv-keys").KeySharesItem[];
        registered: import("ssv-keys").KeySharesItem[];
        incorrect: import("ssv-keys").KeySharesItem[];
    }>>;
    getOperatorCapacity: RemoveConfigArg<(config: ConfigReturnType, operatorId: string) => Promise<number>>;
    getClusterBalance: RemoveConfigArg<(config: ConfigReturnType, { operatorIds }: {
        operatorIds: number[];
    }) => Promise<{
        balance: bigint;
        operationalRunway: bigint;
    }>>;
};
