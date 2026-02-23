import { ConfigReturnType } from '../../config/create';
import { deposit, exitValidators, liquidateCluster, liquidateSSV, migrateClusterToETH, reactivateCluster, registerValidators, registerValidatorsRawData, removeValidators, setFeeRecipient, validateSharesPostRegistration, withdraw } from './methods';
import { RemoveConfigArg } from '../../types/methods';
export declare const createClusterManager: (config: ConfigReturnType) => {
    deposit: RemoveConfigArg<typeof deposit>;
    withdraw: RemoveConfigArg<typeof withdraw>;
    liquidate: RemoveConfigArg<typeof liquidateCluster>;
    liquidateSSV: RemoveConfigArg<typeof liquidateSSV>;
    reactivate: RemoveConfigArg<typeof reactivateCluster>;
    migrateClusterToETH: RemoveConfigArg<typeof migrateClusterToETH>;
    removeValidators: RemoveConfigArg<typeof removeValidators>;
    setFeeRecipient: RemoveConfigArg<typeof setFeeRecipient>;
    exitValidators: RemoveConfigArg<typeof exitValidators>;
    registerValidators: RemoveConfigArg<typeof registerValidators>;
    registerValidatorsRawData: RemoveConfigArg<typeof registerValidatorsRawData>;
    validateSharesPostRegistration: RemoveConfigArg<typeof validateSharesPostRegistration>;
};
