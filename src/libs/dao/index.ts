import type { ConfigReturnType } from '@/config/create';
import {
  commitRoot,
  updateNetworkFeeSSV,
  withdrawNetworkSSVEarnings,
} from '@/libs/dao/methods';
import type { RemoveConfigArg } from '@/types/methods';

export const createDaoManager = (config: ConfigReturnType) => ({
  commitRoot: commitRoot.bind(null, config) as RemoveConfigArg<
    typeof commitRoot
  >,
  updateNetworkFeeSSV: updateNetworkFeeSSV.bind(
    null,
    config,
  ) as RemoveConfigArg<typeof updateNetworkFeeSSV>,
  withdrawNetworkSSVEarnings: withdrawNetworkSSVEarnings.bind(
    null,
    config,
  ) as RemoveConfigArg<typeof withdrawNetworkSSVEarnings>,
});
