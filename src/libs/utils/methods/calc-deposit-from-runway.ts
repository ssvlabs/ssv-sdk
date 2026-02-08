import type { ConfigReturnType } from '@/config/create';
import { computeFundingCost } from '@/utils/funding';

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
  const operatorsFee = operators.reduce(
    (acc, operator) => acc + BigInt(operator.fee),
    0n,
  );

  return computeFundingCost({
    effectiveBalance: BigInt(cluster.effectiveBalance),
    fundingDays: runway,
    liquidationCollateralPeriod: BigInt(daoValues.liquidationThreshold),
    minimumLiquidationCollateral: BigInt(
      daoValues.minimumLiquidationCollateral,
    ),
    networkFee: BigInt(daoValues.networkFee),
    operatorsFee: operatorsFee,
  });
};
