export const isOperatorsLengthValid = (length: number) =>
  (length < 4 || length > 13 || length % 3 != 1);
