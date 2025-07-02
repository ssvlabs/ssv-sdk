import { registerOperator, setOperatorWhitelists, withdraw } from '@/libs/operator/methods';
export const createOperatorManager = (config) => ({
    registerOperator: registerOperator.bind(null, config),
    removeOperator: config.contract.ssv.write.removeOperator,
    withdraw: withdraw.bind(null, config),
    setOperatorWhitelists: config.contract.ssv.write.setOperatorsWhitelists,
    removeOperatorWhitelists: config.contract.ssv.write.removeOperatorsWhitelists,
    setOperatorsPrivate: config.contract.ssv.write.setOperatorsPrivateUnchecked,
    setOperatorsPublic: config.contract.ssv.write.setOperatorsPublicUnchecked,
    setOperatorWhitelistingContract: setOperatorWhitelists.bind(null, config),
    removeOperatorWhitelistingContract: config.contract.ssv.write.removeOperatorsWhitelists,
    declareOperatorFee: config.contract.ssv.write.declareOperatorFee,
    executeOperatorFee: config.contract.ssv.write.executeOperatorFee,
    cancelDeclaredOperatorFee: config.contract.ssv.write.cancelDeclaredOperatorFee,
    reduceOperatorFee: config.contract.ssv.write.reduceOperatorFee,
});
