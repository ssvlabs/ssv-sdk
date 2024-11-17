import { createValidatorKeys } from '@/libs/utils/methods/create-validator-keys'
import { SSVSDK } from '@/sdk'
import { describe, expect, it } from 'vitest'

describe('Utils 🛜  Holesky', () => {
  it('can get cluster balance', async () => {
    const sdk = new SSVSDK({
      chain: 'holesky',
      private_key: process.env.PRIVATE_KEY,
    })

    const { deposit_data } = await createValidatorKeys({
      count: 1,
      chain: 'holesky',
      withdrawal: sdk.core.walletClient.account!.address,
      password: '123123123',
    })
    await expect(sdk.utils.activateValidator(deposit_data[0])).resolves.not.toThrow()
  })
})
