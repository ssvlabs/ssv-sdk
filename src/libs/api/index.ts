import { getBeaconAPI } from '@/api/beacon';
import { getSSVAPI } from '@/api/ssv-api';
import { getQueries } from '@/api/subgraph';
import type { GraphQLClient } from 'graphql-request';

export const createQueries = (graphqlClient: GraphQLClient) => {
  return getQueries(graphqlClient);
};

export const createSSVAPI = (endpoint: string) => {
  return getSSVAPI(endpoint);
};

export const createBeaconAPI = (endpoint?: string) => {
  return getBeaconAPI(endpoint);
};
