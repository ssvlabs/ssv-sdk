import type { ConfigReturnType } from '@/config/create'
import type { SmartFnWriteOptions } from '@/contract-interactions/types'
import type { Address } from 'abitype'

type SetFeeRecipientProps = SmartFnWriteOptions<{
  recipient: Address
}>

export const setFeeRecipient = async (
  config: ConfigReturnType,
  { args: { recipient }, ...writeOptions }: SetFeeRecipientProps,
) => {
  return config.contract.ssv.write.setFeeRecipientAddress({
    args: {
      recipientAddress: recipient,
    },
    ...writeOptions,
  })
} 