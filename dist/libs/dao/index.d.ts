import { ConfigReturnType } from '../../config/create';
import { commitRoot, updateNetworkFeeSSV, withdrawNetworkSSVEarnings } from './methods';
import { RemoveConfigArg } from '../../types/methods';
export declare const createDaoManager: (config: ConfigReturnType) => {
    commitRoot: RemoveConfigArg<typeof commitRoot>;
    updateNetworkFeeSSV: RemoveConfigArg<typeof updateNetworkFeeSSV>;
    withdrawNetworkSSVEarnings: RemoveConfigArg<typeof withdrawNetworkSSVEarnings>;
};
