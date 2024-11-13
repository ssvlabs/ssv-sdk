import type { ConfigReturnType } from '@/config/create'
import type { Hex } from 'viem'

type ExitValidatorsProps = {
  publicKeys: Hex[]
  operatorIds: bigint[]
}

export const exitValidators = async (
  config: ConfigReturnType,
  { publicKeys, operatorIds }: ExitValidatorsProps,
) => {
  if (publicKeys.length === 1) {
    return config.contract.ssv.write.exitValidator({
      args: {
        publicKey: publicKeys[0],
        operatorIds: [operatorIds[0]],
      },
    })
  }

  return config.contract.ssv.write.bulkExitValidator({
    args: {
      publicKeys,
      operatorIds,
    },
  })
} 