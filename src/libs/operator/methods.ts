import { ConfigReturnType } from '@/config/create'
import { getOperator } from '@/queries'
import { Address } from 'abitype'
import { isAddressEqual, zeroAddress } from 'viem'

type WithdrawArgs = {
  operatorId: string
  amount: bigint
}
export const withdraw = async (config: ConfigReturnType, { operatorId, amount }: WithdrawArgs) => {
  const balance = await config.contract.read.getOperatorEarnings({
    id: BigInt(operatorId),
  })

  const isWithdrawingAll = amount >= balance

  if (isWithdrawingAll) {
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

export const canAccountUseOperator = async (
  config: ConfigReturnType,
  operator: Awaited<ReturnType<typeof getOperator>>,
  account: Address,
) => {
  if (!operator) return false
  if (!operator.isPrivate) return true

  const isWhitelisted = operator.whitelisted.some((addr) =>
    isAddressEqual(addr as Address, account),
  )

  if (isWhitelisted) return true

  const hasExternalContract = Boolean(
    operator.whitelistedContract && operator.whitelistedContract !== zeroAddress,
  )

  if (!hasExternalContract) return false

  return config.contract.read.isAddressWhitelistedInWhitelistingContract({
    addressToCheck: account,
    operatorId: BigInt(operator.id),
    whitelistingContract: operator.whitelistedContract as Address,
  })
}
