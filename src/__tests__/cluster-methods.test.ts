import type { KeySharesPayload } from '@/libs/ssv-keys/KeyShares/KeySharesData/KeySharesPayload'
import { type Hex } from 'viem'
import { describe, expect, it, vi } from 'vitest'
import { type ConfigReturnType } from '../config/create'

// Mock dependencies
vi.mock('@/utils/cluster', () => ({
  createClusterId: vi.fn().mockReturnValue('0x789'),
  createEmptyCluster: vi.fn().mockReturnValue({
    validatorCount: 0,
    networkFeeIndex: 0n,
    index: 0n,
    active: true,
    balance: 0n,
    operatorIds: [1, 2, 3, 4],
  }),
  getClusterSnapshot: vi.fn().mockReturnValue({
    validatorCount: 1,
    networkFeeIndex: 0n,
    index: 0n,
    active: true,
    balance: 1000n,
    operatorIds: [1, 2, 3, 4],
  }),
}))

vi.mock('@/utils', () => ({
  isKeySharesItem: vi.fn().mockReturnValue(false),
}))

vi.mock('../config', () => ({
  registerValidatorsByClusterSizeLimits: {
    4: 10,
  },
}))

vi.mock('ssv-keys', () => ({
  SSVKeys: vi.fn().mockImplementation(() => ({
    validateSharesPostRegistration: vi.fn().mockResolvedValue({
      isValid: true,
    }),
  })),
}))

// Mock data
const mockPublicKey = '0x123' as Hex
const mockSharesData = '0x456' as Hex
const mockOperatorIds = [1, 2, 3, 4]
const mockOperatorIdsBigInt = mockOperatorIds.map(BigInt)
const mockClusterId = '0x789' as Hex
const mockCluster = {
  validatorCount: 1,
  networkFeeIndex: 0n,
  index: 0n,
  active: true,
  balance: 1000n,
  operatorIds: mockOperatorIds,
}

// Create mock keyshares payload
const mockKeysharePayload = {
  operatorIds: mockOperatorIds,
  publicKey: mockPublicKey,
  sharesData: mockSharesData,
} as KeySharesPayload

const mockPublicClient = {
  waitForTransactionReceipt: vi.fn().mockResolvedValue({
    blockNumber: 1n,
  }),
  getContractEvents: vi.fn().mockImplementation(async () => []),
}

const mockApi = {
  getCluster: vi.fn().mockImplementation(async () => mockCluster),
  getOwnerNonce: vi.fn().mockImplementation(async () => 1),
}

const mockConfig = {
  walletClient: {
    account: {
      address: '0x123' as Hex,
    },
  },
  publicClient: mockPublicClient,
  contract: {
    ssv: {
      write: {
        registerValidator: vi.fn().mockResolvedValue({ hash: '0x123' }),
        bulkRegisterValidator: vi.fn().mockResolvedValue({ hash: '0x123' }),
        removeValidator: vi.fn().mockResolvedValue({ hash: '0x123' }),
        exitValidator: vi.fn().mockResolvedValue({ hash: '0x123' }),
        withdraw: vi.fn().mockResolvedValue({ hash: '0x123' }),
        liquidate: vi.fn().mockResolvedValue({ hash: '0x123' }),
        reactivate: vi.fn().mockResolvedValue({ hash: '0x123' }),
        setFeeRecipientAddress: vi.fn().mockResolvedValue({ hash: '0x123' }),
      },
    },
  },
  api: mockApi,
  contractAddresses: {
    setter: '0x789' as Hex,
  },
} as unknown as ConfigReturnType

