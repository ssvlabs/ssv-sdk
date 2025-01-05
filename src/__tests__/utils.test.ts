import {
  bigintAbs,
  bigintFloor,
  bigintifyNumbers,
  bigintMax,
  bigintMin,
  bigintRound,
  isBigIntChanged,
  roundOperatorFee,
  stringifyBigints,
} from '@/utils/bigint'
import {
  add0x,
  createClusterId,
  createEmptyCluster,
  getClusterSnapshot,
  isClusterId,
} from '@/utils/cluster'
import {
  ensureNoKeysharesErrors,
  ensureValidatorsUniqueness,
  isKeySharesItem,
  KeysharesValidationError,
  validateConsistentOperatorIds,
  validateConsistentOperatorPublicKeys,
} from '@/utils/keyshares'
import { sortNumbers } from '@/utils/number'
import { decodeOperatorPublicKey, getOperatorIds } from '@/utils/operator'
import { tryCatch } from '@/utils/try-catch'
import urlJoin from '@/utils/url-join'
import type { KeySharesItem } from 'ssv-keys'
import { encodeAbiParameters, parseEther } from 'viem'
import { describe, expect, test, vi } from 'vitest'

// Try Catch Utils Tests
describe('Try Catch Utils', () => {
  test('tryCatch returns result and null error on success', () => {
    const successFn = () => 'success'
    const [result, error] = tryCatch(successFn)

    expect(result).toBe('success')
    expect(error).toBeNull()
  })

  test('tryCatch returns null result and error on failure', () => {
    const errorMessage = 'Test error'
    const failureFn = () => {
      throw new Error(errorMessage)
    }

    const [result, error] = tryCatch(failureFn)

    expect(result).toBeNull()
    expect(error).toBeInstanceOf(Error)
    expect(error?.message).toBe(errorMessage)
  })
})

// URL Join Utils Tests
describe('URL Join Utils', () => {
  test('joins URLs with slashes correctly', () => {
    expect(urlJoin('http://example.com', 'path')).toBe('http://example.com/path')
    expect(urlJoin('http://example.com/', '/path')).toBe('http://example.com/path')
    expect(urlJoin('http://example.com/', '/path/')).toBe('http://example.com/path/')
  })

  test('handles query parameters correctly', () => {
    expect(urlJoin('http://example.com', '?query=1')).toBe('http://example.com?query=1')
    expect(urlJoin('http://example.com/', '?query=1')).toBe('http://example.com?query=1')
    expect(urlJoin('http://example.com', 'path', '?query=1')).toBe(
      'http://example.com/path?query=1',
    )
  })

  test('handles hash fragments correctly', () => {
    expect(urlJoin('http://example.com', '#hash')).toBe('http://example.com#hash')
    expect(urlJoin('http://example.com/', '#hash')).toBe('http://example.com#hash')
    expect(urlJoin('http://example.com', 'path', '#hash')).toBe('http://example.com/path#hash')
  })

  test('handles multiple path segments', () => {
    expect(urlJoin('http://example.com', 'path1', 'path2', 'path3')).toBe(
      'http://example.com/path1/path2/path3',
    )
    expect(urlJoin('http://example.com/', '/path1/', '/path2/', '/path3/')).toBe(
      'http://example.com/path1/path2/path3/',
    )
  })

  test('handles file protocol correctly', () => {
    expect(urlJoin('file:///', 'path')).toBe('file:///path')
    expect(urlJoin('file:///', '/path/')).toBe('file:///path/')
  })

  test('handles empty segments', () => {
    expect(urlJoin('http://example.com', '', 'path')).toBe('http://example.com/path')
    expect(urlJoin('http://example.com', 'path', '')).toBe('http://example.com/path')
  })
})

