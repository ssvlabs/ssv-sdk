import type { ConfigReturnType } from '@/config'
import { validateSharesPreRegistration } from '@/libs/utils/methods'
import { mockFetchedOperators, operators as mockOperators } from '@/mock'
import { createMockConfig } from '@/mock/config'
import inconsistent_operator_ids_keyshares from '@/mock/keyshares/inconsistent_operator_ids_keyshares.json'
import invalid_operator_key_keyshares from '@/mock/keyshares/invalid_operator_key_keyshares.json'
import invalid_shares_data_keyshares from '@/mock/keyshares/invalid_shares_data_keyshares.json'
import valid_keyshares from '@/mock/keyshares/valid_keyshares.json'

import { SSVSDK } from '@/sdk'
import type { Operator } from '@/types/operator'
import { KeysharesValidationError } from '@/utils/keyshares'
import { initializeContract } from 'hardhat/contract-helpers'
import { merge } from 'lodash-es'
import { SSVKeysException } from 'ssv-keys'
import { zeroAddress } from 'viem'
import { describe, expect, it, vi } from 'vitest'

const mockConfig = {
  walletClient: {
    account: {
      address: '0x012f55B6Cc5D57F943F1E79cF00214B652513f88',
    },
  },
  contract: {
    ssv: {
      read: {
        getValidatorsPerOperatorLimit: vi.fn().mockResolvedValue(500),
      },
    },
  },
  api: {
    getOwnerNonce: vi.fn().mockResolvedValue(833),
    getValidator: vi.fn().mockResolvedValue(false),
    getOperators: vi.fn().mockResolvedValue(
      mockFetchedOperators.map(
        (o) =>
          ({
            id: String(o.id),
            publicKey: o.publicKey,
            validatorCount: '5',
            isPrivate: false,
            whitelisted: [],
            whitelistedContract: zeroAddress,
          }) satisfies Operator,
      ),
    ),
  },
} as unknown as ConfigReturnType

