import { Operator } from '@/types/operator'
import { sortNumbers } from '@/utils/number'
import { getOperatorIds } from '@/utils/operator'
import { KeySharesItem } from 'ssv-keys'

export enum KeysharesValidationErrors {
  OperatorDoesNotExist,
  OperatorMismatch,
  ValidatorAlreadyExists,
  ClusterMismatch,
  DuplicateValidatorKeys,
  InconsistentOperatorPublicKeys,
  InconsistentOperators,
}

export const KeysharesValidationErrorsMessages: Record<KeysharesValidationErrors, string> = {
  [KeysharesValidationErrors.OperatorDoesNotExist]:
    'Operator not found. Please verify the operator ID.',
  [KeysharesValidationErrors.OperatorMismatch]:
    'Operator details mismatch. Check provided information.',
  [KeysharesValidationErrors.ValidatorAlreadyExists]:
    'Validator public key already in use. Must be unique.',
  [KeysharesValidationErrors.ClusterMismatch]:
    'The operators in the provided keyshares do not match the provided operators. Please ensure the keyshares correspond to the cluster you are trying to register.',
  [KeysharesValidationErrors.DuplicateValidatorKeys]:
    'Duplicate validator keys detected. Each must be unique.',
  [KeysharesValidationErrors.InconsistentOperatorPublicKeys]:
    'Operator public keys mismatch. Verify operator data.',
  [KeysharesValidationErrors.InconsistentOperators]:
    'Inconsistent operator IDs across keyshares. Check all entries.',
}

export class KeysharesValidationError extends Error {
  constructor(public code: KeysharesValidationErrors) {
    super(KeysharesValidationErrorsMessages[code])
  }
}

export const validateConsistentOperatorIds = (keyshares: KeySharesItem[]) => {
  const operatorIds = sortNumbers(keyshares[0].payload.operatorIds)

  keyshares.every(({ payload, data }) => {
    const payloadOperatorIds = sortNumbers(payload.operatorIds).toString()
    const dataOperatorIds = getOperatorIds(data.operators ?? []).toString()

    const valid =
      payloadOperatorIds === dataOperatorIds && dataOperatorIds === operatorIds.toString()

    if (!valid) {
      throw new KeysharesValidationError(KeysharesValidationErrors.InconsistentOperators)
    }
    return true
  })

  return operatorIds
}

export const ensureValidatorsUniqueness = (keyshares: KeySharesItem[]) => {
  const set = new Set(keyshares.map(({ data }) => data.publicKey))
  if (set.size !== keyshares.length) {
    throw new KeysharesValidationError(KeysharesValidationErrors.DuplicateValidatorKeys)
  }
  return true
}

export const validateConsistentOperatorPublicKeys = (
  keyshares: KeySharesItem[],
  operators: Pick<Operator, 'id' | 'publicKey'>[],
) => {
  const operatorsMap = new Map(operators.map((o) => [o.id, o.publicKey]))
  const valid = keyshares.every(({ data }) =>
    data.operators?.every(({ id, operatorKey }) => operatorsMap.get(id.toString()) === operatorKey),
  )

  if (!valid) {
    throw new KeysharesValidationError(KeysharesValidationErrors.InconsistentOperatorPublicKeys)
  }

  return valid
}

export const ensureNoKeysharesErrors = (keyshares: KeySharesItem[]) => {
  keyshares.forEach((share) => {
    if (share.error) {
      throw share.error
    }
  })
  return true
}
