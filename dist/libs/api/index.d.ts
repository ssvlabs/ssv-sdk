import { GraphQLClient } from 'graphql-request';
export declare const createQueries: (graphqlClient: GraphQLClient) => {
    getOwnerNonce: import('../../types/methods').RemoveConfigArg<(client: GraphQLClient, args: import('../../graphql/graphql').Exact<{
        owner: string;
        block?: import('../../graphql/graphql').InputMaybe<number> | undefined;
    }>) => Promise<string>>;
    getClusterSnapshot: import('../../types/methods').RemoveConfigArg<(client: GraphQLClient, args: import('../../graphql/graphql').Exact<{
        id: string;
    }>) => Promise<{
        active: boolean;
        validatorCount: string;
        balance: string;
        index: string;
        networkFeeIndex: string;
    } | null | undefined>>;
    getCluster: import('../../types/methods').RemoveConfigArg<(client: GraphQLClient, args: import('../../graphql/graphql').Exact<{
        id: string;
    }>) => Promise<{
        active: boolean;
        validatorCount: string;
        balance: string;
        index: string;
        networkFeeIndex: string;
        operatorIds: string[];
    } | null | undefined>>;
    getClusters: import('../../types/methods').RemoveConfigArg<(client: GraphQLClient, args: import('../../graphql/graphql').Exact<{
        owner: string;
    }>) => Promise<{
        id: string;
        active: boolean;
        validatorCount: string;
        balance: string;
        index: string;
        networkFeeIndex: string;
        operatorIds: string[];
    }[]>>;
    getOperator: import('../../types/methods').RemoveConfigArg<(client: GraphQLClient, args: import('../../graphql/graphql').Exact<{
        id: string;
    }>) => Promise<{
        publicKey: string;
        whitelisted: `0x${string}`[];
        id: string;
        validatorCount: string;
        isPrivate: boolean;
        whitelistedContract: `0x${string}`;
    } | null>>;
    getOperators: import('../../types/methods').RemoveConfigArg<(client: GraphQLClient, args: import('../../graphql/graphql').Exact<{
        operatorIds: string | string[];
    }>) => Promise<{
        publicKey: string;
        whitelisted: `0x${string}`[];
        id: string;
        validatorCount: string;
        isPrivate: boolean;
        whitelistedContract: `0x${string}`;
    }[]>>;
    getValidators: import('../../types/methods').RemoveConfigArg<(client: GraphQLClient, args: import('../../graphql/graphql').Exact<{
        ids: `0x${string}` | `0x${string}`[];
    }>) => Promise<{
        id: `0x${string}`;
    }[]>>;
    getValidator: import('../../types/methods').RemoveConfigArg<(client: GraphQLClient, args: import('../../graphql/graphql').Exact<{
        id: string;
    }>) => Promise<{
        id: `0x${string}`;
    } | null | undefined>>;
    getClusterBalance: import('../../types/methods').RemoveConfigArg<(client: GraphQLClient, args: import('../../graphql/graphql').Exact<{
        clusterId: string;
        daoAddress: string;
        operatorIds: string | string[];
    }>) => Promise<import('../../graphql/graphql').GetClusterBalanceQuery>>;
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
