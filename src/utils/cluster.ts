import { GetClusterQuery } from '@/graphql/graphql'
import { ClusterSnapshot } from '@/types/contract-interactions'
import { merge } from 'lodash-es'

export const createClusterId = (ownerAddress: string, operatorIds: number[]) => {
  return `${ownerAddress.toLowerCase()}-${operatorIds.join('-')}`
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
