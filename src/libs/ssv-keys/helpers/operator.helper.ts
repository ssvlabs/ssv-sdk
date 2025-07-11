import type { IOperator } from '@/libs/ssv-keys/interfaces/IOperator.ts';
import { OperatorData } from '@/libs/ssv-keys/KeyShares/KeySharesData/OperatorData';
import { OperatorsCountsMismatchError } from '@/libs/ssv-keys/exceptions/operator';

/**
 * Sort operators input.
 * @param operators list
 */

export const operatorSortedList = (operators: IOperator[]): OperatorData[] => {
  // Extracting IDs and operatorKeys for error reporting
  const ids = operators.map(op => op.id);
  const operatorKeys = operators.map(op => op.operatorKey);

  // Validate and convert IDs to numbers for sorting
  const validatedOperators = operators.map((operator: IOperator) => {
    const id = parseInt(`${operator.id}`, 10);
    if (isNaN(id)) {
      throw new OperatorsCountsMismatchError(ids, operatorKeys, `Invalid operator ID: ${operator.id}`);
    }
    if (!operator.operatorKey) {
      throw new OperatorsCountsMismatchError(ids, operatorKeys, `Operator key is missing for operator ID: ${id}`);
    }
    return { ...operator, id };
  });

  // Sort operators by ID
  validatedOperators.sort((a, b) => a.id - b.id);

  // Map to OperatorData objects
  return validatedOperators.map(operator => new OperatorData(operator));
};
