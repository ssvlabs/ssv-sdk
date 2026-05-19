import type {
  GetClusterBalanceQuery,
  GetClusterBalanceQueryVariables,
  GetClusterQuery,
  GetClusterQueryVariables,
  GetClusterSnapshotQuery,
  GetClusterSnapshotQueryVariables,
  GetClustersQuery,
  GetClustersQueryVariables,
  GetDaoValuesQuery,
  GetDaoValuesQueryVariables,
  GetOperatorQuery,
  GetOperatorQueryVariables,
  GetOperatorsQuery,
  GetOperatorsQueryVariables,
  GetOwnerNonceByBlockQuery,
  GetOwnerNonceByBlockQueryVariables,
  GetOwnerNonceQuery,
  GetValidatorQuery,
  GetValidatorQueryVariables,
  GetValidatorsQuery,
  GetValidatorsQueryVariables,
} from '@/graphql/graphql';
import {
  GetClusterBalanceDocument,
  GetClusterDocument,
  GetClustersDocument,
  GetClusterSnapshotDocument,
  GetDaoValuesDocument,
  GetOperatorDocument,
  GetOperatorsDocument,
  GetOwnerNonceByBlockDocument,
  GetOwnerNonceDocument,
  GetValidatorDocument,
  GetValidatorsDocument,
} from '@/graphql/graphql';
import type { RemoveConfigArg } from '@/types/methods';
import { decodeOperatorPublicKey } from '@/utils/operator';
import type { GraphQLClient } from 'graphql-request';
import type { Address } from 'viem';

type SnapshotResult<T> = {
  blockNumber: number;
} & T;

const requireSafeNumber = (
  rawValue: number | string | null | undefined,
  fieldName: string,
) => {
  if (rawValue === null || typeof rawValue === 'undefined') {
    throw new Error(`Could not resolve ${fieldName}`);
  }

  const value = BigInt(rawValue);
  if (value > BigInt(Number.MAX_SAFE_INTEGER)) {
    throw new Error(`${fieldName} exceeds MAX_SAFE_INTEGER`);
  }

  return Number(value);
};

const getSnapshotBlockNumber = (response: {
  _meta?: {
    block: {
      number: number;
    };
  } | null;
}) => {
  if (response._meta?.block.number === null || typeof response._meta?.block.number === 'undefined') {
    throw new Error(
      'Subgraph endpoint must support _meta.block.number for snapshot-aware SDK reads.',
    );
  }

  return requireSafeNumber(response._meta.block.number, 'snapshot block number');
};

const mapOperator = <
  T extends {
    publicKey: Address;
    whitelisted: { id: Address }[];
  },
>(
  operator: T,
): Omit<T, 'publicKey' | 'whitelisted'> & {
  publicKey: string;
  whitelisted: Address[];
} => ({
  ...operator,
  publicKey: decodeOperatorPublicKey(operator.publicKey),
  whitelisted: operator.whitelisted.map((v) => v.id),
});

const withSnapshotBlock = <
  R,
>(
  response: {
    _meta?: {
      block: {
        number: number;
      };
    } | null;
  },
  payload: R,
): SnapshotResult<R> => ({
  blockNumber: getSnapshotBlockNumber(response),
  ...payload,
});

export const getOwnerNonce = async (
  client: GraphQLClient,
  args: GetOwnerNonceByBlockQueryVariables,
): Promise<SnapshotResult<{ nonce: number }>> => {
  if (typeof args.block === 'number') {
    const response = await client.request<GetOwnerNonceByBlockQuery>(
      GetOwnerNonceByBlockDocument,
      args,
    );

    return {
      blockNumber: requireSafeNumber(args.block, 'snapshot block number'),
      nonce: requireSafeNumber(response.account?.nonce ?? '0', 'owner nonce'),
    };
  }

  const response = await client.request<GetOwnerNonceQuery>(
    GetOwnerNonceDocument,
    args,
  );

  return withSnapshotBlock(response, {
    nonce: requireSafeNumber(response.account?.nonce ?? '0', 'owner nonce'),
  });
};

export const getClusterSnapshot = async (
  client: GraphQLClient,
  args: GetClusterSnapshotQueryVariables,
): Promise<
  SnapshotResult<{
    cluster: GetClusterSnapshotQuery['cluster'];
  }>
> => {
  const response = await client.request<GetClusterSnapshotQuery>(
    GetClusterSnapshotDocument,
    args,
  );

  return withSnapshotBlock(response, {
    cluster: response.cluster,
  });
};

export const getCluster = async (
  client: GraphQLClient,
  args: GetClusterQueryVariables,
): Promise<
  SnapshotResult<{
    cluster: GetClusterQuery['cluster'];
  }>
