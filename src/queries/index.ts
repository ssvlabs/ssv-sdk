import { decodeOperatorPublicKey } from '@/utils/operator'
import { GraphQLClient } from 'graphql-request'
import {
  GetClusterDocument,
  GetClusterIdsDocument,
  GetClusterIdsQueryVariables,
  GetClusterQueryVariables,
  GetClusterSnapshotDocument,
  GetClusterSnapshotQueryVariables,
  GetOperatorsDocument,
  GetOperatorsQueryVariables,
  GetOwnerNonceDocument,
  GetOwnerNonceQueryVariables,
} from '../graphql/graphql'

export const getQueries = (client: GraphQLClient) => ({
  getOwnerNonce: (args: GetOwnerNonceQueryVariables) =>
    client.request(GetOwnerNonceDocument, args).then((r) => r.account?.nonce),

  getClusterSnapshot: (args: GetClusterSnapshotQueryVariables) =>
    client.request(GetClusterSnapshotDocument, args).then((res) => res.cluster),

  getCluster: (args: GetClusterQueryVariables) =>
    client.request(GetClusterDocument, args).then((res) => res.cluster),

  getClusterIds: (args: GetClusterIdsQueryVariables) =>
    client.request(GetClusterIdsDocument, args).then((res) => res.clusters),

  getOperators: (args: GetOperatorsQueryVariables) =>
    client.request(GetOperatorsDocument, args).then((res) =>
      res.operators.map((o) => ({
        ...o,
        publicKey: decodeOperatorPublicKey(o.publicKey),
      })),
    ),
})
