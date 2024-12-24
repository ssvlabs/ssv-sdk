import type { ConfigReturnType } from '@/config/create'
import type { SmartFnWriteOptions } from '@/contract-interactions/types'
import type { Hex } from 'viem'

type ExitValidatorsProps = SmartFnWriteOptions<{
  publicKeys: Hex[]
  operatorIds: bigint[]
}>

export const exitValidators = async (
  config: ConfigReturnType,
  { args: { publicKeys, operatorIds }, ...writeOptions }: ExitValidatorsProps,
) => {
  if (publicKeys.length === 1) {
    return config.contract.ssv.write.exitValidator({
      args: {
        publicKey: publicKeys[0],
        operatorIds: [operatorIds[0]],
      },
      ...writeOptions,
    })
  }

  return config.contract.ssv.write.bulkExitValidator({
    args: {
      publicKeys,
      operatorIds,
    },
    ...writeOptions,
  })
}
