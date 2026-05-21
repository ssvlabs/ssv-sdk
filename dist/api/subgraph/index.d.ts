import { GetClusterBalanceQuery, GetClusterBalanceQueryVariables, GetClusterQuery, GetClusterQueryVariables, GetClusterSnapshotQuery, GetClusterSnapshotQueryVariables, GetClustersQuery, GetClustersQueryVariables, GetDaoValuesQuery, GetDaoValuesQueryVariables, GetOperatorQuery, GetOperatorQueryVariables, GetOperatorsQuery, GetOperatorsQueryVariables, GetOwnerNonceByBlockQueryVariables, GetValidatorQuery, GetValidatorQueryVariables, GetValidatorsQuery, GetValidatorsQueryVariables } from '../../graphql/graphql';
import { RemoveConfigArg } from '../../types/methods';
import { GraphQLClient } from 'graphql-request';
import { Address } from 'viem';
type SnapshotResult<T> = {
    blockNumber: number;
} & T;
declare const mapOperator: <T extends {
    publicKey: Address;
    whitelisted: {
        id: Address;
    }[];
}>(operator: T) => Omit<T, "publicKey" | "whitelisted"> & {
    publicKey: string;
    whitelisted: Address[];
};
export declare const getOwnerNonce: (client: GraphQLClient, args: GetOwnerNonceByBlockQueryVariables) => Promise<SnapshotResult<{
    nonce: number;
}>>;
export declare const getClusterSnapshot: (client: GraphQLClient, args: GetClusterSnapshotQueryVariables) => Promise<SnapshotResult<{
    cluster: GetClusterSnapshotQuery["cluster"];
}>>;
export declare const getCluster: (client: GraphQLClient, args: GetClusterQueryVariables) => Promise<SnapshotResult<{
    cluster: GetClusterQuery["cluster"];
}>>;
export declare const getClusters: (client: GraphQLClient, args: GetClustersQueryVariables) => Promise<SnapshotResult<{
    clusters: GetClustersQuery["clusters"];
}>>;
export declare const getOperator: (client: GraphQLClient, args: GetOperatorQueryVariables) => Promise<SnapshotResult<{
    operator: (Omit<NonNullable<GetOperatorQuery["operator"]>, "publicKey" | "whitelisted"> & {
        publicKey: string;
        whitelisted: Address[];
    }) | null;
}>>;
export declare const getOperators: (client: GraphQLClient, args: GetOperatorsQueryVariables) => Promise<SnapshotResult<{
    operators: ReturnType<typeof mapOperator<NonNullable<GetOperatorsQuery["operators"][number]>>>[];
}>>;
export declare const getValidators: (client: GraphQLClient, args: GetValidatorsQueryVariables) => Promise<SnapshotResult<{
    validators: GetValidatorsQuery["validators"];
}>>;
export declare const getValidator: (client: GraphQLClient, args: GetValidatorQueryVariables) => Promise<SnapshotResult<{
    validator: GetValidatorQuery["validator"];
}>>;
export declare const getClusterBalance: (client: GraphQLClient, args: GetClusterBalanceQueryVariables) => Promise<SnapshotResult<{
    cluster: GetClusterBalanceQuery["cluster"];
    daovalues: GetClusterBalanceQuery["daovalues"];
    operators: GetClusterBalanceQuery["operators"];
}>>;
export declare const getDaoValues: (client: GraphQLClient, args: GetDaoValuesQueryVariables) => Promise<SnapshotResult<{
    daovalues: GetDaoValuesQuery["daovalues"];
}>>;
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
    getDaoValues: RemoveConfigArg<typeof getDaoValues>;
};
export {};
