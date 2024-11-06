import { ConfigReturnType } from '@/config/create'
import { getClusterSnapshot } from '@/utils/cluster'

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