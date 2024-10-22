import { operators } from '@/mock'
import keystores from '@/mock/keystores.json'
import { SSVSDK } from '@/sdk'
import { describe, expect, it } from 'vitest'

describe('SSV Keys', () => {
  it('can extract keys from keystore', async () => {
    const sdk = new SSVSDK({
      chain: 'holesky',
      private_key: process.env.PRIVATE_KEY,
    })

    const extracted = await sdk.utils.generateKeyShares({
      keystore: JSON.stringify(keystores),
      keystore_password: '123123123',
      operator_keys: operators.keys,
      operator_ids: operators.ids,
      owner_address: process.env.OWNER_ADDRESS!,
      nonce: 1,
    })
    expect(extracted).toBeTruthy()
  })
})
