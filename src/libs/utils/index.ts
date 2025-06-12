import type { ConfigReturnType } from '@/config/create'
import { getClusterBalance, getOperatorCapacity } from '@/libs/utils/methods'
import { validateKeysharesJSON, validateSharesPreRegistration } from '@/libs/utils/methods/keyshares'
import { generateKeyShares } from '@/libs/utils/methods/keystores'
import type { RemoveConfigArg } from '@/types/methods'

export const createUtils = (config: ConfigReturnType) => ({
  generateKeyShares,
  validateKeysharesJSON,
  validateSharesPreRegistration: validateSharesPreRegistration.bind(null, config) as RemoveConfigArg<typeof validateSharesPreRegistration>,
  getOperatorCapacity: getOperatorCapacity.bind(null, config) as RemoveConfigArg<
    typeof getOperatorCapacity
  >,
  getClusterBalance: getClusterBalance.bind(null, config) as RemoveConfigArg<
    typeof getClusterBalance
  >,
})
