import { ConfigReturnType } from '@/config/create'
import { Address } from 'abitype'

type WithdrawArgs = {
  operatorId: string
  amount: bigint
}
export const withdraw = async (config: ConfigReturnType, { operatorId, amount }: WithdrawArgs) => {
  const balance = await config.contract.read.getOperatorEarnings({
    id: BigInt(operatorId),
  })

  const shouldWithdrawAll = amount >= balance

  if (shouldWithdrawAll) {
    return config.contract.write.withdrawAllOperatorEarnings({
      operatorId: BigInt(operatorId),
    })
  }

  return config.contract.write.withdrawOperatorEarnings({
    operatorId: BigInt(operatorId),
    amount,
  })
}

type SetOperatorWhitelistsArgs = {
  operatorIds: string[]
  contractAddress: Address
}
export const setOperatorWhitelists = async (
  config: ConfigReturnType,
  { operatorIds, contractAddress }: SetOperatorWhitelistsArgs,
) => {
  const isWhitelistingContract = await config.contract.read.isWhitelistingContract({
    contractAddress,
  })

  if (!isWhitelistingContract) {
    throw new Error('The provided contract is not whitelisting contract')
  }

  return config.contract.write.setOperatorsWhitelists({
    operatorIds: operatorIds.map(BigInt),
    whitelistAddresses: [contractAddress],
  })
}