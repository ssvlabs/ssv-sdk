import { sortNumbers } from '@/utils/number'
import { Address, decodeAbiParameters } from 'viem'

export const getOperatorIds = <T extends { id: number }[]>(operators: T) => {
  return sortNumbers(operators.map((operator) => operator.id))
}
export const decodeOperatorPublicKey = (publicKey: Address) => {
  return decodeAbiParameters([{ type: 'string' }], publicKey)[0]
}
