import type { ConfigReturnType } from '@/config/create';
import type { SmartFnWriteOptions } from '@/contract-interactions/types';
import type { ClusterSnapshot } from '@/types/contract-interactions';
import type { Address } from 'abitype';

type LiquidateSSVProps = SmartFnWriteOptions<{
  owner: Address;
  operatorIds: Array<bigint | number | string>;
  cluster: ClusterSnapshot;
}>;

export const liquidateSSV = async (
  config: ConfigReturnType,
  { args: { owner, operatorIds, cluster }, ...writeOptions }: LiquidateSSVProps,
) => {
  return config.contract.ssv.write.liquidateSSV({
    args: {
      clusterOwner: owner,
      operatorIds: operatorIds.map(BigInt),
      cluster,
    },
    ...writeOptions,
  });
};
