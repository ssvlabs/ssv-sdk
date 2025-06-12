import type { ConfigReturnType } from '@/config/create'
import {
  deposit,
  exitValidators,
  liquidateCluster,
  reactivateCluster,
  registerValidators,
  registerValidatorsRawData,
  removeValidators,
  setFeeRecipient,
  validateSharesPostRegistration,
  withdraw,
} from '@/libs/cluster/methods'
import type { RemoveConfigArg } from '@/types/methods'

export const createClusterManager = (config: ConfigReturnType) => ({
  deposit: deposit.bind(null, config) as RemoveConfigArg<typeof deposit>,
  withdraw: withdraw.bind(null, config) as RemoveConfigArg<typeof withdraw>,
  liquidate: liquidateCluster.bind(null, config) as RemoveConfigArg<typeof liquidateCluster>,
  reactivate: reactivateCluster.bind(null, config) as RemoveConfigArg<typeof reactivateCluster>,
  removeValidators: removeValidators.bind(null, config) as RemoveConfigArg<typeof removeValidators>,
  setFeeRecipient: setFeeRecipient.bind(null, config) as RemoveConfigArg<typeof setFeeRecipient>,
  exitValidators: exitValidators.bind(null, config) as RemoveConfigArg<typeof exitValidators>,
  registerValidators: registerValidators.bind(null, config) as RemoveConfigArg<
    typeof registerValidators
  >,
  registerValidatorsRawData: registerValidatorsRawData.bind(null, config) as RemoveConfigArg<
    typeof registerValidatorsRawData
  >,
  validateSharesPostRegistration: validateSharesPostRegistration.bind(
    null,
    config,
  ) as RemoveConfigArg<typeof validateSharesPostRegistration>,
})
