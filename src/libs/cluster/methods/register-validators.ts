import { MainnetV4SetterABI } from '@/abi/mainnet/v4/setter'
import type { ConfigReturnType } from '@/config/create'
import { isKeySharesItem } from '@/utils'
import { createClusterId, createEmptyCluster, getClusterSnapshot } from '@/utils/cluster'
import { SSVKeys, type KeySharesItem } from 'ssv-keys'

import type { Hex } from 'viem'

type RegisterValidatorsProps = {
  keyshares: KeySharesItem[] | KeySharesItem['payload'][]
  depositAmount?: bigint
}

export const registerValidators = async (
  config: ConfigReturnType,
  { keyshares, depositAmount = 0n }: RegisterValidatorsProps,
) => {
  const shares = keyshares.map((share) => {
    return isKeySharesItem(share) ? share.payload : share
  })

  const operatorIds = shares[0].operatorIds

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

  const nonce = await config.api.getOwnerNonce({
    owner: config.walletClient.account!.address,
    block: Number(receipt.blockNumber) - 1,
  })

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
    throw new Error('No validator added events found')
  }

  const validationResults: {
    event: (typeof validatorAddedEvents)[number]
    validationResult: Awaited<ReturnType<typeof ssvKeys.validateSharesPostRegistration>>
  }[] = []

  for (const [index, e] of validatorAddedEvents.entries()) {
    validationResults.push({
      event: e,
      validationResult: await ssvKeys.validateSharesPostRegistration({
        blockNumber: Number(receipt.blockNumber),
        operatorsCount: e.args.operatorIds!.length,
        isAccountExists: false,
        ownerAddress: config.walletClient.account!.address,
        ownerNonce: Number(nonce) + index,
        shares: e.args.shares!,
        validatorPublicKey: e.args.publicKey!,
      }),
    })
  }

  const isValid = validationResults.every((r) => r.validationResult.isValid)
  const invalids = validationResults.filter((r) => !r.validationResult.isValid)

  return {
    isValid,
    validationResults,
    invalids,
    block: Number(receipt.blockNumber),
  }
}
