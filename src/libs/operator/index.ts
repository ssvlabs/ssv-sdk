import type { ConfigReturnType } from '@/config/create'
import { setOperatorWhitelists, withdraw } from '@/libs/operator/methods'
import type { RemoveConfigArg } from '@/types/methods'

export const createOperatorManager = (config: ConfigReturnType) => ({
  registerOperator: config.contract.ssv.write.registerOperator,
  removeOperator: config.contract.ssv.write.removeOperator,
  withdraw: withdraw.bind(null, config) as RemoveConfigArg<typeof withdraw>,
  setOperatorWhitelists: config.contract.ssv.write.setOperatorsWhitelists,
  removeOperatorWhitelists: config.contract.ssv.write.removeOperatorsWhitelists,
  setOperatorsPrivate: config.contract.ssv.write.setOperatorsPrivateUnchecked,
  setOperatorsPublic: config.contract.ssv.write.setOperatorsPublicUnchecked,
  setOperatorWhitelistingContract: setOperatorWhitelists.bind(null, config) as RemoveConfigArg<
    typeof setOperatorWhitelists
  >,
  removeOperatorWhitelistingContract: config.contract.ssv.write.removeOperatorsWhitelists,
  declareOperatorFee: config.contract.ssv.write.declareOperatorFee,
  executeOperatorFee: config.contract.ssv.write.executeOperatorFee,
  cancelDeclaredOperatorFee: config.contract.ssv.write.cancelDeclaredOperatorFee,
  reduceOperatorFee: config.contract.ssv.write.reduceOperatorFee,
})
