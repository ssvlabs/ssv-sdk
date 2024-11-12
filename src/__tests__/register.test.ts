import { createValidatorKeys } from '@/libs/utils/methods/create-validator-keys'
import { operators } from '@/mock'
import { SSVSDK } from '@/sdk'
import { describe, expect, it } from 'vitest'

describe('Register validators 🛜  Holesky', () => {
  it('can register validators', async () => {
    const sdk = new SSVSDK({
      chain: 'holesky',
      private_key: process.env.PRIVATE_KEY,
    })

    const { keystores } = await createValidatorKeys({
      count: 1,
      chain: 'holesky',
      withdrawal: process.env.OWNER_ADDRESS,
      password: '123123123',
    })

    const extracted = await sdk.utils.generateKeyShares({
      keystore: JSON.stringify(keystores[0]),
      keystore_password: '123123123',
      operator_keys: operators.keys,
      operator_ids: operators.ids.map((id) => Number(id)),
      owner_address: process.env.OWNER_ADDRESS!,
      nonce: 1,
    })
    
    const balance = await sdk.utils.getClusterBalance({ operatorIds: operators.ids.map(Number) })
    console.log('balance:', balance)

    await expect(sdk.clusters.registerValidators({ keyshares: [extracted] })).resolves.not.toThrow()
  })
})
