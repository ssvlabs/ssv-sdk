import { createWalletFromPrivateKey } from '@/utils/viem'
import { ConfigArgs, configArgsSchema } from '@/utils/zod/config'
import { Chain, PublicClient, WalletClient, createPublicClient, http } from 'viem'
import { chains } from './chains'

export type ConfigReturnType = {
  publicClient: PublicClient
  walletClient: WalletClient
  chain: Chain
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

  return {
    publicClient,
    walletClient,
    chain,
  }
}
