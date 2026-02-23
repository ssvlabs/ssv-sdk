import { n, K, m, _, k, e, d, x, b, a, c, f, G, g, j, E, q, o, y, A, z, D, i, h, l, B, u, w, r, C, s, t, F, v, p } from "./globals-CBOCrPiM.mjs";
const waitForTransaction = async (config, fn) => {
  const hash = await fn;
  return config.publicClient.waitForTransactionReceipt({ hash });
};
export {
  n as KeysharesValidationError,
  K as KeysharesValidationErrors,
  m as KeysharesValidationErrorsMessages,
  _ as _percentageFormatter,
  k as add0x,
  e as bigintAbs,
  d as bigintFloor,
  x as bigintFormatter,
  b as bigintMax,
  a as bigintMin,
  c as bigintRound,
  f as bigintifyNumbers,
  G as configArgsSchema,
  g as createClusterId,
  j as createEmptyCluster,
  E as decodeOperatorPublicKey,
  q as ensureNoKeysharesErrors,
  o as ensureValidatorsUniqueness,
  y as ethFormatter,
  A as formatBigintInput,
  z as formatSSV,
  D as getOperatorIds,
  i as isBigIntChanged,
  h as isClusterId,
  l as isKeySharesItem,
  B as ms,
  u as numberFormatter,
  w as percentageFormatter,
  r as roundOperatorFee,
  C as sortNumbers,
  s as stringifyBigints,
  t as toSolidityCluster,
  F as tryCatch,
  v as validateConsistentOperatorIds,
  p as validateConsistentOperatorPublicKeys,
  waitForTransaction
};
