import { validateEvent } from '@/libs/utils/keyshares'
import { operators as mockOperators } from '@/mock'
import inconsistent_operator_ids_keyshares from '@/mock/keyshares/inconsistent_operator_ids_keyshares.json'
import invalid_operator_key_keyshares from '@/mock/keyshares/invalid_operator_key_keyshares.json'
import invalid_shares_data_keyshares from '@/mock/keyshares/invalid_shares_data_keyshares.json'
import valid_keyshares from '@/mock/keyshares/valid_keyshares.json'

import { SSVSDK } from '@/sdk'
import { KeysharesValidationError } from '@/utils/keyshares'
import { KeySharesItem, SSVKeysException } from 'ssv-keys'
import { describe, expect, it } from 'vitest'

describe('Keyshares', async () => {
  const sdk = new SSVSDK({
    chain: 'holesky',
    private_key: process.env.PRIVATE_KEY,
  })

  let operators = await sdk.api
    .getOperators({
      operatorIds: mockOperators.ids.map(String),
    })
    .then((res) => res.operators)

  it('can validate valid keyshares', async () => {
    const result = await sdk.utils.validateKeyshares({
      account: '0x012f55B6Cc5D57F943F1E79cF00214B652513f88',
      operators,
      keyshares: valid_keyshares,
    })
    expect(result).toBeInstanceOf(Array)
    expect(result[0]).toBeInstanceOf(KeySharesItem)
  })

  it('should throw for invalid operator key', async () => {
    await expect(
      sdk.utils.validateKeyshares({
        account: '0x012f55B6Cc5D57F943F1E79cF00214B652513f88',
        operators,
        keyshares: invalid_operator_key_keyshares,
      }),
    ).rejects.toThrow(SSVKeysException)
  })

  it('should throw for invalid shares data', async () => {
    await expect(
      sdk.utils.validateKeyshares({
        account: '0x012f55B6Cc5D57F943F1E79cF00214B652513f88',
        operators,
        keyshares: invalid_shares_data_keyshares,
      }),
    ).rejects.toThrow(SSVKeysException)
  })

  it('should throw for inconsistent operator IDs', async () => {
    await expect(
      sdk.utils.validateKeyshares({
        account: '0x012f55B6Cc5D57F943F1E79cF00214B652513f88',
        operators,
        keyshares: inconsistent_operator_ids_keyshares,
      }),
    ).rejects.toThrow(KeysharesValidationError)
  })

  it('should throw an error when operator is not found', async () => {
    const { operators: invalidOperators } = await sdk.api.getOperators({
      operatorIds: ['220', '221', '223', '-1'],
    })

    await expect(
      sdk.utils.validateKeyshares({
        account: '0x012f55B6Cc5D57F943F1E79cF00214B652513f88',
        operators: invalidOperators,
        keyshares: valid_keyshares,
      }),
    ).rejects.toThrow(KeysharesValidationError)
  })

  it('can validate keyshares with event', async () => {
    const result = await validateEvent(
      sdk.core,
      '0xa05e43f754661d7a58e17e0bdc55756a421ad2df991633ad02fd48513cb44630',
    )
    console.log('result:', result)
    expect(result).toBeTruthy()
  })
})
