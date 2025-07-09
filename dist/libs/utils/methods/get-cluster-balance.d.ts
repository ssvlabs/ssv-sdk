import { ConfigReturnType } from '../../../config/create';
type GetClusterBalanceArgs = {
    operatorIds: number[];
};
export declare const getClusterBalance: (config: ConfigReturnType, { operatorIds }: GetClusterBalanceArgs) => Promise<{
    balance: bigint;
    operationalRunway: bigint;
}>;
export {};
