import { IOperator } from '../interfaces/IOperator.ts';
import { OperatorData } from '../KeyShares/KeySharesData/OperatorData';
/**
 * Sort operators input.
 * @param operators list
 */
export declare const operatorSortedList: (operators: IOperator[]) => OperatorData[];
