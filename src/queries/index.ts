import { GraphQLClient } from 'graphql-request'
import {
  GetClusterDocument,
  GetClusterQueryVariables,
  GetOperatorsDocument,
  GetOperatorsQueryVariables,
  GetOwnerNonceDocument,
  GetOwnerNonceQueryVariables,
} from '../graphql/graphql'

export const getQueries = (client: GraphQLClient) => ({
  getOwnerNonce: (args: GetOwnerNonceQueryVariables) => client.request(GetOwnerNonceDocument, args),
  getCluster: (args: GetClusterQueryVariables) => client.request(GetClusterDocument, args),
  getOperators: (args: GetOperatorsQueryVariables) => client.request(GetOperatorsDocument, args),
})
