import { p as process$1 } from "./index-9cMbbYh7.mjs";
import { r as requireCryptoBrowserify, a as require$$2, B as Buffer, S as SSVKeys, g as getDefaultExportFromCjs, I as IsOptional, V as ValidateNested, v as validateSync, b as SSVKeysException, K as KeySharesItem } from "./SSVKeys-DP-HHvzJ.mjs";
import { d as decodeOperatorPublicKey, M as MapCache, S as Symbol$1, e as eq$1, U as Uint8Array, g as getAllKeys, a as getTag, i as isBuffer, b as Stack, c as isTypedArray, f as isArray, h as isObjectLike$1, s as stringifyBigints, j as isUndefined, t as tryCatch$1, k as configArgsSchema, l as chainIds, m as contracts, n as graph_endpoints, r as rest_endpoints, o as getClusterSnapshot$1, p as isKeySharesItem, q as registerValidatorsByClusterSizeLimits, u as createClusterId, v as createEmptyCluster, w as roundOperatorFee, x as globals, y as bigintMax, z as ensureNoKeysharesErrors, A as ensureValidatorsUniqueness, B as validateConsistentOperatorPublicKeys, C as validateConsistentOperatorIds, D as sortNumbers, K as KeysharesValidationError, E as KeysharesValidationErrors } from "./globals-DwLB9N8S.mjs";
import { G, F, H } from "./globals-DwLB9N8S.mjs";
import { decodeEventLog, encodeFunctionData, encodeAbiParameters, parseAbiParameters, isAddressEqual, zeroAddress } from "viem";
var main = { exports: {} };
const version$1 = "16.6.1";
const require$$4 = {
  version: version$1
};
const fs = require$$2;
const path = require$$2;
const os = require$$2;
const crypto = requireCryptoBrowserify();
const packageJson = require$$4;
const version = packageJson.version;
const LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
function parse$3(src) {
  const obj = {};
  let lines = src.toString();
  lines = lines.replace(/\r\n?/mg, "\n");
  let match;
  while ((match = LINE.exec(lines)) != null) {
    const key = match[1];
    let value = match[2] || "";
    value = value.trim();
    const maybeQuote = value[0];
    value = value.replace(/^(['"`])([\s\S]*)\1$/mg, "$2");
    if (maybeQuote === '"') {
      value = value.replace(/\\n/g, "\n");
      value = value.replace(/\\r/g, "\r");
    }
    obj[key] = value;
  }
  return obj;
}
function _parseVault(options2) {
  options2 = options2 || {};
  const vaultPath = _vaultPath(options2);
  options2.path = vaultPath;
  const result = DotenvModule.configDotenv(options2);
  if (!result.parsed) {
    const err = new Error(`MISSING_DATA: Cannot parse ${vaultPath} for an unknown reason`);
    err.code = "MISSING_DATA";
    throw err;
  }
  const keys = _dotenvKey(options2).split(",");
  const length = keys.length;
  let decrypted;
  for (let i = 0; i < length; i++) {
    try {
      const key = keys[i].trim();
      const attrs = _instructions(result, key);
      decrypted = DotenvModule.decrypt(attrs.ciphertext, attrs.key);
      break;
    } catch (error) {
      if (i + 1 >= length) {
        throw error;
      }
    }
  }
  return DotenvModule.parse(decrypted);
}
function _warn(message) {
  console.log(`[dotenv@${version}][WARN] ${message}`);
}
function _debug(message) {
  console.log(`[dotenv@${version}][DEBUG] ${message}`);
}
function _log(message) {
  console.log(`[dotenv@${version}] ${message}`);
}
function _dotenvKey(options2) {
  if (options2 && options2.DOTENV_KEY && options2.DOTENV_KEY.length > 0) {
    return options2.DOTENV_KEY;
  }
  if (process$1.env.DOTENV_KEY && process$1.env.DOTENV_KEY.length > 0) {
    return process$1.env.DOTENV_KEY;
  }
  return "";
}
function _instructions(result, dotenvKey) {
  let uri;
  try {
    uri = new URL(dotenvKey);
  } catch (error) {
    if (error.code === "ERR_INVALID_URL") {
      const err = new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");
      err.code = "INVALID_DOTENV_KEY";
      throw err;
    }
    throw error;
  }
  const key = uri.password;
  if (!key) {
    const err = new Error("INVALID_DOTENV_KEY: Missing key part");
    err.code = "INVALID_DOTENV_KEY";
    throw err;
  }
  const environment = uri.searchParams.get("environment");
  if (!environment) {
    const err = new Error("INVALID_DOTENV_KEY: Missing environment part");
    err.code = "INVALID_DOTENV_KEY";
    throw err;
  }
  const environmentKey = `DOTENV_VAULT_${environment.toUpperCase()}`;
  const ciphertext = result.parsed[environmentKey];
  if (!ciphertext) {
    const err = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${environmentKey} in your .env.vault file.`);
    err.code = "NOT_FOUND_DOTENV_ENVIRONMENT";
    throw err;
  }
  return { ciphertext, key };
}
function _vaultPath(options2) {
  let possibleVaultPath = null;
  if (options2 && options2.path && options2.path.length > 0) {
    if (Array.isArray(options2.path)) {
      for (const filepath of options2.path) {
        if (fs.existsSync(filepath)) {
          possibleVaultPath = filepath.endsWith(".vault") ? filepath : `${filepath}.vault`;
        }
      }
    } else {
      possibleVaultPath = options2.path.endsWith(".vault") ? options2.path : `${options2.path}.vault`;
    }
  } else {
    possibleVaultPath = path.resolve(process$1.cwd(), ".env.vault");
  }
  if (fs.existsSync(possibleVaultPath)) {
    return possibleVaultPath;
  }
  return null;
}
function _resolveHome(envPath) {
  return envPath[0] === "~" ? path.join(os.homedir(), envPath.slice(1)) : envPath;
}
function _configVault(options2) {
  const debug2 = Boolean(options2 && options2.debug);
  const quiet = options2 && "quiet" in options2 ? options2.quiet : true;
  if (debug2 || !quiet) {
    _log("Loading env from encrypted .env.vault");
  }
  const parsed = DotenvModule._parseVault(options2);
  let processEnv = process$1.env;
  if (options2 && options2.processEnv != null) {
    processEnv = options2.processEnv;
  }
  DotenvModule.populate(processEnv, parsed, options2);
  return { parsed };
}
function configDotenv(options2) {
  const dotenvPath = path.resolve(process$1.cwd(), ".env");
  let encoding = "utf8";
  const debug2 = Boolean(options2 && options2.debug);
  const quiet = options2 && "quiet" in options2 ? options2.quiet : true;
  if (options2 && options2.encoding) {
    encoding = options2.encoding;
  } else {
    if (debug2) {
      _debug("No encoding is specified. UTF-8 is used by default");
    }
  }
  let optionPaths = [dotenvPath];
  if (options2 && options2.path) {
    if (!Array.isArray(options2.path)) {
      optionPaths = [_resolveHome(options2.path)];
    } else {
      optionPaths = [];
      for (const filepath of options2.path) {
        optionPaths.push(_resolveHome(filepath));
      }
    }
  }
  let lastError;
  const parsedAll = {};
  for (const path2 of optionPaths) {
    try {
      const parsed = DotenvModule.parse(fs.readFileSync(path2, { encoding }));
      DotenvModule.populate(parsedAll, parsed, options2);
    } catch (e) {
      if (debug2) {
        _debug(`Failed to load ${path2} ${e.message}`);
      }
      lastError = e;
    }
  }
  let processEnv = process$1.env;
  if (options2 && options2.processEnv != null) {
    processEnv = options2.processEnv;
  }
  DotenvModule.populate(processEnv, parsedAll, options2);
  if (debug2 || !quiet) {
    const keysCount = Object.keys(parsedAll).length;
    const shortPaths = [];
    for (const filePath of optionPaths) {
      try {
        const relative = path.relative(process$1.cwd(), filePath);
        shortPaths.push(relative);
      } catch (e) {
        if (debug2) {
          _debug(`Failed to load ${filePath} ${e.message}`);
        }
        lastError = e;
      }
    }
    _log(`injecting env (${keysCount}) from ${shortPaths.join(",")}`);
  }
  if (lastError) {
    return { parsed: parsedAll, error: lastError };
  } else {
    return { parsed: parsedAll };
  }
}
function config(options2) {
  if (_dotenvKey(options2).length === 0) {
    return DotenvModule.configDotenv(options2);
  }
  const vaultPath = _vaultPath(options2);
  if (!vaultPath) {
    _warn(`You set DOTENV_KEY but you are missing a .env.vault file at ${vaultPath}. Did you forget to build it?`);
    return DotenvModule.configDotenv(options2);
  }
  return DotenvModule._configVault(options2);
}
function decrypt(encrypted, keyStr) {
  const key = Buffer.from(keyStr.slice(-64), "hex");
  let ciphertext = Buffer.from(encrypted, "base64");
  const nonce = ciphertext.subarray(0, 12);
  const authTag = ciphertext.subarray(-16);
  ciphertext = ciphertext.subarray(12, -16);
  try {
    const aesgcm = crypto.createDecipheriv("aes-256-gcm", key, nonce);
    aesgcm.setAuthTag(authTag);
    return `${aesgcm.update(ciphertext)}${aesgcm.final()}`;
  } catch (error) {
    const isRange = error instanceof RangeError;
    const invalidKeyLength = error.message === "Invalid key length";
    const decryptionFailed = error.message === "Unsupported state or unable to authenticate data";
    if (isRange || invalidKeyLength) {
      const err = new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");
      err.code = "INVALID_DOTENV_KEY";
      throw err;
    } else if (decryptionFailed) {
      const err = new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");
      err.code = "DECRYPTION_FAILED";
      throw err;
    } else {
      throw error;
    }
  }
}
function populate(processEnv, parsed, options2 = {}) {
  const debug2 = Boolean(options2 && options2.debug);
  const override = Boolean(options2 && options2.override);
  if (typeof parsed !== "object") {
    const err = new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
    err.code = "OBJECT_REQUIRED";
    throw err;
  }
  for (const key of Object.keys(parsed)) {
    if (Object.prototype.hasOwnProperty.call(processEnv, key)) {
      if (override === true) {
        processEnv[key] = parsed[key];
      }
      if (debug2) {
        if (override === true) {
          _debug(`"${key}" is already defined and WAS overwritten`);
        } else {
          _debug(`"${key}" is already defined and was NOT overwritten`);
        }
      }
    } else {
      processEnv[key] = parsed[key];
    }
  }
}
const DotenvModule = {
  configDotenv,
  _configVault,
  _parseVault,
  config,
  decrypt,
  parse: parse$3,
  populate
};
main.exports.configDotenv = DotenvModule.configDotenv;
main.exports._configVault = DotenvModule._configVault;
main.exports._parseVault = DotenvModule._parseVault;
main.exports.config = DotenvModule.config;
main.exports.decrypt = DotenvModule.decrypt;
main.exports.parse = DotenvModule.parse;
main.exports.populate = DotenvModule.populate;
main.exports = DotenvModule;
var mainExports = main.exports;
const options = {};
if (process$1.env.DOTENV_CONFIG_ENCODING != null) {
  options.encoding = process$1.env.DOTENV_CONFIG_ENCODING;
}
if (process$1.env.DOTENV_CONFIG_PATH != null) {
  options.path = process$1.env.DOTENV_CONFIG_PATH;
}
if (process$1.env.DOTENV_CONFIG_QUIET != null) {
  options.quiet = process$1.env.DOTENV_CONFIG_QUIET;
}
if (process$1.env.DOTENV_CONFIG_DEBUG != null) {
  options.debug = process$1.env.DOTENV_CONFIG_DEBUG;
}
if (process$1.env.DOTENV_CONFIG_OVERRIDE != null) {
  options.override = process$1.env.DOTENV_CONFIG_OVERRIDE;
}
if (process$1.env.DOTENV_CONFIG_DOTENV_KEY != null) {
  options.DOTENV_KEY = process$1.env.DOTENV_CONFIG_DOTENV_KEY;
}
var envOptions = options;
const re$2 = /^dotenv_config_(encoding|path|quiet|debug|override|DOTENV_KEY)=(.+)$/;
var cliOptions = function optionMatcher(args) {
  const options2 = args.reduce(function(acc, cur) {
    const matches = cur.match(re$2);
    if (matches) {
      acc[matches[1]] = matches[2];
    }
    return acc;
  }, {});
  if (!("quiet" in options2)) {
    options2.quiet = "true";
  }
  return options2;
};
(function() {
  mainExports.config(
    Object.assign(
      {},
      envOptions,
      cliOptions(process$1.argv)
    )
  );
})();
const GetClusterSnapshotDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetClusterSnapshot" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "cluster" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "active" } }, { "kind": "Field", "name": { "kind": "Name", "value": "validatorCount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "balance" } }, { "kind": "Field", "name": { "kind": "Name", "value": "index" } }, { "kind": "Field", "name": { "kind": "Name", "value": "networkFeeIndex" } }] } }] } }] };
const GetClusterDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetCluster" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "cluster" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "active" } }, { "kind": "Field", "name": { "kind": "Name", "value": "validatorCount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "balance" } }, { "kind": "Field", "name": { "kind": "Name", "value": "index" } }, { "kind": "Field", "name": { "kind": "Name", "value": "networkFeeIndex" } }, { "kind": "Field", "name": { "kind": "Name", "value": "operatorIds" } }] } }] } }] };
const GetClustersDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetClusters" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "owner" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "clusters" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "where" }, "value": { "kind": "ObjectValue", "fields": [{ "kind": "ObjectField", "name": { "kind": "Name", "value": "owner" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "owner" } } }] } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "active" } }, { "kind": "Field", "name": { "kind": "Name", "value": "validatorCount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "balance" } }, { "kind": "Field", "name": { "kind": "Name", "value": "index" } }, { "kind": "Field", "name": { "kind": "Name", "value": "networkFeeIndex" } }, { "kind": "Field", "name": { "kind": "Name", "value": "operatorIds" } }] } }] } }] };
const GetOwnerNonceDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetOwnerNonce" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "owner" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "account" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "owner" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "nonce" } }] } }] } }] };
const GetOwnerNonceByBlockDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetOwnerNonceByBlock" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "owner" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "block" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Int" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "account" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "owner" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "block" }, "value": { "kind": "ObjectValue", "fields": [{ "kind": "ObjectField", "name": { "kind": "Name", "value": "number" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "block" } } }] } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "nonce" } }] } }] } }] };
const GetOperatorDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetOperator" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "operator" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "publicKey" } }, { "kind": "Field", "name": { "kind": "Name", "value": "validatorCount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "isPrivate" } }, { "kind": "Field", "name": { "kind": "Name", "value": "whitelistedContract" } }, { "kind": "Field", "name": { "kind": "Name", "value": "whitelisted" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }] } }] } }] } }] };
const GetOperatorsDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetOperators" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "operatorIds" } }, "type": { "kind": "NonNullType", "type": { "kind": "ListType", "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "operators" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "where" }, "value": { "kind": "ObjectValue", "fields": [{ "kind": "ObjectField", "name": { "kind": "Name", "value": "id_in" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "operatorIds" } } }] } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "publicKey" } }, { "kind": "Field", "name": { "kind": "Name", "value": "validatorCount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "isPrivate" } }, { "kind": "Field", "name": { "kind": "Name", "value": "whitelistedContract" } }, { "kind": "Field", "name": { "kind": "Name", "value": "whitelisted" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }] } }] } }] } }] };
const GetValidatorsDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetValidators" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "ids" } }, "type": { "kind": "NonNullType", "type": { "kind": "ListType", "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Bytes" } } } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "validators" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "where" }, "value": { "kind": "ObjectValue", "fields": [{ "kind": "ObjectField", "name": { "kind": "Name", "value": "id_in" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "ids" } } }] } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }] } }] } }] };
const GetValidatorDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetValidator" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "validator" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }] } }] } }] };
const GetClusterBalanceDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetClusterBalance" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "clusterId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "daoAddress" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "operatorIds" } }, "type": { "kind": "NonNullType", "type": { "kind": "ListType", "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "_meta" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "block" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "number" } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "daovalues" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "daoAddress" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "networkFee" } }, { "kind": "Field", "name": { "kind": "Name", "value": "networkFeeIndex" } }, { "kind": "Field", "name": { "kind": "Name", "value": "networkFeeIndexBlockNumber" } }, { "kind": "Field", "name": { "kind": "Name", "value": "liquidationThreshold" } }, { "kind": "Field", "name": { "kind": "Name", "value": "minimumLiquidationCollateral" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "operators" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "where" }, "value": { "kind": "ObjectValue", "fields": [{ "kind": "ObjectField", "name": { "kind": "Name", "value": "id_in" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "operatorIds" } } }] } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "fee" } }, { "kind": "Field", "name": { "kind": "Name", "value": "feeIndex" } }, { "kind": "Field", "name": { "kind": "Name", "value": "feeIndexBlockNumber" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "cluster" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "clusterId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "validatorCount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "networkFeeIndex" } }, { "kind": "Field", "name": { "kind": "Name", "value": "index" } }, { "kind": "Field", "name": { "kind": "Name", "value": "balance" } }] } }] } }] };
const getOwnerNonce = (client, args) => {
  const document = typeof args.block === "number" ? GetOwnerNonceByBlockDocument : GetOwnerNonceDocument;
  return client.request(document, args).then((r) => r.account?.nonce || "0").catch(() => "0");
};
const getClusterSnapshot = (client, args) => client.request(GetClusterSnapshotDocument, args).then((res) => res.cluster);
const getCluster = (client, args) => client.request(GetClusterDocument, args).then((res) => res.cluster);
const getClusters = (client, args) => client.request(GetClustersDocument, args).then((res) => res.clusters);
const getOperator = (client, args) => client.request(GetOperatorDocument, args).then((res) => {
  if (!res.operator) return null;
  return {
    ...res.operator,
    publicKey: decodeOperatorPublicKey(res.operator.publicKey),
    whitelisted: res.operator.whitelisted.map((v) => v.id)
  };
});
const getOperators = (client, args) => client.request(GetOperatorsDocument, args).then(
  (res) => res.operators.map((o) => ({
    ...o,
    publicKey: decodeOperatorPublicKey(o.publicKey),
    whitelisted: o.whitelisted.map((v) => v.id)
  }))
);
const getValidators = (client, args) => client.request(GetValidatorsDocument, args).then((res) => res.validators);
const getValidator = (client, args) => client.request(GetValidatorDocument, args).then((res) => res.validator);
const getClusterBalance$1 = (client, args) => client.request(GetClusterBalanceDocument, args);
const getQueries = (client) => ({
  getOwnerNonce: getOwnerNonce.bind(null, client),
  getClusterSnapshot: getClusterSnapshot.bind(null, client),
  getCluster: getCluster.bind(null, client),
  getClusters: getClusters.bind(null, client),
  getOperator: getOperator.bind(null, client),
  getOperators: getOperators.bind(null, client),
  getValidators: getValidators.bind(null, client),
  getValidator: getValidator.bind(null, client),
  getClusterBalance: getClusterBalance$1.bind(null, client)
});
const MainnetV4GetterABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address"
      }
    ],
    name: "AddressIsWhitelistingContract",
    type: "error"
  },
  {
    inputs: [],
    name: "ApprovalNotWithinTimeframe",
    type: "error"
  },
  {
    inputs: [],
    name: "CallerNotOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "CallerNotOwnerWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "CallerNotWhitelisted",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "CallerNotWhitelistedWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "ClusterAlreadyEnabled",
    type: "error"
  },
  {
    inputs: [],
    name: "ClusterDoesNotExists",
    type: "error"
  },
  {
    inputs: [],
    name: "ClusterIsLiquidated",
    type: "error"
  },
  {
    inputs: [],
    name: "ClusterNotLiquidatable",
    type: "error"
  },
  {
    inputs: [],
    name: "EmptyPublicKeysList",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "ExceedValidatorLimit",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "ExceedValidatorLimitWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "FeeExceedsIncreaseLimit",
    type: "error"
  },
  {
    inputs: [],
    name: "FeeIncreaseNotAllowed",
    type: "error"
  },
  {
    inputs: [],
    name: "FeeTooHigh",
    type: "error"
  },
  {
    inputs: [],
    name: "FeeTooLow",
    type: "error"
  },
  {
    inputs: [],
    name: "IncorrectClusterState",
    type: "error"
  },
  {
    inputs: [],
    name: "IncorrectValidatorState",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      }
    ],
    name: "IncorrectValidatorStateWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "InsufficientBalance",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidContractAddress",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidOperatorIdsLength",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidPublicKeyLength",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidWhitelistAddressesLength",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address"
      }
    ],
    name: "InvalidWhitelistingContract",
    type: "error"
  },
  {
    inputs: [],
    name: "MaxValueExceeded",
    type: "error"
  },
  {
    inputs: [],
    name: "NewBlockPeriodIsBelowMinimum",
    type: "error"
  },
  {
    inputs: [],
    name: "NoFeeDeclared",
    type: "error"
  },
  {
    inputs: [],
    name: "NotAuthorized",
    type: "error"
  },
  {
    inputs: [],
    name: "OperatorAlreadyExists",
    type: "error"
  },
  {
    inputs: [],
    name: "OperatorDoesNotExist",
    type: "error"
  },
  {
    inputs: [],
    name: "OperatorsListNotUnique",
    type: "error"
  },
  {
    inputs: [],
    name: "PublicKeysSharesLengthMismatch",
    type: "error"
  },
  {
    inputs: [],
    name: "SameFeeChangeNotAllowed",
    type: "error"
  },
  {
    inputs: [],
    name: "TargetModuleDoesNotExist",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "moduleId",
        type: "uint8"
      }
    ],
    name: "TargetModuleDoesNotExistWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "TokenTransferFailed",
    type: "error"
  },
  {
    inputs: [],
    name: "UnsortedOperatorsList",
    type: "error"
  },
  {
    inputs: [],
    name: "ValidatorAlreadyExists",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      }
    ],
    name: "ValidatorAlreadyExistsWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "ValidatorDoesNotExist",
    type: "error"
  },
  {
    inputs: [],
    name: "ZeroAddressNotAllowed",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "AdminChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address"
      }
    ],
    name: "BeaconUpgraded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferStarted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "Upgraded",
    type: "event"
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "clusterOwner",
        type: "address"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "clusterOwner",
        type: "address"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "getBurnRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getLiquidationThresholdPeriod",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getMaximumOperatorFee",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getMinimumLiquidationCollateral",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getNetworkEarnings",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getNetworkFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getNetworkValidatorsCount",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "getOperatorById",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "bool",
        name: "",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "getOperatorDeclaredFee",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "id",
        type: "uint64"
      }
    ],
    name: "getOperatorEarnings",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "getOperatorFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getOperatorFeeIncreaseLimit",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getOperatorFeePeriods",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "clusterOwner",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      }
    ],
    name: "getValidator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getValidatorsPerOperatorLimit",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getVersion",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        internalType: "address",
        name: "whitelistedAddress",
        type: "address"
      }
    ],
    name: "getWhitelistedOperators",
    outputs: [
      {
        internalType: "uint64[]",
        name: "whitelistedOperatorIds",
        type: "uint64[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract ISSVViews",
        name: "ssvNetwork_",
        type: "address"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addressToCheck",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "operatorId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "whitelistingContract",
        type: "address"
      }
    ],
    name: "isAddressWhitelistedInWhitelistingContract",
    outputs: [
      {
        internalType: "bool",
        name: "isWhitelisted",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "clusterOwner",
        type: "address"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "isLiquidatable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "clusterOwner",
        type: "address"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "isLiquidated",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address"
      }
    ],
    name: "isWhitelistingContract",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "ssvNetwork",
    outputs: [
      {
        internalType: "contract ISSVViews",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      }
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  }
];
const MainnetV4SetterABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address"
      }
    ],
    name: "AddressIsWhitelistingContract",
    type: "error"
  },
  {
    inputs: [],
    name: "ApprovalNotWithinTimeframe",
    type: "error"
  },
  {
    inputs: [],
    name: "CallerNotOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "CallerNotOwnerWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "CallerNotWhitelisted",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "CallerNotWhitelistedWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "ClusterAlreadyEnabled",
    type: "error"
  },
  {
    inputs: [],
    name: "ClusterDoesNotExists",
    type: "error"
  },
  {
    inputs: [],
    name: "ClusterIsLiquidated",
    type: "error"
  },
  {
    inputs: [],
    name: "ClusterNotLiquidatable",
    type: "error"
  },
  {
    inputs: [],
    name: "EmptyPublicKeysList",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "ExceedValidatorLimit",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "ExceedValidatorLimitWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "FeeExceedsIncreaseLimit",
    type: "error"
  },
  {
    inputs: [],
    name: "FeeIncreaseNotAllowed",
    type: "error"
  },
  {
    inputs: [],
    name: "FeeTooHigh",
    type: "error"
  },
  {
    inputs: [],
    name: "FeeTooLow",
    type: "error"
  },
  {
    inputs: [],
    name: "IncorrectClusterState",
    type: "error"
  },
  {
    inputs: [],
    name: "IncorrectValidatorState",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      }
    ],
    name: "IncorrectValidatorStateWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "InsufficientBalance",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidContractAddress",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidOperatorIdsLength",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidPublicKeyLength",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidWhitelistAddressesLength",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address"
      }
    ],
    name: "InvalidWhitelistingContract",
    type: "error"
  },
  {
    inputs: [],
    name: "MaxValueExceeded",
    type: "error"
  },
  {
    inputs: [],
    name: "NewBlockPeriodIsBelowMinimum",
    type: "error"
  },
  {
    inputs: [],
    name: "NoFeeDeclared",
    type: "error"
  },
  {
    inputs: [],
    name: "NotAuthorized",
    type: "error"
  },
  {
    inputs: [],
    name: "OperatorAlreadyExists",
    type: "error"
  },
  {
    inputs: [],
    name: "OperatorDoesNotExist",
    type: "error"
  },
  {
    inputs: [],
    name: "OperatorsListNotUnique",
    type: "error"
  },
  {
    inputs: [],
    name: "PublicKeysSharesLengthMismatch",
    type: "error"
  },
  {
    inputs: [],
    name: "SameFeeChangeNotAllowed",
    type: "error"
  },
  {
    inputs: [],
    name: "TargetModuleDoesNotExist",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "moduleId",
        type: "uint8"
      }
    ],
    name: "TargetModuleDoesNotExistWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "TokenTransferFailed",
    type: "error"
  },
  {
    inputs: [],
    name: "UnsortedOperatorsList",
    type: "error"
  },
  {
    inputs: [],
    name: "ValidatorAlreadyExists",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      }
    ],
    name: "ValidatorAlreadyExistsWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "ValidatorDoesNotExist",
    type: "error"
  },
  {
    inputs: [],
    name: "ZeroAddressNotAllowed",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "AdminChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address"
      }
    ],
    name: "BeaconUpgraded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        indexed: false,
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "ClusterDeposited",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        indexed: false,
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "ClusterLiquidated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        indexed: false,
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "ClusterReactivated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        indexed: false,
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "ClusterWithdrawn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "value",
        type: "uint64"
      }
    ],
    name: "DeclareOperatorFeePeriodUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "value",
        type: "uint64"
      }
    ],
    name: "ExecuteOperatorFeePeriodUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipientAddress",
        type: "address"
      }
    ],
    name: "FeeRecipientAddressUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "value",
        type: "uint64"
      }
    ],
    name: "LiquidationThresholdPeriodUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "MinimumLiquidationCollateralUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "enum SSVModules",
        name: "moduleId",
        type: "uint8"
      },
      {
        indexed: false,
        internalType: "address",
        name: "moduleAddress",
        type: "address"
      }
    ],
    name: "ModuleUpgraded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address"
      }
    ],
    name: "NetworkEarningsWithdrawn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldFee",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newFee",
        type: "uint256"
      }
    ],
    name: "NetworkFeeUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256"
      }
    ],
    name: "OperatorAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "OperatorFeeDeclarationCancelled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256"
      }
    ],
    name: "OperatorFeeDeclared",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256"
      }
    ],
    name: "OperatorFeeExecuted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "value",
        type: "uint64"
      }
    ],
    name: "OperatorFeeIncreaseLimitUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "maxFee",
        type: "uint64"
      }
    ],
    name: "OperatorMaximumFeeUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "whitelistAddresses",
        type: "address[]"
      }
    ],
    name: "OperatorMultipleWhitelistRemoved",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "whitelistAddresses",
        type: "address[]"
      }
    ],
    name: "OperatorMultipleWhitelistUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "toPrivate",
        type: "bool"
      }
    ],
    name: "OperatorPrivacyStatusUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "OperatorRemoved",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "address",
        name: "whitelisted",
        type: "address"
      }
    ],
    name: "OperatorWhitelistUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        indexed: false,
        internalType: "address",
        name: "whitelistingContract",
        type: "address"
      }
    ],
    name: "OperatorWhitelistingContractUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "OperatorWithdrawn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferStarted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "Upgraded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "shares",
        type: "bytes"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        indexed: false,
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "ValidatorAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      }
    ],
    name: "ValidatorExited",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        indexed: false,
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "ValidatorRemoved",
    type: "event"
  },
  {
    stateMutability: "nonpayable",
    type: "fallback"
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "publicKeys",
        type: "bytes[]"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      }
    ],
    name: "bulkExitValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "publicKeys",
        type: "bytes[]"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        internalType: "bytes[]",
        name: "sharesData",
        type: "bytes[]"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "bulkRegisterValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "publicKeys",
        type: "bytes[]"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "bulkRemoveValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "cancelDeclaredOperatorFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256"
      }
    ],
    name: "declareOperatorFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "clusterOwner",
        type: "address"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "executeOperatorFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      }
    ],
    name: "exitValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "getVersion",
    outputs: [
      {
        internalType: "string",
        name: "version",
        type: "string"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token_",
        type: "address"
      },
      {
        internalType: "contract ISSVOperators",
        name: "ssvOperators_",
        type: "address"
      },
      {
        internalType: "contract ISSVClusters",
        name: "ssvClusters_",
        type: "address"
      },
      {
        internalType: "contract ISSVDAO",
        name: "ssvDAO_",
        type: "address"
      },
      {
        internalType: "contract ISSVViews",
        name: "ssvViews_",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "minimumBlocksBeforeLiquidation_",
        type: "uint64"
      },
      {
        internalType: "uint256",
        name: "minimumLiquidationCollateral_",
        type: "uint256"
      },
      {
        internalType: "uint32",
        name: "validatorsPerOperatorLimit_",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "declareOperatorFeePeriod_",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "executeOperatorFeePeriod_",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "operatorMaxFeeIncrease_",
        type: "uint64"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "clusterOwner",
        type: "address"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "liquidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "reactivate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256"
      }
    ],
    name: "reduceOperatorFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "setPrivate",
        type: "bool"
      }
    ],
    name: "registerOperator",
    outputs: [
      {
        internalType: "uint64",
        name: "id",
        type: "uint64"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        internalType: "bytes",
        name: "sharesData",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "registerValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "removeOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      }
    ],
    name: "removeOperatorsWhitelistingContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        internalType: "address[]",
        name: "whitelistAddresses",
        type: "address[]"
      }
    ],
    name: "removeOperatorsWhitelists",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "removeValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipientAddress",
        type: "address"
      }
    ],
    name: "setFeeRecipientAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      }
    ],
    name: "setOperatorsPrivateUnchecked",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      }
    ],
    name: "setOperatorsPublicUnchecked",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        internalType: "contract ISSVWhitelistingContract",
        name: "whitelistingContract",
        type: "address"
      }
    ],
    name: "setOperatorsWhitelistingContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        internalType: "address[]",
        name: "whitelistAddresses",
        type: "address[]"
      }
    ],
    name: "setOperatorsWhitelists",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "timeInSeconds",
        type: "uint64"
      }
    ],
    name: "updateDeclareOperatorFeePeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "timeInSeconds",
        type: "uint64"
      }
    ],
    name: "updateExecuteOperatorFeePeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "blocks",
        type: "uint64"
      }
    ],
    name: "updateLiquidationThresholdPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "maxFee",
        type: "uint64"
      }
    ],
    name: "updateMaximumOperatorFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "updateMinimumLiquidationCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "enum SSVModules",
        name: "moduleId",
        type: "uint8"
      },
      {
        internalType: "address",
        name: "moduleAddress",
        type: "address"
      }
    ],
    name: "updateModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256"
      }
    ],
    name: "updateNetworkFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "percentage",
        type: "uint64"
      }
    ],
    name: "updateOperatorFeeIncreaseLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      }
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "withdrawAllOperatorEarnings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "withdrawNetworkEarnings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "withdrawOperatorEarnings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
const TokenABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
      }
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
      }
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
const HoleskyV4GetterABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address"
      }
    ],
    name: "AddressIsWhitelistingContract",
    type: "error"
  },
  {
    inputs: [],
    name: "ApprovalNotWithinTimeframe",
    type: "error"
  },
  {
    inputs: [],
    name: "CallerNotOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "CallerNotOwnerWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "CallerNotWhitelisted",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "CallerNotWhitelistedWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "ClusterAlreadyEnabled",
    type: "error"
  },
  {
    inputs: [],
    name: "ClusterDoesNotExists",
    type: "error"
  },
  {
    inputs: [],
    name: "ClusterIsLiquidated",
    type: "error"
  },
  {
    inputs: [],
    name: "ClusterNotLiquidatable",
    type: "error"
  },
  {
    inputs: [],
    name: "EmptyPublicKeysList",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "ExceedValidatorLimit",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "ExceedValidatorLimitWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "FeeExceedsIncreaseLimit",
    type: "error"
  },
  {
    inputs: [],
    name: "FeeIncreaseNotAllowed",
    type: "error"
  },
  {
    inputs: [],
    name: "FeeTooHigh",
    type: "error"
  },
  {
    inputs: [],
    name: "FeeTooLow",
    type: "error"
  },
  {
    inputs: [],
    name: "IncorrectClusterState",
    type: "error"
  },
  {
    inputs: [],
    name: "IncorrectValidatorState",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      }
    ],
    name: "IncorrectValidatorStateWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "InsufficientBalance",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidContractAddress",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidOperatorIdsLength",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidPublicKeyLength",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidWhitelistAddressesLength",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address"
      }
    ],
    name: "InvalidWhitelistingContract",
    type: "error"
  },
  {
    inputs: [],
    name: "MaxValueExceeded",
    type: "error"
  },
  {
    inputs: [],
    name: "NewBlockPeriodIsBelowMinimum",
    type: "error"
  },
  {
    inputs: [],
    name: "NoFeeDeclared",
    type: "error"
  },
  {
    inputs: [],
    name: "NotAuthorized",
    type: "error"
  },
  {
    inputs: [],
    name: "OperatorAlreadyExists",
    type: "error"
  },
  {
    inputs: [],
    name: "OperatorDoesNotExist",
    type: "error"
  },
  {
    inputs: [],
    name: "OperatorsListNotUnique",
    type: "error"
  },
  {
    inputs: [],
    name: "PublicKeysSharesLengthMismatch",
    type: "error"
  },
  {
    inputs: [],
    name: "SameFeeChangeNotAllowed",
    type: "error"
  },
  {
    inputs: [],
    name: "TargetModuleDoesNotExist",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "moduleId",
        type: "uint8"
      }
    ],
    name: "TargetModuleDoesNotExistWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "TokenTransferFailed",
    type: "error"
  },
  {
    inputs: [],
    name: "UnsortedOperatorsList",
    type: "error"
  },
  {
    inputs: [],
    name: "ValidatorAlreadyExists",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      }
    ],
    name: "ValidatorAlreadyExistsWithData",
    type: "error"
  },
  {
    inputs: [],
    name: "ValidatorDoesNotExist",
    type: "error"
  },
  {
    inputs: [],
    name: "ZeroAddressNotAllowed",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "AdminChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address"
      }
    ],
    name: "BeaconUpgraded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferStarted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "Upgraded",
    type: "event"
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "clusterOwner",
        type: "address"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "clusterOwner",
        type: "address"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "getBurnRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getLiquidationThresholdPeriod",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getMaximumOperatorFee",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getMinimumLiquidationCollateral",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getNetworkEarnings",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getNetworkFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getNetworkValidatorsCount",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "getOperatorById",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "bool",
        name: "",
        type: "bool"
      },
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "getOperatorDeclaredFee",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "id",
        type: "uint64"
      }
    ],
    name: "getOperatorEarnings",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "getOperatorFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getOperatorFeeIncreaseLimit",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getOperatorFeePeriods",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "clusterOwner",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "publicKey",
        type: "bytes"
      }
    ],
    name: "getValidator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getValidatorsPerOperatorLimit",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getVersion",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        internalType: "address",
        name: "whitelistedAddress",
        type: "address"
      }
    ],
    name: "getWhitelistedOperators",
    outputs: [
      {
        internalType: "uint64[]",
        name: "whitelistedOperatorIds",
        type: "uint64[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract ISSVViews",
        name: "ssvNetwork_",
        type: "address"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addressToCheck",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "operatorId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "whitelistingContract",
        type: "address"
      }
    ],
    name: "isAddressWhitelistedInWhitelistingContract",
    outputs: [
      {
        internalType: "bool",
        name: "isWhitelisted",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "clusterOwner",
        type: "address"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "isLiquidatable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "clusterOwner",
        type: "address"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "networkFeeIndex",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "index",
            type: "uint64"
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVNetworkCore.Cluster",
        name: "cluster",
        type: "tuple"
      }
    ],
    name: "isLiquidated",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address"
      }
    ],
    name: "isWhitelistingContract",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "ssvNetwork",
    outputs: [
      {
        internalType: "contract ISSVViews",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      }
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  }
];
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
function SetCache(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache, key) {
  return cache.has(key);
}
var COMPARE_PARTIAL_FLAG$3 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
function mapToArray(map) {
  var index = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
function setToArray(set) {
  var index = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$2 = 1, COMPARE_UNORDERED_FLAG = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq$1(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == other + "";
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var COMPARE_PARTIAL_FLAG$1 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var COMPARE_PARTIAL_FLAG = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike$1(value) && !isObjectLike$1(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
function isEqual(value, other) {
  return baseIsEqual(value, other);
}
const paramsToArray = ({
  params,
  abiFunction
}) => {
  return stringifyBigints(
    abiFunction.inputs.reduce(
      (acc, param) => {
        if (param.name && !isUndefined(params[param.name])) {
          return [...acc, params[param.name]];
        } else {
          console.error(`Missing argument for ${param}`);
        }
        return acc;
      },
      []
    )
  );
};
function normalize(strArray) {
  const resultArray = [];
  if (strArray.length === 0) {
    return "";
  }
  strArray = strArray.filter((part) => part !== "");
  if (typeof strArray[0] !== "string") {
    throw new TypeError("Url must be a string. Received " + strArray[0]);
  }
  if (strArray[0].match(/^[^/:]+:\/*$/) && strArray.length > 1) {
    strArray[0] = strArray.shift() + strArray[0];
  }
  if (strArray[0] === "/" && strArray.length > 1) {
    strArray[0] = strArray.shift() + strArray[0];
  }
  if (strArray[0].match(/^file:\/\/\//)) {
    strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, "$1:///");
  } else if (!strArray[0].match(/^\[.*:.*\]/)) {
    strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, "$1://");
  }
  for (let i = 0; i < strArray.length; i++) {
    let component = strArray[i];
    if (typeof component !== "string") {
      throw new TypeError("Url must be a string. Received " + component);
    }
    if (i > 0) {
      component = component.replace(/^[\/]+/, "");
    }
    if (i < strArray.length - 1) {
      component = component.replace(/[\/]+$/, "");
    } else {
      component = component.replace(/[\/]+$/, "/");
    }
    if (component === "") {
      continue;
    }
    resultArray.push(component);
  }
  let str = "";
  for (let i = 0; i < resultArray.length; i++) {
    const part = resultArray[i];
    if (i === 0) {
      str += part;
      continue;
    }
    const prevPart = resultArray[i - 1];
    if (prevPart && prevPart.endsWith("?") || prevPart.endsWith("#")) {
      str += part;
      continue;
    }
    str += "/" + part;
  }
  str = str.replace(/\/(\?|&|#[^!])/g, "$1");
  const [beforeHash, afterHash] = str.split("#");
  const parts = beforeHash.split(/(?:\?|&)+/).filter(Boolean);
  str = parts.shift() + (parts.length > 0 ? "?" : "") + parts.join("&") + (afterHash && afterHash.length > 0 ? "#" + afterHash : "");
  return str;
}
function urlJoin(...args) {
  const parts = Array.from(Array.isArray(args[0]) ? args[0] : args);
  return normalize(parts);
}
const ABIS = [TokenABI, MainnetV4SetterABI, HoleskyV4GetterABI];
const createWriter = ({
  abi,
  publicClient,
  walletClient,
  contractAddress
}) => {
  const writeFnsMainnet = abi.filter(
    (item) => item.type === "function" && (item.stateMutability === "nonpayable" || item.stateMutability === "payable")
  );
  return Object.fromEntries(
    writeFnsMainnet.map((fn) => {
      const simulate = async (options2) => publicClient.simulateContract({
        ...options2,
        address: contractAddress,
        abi,
        functionName: fn.name,
        args: paramsToArray({ params: options2.args, abiFunction: fn }),
        account: walletClient.account
      });
      const getTransactionData = (params) => {
        return encodeFunctionData({
          abi,
          functionName: fn.name,
          args: paramsToArray({ params, abiFunction: fn })
        });
      };
      const func = async (options2) => {
        const { request } = await simulate(options2);
        const hash = await walletClient.writeContract(request);
        return {
          hash,
          wait: () => publicClient.waitForTransactionReceipt({ hash }).then((receipt) => ({
            ...receipt,
            events: receipt.logs.reduce(
              (acc, log) => {
                try {
                  const event = decodeEventLog({
                    abi,
                    data: log.data,
                    topics: log.topics
                  });
                  acc.push(event);
                } catch {
                  for (const eventAbi of ABIS) {
                    tryCatch$1(() => {
                      const event = decodeEventLog({
                        abi: eventAbi,
                        data: log.data,
                        topics: log.topics
                      });
                      acc.push(event);
                    });
                  }
                }
                return acc;
              },
              []
            )
          }))
        };
      };
      func.simulate = simulate;
      func.getTransactionData = getTransactionData;
      return [fn.name, func];
    })
  );
};
const createReader = ({
  abi,
  publicClient,
  contractAddress
}) => {
  const readFnsMainnet = abi.filter(
    (item) => item.type === "function" && (item.stateMutability === "view" || item.stateMutability === "pure")
  );
  return Object.fromEntries(
    readFnsMainnet.map((fn) => {
      const func = async (args) => {
        return await publicClient.readContract({
          abi,
          address: contractAddress,
          functionName: fn.name,
          args: paramsToArray({ params: args, abiFunction: fn })
        });
      };
      return [fn.name, func];
    })
  );
};
const checkOperatorDKGEnabled = (baseApi, dkgAddresses) => {
  return fetch(urlJoin(baseApi, `/operators/dkg_health_check`), {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      dkgAddresses
    })
  }).then(
    (res) => res.json()
  );
};
const getSSVAPI = (endpoint) => {
  return {
    checkOperatorDKGEnabled: checkOperatorDKGEnabled.bind(null, endpoint)
  };
};
const createQueries = (graphqlClient) => {
  return getQueries(graphqlClient);
};
const createSSVAPI = (endpoint) => {
  return getSSVAPI(endpoint);
};
class ClientError extends Error {
  response;
  request;
  constructor(response, request) {
    const message = `${ClientError.extractMessage(response)}: ${JSON.stringify({
      response,
      request
    })}`;
    super(message);
    Object.setPrototypeOf(this, ClientError.prototype);
    this.response = response;
    this.request = request;
    if (typeof Error.captureStackTrace === `function`) {
      Error.captureStackTrace(this, ClientError);
    }
  }
  static extractMessage(response) {
    return response.errors?.[0]?.message ?? `GraphQL Error (Code: ${String(response.status)})`;
  }
}
const uppercase = (str) => str.toUpperCase();
const callOrIdentity = (value) => {
  return typeof value === `function` ? value() : value;
};
const zip = (a, b) => a.map((k, i) => [k, b[i]]);
const HeadersInitToPlainObject = (headers) => {
  let oHeaders = {};
  if (headers instanceof Headers) {
    oHeaders = HeadersInstanceToPlainObject(headers);
  } else if (Array.isArray(headers)) {
    headers.forEach(([name, value]) => {
      if (name && value !== void 0) {
        oHeaders[name] = value;
      }
    });
  } else if (headers) {
    oHeaders = headers;
  }
  return oHeaders;
};
const HeadersInstanceToPlainObject = (headers) => {
  const o = {};
  headers.forEach((v, k) => {
    o[k] = v;
  });
  return o;
};
const tryCatch = (fn) => {
  try {
    const result = fn();
    if (isPromiseLikeValue(result)) {
      return result.catch((error) => {
        return errorFromMaybeError(error);
      });
    }
    return result;
  } catch (error) {
    return errorFromMaybeError(error);
  }
};
const errorFromMaybeError = (maybeError) => {
  if (maybeError instanceof Error)
    return maybeError;
  return new Error(String(maybeError));
};
const isPromiseLikeValue = (value) => {
  return typeof value === `object` && value !== null && `then` in value && typeof value.then === `function` && `catch` in value && typeof value.catch === `function` && `finally` in value && typeof value.finally === `function`;
};
const casesExhausted = (value) => {
  throw new Error(`Unhandled case: ${String(value)}`);
};
const isPlainObject = (value) => {
  return typeof value === `object` && value !== null && !Array.isArray(value);
};
const parseBatchRequestArgs = (documentsOrOptions, requestHeaders) => {
  return documentsOrOptions.documents ? documentsOrOptions : {
    documents: documentsOrOptions,
    requestHeaders,
    signal: void 0
  };
};
const parseRawRequestArgs = (queryOrOptions, variables, requestHeaders) => {
  return queryOrOptions.query ? queryOrOptions : {
    query: queryOrOptions,
    variables,
    requestHeaders,
    signal: void 0
  };
};
function devAssert(condition, message) {
  const booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(message);
  }
}
function isObjectLike(value) {
  return typeof value == "object" && value !== null;
}
function invariant(condition, message) {
  const booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(
      "Unexpected invariant triggered."
    );
  }
}
const LineRegExp = /\r\n|[\n\r]/g;
function getLocation(source, position) {
  let lastLineStart = 0;
  let line = 1;
  for (const match of source.body.matchAll(LineRegExp)) {
    typeof match.index === "number" || invariant(false);
    if (match.index >= position) {
      break;
    }
    lastLineStart = match.index + match[0].length;
    line += 1;
  }
  return {
    line,
    column: position + 1 - lastLineStart
  };
}
function printLocation(location) {
  return printSourceLocation(
    location.source,
    getLocation(location.source, location.start)
  );
}
function printSourceLocation(source, sourceLocation) {
  const firstLineColumnOffset = source.locationOffset.column - 1;
  const body = "".padStart(firstLineColumnOffset) + source.body;
  const lineIndex = sourceLocation.line - 1;
  const lineOffset = source.locationOffset.line - 1;
  const lineNum = sourceLocation.line + lineOffset;
  const columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  const columnNum = sourceLocation.column + columnOffset;
  const locationStr = `${source.name}:${lineNum}:${columnNum}
`;
  const lines = body.split(/\r\n|[\n\r]/g);
  const locationLine = lines[lineIndex];
  if (locationLine.length > 120) {
    const subLineIndex = Math.floor(columnNum / 80);
    const subLineColumnNum = columnNum % 80;
    const subLines = [];
    for (let i = 0; i < locationLine.length; i += 80) {
      subLines.push(locationLine.slice(i, i + 80));
    }
    return locationStr + printPrefixedLines([
      [`${lineNum} |`, subLines[0]],
      ...subLines.slice(1, subLineIndex + 1).map((subLine) => ["|", subLine]),
      ["|", "^".padStart(subLineColumnNum)],
      ["|", subLines[subLineIndex + 1]]
    ]);
  }
  return locationStr + printPrefixedLines([
    // Lines specified like this: ["prefix", "string"],
    [`${lineNum - 1} |`, lines[lineIndex - 1]],
    [`${lineNum} |`, locationLine],
    ["|", "^".padStart(columnNum)],
    [`${lineNum + 1} |`, lines[lineIndex + 1]]
  ]);
}
function printPrefixedLines(lines) {
  const existingLines = lines.filter(([_, line]) => line !== void 0);
  const padLen = Math.max(...existingLines.map(([prefix]) => prefix.length));
  return existingLines.map(([prefix, line]) => prefix.padStart(padLen) + (line ? " " + line : "")).join("\n");
}
function toNormalizedOptions(args) {
  const firstArg = args[0];
  if (firstArg == null || "kind" in firstArg || "length" in firstArg) {
    return {
      nodes: firstArg,
      source: args[1],
      positions: args[2],
      path: args[3],
      originalError: args[4],
      extensions: args[5]
    };
  }
  return firstArg;
}
class GraphQLError extends Error {
  /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */
  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */
  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */
  /**
   * The original error thrown from a field resolver during execution.
   */
  /**
   * Extension fields to add to the formatted error.
   */
  /**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */
  constructor(message, ...rawArgs) {
    var _this$nodes, _nodeLocations$, _ref;
    const { nodes, source, positions, path: path2, originalError, extensions } = toNormalizedOptions(rawArgs);
    super(message);
    this.name = "GraphQLError";
    this.path = path2 !== null && path2 !== void 0 ? path2 : void 0;
    this.originalError = originalError !== null && originalError !== void 0 ? originalError : void 0;
    this.nodes = undefinedIfEmpty(
      Array.isArray(nodes) ? nodes : nodes ? [nodes] : void 0
    );
    const nodeLocations = undefinedIfEmpty(
      (_this$nodes = this.nodes) === null || _this$nodes === void 0 ? void 0 : _this$nodes.map((node) => node.loc).filter((loc) => loc != null)
    );
    this.source = source !== null && source !== void 0 ? source : nodeLocations === null || nodeLocations === void 0 ? void 0 : (_nodeLocations$ = nodeLocations[0]) === null || _nodeLocations$ === void 0 ? void 0 : _nodeLocations$.source;
    this.positions = positions !== null && positions !== void 0 ? positions : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc) => loc.start);
    this.locations = positions && source ? positions.map((pos) => getLocation(source, pos)) : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc) => getLocation(loc.source, loc.start));
    const originalExtensions = isObjectLike(
      originalError === null || originalError === void 0 ? void 0 : originalError.extensions
    ) ? originalError === null || originalError === void 0 ? void 0 : originalError.extensions : void 0;
    this.extensions = (_ref = extensions !== null && extensions !== void 0 ? extensions : originalExtensions) !== null && _ref !== void 0 ? _ref : /* @__PURE__ */ Object.create(null);
    Object.defineProperties(this, {
      message: {
        writable: true,
        enumerable: true
      },
      name: {
        enumerable: false
      },
      nodes: {
        enumerable: false
      },
      source: {
        enumerable: false
      },
      positions: {
        enumerable: false
      },
      originalError: {
        enumerable: false
      }
    });
    if (originalError !== null && originalError !== void 0 && originalError.stack) {
      Object.defineProperty(this, "stack", {
        value: originalError.stack,
        writable: true,
        configurable: true
      });
    } else if (Error.captureStackTrace) {
      Error.captureStackTrace(this, GraphQLError);
    } else {
      Object.defineProperty(this, "stack", {
        value: Error().stack,
        writable: true,
        configurable: true
      });
    }
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
  toString() {
    let output = this.message;
    if (this.nodes) {
      for (const node of this.nodes) {
        if (node.loc) {
          output += "\n\n" + printLocation(node.loc);
        }
      }
    } else if (this.source && this.locations) {
      for (const location of this.locations) {
        output += "\n\n" + printSourceLocation(this.source, location);
      }
    }
    return output;
  }
  toJSON() {
    const formattedError = {
      message: this.message
    };
    if (this.locations != null) {
      formattedError.locations = this.locations;
    }
    if (this.path != null) {
      formattedError.path = this.path;
    }
    if (this.extensions != null && Object.keys(this.extensions).length > 0) {
      formattedError.extensions = this.extensions;
    }
    return formattedError;
  }
}
function undefinedIfEmpty(array) {
  return array === void 0 || array.length === 0 ? void 0 : array;
}
function syntaxError(source, position, description) {
  return new GraphQLError(`Syntax Error: ${description}`, {
    source,
    positions: [position]
  });
}
class Location {
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The Token at which this Node begins.
   */
  /**
   * The Token at which this Node ends.
   */
  /**
   * The Source document the AST represents.
   */
  constructor(startToken, endToken, source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }
  get [Symbol.toStringTag]() {
    return "Location";
  }
  toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  }
}
class Token {
  /**
   * The kind of Token.
   */
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The 1-indexed line number on which this Token appears.
   */
  /**
   * The 1-indexed column number at which this Token begins.
   */
  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */
  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  constructor(kind, start, end, line, column, value) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
  get [Symbol.toStringTag]() {
    return "Token";
  }
  toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  }
}
const QueryDocumentKeys = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: [
    "name",
    "variableDefinitions",
    "directives",
    "selectionSet"
  ],
  VariableDefinition: ["variable", "type", "defaultValue", "directives"],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "name",
    // Note: fragment variable definitions are deprecated and will removed in v17.0.0
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: [
    "description",
    "name",
    "type",
    "defaultValue",
    "directives"
  ],
  InterfaceTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"]
};
const kindValues = new Set(Object.keys(QueryDocumentKeys));
function isNode(maybeNode) {
  const maybeKind = maybeNode === null || maybeNode === void 0 ? void 0 : maybeNode.kind;
  return typeof maybeKind === "string" && kindValues.has(maybeKind);
}
var OperationTypeNode;
(function(OperationTypeNode2) {
  OperationTypeNode2["QUERY"] = "query";
  OperationTypeNode2["MUTATION"] = "mutation";
  OperationTypeNode2["SUBSCRIPTION"] = "subscription";
})(OperationTypeNode || (OperationTypeNode = {}));
var DirectiveLocation;
(function(DirectiveLocation2) {
  DirectiveLocation2["QUERY"] = "QUERY";
  DirectiveLocation2["MUTATION"] = "MUTATION";
  DirectiveLocation2["SUBSCRIPTION"] = "SUBSCRIPTION";
  DirectiveLocation2["FIELD"] = "FIELD";
  DirectiveLocation2["FRAGMENT_DEFINITION"] = "FRAGMENT_DEFINITION";
  DirectiveLocation2["FRAGMENT_SPREAD"] = "FRAGMENT_SPREAD";
  DirectiveLocation2["INLINE_FRAGMENT"] = "INLINE_FRAGMENT";
  DirectiveLocation2["VARIABLE_DEFINITION"] = "VARIABLE_DEFINITION";
  DirectiveLocation2["SCHEMA"] = "SCHEMA";
  DirectiveLocation2["SCALAR"] = "SCALAR";
  DirectiveLocation2["OBJECT"] = "OBJECT";
  DirectiveLocation2["FIELD_DEFINITION"] = "FIELD_DEFINITION";
  DirectiveLocation2["ARGUMENT_DEFINITION"] = "ARGUMENT_DEFINITION";
  DirectiveLocation2["INTERFACE"] = "INTERFACE";
  DirectiveLocation2["UNION"] = "UNION";
  DirectiveLocation2["ENUM"] = "ENUM";
  DirectiveLocation2["ENUM_VALUE"] = "ENUM_VALUE";
  DirectiveLocation2["INPUT_OBJECT"] = "INPUT_OBJECT";
  DirectiveLocation2["INPUT_FIELD_DEFINITION"] = "INPUT_FIELD_DEFINITION";
})(DirectiveLocation || (DirectiveLocation = {}));
var Kind;
(function(Kind2) {
  Kind2["NAME"] = "Name";
  Kind2["DOCUMENT"] = "Document";
  Kind2["OPERATION_DEFINITION"] = "OperationDefinition";
  Kind2["VARIABLE_DEFINITION"] = "VariableDefinition";
  Kind2["SELECTION_SET"] = "SelectionSet";
  Kind2["FIELD"] = "Field";
  Kind2["ARGUMENT"] = "Argument";
  Kind2["FRAGMENT_SPREAD"] = "FragmentSpread";
  Kind2["INLINE_FRAGMENT"] = "InlineFragment";
  Kind2["FRAGMENT_DEFINITION"] = "FragmentDefinition";
  Kind2["VARIABLE"] = "Variable";
  Kind2["INT"] = "IntValue";
  Kind2["FLOAT"] = "FloatValue";
  Kind2["STRING"] = "StringValue";
  Kind2["BOOLEAN"] = "BooleanValue";
  Kind2["NULL"] = "NullValue";
  Kind2["ENUM"] = "EnumValue";
  Kind2["LIST"] = "ListValue";
  Kind2["OBJECT"] = "ObjectValue";
  Kind2["OBJECT_FIELD"] = "ObjectField";
  Kind2["DIRECTIVE"] = "Directive";
  Kind2["NAMED_TYPE"] = "NamedType";
  Kind2["LIST_TYPE"] = "ListType";
  Kind2["NON_NULL_TYPE"] = "NonNullType";
  Kind2["SCHEMA_DEFINITION"] = "SchemaDefinition";
  Kind2["OPERATION_TYPE_DEFINITION"] = "OperationTypeDefinition";
  Kind2["SCALAR_TYPE_DEFINITION"] = "ScalarTypeDefinition";
  Kind2["OBJECT_TYPE_DEFINITION"] = "ObjectTypeDefinition";
  Kind2["FIELD_DEFINITION"] = "FieldDefinition";
  Kind2["INPUT_VALUE_DEFINITION"] = "InputValueDefinition";
  Kind2["INTERFACE_TYPE_DEFINITION"] = "InterfaceTypeDefinition";
  Kind2["UNION_TYPE_DEFINITION"] = "UnionTypeDefinition";
  Kind2["ENUM_TYPE_DEFINITION"] = "EnumTypeDefinition";
  Kind2["ENUM_VALUE_DEFINITION"] = "EnumValueDefinition";
  Kind2["INPUT_OBJECT_TYPE_DEFINITION"] = "InputObjectTypeDefinition";
  Kind2["DIRECTIVE_DEFINITION"] = "DirectiveDefinition";
  Kind2["SCHEMA_EXTENSION"] = "SchemaExtension";
  Kind2["SCALAR_TYPE_EXTENSION"] = "ScalarTypeExtension";
  Kind2["OBJECT_TYPE_EXTENSION"] = "ObjectTypeExtension";
  Kind2["INTERFACE_TYPE_EXTENSION"] = "InterfaceTypeExtension";
  Kind2["UNION_TYPE_EXTENSION"] = "UnionTypeExtension";
  Kind2["ENUM_TYPE_EXTENSION"] = "EnumTypeExtension";
  Kind2["INPUT_OBJECT_TYPE_EXTENSION"] = "InputObjectTypeExtension";
})(Kind || (Kind = {}));
function isWhiteSpace(code) {
  return code === 9 || code === 32;
}
function isDigit(code) {
  return code >= 48 && code <= 57;
}
function isLetter(code) {
  return code >= 97 && code <= 122 || // A-Z
  code >= 65 && code <= 90;
}
function isNameStart(code) {
  return isLetter(code) || code === 95;
}
function isNameContinue(code) {
  return isLetter(code) || isDigit(code) || code === 95;
}
function dedentBlockStringLines(lines) {
  var _firstNonEmptyLine2;
  let commonIndent = Number.MAX_SAFE_INTEGER;
  let firstNonEmptyLine = null;
  let lastNonEmptyLine = -1;
  for (let i = 0; i < lines.length; ++i) {
    var _firstNonEmptyLine;
    const line = lines[i];
    const indent2 = leadingWhitespace(line);
    if (indent2 === line.length) {
      continue;
    }
    firstNonEmptyLine = (_firstNonEmptyLine = firstNonEmptyLine) !== null && _firstNonEmptyLine !== void 0 ? _firstNonEmptyLine : i;
    lastNonEmptyLine = i;
    if (i !== 0 && indent2 < commonIndent) {
      commonIndent = indent2;
    }
  }
  return lines.map((line, i) => i === 0 ? line : line.slice(commonIndent)).slice(
    (_firstNonEmptyLine2 = firstNonEmptyLine) !== null && _firstNonEmptyLine2 !== void 0 ? _firstNonEmptyLine2 : 0,
    lastNonEmptyLine + 1
  );
}
function leadingWhitespace(str) {
  let i = 0;
  while (i < str.length && isWhiteSpace(str.charCodeAt(i))) {
    ++i;
  }
  return i;
}
function printBlockString(value, options2) {
  const escapedValue = value.replace(/"""/g, '\\"""');
  const lines = escapedValue.split(/\r\n|[\n\r]/g);
  const isSingleLine = lines.length === 1;
  const forceLeadingNewLine = lines.length > 1 && lines.slice(1).every((line) => line.length === 0 || isWhiteSpace(line.charCodeAt(0)));
  const hasTrailingTripleQuotes = escapedValue.endsWith('\\"""');
  const hasTrailingQuote = value.endsWith('"') && !hasTrailingTripleQuotes;
  const hasTrailingSlash = value.endsWith("\\");
  const forceTrailingNewline = hasTrailingQuote || hasTrailingSlash;
  const printAsMultipleLines = (
    // add leading and trailing new lines only if it improves readability
    !isSingleLine || value.length > 70 || forceTrailingNewline || forceLeadingNewLine || hasTrailingTripleQuotes
  );
  let result = "";
  const skipLeadingNewLine = isSingleLine && isWhiteSpace(value.charCodeAt(0));
  if (printAsMultipleLines && !skipLeadingNewLine || forceLeadingNewLine) {
    result += "\n";
  }
  result += escapedValue;
  if (printAsMultipleLines || forceTrailingNewline) {
    result += "\n";
  }
  return '"""' + result + '"""';
}
var TokenKind;
(function(TokenKind2) {
  TokenKind2["SOF"] = "<SOF>";
  TokenKind2["EOF"] = "<EOF>";
  TokenKind2["BANG"] = "!";
  TokenKind2["DOLLAR"] = "$";
  TokenKind2["AMP"] = "&";
  TokenKind2["PAREN_L"] = "(";
  TokenKind2["PAREN_R"] = ")";
  TokenKind2["SPREAD"] = "...";
  TokenKind2["COLON"] = ":";
  TokenKind2["EQUALS"] = "=";
  TokenKind2["AT"] = "@";
  TokenKind2["BRACKET_L"] = "[";
  TokenKind2["BRACKET_R"] = "]";
  TokenKind2["BRACE_L"] = "{";
  TokenKind2["PIPE"] = "|";
  TokenKind2["BRACE_R"] = "}";
  TokenKind2["NAME"] = "Name";
  TokenKind2["INT"] = "Int";
  TokenKind2["FLOAT"] = "Float";
  TokenKind2["STRING"] = "String";
  TokenKind2["BLOCK_STRING"] = "BlockString";
  TokenKind2["COMMENT"] = "Comment";
})(TokenKind || (TokenKind = {}));
class Lexer {
  /**
   * The previously focused non-ignored token.
   */
  /**
   * The currently focused non-ignored token.
   */
  /**
   * The (1-indexed) line containing the current token.
   */
  /**
   * The character offset at which the current line begins.
   */
  constructor(source) {
    const startOfFileToken = new Token(TokenKind.SOF, 0, 0, 0, 0);
    this.source = source;
    this.lastToken = startOfFileToken;
    this.token = startOfFileToken;
    this.line = 1;
    this.lineStart = 0;
  }
  get [Symbol.toStringTag]() {
    return "Lexer";
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */
  advance() {
    this.lastToken = this.token;
    const token = this.token = this.lookahead();
    return token;
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */
  lookahead() {
    let token = this.token;
    if (token.kind !== TokenKind.EOF) {
      do {
        if (token.next) {
          token = token.next;
        } else {
          const nextToken = readNextToken(this, token.end);
          token.next = nextToken;
          nextToken.prev = token;
          token = nextToken;
        }
      } while (token.kind === TokenKind.COMMENT);
    }
    return token;
  }
}
function isPunctuatorTokenKind(kind) {
  return kind === TokenKind.BANG || kind === TokenKind.DOLLAR || kind === TokenKind.AMP || kind === TokenKind.PAREN_L || kind === TokenKind.PAREN_R || kind === TokenKind.SPREAD || kind === TokenKind.COLON || kind === TokenKind.EQUALS || kind === TokenKind.AT || kind === TokenKind.BRACKET_L || kind === TokenKind.BRACKET_R || kind === TokenKind.BRACE_L || kind === TokenKind.PIPE || kind === TokenKind.BRACE_R;
}
function isUnicodeScalarValue(code) {
  return code >= 0 && code <= 55295 || code >= 57344 && code <= 1114111;
}
function isSupplementaryCodePoint(body, location) {
  return isLeadingSurrogate(body.charCodeAt(location)) && isTrailingSurrogate(body.charCodeAt(location + 1));
}
function isLeadingSurrogate(code) {
  return code >= 55296 && code <= 56319;
}
function isTrailingSurrogate(code) {
  return code >= 56320 && code <= 57343;
}
function printCodePointAt(lexer, location) {
  const code = lexer.source.body.codePointAt(location);
  if (code === void 0) {
    return TokenKind.EOF;
  } else if (code >= 32 && code <= 126) {
    const char = String.fromCodePoint(code);
    return char === '"' ? `'"'` : `"${char}"`;
  }
  return "U+" + code.toString(16).toUpperCase().padStart(4, "0");
}
function createToken(lexer, kind, start, end, value) {
  const line = lexer.line;
  const col = 1 + start - lexer.lineStart;
  return new Token(kind, start, end, line, col, value);
}
function readNextToken(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start;
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    switch (code) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++position;
        continue;
      case 10:
        ++position;
        ++lexer.line;
        lexer.lineStart = position;
        continue;
      case 13:
        if (body.charCodeAt(position + 1) === 10) {
          position += 2;
        } else {
          ++position;
        }
        ++lexer.line;
        lexer.lineStart = position;
        continue;
      case 35:
        return readComment(lexer, position);
      case 33:
        return createToken(lexer, TokenKind.BANG, position, position + 1);
      case 36:
        return createToken(lexer, TokenKind.DOLLAR, position, position + 1);
      case 38:
        return createToken(lexer, TokenKind.AMP, position, position + 1);
      case 40:
        return createToken(lexer, TokenKind.PAREN_L, position, position + 1);
      case 41:
        return createToken(lexer, TokenKind.PAREN_R, position, position + 1);
      case 46:
        if (body.charCodeAt(position + 1) === 46 && body.charCodeAt(position + 2) === 46) {
          return createToken(lexer, TokenKind.SPREAD, position, position + 3);
        }
        break;
      case 58:
        return createToken(lexer, TokenKind.COLON, position, position + 1);
      case 61:
        return createToken(lexer, TokenKind.EQUALS, position, position + 1);
      case 64:
        return createToken(lexer, TokenKind.AT, position, position + 1);
      case 91:
        return createToken(lexer, TokenKind.BRACKET_L, position, position + 1);
      case 93:
        return createToken(lexer, TokenKind.BRACKET_R, position, position + 1);
      case 123:
        return createToken(lexer, TokenKind.BRACE_L, position, position + 1);
      case 124:
        return createToken(lexer, TokenKind.PIPE, position, position + 1);
      case 125:
        return createToken(lexer, TokenKind.BRACE_R, position, position + 1);
      case 34:
        if (body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
          return readBlockString(lexer, position);
        }
        return readString(lexer, position);
    }
    if (isDigit(code) || code === 45) {
      return readNumber(lexer, position, code);
    }
    if (isNameStart(code)) {
      return readName(lexer, position);
    }
    throw syntaxError(
      lexer.source,
      position,
      code === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : isUnicodeScalarValue(code) || isSupplementaryCodePoint(body, position) ? `Unexpected character: ${printCodePointAt(lexer, position)}.` : `Invalid character: ${printCodePointAt(lexer, position)}.`
    );
  }
  return createToken(lexer, TokenKind.EOF, bodyLength, bodyLength);
}
function readComment(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (code === 10 || code === 13) {
      break;
    }
    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      break;
    }
  }
  return createToken(
    lexer,
    TokenKind.COMMENT,
    start,
    position,
    body.slice(start + 1, position)
  );
}
function readNumber(lexer, start, firstCode) {
  const body = lexer.source.body;
  let position = start;
  let code = firstCode;
  let isFloat = false;
  if (code === 45) {
    code = body.charCodeAt(++position);
  }
  if (code === 48) {
    code = body.charCodeAt(++position);
    if (isDigit(code)) {
      throw syntaxError(
        lexer.source,
        position,
        `Invalid number, unexpected digit after 0: ${printCodePointAt(
          lexer,
          position
        )}.`
      );
    }
  } else {
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  }
  if (code === 46) {
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  }
  if (code === 69 || code === 101) {
    isFloat = true;
    code = body.charCodeAt(++position);
    if (code === 43 || code === 45) {
      code = body.charCodeAt(++position);
    }
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  }
  if (code === 46 || isNameStart(code)) {
    throw syntaxError(
      lexer.source,
      position,
      `Invalid number, expected digit but got: ${printCodePointAt(
        lexer,
        position
      )}.`
    );
  }
  return createToken(
    lexer,
    isFloat ? TokenKind.FLOAT : TokenKind.INT,
    start,
    position,
    body.slice(start, position)
  );
}
function readDigits(lexer, start, firstCode) {
  if (!isDigit(firstCode)) {
    throw syntaxError(
      lexer.source,
      start,
      `Invalid number, expected digit but got: ${printCodePointAt(
        lexer,
        start
      )}.`
    );
  }
  const body = lexer.source.body;
  let position = start + 1;
  while (isDigit(body.charCodeAt(position))) {
    ++position;
  }
  return position;
}
function readString(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  let chunkStart = position;
  let value = "";
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (code === 34) {
      value += body.slice(chunkStart, position);
      return createToken(lexer, TokenKind.STRING, start, position + 1, value);
    }
    if (code === 92) {
      value += body.slice(chunkStart, position);
      const escape = body.charCodeAt(position + 1) === 117 ? body.charCodeAt(position + 2) === 123 ? readEscapedUnicodeVariableWidth(lexer, position) : readEscapedUnicodeFixedWidth(lexer, position) : readEscapedCharacter(lexer, position);
      value += escape.value;
      position += escape.size;
      chunkStart = position;
      continue;
    }
    if (code === 10 || code === 13) {
      break;
    }
    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      throw syntaxError(
        lexer.source,
        position,
        `Invalid character within String: ${printCodePointAt(
          lexer,
          position
        )}.`
      );
    }
  }
  throw syntaxError(lexer.source, position, "Unterminated string.");
}
function readEscapedUnicodeVariableWidth(lexer, position) {
  const body = lexer.source.body;
  let point = 0;
  let size = 3;
  while (size < 12) {
    const code = body.charCodeAt(position + size++);
    if (code === 125) {
      if (size < 5 || !isUnicodeScalarValue(point)) {
        break;
      }
      return {
        value: String.fromCodePoint(point),
        size
      };
    }
    point = point << 4 | readHexDigit(code);
    if (point < 0) {
      break;
    }
  }
  throw syntaxError(
    lexer.source,
    position,
    `Invalid Unicode escape sequence: "${body.slice(
      position,
      position + size
    )}".`
  );
}
function readEscapedUnicodeFixedWidth(lexer, position) {
  const body = lexer.source.body;
  const code = read16BitHexCode(body, position + 2);
  if (isUnicodeScalarValue(code)) {
    return {
      value: String.fromCodePoint(code),
      size: 6
    };
  }
  if (isLeadingSurrogate(code)) {
    if (body.charCodeAt(position + 6) === 92 && body.charCodeAt(position + 7) === 117) {
      const trailingCode = read16BitHexCode(body, position + 8);
      if (isTrailingSurrogate(trailingCode)) {
        return {
          value: String.fromCodePoint(code, trailingCode),
          size: 12
        };
      }
    }
  }
  throw syntaxError(
    lexer.source,
    position,
    `Invalid Unicode escape sequence: "${body.slice(position, position + 6)}".`
  );
}
function read16BitHexCode(body, position) {
  return readHexDigit(body.charCodeAt(position)) << 12 | readHexDigit(body.charCodeAt(position + 1)) << 8 | readHexDigit(body.charCodeAt(position + 2)) << 4 | readHexDigit(body.charCodeAt(position + 3));
}
function readHexDigit(code) {
  return code >= 48 && code <= 57 ? code - 48 : code >= 65 && code <= 70 ? code - 55 : code >= 97 && code <= 102 ? code - 87 : -1;
}
function readEscapedCharacter(lexer, position) {
  const body = lexer.source.body;
  const code = body.charCodeAt(position + 1);
  switch (code) {
    case 34:
      return {
        value: '"',
        size: 2
      };
    case 92:
      return {
        value: "\\",
        size: 2
      };
    case 47:
      return {
        value: "/",
        size: 2
      };
    case 98:
      return {
        value: "\b",
        size: 2
      };
    case 102:
      return {
        value: "\f",
        size: 2
      };
    case 110:
      return {
        value: "\n",
        size: 2
      };
    case 114:
      return {
        value: "\r",
        size: 2
      };
    case 116:
      return {
        value: "	",
        size: 2
      };
  }
  throw syntaxError(
    lexer.source,
    position,
    `Invalid character escape sequence: "${body.slice(
      position,
      position + 2
    )}".`
  );
}
function readBlockString(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let lineStart = lexer.lineStart;
  let position = start + 3;
  let chunkStart = position;
  let currentLine = "";
  const blockLines = [];
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
      currentLine += body.slice(chunkStart, position);
      blockLines.push(currentLine);
      const token = createToken(
        lexer,
        TokenKind.BLOCK_STRING,
        start,
        position + 3,
        // Return a string of the lines joined with U+000A.
        dedentBlockStringLines(blockLines).join("\n")
      );
      lexer.line += blockLines.length - 1;
      lexer.lineStart = lineStart;
      return token;
    }
    if (code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
      currentLine += body.slice(chunkStart, position);
      chunkStart = position + 1;
      position += 4;
      continue;
    }
    if (code === 10 || code === 13) {
      currentLine += body.slice(chunkStart, position);
      blockLines.push(currentLine);
      if (code === 13 && body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }
      currentLine = "";
      chunkStart = position;
      lineStart = position;
      continue;
    }
    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      throw syntaxError(
        lexer.source,
        position,
        `Invalid character within String: ${printCodePointAt(
          lexer,
          position
        )}.`
      );
    }
  }
  throw syntaxError(lexer.source, position, "Unterminated string.");
}
function readName(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (isNameContinue(code)) {
      ++position;
    } else {
      break;
    }
  }
  return createToken(
    lexer,
    TokenKind.NAME,
    start,
    position,
    body.slice(start, position)
  );
}
const MAX_ARRAY_LENGTH = 10;
const MAX_RECURSIVE_DEPTH = 2;
function inspect(value) {
  return formatValue(value, []);
}
function formatValue(value, seenValues) {
  switch (typeof value) {
    case "string":
      return JSON.stringify(value);
    case "function":
      return value.name ? `[function ${value.name}]` : "[function]";
    case "object":
      return formatObjectValue(value, seenValues);
    default:
      return String(value);
  }
}
function formatObjectValue(value, previouslySeenValues) {
  if (value === null) {
    return "null";
  }
  if (previouslySeenValues.includes(value)) {
    return "[Circular]";
  }
  const seenValues = [...previouslySeenValues, value];
  if (isJSONable(value)) {
    const jsonValue = value.toJSON();
    if (jsonValue !== value) {
      return typeof jsonValue === "string" ? jsonValue : formatValue(jsonValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }
  return formatObject(value, seenValues);
}
function isJSONable(value) {
  return typeof value.toJSON === "function";
}
function formatObject(object, seenValues) {
  const entries = Object.entries(object);
  if (entries.length === 0) {
    return "{}";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[" + getObjectTag(object) + "]";
  }
  const properties = entries.map(
    ([key, value]) => key + ": " + formatValue(value, seenValues)
  );
  return "{ " + properties.join(", ") + " }";
}
function formatArray(array, seenValues) {
  if (array.length === 0) {
    return "[]";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[Array]";
  }
  const len = Math.min(MAX_ARRAY_LENGTH, array.length);
  const remaining = array.length - len;
  const items = [];
  for (let i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }
  if (remaining === 1) {
    items.push("... 1 more item");
  } else if (remaining > 1) {
    items.push(`... ${remaining} more items`);
  }
  return "[" + items.join(", ") + "]";
}
function getObjectTag(object) {
  const tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
  if (tag === "Object" && typeof object.constructor === "function") {
    const name = object.constructor.name;
    if (typeof name === "string" && name !== "") {
      return name;
    }
  }
  return tag;
}
const isProduction = globalThis.process && // eslint-disable-next-line no-undef
process$1.env.NODE_ENV === "production";
const instanceOf = (
  /* c8 ignore next 6 */
  // FIXME: https://github.com/graphql/graphql-js/issues/2317
  isProduction ? function instanceOf2(value, constructor) {
    return value instanceof constructor;
  } : function instanceOf3(value, constructor) {
    if (value instanceof constructor) {
      return true;
    }
    if (typeof value === "object" && value !== null) {
      var _value$constructor;
      const className = constructor.prototype[Symbol.toStringTag];
      const valueClassName = (
        // We still need to support constructor's name to detect conflicts with older versions of this library.
        Symbol.toStringTag in value ? value[Symbol.toStringTag] : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.name
      );
      if (className === valueClassName) {
        const stringifiedValue = inspect(value);
        throw new Error(`Cannot use ${className} "${stringifiedValue}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
      }
    }
    return false;
  }
);
class Source {
  constructor(body, name = "GraphQL request", locationOffset = {
    line: 1,
    column: 1
  }) {
    typeof body === "string" || devAssert(false, `Body must be a string. Received: ${inspect(body)}.`);
    this.body = body;
    this.name = name;
    this.locationOffset = locationOffset;
    this.locationOffset.line > 0 || devAssert(
      false,
      "line in locationOffset is 1-indexed and must be positive."
    );
    this.locationOffset.column > 0 || devAssert(
      false,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function isSource(source) {
  return instanceOf(source, Source);
}
function parse$2(source, options2) {
  const parser = new Parser(source, options2);
  const document = parser.parseDocument();
  Object.defineProperty(document, "tokenCount", {
    enumerable: false,
    value: parser.tokenCount
  });
  return document;
}
class Parser {
  constructor(source, options2 = {}) {
    const sourceObj = isSource(source) ? source : new Source(source);
    this._lexer = new Lexer(sourceObj);
    this._options = options2;
    this._tokenCounter = 0;
  }
  get tokenCount() {
    return this._tokenCounter;
  }
  /**
   * Converts a name lex token into a name parse node.
   */
  parseName() {
    const token = this.expectToken(TokenKind.NAME);
    return this.node(token, {
      kind: Kind.NAME,
      value: token.value
    });
  }
  // Implements the parsing rules in the Document section.
  /**
   * Document : Definition+
   */
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: Kind.DOCUMENT,
      definitions: this.many(
        TokenKind.SOF,
        this.parseDefinition,
        TokenKind.EOF
      )
    });
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   *
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  parseDefinition() {
    if (this.peek(TokenKind.BRACE_L)) {
      return this.parseOperationDefinition();
    }
    const hasDescription = this.peekDescription();
    const keywordToken = hasDescription ? this._lexer.lookahead() : this._lexer.token;
    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case "schema":
          return this.parseSchemaDefinition();
        case "scalar":
          return this.parseScalarTypeDefinition();
        case "type":
          return this.parseObjectTypeDefinition();
        case "interface":
          return this.parseInterfaceTypeDefinition();
        case "union":
          return this.parseUnionTypeDefinition();
        case "enum":
          return this.parseEnumTypeDefinition();
        case "input":
          return this.parseInputObjectTypeDefinition();
        case "directive":
          return this.parseDirectiveDefinition();
      }
      if (hasDescription) {
        throw syntaxError(
          this._lexer.source,
          this._lexer.token.start,
          "Unexpected description, descriptions are supported only on type definitions."
        );
      }
      switch (keywordToken.value) {
        case "query":
        case "mutation":
        case "subscription":
          return this.parseOperationDefinition();
        case "fragment":
          return this.parseFragmentDefinition();
        case "extend":
          return this.parseTypeSystemExtension();
      }
    }
    throw this.unexpected(keywordToken);
  }
  // Implements the parsing rules in the Operations section.
  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  parseOperationDefinition() {
    const start = this._lexer.token;
    if (this.peek(TokenKind.BRACE_L)) {
      return this.node(start, {
        kind: Kind.OPERATION_DEFINITION,
        operation: OperationTypeNode.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet()
      });
    }
    const operation = this.parseOperationType();
    let name;
    if (this.peek(TokenKind.NAME)) {
      name = this.parseName();
    }
    return this.node(start, {
      kind: Kind.OPERATION_DEFINITION,
      operation,
      name,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * OperationType : one of query mutation subscription
   */
  parseOperationType() {
    const operationToken = this.expectToken(TokenKind.NAME);
    switch (operationToken.value) {
      case "query":
        return OperationTypeNode.QUERY;
      case "mutation":
        return OperationTypeNode.MUTATION;
      case "subscription":
        return OperationTypeNode.SUBSCRIPTION;
    }
    throw this.unexpected(operationToken);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  parseVariableDefinitions() {
    return this.optionalMany(
      TokenKind.PAREN_L,
      this.parseVariableDefinition,
      TokenKind.PAREN_R
    );
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: Kind.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(TokenKind.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(TokenKind.EQUALS) ? this.parseConstValueLiteral() : void 0,
      directives: this.parseConstDirectives()
    });
  }
  /**
   * Variable : $ Name
   */
  parseVariable() {
    const start = this._lexer.token;
    this.expectToken(TokenKind.DOLLAR);
    return this.node(start, {
      kind: Kind.VARIABLE,
      name: this.parseName()
    });
  }
  /**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */
  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: Kind.SELECTION_SET,
      selections: this.many(
        TokenKind.BRACE_L,
        this.parseSelection,
        TokenKind.BRACE_R
      )
    });
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  parseSelection() {
    return this.peek(TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  parseField() {
    const start = this._lexer.token;
    const nameOrAlias = this.parseName();
    let alias;
    let name;
    if (this.expectOptionalToken(TokenKind.COLON)) {
      alias = nameOrAlias;
      name = this.parseName();
    } else {
      name = nameOrAlias;
    }
    return this.node(start, {
      kind: Kind.FIELD,
      alias,
      name,
      arguments: this.parseArguments(false),
      directives: this.parseDirectives(false),
      selectionSet: this.peek(TokenKind.BRACE_L) ? this.parseSelectionSet() : void 0
    });
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  parseArguments(isConst) {
    const item = isConst ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(TokenKind.PAREN_L, item, TokenKind.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  parseArgument(isConst = false) {
    const start = this._lexer.token;
    const name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return this.node(start, {
      kind: Kind.ARGUMENT,
      name,
      value: this.parseValueLiteral(isConst)
    });
  }
  parseConstArgument() {
    return this.parseArgument(true);
  }
  // Implements the parsing rules in the Fragments section.
  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  parseFragment() {
    const start = this._lexer.token;
    this.expectToken(TokenKind.SPREAD);
    const hasTypeCondition = this.expectOptionalKeyword("on");
    if (!hasTypeCondition && this.peek(TokenKind.NAME)) {
      return this.node(start, {
        kind: Kind.FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(false)
      });
    }
    return this.node(start, {
      kind: Kind.INLINE_FRAGMENT,
      typeCondition: hasTypeCondition ? this.parseNamedType() : void 0,
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  parseFragmentDefinition() {
    const start = this._lexer.token;
    this.expectKeyword("fragment");
    if (this._options.allowLegacyFragmentVariables === true) {
      return this.node(start, {
        kind: Kind.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet()
      });
    }
    return this.node(start, {
      kind: Kind.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentName : Name but not `on`
   */
  parseFragmentName() {
    if (this._lexer.token.value === "on") {
      throw this.unexpected();
    }
    return this.parseName();
  }
  // Implements the parsing rules in the Values section.
  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseValueLiteral(isConst) {
    const token = this._lexer.token;
    switch (token.kind) {
      case TokenKind.BRACKET_L:
        return this.parseList(isConst);
      case TokenKind.BRACE_L:
        return this.parseObject(isConst);
      case TokenKind.INT:
        this.advanceLexer();
        return this.node(token, {
          kind: Kind.INT,
          value: token.value
        });
      case TokenKind.FLOAT:
        this.advanceLexer();
        return this.node(token, {
          kind: Kind.FLOAT,
          value: token.value
        });
      case TokenKind.STRING:
      case TokenKind.BLOCK_STRING:
        return this.parseStringLiteral();
      case TokenKind.NAME:
        this.advanceLexer();
        switch (token.value) {
          case "true":
            return this.node(token, {
              kind: Kind.BOOLEAN,
              value: true
            });
          case "false":
            return this.node(token, {
              kind: Kind.BOOLEAN,
              value: false
            });
          case "null":
            return this.node(token, {
              kind: Kind.NULL
            });
          default:
            return this.node(token, {
              kind: Kind.ENUM,
              value: token.value
            });
        }
      case TokenKind.DOLLAR:
        if (isConst) {
          this.expectToken(TokenKind.DOLLAR);
          if (this._lexer.token.kind === TokenKind.NAME) {
            const varName = this._lexer.token.value;
            throw syntaxError(
              this._lexer.source,
              token.start,
              `Unexpected variable "$${varName}" in constant value.`
            );
          } else {
            throw this.unexpected(token);
          }
        }
        return this.parseVariable();
      default:
        throw this.unexpected();
    }
  }
  parseConstValueLiteral() {
    return this.parseValueLiteral(true);
  }
  parseStringLiteral() {
    const token = this._lexer.token;
    this.advanceLexer();
    return this.node(token, {
      kind: Kind.STRING,
      value: token.value,
      block: token.kind === TokenKind.BLOCK_STRING
    });
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  parseList(isConst) {
    const item = () => this.parseValueLiteral(isConst);
    return this.node(this._lexer.token, {
      kind: Kind.LIST,
      values: this.any(TokenKind.BRACKET_L, item, TokenKind.BRACKET_R)
    });
  }
  /**
   * ```
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   * ```
   */
  parseObject(isConst) {
    const item = () => this.parseObjectField(isConst);
    return this.node(this._lexer.token, {
      kind: Kind.OBJECT,
      fields: this.any(TokenKind.BRACE_L, item, TokenKind.BRACE_R)
    });
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  parseObjectField(isConst) {
    const start = this._lexer.token;
    const name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return this.node(start, {
      kind: Kind.OBJECT_FIELD,
      name,
      value: this.parseValueLiteral(isConst)
    });
  }
  // Implements the parsing rules in the Directives section.
  /**
   * Directives[Const] : Directive[?Const]+
   */
  parseDirectives(isConst) {
    const directives = [];
    while (this.peek(TokenKind.AT)) {
      directives.push(this.parseDirective(isConst));
    }
    return directives;
  }
  parseConstDirectives() {
    return this.parseDirectives(true);
  }
  /**
   * ```
   * Directive[Const] : @ Name Arguments[?Const]?
   * ```
   */
  parseDirective(isConst) {
    const start = this._lexer.token;
    this.expectToken(TokenKind.AT);
    return this.node(start, {
      kind: Kind.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(isConst)
    });
  }
  // Implements the parsing rules in the Types section.
  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  parseTypeReference() {
    const start = this._lexer.token;
    let type;
    if (this.expectOptionalToken(TokenKind.BRACKET_L)) {
      const innerType = this.parseTypeReference();
      this.expectToken(TokenKind.BRACKET_R);
      type = this.node(start, {
        kind: Kind.LIST_TYPE,
        type: innerType
      });
    } else {
      type = this.parseNamedType();
    }
    if (this.expectOptionalToken(TokenKind.BANG)) {
      return this.node(start, {
        kind: Kind.NON_NULL_TYPE,
        type
      });
    }
    return type;
  }
  /**
   * NamedType : Name
   */
  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: Kind.NAMED_TYPE,
      name: this.parseName()
    });
  }
  // Implements the parsing rules in the Type Definition section.
  peekDescription() {
    return this.peek(TokenKind.STRING) || this.peek(TokenKind.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  parseDescription() {
    if (this.peekDescription()) {
      return this.parseStringLiteral();
    }
  }
  /**
   * ```
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   * ```
   */
  parseSchemaDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("schema");
    const directives = this.parseConstDirectives();
    const operationTypes = this.many(
      TokenKind.BRACE_L,
      this.parseOperationTypeDefinition,
      TokenKind.BRACE_R
    );
    return this.node(start, {
      kind: Kind.SCHEMA_DEFINITION,
      description,
      directives,
      operationTypes
    });
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  parseOperationTypeDefinition() {
    const start = this._lexer.token;
    const operation = this.parseOperationType();
    this.expectToken(TokenKind.COLON);
    const type = this.parseNamedType();
    return this.node(start, {
      kind: Kind.OPERATION_TYPE_DEFINITION,
      operation,
      type
    });
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  parseScalarTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("scalar");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.SCALAR_TYPE_DEFINITION,
      description,
      name,
      directives
    });
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  parseObjectTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("type");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    return this.node(start, {
      kind: Kind.OBJECT_TYPE_DEFINITION,
      description,
      name,
      interfaces,
      directives,
      fields
    });
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  parseImplementsInterfaces() {
    return this.expectOptionalKeyword("implements") ? this.delimitedMany(TokenKind.AMP, this.parseNamedType) : [];
  }
  /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */
  parseFieldsDefinition() {
    return this.optionalMany(
      TokenKind.BRACE_L,
      this.parseFieldDefinition,
      TokenKind.BRACE_R
    );
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  parseFieldDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseName();
    const args = this.parseArgumentDefs();
    this.expectToken(TokenKind.COLON);
    const type = this.parseTypeReference();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.FIELD_DEFINITION,
      description,
      name,
      arguments: args,
      type,
      directives
    });
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  parseArgumentDefs() {
    return this.optionalMany(
      TokenKind.PAREN_L,
      this.parseInputValueDef,
      TokenKind.PAREN_R
    );
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  parseInputValueDef() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseName();
    this.expectToken(TokenKind.COLON);
    const type = this.parseTypeReference();
    let defaultValue;
    if (this.expectOptionalToken(TokenKind.EQUALS)) {
      defaultValue = this.parseConstValueLiteral();
    }
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.INPUT_VALUE_DEFINITION,
      description,
      name,
      type,
      defaultValue,
      directives
    });
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  parseInterfaceTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("interface");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    return this.node(start, {
      kind: Kind.INTERFACE_TYPE_DEFINITION,
      description,
      name,
      interfaces,
      directives,
      fields
    });
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  parseUnionTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("union");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const types = this.parseUnionMemberTypes();
    return this.node(start, {
      kind: Kind.UNION_TYPE_DEFINITION,
      description,
      name,
      directives,
      types
    });
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  parseUnionMemberTypes() {
    return this.expectOptionalToken(TokenKind.EQUALS) ? this.delimitedMany(TokenKind.PIPE, this.parseNamedType) : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  parseEnumTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("enum");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const values = this.parseEnumValuesDefinition();
    return this.node(start, {
      kind: Kind.ENUM_TYPE_DEFINITION,
      description,
      name,
      directives,
      values
    });
  }
  /**
   * ```
   * EnumValuesDefinition : { EnumValueDefinition+ }
   * ```
   */
  parseEnumValuesDefinition() {
    return this.optionalMany(
      TokenKind.BRACE_L,
      this.parseEnumValueDefinition,
      TokenKind.BRACE_R
    );
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */
  parseEnumValueDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseEnumValueName();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.ENUM_VALUE_DEFINITION,
      description,
      name,
      directives
    });
  }
  /**
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseEnumValueName() {
    if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") {
      throw syntaxError(
        this._lexer.source,
        this._lexer.token.start,
        `${getTokenDesc(
          this._lexer.token
        )} is reserved and cannot be used for an enum value.`
      );
    }
    return this.parseName();
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  parseInputObjectTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("input");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const fields = this.parseInputFieldsDefinition();
    return this.node(start, {
      kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
      description,
      name,
      directives,
      fields
    });
  }
  /**
   * ```
   * InputFieldsDefinition : { InputValueDefinition+ }
   * ```
   */
  parseInputFieldsDefinition() {
    return this.optionalMany(
      TokenKind.BRACE_L,
      this.parseInputValueDef,
      TokenKind.BRACE_R
    );
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  parseTypeSystemExtension() {
    const keywordToken = this._lexer.lookahead();
    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case "schema":
          return this.parseSchemaExtension();
        case "scalar":
          return this.parseScalarTypeExtension();
        case "type":
          return this.parseObjectTypeExtension();
        case "interface":
          return this.parseInterfaceTypeExtension();
        case "union":
          return this.parseUnionTypeExtension();
        case "enum":
          return this.parseEnumTypeExtension();
        case "input":
          return this.parseInputObjectTypeExtension();
      }
    }
    throw this.unexpected(keywordToken);
  }
  /**
   * ```
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   * ```
   */
  parseSchemaExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("schema");
    const directives = this.parseConstDirectives();
    const operationTypes = this.optionalMany(
      TokenKind.BRACE_L,
      this.parseOperationTypeDefinition,
      TokenKind.BRACE_R
    );
    if (directives.length === 0 && operationTypes.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.SCHEMA_EXTENSION,
      directives,
      operationTypes
    });
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  parseScalarTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("scalar");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    if (directives.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.SCALAR_TYPE_EXTENSION,
      name,
      directives
    });
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  parseObjectTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("type");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.OBJECT_TYPE_EXTENSION,
      name,
      interfaces,
      directives,
      fields
    });
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */
  parseInterfaceTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("interface");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.INTERFACE_TYPE_EXTENSION,
      name,
      interfaces,
      directives,
      fields
    });
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  parseUnionTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("union");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const types = this.parseUnionMemberTypes();
    if (directives.length === 0 && types.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.UNION_TYPE_EXTENSION,
      name,
      directives,
      types
    });
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  parseEnumTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("enum");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const values = this.parseEnumValuesDefinition();
    if (directives.length === 0 && values.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.ENUM_TYPE_EXTENSION,
      name,
      directives,
      values
    });
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  parseInputObjectTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("input");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const fields = this.parseInputFieldsDefinition();
    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.INPUT_OBJECT_TYPE_EXTENSION,
      name,
      directives,
      fields
    });
  }
  /**
   * ```
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   * ```
   */
  parseDirectiveDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("directive");
    this.expectToken(TokenKind.AT);
    const name = this.parseName();
    const args = this.parseArgumentDefs();
    const repeatable = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const locations = this.parseDirectiveLocations();
    return this.node(start, {
      kind: Kind.DIRECTIVE_DEFINITION,
      description,
      name,
      arguments: args,
      repeatable,
      locations
    });
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  parseDirectiveLocations() {
    return this.delimitedMany(TokenKind.PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  parseDirectiveLocation() {
    const start = this._lexer.token;
    const name = this.parseName();
    if (Object.prototype.hasOwnProperty.call(DirectiveLocation, name.value)) {
      return name;
    }
    throw this.unexpected(start);
  }
  // Core parsing utility functions
  /**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */
  node(startToken, node) {
    if (this._options.noLocation !== true) {
      node.loc = new Location(
        startToken,
        this._lexer.lastToken,
        this._lexer.source
      );
    }
    return node;
  }
  /**
   * Determines if the next token is of a given kind
   */
  peek(kind) {
    return this._lexer.token.kind === kind;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectToken(kind) {
    const token = this._lexer.token;
    if (token.kind === kind) {
      this.advanceLexer();
      return token;
    }
    throw syntaxError(
      this._lexer.source,
      token.start,
      `Expected ${getTokenKindDesc(kind)}, found ${getTokenDesc(token)}.`
    );
  }
  /**
   * If the next token is of the given kind, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalToken(kind) {
    const token = this._lexer.token;
    if (token.kind === kind) {
      this.advanceLexer();
      return true;
    }
    return false;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectKeyword(value) {
    const token = this._lexer.token;
    if (token.kind === TokenKind.NAME && token.value === value) {
      this.advanceLexer();
    } else {
      throw syntaxError(
        this._lexer.source,
        token.start,
        `Expected "${value}", found ${getTokenDesc(token)}.`
      );
    }
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalKeyword(value) {
    const token = this._lexer.token;
    if (token.kind === TokenKind.NAME && token.value === value) {
      this.advanceLexer();
      return true;
    }
    return false;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  unexpected(atToken) {
    const token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
    return syntaxError(
      this._lexer.source,
      token.start,
      `Unexpected ${getTokenDesc(token)}.`
    );
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  any(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    const nodes = [];
    while (!this.expectOptionalToken(closeKind)) {
      nodes.push(parseFn.call(this));
    }
    return nodes;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  optionalMany(openKind, parseFn, closeKind) {
    if (this.expectOptionalToken(openKind)) {
      const nodes = [];
      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));
      return nodes;
    }
    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  many(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    const nodes = [];
    do {
      nodes.push(parseFn.call(this));
    } while (!this.expectOptionalToken(closeKind));
    return nodes;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  delimitedMany(delimiterKind, parseFn) {
    this.expectOptionalToken(delimiterKind);
    const nodes = [];
    do {
      nodes.push(parseFn.call(this));
    } while (this.expectOptionalToken(delimiterKind));
    return nodes;
  }
  advanceLexer() {
    const { maxTokens } = this._options;
    const token = this._lexer.advance();
    if (token.kind !== TokenKind.EOF) {
      ++this._tokenCounter;
      if (maxTokens !== void 0 && this._tokenCounter > maxTokens) {
        throw syntaxError(
          this._lexer.source,
          token.start,
          `Document contains more that ${maxTokens} tokens. Parsing aborted.`
        );
      }
    }
  }
}
function getTokenDesc(token) {
  const value = token.value;
  return getTokenKindDesc(token.kind) + (value != null ? ` "${value}"` : "");
}
function getTokenKindDesc(kind) {
  return isPunctuatorTokenKind(kind) ? `"${kind}"` : kind;
}
function printString(str) {
  return `"${str.replace(escapedRegExp, escapedReplacer)}"`;
}
const escapedRegExp = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function escapedReplacer(str) {
  return escapeSequences[str.charCodeAt(0)];
}
const escapeSequences = [
  "\\u0000",
  "\\u0001",
  "\\u0002",
  "\\u0003",
  "\\u0004",
  "\\u0005",
  "\\u0006",
  "\\u0007",
  "\\b",
  "\\t",
  "\\n",
  "\\u000B",
  "\\f",
  "\\r",
  "\\u000E",
  "\\u000F",
  "\\u0010",
  "\\u0011",
  "\\u0012",
  "\\u0013",
  "\\u0014",
  "\\u0015",
  "\\u0016",
  "\\u0017",
  "\\u0018",
  "\\u0019",
  "\\u001A",
  "\\u001B",
  "\\u001C",
  "\\u001D",
  "\\u001E",
  "\\u001F",
  "",
  "",
  '\\"',
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 2F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 3F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 4F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\\\",
  "",
  "",
  "",
  // 5F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 6F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\u007F",
  "\\u0080",
  "\\u0081",
  "\\u0082",
  "\\u0083",
  "\\u0084",
  "\\u0085",
  "\\u0086",
  "\\u0087",
  "\\u0088",
  "\\u0089",
  "\\u008A",
  "\\u008B",
  "\\u008C",
  "\\u008D",
  "\\u008E",
  "\\u008F",
  "\\u0090",
  "\\u0091",
  "\\u0092",
  "\\u0093",
  "\\u0094",
  "\\u0095",
  "\\u0096",
  "\\u0097",
  "\\u0098",
  "\\u0099",
  "\\u009A",
  "\\u009B",
  "\\u009C",
  "\\u009D",
  "\\u009E",
  "\\u009F"
];
const BREAK = Object.freeze({});
function visit(root, visitor, visitorKeys = QueryDocumentKeys) {
  const enterLeaveMap = /* @__PURE__ */ new Map();
  for (const kind of Object.values(Kind)) {
    enterLeaveMap.set(kind, getEnterLeaveForKind(visitor, kind));
  }
  let stack = void 0;
  let inArray = Array.isArray(root);
  let keys = [root];
  let index = -1;
  let edits = [];
  let node = root;
  let key = void 0;
  let parent = void 0;
  const path2 = [];
  const ancestors = [];
  do {
    index++;
    const isLeaving = index === keys.length;
    const isEdited = isLeaving && edits.length !== 0;
    if (isLeaving) {
      key = ancestors.length === 0 ? void 0 : path2[path2.length - 1];
      node = parent;
      parent = ancestors.pop();
      if (isEdited) {
        if (inArray) {
          node = node.slice();
          let editOffset = 0;
          for (const [editKey, editValue] of edits) {
            const arrayKey = editKey - editOffset;
            if (editValue === null) {
              node.splice(arrayKey, 1);
              editOffset++;
            } else {
              node[arrayKey] = editValue;
            }
          }
        } else {
          node = { ...node };
          for (const [editKey, editValue] of edits) {
            node[editKey] = editValue;
          }
        }
      }
      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else if (parent) {
      key = inArray ? index : keys[index];
      node = parent[key];
      if (node === null || node === void 0) {
        continue;
      }
      path2.push(key);
    }
    let result;
    if (!Array.isArray(node)) {
      var _enterLeaveMap$get, _enterLeaveMap$get2;
      isNode(node) || devAssert(false, `Invalid AST Node: ${inspect(node)}.`);
      const visitFn = isLeaving ? (_enterLeaveMap$get = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get === void 0 ? void 0 : _enterLeaveMap$get.leave : (_enterLeaveMap$get2 = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get2 === void 0 ? void 0 : _enterLeaveMap$get2.enter;
      result = visitFn === null || visitFn === void 0 ? void 0 : visitFn.call(visitor, node, key, parent, path2, ancestors);
      if (result === BREAK) {
        break;
      }
      if (result === false) {
        if (!isLeaving) {
          path2.pop();
          continue;
        }
      } else if (result !== void 0) {
        edits.push([key, result]);
        if (!isLeaving) {
          if (isNode(result)) {
            node = result;
          } else {
            path2.pop();
            continue;
          }
        }
      }
    }
    if (result === void 0 && isEdited) {
      edits.push([key, node]);
    }
    if (isLeaving) {
      path2.pop();
    } else {
      var _node$kind;
      stack = {
        inArray,
        index,
        keys,
        edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : (_node$kind = visitorKeys[node.kind]) !== null && _node$kind !== void 0 ? _node$kind : [];
      index = -1;
      edits = [];
      if (parent) {
        ancestors.push(parent);
      }
      parent = node;
    }
  } while (stack !== void 0);
  if (edits.length !== 0) {
    return edits[edits.length - 1][1];
  }
  return root;
}
function getEnterLeaveForKind(visitor, kind) {
  const kindVisitor = visitor[kind];
  if (typeof kindVisitor === "object") {
    return kindVisitor;
  } else if (typeof kindVisitor === "function") {
    return {
      enter: kindVisitor,
      leave: void 0
    };
  }
  return {
    enter: visitor.enter,
    leave: visitor.leave
  };
}
function print(ast) {
  return visit(ast, printDocASTReducer);
}
const MAX_LINE_LENGTH = 80;
const printDocASTReducer = {
  Name: {
    leave: (node) => node.value
  },
  Variable: {
    leave: (node) => "$" + node.name
  },
  // Document
  Document: {
    leave: (node) => join(node.definitions, "\n\n")
  },
  OperationDefinition: {
    leave(node) {
      const varDefs = wrap("(", join(node.variableDefinitions, ", "), ")");
      const prefix = join(
        [
          node.operation,
          join([node.name, varDefs]),
          join(node.directives, " ")
        ],
        " "
      );
      return (prefix === "query" ? "" : prefix + " ") + node.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable, type, defaultValue, directives }) => variable + ": " + type + wrap(" = ", defaultValue) + wrap(" ", join(directives, " "))
  },
  SelectionSet: {
    leave: ({ selections }) => block(selections)
  },
  Field: {
    leave({ alias, name, arguments: args, directives, selectionSet }) {
      const prefix = wrap("", alias, ": ") + name;
      let argsLine = prefix + wrap("(", join(args, ", "), ")");
      if (argsLine.length > MAX_LINE_LENGTH) {
        argsLine = prefix + wrap("(\n", indent(join(args, "\n")), "\n)");
      }
      return join([argsLine, join(directives, " "), selectionSet], " ");
    }
  },
  Argument: {
    leave: ({ name, value }) => name + ": " + value
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name, directives }) => "..." + name + wrap(" ", join(directives, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition, directives, selectionSet }) => join(
      [
        "...",
        wrap("on ", typeCondition),
        join(directives, " "),
        selectionSet
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name, typeCondition, variableDefinitions, directives, selectionSet }) => (
      // or removed in the future.
      `fragment ${name}${wrap("(", join(variableDefinitions, ", "), ")")} on ${typeCondition} ${wrap("", join(directives, " "), " ")}` + selectionSet
    )
  },
  // Value
  IntValue: {
    leave: ({ value }) => value
  },
  FloatValue: {
    leave: ({ value }) => value
  },
  StringValue: {
    leave: ({ value, block: isBlockString }) => isBlockString ? printBlockString(value) : printString(value)
  },
  BooleanValue: {
    leave: ({ value }) => value ? "true" : "false"
  },
  NullValue: {
    leave: () => "null"
  },
  EnumValue: {
    leave: ({ value }) => value
  },
  ListValue: {
    leave: ({ values }) => "[" + join(values, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields }) => "{" + join(fields, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name, value }) => name + ": " + value
  },
  // Directive
  Directive: {
    leave: ({ name, arguments: args }) => "@" + name + wrap("(", join(args, ", "), ")")
  },
  // Type
  NamedType: {
    leave: ({ name }) => name
  },
  ListType: {
    leave: ({ type }) => "[" + type + "]"
  },
  NonNullType: {
    leave: ({ type }) => type + "!"
  },
  // Type System Definitions
  SchemaDefinition: {
    leave: ({ description, directives, operationTypes }) => wrap("", description, "\n") + join(["schema", join(directives, " "), block(operationTypes)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation, type }) => operation + ": " + type
  },
  ScalarTypeDefinition: {
    leave: ({ description, name, directives }) => wrap("", description, "\n") + join(["scalar", name, join(directives, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description, name, interfaces, directives, fields }) => wrap("", description, "\n") + join(
      [
        "type",
        name,
        wrap("implements ", join(interfaces, " & ")),
        join(directives, " "),
        block(fields)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description, name, arguments: args, type, directives }) => wrap("", description, "\n") + name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + ": " + type + wrap(" ", join(directives, " "))
  },
  InputValueDefinition: {
    leave: ({ description, name, type, defaultValue, directives }) => wrap("", description, "\n") + join(
      [name + ": " + type, wrap("= ", defaultValue), join(directives, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description, name, interfaces, directives, fields }) => wrap("", description, "\n") + join(
      [
        "interface",
        name,
        wrap("implements ", join(interfaces, " & ")),
        join(directives, " "),
        block(fields)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description, name, directives, types }) => wrap("", description, "\n") + join(
      ["union", name, join(directives, " "), wrap("= ", join(types, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description, name, directives, values }) => wrap("", description, "\n") + join(["enum", name, join(directives, " "), block(values)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description, name, directives }) => wrap("", description, "\n") + join([name, join(directives, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description, name, directives, fields }) => wrap("", description, "\n") + join(["input", name, join(directives, " "), block(fields)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description, name, arguments: args, repeatable, locations }) => wrap("", description, "\n") + "directive @" + name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + (repeatable ? " repeatable" : "") + " on " + join(locations, " | ")
  },
  SchemaExtension: {
    leave: ({ directives, operationTypes }) => join(
      ["extend schema", join(directives, " "), block(operationTypes)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name, directives }) => join(["extend scalar", name, join(directives, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name, interfaces, directives, fields }) => join(
      [
        "extend type",
        name,
        wrap("implements ", join(interfaces, " & ")),
        join(directives, " "),
        block(fields)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name, interfaces, directives, fields }) => join(
      [
        "extend interface",
        name,
        wrap("implements ", join(interfaces, " & ")),
        join(directives, " "),
        block(fields)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name, directives, types }) => join(
      [
        "extend union",
        name,
        join(directives, " "),
        wrap("= ", join(types, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name, directives, values }) => join(["extend enum", name, join(directives, " "), block(values)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name, directives, fields }) => join(["extend input", name, join(directives, " "), block(fields)], " ")
  }
};
function join(maybeArray, separator = "") {
  var _maybeArray$filter$jo;
  return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter((x) => x).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : "";
}
function block(array) {
  return wrap("{\n", indent(join(array, "\n")), "\n}");
}
function wrap(start, maybeString, end = "") {
  return maybeString != null && maybeString !== "" ? start + maybeString + end : "";
}
function indent(str) {
  return wrap("  ", str.replace(/\n/g, "\n  "));
}
function hasMultilineItems(maybeArray) {
  var _maybeArray$some;
  return (_maybeArray$some = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.some((str) => str.includes("\n"))) !== null && _maybeArray$some !== void 0 ? _maybeArray$some : false;
}
const ACCEPT_HEADER = `Accept`;
const CONTENT_TYPE_HEADER = `Content-Type`;
const CONTENT_TYPE_JSON = `application/json`;
const CONTENT_TYPE_GQL = `application/graphql-response+json`;
const cleanQuery = (str) => str.replace(/([\s,]|#[^\n\r]+)+/g, ` `).trim();
const isGraphQLContentType = (contentType) => {
  const contentTypeLower = contentType.toLowerCase();
  return contentTypeLower.includes(CONTENT_TYPE_GQL) || contentTypeLower.includes(CONTENT_TYPE_JSON);
};
const parseGraphQLExecutionResult = (result) => {
  try {
    if (Array.isArray(result)) {
      return {
        _tag: `Batch`,
        executionResults: result.map(parseExecutionResult)
      };
    } else if (isPlainObject(result)) {
      return {
        _tag: `Single`,
        executionResult: parseExecutionResult(result)
      };
    } else {
      throw new Error(`Invalid execution result: result is not object or array. 
Got:
${String(result)}`);
    }
  } catch (e) {
    return e;
  }
};
const parseExecutionResult = (result) => {
  if (typeof result !== `object` || result === null) {
    throw new Error(`Invalid execution result: result is not object`);
  }
  let errors = void 0;
  let data = void 0;
  let extensions = void 0;
  if (`errors` in result) {
    if (!isPlainObject(result.errors) && !Array.isArray(result.errors)) {
      throw new Error(`Invalid execution result: errors is not plain object OR array`);
    }
    errors = result.errors;
  }
  if (`data` in result) {
    if (!isPlainObject(result.data) && result.data !== null) {
      throw new Error(`Invalid execution result: data is not plain object`);
    }
    data = result.data;
  }
  if (`extensions` in result) {
    if (!isPlainObject(result.extensions))
      throw new Error(`Invalid execution result: extensions is not plain object`);
    extensions = result.extensions;
  }
  return {
    data,
    errors,
    extensions
  };
};
const isRequestResultHaveErrors = (result) => result._tag === `Batch` ? result.executionResults.some(isExecutionResultHaveErrors) : isExecutionResultHaveErrors(result.executionResult);
const isExecutionResultHaveErrors = (result) => Array.isArray(result.errors) ? result.errors.length > 0 : Boolean(result.errors);
const isOperationDefinitionNode = (definition) => {
  return typeof definition === `object` && definition !== null && `kind` in definition && definition.kind === Kind.OPERATION_DEFINITION;
};
const extractOperationName = (document) => {
  let operationName = void 0;
  const defs = document.definitions.filter(isOperationDefinitionNode);
  if (defs.length === 1) {
    operationName = defs[0].name?.value;
  }
  return operationName;
};
const extractIsMutation = (document) => {
  let isMutation = false;
  const defs = document.definitions.filter(isOperationDefinitionNode);
  if (defs.length === 1) {
    isMutation = defs[0].operation === `mutation`;
  }
  return isMutation;
};
const analyzeDocument = (document, excludeOperationName) => {
  const expression = typeof document === `string` ? document : print(document);
  let isMutation = false;
  let operationName = void 0;
  if (excludeOperationName) {
    return { expression, isMutation, operationName };
  }
  const docNode = tryCatch(() => typeof document === `string` ? parse$2(document) : document);
  if (docNode instanceof Error) {
    return { expression, isMutation, operationName };
  }
  operationName = extractOperationName(docNode);
  isMutation = extractIsMutation(docNode);
  return { expression, operationName, isMutation };
};
const defaultJsonSerializer = JSON;
const runRequest = async (input) => {
  const config2 = {
    ...input,
    method: input.request._tag === `Single` ? input.request.document.isMutation ? `POST` : uppercase(input.method ?? `post`) : input.request.hasMutations ? `POST` : uppercase(input.method ?? `post`),
    fetchOptions: {
      ...input.fetchOptions,
      errorPolicy: input.fetchOptions.errorPolicy ?? `none`
    }
  };
  const fetcher = createFetcher(config2.method);
  const fetchResponse = await fetcher(config2);
  if (!fetchResponse.ok) {
    return new ClientError({ status: fetchResponse.status, headers: fetchResponse.headers }, {
      query: input.request._tag === `Single` ? input.request.document.expression : input.request.query,
      variables: input.request.variables
    });
  }
  const result = await parseResultFromResponse(fetchResponse, input.fetchOptions.jsonSerializer ?? defaultJsonSerializer);
  if (result instanceof Error)
    throw result;
  const clientResponseBase = {
    status: fetchResponse.status,
    headers: fetchResponse.headers
  };
  if (isRequestResultHaveErrors(result) && config2.fetchOptions.errorPolicy === `none`) {
    const clientResponse = result._tag === `Batch` ? { ...result.executionResults, ...clientResponseBase } : {
      ...result.executionResult,
      ...clientResponseBase
    };
    return new ClientError(clientResponse, {
      query: input.request._tag === `Single` ? input.request.document.expression : input.request.query,
      variables: input.request.variables
    });
  }
  switch (result._tag) {
    case `Single`:
      return {
        ...clientResponseBase,
        ...executionResultClientResponseFields(config2)(result.executionResult)
      };
    case `Batch`:
      return {
        ...clientResponseBase,
        data: result.executionResults.map(executionResultClientResponseFields(config2))
      };
    default:
      casesExhausted(result);
  }
};
const executionResultClientResponseFields = ($params) => (executionResult) => {
  return {
    extensions: executionResult.extensions,
    data: executionResult.data,
    errors: $params.fetchOptions.errorPolicy === `all` ? executionResult.errors : void 0
  };
};
const parseResultFromResponse = async (response, jsonSerializer) => {
  const contentType = response.headers.get(CONTENT_TYPE_HEADER);
  const text = await response.text();
  if (contentType && isGraphQLContentType(contentType)) {
    return parseGraphQLExecutionResult(jsonSerializer.parse(text));
  } else {
    return parseGraphQLExecutionResult(text);
  }
};
const createFetcher = (method) => async (params) => {
  const headers = new Headers(params.headers);
  let searchParams = null;
  let body = void 0;
  if (!headers.has(ACCEPT_HEADER)) {
    headers.set(ACCEPT_HEADER, [CONTENT_TYPE_GQL, CONTENT_TYPE_JSON].join(`, `));
  }
  if (method === `POST`) {
    const $jsonSerializer = params.fetchOptions.jsonSerializer ?? defaultJsonSerializer;
    body = $jsonSerializer.stringify(buildBody(params));
    if (typeof body === `string` && !headers.has(CONTENT_TYPE_HEADER)) {
      headers.set(CONTENT_TYPE_HEADER, CONTENT_TYPE_JSON);
    }
  } else {
    searchParams = buildQueryParams(params);
  }
  const init = { method, headers, body, ...params.fetchOptions };
  let url = new URL(params.url);
  let initResolved = init;
  if (params.middleware) {
    const result = await Promise.resolve(params.middleware({
      ...init,
      url: params.url,
      operationName: params.request._tag === `Single` ? params.request.document.operationName : void 0,
      variables: params.request.variables
    }));
    const { url: urlNew, ...initNew } = result;
    url = new URL(urlNew);
    initResolved = initNew;
  }
  if (searchParams) {
    searchParams.forEach((value, name) => {
      url.searchParams.append(name, value);
    });
  }
  const $fetch = params.fetch ?? fetch;
  return await $fetch(url, initResolved);
};
const buildBody = (params) => {
  switch (params.request._tag) {
    case `Single`:
      return {
        query: params.request.document.expression,
        variables: params.request.variables,
        operationName: params.request.document.operationName
      };
    case `Batch`:
      return zip(params.request.query, params.request.variables ?? []).map(([query, variables]) => ({
        query,
        variables
      }));
    default:
      throw casesExhausted(params.request);
  }
};
const buildQueryParams = (params) => {
  const $jsonSerializer = params.fetchOptions.jsonSerializer ?? defaultJsonSerializer;
  const searchParams = new URLSearchParams();
  switch (params.request._tag) {
    case `Single`: {
      searchParams.append(`query`, cleanQuery(params.request.document.expression));
      if (params.request.variables) {
        searchParams.append(`variables`, $jsonSerializer.stringify(params.request.variables));
      }
      if (params.request.document.operationName) {
        searchParams.append(`operationName`, params.request.document.operationName);
      }
      return searchParams;
    }
    case `Batch`: {
      const variablesSerialized = params.request.variables?.map((v) => $jsonSerializer.stringify(v)) ?? [];
      const queriesCleaned = params.request.query.map(cleanQuery);
      const payload = zip(queriesCleaned, variablesSerialized).map(([query, variables]) => ({
        query,
        variables
      }));
      searchParams.append(`query`, $jsonSerializer.stringify(payload));
      return searchParams;
    }
    default:
      throw casesExhausted(params.request);
  }
};
class GraphQLClient {
  url;
  requestConfig;
  constructor(url, requestConfig = {}) {
    this.url = url;
    this.requestConfig = requestConfig;
  }
  /**
   * Send a GraphQL query to the server.
   */
  rawRequest = async (...args) => {
    const [queryOrOptions, variables, requestHeaders] = args;
    const rawRequestOptions = parseRawRequestArgs(queryOrOptions, variables, requestHeaders);
    const { headers, fetch: fetch2 = globalThis.fetch, method = `POST`, requestMiddleware, responseMiddleware, excludeOperationName, ...fetchOptions } = this.requestConfig;
    const { url } = this;
    if (rawRequestOptions.signal !== void 0) {
      fetchOptions.signal = rawRequestOptions.signal;
    }
    const document = analyzeDocument(rawRequestOptions.query, excludeOperationName);
    const response = await runRequest({
      url,
      request: {
        _tag: `Single`,
        document,
        variables: rawRequestOptions.variables
      },
      headers: {
        ...HeadersInitToPlainObject(callOrIdentity(headers)),
        ...HeadersInitToPlainObject(rawRequestOptions.requestHeaders)
      },
      fetch: fetch2,
      method,
      fetchOptions,
      middleware: requestMiddleware
    });
    if (responseMiddleware) {
      await responseMiddleware(response, {
        operationName: document.operationName,
        variables,
        url: this.url
      });
    }
    if (response instanceof Error) {
      throw response;
    }
    return response;
  };
  async request(documentOrOptions, ...variablesAndRequestHeaders) {
    const [variables, requestHeaders] = variablesAndRequestHeaders;
    const requestOptions = parseRequestArgs(documentOrOptions, variables, requestHeaders);
    const { headers, fetch: fetch2 = globalThis.fetch, method = `POST`, requestMiddleware, responseMiddleware, excludeOperationName, ...fetchOptions } = this.requestConfig;
    const { url } = this;
    if (requestOptions.signal !== void 0) {
      fetchOptions.signal = requestOptions.signal;
    }
    const analyzedDocument = analyzeDocument(requestOptions.document, excludeOperationName);
    const response = await runRequest({
      url,
      request: {
        _tag: `Single`,
        document: analyzedDocument,
        variables: requestOptions.variables
      },
      headers: {
        ...HeadersInitToPlainObject(callOrIdentity(headers)),
        ...HeadersInitToPlainObject(requestOptions.requestHeaders)
      },
      fetch: fetch2,
      method,
      fetchOptions,
      middleware: requestMiddleware
    });
    if (responseMiddleware) {
      await responseMiddleware(response, {
        operationName: analyzedDocument.operationName,
        variables: requestOptions.variables,
        url: this.url
      });
    }
    if (response instanceof Error) {
      throw response;
    }
    return response.data;
  }
  async batchRequests(documentsOrOptions, requestHeaders) {
    const batchRequestOptions = parseBatchRequestArgs(documentsOrOptions, requestHeaders);
    const { headers, excludeOperationName, ...fetchOptions } = this.requestConfig;
    if (batchRequestOptions.signal !== void 0) {
      fetchOptions.signal = batchRequestOptions.signal;
    }
    const analyzedDocuments = batchRequestOptions.documents.map(({ document }) => analyzeDocument(document, excludeOperationName));
    const expressions = analyzedDocuments.map(({ expression }) => expression);
    const hasMutations = analyzedDocuments.some(({ isMutation }) => isMutation);
    const variables = batchRequestOptions.documents.map(({ variables: variables2 }) => variables2);
    const response = await runRequest({
      url: this.url,
      request: {
        _tag: `Batch`,
        operationName: void 0,
        query: expressions,
        hasMutations,
        variables
      },
      headers: {
        ...HeadersInitToPlainObject(callOrIdentity(headers)),
        ...HeadersInitToPlainObject(batchRequestOptions.requestHeaders)
      },
      fetch: this.requestConfig.fetch ?? globalThis.fetch,
      method: this.requestConfig.method || `POST`,
      fetchOptions,
      middleware: this.requestConfig.requestMiddleware
    });
    if (this.requestConfig.responseMiddleware) {
      await this.requestConfig.responseMiddleware(response, {
        operationName: void 0,
        variables,
        url: this.url
      });
    }
    if (response instanceof Error) {
      throw response;
    }
    return response.data;
  }
  setHeaders(headers) {
    this.requestConfig.headers = headers;
    return this;
  }
  /**
   * Attach a header to the client. All subsequent requests will have this header.
   */
  setHeader(key, value) {
    const { headers } = this.requestConfig;
    if (headers) {
      headers[key] = value;
    } else {
      this.requestConfig.headers = { [key]: value };
    }
    return this;
  }
  /**
   * Change the client endpoint. All subsequent requests will send to this endpoint.
   */
  setEndpoint(value) {
    this.url = value;
    return this;
  }
}
const parseRequestArgs = (documentOrOptions, variables, requestHeaders) => {
  return documentOrOptions.document ? documentOrOptions : {
    document: documentOrOptions,
    variables,
    requestHeaders,
    signal: void 0
  };
};
const isConfig = (props) => {
  return typeof props === "object" && props !== null && "publicClient" in props && "walletClient" in props && "chain" in props && "api" in props && "graphQLClient" in props && "contractAddresses" in props && "contract" in props && "graphEndpoint" in props && "restEndpoint" in props;
};
const createContractInteractions = ({
  walletClient,
  publicClient,
  addresses
}) => {
  return {
    ssv: {
      write: createWriter({
        abi: MainnetV4SetterABI,
        walletClient,
        publicClient,
        contractAddress: addresses.setter
      }),
      read: createReader({
        abi: MainnetV4GetterABI,
        publicClient,
        contractAddress: addresses.getter
      })
    },
    token: {
      read: createReader({
        abi: TokenABI,
        publicClient,
        contractAddress: addresses.token
      }),
      write: createWriter({
        abi: TokenABI,
        walletClient,
        publicClient,
        contractAddress: addresses.token
      })
    }
  };
};
const createConfig = (props) => {
  const parsed = configArgsSchema.parse(props);
  if (!parsed.walletClient.chain || !parsed.publicClient.chain || !chainIds.includes(parsed.walletClient.chain?.id) || !chainIds.includes(parsed.publicClient.chain?.id))
    throw new Error(`Chain must be one of ${chainIds.join(", ")}`);
  const chainId = parsed.walletClient.chain.id;
  const chainContracts = contracts[chainId];
  const addresses = {
    setter: parsed._?.contractAddresses?.setter || chainContracts.setter,
    getter: parsed._?.contractAddresses?.getter || chainContracts.getter,
    token: parsed._?.contractAddresses?.token || chainContracts.token
  };
  const contract = createContractInteractions({
    walletClient: parsed.walletClient,
    publicClient: parsed.publicClient,
    addresses
  });
  const graphEndpoint = parsed._?.graphUrl || graph_endpoints[chainId];
  const restEndpoint = parsed._?.restUrl || rest_endpoints[chainId];
  const graphQLClient = new GraphQLClient(graphEndpoint);
  return {
    publicClient: parsed.publicClient,
    walletClient: parsed.walletClient,
    chain: parsed.walletClient.chain,
    graphEndpoint,
    restEndpoint,
    api: {
      ...createQueries(graphQLClient),
      ...createSSVAPI(restEndpoint)
    },
    graphQLClient,
    contractAddresses: addresses,
    contract
  };
};
const deposit = async (config2, { args: { id, amount }, ...writeOptions }, options2 = {}) => {
  const cluster = await config2.api.getCluster({ id });
  if (!cluster) {
    throw new Error("Cluster not found");
  }
  const snapshot = getClusterSnapshot$1(cluster);
  if (options2?.approve) {
    const allowance = await config2.contract.token.read.allowance({
      owner: config2.walletClient.account.address,
      spender: config2.contractAddresses.setter
    });
    if (allowance < amount) {
      await config2.contract.token.write.approve({
        args: {
          spender: config2.contractAddresses.setter,
          amount
        }
      }).then((tx) => tx.wait());
    }
  }
  return config2.contract.ssv.write.deposit({
    args: {
      amount,
      cluster: snapshot,
      clusterOwner: process$1.env.OWNER_ADDRESS,
      operatorIds: cluster.operatorIds.map(BigInt)
    },
    ...writeOptions
  });
};
const exitValidators = async (config2, { args: { publicKeys, operatorIds }, ...writeOptions }) => {
  if (publicKeys.length === 1) {
    return config2.contract.ssv.write.exitValidator({
      args: {
        publicKey: publicKeys[0],
        operatorIds: [operatorIds[0]]
      },
      ...writeOptions
    });
  }
  return config2.contract.ssv.write.bulkExitValidator({
    args: {
      publicKeys,
      operatorIds
    },
    ...writeOptions
  });
};
const liquidateCluster = async (config2, { args: { id }, ...writeOptions }) => {
  const cluster = await config2.api.getCluster({ id });
  if (!cluster) {
    throw new Error("Cluster not found");
  }
  return config2.contract.ssv.write.liquidate({
    args: {
      cluster: getClusterSnapshot$1(cluster),
      clusterOwner: config2.walletClient.account.address,
      operatorIds: cluster.operatorIds.map(BigInt)
    },
    ...writeOptions
  });
};
const reactivateCluster = async (config2, { args: { id, amount }, ...writeOptions }) => {
  const cluster = await config2.api.getCluster({ id });
  if (!cluster) {
    throw new Error("Cluster not found");
  }
  return config2.contract.ssv.write.reactivate({
    args: {
      cluster: getClusterSnapshot$1(cluster),
      amount,
      operatorIds: cluster.operatorIds.map(BigInt)
    },
    ...writeOptions
  });
};
const registerValidators = async (config2, { args: { keyshares, depositAmount = 0n }, ...writeOptions }) => {
  const shares = keyshares.map((share) => {
    return isKeySharesItem(share) ? share.payload : share;
  });
  const operatorIds = shares[0].operatorIds;
  const clusterSize = operatorIds.length;
  const limit = registerValidatorsByClusterSizeLimits[clusterSize];
  if (!limit) {
    throw new Error(
      `Invalid number of operators in keyshares: ${clusterSize}, should be one of: ${Object.keys(registerValidatorsByClusterSizeLimits).join(", ")}`
    );
  }
  if (shares.length > limit) {
    throw new Error(`You can't register more than ${limit} validators in a single transaction`);
  }
  const clusterId = createClusterId(config2.walletClient.account.address, operatorIds);
  const cluster = await config2.api.getCluster({
    id: clusterId
  });
  const snapshot = cluster ? getClusterSnapshot$1(cluster) : createEmptyCluster();
  if (shares.length === 1) {
    return config2.contract.ssv.write.registerValidator({
      args: {
        amount: depositAmount,
        cluster: snapshot,
        operatorIds: operatorIds.map(BigInt),
        publicKey: shares[0].publicKey,
        sharesData: shares[0].sharesData
      },
      ...writeOptions
    });
  }
  return config2.contract.ssv.write.bulkRegisterValidator({
    args: {
      cluster: snapshot,
      amount: depositAmount,
      operatorIds: operatorIds.map(BigInt),
      publicKeys: shares.map((share) => share.publicKey),
      sharesData: shares.map((share) => share.sharesData)
    },
    ...writeOptions
  });
};
const registerValidatorsRawData = async (config2, { args: { keyshares, depositAmount = 0n } }) => {
  const shares = keyshares.map((share) => {
    return isKeySharesItem(share) ? share.payload : share;
  });
  const operatorIds = shares[0].operatorIds;
  const clusterSize = operatorIds.length;
  const limit = registerValidatorsByClusterSizeLimits[clusterSize];
  if (!limit) {
    throw new Error(
      `Invalid number of operators in keyshares: ${clusterSize}, should be one of: ${Object.keys(registerValidatorsByClusterSizeLimits).join(", ")}`
    );
  }
  if (shares.length > limit) {
    throw new Error(`You can't register more than ${limit} validators in a single transaction`);
  }
  const clusterId = createClusterId(config2.walletClient.account.address, operatorIds);
  const cluster = await config2.api.getCluster({
    id: clusterId
  });
  const snapshot = cluster ? getClusterSnapshot$1(cluster) : createEmptyCluster();
  if (shares.length === 1) {
    return config2.contract.ssv.write.registerValidator.getTransactionData({
      amount: depositAmount,
      cluster: snapshot,
      operatorIds: operatorIds.map(BigInt),
      publicKey: shares[0].publicKey,
      sharesData: shares[0].sharesData
    });
  }
  return config2.contract.ssv.write.bulkRegisterValidator.getTransactionData({
    cluster: snapshot,
    amount: depositAmount,
    operatorIds: operatorIds.map(BigInt),
    publicKeys: shares.map((share) => share.publicKey),
    sharesData: shares.map((share) => share.sharesData)
  });
};
const ssvKeys$1 = new SSVKeys();
const validateSharesPostRegistration = async (config2, args) => {
  const receipt = await config2.publicClient.waitForTransactionReceipt({
    hash: args.txHash
  });
  const ownerNonce = await config2.api.getOwnerNonce({
    owner: config2.walletClient.account.address,
    block: Number(receipt.blockNumber) - 1
  });
  if (isUndefined(ownerNonce)) {
    throw new Error("Could not fetch owner nonce");
  }
  const validatorAddedEvents = await config2.publicClient.getContractEvents({
    abi: MainnetV4SetterABI,
    address: config2.contractAddresses.setter,
    eventName: "ValidatorAdded",
    args: {
      owner: config2.walletClient.account.address
    },
    fromBlock: receipt.blockNumber,
    toBlock: receipt.blockNumber
  });
  if (!validatorAddedEvents.length) {
    throw new Error("No ValidatorAdded events found in the receipt");
  }
  const validations = [];
  for (const [index, e] of validatorAddedEvents.entries()) {
    validations.push({
      event: e,
      validation: await ssvKeys$1.validateSharesPostRegistration({
        blockNumber: Number(receipt.blockNumber),
        operatorsCount: e.args.operatorIds.length,
        isAccountExists: false,
        ownerAddress: config2.walletClient.account.address,
        ownerNonce: Number(ownerNonce) + index,
        shares: e.args.shares,
        validatorPublicKey: e.args.publicKey
      })
    });
  }
  const isValid = validations.every((r) => r.validation.isValid);
  const invalids = validations.filter((r) => !r.validation.isValid);
  return {
    isValid,
    validations,
    invalids,
    ownerNonceAtBlock: Number(ownerNonce),
    block: Number(receipt.blockNumber)
  };
};
const removeValidators = async (config2, { args: { id, publicKeys }, ...writeOptions }) => {
  const cluster = await config2.api.getCluster({ id });
  if (!cluster) {
    throw new Error("Cluster not found");
  }
  if (publicKeys.length === 1) {
    return config2.contract.ssv.write.removeValidator({
      args: {
        cluster: getClusterSnapshot$1(cluster),
        publicKey: publicKeys[0],
        operatorIds: cluster.operatorIds.map(BigInt)
      },
      ...writeOptions
    });
  }
  return config2.contract.ssv.write.bulkRemoveValidator({
    args: {
      cluster: getClusterSnapshot$1(cluster),
      publicKeys,
      operatorIds: cluster.operatorIds.map(BigInt)
    },
    ...writeOptions
  });
};
const setFeeRecipient = async (config2, { args: { recipient }, ...writeOptions }) => {
  return config2.contract.ssv.write.setFeeRecipientAddress({
    args: {
      recipientAddress: recipient
    },
    ...writeOptions
  });
};
const withdraw$1 = async (config2, { args: { id, amount }, ...writeOptions }) => {
  const cluster = await config2.api.getCluster({ id });
  if (!cluster) {
    throw new Error("Cluster not found");
  }
  return config2.contract.ssv.write.withdraw({
    args: {
      amount,
      cluster: getClusterSnapshot$1(cluster),
      operatorIds: cluster.operatorIds.map(BigInt)
    },
    ...writeOptions
  });
};
const createClusterManager = (config2) => ({
  deposit: deposit.bind(null, config2),
  withdraw: withdraw$1.bind(null, config2),
  liquidate: liquidateCluster.bind(null, config2),
  reactivate: reactivateCluster.bind(null, config2),
  removeValidators: removeValidators.bind(null, config2),
  setFeeRecipient: setFeeRecipient.bind(null, config2),
  exitValidators: exitValidators.bind(null, config2),
  registerValidators: registerValidators.bind(null, config2),
  registerValidatorsRawData: registerValidatorsRawData.bind(null, config2),
  validateSharesPostRegistration: validateSharesPostRegistration.bind(
    null,
    config2
  )
});
const withdraw = async (config2, { args: { operatorId, amount }, ...writeOptions }) => {
  const balance = await config2.contract.ssv.read.getOperatorEarnings({
    id: BigInt(operatorId)
  });
  const isWithdrawingAll = amount >= balance;
  if (isWithdrawingAll) {
    return config2.contract.ssv.write.withdrawAllOperatorEarnings({
      args: {
        operatorId: BigInt(operatorId)
      },
      ...writeOptions
    });
  }
  return config2.contract.ssv.write.withdrawOperatorEarnings({
    args: {
      operatorId: BigInt(operatorId),
      amount
    },
    ...writeOptions
  });
};
const registerOperator = async (config2, { args: { isPrivate, yearlyFee, publicKey }, ...writeOptions }) => {
  return config2.contract.ssv.write.registerOperator({
    args: {
      publicKey: encodeAbiParameters(parseAbiParameters("string"), [publicKey]),
      fee: roundOperatorFee(yearlyFee / globals.BLOCKS_PER_YEAR),
      setPrivate: isPrivate
    },
    ...writeOptions
  });
};
const setOperatorWhitelists = async (config2, { args: { operatorIds, contractAddress }, ...writeOptions }) => {
  const isWhitelistingContract = await config2.contract.ssv.read.isWhitelistingContract({
    contractAddress
  });
  if (!isWhitelistingContract) {
    throw new Error("The provided contract is not whitelisting contract");
  }
  return config2.contract.ssv.write.setOperatorsWhitelists({
    args: {
      operatorIds: operatorIds.map(BigInt),
      whitelistAddresses: [contractAddress]
    },
    ...writeOptions
  });
};
const canAccountUseOperator = async (config2, operator, account) => {
  if (!operator) return false;
  if (!operator.isPrivate) return true;
  const isWhitelisted = operator.whitelisted.some(
    (addr) => isAddressEqual(addr, account)
  );
  if (isWhitelisted) return true;
  const hasExternalContract = Boolean(
    operator.whitelistedContract && operator.whitelistedContract !== zeroAddress
  );
  if (!hasExternalContract) return false;
  return config2.contract.ssv.read.isAddressWhitelistedInWhitelistingContract({
    addressToCheck: account,
    operatorId: BigInt(operator.id),
    whitelistingContract: operator.whitelistedContract
  });
};
const createOperatorManager = (config2) => ({
  registerOperator: registerOperator.bind(null, config2),
  removeOperator: config2.contract.ssv.write.removeOperator,
  withdraw: withdraw.bind(null, config2),
  setOperatorWhitelists: config2.contract.ssv.write.setOperatorsWhitelists,
  removeOperatorWhitelists: config2.contract.ssv.write.removeOperatorsWhitelists,
  setOperatorsPrivate: config2.contract.ssv.write.setOperatorsPrivateUnchecked,
  setOperatorsPublic: config2.contract.ssv.write.setOperatorsPublicUnchecked,
  setOperatorWhitelistingContract: setOperatorWhitelists.bind(null, config2),
  removeOperatorWhitelistingContract: config2.contract.ssv.write.removeOperatorsWhitelists,
  declareOperatorFee: config2.contract.ssv.write.declareOperatorFee,
  executeOperatorFee: config2.contract.ssv.write.executeOperatorFee,
  cancelDeclaredOperatorFee: config2.contract.ssv.write.cancelDeclaredOperatorFee,
  reduceOperatorFee: config2.contract.ssv.write.reduceOperatorFee
});
const getClusterBalance = async (config2, { operatorIds }) => {
  const query = await config2.api.getClusterBalance({
    daoAddress: config2.contractAddresses.setter,
    operatorIds: operatorIds.map(String),
    clusterId: createClusterId(config2.walletClient.account.address, operatorIds)
  });
  if (!query.cluster || !query.daovalues || !query._meta) {
    throw new Error("Could not fetch cluster balance");
  }
  const cumulativeNetworkFee = BigInt(query.daovalues.networkFeeIndex) + (BigInt(query._meta.block.number) - BigInt(query.daovalues.networkFeeIndexBlockNumber)) * BigInt(query.daovalues.networkFee) - BigInt(query.cluster.networkFeeIndex) * 10000000n;
  const cumulativeOperatorFee = query.operators.reduce(
    (acc, operator) => {
      return acc + BigInt(operator.feeIndex) + (BigInt(query._meta.block.number) - BigInt(operator.feeIndexBlockNumber)) * BigInt(operator.fee);
    },
    -BigInt(query.cluster.index) * 10000000n
  );
  const operatorsFee = query.operators.reduce((acc, operator) => acc + BigInt(operator.fee), 0n);
  const calculatedClusterBalance = BigInt(query.cluster.balance) - (cumulativeNetworkFee + cumulativeOperatorFee) * BigInt(query.cluster.validatorCount) || 1n;
  const burnRate = (operatorsFee + BigInt(query.daovalues.networkFee)) * BigInt(query.cluster.validatorCount) || 1n;
  const mLc = BigInt(query.daovalues.minimumLiquidationCollateral);
  const LC = bigintMax(mLc, burnRate * BigInt(query.daovalues.liquidationThreshold));
  const runwaySSV = calculatedClusterBalance - LC;
  const operationalRunway = runwaySSV / burnRate / globals.BLOCKS_PER_DAY;
  return {
    balance: calculatedClusterBalance,
    operationalRunway
  };
};
const debug$1 = typeof process$1 === "object" && process$1.env && process$1.env.NODE_DEBUG && /\bsemver\b/i.test(process$1.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
};
var debug_1 = debug$1;
const MAX_LENGTH$1 = 256;
const MAX_SAFE_INTEGER$1 = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991;
const MAX_SAFE_COMPONENT_LENGTH = 16;
const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH$1 - 6;
var constants = {
  MAX_LENGTH: MAX_LENGTH$1,
  MAX_SAFE_COMPONENT_LENGTH,
  MAX_SAFE_BUILD_LENGTH,
  MAX_SAFE_INTEGER: MAX_SAFE_INTEGER$1
};
var re$1 = { exports: {} };
(function(module, exports) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: MAX_SAFE_COMPONENT_LENGTH2,
    MAX_SAFE_BUILD_LENGTH: MAX_SAFE_BUILD_LENGTH2,
    MAX_LENGTH: MAX_LENGTH2
  } = constants;
  const debug2 = debug_1;
  exports = module.exports = {};
  const re2 = exports.re = [];
  const safeRe = exports.safeRe = [];
  const src = exports.src = [];
  const safeSrc = exports.safeSrc = [];
  const t2 = exports.t = {};
  let R = 0;
  const LETTERDASHNUMBER = "[a-zA-Z0-9-]";
  const safeRegexReplacements = [
    ["\\s", 1],
    ["\\d", MAX_LENGTH2],
    [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH2]
  ];
  const makeSafeRegex = (value) => {
    for (const [token, max] of safeRegexReplacements) {
      value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
    }
    return value;
  };
  const createToken2 = (name, value, isGlobal) => {
    const safe = makeSafeRegex(value);
    const index = R++;
    debug2(name, index, value);
    t2[name] = index;
    src[index] = value;
    safeSrc[index] = safe;
    re2[index] = new RegExp(value, isGlobal ? "g" : void 0);
    safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
  };
  createToken2("NUMERICIDENTIFIER", "0|[1-9]\\d*");
  createToken2("NUMERICIDENTIFIERLOOSE", "\\d+");
  createToken2("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
  createToken2("MAINVERSION", `(${src[t2.NUMERICIDENTIFIER]})\\.(${src[t2.NUMERICIDENTIFIER]})\\.(${src[t2.NUMERICIDENTIFIER]})`);
  createToken2("MAINVERSIONLOOSE", `(${src[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src[t2.NUMERICIDENTIFIERLOOSE]})`);
  createToken2("PRERELEASEIDENTIFIER", `(?:${src[t2.NONNUMERICIDENTIFIER]}|${src[t2.NUMERICIDENTIFIER]})`);
  createToken2("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t2.NONNUMERICIDENTIFIER]}|${src[t2.NUMERICIDENTIFIERLOOSE]})`);
  createToken2("PRERELEASE", `(?:-(${src[t2.PRERELEASEIDENTIFIER]}(?:\\.${src[t2.PRERELEASEIDENTIFIER]})*))`);
  createToken2("PRERELEASELOOSE", `(?:-?(${src[t2.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t2.PRERELEASEIDENTIFIERLOOSE]})*))`);
  createToken2("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
  createToken2("BUILD", `(?:\\+(${src[t2.BUILDIDENTIFIER]}(?:\\.${src[t2.BUILDIDENTIFIER]})*))`);
  createToken2("FULLPLAIN", `v?${src[t2.MAINVERSION]}${src[t2.PRERELEASE]}?${src[t2.BUILD]}?`);
  createToken2("FULL", `^${src[t2.FULLPLAIN]}$`);
  createToken2("LOOSEPLAIN", `[v=\\s]*${src[t2.MAINVERSIONLOOSE]}${src[t2.PRERELEASELOOSE]}?${src[t2.BUILD]}?`);
  createToken2("LOOSE", `^${src[t2.LOOSEPLAIN]}$`);
  createToken2("GTLT", "((?:<|>)?=?)");
  createToken2("XRANGEIDENTIFIERLOOSE", `${src[t2.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
  createToken2("XRANGEIDENTIFIER", `${src[t2.NUMERICIDENTIFIER]}|x|X|\\*`);
  createToken2("XRANGEPLAIN", `[v=\\s]*(${src[t2.XRANGEIDENTIFIER]})(?:\\.(${src[t2.XRANGEIDENTIFIER]})(?:\\.(${src[t2.XRANGEIDENTIFIER]})(?:${src[t2.PRERELEASE]})?${src[t2.BUILD]}?)?)?`);
  createToken2("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:${src[t2.PRERELEASELOOSE]})?${src[t2.BUILD]}?)?)?`);
  createToken2("XRANGE", `^${src[t2.GTLT]}\\s*${src[t2.XRANGEPLAIN]}$`);
  createToken2("XRANGELOOSE", `^${src[t2.GTLT]}\\s*${src[t2.XRANGEPLAINLOOSE]}$`);
  createToken2("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH2}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH2}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH2}}))?`);
  createToken2("COERCE", `${src[t2.COERCEPLAIN]}(?:$|[^\\d])`);
  createToken2("COERCEFULL", src[t2.COERCEPLAIN] + `(?:${src[t2.PRERELEASE]})?(?:${src[t2.BUILD]})?(?:$|[^\\d])`);
  createToken2("COERCERTL", src[t2.COERCE], true);
  createToken2("COERCERTLFULL", src[t2.COERCEFULL], true);
  createToken2("LONETILDE", "(?:~>?)");
  createToken2("TILDETRIM", `(\\s*)${src[t2.LONETILDE]}\\s+`, true);
  exports.tildeTrimReplace = "$1~";
  createToken2("TILDE", `^${src[t2.LONETILDE]}${src[t2.XRANGEPLAIN]}$`);
  createToken2("TILDELOOSE", `^${src[t2.LONETILDE]}${src[t2.XRANGEPLAINLOOSE]}$`);
  createToken2("LONECARET", "(?:\\^)");
  createToken2("CARETTRIM", `(\\s*)${src[t2.LONECARET]}\\s+`, true);
  exports.caretTrimReplace = "$1^";
  createToken2("CARET", `^${src[t2.LONECARET]}${src[t2.XRANGEPLAIN]}$`);
  createToken2("CARETLOOSE", `^${src[t2.LONECARET]}${src[t2.XRANGEPLAINLOOSE]}$`);
  createToken2("COMPARATORLOOSE", `^${src[t2.GTLT]}\\s*(${src[t2.LOOSEPLAIN]})$|^$`);
  createToken2("COMPARATOR", `^${src[t2.GTLT]}\\s*(${src[t2.FULLPLAIN]})$|^$`);
  createToken2("COMPARATORTRIM", `(\\s*)${src[t2.GTLT]}\\s*(${src[t2.LOOSEPLAIN]}|${src[t2.XRANGEPLAIN]})`, true);
  exports.comparatorTrimReplace = "$1$2$3";
  createToken2("HYPHENRANGE", `^\\s*(${src[t2.XRANGEPLAIN]})\\s+-\\s+(${src[t2.XRANGEPLAIN]})\\s*$`);
  createToken2("HYPHENRANGELOOSE", `^\\s*(${src[t2.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t2.XRANGEPLAINLOOSE]})\\s*$`);
  createToken2("STAR", "(<|>)?=?\\s*\\*");
  createToken2("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
  createToken2("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(re$1, re$1.exports);
var reExports = re$1.exports;
const looseOption = Object.freeze({ loose: true });
const emptyOpts = Object.freeze({});
const parseOptions$1 = (options2) => {
  if (!options2) {
    return emptyOpts;
  }
  if (typeof options2 !== "object") {
    return looseOption;
  }
  return options2;
};
var parseOptions_1 = parseOptions$1;
const numeric = /^[0-9]+$/;
const compareIdentifiers$1 = (a, b) => {
  const anum = numeric.test(a);
  const bnum = numeric.test(b);
  if (anum && bnum) {
    a = +a;
    b = +b;
  }
  return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
};
var identifiers = {
  compareIdentifiers: compareIdentifiers$1
};
const debug = debug_1;
const { MAX_LENGTH, MAX_SAFE_INTEGER } = constants;
const { safeRe: re, t } = reExports;
const parseOptions = parseOptions_1;
const { compareIdentifiers } = identifiers;
let SemVer$2 = class SemVer {
  constructor(version2, options2) {
    options2 = parseOptions(options2);
    if (version2 instanceof SemVer) {
      if (version2.loose === !!options2.loose && version2.includePrerelease === !!options2.includePrerelease) {
        return version2;
      } else {
        version2 = version2.version;
      }
    } else if (typeof version2 !== "string") {
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version2}".`);
    }
    if (version2.length > MAX_LENGTH) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH} characters`
      );
    }
    debug("SemVer", version2, options2);
    this.options = options2;
    this.loose = !!options2.loose;
    this.includePrerelease = !!options2.includePrerelease;
    const m = version2.trim().match(options2.loose ? re[t.LOOSE] : re[t.FULL]);
    if (!m) {
      throw new TypeError(`Invalid Version: ${version2}`);
    }
    this.raw = version2;
    this.major = +m[1];
    this.minor = +m[2];
    this.patch = +m[3];
    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError("Invalid major version");
    }
    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError("Invalid minor version");
    }
    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError("Invalid patch version");
    }
    if (!m[4]) {
      this.prerelease = [];
    } else {
      this.prerelease = m[4].split(".").map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id;
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num;
          }
        }
        return id;
      });
    }
    this.build = m[5] ? m[5].split(".") : [];
    this.format();
  }
  format() {
    this.version = `${this.major}.${this.minor}.${this.patch}`;
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join(".")}`;
    }
    return this.version;
  }
  toString() {
    return this.version;
  }
  compare(other) {
    debug("SemVer.compare", this.version, this.options, other);
    if (!(other instanceof SemVer)) {
      if (typeof other === "string" && other === this.version) {
        return 0;
      }
      other = new SemVer(other, this.options);
    }
    if (other.version === this.version) {
      return 0;
    }
    return this.compareMain(other) || this.comparePre(other);
  }
  compareMain(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
  }
  comparePre(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    if (this.prerelease.length && !other.prerelease.length) {
      return -1;
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1;
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0;
    }
    let i = 0;
    do {
      const a = this.prerelease[i];
      const b = other.prerelease[i];
      debug("prerelease compare", i, a, b);
      if (a === void 0 && b === void 0) {
        return 0;
      } else if (b === void 0) {
        return 1;
      } else if (a === void 0) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers(a, b);
      }
    } while (++i);
  }
  compareBuild(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    let i = 0;
    do {
      const a = this.build[i];
      const b = other.build[i];
      debug("build compare", i, a, b);
      if (a === void 0 && b === void 0) {
        return 0;
      } else if (b === void 0) {
        return 1;
      } else if (a === void 0) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers(a, b);
      }
    } while (++i);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(release, identifier, identifierBase) {
    if (release.startsWith("pre")) {
      if (!identifier && identifierBase === false) {
        throw new Error("invalid increment argument: identifier is empty");
      }
      if (identifier) {
        const match = `-${identifier}`.match(this.options.loose ? re[t.PRERELEASELOOSE] : re[t.PRERELEASE]);
        if (!match || match[1] !== identifier) {
          throw new Error(`invalid identifier: ${identifier}`);
        }
      }
    }
    switch (release) {
      case "premajor":
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor = 0;
        this.major++;
        this.inc("pre", identifier, identifierBase);
        break;
      case "preminor":
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor++;
        this.inc("pre", identifier, identifierBase);
        break;
      case "prepatch":
        this.prerelease.length = 0;
        this.inc("patch", identifier, identifierBase);
        this.inc("pre", identifier, identifierBase);
        break;
      case "prerelease":
        if (this.prerelease.length === 0) {
          this.inc("patch", identifier, identifierBase);
        }
        this.inc("pre", identifier, identifierBase);
        break;
      case "release":
        if (this.prerelease.length === 0) {
          throw new Error(`version ${this.raw} is not a prerelease`);
        }
        this.prerelease.length = 0;
        break;
      case "major":
        if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
          this.major++;
        }
        this.minor = 0;
        this.patch = 0;
        this.prerelease = [];
        break;
      case "minor":
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++;
        }
        this.patch = 0;
        this.prerelease = [];
        break;
      case "patch":
        if (this.prerelease.length === 0) {
          this.patch++;
        }
        this.prerelease = [];
        break;
      case "pre": {
        const base = Number(identifierBase) ? 1 : 0;
        if (this.prerelease.length === 0) {
          this.prerelease = [base];
        } else {
          let i = this.prerelease.length;
          while (--i >= 0) {
            if (typeof this.prerelease[i] === "number") {
              this.prerelease[i]++;
              i = -2;
            }
          }
          if (i === -1) {
            if (identifier === this.prerelease.join(".") && identifierBase === false) {
              throw new Error("invalid increment argument: identifier already exists");
            }
            this.prerelease.push(base);
          }
        }
        if (identifier) {
          let prerelease = [identifier, base];
          if (identifierBase === false) {
            prerelease = [identifier];
          }
          if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = prerelease;
            }
          } else {
            this.prerelease = prerelease;
          }
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${release}`);
    }
    this.raw = this.format();
    if (this.build.length) {
      this.raw += `+${this.build.join(".")}`;
    }
    return this;
  }
};
var semver = SemVer$2;
const SemVer$1 = semver;
const compare$1 = (a, b, loose) => new SemVer$1(a, loose).compare(new SemVer$1(b, loose));
var compare_1 = compare$1;
const compare = compare_1;
const eq = (a, b, loose) => compare(a, b, loose) === 0;
var eq_1 = eq;
const equalVersion = /* @__PURE__ */ getDefaultExportFromCjs(eq_1);
const SemVer2 = semver;
const parse$1 = (version2, options2, throwErrors = false) => {
  if (version2 instanceof SemVer2) {
    return version2;
  }
  try {
    return new SemVer2(version2, options2);
  } catch (er) {
    if (!throwErrors) {
      return null;
    }
    throw er;
  }
};
var parse_1 = parse$1;
const parse = parse_1;
const valid = (version2, options2) => {
  const v = parse(version2, options2);
  return v ? v.version : null;
};
var valid_1 = valid;
const validVersion = /* @__PURE__ */ getDefaultExportFromCjs(valid_1);
var __defProp = Object.defineProperty;
var __decorateClass = (decorators, target, key, kind) => {
  var result = void 0;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(target, key, result) || result;
  if (result) __defProp(target, key, result);
  return result;
};
const _KeyShares = class _KeyShares2 {
  shares;
  constructor(shares = []) {
    this.shares = [...shares];
  }
  /**
   * Add a single KeyShares item to the collection.
   * @param keySharesItem The KeyShares item to add.
   */
  add(keySharesItem) {
    this.shares.push(keySharesItem);
  }
  list() {
    return this.shares;
  }
  /**
   * Validate the KeyShares instance using class-validator.
   * @returns The validation result.
   */
  validate() {
    validateSync(this);
  }
  /**
   * Converts the KeyShares instance to a JSON string.
   * @returns The JSON string representation of the KeyShares instance.
   */
  toJson() {
    return JSON.stringify(
      {
        version: `v1.1.0`,
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        shares: this.shares.length > 0 ? this.shares : null
      },
      null,
      2
    );
  }
  /**
   * Initialize the KeyShares instance from JSON or object data.
   * @param content The JSON string or object to initialize from.
   * @returns The KeyShares instance.
   * @throws Error if the version is incompatible or the shares array is invalid.
   */
  static async fromJson(content) {
    const body = typeof content === "string" ? JSON.parse(content) : content;
    if (!validVersion(body.version)) {
      throw new SSVKeysException(
        `The file for keyshares must contain a version mark provided by ssv-keys.`
      );
    }
    if (!equalVersion(body.version, "v1.1.0") && !equalVersion(body.version, "v1.2.0")) {
      throw new SSVKeysException(
        `The keyshares file you are attempting to reuse does not have the same version (v1.1.0 or v1.2.0) as supported by ssv-keys`
      );
    }
    const instance = new _KeyShares2();
    instance.shares = [];
    if (Array.isArray(body.shares)) {
      for (const item of body.shares) {
        instance.shares.push(await KeySharesItem.fromJson(item));
      }
    } else {
      instance.shares.push(await KeySharesItem.fromJson(body));
    }
    return instance;
  }
};
__decorateClass([
  IsOptional(),
  ValidateNested({ each: true })
], _KeyShares.prototype, "shares");
let KeyShares = _KeyShares;
const validateSharesPreRegistration = async (config2, { keyshares, operatorIds }) => {
  const operators = await config2.api.getOperators({ operatorIds });
  const shares = await validateKeysharesJSON({
    account: config2.walletClient.account.address,
    operators,
    keyshares
  });
  const statuses = await Promise.all(
    shares.map((share) => {
      return config2.api.getValidator({ id: share.data.publicKey }).then((res) => [share, Boolean(res)]).catch(() => [share, false]);
    })
  );
  if (statuses.every(([, isRegistered]) => isRegistered)) {
    throw new Error("All validators are already registered");
  }
  const nonce = await config2.api.getOwnerNonce({ owner: config2.walletClient.account.address }).then((nonce2) => {
    if (!nonce2) throw new Error("Failed to get owner nonce");
    return Number(nonce2);
  });
  let i = 0;
  const sharesWithStatuses = statuses.reduce(
    (acc, [share, isRegistered]) => {
      if (isRegistered) {
        acc.registered.push(share);
      } else {
        const validNonce = nonce + i === share.data.ownerNonce;
        if (validNonce) i++;
        if (validNonce) {
          acc.available.push(share);
        } else {
          acc.incorrect.push(share);
        }
      }
      return acc;
    },
    { available: [], registered: [], incorrect: [] }
  );
  if (!sharesWithStatuses.available.length) {
    throw new Error(
      `No available keyshares to register. ${sharesWithStatuses.incorrect.length} keyshares have incorrect nonce and ${sharesWithStatuses.registered.length} are already registered`
    );
  }
  const limit = await config2.contract.ssv.read.getValidatorsPerOperatorLimit();
  for (const operator of operators) {
    if (!await canAccountUseOperator(config2, operator, config2.walletClient.account.address)) {
      throw new Error(`Operator ${operator.id} is private and the account is not whitelisted`);
    }
    if (Number(operator.validatorCount) + sharesWithStatuses.available.length > limit) {
      throw new Error(`Operator ${operator.id} has reached the limit of ${limit} validators`);
    }
  }
  return sharesWithStatuses;
};
const validateKeysharesJSON = async ({
  account,
  operators,
  keyshares
}) => {
  const shares = (await KeyShares.fromJson(keyshares)).list();
  ensureNoKeysharesErrors(shares);
  ensureValidatorsUniqueness(shares);
  validateConsistentOperatorPublicKeys(shares, operators);
  await Promise.all(
    shares.map(
      (share) => share.validateSingleShares(share.payload.sharesData, {
        ownerAddress: account,
        ownerNonce: share.data.ownerNonce || 0,
        publicKey: share.data.publicKey || ""
      })
    )
  );
  const shareOperatorIds = validateConsistentOperatorIds(shares);
  const operatorIds = sortNumbers(operators.map((operator) => Number(operator.id)));
  if (!isEqual(sortNumbers(shareOperatorIds), sortNumbers(operatorIds))) {
    throw new KeysharesValidationError(KeysharesValidationErrors.ClusterMismatch);
  }
  return shares;
};
const ssvKeys = new SSVKeys();
const createAndEncryptShares = async (privateKey, operators) => {
  const threshold = await ssvKeys.createThreshold(privateKey, operators);
  const encryptedShares = await ssvKeys.encryptShares(operators, threshold.shares);
  return {
    threshold,
    encryptedShares
  };
};
const generateKeyShares = async (args) => {
  const keystores = Array.isArray(args.keystore) ? args.keystore : [args.keystore];
  const shares = [];
  for (let i = 0; i < keystores.length; i++) {
    const keystore = keystores[i];
    const extracted = await ssvKeys.extractKeys(keystore, args.keystore_password);
    const operators = args.operator_keys.map((key, index) => ({
      id: args.operator_ids[index],
      operatorKey: key
    }));
    const { threshold, encryptedShares } = await createAndEncryptShares(
      extracted.privateKey,
      operators
    );
    shares.push(
      await new KeySharesItem().buildPayload(
        {
          publicKey: threshold.publicKey,
          operators,
          encryptedShares
        },
        {
          ownerAddress: args.owner_address,
          ownerNonce: args.nonce + i,
          privateKey: extracted.privateKey
        }
      )
    );
  }
  return shares;
};
const getOperatorCapacity = async (config2, operatorId) => {
  const [operator, limit] = await Promise.all([
    config2.api.getOperator({
      id: operatorId
    }),
    config2.contract.ssv.read.getValidatorsPerOperatorLimit()
  ]);
  if (!operator) return 0;
  return limit - Number(operator.validatorCount);
};
const createUtils = (config2) => ({
  generateKeyShares,
  validateKeysharesJSON,
  validateSharesPreRegistration: validateSharesPreRegistration.bind(null, config2),
  getOperatorCapacity: getOperatorCapacity.bind(null, config2),
  getClusterBalance: getClusterBalance.bind(null, config2)
});
class SSVSDK {
  config;
  clusters;
  operators;
  api;
  contract;
  utils;
  constructor(props) {
    this.config = isConfig(props) ? props : createConfig(props);
    this.clusters = createClusterManager(this.config);
    this.operators = createOperatorManager(this.config);
    this.api = this.config.api;
    this.contract = this.config.contract;
    this.utils = createUtils(this.config);
  }
}
export {
  KeySharesItem,
  SSVKeys,
  SSVSDK,
  chainIds,
  G as chains,
  contracts,
  createClusterManager,
  createConfig,
  createContractInteractions,
  createOperatorManager,
  createQueries,
  createReader,
  createSSVAPI,
  createUtils,
  createWriter,
  getCluster,
  getClusterBalance$1 as getClusterBalance,
  getClusterSnapshot,
  getClusters,
  getOperator,
  getOperators,
  getOwnerNonce,
  getQueries,
  getValidator,
  getValidators,
  globals,
  graph_endpoints,
  F as hoodi,
  isConfig,
  H as networks,
  registerValidatorsByClusterSizeLimits,
  rest_endpoints
};
