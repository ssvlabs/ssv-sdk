import type { RemoveConfigArg } from '@/types/methods'
import { decodeOperatorPublicKey } from '@/utils/operator'
import type { GraphQLClient } from 'graphql-request'
import type {
  GetClusterBalanceQueryVariables,
  GetClusterQueryVariables,
  GetClusterSnapshotQueryVariables,
  GetClustersQueryVariables,
  GetOperatorQueryVariables,
  GetOperatorsQueryVariables,
  GetOwnerNonceQueryVariables,
  GetValidatorQueryVariables,
  GetValidatorsQueryVariables,
} from '../graphql/graphql'
import {
  GetClusterBalanceDocument,
  GetClusterDocument,
  GetClusterSnapshotDocument,
  GetClustersDocument,
  GetOperatorDocument,
  GetOperatorsDocument,
  GetOwnerNonceDocument,
  GetValidatorDocument,
  GetValidatorsDocument,
} from '../graphql/graphql'
export const getOwnerNonce = (client: GraphQLClient, args: GetOwnerNonceQueryVariables) =>
  client.request(GetOwnerNonceDocument, args).then((r) => r.account?.nonce)

export const getClusterSnapshot = (client: GraphQLClient, args: GetClusterSnapshotQueryVariables) =>
  client.request(GetClusterSnapshotDocument, args).then((res) => res.cluster)

export const getCluster = (client: GraphQLClient, args: GetClusterQueryVariables) =>
  client.request(GetClusterDocument, args).then((res) => res.cluster)

export const getClusters = (client: GraphQLClient, args: GetClustersQueryVariables) =>
  client.request(GetClustersDocument, args).then((res) => res.clusters)

export const getOperator = (client: GraphQLClient, args: GetOperatorQueryVariables) =>
  client.request(GetOperatorDocument, args).then((res) => {
    if (!res.operator) return null
    return {
      ...res.operator,
      publicKey: decodeOperatorPublicKey(res.operator.publicKey),
      whitelisted: res.operator.whitelisted.map((v) => v.id),
    }
  })

export const getOperators = (client: GraphQLClient, args: GetOperatorsQueryVariables) =>
  client.request(GetOperatorsDocument, args).then((res) =>
    res.operators.map((o) => ({
      ...o,
      publicKey: decodeOperatorPublicKey(o.publicKey),
      whitelisted: o.whitelisted.map((v) => v.id),
    })),
  )

export const getValidators = (client: GraphQLClient, args: GetValidatorsQueryVariables) =>
  client.request(GetValidatorsDocument, args).then((res) => res.validators)

export const getValidator = (client: GraphQLClient, args: GetValidatorQueryVariables) =>
  client.request(GetValidatorDocument, args).then((res) => res.validator)

export const getClusterBalance = (client: GraphQLClient, args: GetClusterBalanceQueryVariables) =>
  client.request(GetClusterBalanceDocument, args)

export const getQueries = (client: GraphQLClient) => ({
  getOwnerNonce: getOwnerNonce.bind(null, client) as RemoveConfigArg<typeof getOwnerNonce>,
  getClusterSnapshot: getClusterSnapshot.bind(null, client) as RemoveConfigArg<
    typeof getClusterSnapshot
  >,
  getCluster: getCluster.bind(null, client) as RemoveConfigArg<typeof getCluster>,
  getClusters: getClusters.bind(null, client) as RemoveConfigArg<typeof getClusters>,
  getOperator: getOperator.bind(null, client) as RemoveConfigArg<typeof getOperator>,
  getOperators: getOperators.bind(null, client) as RemoveConfigArg<typeof getOperators>,
  getValidators: getValidators.bind(null, client) as RemoveConfigArg<typeof getValidators>,
  getValidator: getValidator.bind(null, client) as RemoveConfigArg<typeof getValidator>,
  getClusterBalance: getClusterBalance.bind(null, client) as RemoveConfigArg<
    typeof getClusterBalance
  >,
})
