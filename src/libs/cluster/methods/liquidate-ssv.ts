import type { ConfigReturnType } from '@/config/create';
import type { SmartFnWriteOptions } from '@/contract-interactions/types';
import { toSolidityCluster } from '@/utils/cluster';

type LiquidateSSVProps = SmartFnWriteOptions<{
  id: string;
}>;

export const liquidateSSV = async (
  config: ConfigReturnType,
  { args: { id }, ...writeOptions }: LiquidateSSVProps,
) => {
  const cluster = await config.api.getCluster({ id });

  if (!cluster) {
    throw new Error('Cluster not found');
  }

  return config.contract.ssv.write.liquidateSSV({
    args: {
      clusterOwner: cluster.owner.id as `0x${string}`,
      operatorIds: cluster.operatorIds.map(BigInt),
      cluster: toSolidityCluster(cluster),
    },
    ...writeOptions,
  });
};
