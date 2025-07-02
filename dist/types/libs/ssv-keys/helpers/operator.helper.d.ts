import type { IOperator } from '@/libs/ssv-keys/interfaces/IOperator.ts';
import { OperatorData } from '@/libs/ssv-keys/KeyShares/KeySharesData/OperatorData';
/**
 * Sort operators input.
 * @param operators list
 */
export declare const operatorSortedList: (operators: IOperator[]) => OperatorData[];
