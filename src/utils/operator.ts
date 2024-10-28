import { sortNumbers } from '@/utils/number'

export const getOperatorIds = <T extends { id: number }[]>(operators: T) => {
  return sortNumbers(operators.map((operator) => operator.id))
}
