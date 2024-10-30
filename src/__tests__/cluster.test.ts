import { SSVSDK } from '@/sdk'
import { parseEther } from 'viem'
import { describe, expect, it } from 'vitest'

describe('Cluster 🛜  Holesky', () => {
  it('can deposit to a cluster', async () => {
    const sdk = new SSVSDK({
      chain: 'holesky',
      private_key: process.env.PRIVATE_KEY,
    })

    const allowance = await sdk.contract.token.read.allowance({
      owner: sdk.core.walletClient.account!.address,
      spender: sdk.core.contractAddresses.setter,
    })

    await expect(
      sdk.clusters.deposit({
        id: `0x012f55b6cc5d57f943f1e79cf00214b652513f88-5-8-9-10`,
        amount: parseEther('1'),
        options: {
          approve: true,
        },
      }),
    ).resolves.not.toThrow()
  })
})
