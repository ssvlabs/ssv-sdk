import { MainnetV4SetterABI } from '@/abi/mainnet/v4/setter'
import { TokenABI } from '@/abi/token'
import type { ConfigReturnType } from '@/config'
import { tryCatch } from '@/utils'
import { decodeEventLog, type PublicClient } from 'viem'
import { vi } from 'vitest'

export const createMockApi = (publicClient: PublicClient): ConfigReturnType['api'] => {
  const nonces = new Map<string, number>()
  const clusterSnapshots = new Map<
    string,
    {
      validatorCount: number
      networkFeeIndex: bigint
      index: bigint
      active: boolean
      balance: bigint
    }
  >()

  publicClient.watchEvent({
    onLogs: (logs) => {
      logs.forEach((log) => {
        try {
          const event = decodeEventLog({
            abi: MainnetV4SetterABI,
            data: log.data,
            topics: log.topics,
          })
          if ('cluster' in event.args) {
            clusterSnapshots.set(event.args.owner, event.args.cluster)
          }
          if (event.eventName === 'ValidatorAdded') {
            nonces.set(event.args.owner, nonces.get(event.args.owner) ?? 0 + 1)
          }
        } catch {
          for (const eventAbi of [MainnetV4SetterABI, TokenABI]) {
            tryCatch(() => {
              const event = decodeEventLog({
                abi: eventAbi,
                data: log.data,
                topics: log.topics,
              })
              console.log('event', event)
            })
          }
        }
      })
    },
  })

  return {
    getOwnerNonce: vi
      .fn()
      .mockImplementation((_args) => Promise.resolve({ account: { nonce: '1' } })),
    getClusterSnapshot: vi.fn().mockImplementation((_args) =>
      Promise.resolve({
        cluster: {
          active: true,
          validatorCount: '1',
          balance: '1000000000000000000',
          index: '0',
          networkFeeIndex: '0',
        },
      }),
    ),
    getCluster: vi.fn().mockImplementation((_args) =>
      Promise.resolve({
        cluster: {
          active: true,
          validatorCount: '1',
          balance: '1000000000000000000',
          index: '0',
          networkFeeIndex: '0',
          operatorIds: ['1', '2'],
        },
      }),
    ),
    getClusters: vi.fn().mockImplementation((_args) =>
      Promise.resolve({
        clusters: [
          {
            id: '1',
            active: true,
            validatorCount: '1',
            balance: '1000000000000000000',
            index: '0',
            networkFeeIndex: '0',
            operatorIds: ['1', '2'],
          },
        ],
      }),
    ),
    getOperator: vi.fn().mockImplementation((_args) =>
      Promise.resolve({
        operator: {
          id: '1',
          publicKey: '0x1234567890123456789012345678901234567890',
          validatorCount: '1',
          isPrivate: false,
          whitelistedContract: '0x0000000000000000000000000000000000000000',
          whitelisted: [{ id: '0x1234567890123456789012345678901234567890' }],
        },
      }),
    ),
    getOperators: vi.fn().mockImplementation((_args) =>
      Promise.resolve({
        operators: [
          {
            id: '1',
            publicKey: '0x1234567890123456789012345678901234567890',
            validatorCount: '1',
            isPrivate: false,
            whitelistedContract: '0x0000000000000000000000000000000000000000',
            whitelisted: [{ id: '0x1234567890123456789012345678901234567890' }],
          },
        ],
      }),
    ),
    getValidators: vi.fn().mockImplementation((_args) =>
      Promise.resolve({
        validators: [
          {
            id: '0x1234567890123456789012345678901234567890',
          },
        ],
      }),
    ),
    getValidator: vi.fn().mockImplementation((_args) =>
      Promise.resolve({
        validator: {
          id: '0x1234567890123456789012345678901234567890',
        },
      }),
    ),
    getClusterBalance: vi.fn().mockImplementation((_args) =>
      Promise.resolve({
        _meta: { block: { number: 1 } },
        daovalues: {
          networkFee: '100000000000000000',
          networkFeeIndex: '0',
          networkFeeIndexBlockNumber: '1',
          liquidationThreshold: '1000000000000000000',
          minimumLiquidationCollateral: '2000000000000000000',
        },
        operators: [
          {
            fee: '100000000000000000',
            feeIndex: '0',
            feeIndexBlockNumber: '1',
          },
        ],
        cluster: {
          validatorCount: '1',
          networkFeeIndex: '0',
          index: '0',
          balance: '1000000000000000000',
        },
      }),
    ),
  } as unknown as ConfigReturnType['api']
}
