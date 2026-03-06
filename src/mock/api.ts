import { MainnetV4SetterABI } from '@/abi/mainnet/v4/setter';
import type { ConfigReturnType } from '@/config';
import { createClusterId } from '@/utils';
import { decodeEventLog, type PublicClient } from 'viem';
import { vi } from 'vitest';

export const createMockApi = (
  publicClient: PublicClient,
): ConfigReturnType['api'] => {
  const nonces = new Map<string, number>();
  const operators = new Map<
    string,
    {
      id: string;
      publicKey: string;
      fee: bigint;
      owner: string;
    }
  >();
  const clusterSnapshots = new Map<
    string,
    {
      validatorCount: string;
      networkFeeIndex: string;
      index: string;
      active: boolean;
      balance: string;
      effectiveBalance: string;
    }
  >();

  publicClient.watchEvent({
    onLogs: (logs) => {
      logs.forEach((log) => {
        let event;
        try {
          event = decodeEventLog({
            abi: MainnetV4SetterABI,
            data: log.data,
            topics: log.topics,
          });
        } catch {
          // do nothing
          return;
        }

        if ('cluster' in event.args) {
          const clusterId = createClusterId(
            event.args.owner,
            event.args.operatorIds.map(Number),
          );
          const previousSnapshot = clusterSnapshots.get(clusterId);
          const validatorCount = event.args.cluster.validatorCount.toString();
          const effectiveBalance =
            'effectiveBalance' in event.args &&
            typeof event.args.effectiveBalance !== 'undefined'
              ? event.args.effectiveBalance.toString()
              : previousSnapshot &&
                  previousSnapshot.validatorCount === validatorCount
                ? previousSnapshot.effectiveBalance
                : null;

          if (effectiveBalance === null) {
            throw new Error(
              `Mock cluster event "${event.eventName}" is missing effectiveBalance and it cannot be inferred`,
            );
          }

          clusterSnapshots.set(clusterId, {
            validatorCount,
            networkFeeIndex: event.args.cluster.networkFeeIndex.toString(),
            index: event.args.cluster.index.toString(),
            active: event.args.cluster.active,
            balance: event.args.cluster.balance.toString(),
            effectiveBalance,
          });
        }
        if (event.eventName === 'ValidatorAdded') {
          nonces.set(event.args.owner, (nonces.get(event.args.owner) ?? 0) + 1);
        }
        if (event.eventName === 'OperatorAdded') {
          operators.set(event.args.operatorId.toString(), {
            id: event.args.operatorId.toString(),
            publicKey: event.args.publicKey,
            fee: event.args.fee,
            owner: event.args.owner,
          });
        }
      });
    },
  });

  return {
    getOwnerNonce: vi.fn().mockImplementation((args) =>
      Promise.resolve({
        account: { nonce: (nonces.get(args.owner) ?? 0).toString() },
      }),
    ),
    toSolidityCluster: vi.fn().mockImplementation((args) => {
      const snapshot = clusterSnapshots.get(args.owner);
      return Promise.resolve({
        cluster: snapshot ?? {
          active: true,
          validatorCount: '0',
          balance: '0',
          index: '0',
          networkFeeIndex: '0',
          effectiveBalance: '0',
        },
      });
    }),
    getCluster: vi.fn().mockImplementation((args) =>
      Promise.resolve({
        cluster: {
          active: true,
          validatorCount:
            clusterSnapshots.get(args.owner)?.validatorCount ?? '0',
          balance: clusterSnapshots.get(args.owner)?.balance ?? '0',
          index: clusterSnapshots.get(args.owner)?.index ?? '0',
          networkFeeIndex:
            clusterSnapshots.get(args.owner)?.networkFeeIndex ?? '0',
          operatorIds: Array.from(operators.keys()),
          effectiveBalance:
            clusterSnapshots.get(args.owner)?.effectiveBalance ?? '0',
        },
      }),
    ),
    getClusters: vi.fn().mockImplementation(() =>
      Promise.resolve({
        clusters: Array.from(clusterSnapshots.entries()).map(
          ([owner, snapshot]) => ({
            id: owner,
            active: snapshot.active,
            validatorCount: snapshot.validatorCount,
            balance: snapshot.balance,
            index: snapshot.index,
            networkFeeIndex: snapshot.networkFeeIndex,
            operatorIds: Array.from(operators.keys()),
            effectiveBalance: snapshot.effectiveBalance,
          }),
        ),
      }),
    ),
    getOperator: vi.fn().mockImplementation((args) => {
      const operator = operators.get(args.operatorId);
      return Promise.resolve({
        operator: operator
          ? {
              id: operator.id,
              publicKey: operator.publicKey,
              validatorCount: '0',
              isPrivate: false,
              whitelistedContract: '0x0000000000000000000000000000000000000000',
              whitelisted: [],
            }
          : null,
      });
    }),
    getOperators: vi.fn().mockImplementation(() =>
      Promise.resolve({
        operators: Array.from(operators.values()).map((operator) => ({
          id: operator.id,
          publicKey: operator.publicKey,
          validatorCount: '0',
          isPrivate: false,
          whitelistedContract: '0x0000000000000000000000000000000000000000',
          whitelisted: [],
        })),
      }),
    ),
    getValidators: vi.fn().mockImplementation(() =>
      Promise.resolve({
        validators: Array.from(operators.values()).map((operator) => ({
          id: operator.publicKey,
        })),
      }),
    ),
    getValidator: vi.fn().mockImplementation((args) => {
      const validator = Array.from(operators.values()).find(
        (op) => op.publicKey === args.validatorId,
      );
      return Promise.resolve({
        validator: validator
          ? {
              id: validator.publicKey,
            }
          : null,
      });
    }),
    getClusterBalance: vi.fn().mockImplementation((args) => {
      const snapshot = clusterSnapshots.get(args.owner);
      return Promise.resolve({
        _meta: { block: { number: 1 } },
        daovalues: {
          networkFee: '100000000000000000',
          networkFeeIndex: '0',
          networkFeeIndexBlockNumber: '1',
          liquidationThreshold: '1000000000000000000',
          minimumLiquidationCollateral: '2000000000000000000',
        },
        operators: Array.from(operators.values()).map((operator) => ({
          fee: operator.fee.toString(),
          feeIndex: '0',
          feeIndexBlockNumber: '1',
        })),
        cluster: snapshot ?? {
          validatorCount: '0',
          networkFeeIndex: '0',
          index: '0',
          balance: '0',
          effectiveBalance: '0',
        },
      });
    }),
  } as unknown as ConfigReturnType['api'];
};
