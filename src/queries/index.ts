import { decodeOperatorPublicKey } from '@/utils/operator'
import { GraphQLClient } from 'graphql-request'
import {
  GetClusterDocument,
  GetClusterQueryVariables,
  GetClusterSnapshotDocument,
  GetClusterSnapshotQueryVariables,
  GetClustersDocument,
  GetClustersQueryVariables,
  GetOperatorsDocument,
  GetOperatorsQueryVariables,
  GetOwnerNonceDocument,
  GetOwnerNonceQueryVariables,
  GetValidatorDocument,
  GetValidatorQueryVariables,
  GetValidatorsDocument,
  GetValidatorsQueryVariables,
} from '../graphql/graphql'

export const getQueries = (client: GraphQLClient) => ({
  getOwnerNonce: (args: GetOwnerNonceQueryVariables) =>
    client.request(GetOwnerNonceDocument, args).then((r) => r.account?.nonce),

  getClusterSnapshot: (args: GetClusterSnapshotQueryVariables) =>
    client.request(GetClusterSnapshotDocument, args).then((res) => res.cluster),

  getCluster: (args: GetClusterQueryVariables) =>
    client.request(GetClusterDocument, args).then((res) => res.cluster),

  getClusters: (args: GetClustersQueryVariables) =>
    client.request(GetClustersDocument, args).then((res) => res.clusters),

  getOperators: (args: GetOperatorsQueryVariables) =>
    client.request(GetOperatorsDocument, args).then((res) =>
      res.operators.map((o) => ({
        ...o,
        publicKey: decodeOperatorPublicKey(o.publicKey),
      })),
    ),

  getValidators: (args: GetValidatorsQueryVariables) =>
    client.request(GetValidatorsDocument, args).then((res) => res.validators),

  getValidator: (args: GetValidatorQueryVariables) =>
    client.request(GetValidatorDocument, args).then((res) => res.validator),
})
