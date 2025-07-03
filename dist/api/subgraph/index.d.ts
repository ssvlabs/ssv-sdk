import { RemoveConfigArg } from '../../types/methods';
import { GraphQLClient } from 'graphql-request';
import { GetClusterBalanceQueryVariables, GetClusterQueryVariables, GetClusterSnapshotQueryVariables, GetClustersQueryVariables, GetOperatorQueryVariables, GetOperatorsQueryVariables, GetOwnerNonceByBlockQueryVariables, GetValidatorQueryVariables, GetValidatorsQueryVariables } from '../../graphql/graphql';
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
    operatorIds: string[];
} | null | undefined>;
export declare const getClusters: (client: GraphQLClient, args: GetClustersQueryVariables) => Promise<{
    id: string;
    active: boolean;
    validatorCount: string;
    balance: string;
    index: string;
    networkFeeIndex: string;
    operatorIds: string[];
}[]>;
export declare const getOperator: (client: GraphQLClient, args: GetOperatorQueryVariables) => Promise<{
    publicKey: string;
    whitelisted: `0x${string}`[];
    id: string;
    validatorCount: string;
    isPrivate: boolean;
    whitelistedContract: `0x${string}`;
} | null>;
export declare const getOperators: (client: GraphQLClient, args: GetOperatorsQueryVariables) => Promise<{
    publicKey: string;
    whitelisted: `0x${string}`[];
    id: string;
    validatorCount: string;
    isPrivate: boolean;
    whitelistedContract: `0x${string}`;
}[]>;
export declare const getValidators: (client: GraphQLClient, args: GetValidatorsQueryVariables) => Promise<{
    id: `0x${string}`;
}[]>;
export declare const getValidator: (client: GraphQLClient, args: GetValidatorQueryVariables) => Promise<{
    id: `0x${string}`;
} | null | undefined>;
export declare const getClusterBalance: (client: GraphQLClient, args: GetClusterBalanceQueryVariables) => Promise<import('../../graphql/graphql').GetClusterBalanceQuery>;
export declare const getQueries: (client: GraphQLClient) => {
    getOwnerNonce: RemoveConfigArg<(client: GraphQLClient, args: GetOwnerNonceByBlockQueryVariables) => Promise<string>>;
    getClusterSnapshot: RemoveConfigArg<(client: GraphQLClient, args: GetClusterSnapshotQueryVariables) => Promise<{
        active: boolean;
        validatorCount: string;
        balance: string;
        index: string;
        networkFeeIndex: string;
    } | null | undefined>>;
    getCluster: RemoveConfigArg<(client: GraphQLClient, args: GetClusterQueryVariables) => Promise<{
        active: boolean;
        validatorCount: string;
        balance: string;
        index: string;
        networkFeeIndex: string;
        operatorIds: string[];
    } | null | undefined>>;
    getClusters: RemoveConfigArg<(client: GraphQLClient, args: GetClustersQueryVariables) => Promise<{
        id: string;
        active: boolean;
        validatorCount: string;
        balance: string;
        index: string;
        networkFeeIndex: string;
        operatorIds: string[];
    }[]>>;
    getOperator: RemoveConfigArg<(client: GraphQLClient, args: GetOperatorQueryVariables) => Promise<{
        publicKey: string;
        whitelisted: `0x${string}`[];
        id: string;
        validatorCount: string;
        isPrivate: boolean;
        whitelistedContract: `0x${string}`;
    } | null>>;
    getOperators: RemoveConfigArg<(client: GraphQLClient, args: GetOperatorsQueryVariables) => Promise<{
        publicKey: string;
        whitelisted: `0x${string}`[];
        id: string;
        validatorCount: string;
        isPrivate: boolean;
        whitelistedContract: `0x${string}`;
    }[]>>;
    getValidators: RemoveConfigArg<(client: GraphQLClient, args: GetValidatorsQueryVariables) => Promise<{
        id: `0x${string}`;
    }[]>>;
    getValidator: RemoveConfigArg<(client: GraphQLClient, args: GetValidatorQueryVariables) => Promise<{
        id: `0x${string}`;
    } | null | undefined>>;
    getClusterBalance: RemoveConfigArg<(client: GraphQLClient, args: GetClusterBalanceQueryVariables) => Promise<import('../../graphql/graphql').GetClusterBalanceQuery>>;
};
