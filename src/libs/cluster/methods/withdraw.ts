import type { ConfigReturnType } from '@/config/create'
import type { SmartFnWriteOptions } from '@/contract-interactions/types'
import { getClusterSnapshot } from '@/utils/cluster'

type WithdrawProps = SmartFnWriteOptions<{
  id: string
  amount: bigint
}>

export const withdraw = async (
  config: ConfigReturnType,
  { args: { id, amount }, ...writeOptions }: WithdrawProps,
) => {
  const cluster = await config.api.getCluster({ id })

  if (!cluster) {
    throw new Error('Cluster not found')
  }

  return config.contract.ssv.write.withdraw({
    args: {
      amount,
      cluster: getClusterSnapshot(cluster),
      operatorIds: cluster.operatorIds.map(BigInt),
    },
    ...writeOptions,
  })
} 