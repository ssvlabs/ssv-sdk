import { K, E, T, _, R, N, L, X, y, I, J, P, k, u, v, d, z, A, Y, $, Z, o, a1, O, Q, p, a0, V, W, w, D, s, t, C, B } from "./globals-DwLB9N8S.mjs";
const waitForTransaction = async (config, fn) => {
  const hash = await fn;
  return config.publicClient.waitForTransactionReceipt({ hash });
};
export {
  K as KeysharesValidationError,
  E as KeysharesValidationErrors,
  T as KeysharesValidationErrorsMessages,
  _ as _percentageFormatter,
  R as add0x,
  N as bigintAbs,
  L as bigintFloor,
  X as bigintFormatter,
  y as bigintMax,
  I as bigintMin,
  J as bigintRound,
  P as bigintifyNumbers,
  k as configArgsSchema,
  u as createClusterId,
  v as createEmptyCluster,
  d as decodeOperatorPublicKey,
  z as ensureNoKeysharesErrors,
  A as ensureValidatorsUniqueness,
  Y as ethFormatter,
  $ as formatBigintInput,
  Z as formatSSV,
  o as getClusterSnapshot,
  a1 as getOperatorIds,
  O as isBigIntChanged,
  Q as isClusterId,
  p as isKeySharesItem,
  a0 as ms,
  V as numberFormatter,
  W as percentageFormatter,
  w as roundOperatorFee,
  D as sortNumbers,
  s as stringifyBigints,
  t as tryCatch,
  C as validateConsistentOperatorIds,
  B as validateConsistentOperatorPublicKeys,
  waitForTransaction
};
