import { MainnetV4GetterABI } from '@/abi/mainnet/v4/getter';
import { MainnetV4SetterABI } from '@/abi/mainnet/v4/setter';
import { TokenABI } from '@/abi/token';
import { createReader, createWriter } from '@/contract-interactions/create';
import type {
  ContractInteractions,
  ReaderFunctions,
  WriterFunctions,
} from '@/contract-interactions/types';
import { createBeaconAPI, createQueries, createSSVAPI } from '@/libs/api';
import type { ConfigArgs } from '@/utils/zod/config';
import { configArgsSchema } from '@/utils/zod/config';
import { GraphQLClient } from 'graphql-request';
import type { Address, Chain, PublicClient, WalletClient } from 'viem';
import type { ContractAddresses, SupportedChainsIDs } from './chains';
import {
  contracts,
  graph_endpoints,
  paid_graph_endpoints,
  rest_endpoints,
} from './chains';

export type ConfigReturnType = {
  publicClient: PublicClient;
  walletClient?: WalletClient;
  chain: Chain;
  api: ReturnType<typeof createQueries> &
    ReturnType<typeof createSSVAPI> &
    ReturnType<typeof createBeaconAPI>;
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
  beacon: {
    endpoint?: string;
  };
};

const isNonNullObject = (
  value: unknown,
): value is Record<PropertyKey, unknown> => {
  return typeof value === 'object' && value !== null;
};

export const isConfig = (props: unknown): props is ConfigReturnType => {
  if (!isNonNullObject(props)) {
    return false;
  }

  return (
    'publicClient' in props &&
    isNonNullObject(props.publicClient) &&
    'chain' in props &&
    isNonNullObject(props.chain) &&
    'api' in props &&
    isNonNullObject(props.api) &&
    'contractAddresses' in props &&
    isNonNullObject(props.contractAddresses) &&
    'contract' in props &&
    isNonNullObject(props.contract) &&
    'subgraph' in props &&
    isNonNullObject(props.subgraph) &&
    'rest' in props &&
    isNonNullObject(props.rest) &&
    'beacon' in props &&
    isNonNullObject(props.beacon)
  );
};

type CreateContractInteractionsArgs = {
  walletClient?: WalletClient;
  publicClient: PublicClient;
  addresses: ContractAddresses;
};

export const createContractInteractions = ({
  walletClient,
  publicClient,
  addresses,
}: CreateContractInteractionsArgs) => {
  return {
    ssv: {
      write: createWriter<'setter'>({
        abi: MainnetV4SetterABI,
        walletClient,
        publicClient,
        contractAddress: addresses.setter,
        eventSources: [
          {
            abi: MainnetV4SetterABI,
            address: addresses.setter,
          },
          {
            abi: TokenABI,
            address: addresses.token,
          },
        ],
      }),
      read: createReader<'getter'>({
        abi: MainnetV4GetterABI,
        publicClient,
        contractAddress: addresses.getter,
      }),
    },
    token: {
      read: createReader<'token'>({
        abi: TokenABI,
        publicClient,
        contractAddress: addresses.token,
      }),
      write: createWriter<'token'>({
        abi: TokenABI,
        walletClient,
        publicClient,
        contractAddress: addresses.token,
        eventSources: [
          {
            abi: TokenABI,
            address: addresses.token,
          },
        ],
      }),
    },
  };
};

export const createConfig = (props: ConfigArgs): ConfigReturnType => {
  const { walletClient, publicClient, extendedConfig } =
    configArgsSchema.parse(props);

  const hasAPIKey = Boolean(extendedConfig?.subgraph?.apiKey);
  const chainId = publicClient.chain!.id as SupportedChainsIDs;
  const chainContracts = contracts[chainId];

  const addresses = {
    setter: extendedConfig?.contracts?.setter || chainContracts.setter,
    getter: extendedConfig?.contracts?.getter || chainContracts.getter,
    token: extendedConfig?.contracts?.token || chainContracts.token,
  };

  const contract = createContractInteractions({
    walletClient: walletClient,
    publicClient: publicClient,
    addresses,
  });

  const graphEndpoint =
    extendedConfig?.subgraph?.endpoint ||
    (hasAPIKey ? paid_graph_endpoints[chainId] : graph_endpoints[chainId]);

  const restEndpoint =
    extendedConfig?.rest?.endpoint || rest_endpoints[chainId];

  const beaconEndpoint = extendedConfig?.beacon?.endpoint;

  const graphQLClient = new GraphQLClient(
    graphEndpoint,
    hasAPIKey
      ? {
          headers: {
            Authorization: `Bearer ${extendedConfig?.subgraph?.apiKey}`,
          },
        }
      : undefined,
  );

  return {
    publicClient: publicClient,
    walletClient: walletClient,
    chain: publicClient.chain!,
    api: {
      ...createQueries(graphQLClient),
      ...createSSVAPI(restEndpoint),
      ...createBeaconAPI(beaconEndpoint),
    },
    subgraph: {
      client: graphQLClient,
      endpoint: graphEndpoint,
    },
    rest: {
      endpoint: restEndpoint,
    },
    beacon: {
      endpoint: beaconEndpoint,
    },
    contractAddresses: addresses,
    contract,
  };
};
