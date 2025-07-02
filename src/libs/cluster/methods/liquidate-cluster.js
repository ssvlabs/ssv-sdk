import { getClusterSnapshot } from '@/utils/cluster';
export const liquidateCluster = async (config, { args: { id }, ...writeOptions }) => {
    const cluster = await config.api.getCluster({ id });
    if (!cluster) {
        throw new Error('Cluster not found');
    }
    return config.contract.ssv.write.liquidate({
        args: {
            cluster: getClusterSnapshot(cluster),
            clusterOwner: config.walletClient.account.address,
            operatorIds: cluster.operatorIds.map(BigInt),
        },
        ...writeOptions,
    });
};
