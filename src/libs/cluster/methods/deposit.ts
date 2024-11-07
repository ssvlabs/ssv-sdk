import type { ConfigReturnType } from '@/config/create'
import { getClusterSnapshot } from '@/utils/cluster'

type DepositProps = {
  id: string
  amount: bigint
  options?: DepositOptions
}

type DepositOptions = {
  approve?: boolean
}

export const deposit = async (config: ConfigReturnType, { id, amount, options }: DepositProps) => {
  const cluster = await config.api.getCluster({ id })

  if (!cluster) {
    throw new Error('Cluster not found')
  }

  const snapshot = getClusterSnapshot(cluster)
  if (options?.approve) {
    const allowance = await config.contract.token.read.allowance({
      owner: config.walletClient.account!.address,
      spender: config.contractAddresses.setter,
    })

    if (allowance < amount) {
      await config.contract.token.write
        .approve({
          spender: config.contractAddresses.setter,
          amount,
        })
        .then((tx) => tx.wait())
    }
  }

  return config.contract.write.deposit({
    amount,
    cluster: snapshot,
    clusterOwner: process.env.OWNER_ADDRESS!,
    operatorIds: cluster.operatorIds.map(BigInt),
  })
} 