import type { ConfigReturnType } from '@/config/create'

import type { Address } from 'abitype'
import type { TransactionReceipt } from 'viem'

export const waitForTransaction = async <T extends Promise<Address>>(
  config: ConfigReturnType,
  fn: T,
): Promise<TransactionReceipt> => {
  const hash = await fn
  return config.publicClient.waitForTransactionReceipt({ hash })
}
