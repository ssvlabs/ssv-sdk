import { sortNumbers } from '@/utils/number';
import { decodeAbiParameters } from 'viem';
export const getOperatorIds = (operators) => {
    return sortNumbers(operators.map((operator) => operator.id));
};
export const decodeOperatorPublicKey = (publicKey) => {
    return decodeAbiParameters([{ type: 'string' }], publicKey)[0];
};
