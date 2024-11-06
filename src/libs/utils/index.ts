import { ConfigReturnType } from '@/config/create'
import { createShares, validateKeysharesJSON } from '@/libs/utils/keyshares'
import { generateKeyShares } from '@/libs/utils/keystores'
import { getClusterBalance, getOperatorCapacity } from '@/libs/utils/methods'
import { RemoveConfigArg } from '@/types/methods'

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
})
