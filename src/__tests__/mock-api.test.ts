import { createClusterId } from '@/utils';
import { decodeEventLog } from 'viem';
import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('viem', async () => {
  const actual = await vi.importActual('viem');
  return {
    ...actual,
    decodeEventLog: vi.fn(),
  };
});

const owner = '0x1234567890123456789012345678901234567890';
const operatorIds = [1n, 2n, 3n, 4n];
const cluster = {
  validatorCount: 1n,
  networkFeeIndex: 2n,
  index: 3n,
  active: true,
  balance: 100n,
};

const toMockApi = (api: unknown) =>
  api as {
    toSolidityCluster: (args: { owner: string }) => Promise<{
      cluster: {
        active: boolean;
        validatorCount: string;
        balance: string;
        index: string;
        networkFeeIndex: string;
        effectiveBalance: string;
      };
    }>;
  };

describe('Mock API event completeness', () => {
  let onLogs:
    | ((logs: Array<{ data: string; topics: string[] }>) => void)
    | null;
  const publicClient = {
    watchEvent: vi.fn().mockImplementation(({ onLogs: callback }) => {
      onLogs = callback;
      return vi.fn();
    }),
  };

  beforeEach(() => {
    onLogs = null;
    vi.clearAllMocks();
  });

  it('throws when missing effectiveBalance cannot be inferred', async () => {
    const { createMockApi } = await import('@/mock/api');
    createMockApi(publicClient as never);

    vi.mocked(decodeEventLog).mockReturnValueOnce({
      eventName: 'ClusterDeposited',
      args: {
        owner,
        operatorIds,
        cluster,
      },
    } as never);

    expect(onLogs).toBeTypeOf('function');
    expect(() => onLogs!([{ data: '0x', topics: [] }])).toThrow(
      'Mock cluster event "ClusterDeposited" is missing effectiveBalance and it cannot be inferred',
    );
  });

  it('stores complete snapshot when cluster event includes effectiveBalance', async () => {
    const { createMockApi } = await import('@/mock/api');
    const api = createMockApi(publicClient as never);

    vi.mocked(decodeEventLog).mockReturnValueOnce({
      eventName: 'ClusterBalanceUpdated',
      args: {
        owner,
        operatorIds,
        cluster,
        effectiveBalance: 32n,
      },
    } as never);

    expect(onLogs).toBeTypeOf('function');
    onLogs!([{ data: '0x', topics: [] }]);

    const clusterId = createClusterId(owner, operatorIds.map(Number));
    const snapshot = await toMockApi(api).toSolidityCluster({
      owner: clusterId,
    });

    expect(snapshot.cluster).toEqual({
      active: true,
      validatorCount: '1',
      balance: '100',
      index: '3',
      networkFeeIndex: '2',
      effectiveBalance: '32',
    });
  });

  it('reuses prior effectiveBalance when validatorCount is unchanged', async () => {
    const { createMockApi } = await import('@/mock/api');
    const api = createMockApi(publicClient as never);

    vi.mocked(decodeEventLog)
      .mockReturnValueOnce({
        eventName: 'ClusterBalanceUpdated',
        args: {
          owner,
          operatorIds,
          cluster,
          effectiveBalance: 32n,
        },
      } as never)
      .mockReturnValueOnce({
        eventName: 'ClusterDeposited',
        args: {
          owner,
          operatorIds,
          cluster: {
            ...cluster,
            balance: 200n,
          },
        },
      } as never);

    expect(onLogs).toBeTypeOf('function');
    onLogs!([
      { data: '0x1', topics: [] },
      { data: '0x2', topics: [] },
    ]);

    const clusterId = createClusterId(owner, operatorIds.map(Number));
    const snapshot = await toMockApi(api).toSolidityCluster({
      owner: clusterId,
    });

    expect(snapshot.cluster).toEqual({
      active: true,
      validatorCount: '1',
      balance: '200',
      index: '3',
      networkFeeIndex: '2',
      effectiveBalance: '32',
    });
  });
});
