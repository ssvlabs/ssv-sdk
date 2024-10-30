import { MainnetV4SetterABI } from '@/abi/mainnet/v4/setter'
import { ConfigReturnType } from '@/config/create'
import { MainnetEvent, ValidatorAddedEvent } from '@/types/contract'
import { Operator } from '@/types/operator'
import {
  KeysharesValidationError,
  KeysharesValidationErrors,
  ensureNoKeysharesErrors,
  ensureValidatorsUniqueness,
  validateConsistentOperatorIds,
  validateConsistentOperatorPublicKeys,
} from '@/utils/keyshares'
import { sortNumbers } from '@/utils/number'
import { isEqual } from 'lodash-es'
import { KeyShares, KeySharesItem } from 'ssv-keys'
import { Address, Hash, decodeEventLog } from 'viem'

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
  const shares = (await KeyShares.fromJson(keyshares)).list()

  ensureNoKeysharesErrors(shares)
  ensureValidatorsUniqueness(shares)
  validateConsistentOperatorPublicKeys(shares, operators)

  await Promise.all(
    shares.map((share) =>
      share.validateSingleShares(share.payload.sharesData, {
        ownerAddress: account,
        ownerNonce: share.data.ownerNonce || 0,
        publicKey: share.data.publicKey || '',
      }),
    ),
  )

  const shareOperatorIds = validateConsistentOperatorIds(shares)
  const operatorIds = sortNumbers(operators.map((operator) => Number(operator.id)))

  if (!isEqual(sortNumbers(shareOperatorIds), sortNumbers(operatorIds))) {
    throw new KeysharesValidationError(KeysharesValidationErrors.ClusterMismatch)
  }

  return shares
}

export const validateEvent = async (config: ConfigReturnType, hash: Hash) => {
  const receipt = await config.publicClient.waitForTransactionReceipt({ hash })
  const events = receipt.logs.reduce((acc, log) => {
    try {
      acc.push(
        decodeEventLog({
          abi: MainnetV4SetterABI,
          data: log.data,
          topics: log.topics,
        }),
      )
    } catch (e) {
      console.error(e)
    }
    return acc
  }, [] as MainnetEvent[])

  const validatorAdded = events.find((event) => event.eventName === 'ValidatorAdded') as
    | ValidatorAddedEvent
    | undefined
  if (!validatorAdded) return false

  const keysharesItem = new KeySharesItem()

  const shares = keysharesItem.buildSharesFromBytes(
    validatorAdded.args.shares,
    validatorAdded.args.operatorIds.length,
  )

  return shares

  // const keySharesItem = new KeySharesItem()

  // let ownerNonce: number | null = null

  // // Try to save public keys and encrypted keys anywhere regardless of further validations
  // const [shares, error] = tryCatch(
  //   () =>
  //     keySharesItem.buildSharesFromBytes(event.args.shares, event.args.operatorIds.length) as {
  //       sharesPublicKeys: string[]
  //       encryptedKeys: string[]
  //     },
  // )

  // // Now validate signature, regardless if shares extracted or not
  // let fromSignatureData: IKeySharesFromSignatureData
  // try {
  //   // To properly check shares nonce should be increase as it would
  //   // happen on webapp side

  //   fromSignatureData = {
  //     ownerNonce:
  //     publicKey: event.args.publicKey,
  //     ownerAddress: event.args.owner,
  //   }

  //   await keySharesItem.validateSingleShares(event.args.shares, fromSignatureData)
  // } catch (e) {
  //   return false
  // }
  // return true
}
