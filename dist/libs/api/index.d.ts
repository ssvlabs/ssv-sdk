import { GraphQLClient } from 'graphql-request';
export declare const createQueries: (graphqlClient: GraphQLClient) => {
    getOwnerNonce: import('../../types/methods').RemoveConfigArg<typeof import('../../api/subgraph').getOwnerNonce>;
    getClusterSnapshot: import('../../types/methods').RemoveConfigArg<typeof import('../../api/subgraph').getClusterSnapshot>;
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
export declare const createBeaconAPI: (endpoint?: string) => {
    getBeaconValidator: (args: {
        validatorId: string;
        signal?: AbortSignal;
    }) => Promise<import('../../api/beacon').BeaconValidator | null>;
    getBeaconValidators: (args: {
        validatorIds: string[];
        signal?: AbortSignal;
    }) => Promise<import('../../api/beacon').BeaconValidator[]>;
    getBeaconValidatorState: (args: {
        validatorId: string;
        signal?: AbortSignal;
    }) => Promise<import('../../api/beacon').BeaconValidatorState | null>;
    getBeaconValidatorStates: (args: {
        validatorIds: string[];
        signal?: AbortSignal;
    }) => Promise<(import('../../api/beacon').BeaconValidatorState | null)[]>;
    getBeaconValidatorLifecycleStage: (state: Pick<import('../../api/beacon').BeaconValidatorState, "status">) => import('../../api/beacon').BeaconValidatorLifecycleStage;
    waitForBeaconValidatorActivation: (args: import('../../api/beacon').WaitForBeaconValidatorActivationArgs) => Promise<import('../../api/beacon').BeaconValidatorState>;
};
