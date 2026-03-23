import type { ConfigReturnType } from '@/config/create';
import { globals } from '@/config/globals';
import { ClusterFeeAssetTypes } from '@/graphql/graphql';
import { bigintMax } from '@/utils';
import { computeDailyAmount } from '@/utils/funding';

/**
 * @param clusterId - The unique identifier of the cluster.
 * @param runway - The desired operational runway in days.
 */
type CalcDepositFromRunwayArgs = {
  clusterId: string;
  runway: number;
};
export const calcDepositFromRunway = async (
  config: ConfigReturnType,
  { clusterId, runway }: CalcDepositFromRunwayArgs,
) => {
  const cluster = await config.api.getCluster({ id: clusterId });
  if (!cluster) {
    throw new Error('Cluster not found');
  }

  const operators = await config.api.getOperators({
    operatorIds: cluster.operatorIds,
  });
  if (!operators) {
    throw new Error('Operators not found');
  }

  const daoValues = await config.api.getDaoValues({
    daoAddress: config.contractAddresses.setter,
  });
  if (!daoValues) {
    throw new Error('DAO values not found');
  }
  const isSsvCluster = cluster.feeAsset === ClusterFeeAssetTypes.SSV;
  const operatorsFee = operators.reduce(
    (acc, operator) =>
      acc + BigInt(isSsvCluster ? operator.feeSSV : operator.fee),
    0n,
  );

  const networkFee = BigInt(
    isSsvCluster ? daoValues.networkFeeSSV : daoValues.networkFee,
  );
  const minimumLiquidationCollateral = BigInt(
    isSsvCluster
      ? daoValues.minimumLiquidationCollateralSSV
      : daoValues.minimumLiquidationCollateral,
  );
  const liquidationThreshold = BigInt(
    isSsvCluster
      ? daoValues.liquidationThresholdSSV
      : daoValues.liquidationThreshold,
  );
  const effectiveBalanceValidatorUnits =
    (BigInt(cluster.effectiveBalance) * BigInt(globals.VUNITS_PRECISION)) / 32n;
  const validatorUnits =
    effectiveBalanceValidatorUnits / BigInt(globals.VUNITS_PRECISION) || 1n;
  const burnRate = (operatorsFee + networkFee) * validatorUnits || 1n;
  const liquidationCollateral = bigintMax(
    minimumLiquidationCollateral,
    burnRate * liquidationThreshold,
  );
  const residualBalance = computeDailyAmount(burnRate, runway);

  return residualBalance + liquidationCollateral;
};