// Keyshares Utils Tests
describe('Keyshares Utils', () => {
  const createMockKeyshare = (overrides = {}): KeySharesItem => {
    return {
      data: {
        publicKey: 'pubkey1',
        operators: [
          { id: '1', operatorKey: 'opkey1' },
          { id: '2', operatorKey: 'opkey2' },
        ],
      },
      payload: {
        operatorIds: ['1', '2'],
      },
      error: null,
      buildPayload: vi.fn(),
      validateSingleShares: vi.fn(),
      buildSharesFromBytes: vi.fn(),
      update: vi.fn(),
      ...overrides,
    } as unknown as KeySharesItem
  }

  test('isKeySharesItem validates KeySharesItem correctly', () => {
    expect(isKeySharesItem(createMockKeyshare())).toBe(true)
    expect(isKeySharesItem({})).toBe(false)
    expect(isKeySharesItem(null)).toBe(false)
    expect(isKeySharesItem({ data: {} })).toBe(false)
  })

  test('validateConsistentOperatorIds validates operator IDs correctly', () => {
    const validKeyshares = [createMockKeyshare(), createMockKeyshare()]
    expect(() => validateConsistentOperatorIds(validKeyshares)).not.toThrow()

    const invalidKeyshare = createMockKeyshare({
      payload: { operatorIds: ['1', '3'] },
    })
    expect(() => validateConsistentOperatorIds([createMockKeyshare(), invalidKeyshare])).toThrow(
      KeysharesValidationError,
    )
  })

  test('ensureValidatorsUniqueness validates validator uniqueness', () => {
    const validKeyshares = [
      createMockKeyshare(),
      createMockKeyshare({
        data: {
          publicKey: 'pubkey2',
          operators: [
            { id: '1', operatorKey: 'opkey1' },
            { id: '2', operatorKey: 'opkey2' },
          ],
        },
      }),
    ]
    expect(() => ensureValidatorsUniqueness(validKeyshares)).not.toThrow()

    const duplicateKeyshares = [createMockKeyshare(), createMockKeyshare()]
    expect(() => ensureValidatorsUniqueness(duplicateKeyshares)).toThrow(KeysharesValidationError)
  })

  test('validateConsistentOperatorPublicKeys validates operator public keys', () => {
    const operators = [
      { id: '1', publicKey: 'opkey1' },
      { id: '2', publicKey: 'opkey2' },
    ]
    expect(validateConsistentOperatorPublicKeys([createMockKeyshare()], operators)).toBe(true)

    const invalidOperators = [
      { id: '1', publicKey: 'wrong_key' },
      { id: '2', publicKey: 'opkey2' },
    ]
    expect(() =>
      validateConsistentOperatorPublicKeys([createMockKeyshare()], invalidOperators),
    ).toThrow(KeysharesValidationError)
  })

  test('ensureNoKeysharesErrors checks for keyshare errors', () => {
    const validKeyshares = [createMockKeyshare()]
    expect(ensureNoKeysharesErrors(validKeyshares)).toBe(true)

    const keyshareWithError = createMockKeyshare({ error: new Error('Test error') })
    expect(() => ensureNoKeysharesErrors([keyshareWithError])).toThrow('Test error')
  })
})

// Number Utils Tests
describe('Number Utils', () => {
  test('sortNumbers sorts numbers and bigints correctly', () => {
    const numbers = [3, 1, 4, 1, 5]
    expect(sortNumbers(numbers)).toEqual([1, 1, 3, 4, 5])

    const bigints = [BigInt(3), BigInt(1), BigInt(4)]
    expect(sortNumbers(bigints)).toEqual([BigInt(1), BigInt(3), BigInt(4)])
  })
})

// Operator Utils Tests
describe('Operator Utils', () => {
  test('getOperatorIds returns sorted operator IDs', () => {
    const operators = [
      { id: 3, name: 'op3' },
      { id: 1, name: 'op1' },
      { id: 4, name: 'op4' },
      { id: 2, name: 'op2' },
    ]

    expect(getOperatorIds(operators)).toEqual([1, 2, 3, 4])
  })

  test('decodeOperatorPublicKey decodes public key correctly', () => {
    const originalKey = 'test-operator-key'
    const encodedKey = encodeAbiParameters([{ type: 'string' }], [originalKey])
    const decodedKey = decodeOperatorPublicKey(encodedKey)

    expect(decodedKey).toBe(originalKey)
  })
})

