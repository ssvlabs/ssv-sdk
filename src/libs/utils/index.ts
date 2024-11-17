import type { ConfigReturnType } from '@/config/create'
import { activateValidator, getClusterBalance, getOperatorCapacity } from '@/libs/utils/methods'
import { createShares, validateKeysharesJSON } from '@/libs/utils/methods/keyshares'
import { generateKeyShares } from '@/libs/utils/methods/keystores'
import type { RemoveConfigArg } from '@/types/methods'

export const createUtils = (config: ConfigReturnType) => ({
  generateKeyShares,
  validateKeysharesJSON,
  createShares: createShares.bind(null, config) as RemoveConfigArg<typeof createShares>,
  getOperatorCapacity: getOperatorCapacity.bind(null, config) as RemoveConfigArg<
    typeof getOperatorCapacity
  >,
  getClusterBalance: getClusterBalance.bind(null, config) as RemoveConfigArg<
    typeof getClusterBalance
  >,
  activateValidator: activateValidator.bind(null, config) as RemoveConfigArg<
    typeof activateValidator
  >,
})
