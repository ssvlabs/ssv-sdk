import { getQueries } from '@/queries'
import type { GraphQLClient } from 'graphql-request'

export const createAPI = (graphqlClient: GraphQLClient) => {
  return getQueries(graphqlClient)
}
