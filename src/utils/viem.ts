import { Chain, createWalletClient, Hex, Transport } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'

type CreateWalletClientProps = {
  privateKey: Hex
  chain: Chain
  transport: Transport
}

export const createWalletFromPrivateKey = (props: CreateWalletClientProps) => {
  const account = privateKeyToAccount(props.privateKey)

  const client = createWalletClient({
    account,
    chain: props.chain,
    transport: props.transport,
  })

  return { client, account }
}
