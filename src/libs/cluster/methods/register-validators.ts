import { MainnetV4SetterABI } from '@/abi/mainnet/v4/setter'
import type { ClusterSize } from '@/config'
import { registerValidatorsByClusterSizeLimits } from '@/config'
import type { ConfigReturnType } from '@/config/create'
import type { SmartFnWriteOptions } from '@/contract-interactions/types'
import type { KeySharesItem } from '@/libs/ssv-keys/KeyShares/KeySharesItem'
import { SSVKeys } from '@/libs/ssv-keys/SSVKeys'
import { isKeySharesItem } from '@/utils'
import { createClusterId, createEmptyCluster, getClusterSnapshot } from '@/utils/cluster'
import { isUndefined } from 'lodash-es'

import type { Hex } from 'viem'

type RegisterValidatorsProps = Pick<
  SmartFnWriteOptions<{
    keyshares: KeySharesItem[] | KeySharesItem['payload'][]
    depositAmount?: bigint
  }>,
  'args'
>

export const registerValidators = async (
  config: ConfigReturnType,
  { args: { keyshares, depositAmount = 0n }, ...writeOptions }: RegisterValidatorsProps,
) => {
  const shares = keyshares.map((share) => {
    return isKeySharesItem(share) ? share.payload : share
  })

  const operatorIds = shares[0].operatorIds
  const clusterSize = operatorIds.length as ClusterSize

  const limit = registerValidatorsByClusterSizeLimits[clusterSize]

  if (!limit) {
    throw new Error(
      `Invalid number of operators in keyshares: ${clusterSize}, should be one of: ${Object.keys(registerValidatorsByClusterSizeLimits).join(', ')}`,
    )
  }

  if (shares.length > limit) {
    throw new Error(`You can't register more than ${limit} validators in a single transaction`)
  }

  const clusterId = createClusterId(config.walletClient.account!.address, operatorIds)
  const cluster = await config.api.getCluster({
    id: clusterId,
  })

  const snapshot = cluster ? getClusterSnapshot(cluster) : createEmptyCluster()

  if (shares.length === 1) {
    return config.contract.ssv.write.registerValidator({
      args: {
        amount: depositAmount,
        cluster: snapshot,
        operatorIds: operatorIds.map(BigInt),
        publicKey: shares[0].publicKey as Hex,
        sharesData: shares[0].sharesData as Hex,
      },
      ...writeOptions,
    })
  }

  return config.contract.ssv.write.bulkRegisterValidator({
    args: {
      cluster: snapshot,
      amount: depositAmount,
      operatorIds: operatorIds.map(BigInt),
      publicKeys: shares.map((share) => share.publicKey as Hex),
      sharesData: shares.map((share) => share.sharesData as Hex),
    },
    ...writeOptions,
  })
}
export const registerValidatorsRawData = async (
  config: ConfigReturnType,
  { args: { keyshares, depositAmount = 0n } }: RegisterValidatorsProps,
) => {
  const shares = keyshares.map((share) => {
    return isKeySharesItem(share) ? share.payload : share
  })

  const operatorIds = shares[0].operatorIds
  const clusterSize = operatorIds.length as ClusterSize

  const limit = registerValidatorsByClusterSizeLimits[clusterSize]

  if (!limit) {
    throw new Error(
      `Invalid number of operators in keyshares: ${clusterSize}, should be one of: ${Object.keys(registerValidatorsByClusterSizeLimits).join(', ')}`,
    )
  }

  if (shares.length > limit) {
    throw new Error(`You can't register more than ${limit} validators in a single transaction`)
  }

  const clusterId = createClusterId(config.walletClient.account!.address, operatorIds)
  const cluster = await config.api.getCluster({
    id: clusterId,
  })

  const snapshot = cluster ? getClusterSnapshot(cluster) : createEmptyCluster()

  if (shares.length === 1) {
    return config.contract.ssv.write.registerValidator.getTransactionData({
      amount: depositAmount,
      cluster: snapshot,
      operatorIds: operatorIds.map(BigInt),
      publicKey: shares[0].publicKey as Hex,
      sharesData: shares[0].sharesData as Hex,
    })
  }

  return config.contract.ssv.write.bulkRegisterValidator.getTransactionData({
    cluster: snapshot,
    amount: depositAmount,
    operatorIds: operatorIds.map(BigInt),
    publicKeys: shares.map((share) => share.publicKey as Hex),
    sharesData: shares.map((share) => share.sharesData as Hex),
  })
}

const ssvKeys = new SSVKeys()
export const validateSharesPostRegistration = async (
  config: ConfigReturnType,
  args: {
    txHash: Hex
  },
) => {
  const receipt = await config.publicClient.waitForTransactionReceipt({
    hash: args.txHash,
  })

  const ownerNonce = await config.api.getOwnerNonce({
    owner: config.walletClient.account!.address,
    block: Number(receipt.blockNumber) - 1,
  })

  if (isUndefined(ownerNonce)) {
    throw new Error('Could not fetch owner nonce')
  }

  const validatorAddedEvents = await config.publicClient.getContractEvents({
    abi: MainnetV4SetterABI,
    address: config.contractAddresses.setter,
    eventName: 'ValidatorAdded',
    args: {
      owner: config.walletClient.account!.address,
    },
    fromBlock: receipt.blockNumber,
    toBlock: receipt.blockNumber,
  })

  if (!validatorAddedEvents.length) {
    throw new Error('No ValidatorAdded events found in the receipt')
  }

  const validations: {
    event: (typeof validatorAddedEvents)[number]
    validation: Awaited<ReturnType<typeof ssvKeys.validateSharesPostRegistration>>
  }[] = []

  for (const [index, e] of validatorAddedEvents.entries()) {
    validations.push({
      event: e,
      validation: await ssvKeys.validateSharesPostRegistration({
        blockNumber: Number(receipt.blockNumber),
        operatorsCount: e.args.operatorIds!.length,
        isAccountExists: false,
        ownerAddress: config.walletClient.account!.address,
        ownerNonce: Number(ownerNonce) + index,
        shares: e.args.shares!,
        validatorPublicKey: e.args.publicKey!,
      }),
    })
  }

  const isValid = validations.every((r) => r.validation.isValid)
  const invalids = validations.filter((r) => !r.validation.isValid)

  return {
    isValid,
    validations,
    invalids,
    ownerNonceAtBlock: Number(ownerNonce),
    block: Number(receipt.blockNumber),
  }
}