describe('Cluster Methods', () => {
  describe('registerValidators', () => {
    it('should register a single validator', async () => {
      const { registerValidators } = await import('../libs/cluster/methods/register-validators')
      
      const result = await registerValidators(mockConfig, {
        args: {
          keyshares: [mockKeysharePayload],
          depositAmount: 1000n,
        },
      })

      expect(result).toBeDefined()
      expect(mockConfig.contract.ssv.write.registerValidator).toHaveBeenCalledWith(
        expect.objectContaining({
          args: {
            amount: 1000n,
            cluster: mockCluster,
            operatorIds: mockOperatorIdsBigInt,
            publicKey: mockPublicKey,
            sharesData: mockSharesData,
          },
        })
      )
    })

    it('should bulk register multiple validators', async () => {
      const { registerValidators } = await import('../libs/cluster/methods/register-validators')
      
      const mockKeyshares = [
        mockKeysharePayload,
        {
          ...mockKeysharePayload,
          publicKey: '0x789' as Hex,
          sharesData: '0x789' as Hex,
        } as KeySharesPayload,
      ]

      const result = await registerValidators(mockConfig, {
        args: {
          keyshares: mockKeyshares,
          depositAmount: 1000n,
        },
      })

      expect(result).toBeDefined()
      expect(mockConfig.contract.ssv.write.bulkRegisterValidator).toHaveBeenCalledWith(
        expect.objectContaining({
          args: {
            amount: 1000n,
            cluster: mockCluster,
            operatorIds: mockOperatorIdsBigInt,
            publicKeys: mockKeyshares.map(k => k.publicKey),
            sharesData: mockKeyshares.map(k => k.sharesData),
          },
        })
      )
    })

    it('should throw error for invalid operator count', async () => {
      const { registerValidators } = await import('../libs/cluster/methods/register-validators')
      
      const invalidKeyshare = {
        ...mockKeysharePayload,
        operatorIds: [1, 2, 3], // Only 3 operators
      } as KeySharesPayload

      await expect(registerValidators(mockConfig, {
        args: {
          keyshares: [invalidKeyshare],
          depositAmount: 1000n,
        },
      })).rejects.toThrow('Invalid number of operators in keyshares')
    })

    it('should throw error when exceeding validator limit', async () => {
      const { registerValidators } = await import('../libs/cluster/methods/register-validators')
      
      // Create 11 keyshares (limit is 10)
      const mockKeyshares = Array(11).fill(mockKeysharePayload)

      await expect(registerValidators(mockConfig, {
        args: {
          keyshares: mockKeyshares,
          depositAmount: 1000n,
        },
      })).rejects.toThrow('You can\'t register more than 10 validators in a single transaction')
    })

    it('should validate shares post registration', async () => {
      const { validateSharesPostRegistration } = await import('../libs/cluster/methods/register-validators')
      
      mockPublicClient.getContractEvents.mockImplementation(async () => [{
        args: {
          operatorIds: mockOperatorIds,
          shares: '0x123',
          publicKey: '0x456',
        },
      }])

      const result = await validateSharesPostRegistration(mockConfig, {
        txHash: '0x123' as Hex,
      })

      expect(result).toBeDefined()
      expect(result).toHaveProperty('isValid')
      expect(result).toHaveProperty('validations')
      expect(result).toHaveProperty('invalids')
      expect(result).toHaveProperty('ownerNonceAtBlock')
      expect(result).toHaveProperty('block')
    })

    it('should throw error when no validator added events found', async () => {
      const { validateSharesPostRegistration } = await import('../libs/cluster/methods/register-validators')
      
      mockPublicClient.getContractEvents.mockImplementation(async () => [])

      await expect(validateSharesPostRegistration(mockConfig, {
        txHash: '0x123' as Hex,
      })).rejects.toThrow('No ValidatorAdded events found in the receipt')
    })

    it('should throw error when owner nonce is undefined', async () => {
      const { validateSharesPostRegistration } = await import('../libs/cluster/methods/register-validators')
      
      mockApi.getOwnerNonce.mockImplementation(async () => undefined)

      await expect(validateSharesPostRegistration(mockConfig, {
        txHash: '0x123' as Hex,
      })).rejects.toThrow('Could not fetch owner nonce')
    })
  })

  describe('removeValidators', () => {
    it('should remove validators', async () => {
      const { removeValidators } = await import('../libs/cluster/methods/remove-validators')

      const result = await removeValidators(mockConfig, {
        args: {
          id: mockClusterId,
          publicKeys: [mockPublicKey],
        },
      })

      expect(result).toBeDefined()
      expect(mockConfig.contract.ssv.write.removeValidator).toHaveBeenCalledWith({
        args: {
          cluster: mockCluster,
          operatorIds: mockOperatorIdsBigInt,
          publicKey: mockPublicKey,
        },
      })
    })
  })

  describe('exitValidators', () => {
    it('should exit validators', async () => {
      const { exitValidators } = await import('../libs/cluster/methods/exit-validators')

      const result = await exitValidators(mockConfig, {
        args: {
          publicKeys: [mockPublicKey],
          operatorIds: mockOperatorIdsBigInt,
        },
      })

      expect(result).toBeDefined()
      expect(mockConfig.contract.ssv.write.exitValidator).toHaveBeenCalledWith({
        args: {
          publicKey: mockPublicKey,
          operatorIds: [mockOperatorIdsBigInt[0]],
        },
      })
    })
  })

  describe('withdraw', () => {
    it('should withdraw funds', async () => {
      const { withdraw } = await import('../libs/cluster/methods/withdraw')

      const result = await withdraw(mockConfig, {
        args: {
          id: mockClusterId,
          amount: 1000n,
        },
      })

      expect(result).toBeDefined()
      expect(mockConfig.contract.ssv.write.withdraw).toHaveBeenCalledWith({
        args: {
          cluster: mockCluster,
          operatorIds: mockOperatorIdsBigInt,
          amount: 1000n,
        },
      })
    })
  })

  describe('liquidateCluster', () => {
    it('should liquidate a cluster', async () => {
      const { liquidateCluster } = await import('../libs/cluster/methods/liquidate-cluster')

      const result = await liquidateCluster(mockConfig, {
        args: {
          id: mockClusterId,
        },
      })

      expect(result).toBeDefined()
      expect(mockConfig.contract.ssv.write.liquidate).toHaveBeenCalledWith({
        args: {
          cluster: mockCluster,
          clusterOwner: mockConfig.walletClient.account!.address,
          operatorIds: mockOperatorIdsBigInt,
        },
      })
    })
  })

  describe('reactivateCluster', () => {
    it('should reactivate a cluster', async () => {
      const { reactivateCluster } = await import('../libs/cluster/methods/reactivate-cluster')

      const result = await reactivateCluster(mockConfig, {
        args: {
          id: mockClusterId,
          amount: 1000n,
        },
      })

      expect(result).toBeDefined()
      expect(mockConfig.contract.ssv.write.reactivate).toHaveBeenCalledWith({
        args: {
          cluster: mockCluster,
          operatorIds: mockOperatorIdsBigInt,
          amount: 1000n,
        },
      })
    })
  })

  describe('setFeeRecipient', () => {
    it('should set fee recipient', async () => {
      const { setFeeRecipient } = await import('../libs/cluster/methods/set-fee-recipient')

      const result = await setFeeRecipient(mockConfig, {
        args: {
          recipient: '0x456' as Hex,
        },
      })

      expect(result).toBeDefined()
      expect(mockConfig.contract.ssv.write.setFeeRecipientAddress).toHaveBeenCalledWith({
        args: {
          recipientAddress: '0x456',
        },
      })
    })
  })
}) 