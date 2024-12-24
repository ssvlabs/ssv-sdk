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
import { chainIds, contracts, graph_endpoints, rest_endpoints } from './chains'

export type ConfigReturnType = {
  publicClient: PublicClient
  walletClient: WalletClient
  chain: Chain
  api: ReturnType<typeof createQueries> & ReturnType<typeof createSSVAPI>
  graphQLClient: GraphQLClient
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
  graphEndpoint: string
  restEndpoint: string
}

export const isConfig = (props: unknown): props is ConfigReturnType => {
  return (
    typeof props === 'object' &&
    props !== null &&
    'publicClient' in props &&
    'walletClient' in props &&
    'chain' in props &&
    'api' in props &&
    'graphQLClient' in props &&
    'contractAddresses' in props &&
    'contract' in props &&
    'graphEndpoint' in props &&
    'restEndpoint' in props
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
  const parsed = configArgsSchema.parse(props)
  const { walletClient, publicClient } = parsed
  if (
    !walletClient.chain ||
    !publicClient.chain ||
    !chainIds.includes(walletClient.chain?.id as SupportedChainsIDs) ||
    !chainIds.includes(publicClient.chain?.id as SupportedChainsIDs)
  )
    throw new Error(`Chain must be one of ${chainIds.join(', ')}`)

  const chainId = walletClient.chain.id as SupportedChainsIDs

  const contract = createContractInteractions({
    walletClient,
    publicClient,
    addresses: contracts[chainId],
  })

  const graphEndpoint = graph_endpoints[chainId]
  const restEndpoint = rest_endpoints[chainId]
  const graphQLClient = new GraphQLClient(graphEndpoint)

  return {
    publicClient,
    walletClient,
    chain: walletClient.chain,
    graphEndpoint,
    restEndpoint,
    api: {
      ...createQueries(graphQLClient),
      ...createSSVAPI(restEndpoint),
    },
    graphQLClient,
    contractAddresses: contracts[chainId],
    contract,
  }
}
