import { deposit, exitValidators, liquidateCluster, reactivateCluster, registerValidators, registerValidatorsRawData, removeValidators, setFeeRecipient, validateSharesPostRegistration, withdraw, } from '@/libs/cluster/methods';
export const createClusterManager = (config) => ({
    deposit: deposit.bind(null, config),
    withdraw: withdraw.bind(null, config),
    liquidate: liquidateCluster.bind(null, config),
    reactivate: reactivateCluster.bind(null, config),
    removeValidators: removeValidators.bind(null, config),
    setFeeRecipient: setFeeRecipient.bind(null, config),
    exitValidators: exitValidators.bind(null, config),
    registerValidators: registerValidators.bind(null, config),
    registerValidatorsRawData: registerValidatorsRawData.bind(null, config),
    validateSharesPostRegistration: validateSharesPostRegistration.bind(null, config),
});
