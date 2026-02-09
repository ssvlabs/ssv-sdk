import type { ConfigReturnType } from '@/config/create';
import type { SmartFnWriteOptions } from '@/contract-interactions/types';
import { toSolidityCluster } from '@/utils/cluster';

type MigrateClusterToETHProps = SmartFnWriteOptions<{
  id: string;
  amount: bigint;
}>;

export const migrateClusterToETH = async (
  config: ConfigReturnType,
  { args: { id, amount }, ...writeOptions }: MigrateClusterToETHProps,
) => {
  const cluster = await config.api.getCluster({ id });

  if (!cluster) {
    throw new Error('Cluster not found');
  }

  return config.contract.ssv.write.migrateClusterToETH({
    value: amount,
    args: {
      operatorIds: cluster.operatorIds.map(BigInt),
      cluster: toSolidityCluster(cluster),
    },
    ...writeOptions,
  });
};
