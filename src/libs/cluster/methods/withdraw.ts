import { ConfigReturnType } from '@/config/create'
import { getClusterSnapshot } from '@/utils/cluster'

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