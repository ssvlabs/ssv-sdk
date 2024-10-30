import { SSVSDK } from '@/sdk'
import { describe, expect, it } from 'vitest'

describe('Queries 🛜  Holesky', () => {
  it('can get owner nonce and cluster', async () => {
    const sdk = new SSVSDK({
      chain: 'holesky',
      private_key: process.env.PRIVATE_KEY,
    })
    const nonce = await sdk.api.getOwnerNonce({ owner: process.env.OWNER_ADDRESS! })
    expect(nonce).toBeDefined()
  })
})
