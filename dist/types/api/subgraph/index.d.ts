import type { RemoveConfigArg } from '@/types/methods';
import type { GraphQLClient } from 'graphql-request';
import type { GetClusterBalanceQueryVariables, GetClusterQueryVariables, GetClusterSnapshotQueryVariables, GetClustersQueryVariables, GetOperatorQueryVariables, GetOperatorsQueryVariables, GetOwnerNonceByBlockQueryVariables, GetValidatorQueryVariables, GetValidatorsQueryVariables } from '../../graphql/graphql';
export declare const getOwnerNonce: (client: GraphQLClient, args: GetOwnerNonceByBlockQueryVariables) => Promise<string>;
export declare const getClusterSnapshot: (client: GraphQLClient, args: GetClusterSnapshotQueryVariables) => Promise<{
    active: boolean;
    validatorCount: string;
    balance: string;
    index: string;
    networkFeeIndex: string;
} | null | undefined>;
export declare const getCluster: (client: GraphQLClient, args: GetClusterQueryVariables) => Promise<{
    active: boolean;
    validatorCount: string;
    balance: string;
    index: string;
    networkFeeIndex: string;
    operatorIds: Array<string>;
} | null | undefined>;
export declare const getClusters: (client: GraphQLClient, args: GetClustersQueryVariables) => Promise<{
    id: string;
    active: boolean;
    validatorCount: string;
    balance: string;
    index: string;
    networkFeeIndex: string;
    operatorIds: Array<string>;
}[]>;
export declare const getOperator: (client: GraphQLClient, args: GetOperatorQueryVariables) => Promise<{
    publicKey: string;
    whitelisted: `0x${string}`[];
    id: string;
    validatorCount: string;
    isPrivate: boolean;
    whitelistedContract: import("abitype").Address;
} | null>;
export declare const getOperators: (client: GraphQLClient, args: GetOperatorsQueryVariables) => Promise<{
    publicKey: string;
    whitelisted: `0x${string}`[];
    id: string;
    validatorCount: string;
    isPrivate: boolean;
    whitelistedContract: import("abitype").Address;
}[]>;
export declare const getValidators: (client: GraphQLClient, args: GetValidatorsQueryVariables) => Promise<{
    id: import("abitype").Address;
}[]>;
export declare const getValidator: (client: GraphQLClient, args: GetValidatorQueryVariables) => Promise<{
    id: import("abitype").Address;
} | null | undefined>;
export declare const getClusterBalance: (client: GraphQLClient, args: GetClusterBalanceQueryVariables) => Promise<import("../../graphql/graphql").GetClusterBalanceQuery>;
export declare const getQueries: (client: GraphQLClient) => {
    getOwnerNonce: RemoveConfigArg<typeof getOwnerNonce>;
    getClusterSnapshot: RemoveConfigArg<typeof getClusterSnapshot>;
    getCluster: RemoveConfigArg<typeof getCluster>;
    getClusters: RemoveConfigArg<typeof getClusters>;
    getOperator: RemoveConfigArg<typeof getOperator>;
    getOperators: RemoveConfigArg<typeof getOperators>;
    getValidators: RemoveConfigArg<typeof getValidators>;
    getValidator: RemoveConfigArg<typeof getValidator>;
    getClusterBalance: RemoveConfigArg<typeof getClusterBalance>;
};
