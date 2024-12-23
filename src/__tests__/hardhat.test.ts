import { createMockConfig } from '@/mock/config'
import { SSVSDK } from '@/sdk'
import hre from 'hardhat'
import { CONFIG, initializeContract } from 'hardhat/contract-helpers'
import { beforeAll, beforeEach, describe, expect, it } from 'vitest'

describe('SSV Keys', () => {
  let sdk: SSVSDK

  beforeAll(async () => {
    await hre.run('compile')
  })

  beforeEach(async () => {
    const { ssvNetwork, ssvNetworkViews, ssvToken, wallets, publicClient } = await initializeContract()

    sdk = new SSVSDK(
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
  })

  it(
    'can interact with the contract',
    async () => {
      const receipt = await sdk.operators
        .registerOperator({
          args: {
            publicKey: '0x1',
            fee: CONFIG.minimalOperatorFee,
            setPrivate: true,
          },
        })
        .then((tx) => tx.wait())
      expect(receipt).toBeDefined()
    },
    {
      timeout: 1000000,
    },
  )
})
