import { createValidatorKeys } from '@/libs/utils/methods/create-validator-keys'
import { SSVSDK } from '@/sdk'
import { describe, expect, it } from 'vitest'

describe('Utils 🛜  Holesky', () => {
  it('can get cluster balance', async () => {
    const sdk = new SSVSDK({
      chain: 'holesky',
      private_key: process.env.PRIVATE_KEY,
    })

    const res = await sdk.utils.getClusterBalance({ operatorIds: [5, 8, 9, 10] })
    expect(res).toBeDefined()
  })

  it('can get cluster balance', async () => {
    const a = await createValidatorKeys('123123123', 1)
    console.log('a:', a)
  })
})
