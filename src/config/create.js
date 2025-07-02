import { MainnetV4GetterABI } from '@/abi/mainnet/v4/getter';
import { MainnetV4SetterABI } from '@/abi/mainnet/v4/setter';
import { TokenABI } from '@/abi/token';
import { createReader, createWriter } from '@/contract-interactions/create';
import { createQueries, createSSVAPI } from '@/libs/api';
import { configArgsSchema } from '@/utils/zod/config';
import { GraphQLClient } from 'graphql-request';
import { chainIds, contracts, graph_endpoints, rest_endpoints } from './chains';
export const isConfig = (props) => {
    return (typeof props === 'object' &&
        props !== null &&
        'publicClient' in props &&
        'walletClient' in props &&
        'chain' in props &&
        'api' in props &&
        'graphQLClient' in props &&
        'contractAddresses' in props &&
        'contract' in props &&
        'graphEndpoint' in props &&
        'restEndpoint' in props);
};
export const createContractInteractions = ({ walletClient, publicClient, addresses, }) => {
    return {
        ssv: {
            write: createWriter({
                abi: MainnetV4SetterABI,
                walletClient,
                publicClient,
                contractAddress: addresses.setter,
            }),
            read: createReader({
                abi: MainnetV4GetterABI,
                publicClient,
                contractAddress: addresses.getter,
            }),
        },
        token: {
            read: createReader({
                abi: TokenABI,
                publicClient,
                contractAddress: addresses.token,
            }),
            write: createWriter({
                abi: TokenABI,
                walletClient,
                publicClient,
                contractAddress: addresses.token,
            }),
        },
    };
};
export const createConfig = (props) => {
    const parsed = configArgsSchema.parse(props);
    if (!parsed.walletClient.chain ||
        !parsed.publicClient.chain ||
        !chainIds.includes(parsed.walletClient.chain?.id) ||
        !chainIds.includes(parsed.publicClient.chain?.id))
        throw new Error(`Chain must be one of ${chainIds.join(', ')}`);
    const chainId = parsed.walletClient.chain.id;
    const chainContracts = contracts[chainId];
    const addresses = {
        setter: parsed._?.contractAddresses?.setter || chainContracts.setter,
        getter: parsed._?.contractAddresses?.getter || chainContracts.getter,
        token: parsed._?.contractAddresses?.token || chainContracts.token,
    };
    const contract = createContractInteractions({
        walletClient: parsed.walletClient,
        publicClient: parsed.publicClient,
        addresses,
    });
    const graphEndpoint = parsed._?.graphUrl || graph_endpoints[chainId];
    const restEndpoint = parsed._?.restUrl || rest_endpoints[chainId];
    const graphQLClient = new GraphQLClient(graphEndpoint);
    return {
        publicClient: parsed.publicClient,
        walletClient: parsed.walletClient,
        chain: parsed.walletClient.chain,
        graphEndpoint,
        restEndpoint,
        api: {
            ...createQueries(graphQLClient),
            ...createSSVAPI(restEndpoint),
        },
        graphQLClient,
        contractAddresses: addresses,
        contract,
    };
};
