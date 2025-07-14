import { ContractInteractions, ReaderFunctions, WriterFunctions } from '../contract-interactions/types';
import { createQueries, createSSVAPI } from '../libs/api';
import { ConfigArgs } from '../utils/zod/config';
import { GraphQLClient } from 'graphql-request';
import { Address, Chain, PublicClient, WalletClient } from 'viem';
import { ContractAddresses } from './chains';
export type ConfigReturnType = {
    publicClient: PublicClient;
    walletClient: WalletClient;
    chain: Chain;
    api: ReturnType<typeof createQueries> & ReturnType<typeof createSSVAPI>;
    contractAddresses: {
        setter: Address;
        getter: Address;
        token: Address;
    };
    contract: {
        ssv: {
            write: WriterFunctions<'setter'>;
            read: ReaderFunctions<'getter'>;
        };
        token: ContractInteractions<'token'>;
    };
    subgraph: {
        client: GraphQLClient;
        endpoint: string;
    };
    rest: {
        endpoint: string;
    };
};
export declare const isConfig: (props: unknown) => props is ConfigReturnType;
type CreateContractInteractionsArgs = {
    walletClient: WalletClient;
    publicClient: PublicClient;
    addresses: ContractAddresses;
};
export declare const createContractInteractions: ({ walletClient, publicClient, addresses, }: CreateContractInteractionsArgs) => {
    ssv: {
        write: WriterFunctions<"setter">;
        read: ReaderFunctions<"getter">;
    };
    token: {
        read: ReaderFunctions<"token">;
        write: WriterFunctions<"token">;
    };
};
export declare const createConfig: (props: ConfigArgs) => ConfigReturnType;
export {};
