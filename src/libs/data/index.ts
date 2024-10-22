import { getQueries } from '@/queries'
import { GraphQLClient } from 'graphql-request'

export const createData = (graphqlClient: GraphQLClient) => {
  return getQueries(graphqlClient)
}
