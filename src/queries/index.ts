import { GraphQLClient } from 'graphql-request'
import {
  GetClusterDocument,
  GetClusterQueryVariables,
  GetOwnerNonceDocument,
  GetOwnerNonceQueryVariables,
} from '../graphql/graphql'

export const getQueries = (client: GraphQLClient) => ({
  getOwnerNonce: (args: GetOwnerNonceQueryVariables) => client.request(GetOwnerNonceDocument, args),
  getCluster: (args: GetClusterQueryVariables) => client.request(GetClusterDocument, args),
})
