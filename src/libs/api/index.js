import { getSSVAPI } from '@/api/ssv-api';
import { getQueries } from '@/api/subgraph';
export const createQueries = (graphqlClient) => {
    return getQueries(graphqlClient);
};
export const createSSVAPI = (endpoint) => {
    return getSSVAPI(endpoint);
};
