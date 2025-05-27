import { type getOperator } from '@/api/subgraph'
import { type Address } from 'abitype'
import { type Hex } from 'viem'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { type ConfigReturnType } from '../config/create'

// Mock data
const mockOperatorId = '1'
const mockContractAddress = '0x1234567890123456789012345678901234567890' as Address
const mockAccount = '0x2234567890123456789012345678901234567890' as Address
const mockZeroAddress = '0x0000000000000000000000000000000000000000' as Address
const mockOtherAddress = '0x3234567890123456789012345678901234567890' as Address

const mockConfig = {
  walletClient: {
    account: {
      address: mockContractAddress,
    },
  },
  contract: {
    ssv: {
      read: {
        getOperatorEarnings: vi.fn().mockResolvedValue(2000n),
        isWhitelistingContract: vi.fn(),
        isAddressWhitelistedInWhitelistingContract: vi.fn(),
      },
      write: {
        withdrawOperatorEarnings: vi.fn().mockResolvedValue({ hash: '0x123' }),
        withdrawAllOperatorEarnings: vi.fn().mockResolvedValue({ hash: '0x123' }),
        setOperatorsWhitelists: vi.fn().mockResolvedValue({ hash: '0x123' }),
      },
    },
  },
} as unknown as ConfigReturnType

// Mock operator data
const createMockOperator = (overrides?: Partial<Awaited<ReturnType<typeof getOperator>>>) => ({
  id: mockOperatorId,
  publicKey: '0x1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890' as Hex,
  validatorCount: '0',
  isPrivate: false,
  whitelisted: [],
  whitelistedContract: mockZeroAddress,
  ...overrides,
})

describe('Operator Methods', () => {
  describe('withdraw', () => {
    it('should withdraw partial earnings', async () => {
      const { withdraw } = await import('../libs/operator/methods')

      const result = await withdraw(mockConfig, {
        args: {
          operatorId: mockOperatorId,
          amount: 1000n,
        },
      })

      expect(result).toBeDefined()
      expect(mockConfig.contract.ssv.read.getOperatorEarnings).toHaveBeenCalledWith({
        id: 1n,
      })
      expect(mockConfig.contract.ssv.write.withdrawOperatorEarnings).toHaveBeenCalledWith({
        args: {
          operatorId: 1n,
          amount: 1000n,
        },
      })
    })

    it('should withdraw all earnings when amount >= balance', async () => {
      const { withdraw } = await import('../libs/operator/methods')

      const result = await withdraw(mockConfig, {
        args: {
          operatorId: mockOperatorId,
          amount: 2000n,
        },
      })

      expect(result).toBeDefined()
      expect(mockConfig.contract.ssv.read.getOperatorEarnings).toHaveBeenCalledWith({
        id: 1n,
      })
      expect(mockConfig.contract.ssv.write.withdrawAllOperatorEarnings).toHaveBeenCalledWith({
        args: {
          operatorId: 1n,
        },
      })
    })
  })

  describe('setOperatorWhitelists', () => {
    beforeEach(() => {
      vi.mocked(mockConfig.contract.ssv.read.isWhitelistingContract).mockResolvedValue(true)
    })

    it('should set operator whitelists for valid contract', async () => {
      const { setOperatorWhitelists } = await import('../libs/operator/methods')

      const result = await setOperatorWhitelists(mockConfig, {
        args: {
          operatorIds: [mockOperatorId],
          contractAddress: mockContractAddress,
        },
      })

      expect(result).toBeDefined()
      expect(mockConfig.contract.ssv.read.isWhitelistingContract).toHaveBeenCalledWith({
        contractAddress: mockContractAddress,
      })
      expect(mockConfig.contract.ssv.write.setOperatorsWhitelists).toHaveBeenCalledWith({
        args: {
          operatorIds: [1n],
          whitelistAddresses: [mockContractAddress],
        },
      })
    })

    it('should throw error for invalid contract', async () => {
      const { setOperatorWhitelists } = await import('../libs/operator/methods')

      vi.mocked(mockConfig.contract.ssv.read.isWhitelistingContract).mockResolvedValue(false)

      await expect(setOperatorWhitelists(mockConfig, {
        args: {
          operatorIds: [mockOperatorId],
          contractAddress: mockContractAddress,
        },
      })).rejects.toThrow('The provided contract is not whitelisting contract')
    })
  })

  describe('canAccountUseOperator', () => {
    beforeEach(() => {
      vi.mocked(mockConfig.contract.ssv.read.isAddressWhitelistedInWhitelistingContract).mockResolvedValue(true)
    })

    it('should return true for public operator', async () => {
      const { canAccountUseOperator } = await import('../libs/operator/methods')

      const result = await canAccountUseOperator(mockConfig, createMockOperator(), mockAccount)

      expect(result).toBe(true)
    })

    it('should return true for whitelisted account', async () => {
      const { canAccountUseOperator } = await import('../libs/operator/methods')

      const result = await canAccountUseOperator(mockConfig, createMockOperator({
        isPrivate: true,
        whitelisted: [mockAccount],
      }), mockAccount)

      expect(result).toBe(true)
    })

    it('should return true for account whitelisted in contract', async () => {
      const { canAccountUseOperator } = await import('../libs/operator/methods')

      const result = await canAccountUseOperator(mockConfig, createMockOperator({
        isPrivate: true,
        whitelistedContract: mockOtherAddress,
      }), mockAccount)

      expect(result).toBe(true)
      expect(mockConfig.contract.ssv.read.isAddressWhitelistedInWhitelistingContract).toHaveBeenCalledWith({
        addressToCheck: mockAccount,
        operatorId: 1n,
        whitelistingContract: mockOtherAddress,
      })
    })

    it('should return false for non-whitelisted account', async () => {
      const { canAccountUseOperator } = await import('../libs/operator/methods')

      const result = await canAccountUseOperator(mockConfig, createMockOperator({
        isPrivate: true,
        whitelisted: [mockOtherAddress],
      }), mockAccount)

      expect(result).toBe(false)
    })

    it('should return false for null operator', async () => {
      const { canAccountUseOperator } = await import('../libs/operator/methods')

      const result = await canAccountUseOperator(mockConfig, null, mockAccount)

      expect(result).toBe(false)
    })

    it('should return false for private operator without whitelisting', async () => {
      const { canAccountUseOperator } = await import('../libs/operator/methods')

      vi.mocked(mockConfig.contract.ssv.read.isAddressWhitelistedInWhitelistingContract).mockResolvedValue(false)

      const result = await canAccountUseOperator(mockConfig, createMockOperator({
        isPrivate: true,
        whitelistedContract: mockOtherAddress,
      }), mockAccount)

      expect(result).toBe(false)
    })
  })
})
