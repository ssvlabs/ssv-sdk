import { createMockConfig } from '@/mock/config'
import { SSVSDK } from '@/sdk'
import hre from 'hardhat'
import { initializeContract } from 'hardhat/contract-helpers'
import { describe, it } from 'vitest'

describe('SSV Keys', () => {
  it(
    'can extract keys from keystore',
    async () => {
      await hre.run('compile')
      const { ssvNetwork, ssvNetworkViews, ssvToken } = await initializeContract()

      const publicClient = await hre.viem.getPublicClient()
      const wallets = await hre.viem.getWalletClients()

      const sdk = new SSVSDK(
        createMockConfig({
          addresses: {
            setter: ssvNetwork.address,
            getter: ssvNetworkViews.address,
            token: ssvToken.address,
          },
          publicClient,
          walletClient: wallets[0],
          chain: publicClient.chain,
        }),
      )

      const cluster = await sdk.api.getCluster({
        id: `0x012f55b6cc5d57f943f1e79cf00214b652513f88-5-8-9-10`,
      })

      console.log('cluster:', cluster)
    },

    {
      timeout: 1000000,
    },
  )
})