// BigInt Utils Tests
describe('BigInt Utils', () => {
  test('bigintMax returns maximum value', () => {
    expect(bigintMax(1n, 2n, 3n)).toBe(3n)
    expect(bigintMax(-1n, -2n, -3n)).toBe(-1n)
    expect(bigintMax(0n)).toBe(0n)
  })

  test('bigintMin returns minimum value', () => {
    expect(bigintMin(1n, 2n, 3n)).toBe(1n)
    expect(bigintMin(-1n, -2n, -3n)).toBe(-3n)
  })

  test('bigintRound rounds correctly', () => {
    expect(bigintRound(15n, 10n)).toBe(20n) // Round up
    expect(bigintRound(14n, 10n)).toBe(10n) // Round down
    expect(bigintRound(25n, 10n)).toBe(30n)
  })

  test('bigintFloor floors correctly', () => {
    const precision = 10_000_000n
    expect(bigintFloor(15_000_000n, precision)).toBe(10_000_000n)
    expect(bigintFloor(25_000_000n, precision)).toBe(20_000_000n)
  })

  test('bigintAbs returns absolute value', () => {
    expect(bigintAbs(-5n)).toBe(5n)
    expect(bigintAbs(5n)).toBe(5n)
    expect(bigintAbs(0n)).toBe(0n)
  })

  test('isBigIntChanged detects changes beyond tolerance', () => {
    expect(isBigIntChanged(parseEther('0.0001'), parseEther('0.0003'))).toBe(true)
    expect(isBigIntChanged(100n, 101n)).toBe(false) // Within default tolerance
    expect(isBigIntChanged(100n, 200n, 1000n)).toBe(false) // Within custom tolerance
  })

  test('roundOperatorFee rounds operator fee correctly', () => {
    const precision = 10_000_000n
    expect(roundOperatorFee(15_000_000n, precision)).toBe(20_000_000n)
    expect(roundOperatorFee(14_000_000n, precision)).toBe(10_000_000n)
  })

  test('stringifyBigints converts bigints to strings', () => {
    const input = {
      a: 1n,
      b: {
        c: 2n,
        d: 'string',
      },
      e: [3n, 4n],
    }
    const expected = {
      a: '1',
      b: {
        c: '2',
        d: 'string',
      },
      e: ['3', '4'],
    }
    expect(stringifyBigints(input)).toEqual(expected)
  })

  test('bigintifyNumbers converts numbers to bigints', () => {
    const numbers = [1, 2, 3]
    const expected = [1n, 2n, 3n]
    expect(bigintifyNumbers(numbers)).toEqual(expected)
  })
})

// Cluster Utils Tests
describe('Cluster Utils', () => {
  test('createClusterId creates valid cluster ID', () => {
    const ownerAddress = '0x1234567890123456789012345678901234567890'
    const operatorIds = [1, 2, 3, 4]

    expect(createClusterId(ownerAddress, operatorIds)).toBe(
      '0x1234567890123456789012345678901234567890-1-2-3-4',
    )

    // Should throw for invalid address
    expect(() => createClusterId('invalid', operatorIds)).toThrow('Invalid owner address')
  })

  test('isClusterId validates cluster IDs correctly', () => {
    const validClusterId = '0x1234567890123456789012345678901234567890-1-2-3-4'
    const invalidAddress = 'invalid-1-2-3-4'
    const tooFewOperators = '0x1234567890123456789012345678901234567890-1-2-3'
    const invalidOperators = '0x1234567890123456789012345678901234567890-1-2-3-invalid'

    expect(isClusterId(validClusterId)).toBe(true)
    expect(isClusterId(invalidAddress)).toBe(false)
    expect(isClusterId(tooFewOperators)).toBe(false)
    expect(isClusterId(invalidOperators)).toBe(false)
  })

  test('getClusterSnapshot converts cluster data correctly', () => {
    const clusterData = {
      active: true,
      balance: '1000000000000000000',
      index: '1',
      networkFeeIndex: '2',
      validatorCount: '3',
      operatorIds: ['1', '2', '3', '4'],
    }

    const snapshot = getClusterSnapshot(clusterData)

    expect(snapshot).toEqual({
      active: true,
      balance: 1000000000000000000n,
      index: 1n,
      networkFeeIndex: 2n,
      validatorCount: 3,
    })
  })

  test('createEmptyCluster creates default cluster snapshot', () => {
    const emptyCluster = createEmptyCluster()
    expect(emptyCluster).toEqual({
      validatorCount: 0,
      networkFeeIndex: 0n,
      index: 0n,
      balance: 0n,
      active: true,
    })

    const partialCluster = createEmptyCluster({
      validatorCount: 1,
      balance: 1000n,
    })
    expect(partialCluster).toEqual({
      validatorCount: 1,
      networkFeeIndex: 0n,
      index: 0n,
      balance: 1000n,
      active: true,
    })
  })

  test('add0x adds 0x prefix to hex strings', () => {
    expect(add0x('1234')).toBe('0x1234')
    expect(add0x('0x1234')).toBe('0x1234')
    expect(add0x('')).toBe('0x')
  })
})
