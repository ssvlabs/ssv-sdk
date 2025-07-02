import { getClusterSnapshot } from '@/utils/cluster';
export const deposit = async (config, { args: { id, amount }, ...writeOptions }, options = {}) => {
    const cluster = await config.api.getCluster({ id });
    if (!cluster) {
        throw new Error('Cluster not found');
    }
    const snapshot = getClusterSnapshot(cluster);
    if (options?.approve) {
        const allowance = await config.contract.token.read.allowance({
            owner: config.walletClient.account.address,
            spender: config.contractAddresses.setter,
        });
        if (allowance < amount) {
            await config.contract.token.write
                .approve({
                args: {
                    spender: config.contractAddresses.setter,
                    amount,
                },
            })
                .then((tx) => tx.wait());
        }
    }
    return config.contract.ssv.write.deposit({
        args: {
            amount,
            cluster: snapshot,
            clusterOwner: process.env.OWNER_ADDRESS,
            operatorIds: cluster.operatorIds.map(BigInt),
        },
        ...writeOptions,
    });
};