> => {
  const response = await client.request<GetClusterQuery>(
    GetClusterDocument,
    args,
  );

  return withSnapshotBlock(response, {
    cluster: response.cluster,
  });
};

export const getClusters = async (
  client: GraphQLClient,
  args: GetClustersQueryVariables,
): Promise<
  SnapshotResult<{
    clusters: GetClustersQuery['clusters'];
  }>
> => {
  const response = await client.request<GetClustersQuery>(
    GetClustersDocument,
    args,
  );

  return withSnapshotBlock(response, {
    clusters: response.clusters,
  });
};

export const getOperator = async (
  client: GraphQLClient,
  args: GetOperatorQueryVariables,
): Promise<
  SnapshotResult<{
    operator:
      | (Omit<NonNullable<GetOperatorQuery['operator']>, 'publicKey' | 'whitelisted'> & {
          publicKey: string;
          whitelisted: Address[];
        })
      | null;
  }>
> => {
  const response = await client.request<GetOperatorQuery>(
    GetOperatorDocument,
    args,
  );

  return withSnapshotBlock(response, {
    operator: response.operator ? mapOperator(response.operator) : null,
  });
};

export const getOperators = async (
  client: GraphQLClient,
  args: GetOperatorsQueryVariables,
): Promise<
  SnapshotResult<{
    operators: ReturnType<typeof mapOperator<NonNullable<GetOperatorsQuery['operators'][number]>>>[];
  }>
> => {
  const response = await client.request<GetOperatorsQuery>(
    GetOperatorsDocument,
    args,
  );

  return withSnapshotBlock(response, {
    operators: response.operators.map(mapOperator),
  });
};

export const getValidators = async (
  client: GraphQLClient,
  args: GetValidatorsQueryVariables,
): Promise<
  SnapshotResult<{
    validators: GetValidatorsQuery['validators'];
  }>
> => {
  const response = await client.request<GetValidatorsQuery>(
    GetValidatorsDocument,
    args,
  );

  return withSnapshotBlock(response, {
    validators: response.validators,
  });
};

export const getValidator = async (
  client: GraphQLClient,
  args: GetValidatorQueryVariables,
): Promise<
  SnapshotResult<{
    validator: GetValidatorQuery['validator'];
  }>
> => {
  const response = await client.request<GetValidatorQuery>(
    GetValidatorDocument,
    args,
  );

  return withSnapshotBlock(response, {
    validator: response.validator,
  });
};

export const getClusterBalance = async (
  client: GraphQLClient,
  args: GetClusterBalanceQueryVariables,
): Promise<
  SnapshotResult<{
    cluster: GetClusterBalanceQuery['cluster'];
    daovalues: GetClusterBalanceQuery['daovalues'];
    operators: GetClusterBalanceQuery['operators'];
  }>
> => {
  const response = await client.request<GetClusterBalanceQuery>(
    GetClusterBalanceDocument,
    args,
  );

  return withSnapshotBlock(response, {
    cluster: response.cluster,
    daovalues: response.daovalues,
    operators: response.operators,
  });
};

export const getDaoValues = async (
  client: GraphQLClient,
  args: GetDaoValuesQueryVariables,
): Promise<
  SnapshotResult<{
    daovalues: GetDaoValuesQuery['daovalues'];
  }>
> => {
  const response = await client.request<GetDaoValuesQuery>(
    GetDaoValuesDocument,
    args,
  );

  return withSnapshotBlock(response, {
    daovalues: response.daovalues,
  });
};

export const getQueries = (client: GraphQLClient) => ({
  getOwnerNonce: getOwnerNonce.bind(null, client) as RemoveConfigArg<
    typeof getOwnerNonce
  >,
  getClusterSnapshot: getClusterSnapshot.bind(null, client) as RemoveConfigArg<
    typeof getClusterSnapshot
  >,
  getCluster: getCluster.bind(null, client) as RemoveConfigArg<
    typeof getCluster
  >,
  getClusters: getClusters.bind(null, client) as RemoveConfigArg<
    typeof getClusters
  >,
  getOperator: getOperator.bind(null, client) as RemoveConfigArg<
    typeof getOperator
  >,
  getOperators: getOperators.bind(null, client) as RemoveConfigArg<
    typeof getOperators
  >,
  getValidators: getValidators.bind(null, client) as RemoveConfigArg<
    typeof getValidators
  >,
  getValidator: getValidator.bind(null, client) as RemoveConfigArg<
    typeof getValidator
  >,
  getClusterBalance: getClusterBalance.bind(null, client) as RemoveConfigArg<
    typeof getClusterBalance
  >,
  getDaoValues: getDaoValues.bind(null, client) as RemoveConfigArg<
    typeof getDaoValues
  >,
});
