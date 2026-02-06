import type { ConfigReturnType } from '@/config/create';
import type { SmartFnWriteOptions } from '@/contract-interactions/types';

type UpdateNetworkFeeSSVProps = SmartFnWriteOptions<{
  fee: bigint;
}>;

export const updateNetworkFeeSSV = async (
  config: ConfigReturnType,
  { args: { fee }, ...writeOptions }: UpdateNetworkFeeSSVProps,
) => {
  return config.contract.ssv.write.updateNetworkFeeSSV({
    args: {
      fee,
    },
    ...writeOptions,
  });
};
