import { SSVSDK } from '@/sdk'
import hre from 'hardhat'
import { initializeContract } from 'hardhat/contract-helpers'
import { createPublicClient, http } from 'viem'
import { goerli } from 'viem/chains'
import { beforeAll, describe, expect, it } from 'vitest'

describe('SDK Initiation', () => {
  beforeAll(async () => {
    await hre.run('compile')
  })

  it(
    'can interact with the contract',
    async () => {
      const { wallets } = await initializeContract()
      expect(
        () =>
          new SSVSDK({
            publicClient: createPublicClient({
              chain: goerli,
              transport: http(),
            }),
            walletClient: wallets[0],
          }),
      ).toThrowError()
    },
    {
      timeout: 1000000,
    },
  )
})