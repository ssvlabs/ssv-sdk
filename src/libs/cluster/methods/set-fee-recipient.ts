import { ConfigReturnType } from '@/config/create'
import { Address } from 'abitype'

type SetFeeRecipientProps = {
  recipient: Address
}

export const setFeeRecipient = async (
  config: ConfigReturnType,
  { recipient }: SetFeeRecipientProps,
) => {
  return config.contract.write.setFeeRecipientAddress({
    recipientAddress: recipient,
  })
} 