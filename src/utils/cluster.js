import { merge } from 'lodash-es';
import { isAddress } from 'viem';
export const createClusterId = (ownerAddress, operatorIds) => {
    if (!isAddress(ownerAddress)) {
        throw new Error('Invalid owner address');
    }
    return `${ownerAddress.toLowerCase()}-${operatorIds.join('-')}`;
};
export const isClusterId = (clusterId) => {
    const [ownerAddress, ...operatorIds] = clusterId.split('-');
    return (isAddress(ownerAddress) &&
        operatorIds.length >= 4 &&
        operatorIds.every((id) => !isNaN(Number(id))));
};
export const getClusterSnapshot = (cluster) => {
    return {
        active: cluster.active,
        balance: BigInt(cluster.balance),
        index: BigInt(cluster.index),
        networkFeeIndex: BigInt(cluster.networkFeeIndex),
        validatorCount: +cluster.validatorCount,
    };
};
export const createEmptyCluster = (cluster = {}) => merge({
    validatorCount: 0,
    networkFeeIndex: 0n,
    index: 0n,
    balance: 0n,
    active: true,
}, cluster);
export const add0x = (value) => (!value.startsWith('0x') ? `0x${value}` : value);
