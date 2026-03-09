import { GetClusterBalanceQueryVariables, GetClusterQueryVariables, GetClusterSnapshotQueryVariables, GetClustersQueryVariables, GetDaoValuesQueryVariables, GetOperatorQueryVariables, GetOperatorsQueryVariables, GetOwnerNonceByBlockQueryVariables, GetValidatorQueryVariables, GetValidatorsQueryVariables } from '../../graphql/graphql';
import { RemoveConfigArg } from '../../types/methods';
import { GraphQLClient } from 'graphql-request';
export declare const getOwnerNonce: (client: GraphQLClient, args: GetOwnerNonceByBlockQueryVariables) => Promise<string>;
export declare const toSolidityCluster: (client: GraphQLClient, args: GetClusterSnapshotQueryVariables) => Promise<{
    active: boolean;
    validatorCount: string;
    balance: string;
    index: string;
    networkFeeIndex: string;
    effectiveBalance: string;
} | null | undefined>;
/**
 * @deprecated Use `toSolidityCluster` instead.
 */
export declare const getClusterSnapshot: (client: GraphQLClient, args: GetClusterSnapshotQueryVariables) => Promise<{
    active: boolean;
    validatorCount: string;
    balance: string;
    index: string;
    networkFeeIndex: string;
    effectiveBalance: string;
} | null | undefined>;
export declare const getCluster: (client: GraphQLClient, args: GetClusterQueryVariables) => Promise<{
    feeAsset: import('../../graphql/graphql').ClusterFeeAssetTypes;
    active: boolean;
    validatorCount: string;
    balance: string;
    index: string;
    networkFeeIndex: string;
    operatorIds: Array<string>;
    effectiveBalance: string;
    owner: {
        id: import('viem').Address;
    };
} | null | undefined>;
export declare const getClusters: (client: GraphQLClient, args: GetClustersQueryVariables) => Promise<{
    id: string;
    feeAsset: import('../../graphql/graphql').ClusterFeeAssetTypes;
    active: boolean;
    validatorCount: string;
    balance: string;
    index: string;
    networkFeeIndex: string;
    operatorIds: Array<string>;
    effectiveBalance: string;
}[]>;
export declare const getOperator: (client: GraphQLClient, args: GetOperatorQueryVariables) => Promise<{
    publicKey: string;
    whitelisted: `0x${string}`[];
    id: string;
    validatorCount: string;
    isPrivate: boolean;
    whitelistedContract: import('viem').Address;
} | null>;
export declare const getOperators: (client: GraphQLClient, args: GetOperatorsQueryVariables) => Promise<{
    publicKey: string;
    whitelisted: `0x${string}`[];
    id: string;
    validatorCount: string;
    isPrivate: boolean;
    whitelistedContract: import('viem').Address;
    fee: string;
    ssvFee: string;
}[]>;
export declare const getValidators: (client: GraphQLClient, args: GetValidatorsQueryVariables) => Promise<{
    id: import('viem').Address;
}[]>;
export declare const getValidator: (client: GraphQLClient, args: GetValidatorQueryVariables) => Promise<{
    id: import('viem').Address;
} | null | undefined>;
export declare const getClusterBalance: (client: GraphQLClient, args: GetClusterBalanceQueryVariables) => Promise<import('../../graphql/graphql').GetClusterBalanceQuery>;
export declare const getDaoValues: (client: GraphQLClient, args: GetDaoValuesQueryVariables) => Promise<{
    networkFee: string;
    networkFeeIndex: string;
    networkFeeIndexBlockNumber: string;
    networkFeeSSV: string;
    networkFeeIndexSSV: string;
    networkFeeIndexBlockNumberSSV: string;
    liquidationThreshold: string;
    liquidationThresholdSSV: string;
    minimumLiquidationCollateral: string;
    minimumLiquidationCollateralSSV: string;
} | null | undefined>;
export declare const getQueries: (client: GraphQLClient) => {
    getOwnerNonce: RemoveConfigArg<typeof getOwnerNonce>;
    toSolidityCluster: RemoveConfigArg<typeof toSolidityCluster>;
    getClusterSnapshot: RemoveConfigArg<typeof getClusterSnapshot>;
    getCluster: RemoveConfigArg<typeof getCluster>;
    getClusters: RemoveConfigArg<typeof getClusters>;
    getOperator: RemoveConfigArg<typeof getOperator>;
    getOperators: RemoveConfigArg<typeof getOperators>;
    getValidators: RemoveConfigArg<typeof getValidators>;
    getValidator: RemoveConfigArg<typeof getValidator>;
    getClusterBalance: RemoveConfigArg<typeof getClusterBalance>;
    getDaoValues: RemoveConfigArg<typeof getDaoValues>;
};
