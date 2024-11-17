import type { GetClusterQuery } from '@/graphql/graphql'
import type { ClusterSnapshot } from '@/types/contract-interactions'
import { merge } from 'lodash-es'
import type { Hex } from 'viem'
import { isAddress } from 'viem'

export const createClusterId = (ownerAddress: string, operatorIds: number[]) => {
  if (!isAddress(ownerAddress)) {
    throw new Error('Invalid owner address')
  }
  return `${ownerAddress.toLowerCase()}-${operatorIds.join('-')}`
}

export const isClusterId = (clusterId: string) => {
  const [ownerAddress, ...operatorIds] = clusterId.split('-')
  return (
    isAddress(ownerAddress) &&
    operatorIds.length >= 4 &&
    operatorIds.every((id) => !isNaN(Number(id)))
  )
}

export const getClusterSnapshot = (
  cluster: NonNullable<GetClusterQuery['cluster']>,
): ClusterSnapshot => {
  return {
    active: cluster.active,
    balance: BigInt(cluster.balance),
    index: BigInt(cluster.index),
    networkFeeIndex: BigInt(cluster.networkFeeIndex),
    validatorCount: +cluster.validatorCount,
  }
}
export const createEmptyCluster = (cluster: Partial<ClusterSnapshot> = {}): ClusterSnapshot =>
  merge(
    {
      validatorCount: 0,
      networkFeeIndex: 0n,
      index: 0n,
      balance: 0n,
      active: true,
    },
    cluster,
  )

export const add0x = (value: string | Hex): Hex =>
  (!value.startsWith('0x') ? `0x${value}` : value) as Hex
