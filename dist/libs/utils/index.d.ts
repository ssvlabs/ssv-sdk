import { ConfigReturnType } from '../../config/create';
import { getClusterBalance, getOperatorCapacity } from './methods';
import { calcDepositFromRunway } from './methods/calc-deposit-from-runway';
import { validateSharesPreRegistration } from './methods/keyshares';
import { RemoveConfigArg } from '../../types/methods';
export declare const createUtils: (config: ConfigReturnType) => {
    generateKeyShares: (args: {
        operatorKeys: string[];
        operatorIds: number[];
        keystore: string | string[];
        keystorePassword: string;
        ownerAddress: string;
        nonce: number;
    }) => Promise<import('../ssv-keys/KeyShares/KeySharesData/KeySharesPayload').KeySharesPayload[]>;
    validateKeysharesJSON: ({ account, operators, keyshares, }: {
        account: import('viem').Address;
        operators: Pick<import('../../types/operator').Operator, "id" | "publicKey">[];
        keyshares: string | object;
    }) => Promise<import('../ssv-keys').KeySharesItem[]>;
    validateSharesPreRegistration: RemoveConfigArg<typeof validateSharesPreRegistration>;
    getOperatorCapacity: RemoveConfigArg<typeof getOperatorCapacity>;
    getClusterBalance: RemoveConfigArg<typeof getClusterBalance>;
    calcDepositFromRunway: RemoveConfigArg<typeof calcDepositFromRunway>;
};
