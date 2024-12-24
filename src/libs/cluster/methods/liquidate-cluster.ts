import type { ConfigReturnType } from '@/config/create'
import type { SmartFnWriteOptions } from '@/contract-interactions/types'
import { getClusterSnapshot } from '@/utils/cluster'

type LiquidateClusterProps = SmartFnWriteOptions<{
  id: string
}>

export const liquidateCluster = async (
  config: ConfigReturnType,
  { args: { id }, ...writeOptions }: LiquidateClusterProps,
) => {
  const cluster = await config.api.getCluster({ id })

  if (!cluster) {
    throw new Error('Cluster not found')
  }

  return config.contract.ssv.write.liquidate({
    args: {
      cluster: getClusterSnapshot(cluster),
      clusterOwner: config.walletClient.account!.address,
      operatorIds: cluster.operatorIds.map(BigInt),
    },
    ...writeOptions,
  })
}
