import { SSVSDK } from '@/sdk'
import { describe, expect, it } from 'vitest'

describe('Operator 🛜  Holesky', () => {
  it('can register an operator', async () => {
    const sdk = new SSVSDK({
      chain: 'holesky',
      private_key: process.env.PRIVATE_KEY,
    })

    expect(sdk.contract.write.registerOperator).toBe(sdk.operators.registerOperator)
  })
})
