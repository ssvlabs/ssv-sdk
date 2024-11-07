import type { ConfigReturnType } from '@/config/create'
import { createClusterId, createEmptyCluster, getClusterSnapshot } from '@/utils/cluster'
import type { KeySharesItem } from 'ssv-keys'
import type { Hex } from 'viem'

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