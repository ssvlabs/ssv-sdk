import { merge } from 'lodash-es';
import { type Address } from 'viem';
import { describe, expect, it, vi } from 'vitest';
import { type ConfigReturnType } from '../config/create';
import { ClusterFeeAssetTypes } from '../graphql/graphql';

const mockAddress = '0x012f55B6Cc5D57F943F1E79cF00214B652513f88' as Address;

const mockCluster = {
  owner: { id: mockAddress },
  feeAsset: ClusterFeeAssetTypes.Eth,
  active: true,
  validatorCount: '1',
  balance: '1000000000000000',
  index: '0',
  networkFeeIndex: '0',
  operatorIds: ['1', '2', '3', '4'],
  effectiveBalance: '32',
};

const mockOperators = [
  {
    id: '1',
    fee: '1000000000',
    ssvFee: '1000000000',
    publicKey: '0x01',
    whitelisted: [],
  },
  {
    id: '2',
    fee: '2000000000',
    ssvFee: '2000000000',
    publicKey: '0x02',
    whitelisted: [],
  },
  {
    id: '3',
    fee: '1500000000',
    ssvFee: '1500000000',
    publicKey: '0x03',
    whitelisted: [],
  },
  {
    id: '4',
    fee: '500000000',
    ssvFee: '500000000',
    publicKey: '0x04',
    whitelisted: [],
  },
];

const mockDaoValues = {
  networkFee: '1000000000',
  networkFeeIndex: '0',
  networkFeeIndexBlockNumber: '1000',
  networkFeeSSV: '1000000000',
  networkFeeIndexSSV: '0',
  networkFeeIndexBlockNumberSSV: '1000',
  liquidationThreshold: '214800',
  liquidationThresholdSSV: '214800',
  minimumLiquidationCollateral: '1000000000000000000',
  minimumLiquidationCollateralSSV: '1000000000000000000',
};

const createMockConfig = (overrides?: Partial<ConfigReturnType>) =>
  merge(
    {
      api: {
        getCluster: vi.fn().mockResolvedValue(mockCluster),
        getOperators: vi.fn().mockResolvedValue(mockOperators),
        getDaoValues: vi.fn().mockResolvedValue(mockDaoValues),
      },
      contractAddresses: {
        setter: mockAddress,
      },
    },
    overrides,
  ) as unknown as ConfigReturnType;

describe('calcDepositFromRunway', () => {
  it('should calculate the deposit amount for a given runway', async () => {
    const { calcDepositFromRunway } = await import(
      '../libs/utils/methods/calc-deposit-from-runway'
    );
    const config = createMockConfig();

    const result = await calcDepositFromRunway(config, {
      clusterId: 'cluster-1',
      runway: 365,
    });

    expect(result).toBeGreaterThan(0n);

    expect(config.api.getCluster).toHaveBeenCalledWith({ id: 'cluster-1' });
    expect(config.api.getOperators).toHaveBeenCalledWith({
      operatorIds: mockCluster.operatorIds,
    });
    expect(config.api.getDaoValues).toHaveBeenCalledWith({
      daoAddress: mockAddress,
    });
  });

  it('should throw when cluster is not found', async () => {
    const { calcDepositFromRunway } = await import(
      '../libs/utils/methods/calc-deposit-from-runway'
    );
    const config = createMockConfig({
      api: { getCluster: vi.fn().mockResolvedValue(null) },
    } as unknown as Partial<ConfigReturnType>);

    await expect(
      calcDepositFromRunway(config, { clusterId: 'missing', runway: 30 }),
    ).rejects.toThrow('Cluster not found');
  });

  it('should throw when operators are not found', async () => {
    const { calcDepositFromRunway } = await import(
      '../libs/utils/methods/calc-deposit-from-runway'
    );
    const config = createMockConfig({
      api: { getOperators: vi.fn().mockResolvedValue(null) },
    } as unknown as Partial<ConfigReturnType>);

    await expect(
      calcDepositFromRunway(config, { clusterId: 'cluster-1', runway: 30 }),
    ).rejects.toThrow('Operators not found');
  });

  it('should throw when DAO values are not found', async () => {
    const { calcDepositFromRunway } = await import(
      '../libs/utils/methods/calc-deposit-from-runway'
    );
    const config = createMockConfig({
      api: { getDaoValues: vi.fn().mockResolvedValue(null) },
    } as unknown as Partial<ConfigReturnType>);

    await expect(
      calcDepositFromRunway(config, { clusterId: 'cluster-1', runway: 30 }),
    ).rejects.toThrow('DAO values not found');
  });

  it('should sum operator fees correctly', async () => {
    const { calcDepositFromRunway } = await import(
      '../libs/utils/methods/calc-deposit-from-runway'
    );
    const config = createMockConfig();

    const result = await calcDepositFromRunway(config, {
      clusterId: 'cluster-1',
      runway: 30,
    });

    expect(result).toBeGreaterThan(0n);
  });

  it('should return higher total for longer runway', async () => {
    const { calcDepositFromRunway } = await import(
      '../libs/utils/methods/calc-deposit-from-runway'
    );

    const shortRunwayResult = await calcDepositFromRunway(createMockConfig(), {
      clusterId: 'cluster-1',
      runway: 30,
    });

    const longRunwayResult = await calcDepositFromRunway(createMockConfig(), {
      clusterId: 'cluster-1',
      runway: 31,
    });

    expect(longRunwayResult).toBeGreaterThan(shortRunwayResult);
  });

  it('should handle fractional runway days', async () => {
    const { calcDepositFromRunway } = await import(
      '../libs/utils/methods/calc-deposit-from-runway'
    );
    const config = createMockConfig();

    const result = await calcDepositFromRunway(config, {
      clusterId: 'cluster-1',
      runway: 0.5,
    });

    expect(result).toBeGreaterThan(0n);
  });

  it('should use ssvFee for SSV clusters', async () => {
    const { calcDepositFromRunway } = await import(
      '../libs/utils/methods/calc-deposit-from-runway'
    );
    const config = createMockConfig({
      api: {
        getCluster: vi.fn().mockResolvedValue({
          ...mockCluster,
          feeAsset: ClusterFeeAssetTypes.Ssv,
        }),
        getOperators: vi.fn().mockResolvedValue([
          { id: '1', fee: '1000', ssvFee: '10', publicKey: '0x01' },
          { id: '2', fee: '2000', ssvFee: '20', publicKey: '0x02' },
        ]),
        getDaoValues: vi.fn().mockResolvedValue({
          ...mockDaoValues,
          networkFeeSSV: '0',
          liquidationThresholdSSV: '1',
          minimumLiquidationCollateralSSV: '0',
        }),
      },
    } as unknown as Partial<ConfigReturnType>);

    const result = await calcDepositFromRunway(config, {
      clusterId: 'cluster-1',
      runway: 1,
    });

    expect(result).toBe(214830n);
  });
});
