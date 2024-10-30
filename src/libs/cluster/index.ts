import { ConfigReturnType } from '@/config/create'
import { waitForTransaction } from '@/utils/contract'
import { getClusterSnapshot } from '@/utils/queries'

type DepositProps = {
  id: string
  amount: bigint
  options?: DepositOptions
}
type DepositOptions = {
  approve?: boolean
}
const deposit = async (config: ConfigReturnType, { id, amount, options }: DepositProps) => {
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
      await waitForTransaction(
        config,
        config.contract.token.write.approve({
          spender: config.contractAddresses.setter,
          amount,
        }),
      )
    }
  }

  return config.contract.write.deposit({
    amount,
    cluster: snapshot,
    clusterOwner: process.env.OWNER_ADDRESS!,
    operatorIds: cluster.operatorIds.map(BigInt),
  })
}

export const createClusterManager = (config: ConfigReturnType) => ({
  deposit: deposit.bind(null, config),
})
