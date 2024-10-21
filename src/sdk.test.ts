import { subgraph } from '@/config/chains'
import { getQueries } from '@/queries'
import { SSVSDK } from '@/sdk'
import { GraphQLClient } from 'graphql-request'
import { verifyMessage } from 'viem'
import { describe, expect, it } from 'vitest'
import { HoleskyV4GetterABI } from './abi/holesky/v4/getter'

describe('SSVSDK 🛜  Holesky', () => {
  const client = new GraphQLClient(subgraph.holesky)
  const queries = getQueries(client)
  it('testing queries', async () => {
    const nonce = await queries.getOwnerNonce({ owner: process.env.OWNER_ADDRESS! })
    expect(nonce).toBeDefined()

    const cluster = await queries.getCluster({
      id: '9518e179681d7fd47f81ef8ea4502c9f6f7744583834f1a3f445004d0a9e76a4',
    })
    expect(cluster).toBeTruthy()
  })
  it('should have the right account address', () => {
    const sdk = new SSVSDK({
      chain: 'holesky',
      private_key: process.env.PRIVATE_KEY,
    })

    expect(sdk.walletClient.account?.address).toBe(process.env.OWNER_ADDRESS)
  })

  it('should have the right rpc endpoint', () => {
    const rpcEndpoint = 'https://holesky.infura.io/v3/hello'
    const sdk = new SSVSDK({
      chain: 'holesky',
      private_key: process.env.PRIVATE_KEY,
      rpc_endpoint: rpcEndpoint,
    })

    expect(sdk.publicClient.transport.url).toBe(rpcEndpoint)
  })
  it('can read contract without setting an rpc', async () => {
    const sdk = new SSVSDK({
      chain: 'holesky',
      private_key: process.env.PRIVATE_KEY,
    })

    const data = await sdk.publicClient.readContract({
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

    const signature = await sdk.walletClient.signMessage({
      message: 'Hello',
      account: sdk.walletClient.account!,
    })

    const verify = await verifyMessage({
      address: sdk.walletClient.account!.address,
      message: 'Hello',
      signature,
    })

    expect(verify).toBe(true)
  })

  it(
    'can send a transaction (⚠️ no-test commented out)',
    async () => {
      // const sdk = new SSVSDK({
      //   chain: 'holesky',
      //   private_key: process.env.PRIVATE_KEY,
      // })
      // const { request } = await sdk.publicClient.simulateContract({
      //   address: '0x0d33801785340072C452b994496B19f196b7eE15',
      //   abi: HoleskyV4SetterABI,
      //   functionName: 'withdrawOperatorEarnings',
      //   args: [846n, parseEther('0.000001')],
      //   account: sdk.walletClient.account!,
      // })
      // const txHash = await sdk.walletClient.writeContract(request)
      // expect(txHash).toBeDefined()
      // const receipt = await sdk.publicClient.waitForTransactionReceipt({
      //   hash: txHash,
      // })
      // expect(receipt).toBeDefined()
    },
    {
      timeout: 60000,
    },
  )
})
