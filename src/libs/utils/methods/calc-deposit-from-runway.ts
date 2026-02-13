import type { ConfigReturnType } from '@/config/create';
import { globals } from '@/config/globals';
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
  const operatorsFee = operators.reduce(
    (acc, operator) => acc + BigInt(operator.fee),
    0n,
  );

  const networkFee = BigInt(daoValues.networkFee);
  const vUnits =
    (globals.VUNITS_PRECISION * Number(cluster.effectiveBalance)) / 32;
  const validatorUnits = BigInt(vUnits / globals.VUNITS_PRECISION) || 1n;
  const burnRate = (operatorsFee + networkFee) * validatorUnits || 1n;
  const liquidationCollateral = bigintMax(
    BigInt(daoValues.minimumLiquidationCollateral),
    burnRate * BigInt(daoValues.liquidationThreshold),
  );
  const residualBalance = computeDailyAmount(burnRate, runway);

  return residualBalance + liquidationCollateral;
};
