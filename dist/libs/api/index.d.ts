import { GraphQLClient } from 'graphql-request';
export declare const createQueries: (graphqlClient: GraphQLClient) => {
    getOwnerNonce: import('../../types/methods').RemoveConfigArg<typeof import('../../api/subgraph').getOwnerNonce>;
    toSolidityCluster: import('../../types/methods').RemoveConfigArg<typeof import('../../api/subgraph').toSolidityCluster>;
    getCluster: import('../../types/methods').RemoveConfigArg<typeof import('../../api/subgraph').getCluster>;
    getClusters: import('../../types/methods').RemoveConfigArg<typeof import('../../api/subgraph').getClusters>;
    getOperator: import('../../types/methods').RemoveConfigArg<typeof import('../../api/subgraph').getOperator>;
    getOperators: import('../../types/methods').RemoveConfigArg<typeof import('../../api/subgraph').getOperators>;
    getValidators: import('../../types/methods').RemoveConfigArg<typeof import('../../api/subgraph').getValidators>;
    getValidator: import('../../types/methods').RemoveConfigArg<typeof import('../../api/subgraph').getValidator>;
    getClusterBalance: import('../../types/methods').RemoveConfigArg<typeof import('../../api/subgraph').getClusterBalance>;
    getDaoValues: import('../../types/methods').RemoveConfigArg<typeof import('../../api/subgraph').getDaoValues>;
};
export declare const createSSVAPI: (endpoint: string) => {
    checkOperatorDKGEnabled: (dkgAddresses: {
        id: string;
        address: string;
    }[]) => Promise<{
        id: string;
        isHealthy: boolean;
    }[]>;
};
