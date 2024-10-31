import { HoleskyV4GetterABI } from '@/abi/holesky/v4/getter'
import { SSVSDK } from '@/sdk'
import { createClusterId } from '@/utils/cluster'
import { parseEther, verifyMessage } from 'viem'
import { describe, expect, it } from 'vitest'

describe('SSVSDK 🛜  Holesky', () => {
  it('can get owner nonce and cluster', async () => {
    const sdk = new SSVSDK({
      chain: 'holesky',
      private_key: process.env.PRIVATE_KEY,
    })
    const nonce = await sdk.api.getOwnerNonce({ owner: process.env.OWNER_ADDRESS! })
    expect(nonce).toBeDefined()

    const cluster = await sdk.api.getCluster({
      id: createClusterId(process.env.OWNER_ADDRESS!, [5, 7, 9, 11]),
    })

    expect(cluster).toBeTruthy()
  })

  it('should have the right account address', () => {
    const sdk = new SSVSDK({
      chain: 'holesky',
      private_key: process.env.PRIVATE_KEY,
    })

    expect(sdk.core.walletClient.account?.address).toBe(process.env.OWNER_ADDRESS)
  })

  it('should have the right rpc endpoint', () => {
    const rpcEndpoint = 'https://holesky.infura.io/v3/hello'
    const sdk = new SSVSDK({
      chain: 'holesky',
      private_key: process.env.PRIVATE_KEY,
      rpc_endpoint: rpcEndpoint,
    })

    expect(sdk.core.publicClient.transport.url).toBe(rpcEndpoint)
  })
  it('can read contract without setting an rpc', async () => {
    const sdk = new SSVSDK({
      chain: 'holesky',
      private_key: process.env.PRIVATE_KEY,
    })

    const data = await sdk.core.publicClient.readContract({
      address: '0x656d5cC4e7d49EaCC063cBB8D3e072F2841D68b4',
      abi: HoleskyV4GetterABI,
      functionName: 'ssvNetwork',
      args: [],
    })

    expect(data).toBeTruthy()
  })

  it('can sign and verify message', async () => {
    const sdk = new SSVSDK({
      chain: 'holesky',
      private_key: process.env.PRIVATE_KEY,
    })

    const signature = await sdk.core.walletClient.signMessage({
      message: 'Hello',
      account: sdk.core.walletClient.account!,
    })

    const verify = await verifyMessage({
      address: sdk.core.walletClient.account!.address,
      message: 'Hello',
      signature,
    })

    expect(verify).toBe(true)
  })

  it(
    'can send a transaction (⚠️ no-test commented out)',
    async () => {
      const sdk = new SSVSDK({
        chain: 'holesky',
        private_key: process.env.PRIVATE_KEY,
      })
      const clusters = await sdk.api.getClusters({
        owner: sdk.core.walletClient.account!.address,
      })

      const result = await sdk.clusters.deposit({
        id: clusters[0].id,
        amount: parseEther('0.1'),
        options: {
          approve: true,
        },
      })

      expect(result.hash).toBeDefined()
      expect(result.wait).toBeInstanceOf(Function)

      const receipt = await result.wait()
      expect(receipt.events).toBeInstanceOf(Array)
    },
    {
      timeout: 60000,
    },
  )
})
