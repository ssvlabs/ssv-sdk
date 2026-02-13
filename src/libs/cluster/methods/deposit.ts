import type { ConfigReturnType } from '@/config/create';
import type { SmartFnWriteOptions } from '@/contract-interactions/types';
import { toSolidityCluster } from '@/utils/cluster';

type DepositProps = SmartFnWriteOptions<{
  id: string;
  amount: bigint;
}>;

export const deposit = async (
  config: ConfigReturnType,
  { args: { id, amount }, ...writeOptions }: DepositProps,
) => {
  const cluster = await config.api.getCluster({ id });

  if (!cluster) {
    throw new Error('Cluster not found');
  }

  const snapshot = toSolidityCluster(cluster);

  return config.contract.ssv.write.deposit({
    value: amount,
    args: {
      cluster: snapshot,
      clusterOwner: cluster.owner.id as `0x${string}`,
      operatorIds: cluster.operatorIds.map(BigInt),
    },
    ...writeOptions,
  });
};
