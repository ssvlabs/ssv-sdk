import { SSVSDK } from '@/sdk'
import hre from 'hardhat'
import { initializeContract } from 'hardhat/contract-helpers'
import { createPublicClient, createWalletClient, http } from 'viem'
import { holesky } from 'viem/chains'
import { describe, expect, it } from 'vitest'

describe('SDK Initiation', async () => {
  await hre.run('compile')
  const network = await initializeContract()

  it('should initialize the SDK', async () => {
    expect(() => {
      const transport = http(holesky.rpcUrls.default.http[0])
      const walletClient = createWalletClient({
        chain: holesky,
        account: network.wallets[0].account,
        transport,
      })
      const publicClient = createPublicClient({
        chain: holesky,
        transport,
      })
      return new SSVSDK({
        publicClient,
        walletClient,
      })
    }).not.toThrowError()
  })
  
  it('unsupported chain should throw an error', async () => {
    const network = await initializeContract()
    // initializeContract returns a hardhat chain, which is not supported by the SDK
    expect(
      () =>
        new SSVSDK({
          publicClient: network.publicClient,
          walletClient: network.wallets[0],
        }),
    ).toThrowError()
  })
})
