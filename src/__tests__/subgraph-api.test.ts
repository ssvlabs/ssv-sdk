import {
  getCluster,
  getClusterSnapshot,
  getClusters,
  getDaoValues,
  getOperator,
  getOwnerNonce,
  getQueries,
} from '@/api/subgraph';
import {
  ClusterFeeAssetTypes,
  GetClusterDocument,
  GetClustersDocument,
  GetOwnerNonceByBlockDocument,
  GetOwnerNonceDocument,
  GetClusterSnapshotDocument,
  GetDaoValuesDocument,
  GetOperatorDocument,
} from '@/graphql/graphql';
import { encodeAbiParameters, parseAbiParameters } from 'viem';
import { describe, expect, it, vi } from 'vitest';

describe('Subgraph API', () => {
  it('returns feeAsset in getCluster response', async () => {
    const client = {
      request: vi.fn().mockResolvedValue({
        _meta: {
          block: {
            number: 55,
          },
        },
        cluster: {
          owner: { id: '0x1234567890123456789012345678901234567890' },
          feeAsset: ClusterFeeAssetTypes.ETH,
          active: true,
          validatorCount: '1',
          balance: '100',
          index: '1',
          networkFeeIndex: '1',
          operatorIds: ['1', '2', '3', '4'],
          effectiveBalance: '100',
        },
      }),
    };

    const cluster = await getCluster(client as never, { id: 'cluster-1' });

    expect(client.request).toHaveBeenCalledWith(GetClusterDocument, {
      id: 'cluster-1',
    });
    expect(cluster.blockNumber).toBe(55);
    expect(cluster.cluster?.feeAsset).toBe(ClusterFeeAssetTypes.ETH);
  });

  it('returns feeAsset in getClusters response', async () => {
    const client = {
      request: vi.fn().mockResolvedValue({
        _meta: {
          block: {
            number: 56,
          },
        },
        clusters: [
          {
            id: 'cluster-eth',
            feeAsset: ClusterFeeAssetTypes.ETH,
            active: true,
            validatorCount: '1',
            balance: '100',
            index: '1',
            networkFeeIndex: '1',
            operatorIds: ['1', '2', '3', '4'],
            effectiveBalance: '100',
          },
          {
            id: 'cluster-ssv',
            feeAsset: ClusterFeeAssetTypes.SSV,
            active: true,
            validatorCount: '2',
            balance: '200',
            index: '2',
            networkFeeIndex: '2',
            operatorIds: ['1', '2', '3', '4'],
            effectiveBalance: '200',
          },
        ],
      }),
    };

    const clusters = await getClusters(client as never, { owner: '0xabc' });

    expect(client.request).toHaveBeenCalledWith(GetClustersDocument, {
      owner: '0xabc',
    });
    expect(clusters.blockNumber).toBe(56);
    expect(clusters.clusters.map((cluster) => cluster.feeAsset)).toEqual([
      ClusterFeeAssetTypes.ETH,
      ClusterFeeAssetTypes.SSV,
    ]);
  });

  it('returns effectiveBalance in getClusterSnapshot response', async () => {
    const client = {
      request: vi.fn().mockResolvedValue({
        _meta: {
          block: {
            number: 123,
          },
        },
        cluster: {
          active: true,
          validatorCount: '1',
          balance: '100',
          index: '1',
          networkFeeIndex: '1',
          effectiveBalance: '32',
        },
      }),
    };

    const cluster = await getClusterSnapshot(client as never, {
      id: 'cluster-1',
    });

    expect(client.request).toHaveBeenCalledWith(GetClusterSnapshotDocument, {
      id: 'cluster-1',
    });
    expect(cluster).toEqual({
      blockNumber: 123,
      cluster: {
        active: true,
        validatorCount: '1',
        balance: '100',
        index: '1',
        networkFeeIndex: '1',
        effectiveBalance: '32',
      },
    });
  });

  it('returns cluster snapshot together with subgraph block number', async () => {
    const client = {
      request: vi.fn().mockResolvedValue({
        _meta: {
          block: {
            number: 123,
          },
        },
        cluster: {
          active: true,
          validatorCount: '1',
          balance: '100',
          index: '1',
          networkFeeIndex: '1',
          effectiveBalance: '32',
        },
      }),
    };

    const result = await getQueries(client as never).getClusterSnapshot({
      id: 'cluster-1',
    });

    expect(client.request).toHaveBeenCalledWith(GetClusterSnapshotDocument, {
      id: 'cluster-1',
    });
    expect(result).toEqual({
      blockNumber: 123,
      cluster: {
        active: true,
        validatorCount: '1',
        balance: '100',
        index: '1',
        networkFeeIndex: '1',
        effectiveBalance: '32',
      },
    });
  });

  it('returns 0 when owner account is missing', async () => {
    const client = {
      request: vi.fn().mockResolvedValue({
        _meta: {
          block: {
            number: 321,
          },
        },
        account: null,
      }),
    };

    const nonce = await getOwnerNonce(client as never, { owner: '0xabc' });

    expect(client.request).toHaveBeenCalledWith(GetOwnerNonceDocument, {
      owner: '0xabc',
    });
    expect(nonce).toEqual({
      blockNumber: 321,
      nonce: 0,
    });
  });

  it('returns owner nonce together with subgraph block number', async () => {
    const client = {
      request: vi.fn().mockResolvedValue({
        _meta: {
          block: {
            number: 321,
          },
        },
        account: {
          nonce: '15',
        },
      }),
    };

    const result = await getOwnerNonce(client as never, {
      owner: '0xabc',
    });

    expect(client.request).toHaveBeenCalledWith(GetOwnerNonceDocument, {
      owner: '0xabc',
    });
    expect(result).toEqual({
      blockNumber: 321,
      nonce: 15,
    });
  });

  it('uses the by-block query when block is provided', async () => {
    const client = {
      request: vi.fn().mockResolvedValue({
        account: {
          nonce: '12',
        },
      }),
    };

    const nonce = await getOwnerNonce(client as never, {
      owner: '0xabc',
      block: 42,
    });

    expect(client.request).toHaveBeenCalledWith(GetOwnerNonceByBlockDocument, {
      owner: '0xabc',
      block: 42,
    });
    expect(nonce).toEqual({
      blockNumber: 42,
      nonce: 12,
    });
  });

  it('uses the requested historical block for owner nonce snapshot responses', async () => {
    const client = {
      request: vi.fn().mockResolvedValue({
        account: {
          nonce: '12',
        },
      }),
    };

    const result = await getOwnerNonce(client as never, {
      owner: '0xabc',
      block: 42,
    });

    expect(client.request).toHaveBeenCalledWith(GetOwnerNonceByBlockDocument, {
      owner: '0xabc',
      block: 42,
    });
    expect(result).toEqual({
      blockNumber: 42,
      nonce: 12,
    });
  });

  it('propagates owner nonce request failures', async () => {
    const failure = new Error('subgraph unavailable');
    const client = {
      request: vi.fn().mockRejectedValue(failure),
    };

    await expect(
      getOwnerNonce(client as never, { owner: '0xabc' }),
    ).rejects.toThrow('subgraph unavailable');
  });

  it('throws a clear error when snapshot metadata is unavailable', async () => {
    const client = {
      request: vi.fn().mockResolvedValue({
        _meta: null,
        cluster: {
          active: true,
          validatorCount: '1',
          balance: '100',
          index: '1',
          networkFeeIndex: '1',
          effectiveBalance: '32',
        },
      }),
    };

    await expect(
      getClusterSnapshot(client as never, { id: 'cluster-1' }),
    ).rejects.toThrow(
      'Subgraph endpoint must support _meta.block.number for snapshot-aware SDK reads.',
    );
  });

  it('exposes getClusterSnapshot as the canonical cluster snapshot API', async () => {
    const cluster = {
      active: true,
      validatorCount: '1',
      balance: '100',
      index: '1',
      networkFeeIndex: '1',
      effectiveBalance: '100',
    };
    const client = {
      request: vi.fn().mockResolvedValue({
        _meta: {
          block: {
            number: 5,
          },
        },
        cluster,
      }),
    };

    const api = getQueries(client as never);
    const snapshot = await api.getClusterSnapshot({
      id: 'cluster-1',
    });

    expect(client.request).toHaveBeenCalledWith(GetClusterSnapshotDocument, {
      id: 'cluster-1',
    });
    expect(snapshot).toEqual({ blockNumber: 5, cluster });
  });

  it('returns cluster data together with block number', async () => {
    const client = {
      request: vi.fn().mockResolvedValue({
        _meta: {
          block: {
            number: 55,
          },
        },
        cluster: {
          owner: { id: '0x1234567890123456789012345678901234567890' },
          feeAsset: ClusterFeeAssetTypes.ETH,
          active: true,
          validatorCount: '1',
          balance: '100',
          index: '1',
          networkFeeIndex: '1',
          operatorIds: ['1', '2', '3', '4'],
          effectiveBalance: '100',
        },
      }),
    };

    const result = await getCluster(client as never, {
      id: 'cluster-1',
    });

    expect(client.request).toHaveBeenCalledWith(GetClusterDocument, {
      id: 'cluster-1',
    });
    expect(result.blockNumber).toBe(55);
    expect(result.cluster?.feeAsset).toBe(ClusterFeeAssetTypes.ETH);
  });

  it('returns clusters data together with block number', async () => {
    const client = {
      request: vi.fn().mockResolvedValue({
        _meta: {
          block: {
            number: 56,
          },
        },
        clusters: [
          {
            id: 'cluster-1',
            feeAsset: ClusterFeeAssetTypes.ETH,
            active: true,
            validatorCount: '1',
            balance: '100',
            index: '1',
            networkFeeIndex: '1',
            operatorIds: ['1', '2', '3', '4'],
            effectiveBalance: '100',
          },
        ],
      }),
    };

    const result = await getClusters(client as never, {
      owner: '0xabc',
    });

    expect(client.request).toHaveBeenCalledWith(GetClustersDocument, {
      owner: '0xabc',
    });
    expect(result.blockNumber).toBe(56);
    expect(result.clusters).toHaveLength(1);
  });

  it('returns DAO values together with block number', async () => {
    const client = {
      request: vi.fn().mockResolvedValue({
        _meta: {
          block: {
            number: 77,
          },
        },
        daovalues: {
          networkFee: '1',
          networkFeeIndex: '2',
          networkFeeIndexBlockNumber: '3',
          networkFeeSSV: '4',
          networkFeeIndexSSV: '5',
          networkFeeIndexBlockNumberSSV: '6',
          liquidationThreshold: '7',
          liquidationThresholdSSV: '8',
          minimumLiquidationCollateral: '9',
          minimumLiquidationCollateralSSV: '10',
        },
      }),
    };

    const result = await getDaoValues(client as never, {
      daoAddress: '0xabc',
    });

    expect(client.request).toHaveBeenCalledWith(GetDaoValuesDocument, {
      daoAddress: '0xabc',
    });
    expect(result.blockNumber).toBe(77);
    expect(result.daovalues?.networkFee).toBe('1');
  });

  it('returns operator data together with block number', async () => {
    const encodedOperatorKey = encodeAbiParameters(
      parseAbiParameters('string'),
      ['operator-public-key'],
    );
    const client = {
      request: vi.fn().mockResolvedValue({
        _meta: {
          block: {
            number: 88,
          },
        },
        operator: {
          id: '1',
          publicKey: encodedOperatorKey,
          validatorCount: '1',
          isPrivate: true,
          whitelistedContract: '0x0000000000000000000000000000000000000000',
          whitelisted: [{ id: '0x1234567890123456789012345678901234567890' }],
        },
      }),
    };

    const result = await getOperator(client as never, { id: '1' });

    expect(client.request).toHaveBeenCalledWith(GetOperatorDocument, {
      id: '1',
    });
    expect(result.blockNumber).toBe(88);
    expect(result.operator?.whitelisted).toEqual([
      '0x1234567890123456789012345678901234567890',
    ]);
  });
});
