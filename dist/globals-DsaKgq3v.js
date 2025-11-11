"use strict";
const lodashEs = require("lodash-es");
const viem = require("viem");
require("graphql-request");
const zod = require("zod");
const numberFormatter = new Intl.NumberFormat("en-US", {
  useGrouping: true,
  maximumFractionDigits: 2
});
const _percentageFormatter = new Intl.NumberFormat("en-US", {
  style: "percent",
  maximumFractionDigits: 2
});
const percentageFormatter = {
  format: (value) => {
    if (!value) return "0%";
    return _percentageFormatter.format(value / 100);
  }
};
const bigintFormatter = new Intl.NumberFormat("en-US", {
  useGrouping: false,
  maximumFractionDigits: 7
});
const ethFormatter = new Intl.NumberFormat("en-US", {
  useGrouping: true,
  maximumFractionDigits: 4
});
const formatSSV = (num, decimals = 18) => ethFormatter.format(+viem.formatUnits(num, decimals));
const formatBigintInput = (num, decimals = 18) => bigintFormatter.format(+viem.formatUnits(num, decimals));
const units = {
  seconds: 1e3,
  minutes: 6e4,
  hours: 36e5,
  days: 864e5,
  weeks: 6048e5,
  months: 2629746e3,
  years: 31556952e3
};
const ms = (value, unit) => {
  return value * units[unit];
};
const sortNumbers = (numbers) => {
  return [...numbers].sort((a, b) => Number(a) - Number(b));
};
const getOperatorIds = (operators) => {
  return sortNumbers(operators.map((operator) => operator.id));
};
const decodeOperatorPublicKey = (publicKey) => {
  return viem.decodeAbiParameters([{ type: "string" }], publicKey)[0];
};
function defineChain(chain) {
  return {
    formatters: void 0,
    fees: void 0,
    serializers: void 0,
    ...chain
  };
}
const mainnet = /* @__PURE__ */ defineChain({
  id: 1,
  name: "Ethereum",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  blockTime: 12e3,
  rpcUrls: {
    default: {
      http: ["https://eth.merkle.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://etherscan.io",
      apiUrl: "https://api.etherscan.io/api"
    }
  },
  contracts: {
    ensUniversalResolver: {
      address: "0xeeeeeeee14d718c2b47d9923deab1335e144eeee",
      blockCreated: 23085558
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601
    }
  }
});
const hoodi = viem.defineChain({
  id: 560048,
  name: "Hoodi",
  rpcUrls: {
    default: {
      http: ["https://rpc.hoodi.ethpandaops.io"]
    }
  },
  nativeCurrency: {
    name: "Hoodi Ether",
    symbol: "ETH",
    decimals: 18
  },
  testnet: true
});
const chains = {
  mainnet,
  hoodi
};
const chainIds = Object.values(chains).map((chain) => chain.id);
const networks = Object.values(chains).map((chain) => chain.name);
const graph_endpoints = {
  [mainnet.id]: "https://api.studio.thegraph.com/query/71118/ssv-network-ethereum/version/latest",
  [hoodi.id]: "https://api.studio.thegraph.com/query/71118/ssv-network-hoodi/version/latest"
};
const paid_graph_endpoints = {
  [mainnet.id]: "https://gateway.thegraph.com/api/subgraphs/id/7V45fKPugp9psQjgrGsfif98gWzCyC6ChN7CW98VyQnr",
  [hoodi.id]: "https://gateway.thegraph.com/api/subgraphs/id/F4AU5vPCuKfHvnLsusibxJEiTN7ELCoYTvnzg3YHGYbh"
};
const rest_endpoints = {
  [mainnet.id]: "https://api.ssv.network/api/v4/mainnet",
  [hoodi.id]: "https://api.ssv.network/api/v4/hoodi"
};
const contracts = {
  [mainnet.id]: {
    setter: "0xDD9BC35aE942eF0cFa76930954a156B3fF30a4E1",
    getter: "0xafE830B6Ee262ba11cce5F32fDCd760FFE6a66e4",
    token: "0x9D65fF81a3c488d585bBfb0Bfe3c7707c7917f54"
  },
  [hoodi.id]: {
    setter: "0x58410Bef803ECd7E63B23664C586A6DB72DAf59c",
    getter: "0x5AdDb3f1529C5ec70D77400499eE4bbF328368fe",
    token: "0x9F5d4Ec84fC4785788aB44F9de973cF34F7A038e"
  }
};
const bigintMax = (...args) => {
  return args.filter((x) => !lodashEs.isUndefined(x)).reduce((max, cur) => cur > max ? cur : max);
};
const bigintMin = (...args) => {
  return args.filter((x) => !lodashEs.isUndefined(x)).reduce((min, cur) => cur < min ? cur : min);
};
const bigintRound = (value, precision) => {
  const remainder = value % precision;
  return remainder >= precision / 2n ? value + (precision - remainder) : value - remainder;
};
const bigintFloor = (value, precision = 10000000n) => {
  return value - value % precision;
};
const bigintAbs = (n) => n < 0n ? -n : n;
const isBigIntChanged = (a, b, tolerance = viem.parseUnits("0.0001", 18)) => {
  return bigintAbs(a - b) > tolerance;
};
const roundOperatorFee = (fee, precision = 10000000n) => {
  return bigintRound(fee, precision);
};
const stringifyBigints = (anything) => {
  return lodashEs.cloneDeepWith(anything, (value) => {
    if (typeof value === "bigint") return value.toString();
  });
};
const bigintifyNumbers = (numbers) => {
  return lodashEs.cloneDeepWith(numbers, (value) => {
    if (typeof value === "number") return BigInt(value);
  });
};
const createClusterId = (ownerAddress, operatorIds) => {
  if (!viem.isAddress(ownerAddress)) {
    throw new Error("Invalid owner address");
  }
  return `${ownerAddress.toLowerCase()}-${operatorIds.join("-")}`;
};
const isClusterId = (clusterId) => {
  const [ownerAddress, ...operatorIds] = clusterId.split("-");
  return viem.isAddress(ownerAddress) && operatorIds.length >= 4 && operatorIds.every((id) => !isNaN(Number(id)));
};
const getClusterSnapshot = (cluster) => {
  return {
    active: cluster.active,
    balance: BigInt(cluster.balance),
    index: BigInt(cluster.index),
    networkFeeIndex: BigInt(cluster.networkFeeIndex),
    validatorCount: +cluster.validatorCount
  };
};
const createEmptyCluster = (cluster = {}) => lodashEs.merge(
  {
    validatorCount: 0,
    networkFeeIndex: 0n,
    index: 0n,
    balance: 0n,
    active: true
  },
  cluster
);
const add0x = (value) => !value.startsWith("0x") ? `0x${value}` : value;
const isKeySharesItem = (item) => {
  return !!item && typeof item === "object" && "data" in item && "payload" in item && "error" in item;
};
var KeysharesValidationErrors = /* @__PURE__ */ ((KeysharesValidationErrors2) => {
  KeysharesValidationErrors2[KeysharesValidationErrors2["OperatorDoesNotExist"] = 0] = "OperatorDoesNotExist";
  KeysharesValidationErrors2[KeysharesValidationErrors2["OperatorMismatch"] = 1] = "OperatorMismatch";
  KeysharesValidationErrors2[KeysharesValidationErrors2["ValidatorAlreadyExists"] = 2] = "ValidatorAlreadyExists";
  KeysharesValidationErrors2[KeysharesValidationErrors2["ClusterMismatch"] = 3] = "ClusterMismatch";
  KeysharesValidationErrors2[KeysharesValidationErrors2["DuplicateValidatorKeys"] = 4] = "DuplicateValidatorKeys";
  KeysharesValidationErrors2[KeysharesValidationErrors2["InconsistentOperatorPublicKeys"] = 5] = "InconsistentOperatorPublicKeys";
  KeysharesValidationErrors2[KeysharesValidationErrors2["InconsistentOperators"] = 6] = "InconsistentOperators";
  return KeysharesValidationErrors2;
})(KeysharesValidationErrors || {});
const KeysharesValidationErrorsMessages = {
  [
    0
    /* OperatorDoesNotExist */
  ]: "Operator not found. Please verify the operator ID.",
  [
    1
    /* OperatorMismatch */
  ]: "Operator details mismatch. Check provided information.",
  [
    2
    /* ValidatorAlreadyExists */
  ]: "Validator public key already in use. Must be unique.",
  [
    3
    /* ClusterMismatch */
  ]: "The operators in the provided keyshares do not match the provided operators. Please ensure the keyshares correspond to the cluster you are trying to register.",
  [
    4
    /* DuplicateValidatorKeys */
  ]: "Duplicate validator keys detected. Each must be unique.",
  [
    5
    /* InconsistentOperatorPublicKeys */
  ]: "Operator public keys mismatch. Verify operator data.",
  [
    6
    /* InconsistentOperators */
  ]: "Inconsistent operator IDs across keyshares. Check all entries."
};
class KeysharesValidationError extends Error {
  constructor(code) {
    super(KeysharesValidationErrorsMessages[code]);
    this.code = code;
  }
}
const validateConsistentOperatorIds = (keyshares) => {
  const operatorIds = sortNumbers(keyshares[0].payload.operatorIds);
  keyshares.every(({ payload, data }) => {
    const payloadOperatorIds = sortNumbers(payload.operatorIds).toString();
    const dataOperatorIds = getOperatorIds(data.operators ?? []).toString();
    const valid = payloadOperatorIds === dataOperatorIds && dataOperatorIds === operatorIds.toString();
    if (!valid) {
      throw new KeysharesValidationError(
        6
        /* InconsistentOperators */
      );
    }
    return true;
  });
  return operatorIds;
};
const ensureValidatorsUniqueness = (keyshares) => {
  const set = new Set(keyshares.map(({ data }) => data.publicKey));
  if (set.size !== keyshares.length) {
    throw new KeysharesValidationError(
      4
      /* DuplicateValidatorKeys */
    );
  }
  return true;
};
const validateConsistentOperatorPublicKeys = (keyshares, operators) => {
  const operatorsMap = new Map(operators.map((o) => [o.id, o.publicKey]));
  const valid = keyshares.every(({ data }) => {
    return data.operators?.every(({ id, operatorKey }) => {
      return operatorsMap.get(id.toString()) === operatorKey;
    });
  });
  if (!valid) {
    throw new KeysharesValidationError(
      5
      /* InconsistentOperatorPublicKeys */
    );
  }
  return valid;
};
const ensureNoKeysharesErrors = (keyshares) => {
  keyshares.forEach((share) => {
    if (share.error) {
      throw share.error;
    }
  });
  return true;
};
const tryCatch = (fn) => {
  try {
    return [fn(), null];
  } catch (e) {
    return [null, e];
  }
};
const configArgsSchema = zod.z.object({
  publicClient: zod.z.custom().superRefine((val, ctx) => {
    const client = val;
    if (!client) {
      ctx.addIssue({
        code: zod.z.ZodIssueCode.custom,
        message: "Public client must be provided"
      });
      return false;
    }
    if (client.chain === void 0) {
      ctx.addIssue({
        code: zod.z.ZodIssueCode.custom,
        message: "Public client must have a chain property"
      });
      return false;
    }
    if (![...chainIds].includes(client.chain?.id)) {
      ctx.addIssue({
        code: zod.z.ZodIssueCode.custom,
        message: `Public client chain must be one of [${networks.join(", ")}]`
      });
      return false;
    }
    return true;
  }),
  walletClient: zod.z.custom().superRefine((val, ctx) => {
    const client = val;
    if (!client) {
      ctx.addIssue({
        code: zod.z.ZodIssueCode.custom,
        message: "Wallet client must be provided"
      });
      return false;
    }
    if (client.chain === void 0) {
      ctx.addIssue({
        code: zod.z.ZodIssueCode.custom,
        message: "Wallet client must have a chain property"
      });
      return false;
    }
    if (![...chainIds].includes(client.chain?.id)) {
      ctx.addIssue({
        code: zod.z.ZodIssueCode.custom,
        message: `Wallet client chain must be one of [${networks.join(", ")}]`
      });
      return false;
    }
    return true;
  }),
  extendedConfig: zod.z.object({
    subgraph: zod.z.object({
      endpoint: zod.z.string().url().optional(),
      apiKey: zod.z.string().optional()
    }).optional(),
    rest: zod.z.object({
      endpoint: zod.z.string().url().optional()
    }).optional(),
    contracts: zod.z.object({
      setter: zod.z.string().optional(),
      getter: zod.z.string().optional(),
      token: zod.z.string().optional()
    }).optional()
  }).optional()
}).refine(
  (val) => {
    const publicClient = val.publicClient;
    const walletClient = val.walletClient;
    return publicClient?.chain?.id === walletClient?.chain?.id;
  },
  {
    message: "Public and wallet client chains must be the same"
  }
);
const globals = {
  MAX_WEI_AMOUNT: 115792089237316195423570985008687907853269984665640564039457584007913129639935n,
  CLUSTER_SIZES: {
    QUAD_CLUSTER: 4,
    SEPT_CLUSTER: 7,
    DECA_CLUSTER: 10,
    TRISKAIDEKA_CLUSTER: 13
  },
  FIXED_VALIDATORS_COUNT_PER_CLUSTER_SIZE: {
    QUAD_CLUSTER: 80,
    SEPT_CLUSTER: 40,
    DECA_CLUSTER: 30,
    TRISKAIDEKA_CLUSTER: 20
  },
  BLOCKS_PER_DAY: 7160n,
  OPERATORS_PER_PAGE: 50,
  BLOCKS_PER_YEAR: 2613400n,
  DEFAULT_CLUSTER_PERIOD: 730,
  NUMBERS_OF_WEEKS_IN_YEAR: 52.1429,
  MAX_VALIDATORS_COUNT_MULTI_FLOW: 50,
  CLUSTER_VALIDITY_PERIOD_MINIMUM: 30,
  OPERATOR_VALIDATORS_LIMIT_PRESERVE: 5,
  MINIMUM_OPERATOR_FEE_PER_BLOCK: 1000000000n,
  MIN_VALIDATORS_COUNT_PER_BULK_REGISTRATION: 1,
  DEFAULT_ADDRESS_WHITELIST: "0x0000000000000000000000000000000000000000"
};
const registerValidatorsByClusterSizeLimits = {
  [globals.CLUSTER_SIZES.QUAD_CLUSTER]: globals.FIXED_VALIDATORS_COUNT_PER_CLUSTER_SIZE.QUAD_CLUSTER,
  [globals.CLUSTER_SIZES.SEPT_CLUSTER]: globals.FIXED_VALIDATORS_COUNT_PER_CLUSTER_SIZE.SEPT_CLUSTER,
  [globals.CLUSTER_SIZES.DECA_CLUSTER]: globals.FIXED_VALIDATORS_COUNT_PER_CLUSTER_SIZE.DECA_CLUSTER,
  [globals.CLUSTER_SIZES.TRISKAIDEKA_CLUSTER]: globals.FIXED_VALIDATORS_COUNT_PER_CLUSTER_SIZE.TRISKAIDEKA_CLUSTER
};
exports.KeysharesValidationError = KeysharesValidationError;
exports.KeysharesValidationErrors = KeysharesValidationErrors;
exports.KeysharesValidationErrorsMessages = KeysharesValidationErrorsMessages;
exports._percentageFormatter = _percentageFormatter;
exports.add0x = add0x;
exports.bigintAbs = bigintAbs;
exports.bigintFloor = bigintFloor;
exports.bigintFormatter = bigintFormatter;
exports.bigintMax = bigintMax;
exports.bigintMin = bigintMin;
exports.bigintRound = bigintRound;
exports.bigintifyNumbers = bigintifyNumbers;
exports.chainIds = chainIds;
exports.chains = chains;
exports.configArgsSchema = configArgsSchema;
exports.contracts = contracts;
exports.createClusterId = createClusterId;
exports.createEmptyCluster = createEmptyCluster;
exports.decodeOperatorPublicKey = decodeOperatorPublicKey;
exports.ensureNoKeysharesErrors = ensureNoKeysharesErrors;
exports.ensureValidatorsUniqueness = ensureValidatorsUniqueness;
exports.ethFormatter = ethFormatter;
exports.formatBigintInput = formatBigintInput;
exports.formatSSV = formatSSV;
exports.getClusterSnapshot = getClusterSnapshot;
exports.getOperatorIds = getOperatorIds;
exports.globals = globals;
exports.graph_endpoints = graph_endpoints;
exports.hoodi = hoodi;
exports.isBigIntChanged = isBigIntChanged;
exports.isClusterId = isClusterId;
exports.isKeySharesItem = isKeySharesItem;
exports.ms = ms;
exports.networks = networks;
exports.numberFormatter = numberFormatter;
exports.paid_graph_endpoints = paid_graph_endpoints;
exports.percentageFormatter = percentageFormatter;
exports.registerValidatorsByClusterSizeLimits = registerValidatorsByClusterSizeLimits;
exports.rest_endpoints = rest_endpoints;
exports.roundOperatorFee = roundOperatorFee;
exports.sortNumbers = sortNumbers;
exports.stringifyBigints = stringifyBigints;
exports.tryCatch = tryCatch;
exports.validateConsistentOperatorIds = validateConsistentOperatorIds;
exports.validateConsistentOperatorPublicKeys = validateConsistentOperatorPublicKeys;
