import type { getOperator } from '@/api/subgraph'
import type { ConfigReturnType } from '@/config/create'
import type { Address } from 'abitype'
import { isAddressEqual, zeroAddress } from 'viem'

type WithdrawArgs = {
  operatorId: string
  amount: bigint
}
export const withdraw = async (config: ConfigReturnType, { operatorId, amount }: WithdrawArgs) => {
  const balance = await config.contract.ssv.read.getOperatorEarnings({
    id: BigInt(operatorId),
  })

  const isWithdrawingAll = amount >= balance

  if (isWithdrawingAll) {
    return config.contract.ssv.write.withdrawAllOperatorEarnings({
      args: {
        operatorId: BigInt(operatorId),
      },
    })
  }

  return config.contract.ssv.write.withdrawOperatorEarnings({
    args: {
      operatorId: BigInt(operatorId),
      amount,
    },
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
  const isWhitelistingContract = await config.contract.ssv.read.isWhitelistingContract({
    contractAddress,
  })

  if (!isWhitelistingContract) {
    throw new Error('The provided contract is not whitelisting contract')
  }

  return config.contract.ssv.write.setOperatorsWhitelists({
    args: {
      operatorIds: operatorIds.map(BigInt),
      whitelistAddresses: [contractAddress],
    },
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

  return config.contract.ssv.read.isAddressWhitelistedInWhitelistingContract({
    addressToCheck: account,
    operatorId: BigInt(operator.id),
    whitelistingContract: operator.whitelistedContract as Address,
  })
}
