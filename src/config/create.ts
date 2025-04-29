import { MainnetV4GetterABI } from '@/abi/mainnet/v4/getter'
import { MainnetV4SetterABI } from '@/abi/mainnet/v4/setter'
import { TokenABI } from '@/abi/token'
import { createReader, createWriter } from '@/contract-interactions/create'
import type {
  ContractInteractions,
  ReaderFunctions,
  WriterFunctions,
} from '@/contract-interactions/types'
import { createQueries, createSSVAPI } from '@/libs/api'
import type { ConfigArgs } from '@/utils/zod/config'
import { configArgsSchema } from '@/utils/zod/config'
import { GraphQLClient } from 'graphql-request'
import type { Address, Chain, PublicClient, WalletClient } from 'viem'
import type { ContractAddresses, SupportedChainsIDs } from './chains'
import { contracts, graph_endpoints, paid_graph_endpoints, rest_endpoints } from './chains'

export type ConfigReturnType = {
  publicClient: PublicClient
  walletClient: WalletClient
  chain: Chain
  api: ReturnType<typeof createQueries> & ReturnType<typeof createSSVAPI>
  contractAddresses: {
    setter: Address
    getter: Address
    token: Address
  }
  contract: {
    ssv: {
      write: WriterFunctions<'setter'>
      read: ReaderFunctions<'getter'>
    }
    token: ContractInteractions<'token'>
  }
  subgraph: {
    client: GraphQLClient
    endpoint: string
  }
  rest: {
    endpoint: string
  }
}

export const isConfig = (props: unknown): props is ConfigReturnType => {
  return (
    typeof props === 'object' &&
    props !== null &&
    'publicClient' in props &&
    'walletClient' in props &&
    'chain' in props &&
    'api' in props &&
    'contractAddresses' in props &&
    'contract' in props &&
    'subgraph' in props &&
    'rest' in props
  )
}

type CreateContractInteractionsArgs = {
  walletClient: WalletClient
  publicClient: PublicClient
  addresses: ContractAddresses
}

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
      }),
    },
  }
}

export const createConfig = (props: ConfigArgs): ConfigReturnType => {
  const { walletClient, publicClient, extendedConfig } = configArgsSchema.parse(props)

  const hasAPIKey = Boolean(extendedConfig?.subgraph?.apiKey)
  const chainId = walletClient.chain!.id as SupportedChainsIDs
  const chainContracts = contracts[chainId]

  const addresses = {
    setter: extendedConfig?.contracts?.setter || chainContracts.setter,
    getter: extendedConfig?.contracts?.getter || chainContracts.getter,
    token: extendedConfig?.contracts?.token || chainContracts.token,
  }

  const contract = createContractInteractions({
    walletClient: walletClient,
    publicClient: publicClient,
    addresses,
  })

  const graphEndpoint =
    extendedConfig?.subgraph?.endpoint ||
    (hasAPIKey ? paid_graph_endpoints[chainId] : graph_endpoints[chainId])

  const restEndpoint = extendedConfig?.rest?.endpoint || rest_endpoints[chainId]

  const graphQLClient = new GraphQLClient(
    graphEndpoint,
    hasAPIKey
      ? { headers: { Authorization: `Bearer ${extendedConfig?.subgraph?.apiKey}` } }
      : undefined,
  )

  return {
    publicClient: publicClient,
    walletClient: walletClient,
    chain: walletClient.chain!,
    api: {
      ...createQueries(graphQLClient),
      ...createSSVAPI(restEndpoint),
    },
    subgraph: {
      client: graphQLClient,
      endpoint: graphEndpoint,
    },
    rest: {
      endpoint: restEndpoint,
    },
    contractAddresses: addresses,
    contract,
  }
}
