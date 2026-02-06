import type { ConfigReturnType } from '@/config/create';
import type { SmartFnWriteOptions } from '@/contract-interactions/types';
import { getClusterSnapshot } from '@/utils/cluster';

type MigrateClusterToETHProps = SmartFnWriteOptions<{
  id: string;
}>;

export const migrateClusterToETH = async (
  config: ConfigReturnType,
  { args: { id }, ...writeOptions }: MigrateClusterToETHProps,
) => {
  const cluster = await config.api.getCluster({ id });

  if (!cluster) {
    throw new Error('Cluster not found');
  }

  return config.contract.ssv.write.migrateClusterToETH({
    args: {
      operatorIds: cluster.operatorIds.map(BigInt),
      cluster: getClusterSnapshot(cluster),
    },
    ...writeOptions,
  });
};
