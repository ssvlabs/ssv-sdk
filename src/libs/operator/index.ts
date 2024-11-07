import type { ConfigReturnType } from '@/config/create'
import { setOperatorWhitelists, withdraw } from '@/libs/operator/methods'
import type { RemoveConfigArg } from '@/types/methods'

export const createOperatorManager = (config: ConfigReturnType) => ({
  registerOperator: config.contract.write.registerOperator,
  removeOperator: config.contract.write.removeOperator,
  withdraw: withdraw.bind(null, config) as RemoveConfigArg<typeof withdraw>,
  setOperatorWhitelists: config.contract.write.setOperatorsWhitelists,
  removeOperatorWhitelists: config.contract.write.removeOperatorsWhitelists,
  setOperatorsPrivate: config.contract.write.setOperatorsPrivateUnchecked,
  setOperatorsPublic: config.contract.write.setOperatorsPublicUnchecked,
  setOperatorWhitelistingContract: setOperatorWhitelists.bind(null, config) as RemoveConfigArg<
    typeof setOperatorWhitelists
  >,
  removeOperatorWhitelistingContract: config.contract.write.removeOperatorsWhitelists,
  declareOperatorFee: config.contract.write.declareOperatorFee,
  executeOperatorFee: config.contract.write.executeOperatorFee,
  cancelDeclaredOperatorFee: config.contract.write.cancelDeclaredOperatorFee,
  reduceOperatorFee: config.contract.write.reduceOperatorFee,
})
