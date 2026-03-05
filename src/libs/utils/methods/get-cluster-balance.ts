import type { ConfigReturnType } from '@/config/create';
import { globals } from '@/config/globals';
import { ClusterFeeAssetTypes } from '@/graphql/graphql';
import { bigintMax, createClusterId } from '@/utils';
import type { Address } from 'viem';

type GetClusterBalanceArgs = {
  operatorIds: number[];
  ownerAddress?: Address;
};
export const getClusterBalance = async (
  config: ConfigReturnType,
  { operatorIds, ownerAddress }: GetClusterBalanceArgs,
) => {
  const resolvedOwnerAddress =
    ownerAddress ?? config.walletClient.account?.address;

  if (!resolvedOwnerAddress) {
    throw new Error(
      'ownerAddress is required when walletClient.account.address is not available',
    );
  }

  const query = await config.api.getClusterBalance({
    daoAddress: config.contractAddresses.setter,
    operatorIds: operatorIds.map(String),
    clusterId: createClusterId(resolvedOwnerAddress, operatorIds),
  });

  if (!query.cluster || !query.daovalues || !query._meta) {
    throw new Error('Could not fetch cluster balance');
  }

  const isSsvCluster = query.cluster.feeAsset === ClusterFeeAssetTypes.Ssv;
  const networkFee = BigInt(
    isSsvCluster ? query.daovalues.networkFeeSSV : query.daovalues.networkFee,
  );
  const networkFeeIndex = BigInt(
    isSsvCluster
      ? query.daovalues.networkFeeIndexSSV
      : query.daovalues.networkFeeIndex,
  );
  const networkFeeIndexBlockNumber = BigInt(
    isSsvCluster
      ? query.daovalues.networkFeeIndexBlockNumberSSV
      : query.daovalues.networkFeeIndexBlockNumber,
  );
  const minimumLiquidationCollateral = BigInt(
    isSsvCluster
      ? query.daovalues.minimumLiquidationCollateralSSV
      : query.daovalues.minimumLiquidationCollateral,
  );
  const liquidationThreshold = BigInt(
    isSsvCluster
      ? query.daovalues.liquidationThresholdSSV
      : query.daovalues.liquidationThreshold,
  );

  const scallingCoefficient = isSsvCluster
    ? globals.SSV_DEDUCTED_DIGITS
    : globals.ETH_DEDUCTED_DIGITS;

  const cumulativeNetworkFee =
    networkFeeIndex +
    (BigInt(query._meta.block.number) - networkFeeIndexBlockNumber) *
      networkFee -
    BigInt(query.cluster.networkFeeIndex) * scallingCoefficient;

  const cumulativeOperatorFee = query.operators.reduce(
    (acc, operator) => {
      const fee = isSsvCluster ? operator.ssvFee : operator.fee;
      const feeIndex = isSsvCluster ? operator.ssvFeeIndex : operator.feeIndex;
      const feeIndexBlockNumber = isSsvCluster
        ? operator.ssvFeeIndexBlockNumber
        : operator.feeIndexBlockNumber;
      return (
        acc +
        BigInt(feeIndex) +
        (BigInt(query._meta!.block.number) - BigInt(feeIndexBlockNumber)) *
          BigInt(fee)
      );
    },
    -BigInt(query.cluster.index) * scallingCoefficient,
  );

  const operatorsFee = query.operators.reduce(
    (acc, operator) =>
      acc + BigInt(isSsvCluster ? operator.ssvFee : operator.fee),
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
    ((operatorsFee + networkFee) * BigInt(effectiveBalanceValidatorUnits)) /
      BigInt(globals.VUNITS_PRECISION) || 1n;

  const LC = bigintMax(
    minimumLiquidationCollateral,
    burnRate * liquidationThreshold,
  );
  const runway = calculatedClusterBalance - LC;
  const operationalRunway = runway / burnRate / globals.BLOCKS_PER_DAY;

  return {
    balance: calculatedClusterBalance,
    operationalRunway,
  };
};
