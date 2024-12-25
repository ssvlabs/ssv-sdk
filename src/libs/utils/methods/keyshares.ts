import { MainnetV4SetterABI } from '@/abi/mainnet/v4/setter'
import type { ConfigReturnType } from '@/config/create'
import { canAccountUseOperator } from '@/libs/operator/methods'
import type { MainnetEvent, ValidatorAddedEvent } from '@/types/contract-interactions'
import type { Operator } from '@/types/operator'
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
import type { Address, Hash } from 'viem'
import { decodeEventLog } from 'viem'

type ValidatedKeysharesArgs = {
  keyshares: string | object
  operatorIds: string[]
}

export const createShares = async (
  config: ConfigReturnType,
  { keyshares, operatorIds }: ValidatedKeysharesArgs,
) => {
  const operators = await config.api.getOperators({ operatorIds })

  const shares = await validateKeysharesJSON({
    account: config.walletClient.account!.address,
    operators,
    keyshares,
  })

  const statuses = await Promise.all(
    shares.map((share) => {
      return config.api
        .getValidator({ id: share.data.publicKey as `0x${string}` })
        .then((res) => [share, Boolean(res)] as [KeySharesItem, boolean])
        .catch(() => [share, false] as [KeySharesItem, boolean])
    }),
  )

  if (statuses.every(([, isRegistered]) => isRegistered)) {
    throw new Error('All validators are already registered')
  }

  const nonce = await config.api
    .getOwnerNonce({ owner: config.walletClient.account!.address })
    .then((nonce) => {
      if (!nonce) throw new Error('Failed to get owner nonce')
      return Number(nonce)
    })


  let i = 0

  const sharesWithStatuses = statuses.reduce(
    (acc, [share, isRegistered]) => {
      if (isRegistered) {
        acc.registered.push(share)
      } else {
        const validNonce = nonce + i === share.data.ownerNonce
        if (validNonce) i++

        if (validNonce) {
          acc.available.push(share)
        } else {
          acc.incorrect.push(share)
        }
      }
      return acc
    },
    { available: [], registered: [], incorrect: [] } as {
      available: KeySharesItem[]
      registered: KeySharesItem[]
      incorrect: KeySharesItem[]
    },
  )

  if (!sharesWithStatuses.available.length) {
    throw new Error(
      `No available keyshares to register. ${sharesWithStatuses.incorrect.length} keyshares have incorrect nonce and ${sharesWithStatuses.registered.length} are already registered`,
    )
  }

  const limit = await config.contract.ssv.read.getValidatorsPerOperatorLimit()

  for (const operator of operators) {
    if (!(await canAccountUseOperator(config, operator, config.walletClient.account!.address))) {
      throw new Error(`Operator ${operator.id} is private and the account is not whitelisted`)
    }
    if (Number(operator.validatorCount) + sharesWithStatuses.available.length > limit) {
      throw new Error(`Operator ${operator.id} has reached the limit of ${limit} validators`)
    }
  }

  return sharesWithStatuses
}

type ValidatedKeysharesJSONArgs = {
  account: Address
  operators: Pick<Operator, 'id' | 'publicKey'>[]
  keyshares: string | object
}
export const validateKeysharesJSON = async ({
  account,
  operators,
  keyshares,
}: ValidatedKeysharesJSONArgs) => {
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
