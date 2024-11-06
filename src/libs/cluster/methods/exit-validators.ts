import { ConfigReturnType } from '@/config/create'
import { Hex } from 'viem'

type ExitValidatorsProps = {
  publicKeys: Hex[]
  operatorIds: bigint[]
}

export const exitValidators = async (
  config: ConfigReturnType,
  { publicKeys, operatorIds }: ExitValidatorsProps,
) => {
  if (publicKeys.length === 1) {
    return config.contract.write.exitValidator({
      publicKey: publicKeys[0],
      operatorIds: [operatorIds[0]],
    })
  }

  return config.contract.write.bulkExitValidator({
    publicKeys,
    operatorIds,
  })
} 