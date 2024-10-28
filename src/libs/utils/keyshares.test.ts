import keyshares from '@/mock/keyshares.json'
import { SSVSDK } from '@/sdk'
import { KeysharesValidationError } from '@/utils/keyshares'
import { describe, expect, it } from 'vitest'

describe('Keyshares', () => {
  it('can validate keyshares', async () => {
    const sdk = new SSVSDK({
      chain: 'holesky',
      private_key: process.env.PRIVATE_KEY,
    })

    const { operators } = await sdk.data.getOperators({ operatorIds: ['220', '221', '223', '224'] })

    const shares = await sdk.utils.validateKeyshares({
      account: '0x012f55B6Cc5D57F943F1E79cF00214B652513f88',
      operators,
      keyshares,
    })

    expect(shares).toBeDefined()
  })

  it('should throw an error', async () => {
    const sdk = new SSVSDK({
      chain: 'holesky',
      private_key: process.env.PRIVATE_KEY,
    })

    const { operators } = await sdk.data.getOperators({
      operatorIds: ['220', '221', '223', '-1'],
    })

    try {
      const shares = await sdk.utils.validateKeyshares({
        account: '0x012f55B6Cc5D57F943F1E79cF00214B652513f88',
        operators,
        keyshares,
      })
      expect(shares).not.toBeDefined()
    } catch (error) {
      expect(error).toBeInstanceOf(KeysharesValidationError)
      expect(error).toBeDefined()
    }
  })
})
