import type { ConfigReturnType } from '@/config/create';
import type { SmartFnWriteOptions } from '@/contract-interactions/types';

type WithdrawNetworkSSVEarningsProps = SmartFnWriteOptions<{
  amount: bigint;
}>;

export const withdrawNetworkSSVEarnings = async (
  config: ConfigReturnType,
  { args: { amount }, ...writeOptions }: WithdrawNetworkSSVEarningsProps,
) => {
  return config.contract.ssv.write.withdrawNetworkSSVEarnings({
    args: {
      amount,
    },
    ...writeOptions,
  });
};
