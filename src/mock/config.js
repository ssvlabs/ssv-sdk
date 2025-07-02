import { createContractInteractions } from '@/config';
import { createMockApi } from './api';
export const createMockConfig = (args) => {
    const contract = createContractInteractions({
        walletClient: args.walletClient,
        publicClient: args.publicClient,
        addresses: args.addresses,
    });
    return {
        chain: args.chain,
        publicClient: args.publicClient,
        walletClient: args.walletClient,
        contract,
        api: createMockApi(args.publicClient),
        graphEndpoint: {},
        restEndpoint: {},
        graphQLClient: {},
        contractAddresses: args.addresses,
    };
};