describe('Keyshares', async () => {
  const { ssvNetwork, ssvNetworkViews, ssvToken, wallets, publicClient } =
    await initializeContract()

  const sdk = new SSVSDK(
    createMockConfig({
      addresses: {
        setter: ssvNetwork.address,
        getter: ssvNetworkViews.address,
        token: ssvToken.address,
      },
      publicClient,
      walletClient: wallets[0],
      chain: publicClient.chain,
    }),
  )

  const operators = await sdk.api.getOperators({
    operatorIds: mockOperators.ids.map(String),
  })

  it('can validate valid keyshares', async () => {
    const { validateSharesPreRegistration } = await import('../libs/utils/methods')

    const result = await validateSharesPreRegistration(mockConfig, {
      operatorIds: mockOperators.ids.map(String),
      keyshares: valid_keyshares,
    })
    expect(result).toBeDefined()
    expect(result.available.length).toBe(9)
    expect(result.incorrect.length).toBe(0)
    expect(result.registered.length).toBe(0)
  })

  it('should throw for invalid nonce', async () => {
    const { validateSharesPreRegistration } = await import('../libs/utils/methods')

    const invalidNonceConfig = merge({}, mockConfig, {
      api: {
        ...mockConfig.api,
        getOwnerNonce: vi.fn().mockResolvedValue(832),
      },
    } satisfies Partial<ConfigReturnType>)

    await expect(
      validateSharesPreRegistration(invalidNonceConfig, {
        operatorIds: mockOperators.ids.map(String),
        keyshares: valid_keyshares,
      }),
    ).rejects.toThrowError()
  })

  it('should throw for no nonce', async () => {
    const { validateSharesPreRegistration } = await import('../libs/utils/methods')

    const noNonceConfig = merge({}, mockConfig, {
      api: {
        ...mockConfig.api,
        getOwnerNonce: vi.fn().mockResolvedValue(null),
      },
    } satisfies Partial<ConfigReturnType>)

    await expect(
      validateSharesPreRegistration(noNonceConfig, {
        operatorIds: mockOperators.ids.map(String),
        keyshares: valid_keyshares,
      }),
    ).rejects.toThrowError('Failed to get owner nonce')
  })

  it('should take into account registered validators', async () => {
    const { validateSharesPreRegistration } = await import('../libs/utils/methods')

    const registeredValidatorsConfig = merge({}, mockConfig, {
      api: {
        ...mockConfig.api,
        getOwnerNonce: vi.fn().mockResolvedValue(833),
        getValidator: vi.fn().mockImplementation(({ id }) => {
          // return true for the last validator as if it is registered
          return Promise.resolve(id === valid_keyshares.shares.at(-1)?.data.publicKey)
        }),
      },
    } satisfies Partial<ConfigReturnType>)

    const result = await validateSharesPreRegistration(registeredValidatorsConfig, {
      operatorIds: mockOperators.ids.map(String),
      keyshares: valid_keyshares,
    })
    expect(result).toBeDefined()
    expect(result.available.length).toBe(8)
    expect(result.incorrect.length).toBe(0)
    expect(result.registered.length).toBe(1)
  })

  it('should throw if every validator is registered', async () => {
    const { validateSharesPreRegistration } = await import('../libs/utils/methods')

    const registeredValidatorsConfig = merge({}, mockConfig, {
      api: {
        ...mockConfig.api,
        getOwnerNonce: vi.fn().mockResolvedValue(833),
        getValidator: vi.fn().mockResolvedValue(true),
      },
    } satisfies Partial<ConfigReturnType>)

    await expect(
      validateSharesPreRegistration(registeredValidatorsConfig, {
        operatorIds: mockOperators.ids.map(String),
        keyshares: valid_keyshares,
      }),
    ).rejects.toThrow()
  })


  it('should throw for invalid operator key', async () => {
    await expect(
      sdk.utils.validateKeysharesJSON({
        account: '0x012f55B6Cc5D57F943F1E79cF00214B652513f88',
        operators,
        keyshares: invalid_operator_key_keyshares,
      }),
    ).rejects.toThrow(SSVKeysException)
  })

  it('should throw for invalid shares data', async () => {
    await expect(
      sdk.utils.validateKeysharesJSON({
        account: '0x012f55B6Cc5D57F943F1E79cF00214B652513f88',
        operators,
        keyshares: invalid_shares_data_keyshares,
      }),
    ).rejects.toThrow(SSVKeysException)
  })

  it('should throw for inconsistent operator IDs', async () => {
    await expect(
      sdk.utils.validateKeysharesJSON({
        account: '0x012f55B6Cc5D57F943F1E79cF00214B652513f88',
        operators,
        keyshares: inconsistent_operator_ids_keyshares,
      }),
    ).rejects.toThrow(KeysharesValidationError)
  })

  it('should throw an error when operator is not found', async () => {
    const invalidOperators = mockFetchedOperators.slice(0, 3)

    await expect(
      sdk.utils.validateKeysharesJSON({
        account: '0x012f55B6Cc5D57F943F1E79cF00214B652513f88',
        operators: invalidOperators,
        keyshares: valid_keyshares,
      }),
    ).rejects.toThrow(KeysharesValidationError)
  })

  it('should throw when operator is private and account is not whitelisted', async () => {
    const { validateSharesPreRegistration } = await import('../libs/utils/methods')

    const privateOperatorConfig = merge({}, mockConfig, {
      api: {
        ...mockConfig.api,
        getOperators: vi.fn().mockResolvedValue(
          mockFetchedOperators.map(
            (o) =>
              ({
                id: String(o.id),
                publicKey: o.publicKey,
                validatorCount: '5',
                isPrivate: true,
                whitelisted: ['0x1234567890123456789012345678901234567890'],
                whitelistedContract: zeroAddress,
              }) satisfies Operator,
          ),
        ),
      },
    } satisfies Partial<ConfigReturnType>)

    await expect(
      validateSharesPreRegistration(privateOperatorConfig, {
        operatorIds: mockOperators.ids.map(String),
        keyshares: valid_keyshares,
      }),
    ).rejects.toThrow()
  })

  it('should throw when operator has reached max validator count', async () => {
    const maxedOutOperators = merge({}, mockConfig, {
      api: {
        ...mockConfig.api,
        getOperators: vi.fn().mockResolvedValue(
          mockFetchedOperators.map(
            (o) =>
              ({
                id: String(o.id),
                publicKey: o.publicKey,
                validatorCount: '500',
                isPrivate: false,
                whitelisted: [],
                whitelistedContract: zeroAddress,
              }) satisfies Operator,
          ),
        ),
      },
    } satisfies Partial<ConfigReturnType>)

    await expect(
      validateSharesPreRegistration(maxedOutOperators, {
        operatorIds: mockOperators.ids.map(String),
        keyshares: valid_keyshares,
      }),
    ).rejects.toThrow()
  })
})
