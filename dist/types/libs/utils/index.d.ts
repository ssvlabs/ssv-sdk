import type { ConfigReturnType } from '@/config/create';
import { getClusterBalance, getOperatorCapacity } from '@/libs/utils/methods';
import { validateSharesPreRegistration } from '@/libs/utils/methods/keyshares';
import type { RemoveConfigArg } from '@/types/methods';
export declare const createUtils: (config: ConfigReturnType) => {
    generateKeyShares: (args: {
        operator_keys: string[];
        operator_ids: number[];
        keystore: string | string[];
        keystore_password: string;
        owner_address: string;
        nonce: number;
    }) => Promise<import("../ssv-keys/KeyShares/KeySharesData/KeySharesPayload").KeySharesPayload[]>;
    validateKeysharesJSON: ({ account, operators, keyshares, }: {
        account: import("abitype").Address;
        operators: Pick<import("../../types/operator").Operator, "id" | "publicKey">[];
        keyshares: string | object;
    }) => Promise<import("../ssv-keys").KeySharesItem[]>;
    validateSharesPreRegistration: RemoveConfigArg<typeof validateSharesPreRegistration>;
    getOperatorCapacity: RemoveConfigArg<typeof getOperatorCapacity>;
    getClusterBalance: RemoveConfigArg<typeof getClusterBalance>;
};
