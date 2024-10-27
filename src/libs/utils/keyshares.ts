import { Operator } from '@/types/operator'
import {
  KeysharesValidationError,
  KeysharesValidationErrors,
  ensureValidatorsUniqueness,
  validateConsistentOperatorIds,
} from '@/utils/keyshares'
import { sortNumbers } from '@/utils/number'
import { isEqual } from 'lodash-es'
import { KeyShares } from 'ssv-keys'
import { Address } from 'viem'

type ValidatedKeysharesArgs = {
  account: Address
  operators: Pick<Operator, 'id' | 'publicKey'>[]
  keyshares: string | object
}
export const validateKeyshares = async ({
  account,
  operators,
  keyshares,
}: ValidatedKeysharesArgs) => {
  const operatorIds = sortNumbers(operators.map((operator) => Number(operator.id)))
  const shares = (await KeyShares.fromJson(keyshares)).list()
  const shareOperatorIds = validateConsistentOperatorIds(shares)

  if (!isEqual(sortNumbers(shareOperatorIds), sortNumbers(operatorIds))) {
    throw new KeysharesValidationError(KeysharesValidationErrors.ClusterMismatch)
  }

  ensureValidatorsUniqueness(shares)

  await Promise.all(
    shares.map((share) =>
      share.validateSingleShares(share.payload.sharesData, {
        ownerAddress: account,
        ownerNonce: share.data.ownerNonce || 0,
        publicKey: share.data.publicKey || '',
      }),
    ),
  )

  return shares
}
