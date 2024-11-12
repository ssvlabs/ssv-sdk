import { createContractReader } from '@/contract-interactions/create-reader'
import { createContractWriter } from '@/contract-interactions/create-writer'
import { createTokenContractInteractions } from '@/contract-interactions/token'
import { createQueries, createSSVAPI } from '@/libs/api'
import { createWalletFromPrivateKey } from '@/utils/viem'
import type { ConfigArgs } from '@/utils/zod/config'
import { configArgsSchema } from '@/utils/zod/config'
import { GraphQLClient } from 'graphql-request'
import type { Address, Chain, PublicClient, WalletClient } from 'viem'
import { createPublicClient, http } from 'viem'
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
    write: ReturnType<typeof createContractWriter>
    read: ReturnType<typeof createContractReader>
    token: ReturnType<typeof createTokenContractInteractions>
  }
  graphEndpoint: string
  restEndpoint: string
}

export const createConfig = (props: ConfigArgs): ConfigReturnType => {
  const parsed = configArgsSchema.parse(props)

  const chain = chains[parsed.chain]
  const transport = http(parsed.rpc_endpoint)

  const publicClient = createPublicClient({
    chain,
    transport: transport,
  })

  const walletClient = parsed.private_key
    ? createWalletFromPrivateKey({
        privateKey: parsed.private_key,
        chain,
        transport,
      }).client
    : parsed.wallet_client

  const contract = {
    write: createContractWriter({
      walletClient,
      publicClient,
      contractAddress: contracts[parsed.chain].setter,
    }),
    read: createContractReader({
      publicClient,
      contractAddress: contracts[parsed.chain].getter,
    }),
    token: createTokenContractInteractions({
      walletClient,
      publicClient,
      contractAddress: contracts[parsed.chain].token,
    }),
  }

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
