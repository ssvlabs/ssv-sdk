import type { ConfigReturnType } from '@/config/create'
import type { Address } from 'abitype'

type SetFeeRecipientProps = {
  recipient: Address
}

export const setFeeRecipient = async (
  config: ConfigReturnType,
  { recipient }: SetFeeRecipientProps,
) => {
  return config.contract.ssv.write.setFeeRecipientAddress({
    args: {
      recipientAddress: recipient,
    },
  })
} 