import { SSVData } from '@/libs/data'
import {
  Address,
  createPublicClient,
  Hex,
  http,
  PrivateKeyAccount,
  PublicClient,
  WalletClient,
} from 'viem'
import { chains } from './config/chains'
import { createWalletFromPrivateKey } from './utils/viem'
type SSVCoreProps = {
  owner_address: Address
  chain: keyof typeof chains
  rpc_endpoint?: string
} & { private_key: Hex; wallet_client?: never }

export class SSVSDK {
  readonly data: SSVData
  readonly publicClient: PublicClient
  readonly walletClient: WalletClient
  readonly account: PrivateKeyAccount
  constructor(props: SSVCoreProps) {
    this.data = new SSVData({ ...props })

    this.publicClient = createPublicClient({
      chain: chains[props.chain],
      transport: http(props.rpc_endpoint),
    })

    const wallet = createWalletFromPrivateKey({
      privateKey: props.private_key,
      chain: props.chain,
      rpcEndpoint: props.rpc_endpoint,
    })

    this.account = wallet.account
    this.walletClient = wallet.client
  }
}
