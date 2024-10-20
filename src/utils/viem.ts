import { createWalletClient, Hex, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { chains } from '../config/chains'

type CreateWalletClientProps = {
  privateKey: Hex
  chain: keyof typeof chains
  rpcEndpoint?: string
}

export const createWalletFromPrivateKey = (props: CreateWalletClientProps) => {
  const account = privateKeyToAccount(props.privateKey)

  const client = createWalletClient({
    account,
    chain: chains[props.chain],
    transport: http(props.rpcEndpoint),
  })

  return { client, account }
}
