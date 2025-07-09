import { ConfigReturnType } from '../../config/create';
import { deposit, exitValidators, liquidateCluster, reactivateCluster, registerValidators, registerValidatorsRawData, removeValidators, setFeeRecipient, validateSharesPostRegistration, withdraw } from './methods';
import { RemoveConfigArg } from '../../types/methods';
export declare const createClusterManager: (config: ConfigReturnType) => {
    deposit: RemoveConfigArg<typeof deposit>;
    withdraw: RemoveConfigArg<typeof withdraw>;
    liquidate: RemoveConfigArg<typeof liquidateCluster>;
    reactivate: RemoveConfigArg<typeof reactivateCluster>;
    removeValidators: RemoveConfigArg<typeof removeValidators>;
    setFeeRecipient: RemoveConfigArg<typeof setFeeRecipient>;
    exitValidators: RemoveConfigArg<typeof exitValidators>;
    registerValidators: RemoveConfigArg<typeof registerValidators>;
    registerValidatorsRawData: RemoveConfigArg<typeof registerValidatorsRawData>;
    validateSharesPostRegistration: RemoveConfigArg<typeof validateSharesPostRegistration>;
};
