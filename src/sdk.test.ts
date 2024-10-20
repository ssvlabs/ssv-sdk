import { SSVSDK } from '@/sdk'
import { verifyMessage } from 'viem'
import { describe, expect, it } from 'vitest'
import { HoleskyV4GetterABI } from './abi/holesky/v4/getter'

describe('SSVSDK 🛜  Holesky', () => {
  it('can read contract without setting an rpc', async () => {
    const sdk = new SSVSDK({
      owner_address: '0x012f55B6Cc5D57F943F1E79cF00214B652513f88',
      chain: 'holesky',
      private_key: process.env.PRIVATE_KEY as `0x${string}`,
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
      owner_address: process.env.OWNER_ADDRESS as `0x${string}`,
      chain: 'holesky',
      private_key: process.env.PRIVATE_KEY as `0x${string}`,
    })

    const signature = await sdk.walletClient.signMessage({
      message: 'Hello',
      account: sdk.account,
    })

    const verify = await verifyMessage({
      address: sdk.account.address,
      message: 'Hello',
      signature,
    })

    expect(verify).toBe(true)
  })

  it('can send a transaction (⚠️ no-test commented out)', async () => {
    // const sdk = new SSVSDK({
    //   owner_address: process.env.OWNER_ADDRESS as `0x${string}`,
    //   chain: 'holesky',
    //   private_key: process.env.PRIVATE_KEY as `0x${string}`,
    // })
    // const { request } = await sdk.publicClient.simulateContract({
    //   address: '0x0d33801785340072C452b994496B19f196b7eE15',
    //   abi: HoleskyV4SetterABI,
    //   functionName: 'withdrawOperatorEarnings',
    //   args: [846n, parseEther('0.000001')],
    //   account: sdk.account,
    // })
    // const tx = await sdk.walletClient.writeContract(request)
    // console.log(tx)
    // expect(tx).toBeDefined()
    // 0x0d33801785340072C452b994496B19f196b7eE15 setter
  })
})
