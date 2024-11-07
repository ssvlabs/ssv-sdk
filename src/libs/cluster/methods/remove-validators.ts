import type { ConfigReturnType } from '@/config/create'
import { getClusterSnapshot } from '@/utils/cluster'
import type { Hex } from 'viem'

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