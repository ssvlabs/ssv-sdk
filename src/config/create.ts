import { DepositABI } from '@/abi/deposit'
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
import { createPublicClient, http } from 'viem'
import type { ContractAddresses } from './chains'
import { chains, contracts, graph_endpoints, rest_endpoints } from './chains'

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
    deposit: ContractInteractions<'deposit'>
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
    deposit: {
      write: createWriter<'deposit'>({
        abi: DepositABI,
        walletClient,
        publicClient,
        contractAddress: addresses.deposit,
      }),
      read: createReader<'deposit'>({
        abi: DepositABI,
        publicClient,
        contractAddress: addresses.deposit,
      }),
    },
  }
}

export const createConfig = (props: ConfigArgs): ConfigReturnType => {
  const parsed = configArgsSchema.parse(props)

  const chain = chains[parsed.chain]
  const transport = http(parsed.rpc_endpoint)

  const publicClient = createPublicClient({
    chain,
    transport: transport,
  })

  const walletClient = parsed.wallet_client

  const contract = createContractInteractions({
    walletClient,
    publicClient,
    addresses: contracts[parsed.chain],
  })

  const graphEndpoint = graph_endpoints[parsed.chain]
  const restEndpoint = rest_endpoints[parsed.chain]
  const graphQLClient = new GraphQLClient(graphEndpoint)

  return {
    publicClient,
    walletClient,
    chain,
    graphEndpoint,
    restEndpoint,
    api: {
      ...createQueries(graphQLClient),
      ...createSSVAPI(restEndpoint),
    },
    graphQLClient,
    contractAddresses: contracts[parsed.chain],
    contract,
  }
}
