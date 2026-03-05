import { type Address } from 'viem';
import { describe, expect, it, vi } from 'vitest';
import { type ConfigReturnType, globals } from '@/config';
import { calcDepositFromRunway } from '@/libs/utils/methods/calc-deposit-from-runway';
import { getClusterBalance } from '@/libs/utils/methods';

const mockAddress = '0x012f55B6Cc5D57F943F1E79cF00214B652513f88' as Address;
const MAX_SAFE_INTEGER_PLUS_ONE_EFFECTIVE_BALANCE = (2n ** 53n + 1n) * 32n;

const legacyValidatorUnits = (effectiveBalance: bigint) => {
  const vUnits = (globals.VUNITS_PRECISION * Number(effectiveBalance)) / 32;
  return BigInt(vUnits / globals.VUNITS_PRECISION) || 1n;
};

const createCalcDepositConfig = (effectiveBalance: bigint) =>
  ({
    api: {
      getCluster: vi.fn().mockResolvedValue({
        operatorIds: ['1'],
        effectiveBalance: effectiveBalance.toString(),
      }),
      getOperators: vi.fn().mockResolvedValue([{ fee: '1' }]),
      getDaoValues: vi.fn().mockResolvedValue({
        networkFee: '0',
        liquidationThreshold: '1',
        minimumLiquidationCollateral: '0',
      }),
    },
    contractAddresses: {
      setter: mockAddress,
    },
  }) as unknown as ConfigReturnType;

const createGetClusterBalanceConfig = (effectiveBalance: bigint) => {
  const preciseValidatorUnits = effectiveBalance / 32n;
  const clusterStartingBalance = preciseValidatorUnits + 1000n;

  return {
    walletClient: {
      account: {
        address: mockAddress,
      },
    },
    contractAddresses: {
      setter: mockAddress,
    },
    api: {
      getClusterBalance: vi.fn().mockResolvedValue({
        cluster: {
          validatorCount: '1',
          networkFeeIndex: '0',
          index: '0',
          balance: clusterStartingBalance.toString(),
          effectiveBalance: effectiveBalance.toString(),
        },
        daovalues: {
          networkFeeIndex: '1',
          networkFeeIndexBlockNumber: '0',
          networkFee: '0',
          minimumLiquidationCollateral: '0',
          liquidationThreshold: '0',
        },
        operators: [],
        _meta: {
          block: {
            number: 0,
          },
        },
      }),
    },
  } as unknown as ConfigReturnType;
};

describe('effectiveBalance precision', () => {
  it('matches legacy Number math for current calcDepositFromRunway values', async () => {
    const effectiveBalance = 64n;
    const result = await calcDepositFromRunway(
      createCalcDepositConfig(effectiveBalance),
      {
        clusterId: 'cluster-1',
        runway: 0,
      },
    );

    expect(result).toBe(legacyValidatorUnits(effectiveBalance));
  });

  it('stays precise near Number.MAX_SAFE_INTEGER in calcDepositFromRunway', async () => {
    const effectiveBalance = MAX_SAFE_INTEGER_PLUS_ONE_EFFECTIVE_BALANCE;
    const result = await calcDepositFromRunway(
      createCalcDepositConfig(effectiveBalance),
      {
        clusterId: 'cluster-1',
        runway: 0,
      },
    );
    const preciseValidatorUnits = effectiveBalance / 32n;
    const legacyRoundedValidatorUnits = legacyValidatorUnits(effectiveBalance);

    expect(legacyRoundedValidatorUnits).not.toBe(preciseValidatorUnits);
    expect(result).toBe(preciseValidatorUnits);
  });

  it('matches legacy Number math for current getClusterBalance values', async () => {
    const effectiveBalance = 64n;
    const preciseValidatorUnits = effectiveBalance / 32n;
    const clusterStartingBalance = preciseValidatorUnits + 1000n;

    const result = await getClusterBalance(
      createGetClusterBalanceConfig(effectiveBalance),
      {
        operatorIds: [1, 2, 3, 4],
      },
    );

    const legacyExpectedBalance =
      clusterStartingBalance - legacyValidatorUnits(effectiveBalance);
    expect(result.balance).toBe(legacyExpectedBalance);
  });

  it('stays precise near Number.MAX_SAFE_INTEGER in getClusterBalance', async () => {
    const effectiveBalance = MAX_SAFE_INTEGER_PLUS_ONE_EFFECTIVE_BALANCE;
    const preciseValidatorUnits = effectiveBalance / 32n;
    const clusterStartingBalance = preciseValidatorUnits + 1000n;

    const result = await getClusterBalance(
      createGetClusterBalanceConfig(effectiveBalance),
      {
        operatorIds: [1, 2, 3, 4],
      },
    );

    const legacyExpectedBalance =
      clusterStartingBalance - legacyValidatorUnits(effectiveBalance);
    expect(legacyExpectedBalance).not.toBe(1000n);
    expect(result.balance).toBe(1000n);
  });
});
