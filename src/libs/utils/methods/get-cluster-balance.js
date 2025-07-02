import { globals } from '@/config/globals';
import { bigintMax, createClusterId } from '@/utils';
export const getClusterBalance = async (config, { operatorIds }) => {
    const query = await config.api.getClusterBalance({
        daoAddress: config.contractAddresses.setter,
        operatorIds: operatorIds.map(String),
        clusterId: createClusterId(config.walletClient.account.address, operatorIds),
    });
    if (!query.cluster || !query.daovalues || !query._meta) {
        throw new Error('Could not fetch cluster balance');
    }
    const cumulativeNetworkFee = BigInt(query.daovalues.networkFeeIndex) +
        (BigInt(query._meta.block.number) - BigInt(query.daovalues.networkFeeIndexBlockNumber)) *
            BigInt(query.daovalues.networkFee) -
        BigInt(query.cluster.networkFeeIndex) * 10000000n;
    const cumulativeOperatorFee = query.operators.reduce((acc, operator) => {
        return (acc +
            BigInt(operator.feeIndex) +
            (BigInt(query._meta.block.number) - BigInt(operator.feeIndexBlockNumber)) *
                BigInt(operator.fee));
    }, -BigInt(query.cluster.index) * 10000000n);
    const operatorsFee = query.operators.reduce((acc, operator) => acc + BigInt(operator.fee), 0n);
    const calculatedClusterBalance = BigInt(query.cluster.balance) -
        (cumulativeNetworkFee + cumulativeOperatorFee) * BigInt(query.cluster.validatorCount) || 1n;
    const burnRate = (operatorsFee + BigInt(query.daovalues.networkFee)) * BigInt(query.cluster.validatorCount) || 1n;
    const mLc = BigInt(query.daovalues.minimumLiquidationCollateral);
    const LC = bigintMax(mLc, burnRate * BigInt(query.daovalues.liquidationThreshold));
    const runwaySSV = calculatedClusterBalance - LC;
    const operationalRunway = runwaySSV / burnRate / globals.BLOCKS_PER_DAY;
    return {
        balance: calculatedClusterBalance,
        operationalRunway,
    };
};
