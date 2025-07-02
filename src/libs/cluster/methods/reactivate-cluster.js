import { getClusterSnapshot } from '@/utils/cluster';
export const reactivateCluster = async (config, { args: { id, amount }, ...writeOptions }) => {
    const cluster = await config.api.getCluster({ id });
    if (!cluster) {
        throw new Error('Cluster not found');
    }
    return config.contract.ssv.write.reactivate({
        args: {
            cluster: getClusterSnapshot(cluster),
            amount,
            operatorIds: cluster.operatorIds.map(BigInt),
        },
        ...writeOptions,
    });
};
