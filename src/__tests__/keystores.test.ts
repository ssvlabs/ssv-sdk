import { operators } from '@/mock'
import { createMockConfig } from '@/mock/config'
import keystores from '@/mock/keystores.json'
import { SSVSDK } from '@/sdk'
import hre from 'hardhat'
import { initializeContract } from 'hardhat/contract-helpers'
import { describe, expect, it } from 'vitest'

describe('SSV Keys', () => {
  it(
    'can extract keys from keystore',
    async () => {
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

      const extracted = await sdk.utils.generateKeyShares({
        keystore: JSON.stringify(keystores),
        keystore_password: '123123123',
        operator_keys: operators.keys,
        operator_ids: operators.ids.map((id) => Number(id)),
        owner_address: wallets[0].account.address,
        nonce: 1,
      })

      expect(extracted).toBeTruthy()
    },
    {
      timeout: 60000,
    },
  )
})
