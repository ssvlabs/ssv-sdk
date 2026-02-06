import type { ConfigReturnType } from '@/config/create';
import type { SmartFnWriteOptions } from '@/contract-interactions/types';
import type { Hex } from 'viem';

type CommitRootProps = SmartFnWriteOptions<{
  merkleRoot: Hex;
  blockNum: bigint;
}>;

export const commitRoot = async (
  config: ConfigReturnType,
  { args: { merkleRoot, blockNum }, ...writeOptions }: CommitRootProps,
) => {
  return config.contract.ssv.write.commitRoot({
    args: {
      merkleRoot,
      blockNum,
    },
    ...writeOptions,
  });
};
