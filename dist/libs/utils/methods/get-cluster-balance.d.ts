import { ConfigReturnType } from '../../../config/create';
import { Address } from 'viem';
type GetClusterBalanceArgs = {
    operatorIds: number[];
    ownerAddress?: Address;
};
export declare const getClusterBalance: (config: ConfigReturnType, { operatorIds, ownerAddress }: GetClusterBalanceArgs) => Promise<{
    balance: bigint;
    operationalRunway: bigint;
}>;
export {};
