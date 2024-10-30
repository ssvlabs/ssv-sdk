import { getQueries } from '@/queries'
import { GraphQLClient } from 'graphql-request'

export const createAPI = (graphqlClient: GraphQLClient) => {
  return getQueries(graphqlClient)
}
