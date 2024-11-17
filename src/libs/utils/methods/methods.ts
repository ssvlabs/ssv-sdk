import type { ConfigReturnType } from '@/config/create'
import type { DepositData } from '@/libs/utils/methods/create-validator-keys'
import { add0x } from '@/utils'
import { parseEther } from 'viem'

export const getOperatorCapacity = async (config: ConfigReturnType, operatorId: string) => {
  const [operator, limit] = await Promise.all([
    config.api.getOperator({
      id: operatorId,
    }),
    config.contract.ssv.read.getValidatorsPerOperatorLimit(),
  ])
  if (!operator) return 0n
  return limit - Number(operator.validatorCount)
}

export const activateValidator = async (config: ConfigReturnType, depositData: DepositData) => {
  return config.contract.deposit.write.deposit({
    value: parseEther('32'),
    args: {
      pubkey: add0x(depositData.pubkey),
      withdrawal_credentials: add0x(depositData.withdrawal_credentials),
      signature: add0x(depositData.signature),
      deposit_data_root: add0x(depositData.deposit_data_root),
    },
  })
}
