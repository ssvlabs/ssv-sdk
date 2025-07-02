import { getClusterSnapshot } from '@/utils/cluster';
export const withdraw = async (config, { args: { id, amount }, ...writeOptions }) => {
    const cluster = await config.api.getCluster({ id });
    if (!cluster) {
        throw new Error('Cluster not found');
    }
    return config.contract.ssv.write.withdraw({
        args: {
            amount,
            cluster: getClusterSnapshot(cluster),
            operatorIds: cluster.operatorIds.map(BigInt),
        },
        ...writeOptions,
    });
};
