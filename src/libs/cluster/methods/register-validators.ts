import type { ConfigReturnType } from '@/config/create'
import { isKeySharesItem } from '@/utils'
import { createClusterId, createEmptyCluster, getClusterSnapshot } from '@/utils/cluster'
import type { KeySharesItem } from 'ssv-keys'
import type { Hex } from 'viem'

type RegisterValidatorsProps = {
  keyshares: KeySharesItem[] | KeySharesItem['payload'][]
  depositAmount?: bigint
}

export const registerValidators = async (
  config: ConfigReturnType,
  { keyshares, depositAmount = 0n }: RegisterValidatorsProps,
) => {
  const shares = keyshares.map((share) => {
    return isKeySharesItem(share) ? share.payload : share
  })

  const operatorIds = shares[0].operatorIds

  const clusterId = createClusterId(config.walletClient.account!.address, operatorIds)
  const cluster = await config.api.getCluster({
    id: clusterId,
  })

  const snapshot = cluster ? getClusterSnapshot(cluster) : createEmptyCluster()

  if (shares.length === 1) {
    return config.contract.write.registerValidator({
      amount: depositAmount,
      cluster: snapshot,
      operatorIds: operatorIds.map(BigInt),
      publicKey: shares[0].publicKey as Hex,
      sharesData: shares[0].sharesData as Hex,
    })
  }

  return config.contract.write.bulkRegisterValidator({
    cluster: snapshot,
    amount: depositAmount,
    operatorIds: operatorIds.map(BigInt),
    publicKeys: shares.map((share) => share.publicKey as Hex),
    sharesData: shares.map((share) => share.sharesData as Hex),
  })
}
