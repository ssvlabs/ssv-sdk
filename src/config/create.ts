import { createReaders } from '@/contract-interactios/create-reader'
import { createWriters } from '@/contract-interactios/create-writer'
import { createToken } from '@/contract-interactios/token'
import { createAPI } from '@/libs/data'
import { createWalletFromPrivateKey } from '@/utils/viem'
import { ConfigArgs, configArgsSchema } from '@/utils/zod/config'
import { GraphQLClient } from 'graphql-request'
import { Address, Chain, PublicClient, WalletClient, createPublicClient, http } from 'viem'
import { chains, subgraph } from './chains'

export type ConfigReturnType = {
  publicClient: PublicClient
  walletClient: WalletClient
  chain: Chain
  api: ReturnType<typeof createAPI>
  graphQLClient: GraphQLClient
  contractAddresses: {
    setter: Address
    getter: Address
    token: Address
  }
  contract: {
    write: ReturnType<typeof createWriters>
    read: ReturnType<typeof createReaders>
    token: ReturnType<typeof createToken>
  }
}

export const contracts: Record<
  ConfigArgs['chain'],
  {
    setter: Address
    getter: Address
    token: Address
  }
> = {
  mainnet: {
    setter: '0xDD9BC35aE942eF0cFa76930954a156B3fF30a4E1',
    getter: '0xafE830B6Ee262ba11cce5F32fDCd760FFE6a66e4',
    token: '0x9D65fF81a3c488d585bBfb0Bfe3c7707c7917f54',
  },
  holesky: {
    setter: '0x38A4794cCEd47d3baf7370CcC43B560D3a1beEFA',
    getter: '0x352A18AEe90cdcd825d1E37d9939dCA86C00e281',
    token: '0xad45A78180961079BFaeEe349704F411dfF947C6',
  },
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
    write: createWriters({
      walletClient,
      publicClient,
      contractAddress: contracts[parsed.chain].setter,
    }),
    read: createReaders({
      publicClient,
      contractAddress: contracts[parsed.chain].getter,
    }),
    token: createToken({
      walletClient,
      publicClient,
      contractAddress: contracts[parsed.chain].token,
    }),
  }

  const graphQLClient = new GraphQLClient(subgraph[parsed.chain])
  return {
    publicClient,
    walletClient,
    chain,
    api: createAPI(graphQLClient),
    graphQLClient,
    contractAddresses: contracts[parsed.chain],
    contract,
  }
}
