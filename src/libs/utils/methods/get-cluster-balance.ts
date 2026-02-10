import type { ConfigReturnType } from '@/config/create';
import { globals } from '@/config/globals';
import { bigintMax, createClusterId } from '@/utils';

type GetClusterBalanceArgs = {
  operatorIds: number[];
};
export const getClusterBalance = async (
  config: ConfigReturnType,
  { operatorIds }: GetClusterBalanceArgs,
) => {
  const query = await config.api.getClusterBalance({
    daoAddress: config.contractAddresses.setter,
    operatorIds: operatorIds.map(String),
    clusterId: createClusterId(
      config.walletClient.account!.address,
      operatorIds,
    ),
  });

  if (!query.cluster || !query.daovalues || !query._meta) {
    throw new Error('Could not fetch cluster balance');
  }

  const scallingCoefficient = 100_000n;

  const cumulativeNetworkFee =
    BigInt(query.daovalues.networkFeeIndex) +
    (BigInt(query._meta.block.number) -
      BigInt(query.daovalues.networkFeeIndexBlockNumber)) *
      BigInt(query.daovalues.networkFee) -
    BigInt(query.cluster.networkFeeIndex) * scallingCoefficient;

  const cumulativeOperatorFee = query.operators.reduce(
    (acc, operator) => {
      return (
        acc +
        BigInt(operator.feeIndex) +
        (BigInt(query._meta!.block.number) -
          BigInt(operator.feeIndexBlockNumber)) *
          BigInt(operator.fee)
      );
    },
    -BigInt(query.cluster.index) * scallingCoefficient,
  );

  const operatorsFee = query.operators.reduce(
    (acc, operator) => acc + BigInt(operator.fee),
    0n,
  );

  const effectiveBalanceValidatorUnits =
    (Number(query.cluster.effectiveBalance) / 32) * globals.VUNITS_PRECISION;

  const calculatedClusterBalance =
    BigInt(query.cluster.balance) -
      ((cumulativeNetworkFee + cumulativeOperatorFee) *
        BigInt(effectiveBalanceValidatorUnits)) /
        BigInt(globals.VUNITS_PRECISION) || 1n;

  const burnRate =
    ((operatorsFee + BigInt(query.daovalues.networkFee)) *
      BigInt(effectiveBalanceValidatorUnits)) /
      BigInt(globals.VUNITS_PRECISION) || 1n;

  const mLc = BigInt(query.daovalues.minimumLiquidationCollateral);
  const LC = bigintMax(
    mLc,
    burnRate * BigInt(query.daovalues.liquidationThreshold),
  );
  const runway = calculatedClusterBalance - LC;
  const operationalRunway = runway / burnRate / globals.BLOCKS_PER_DAY;

  return {
    balance: calculatedClusterBalance,
    operationalRunway,
  };
};
