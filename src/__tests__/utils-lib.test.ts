import { SSVSDK } from '@/sdk'
import { formatEther } from 'viem'
import { describe, it } from 'vitest'

describe('Utils 🛜  Holesky', () => {
  it('can get cluster balance', async () => {
    const sdk = new SSVSDK({
      chain: 'holesky',
      private_key: process.env.PRIVATE_KEY,
    })

    const res = await sdk.utils.getClusterBalance({ operatorIds: [5, 8, 9, 10] })
    console.log(formatEther(res.balance))
    console.log(res.operationalRunway)
  })
})
