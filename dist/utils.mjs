import { o, K, n, _, l, e, d, x, b, a, c, f, G, g, k, E, t, p, y, A, z, j, D, i, h, m, B, u, w, r, C, s, F, v, q } from "./globals-DlonCtsi.mjs";
const waitForTransaction = async (config, fn) => {
  const hash = await fn;
  return config.publicClient.waitForTransactionReceipt({ hash });
};
export {
  o as KeysharesValidationError,
  K as KeysharesValidationErrors,
  n as KeysharesValidationErrorsMessages,
  _ as _percentageFormatter,
  l as add0x,
  e as bigintAbs,
  d as bigintFloor,
  x as bigintFormatter,
  b as bigintMax,
  a as bigintMin,
  c as bigintRound,
  f as bigintifyNumbers,
  G as configArgsSchema,
  g as createClusterId,
  k as createEmptyCluster,
  E as decodeOperatorPublicKey,
  t as ensureNoKeysharesErrors,
  p as ensureValidatorsUniqueness,
  y as ethFormatter,
  A as formatBigintInput,
  z as formatSSV,
  j as getClusterSnapshot,
  D as getOperatorIds,
  i as isBigIntChanged,
  h as isClusterId,
  m as isKeySharesItem,
  B as ms,
  u as numberFormatter,
  w as percentageFormatter,
  r as roundOperatorFee,
  C as sortNumbers,
  s as stringifyBigints,
  F as tryCatch,
  v as validateConsistentOperatorIds,
  q as validateConsistentOperatorPublicKeys,
  waitForTransaction
};
