import { ConfigReturnType } from '@/config/create'
import { createShares, validateKeysharesJSON } from '@/libs/utils/keyshares'
import { generateKeyShares } from '@/libs/utils/keystores'
import { RemoveConfigArg } from '@/types/methods-manager'

export const createUtils = (config: ConfigReturnType) => ({
  generateKeyShares,
  validateKeysharesJSON,
  createShares: createShares.bind(null, config) as RemoveConfigArg<typeof createShares>,
})
