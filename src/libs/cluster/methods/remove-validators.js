import { getClusterSnapshot } from '@/utils/cluster';
export const removeValidators = async (config, { args: { id, publicKeys }, ...writeOptions }) => {
    const cluster = await config.api.getCluster({ id });
    if (!cluster) {
        throw new Error('Cluster not found');
    }
    if (publicKeys.length === 1) {
        return config.contract.ssv.write.removeValidator({
            args: {
                cluster: getClusterSnapshot(cluster),
                publicKey: publicKeys[0],
                operatorIds: cluster.operatorIds.map(BigInt),
            },
            ...writeOptions,
        });
    }
    return config.contract.ssv.write.bulkRemoveValidator({
        args: {
            cluster: getClusterSnapshot(cluster),
            publicKeys,
            operatorIds: cluster.operatorIds.map(BigInt),
        },
        ...writeOptions,
    });
};
