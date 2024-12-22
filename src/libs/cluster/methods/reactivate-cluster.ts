import type { ConfigReturnType } from '@/config/create'
import type { SmartFnWriteOptions } from '@/contract-interactions/types'
import { getClusterSnapshot } from '@/utils/cluster'

type ReactivateClusterProps = SmartFnWriteOptions<{
  id: string
  amount: bigint
}>

export const reactivateCluster = async (
  config: ConfigReturnType,
  { args: { id, amount }, ...writeOptions }: ReactivateClusterProps,
) => {
  const cluster = await config.api.getCluster({ id })

  if (!cluster) {
    throw new Error('Cluster not found')
  }

  return config.contract.ssv.write.reactivate({
    args: {
      cluster: getClusterSnapshot(cluster),
      amount,
      operatorIds: cluster.operatorIds.map(BigInt),
    },
    ...writeOptions,
  })
} 