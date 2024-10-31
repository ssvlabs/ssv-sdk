import { ConfigReturnType } from '@/config/create'
import { createClusterId, createEmptyCluster, getClusterSnapshot } from '@/utils/cluster'
import { Address } from 'abitype'
import { KeySharesItem } from 'ssv-keys'
import { Hex } from 'viem'

type DepositProps = {
  id: string
  amount: bigint
  options?: DepositOptions
}
type DepositOptions = {
  approve?: boolean
}
export const deposit = async (config: ConfigReturnType, { id, amount, options }: DepositProps) => {
  const cluster = await config.api.getCluster({ id })

  if (!cluster) {
    throw new Error('Cluster not found')
  }

  const snapshot = getClusterSnapshot(cluster)
  if (options?.approve) {
    const allowance = await config.contract.token.read.allowance({
      owner: config.walletClient.account!.address,
      spender: config.contractAddresses.setter,
    })

    if (allowance < amount) {
      await config.contract.token.write
        .approve({
          spender: config.contractAddresses.setter,
          amount,
        })
        .then((tx) => tx.wait())
    }
  }

  return config.contract.write.deposit({
    amount,
    cluster: snapshot,
    clusterOwner: process.env.OWNER_ADDRESS!,
    operatorIds: cluster.operatorIds.map(BigInt),
  })
}

type WithdrawProps = {
  id: string
  amount: bigint
}
export const withdraw = async (config: ConfigReturnType, { id, amount }: WithdrawProps) => {
  const cluster = await config.api.getCluster({ id })

  if (!cluster) {
    throw new Error('Cluster not found')
  }

  return config.contract.write.withdraw({
    amount,
    cluster: getClusterSnapshot(cluster),
    operatorIds: cluster.operatorIds.map(BigInt),
  })
}

type SetFeeRecipientProps = {
  recipient: Address
}

export const setFeeRecipient = async (
  config: ConfigReturnType,
  { recipient }: SetFeeRecipientProps,
) => {
  return config.contract.write.setFeeRecipientAddress({
    recipientAddress: recipient,
  })
}

type RemoveValidatorsProps = {
  id: string
  publicKeys: Hex[]
}
export const removeValidators = async (
  config: ConfigReturnType,
  { id, publicKeys }: RemoveValidatorsProps,
) => {
  const cluster = await config.api.getCluster({ id })

  if (!cluster) {
    throw new Error('Cluster not found')
  }

  if (publicKeys.length === 1) {
    return config.contract.write.removeValidator({
      cluster: getClusterSnapshot(cluster),
      publicKey: publicKeys[0],
      operatorIds: cluster.operatorIds.map(BigInt),
    })
  }

  return config.contract.write.bulkRemoveValidator({
    cluster: getClusterSnapshot(cluster),
    publicKeys,
    operatorIds: cluster.operatorIds.map(BigInt),
  })
}

type ExitValidatorsProps = {
  publicKeys: Hex[]
  operatorIds: bigint[]
}
export const exitValidators = async (
  config: ConfigReturnType,
  { publicKeys, operatorIds }: ExitValidatorsProps,
) => {
  if (publicKeys.length === 1) {
    return config.contract.write.exitValidator({
      publicKey: publicKeys[0],
      operatorIds: [operatorIds[0]],
    })
  }

  return config.contract.write.bulkExitValidator({
    publicKeys,
    operatorIds,
  })
}

type LiquidateClusterProps = {
  id: string
}
export const liquidateCluster = async (config: ConfigReturnType, { id }: LiquidateClusterProps) => {
  const cluster = await config.api.getCluster({ id })

  if (!cluster) {
    throw new Error('Cluster not found')
  }

  return config.contract.write.liquidate({
    cluster: getClusterSnapshot(cluster),
    clusterOwner: config.walletClient.account!.address,
    operatorIds: cluster.operatorIds.map(BigInt),
  })
}

type ReactivateClusterProps = {
  id: string
  amount: bigint
}
export const reactivateCluster = async (
  config: ConfigReturnType,
  { id, amount }: ReactivateClusterProps,
) => {
  const cluster = await config.api.getCluster({ id })

  if (!cluster) {
    throw new Error('Cluster not found')
  }

  return config.contract.write.reactivate({
    cluster: getClusterSnapshot(cluster),
    amount,
    operatorIds: cluster.operatorIds.map(BigInt),
  })
}

type RegisterValidatorsProps = {
  keyshares: KeySharesItem[]
  depositAmount?: bigint
}
export const registerValidators = async (
  config: ConfigReturnType,
  { keyshares, depositAmount = 0n }: RegisterValidatorsProps,
) => {
  const operatorIds = keyshares[0].payload.operatorIds

  const clusterId = createClusterId(config.walletClient.account!.address, operatorIds)
  const cluster = await config.api.getCluster({
    id: clusterId,
  })

  const snapshot = cluster ? getClusterSnapshot(cluster) : createEmptyCluster()

  if (keyshares.length === 1) {
    return config.contract.write.registerValidator({
      amount: depositAmount,
      cluster: snapshot,
      operatorIds: operatorIds.map(BigInt),
      publicKey: keyshares[0].payload.publicKey as Hex,
      sharesData: keyshares[0].payload.sharesData as Hex,
    })
  }

  return config.contract.write.bulkRegisterValidator({
    cluster: snapshot,
    amount: depositAmount,
    operatorIds: operatorIds.map(BigInt),
    publicKeys: keyshares.map((share) => share.payload.publicKey as Hex),
    sharesData: keyshares.map((share) => share.payload.sharesData as Hex),
  })
}
