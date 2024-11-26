import { SSVSDK } from '@/sdk'
import { describe, expect, it } from 'vitest'

describe('Queries 🛜  Holesky', () => {
  it('can get owner nonce and cluster', async () => {
    const sdk = new SSVSDK({
      chain: 'holesky',
      private_key: process.env.PRIVATE_KEY,
    })

    const nonce = await sdk.api.getOwnerNonce({
      owner: process.env.OWNER_ADDRESS!,
    })
    console.log('nonce:', nonce)
    expect(nonce).toBeDefined()

    const nonce2 = await sdk.api.getOwnerNonce({
      owner: process.env.OWNER_ADDRESS!,
      block: 1517811,
    })
    console.log('nonce2:', nonce2)
    expect(nonce2).toBeDefined()
  })
})
