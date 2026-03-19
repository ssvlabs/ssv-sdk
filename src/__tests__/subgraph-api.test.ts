import {
  getCluster,
  getClusters,
  getQueries,
  toSolidityCluster,
} from '@/api/subgraph';
import {
  ClusterFeeAssetTypes,
  GetClusterDocument,
  GetClustersDocument,
  GetClusterSnapshotDocument,
} from '@/graphql/graphql';
import { describe, expect, it, vi } from 'vitest';

describe('Subgraph API', () => {
  it('returns feeAsset in getCluster response', async () => {
    const client = {
      request: vi.fn().mockResolvedValue({
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
    expect(cluster?.feeAsset).toBe(ClusterFeeAssetTypes.ETH);
  });

  it('returns feeAsset in getClusters response', async () => {
    const client = {
      request: vi.fn().mockResolvedValue({
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
    expect(clusters.map((cluster) => cluster.feeAsset)).toEqual([
      ClusterFeeAssetTypes.ETH,
      ClusterFeeAssetTypes.SSV,
    ]);
  });

  it('returns effectiveBalance in toSolidityCluster response', async () => {
    const client = {
      request: vi.fn().mockResolvedValue({
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

    const cluster = await toSolidityCluster(client as never, {
      id: 'cluster-1',
    });

    expect(client.request).toHaveBeenCalledWith(GetClusterSnapshotDocument, {
      id: 'cluster-1',
    });
    expect(cluster?.effectiveBalance).toBe('32');
  });

  it('supports deprecated getClusterSnapshot alias', async () => {
    const cluster = {
      active: true,
      validatorCount: '1',
      balance: '100',
      index: '1',
      networkFeeIndex: '1',
      effectiveBalance: '100',
    };
    const client = {
      request: vi.fn().mockResolvedValue({ cluster }),
    };

    const api = getQueries(client as never);
    const snapshotFromAlias = await api.getClusterSnapshot({ id: 'cluster-1' });
    const snapshotFromCurrent = await api.toSolidityCluster({
      id: 'cluster-1',
    });

    expect(client.request).toHaveBeenNthCalledWith(
      1,
      GetClusterSnapshotDocument,
      { id: 'cluster-1' },
    );
    expect(client.request).toHaveBeenNthCalledWith(
      2,
      GetClusterSnapshotDocument,
      { id: 'cluster-1' },
    );
    expect(snapshotFromAlias).toEqual(cluster);
    expect(snapshotFromCurrent).toEqual(cluster);
  });
});
