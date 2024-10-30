import { GetClusterQuery } from '@/graphql/graphql'
import { ClusterSnapshot } from '@/types/contract'

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
