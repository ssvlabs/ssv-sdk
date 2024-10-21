import { SSVData } from '@/libs/data'
import { PublicClient, WalletClient } from 'viem'
import { createConfig } from './config/create'
import { ConfigArgs } from './utils/zod/config'

export class SSVSDK {
  readonly data: SSVData
  readonly publicClient: PublicClient
  readonly walletClient: WalletClient
  constructor(props: ConfigArgs) {
    const config = createConfig(props)
    this.data = new SSVData(config)
    this.publicClient = config.publicClient
    this.walletClient = config.walletClient
  }
}
