"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require$$0 = require("fs");
const require$$1 = require("path");
const require$$2 = require("os");
const crypto$1 = require("crypto");
const config$1 = require("./config-DCm0t2Z2.js");
const lodashEs = require("lodash-es");
const viem = require("viem");
const graphqlRequest = require("graphql-request");
const KeyShares = require("./KeyShares-D053gZhF.js");
var main = { exports: {} };
const version$1 = "16.6.1";
const require$$4 = {
  version: version$1
};
const fs = require$$0;
const path = require$$1;
const os = require$$2;
const crypto = crypto$1;
const packageJson = require$$4;
const version = packageJson.version;
const LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
function parse(src) {
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
  if (process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0) {
    return process.env.DOTENV_KEY;
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
    possibleVaultPath = path.resolve(process.cwd(), ".env.vault");
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
  const debug = Boolean(options2 && options2.debug);
  const quiet = options2 && "quiet" in options2 ? options2.quiet : true;
  if (debug || !quiet) {
    _log("Loading env from encrypted .env.vault");
  }
  const parsed = DotenvModule._parseVault(options2);
  let processEnv = process.env;
  if (options2 && options2.processEnv != null) {
    processEnv = options2.processEnv;
  }
  DotenvModule.populate(processEnv, parsed, options2);
  return { parsed };
}
function configDotenv(options2) {
  const dotenvPath = path.resolve(process.cwd(), ".env");
  let encoding = "utf8";
  const debug = Boolean(options2 && options2.debug);
  const quiet = options2 && "quiet" in options2 ? options2.quiet : true;
  if (options2 && options2.encoding) {
    encoding = options2.encoding;
  } else {
    if (debug) {
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
      if (debug) {
        _debug(`Failed to load ${path2} ${e.message}`);
      }
      lastError = e;
    }
  }
  let processEnv = process.env;
  if (options2 && options2.processEnv != null) {
    processEnv = options2.processEnv;
  }
  DotenvModule.populate(processEnv, parsedAll, options2);
  if (debug || !quiet) {
    const keysCount = Object.keys(parsedAll).length;
    const shortPaths = [];
    for (const filePath of optionPaths) {
      try {
        const relative = path.relative(process.cwd(), filePath);
        shortPaths.push(relative);
      } catch (e) {
        if (debug) {
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
  const debug = Boolean(options2 && options2.debug);
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
      if (debug) {
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
  parse,
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
if (process.env.DOTENV_CONFIG_ENCODING != null) {
  options.encoding = process.env.DOTENV_CONFIG_ENCODING;
}
if (process.env.DOTENV_CONFIG_PATH != null) {
  options.path = process.env.DOTENV_CONFIG_PATH;
}
if (process.env.DOTENV_CONFIG_QUIET != null) {
  options.quiet = process.env.DOTENV_CONFIG_QUIET;
}
if (process.env.DOTENV_CONFIG_DEBUG != null) {
  options.debug = process.env.DOTENV_CONFIG_DEBUG;
}
if (process.env.DOTENV_CONFIG_OVERRIDE != null) {
  options.override = process.env.DOTENV_CONFIG_OVERRIDE;
}
if (process.env.DOTENV_CONFIG_DOTENV_KEY != null) {
  options.DOTENV_KEY = process.env.DOTENV_CONFIG_DOTENV_KEY;
}
var envOptions = options;
const re = /^dotenv_config_(encoding|path|quiet|debug|override|DOTENV_KEY)=(.+)$/;
var cliOptions = function optionMatcher(args) {
  const options2 = args.reduce(function(acc, cur) {
    const matches = cur.match(re);
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
      cliOptions(process.argv)
    )
  );
})();
var ClusterFeeAssetTypes = /* @__PURE__ */ ((ClusterFeeAssetTypes2) => {
  ClusterFeeAssetTypes2["Eth"] = "ETH";
  ClusterFeeAssetTypes2["Ssv"] = "SSV";
  return ClusterFeeAssetTypes2;
})(ClusterFeeAssetTypes || {});
const GetClusterSnapshotDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetClusterSnapshot" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "cluster" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "active" } }, { "kind": "Field", "name": { "kind": "Name", "value": "validatorCount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "balance" } }, { "kind": "Field", "name": { "kind": "Name", "value": "index" } }, { "kind": "Field", "name": { "kind": "Name", "value": "networkFeeIndex" } }, { "kind": "Field", "name": { "kind": "Name", "value": "effectiveBalance" } }] } }] } }] };
const GetClusterDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetCluster" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "cluster" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "owner" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "feeAsset" } }, { "kind": "Field", "name": { "kind": "Name", "value": "active" } }, { "kind": "Field", "name": { "kind": "Name", "value": "validatorCount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "balance" } }, { "kind": "Field", "name": { "kind": "Name", "value": "index" } }, { "kind": "Field", "name": { "kind": "Name", "value": "networkFeeIndex" } }, { "kind": "Field", "name": { "kind": "Name", "value": "operatorIds" } }, { "kind": "Field", "name": { "kind": "Name", "value": "effectiveBalance" } }] } }] } }] };
const GetClustersDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetClusters" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "owner" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "clusters" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "where" }, "value": { "kind": "ObjectValue", "fields": [{ "kind": "ObjectField", "name": { "kind": "Name", "value": "owner" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "owner" } } }] } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "feeAsset" } }, { "kind": "Field", "name": { "kind": "Name", "value": "active" } }, { "kind": "Field", "name": { "kind": "Name", "value": "validatorCount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "balance" } }, { "kind": "Field", "name": { "kind": "Name", "value": "index" } }, { "kind": "Field", "name": { "kind": "Name", "value": "networkFeeIndex" } }, { "kind": "Field", "name": { "kind": "Name", "value": "operatorIds" } }, { "kind": "Field", "name": { "kind": "Name", "value": "effectiveBalance" } }] } }] } }] };
const GetOwnerNonceDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetOwnerNonce" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "owner" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "account" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "owner" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "nonce" } }] } }] } }] };
const GetOwnerNonceByBlockDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetOwnerNonceByBlock" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "owner" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "block" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Int" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "account" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "owner" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "block" }, "value": { "kind": "ObjectValue", "fields": [{ "kind": "ObjectField", "name": { "kind": "Name", "value": "number" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "block" } } }] } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "nonce" } }] } }] } }] };
const GetOperatorDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetOperator" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "operator" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "publicKey" } }, { "kind": "Field", "name": { "kind": "Name", "value": "validatorCount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "isPrivate" } }, { "kind": "Field", "name": { "kind": "Name", "value": "whitelistedContract" } }, { "kind": "Field", "name": { "kind": "Name", "value": "whitelisted" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }] } }] } }] } }] };
const GetOperatorsDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetOperators" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "operatorIds" } }, "type": { "kind": "NonNullType", "type": { "kind": "ListType", "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "operators" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "where" }, "value": { "kind": "ObjectValue", "fields": [{ "kind": "ObjectField", "name": { "kind": "Name", "value": "id_in" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "operatorIds" } } }] } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "publicKey" } }, { "kind": "Field", "name": { "kind": "Name", "value": "validatorCount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "isPrivate" } }, { "kind": "Field", "name": { "kind": "Name", "value": "whitelistedContract" } }, { "kind": "Field", "name": { "kind": "Name", "value": "fee" } }, { "kind": "Field", "name": { "kind": "Name", "value": "ssvFee" } }, { "kind": "Field", "name": { "kind": "Name", "value": "whitelisted" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }] } }] } }] } }] };
const GetValidatorsDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetValidators" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "ids" } }, "type": { "kind": "NonNullType", "type": { "kind": "ListType", "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Bytes" } } } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "validators" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "where" }, "value": { "kind": "ObjectValue", "fields": [{ "kind": "ObjectField", "name": { "kind": "Name", "value": "id_in" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "ids" } } }] } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }] } }] } }] };
const GetValidatorDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetValidator" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "validator" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }] } }] } }] };
const GetClusterBalanceDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetClusterBalance" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "clusterId" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "daoAddress" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "operatorIds" } }, "type": { "kind": "NonNullType", "type": { "kind": "ListType", "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "_meta" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "block" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "number" } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "daovalues" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "daoAddress" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "networkFee" } }, { "kind": "Field", "name": { "kind": "Name", "value": "networkFeeIndex" } }, { "kind": "Field", "name": { "kind": "Name", "value": "networkFeeIndexBlockNumber" } }, { "kind": "Field", "name": { "kind": "Name", "value": "networkFeeSSV" } }, { "kind": "Field", "name": { "kind": "Name", "value": "networkFeeIndexSSV" } }, { "kind": "Field", "name": { "kind": "Name", "value": "networkFeeIndexBlockNumberSSV" } }, { "kind": "Field", "name": { "kind": "Name", "value": "liquidationThreshold" } }, { "kind": "Field", "name": { "kind": "Name", "value": "liquidationThresholdSSV" } }, { "kind": "Field", "name": { "kind": "Name", "value": "minimumLiquidationCollateral" } }, { "kind": "Field", "name": { "kind": "Name", "value": "minimumLiquidationCollateralSSV" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "operators" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "where" }, "value": { "kind": "ObjectValue", "fields": [{ "kind": "ObjectField", "name": { "kind": "Name", "value": "id_in" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "operatorIds" } } }] } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "fee" } }, { "kind": "Field", "name": { "kind": "Name", "value": "feeIndex" } }, { "kind": "Field", "name": { "kind": "Name", "value": "feeIndexBlockNumber" } }, { "kind": "Field", "name": { "kind": "Name", "value": "ssvFee" } }, { "kind": "Field", "name": { "kind": "Name", "value": "ssvFeeIndex" } }, { "kind": "Field", "name": { "kind": "Name", "value": "ssvFeeIndexBlockNumber" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "cluster" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "clusterId" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "feeAsset" } }, { "kind": "Field", "name": { "kind": "Name", "value": "validatorCount" } }, { "kind": "Field", "name": { "kind": "Name", "value": "networkFeeIndex" } }, { "kind": "Field", "name": { "kind": "Name", "value": "index" } }, { "kind": "Field", "name": { "kind": "Name", "value": "balance" } }, { "kind": "Field", "name": { "kind": "Name", "value": "effectiveBalance" } }] } }] } }] };
const GetDaoValuesDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetDaoValues" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "daoAddress" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "daovalues" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "daoAddress" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "networkFee" } }, { "kind": "Field", "name": { "kind": "Name", "value": "networkFeeIndex" } }, { "kind": "Field", "name": { "kind": "Name", "value": "networkFeeIndexBlockNumber" } }, { "kind": "Field", "name": { "kind": "Name", "value": "networkFeeSSV" } }, { "kind": "Field", "name": { "kind": "Name", "value": "networkFeeIndexSSV" } }, { "kind": "Field", "name": { "kind": "Name", "value": "networkFeeIndexBlockNumberSSV" } }, { "kind": "Field", "name": { "kind": "Name", "value": "liquidationThreshold" } }, { "kind": "Field", "name": { "kind": "Name", "value": "liquidationThresholdSSV" } }, { "kind": "Field", "name": { "kind": "Name", "value": "minimumLiquidationCollateral" } }, { "kind": "Field", "name": { "kind": "Name", "value": "minimumLiquidationCollateralSSV" } }] } }] } }] };
const getOwnerNonce = (client, args) => {
  const document = typeof args.block === "number" ? GetOwnerNonceByBlockDocument : GetOwnerNonceDocument;
  return client.request(document, args).then((r) => r.account?.nonce || "0").catch(() => "0");
};
const toSolidityCluster = (client, args) => client.request(GetClusterSnapshotDocument, args).then((res) => res.cluster);
const getCluster = (client, args) => client.request(GetClusterDocument, args).then((res) => res.cluster);
const getClusters = (client, args) => client.request(GetClustersDocument, args).then((res) => res.clusters);
const getOperator = (client, args) => client.request(GetOperatorDocument, args).then((res) => {
  if (!res.operator) return null;
  return {
    ...res.operator,
    publicKey: config$1.decodeOperatorPublicKey(res.operator.publicKey),
    whitelisted: res.operator.whitelisted.map((v) => v.id)
  };
});
const getOperators = (client, args) => client.request(GetOperatorsDocument, args).then(
  (res) => res.operators.map((o) => ({
    ...o,
    publicKey: config$1.decodeOperatorPublicKey(o.publicKey),
    whitelisted: o.whitelisted.map((v) => v.id)
  }))
);
const getValidators = (client, args) => client.request(GetValidatorsDocument, args).then((res) => res.validators);
const getValidator = (client, args) => client.request(GetValidatorDocument, args).then((res) => res.validator);
const getClusterBalance$1 = (client, args) => client.request(GetClusterBalanceDocument, args);
const getDaoValues = (client, args) => client.request(GetDaoValuesDocument, args).then((res) => res.daovalues);
const getQueries = (client) => ({
  getOwnerNonce: getOwnerNonce.bind(null, client),
  toSolidityCluster: toSolidityCluster.bind(null, client),
  getCluster: getCluster.bind(null, client),
  getClusters: getClusters.bind(null, client),
  getOperator: getOperator.bind(null, client),
  getOperators: getOperators.bind(null, client),
  getValidators: getValidators.bind(null, client),
  getValidator: getValidator.bind(null, client),
  getClusterBalance: getClusterBalance$1.bind(null, client),
  getDaoValues: getDaoValues.bind(null, client)
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
    name: "AlreadyVoted",
    type: "error"
  },
  {
    inputs: [],
    name: "ApprovalNotWithinTimeframe",
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
    name: "ClusterDoesNotExist",
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
    name: "EBBelowMinimum",
    type: "error"
  },
  {
    inputs: [],
    name: "EBExceedsMaximum",
    type: "error"
  },
  {
    inputs: [],
    name: "ETHTransferFailed",
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
    name: "FutureBlockNumber",
    type: "error"
  },
  {
    inputs: [],
    name: "IncorrectClusterState",
    type: "error"
  },
  {
    inputs: [],
    name: "IncorrectClusterVersion",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "operatorVersion",
        type: "uint8"
      }
    ],
    name: "IncorrectOperatorVersion",
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
    name: "InvalidProof",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidPublicKeyLength",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidQuorum",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidToken",
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
    name: "LegacyOperatorFeeDeclarationInvalid",
    type: "error"
  },
  {
    inputs: [],
    name: "MaxRequestsAmountReached",
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
    name: "NotCSSV",
    type: "error"
  },
  {
    inputs: [],
    name: "NotOracle",
    type: "error"
  },
  {
    inputs: [],
    name: "NothingToClaim",
    type: "error"
  },
  {
    inputs: [],
    name: "NothingToWithdraw",
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
    name: "OracleAlreadyAssigned",
    type: "error"
  },
  {
    inputs: [],
    name: "OracleHasZeroWeight",
    type: "error"
  },
  {
    inputs: [],
    name: "PublicKeysSharesLengthMismatch",
    type: "error"
  },
  {
    inputs: [],
    name: "RootNotFound",
    type: "error"
  },
  {
    inputs: [],
    name: "SameFeeChangeNotAllowed",
    type: "error"
  },
  {
    inputs: [],
    name: "StakeTooLow",
    type: "error"
  },
  {
    inputs: [],
    name: "StaleBlockNumber",
    type: "error"
  },
  {
    inputs: [],
    name: "StaleUpdate",
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
    name: "UnstakeAmountExceedsBalance",
    type: "error"
  },
  {
    inputs: [],
    name: "UpdateTooFrequent",
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
    name: "ZeroAddress",
    type: "error"
  },
  {
    inputs: [],
    name: "ZeroAddressNotAllowed",
    type: "error"
  },
  {
    inputs: [],
    name: "ZeroAmount",
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
    name: "accEthPerShare",
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
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "cooldownDuration",
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
    name: "getActiveOracleIds",
    outputs: [
      {
        internalType: "uint32[4]",
        name: "",
        type: "uint32[4]"
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
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
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
    name: "getBalanceSSV",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
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
    name: "getBurnRateSSV",
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
        name: "owner",
        type: "address"
      },
      {
        internalType: "uint64[]",
        name: "operatorIds",
        type: "uint64[]"
      }
    ],
    name: "getClusterAssetType",
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
        internalType: "uint64",
        name: "blockNum",
        type: "uint64"
      }
    ],
    name: "getCommittedRoot",
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
    name: "getEffectiveBalance",
    outputs: [
      {
        internalType: "uint32",
        name: "effectiveBalance",
        type: "uint32"
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
    name: "getLiquidationThresholdPeriodSSV",
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
    name: "getMaximumOperatorFeeSSV",
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
    name: "getMinimumLiquidationCollateralSSV",
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
    name: "getMinimumOperatorEthFee",
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
    name: "getNetworkEarningsSSV",
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
    name: "getNetworkFeeSSV",
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
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256"
          },
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "address",
            name: "whitelistedAddress",
            type: "address"
          },
          {
            internalType: "bool",
            name: "isPrivate",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "isActive",
            type: "bool"
          }
        ],
        internalType: "struct ISSVViewsTypes.OperatorData",
        name: "",
        type: "tuple"
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
    name: "getOperatorByIdSSV",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256"
          },
          {
            internalType: "uint32",
            name: "validatorCount",
            type: "uint32"
          },
          {
            internalType: "address",
            name: "whitelistedAddress",
            type: "address"
          },
          {
            internalType: "bool",
            name: "isPrivate",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "isActive",
            type: "bool"
          }
        ],
        internalType: "struct ISSVViewsTypes.OperatorData",
        name: "",
        type: "tuple"
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
        components: [
          {
            internalType: "bool",
            name: "isFeeDeclared",
            type: "bool"
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256"
          },
          {
            internalType: "uint64",
            name: "approvalBeginTime",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "approvalEndTime",
            type: "uint64"
          }
        ],
        internalType: "struct ISSVViewsTypes.OperatorDeclaredFeeData",
        name: "",
        type: "tuple"
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
        name: "id",
        type: "uint64"
      }
    ],
    name: "getOperatorEarningsSSV",
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
        components: [
          {
            internalType: "uint64",
            name: "declarePeriod",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "executePeriod",
            type: "uint64"
          }
        ],
        internalType: "struct ISSVViewsTypes.OperatorFeePeriodsData",
        name: "",
        type: "tuple"
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
    name: "getOperatorFeeSSV",
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
        internalType: "uint32",
        name: "oracleId",
        type: "uint32"
      }
    ],
    name: "getOracle",
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
    inputs: [
      {
        internalType: "uint32",
        name: "oracleId",
        type: "uint32"
      }
    ],
    name: "getOracleWeight",
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
    name: "getQuorumBps",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
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
    name: "isLiquidatableSSV",
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
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "pendingUnstake",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "unlockTime",
            type: "uint256"
          }
        ],
        internalType: "struct ISSVViewsTypes.UnstakeRequestsData[]",
        name: "",
        type: "tuple[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "previewClaimableEth",
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
        name: "user",
        type: "address"
      }
    ],
    name: "stakedBalanceOf",
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
    name: "stakingEthPoolBalance",
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
    name: "totalStaked",
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
    name: "AlreadyVoted",
    type: "error"
  },
  {
    inputs: [],
    name: "ApprovalNotWithinTimeframe",
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
    name: "ClusterDoesNotExist",
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
    name: "EBBelowMinimum",
    type: "error"
  },
  {
    inputs: [],
    name: "EBExceedsMaximum",
    type: "error"
  },
  {
    inputs: [],
    name: "ETHTransferFailed",
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
    name: "FutureBlockNumber",
    type: "error"
  },
  {
    inputs: [],
    name: "IncorrectClusterState",
    type: "error"
  },
  {
    inputs: [],
    name: "IncorrectClusterVersion",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "operatorVersion",
        type: "uint8"
      }
    ],
    name: "IncorrectOperatorVersion",
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
    name: "InvalidProof",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidPublicKeyLength",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidQuorum",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidToken",
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
    name: "LegacyOperatorFeeDeclarationInvalid",
    type: "error"
  },
  {
    inputs: [],
    name: "MaxPrecisionExceeded",
    type: "error"
  },
  {
    inputs: [],
    name: "MaxRequestsAmountReached",
    type: "error"
  },
  {
    inputs: [],
    name: "MaxValueExceeded",
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
    name: "NotCSSV",
    type: "error"
  },
  {
    inputs: [],
    name: "NotOracle",
    type: "error"
  },
  {
    inputs: [],
    name: "NothingToClaim",
    type: "error"
  },
  {
    inputs: [],
    name: "NothingToWithdraw",
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
    name: "OracleAlreadyAssigned",
    type: "error"
  },
  {
    inputs: [],
    name: "OracleHasZeroWeight",
    type: "error"
  },
  {
    inputs: [],
    name: "PublicKeysSharesLengthMismatch",
    type: "error"
  },
  {
    inputs: [],
    name: "RootNotFound",
    type: "error"
  },
  {
    inputs: [],
    name: "SameFeeChangeNotAllowed",
    type: "error"
  },
  {
    inputs: [],
    name: "StakeTooLow",
    type: "error"
  },
  {
    inputs: [],
    name: "StaleBlockNumber",
    type: "error"
  },
  {
    inputs: [],
    name: "StaleUpdate",
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
    name: "UnstakeAmountExceedsBalance",
    type: "error"
  },
  {
    inputs: [],
    name: "UpdateTooFrequent",
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
    name: "ZeroAddress",
    type: "error"
  },
  {
    inputs: [],
    name: "ZeroAddressNotAllowed",
    type: "error"
  },
  {
    inputs: [],
    name: "ZeroAmount",
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
        indexed: true,
        internalType: "uint64",
        name: "blockNum",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "effectiveBalance",
        type: "uint32"
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
    name: "ClusterBalanceUpdated",
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
        indexed: false,
        internalType: "uint256",
        name: "ethDeposited",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ssvRefunded",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "effectiveBalance",
        type: "uint32"
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
    name: "ClusterMigratedToETH",
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
        name: "newCooldownDuration",
        type: "uint64"
      }
    ],
    name: "CooldownDurationUpdated",
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
        indexed: true,
        internalType: "address",
        name: "token",
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
        name: "amount",
        type: "uint256"
      }
    ],
    name: "ERC20Rescued",
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
        internalType: "uint256",
        name: "newFeesWei",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "accEthPerShare",
        type: "uint256"
      }
    ],
    name: "FeesSynced",
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
    name: "LiquidationThresholdPeriodSSVUpdated",
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
    name: "MinimumLiquidationCollateralSSVUpdated",
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
        indexed: false,
        internalType: "uint256",
        name: "minFee",
        type: "uint256"
      }
    ],
    name: "MinimumOperatorEthFeeUpdated",
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
    name: "NetworkFeeUpdatedSSV",
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
        internalType: "uint256",
        name: "maxFee",
        type: "uint256"
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
        internalType: "uint32",
        name: "oracleId",
        type: "uint32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldOracle",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOracle",
        type: "address"
      }
    ],
    name: "OracleReplaced",
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
        indexed: false,
        internalType: "uint16",
        name: "newQuorum",
        type: "uint16"
      }
    ],
    name: "QuorumUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "RewardsClaimed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "pending",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "accrued",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "userIndex",
        type: "uint256"
      }
    ],
    name: "RewardsSettled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "blockNum",
        type: "uint64"
      }
    ],
    name: "RootCommitted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "version",
        type: "string"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      }
    ],
    name: "SSVNetworkUpgradeBlock",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Staked",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "unlockTime",
        type: "uint256"
      }
    ],
    name: "UnstakeRequested",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "UnstakedWithdrawn",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "blockNum",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "accumulatedWeight",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quorum",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "oracleId",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "address",
        name: "oracle",
        type: "address"
      }
    ],
    name: "WeightedRootProposed",
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
    stateMutability: "payable",
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
    inputs: [],
    name: "claimEthRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32"
      },
      {
        internalType: "uint64",
        name: "blockNum",
        type: "uint64"
      }
    ],
    name: "commitRoot",
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
    stateMutability: "payable",
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
        components: [
          {
            internalType: "uint64",
            name: "minimumBlocksBeforeLiquidation",
            type: "uint64"
          },
          {
            internalType: "uint256",
            name: "minimumLiquidationCollateral",
            type: "uint256"
          },
          {
            internalType: "uint32",
            name: "validatorsPerOperatorLimit",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "declareOperatorFeePeriod",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "executeOperatorFeePeriod",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "operatorMaxFeeIncrease",
            type: "uint64"
          },
          {
            internalType: "uint32[4]",
            name: "defaultOracleIds",
            type: "uint32[4]"
          },
          {
            internalType: "uint16",
            name: "quorumBps",
            type: "uint16"
          }
        ],
        internalType: "struct ISSVNetwork.NetworkInitParams",
        name: "params",
        type: "tuple"
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
    name: "liquidateSSV",
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
    name: "migrateClusterToETH",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
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
    name: "onCSSVTransfer",
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
    stateMutability: "payable",
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
    stateMutability: "payable",
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
        internalType: "uint32",
        name: "oracleId",
        type: "uint32"
      },
      {
        internalType: "address",
        name: "newOracle",
        type: "address"
      }
    ],
    name: "replaceOracle",
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
    name: "requestUnstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      },
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
    name: "rescueERC20",
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
        internalType: "uint16",
        name: "quorum",
        type: "uint16"
      }
    ],
    name: "setQuorumBps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "duration",
        type: "uint64"
      }
    ],
    name: "setUnstakeCooldownDuration",
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
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "syncFees",
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
        name: "blockNum",
        type: "uint64"
      },
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
      },
      {
        internalType: "uint32",
        name: "effectiveBalance",
        type: "uint32"
      },
      {
        internalType: "bytes32[]",
        name: "merkleProof",
        type: "bytes32[]"
      }
    ],
    name: "updateClusterBalance",
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
        name: "blocks",
        type: "uint64"
      }
    ],
    name: "updateLiquidationThresholdPeriodSSV",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxFee",
        type: "uint256"
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
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "updateMinimumLiquidationCollateralSSV",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minFee",
        type: "uint256"
      }
    ],
    name: "updateMinimumOperatorEthFee",
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
        internalType: "uint256",
        name: "fee",
        type: "uint256"
      }
    ],
    name: "updateNetworkFeeSSV",
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
        internalType: "uint64",
        name: "operatorId",
        type: "uint64"
      }
    ],
    name: "withdrawAllOperatorEarningsSSV",
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
    name: "withdrawAllVersionOperatorEarnings",
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
    name: "withdrawNetworkSSVEarnings",
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
    name: "withdrawOperatorEarningsSSV",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "withdrawUnlocked",
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
const paramsToArray = ({
  params,
  abiFunction
}) => {
  return config$1.stringifyBigints(
    abiFunction.inputs.reduce(
      (acc, param) => {
        if (param.name && !lodashEs.isUndefined(params[param.name])) {
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
const ABIS = [TokenABI, MainnetV4SetterABI];
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
        return viem.encodeFunctionData({
          abi,
          functionName: fn.name,
          args: paramsToArray({ params, abiFunction: fn })
        });
      };
      const func = async (options2) => {
        const { request } = await simulate(options2);
        const hash = await walletClient.writeContract(
          request
        );
        return {
          hash,
          wait: () => publicClient.waitForTransactionReceipt({ hash }).then((receipt) => ({
            ...receipt,
            events: receipt.logs.reduce(
              (acc, log) => {
                try {
                  const event = viem.decodeEventLog({
                    abi,
                    data: log.data,
                    topics: log.topics
                  });
                  acc.push(event);
                } catch {
                  for (const eventAbi of ABIS) {
                    config$1.tryCatch(() => {
                      const event = viem.decodeEventLog({
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
const isConfig = (props) => {
  return typeof props === "object" && props !== null && "publicClient" in props && "walletClient" in props && "chain" in props && "api" in props && "contractAddresses" in props && "contract" in props && "subgraph" in props && "rest" in props;
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
  const { walletClient, publicClient, extendedConfig } = config$1.configArgsSchema.parse(props);
  const hasAPIKey = Boolean(extendedConfig?.subgraph?.apiKey);
  const chainId = walletClient.chain.id;
  const chainContracts = config$1.contracts[chainId];
  const addresses = {
    setter: extendedConfig?.contracts?.setter || chainContracts.setter,
    getter: extendedConfig?.contracts?.getter || chainContracts.getter,
    token: extendedConfig?.contracts?.token || chainContracts.token
  };
  const contract = createContractInteractions({
    walletClient,
    publicClient,
    addresses
  });
  const graphEndpoint = extendedConfig?.subgraph?.endpoint || (hasAPIKey ? config$1.paid_graph_endpoints[chainId] : config$1.graph_endpoints[chainId]);
  const restEndpoint = extendedConfig?.rest?.endpoint || config$1.rest_endpoints[chainId];
  const graphQLClient = new graphqlRequest.GraphQLClient(
    graphEndpoint,
    hasAPIKey ? {
      headers: {
        Authorization: `Bearer ${extendedConfig?.subgraph?.apiKey}`
      }
    } : void 0
  );
  return {
    publicClient,
    walletClient,
    chain: walletClient.chain,
    api: {
      ...createQueries(graphQLClient),
      ...createSSVAPI(restEndpoint)
    },
    subgraph: {
      client: graphQLClient,
      endpoint: graphEndpoint
    },
    rest: {
      endpoint: restEndpoint
    },
    contractAddresses: addresses,
    contract
  };
};
const deposit = async (config2, { args: { id, amount }, ...writeOptions }) => {
  const cluster = await config2.api.getCluster({ id });
  if (!cluster) {
    throw new Error("Cluster not found");
  }
  const snapshot = config$1.toSolidityCluster(cluster);
  return config2.contract.ssv.write.deposit({
    value: amount,
    args: {
      cluster: snapshot,
      clusterOwner: cluster.owner.id,
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
      cluster: config$1.toSolidityCluster(cluster),
      clusterOwner: cluster.owner.id,
      operatorIds: cluster.operatorIds.map(BigInt)
    },
    ...writeOptions
  });
};
const liquidateSSV = async (config2, { args: { id }, ...writeOptions }) => {
  const cluster = await config2.api.getCluster({ id });
  if (!cluster) {
    throw new Error("Cluster not found");
  }
  return config2.contract.ssv.write.liquidateSSV({
    args: {
      clusterOwner: cluster.owner.id,
      operatorIds: cluster.operatorIds.map(BigInt),
      cluster: config$1.toSolidityCluster(cluster)
    },
    ...writeOptions
  });
};
const migrateClusterToETH = async (config2, { args: { id, amount }, ...writeOptions }) => {
  const cluster = await config2.api.getCluster({ id });
  if (!cluster) {
    throw new Error("Cluster not found");
  }
  return config2.contract.ssv.write.migrateClusterToETH({
    value: amount,
    args: {
      operatorIds: cluster.operatorIds.map(BigInt),
      cluster: config$1.toSolidityCluster(cluster)
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
    value: amount,
    args: {
      cluster: config$1.toSolidityCluster(cluster),
      operatorIds: cluster.operatorIds.map(BigInt)
    },
    ...writeOptions
  });
};
const registerValidators = async (config2, {
  args: { keyshares, depositAmount = 0n },
  ...writeOptions
}) => {
  const shares = keyshares.map((share) => {
    return config$1.isKeySharesItem(share) ? share.payload : share;
  });
  const operatorIds = shares[0].operatorIds;
  const clusterSize = operatorIds.length;
  const limit = config$1.registerValidatorsByClusterSizeLimits[clusterSize];
  if (!limit) {
    throw new Error(
      `Invalid number of operators in keyshares: ${clusterSize}, should be one of: ${Object.keys(config$1.registerValidatorsByClusterSizeLimits).join(", ")}`
    );
  }
  if (shares.length > limit) {
    throw new Error(
      `You can't register more than ${limit} validators in a single transaction`
    );
  }
  const clusterId = config$1.createClusterId(
    config2.walletClient.account.address,
    operatorIds
  );
  const cluster = await config2.api.getCluster({
    id: clusterId
  });
  const snapshot = cluster ? config$1.toSolidityCluster(cluster) : config$1.createEmptyCluster();
  if (shares.length === 1) {
    return config2.contract.ssv.write.registerValidator({
      value: depositAmount,
      args: {
        cluster: snapshot,
        operatorIds: operatorIds.map(BigInt),
        publicKey: shares[0].publicKey,
        sharesData: shares[0].sharesData
      },
      ...writeOptions
    });
  }
  return config2.contract.ssv.write.bulkRegisterValidator({
    value: depositAmount,
    args: {
      cluster: snapshot,
      operatorIds: operatorIds.map(BigInt),
      publicKeys: shares.map((share) => share.publicKey),
      sharesData: shares.map((share) => share.sharesData)
    },
    ...writeOptions
  });
};
const registerValidatorsRawData = async (config2, { args: { keyshares, ownerAddress } }) => {
  const shares = keyshares.map((share) => {
    return config$1.isKeySharesItem(share) ? share.payload : share;
  });
  const operatorIds = shares[0].operatorIds;
  const clusterSize = operatorIds.length;
  const limit = config$1.registerValidatorsByClusterSizeLimits[clusterSize];
  if (!limit) {
    throw new Error(
      `Invalid number of operators in keyshares: ${clusterSize}, should be one of: ${Object.keys(config$1.registerValidatorsByClusterSizeLimits).join(", ")}`
    );
  }
  if (shares.length > limit) {
    throw new Error(
      `You can't register more than ${limit} validators in a single transaction`
    );
  }
  const resolvedOwnerAddress = ownerAddress ?? config2.walletClient.account?.address;
  if (!resolvedOwnerAddress) {
    throw new Error(
      "ownerAddress is required when walletClient.account.address is not available"
    );
  }
  const clusterId = config$1.createClusterId(resolvedOwnerAddress, operatorIds);
  const cluster = await config2.api.getCluster({
    id: clusterId
  });
  const snapshot = cluster ? config$1.toSolidityCluster(cluster) : config$1.createEmptyCluster();
  if (shares.length === 1) {
    return config2.contract.ssv.write.registerValidator.getTransactionData({
      cluster: snapshot,
      operatorIds: operatorIds.map(BigInt),
      publicKey: shares[0].publicKey,
      sharesData: shares[0].sharesData
    });
  }
  return config2.contract.ssv.write.bulkRegisterValidator.getTransactionData({
    cluster: snapshot,
    operatorIds: operatorIds.map(BigInt),
    publicKeys: shares.map((share) => share.publicKey),
    sharesData: shares.map((share) => share.sharesData)
  });
};
const ssvKeys$1 = new KeyShares.SSVKeys();
const validateSharesPostRegistration = async (config2, args) => {
  const ownerAddress = args.ownerAddress ?? config2.walletClient.account?.address;
  if (!ownerAddress) {
    throw new Error(
      "ownerAddress is required when walletClient.account.address is not available"
    );
  }
  const receipt = await config2.publicClient.waitForTransactionReceipt({
    hash: args.txHash
  });
  const ownerNonce = await config2.api.getOwnerNonce({
    owner: ownerAddress,
    block: Number(receipt.blockNumber) - 1
  });
  if (lodashEs.isUndefined(ownerNonce)) {
    throw new Error("Could not fetch owner nonce");
  }
  const validatorAddedEvents = await config2.publicClient.getContractEvents({
    abi: MainnetV4SetterABI,
    address: config2.contractAddresses.setter,
    eventName: "ValidatorAdded",
    args: {
      owner: ownerAddress
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
        ownerAddress,
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
        cluster: config$1.toSolidityCluster(cluster),
        publicKey: publicKeys[0],
        operatorIds: cluster.operatorIds.map(BigInt)
      },
      ...writeOptions
    });
  }
  return config2.contract.ssv.write.bulkRemoveValidator({
    args: {
      cluster: config$1.toSolidityCluster(cluster),
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
      cluster: config$1.toSolidityCluster(cluster),
      operatorIds: cluster.operatorIds.map(BigInt)
    },
    ...writeOptions
  });
};
const createClusterManager = (config2) => ({
  deposit: deposit.bind(null, config2),
  withdraw: withdraw$1.bind(null, config2),
  liquidate: liquidateCluster.bind(null, config2),
  liquidateSSV: liquidateSSV.bind(null, config2),
  reactivate: reactivateCluster.bind(null, config2),
  migrateClusterToETH: migrateClusterToETH.bind(null, config2),
  removeValidators: removeValidators.bind(null, config2),
  setFeeRecipient: setFeeRecipient.bind(null, config2),
  exitValidators: exitValidators.bind(null, config2),
  registerValidators: registerValidators.bind(null, config2),
  registerValidatorsRawData: registerValidatorsRawData.bind(
    null,
    config2
  ),
  validateSharesPostRegistration: validateSharesPostRegistration.bind(
    null,
    config2
  )
});
const commitRoot = async (config2, { args: { merkleRoot, blockNum }, ...writeOptions }) => {
  return config2.contract.ssv.write.commitRoot({
    args: {
      merkleRoot,
      blockNum
    },
    ...writeOptions
  });
};
const updateNetworkFeeSSV = async (config2, { args: { fee }, ...writeOptions }) => {
  return config2.contract.ssv.write.updateNetworkFeeSSV({
    args: {
      fee
    },
    ...writeOptions
  });
};
const withdrawNetworkSSVEarnings = async (config2, { args: { amount }, ...writeOptions }) => {
  return config2.contract.ssv.write.withdrawNetworkSSVEarnings({
    args: {
      amount
    },
    ...writeOptions
  });
};
const createDaoManager = (config2) => ({
  commitRoot: commitRoot.bind(null, config2),
  updateNetworkFeeSSV: updateNetworkFeeSSV.bind(
    null,
    config2
  ),
  withdrawNetworkSSVEarnings: withdrawNetworkSSVEarnings.bind(
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
const withdrawOperatorEarningsSSV = async (config2, {
  args: { operatorId, amount },
  ...writeOptions
}) => {
  const balance = await config2.contract.ssv.read.getOperatorEarningsSSV({
    id: BigInt(operatorId)
  });
  const isWithdrawingAll = amount >= balance;
  if (isWithdrawingAll) {
    return config2.contract.ssv.write.withdrawAllOperatorEarningsSSV({
      args: {
        operatorId: BigInt(operatorId)
      },
      ...writeOptions
    });
  }
  return config2.contract.ssv.write.withdrawOperatorEarningsSSV({
    args: {
      operatorId: BigInt(operatorId),
      amount
    },
    ...writeOptions
  });
};
const withdrawAllOperatorEarningsSSV = async (config2, { args: { operatorId }, ...writeOptions }) => {
  return config2.contract.ssv.write.withdrawAllOperatorEarningsSSV({
    args: {
      operatorId: BigInt(operatorId)
    },
    ...writeOptions
  });
};
const withdrawAllVersionOperatorEarnings = async (config2, {
  args: { operatorId },
  ...writeOptions
}) => {
  return config2.contract.ssv.write.withdrawAllVersionOperatorEarnings({
    args: {
      operatorId: BigInt(operatorId)
    },
    ...writeOptions
  });
};
const registerOperator = async (config2, {
  args: { isPrivate, yearlyFee, publicKey },
  ...writeOptions
}) => {
  return config2.contract.ssv.write.registerOperator({
    args: {
      publicKey: viem.encodeAbiParameters(viem.parseAbiParameters("string"), [publicKey]),
      fee: config$1.roundOperatorFee(
        yearlyFee / config$1.globals.BLOCKS_PER_YEAR,
        config$1.globals.ETH_DEDUCTED_DIGITS
      ),
      setPrivate: isPrivate
    },
    ...writeOptions
  });
};
const setOperatorWhitelists = async (config2, {
  args: { operatorIds, contractAddress },
  ...writeOptions
}) => {
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
    (addr) => viem.isAddressEqual(addr, account)
  );
  if (isWhitelisted) return true;
  const hasExternalContract = Boolean(
    operator.whitelistedContract && operator.whitelistedContract !== viem.zeroAddress
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
  withdrawOperatorEarningsSSV: withdrawOperatorEarningsSSV.bind(
    null,
    config2
  ),
  withdrawAllOperatorEarningsSSV: withdrawAllOperatorEarningsSSV.bind(
    null,
    config2
  ),
  withdrawAllVersionOperatorEarnings: withdrawAllVersionOperatorEarnings.bind(
    null,
    config2
  ),
  setOperatorWhitelists: config2.contract.ssv.write.setOperatorsWhitelists,
  removeOperatorWhitelists: config2.contract.ssv.write.removeOperatorsWhitelists,
  setOperatorsPrivate: config2.contract.ssv.write.setOperatorsPrivateUnchecked,
  setOperatorsPublic: config2.contract.ssv.write.setOperatorsPublicUnchecked,
  setOperatorWhitelistingContract: setOperatorWhitelists.bind(
    null,
    config2
  ),
  removeOperatorWhitelistingContract: config2.contract.ssv.write.removeOperatorsWhitelists,
  declareOperatorFee: config2.contract.ssv.write.declareOperatorFee,
  executeOperatorFee: config2.contract.ssv.write.executeOperatorFee,
  cancelDeclaredOperatorFee: config2.contract.ssv.write.cancelDeclaredOperatorFee,
  reduceOperatorFee: config2.contract.ssv.write.reduceOperatorFee
});
const getClusterBalance = async (config2, { operatorIds, ownerAddress }) => {
  const resolvedOwnerAddress = ownerAddress ?? config2.walletClient.account?.address;
  if (!resolvedOwnerAddress) {
    throw new Error(
      "ownerAddress is required when walletClient.account.address is not available"
    );
  }
  const query = await config2.api.getClusterBalance({
    daoAddress: config2.contractAddresses.setter,
    operatorIds: operatorIds.map(String),
    clusterId: config$1.createClusterId(resolvedOwnerAddress, operatorIds)
  });
  if (!query.cluster || !query.daovalues || !query._meta) {
    throw new Error("Could not fetch cluster balance");
  }
  const isSsvCluster = query.cluster.feeAsset === ClusterFeeAssetTypes.Ssv;
  const networkFee = BigInt(
    isSsvCluster ? query.daovalues.networkFeeSSV : query.daovalues.networkFee
  );
  const networkFeeIndex = BigInt(
    isSsvCluster ? query.daovalues.networkFeeIndexSSV : query.daovalues.networkFeeIndex
  );
  const networkFeeIndexBlockNumber = BigInt(
    isSsvCluster ? query.daovalues.networkFeeIndexBlockNumberSSV : query.daovalues.networkFeeIndexBlockNumber
  );
  const minimumLiquidationCollateral = BigInt(
    isSsvCluster ? query.daovalues.minimumLiquidationCollateralSSV : query.daovalues.minimumLiquidationCollateral
  );
  const liquidationThreshold = BigInt(
    isSsvCluster ? query.daovalues.liquidationThresholdSSV : query.daovalues.liquidationThreshold
  );
  const scallingCoefficient = isSsvCluster ? config$1.globals.SSV_DEDUCTED_DIGITS : config$1.globals.ETH_DEDUCTED_DIGITS;
  const cumulativeNetworkFee = networkFeeIndex + (BigInt(query._meta.block.number) - networkFeeIndexBlockNumber) * networkFee - BigInt(query.cluster.networkFeeIndex) * scallingCoefficient;
  const cumulativeOperatorFee = query.operators.reduce(
    (acc, operator) => {
      const fee = isSsvCluster ? operator.ssvFee : operator.fee;
      const feeIndex = isSsvCluster ? operator.ssvFeeIndex : operator.feeIndex;
      const feeIndexBlockNumber = isSsvCluster ? operator.ssvFeeIndexBlockNumber : operator.feeIndexBlockNumber;
      return acc + BigInt(feeIndex) + (BigInt(query._meta.block.number) - BigInt(feeIndexBlockNumber)) * BigInt(fee);
    },
    -BigInt(query.cluster.index) * scallingCoefficient
  );
  const operatorsFee = query.operators.reduce(
    (acc, operator) => acc + BigInt(isSsvCluster ? operator.ssvFee : operator.fee),
    0n
  );
  const effectiveBalanceValidatorUnits = Number(query.cluster.effectiveBalance) / 32 * config$1.globals.VUNITS_PRECISION;
  const calculatedClusterBalance = BigInt(query.cluster.balance) - (cumulativeNetworkFee + cumulativeOperatorFee) * BigInt(effectiveBalanceValidatorUnits) / BigInt(config$1.globals.VUNITS_PRECISION) || 1n;
  const burnRate = (operatorsFee + networkFee) * BigInt(effectiveBalanceValidatorUnits) / BigInt(config$1.globals.VUNITS_PRECISION) || 1n;
  const LC = config$1.bigintMax(
    minimumLiquidationCollateral,
    burnRate * liquidationThreshold
  );
  const runway = calculatedClusterBalance - LC;
  const operationalRunway = runway / burnRate / config$1.globals.BLOCKS_PER_DAY;
  return {
    balance: calculatedClusterBalance,
    operationalRunway
  };
};
const isKeySharesPayload = (value) => {
  return !!value && typeof value === "object" && "sharesData" in value && "publicKey" in value && "operatorIds" in value;
};
const isKeySharesPayloadList = (value) => {
  return Array.isArray(value) && value.every(isKeySharesPayload);
};
const buildKeysharesFromPayloads = (payloads) => {
  const shares = payloads.map((payload) => {
    const item = new KeyShares.KeySharesItem();
    item.payload.update(payload);
    return item;
  });
  config$1.ensureValidatorsUniqueness(shares);
  return shares;
};
const validateSharesPreRegistration = async (config2, { keyshares, operatorIds, ownerAddress }) => {
  const account = ownerAddress ?? config2.walletClient.account?.address;
  if (!account) {
    throw new Error(
      "ownerAddress is required when walletClient.account.address is not available"
    );
  }
  const operators = await config2.api.getOperators({ operatorIds });
  if (operators.length !== operatorIds.length) {
    throw new config$1.KeysharesValidationError(
      config$1.KeysharesValidationErrors.OperatorDoesNotExist
    );
  }
  const usesPayloads = isKeySharesPayloadList(keyshares);
  const shares = usesPayloads ? buildKeysharesFromPayloads(keyshares) : await validateKeysharesJSON({
    account,
    operators,
    keyshares
  });
  if (usesPayloads) {
    const shareOperatorIds = config$1.validateConsistentOperatorIds(shares);
    const sortedOperatorIds = config$1.sortNumbers(
      operators.map((operator) => Number(operator.id))
    );
    if (!lodashEs.isEqual(config$1.sortNumbers(shareOperatorIds), config$1.sortNumbers(sortedOperatorIds))) {
      throw new config$1.KeysharesValidationError(
        config$1.KeysharesValidationErrors.ClusterMismatch
      );
    }
  }
  const statuses = await Promise.all(
    shares.map((share) => {
      return config2.api.getValidator({ id: share.data.publicKey }).then((res) => [share, Boolean(res)]).catch(() => [share, false]);
    })
  );
  if (statuses.every(([, isRegistered]) => isRegistered)) {
    throw new Error("All validators are already registered");
  }
  const shouldValidateNonce = shares.every(
    (share) => typeof share.data.ownerNonce === "number"
  );
  const nonce = shouldValidateNonce ? await config2.api.getOwnerNonce({ owner: account }).then((nonce2) => {
    if (!nonce2) throw new Error("Failed to get owner nonce");
    return Number(nonce2);
  }) : null;
  let i = 0;
  const sharesWithStatuses = statuses.reduce(
    (acc, [share, isRegistered]) => {
      if (isRegistered) {
        acc.registered.push(share);
      } else {
        if (!shouldValidateNonce) {
          acc.available.push(share);
          return acc;
        }
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
    if (!await canAccountUseOperator(
      config2,
      operator,
      account
    )) {
      throw new Error(
        `Operator ${operator.id} is private and the account is not whitelisted`
      );
    }
    if (Number(operator.validatorCount) + sharesWithStatuses.available.length > limit) {
      throw new Error(
        `Operator ${operator.id} has reached the limit of ${limit} validators`
      );
    }
  }
  return sharesWithStatuses;
};
const validateKeysharesJSON = async ({
  account,
  operators,
  keyshares
}) => {
  const shares = (await KeyShares.KeyShares.fromJson(keyshares)).list();
  config$1.ensureNoKeysharesErrors(shares);
  config$1.ensureValidatorsUniqueness(shares);
  config$1.validateConsistentOperatorPublicKeys(shares, operators);
  await Promise.all(
    shares.map(
      (share) => share.validateSingleShares(share.payload.sharesData, {
        ownerAddress: account,
        ownerNonce: share.data.ownerNonce || 0,
        publicKey: share.data.publicKey || ""
      })
    )
  );
  const shareOperatorIds = config$1.validateConsistentOperatorIds(shares);
  const operatorIds = config$1.sortNumbers(
    operators.map((operator) => Number(operator.id))
  );
  if (!lodashEs.isEqual(config$1.sortNumbers(shareOperatorIds), config$1.sortNumbers(operatorIds))) {
    throw new config$1.KeysharesValidationError(
      config$1.KeysharesValidationErrors.ClusterMismatch
    );
  }
  return shares;
};
const ssvKeys = new KeyShares.SSVKeys();
const createAndEncryptShares = async (privateKey, operators) => {
  const threshold = await ssvKeys.createThreshold(privateKey, operators);
  const encryptedShares = await ssvKeys.encryptShares(
    operators,
    threshold.shares
  );
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
    const extracted = await ssvKeys.extractKeys(
      keystore,
      args.keystorePassword
    );
    const operators = args.operatorKeys.map((key, index) => ({
      id: args.operatorIds[index],
      operatorKey: key
    }));
    const { threshold, encryptedShares } = await createAndEncryptShares(
      extracted.privateKey,
      operators
    );
    const payload = await new KeyShares.KeySharesItem().buildPayload(
      {
        publicKey: threshold.publicKey,
        operators,
        encryptedShares
      },
      {
        ownerAddress: args.ownerAddress,
        ownerNonce: args.nonce + i,
        privateKey: extracted.privateKey
      }
    );
    shares.push(payload);
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
const computeDailyAmount = (value, days) => {
  const scale = 10 ** 6;
  const scaledDays = BigInt(days * scale);
  return value * scaledDays * BigInt(config$1.globals.BLOCKS_PER_DAY) / BigInt(scale);
};
const calcDepositFromRunway = async (config2, { clusterId, runway }) => {
  const cluster = await config2.api.getCluster({ id: clusterId });
  if (!cluster) {
    throw new Error("Cluster not found");
  }
  const operators = await config2.api.getOperators({
    operatorIds: cluster.operatorIds
  });
  if (!operators) {
    throw new Error("Operators not found");
  }
  const daoValues = await config2.api.getDaoValues({
    daoAddress: config2.contractAddresses.setter
  });
  if (!daoValues) {
    throw new Error("DAO values not found");
  }
  const isSsvCluster = cluster.feeAsset === ClusterFeeAssetTypes.Ssv;
  const operatorsFee = operators.reduce(
    (acc, operator) => acc + BigInt(isSsvCluster ? operator.ssvFee : operator.fee),
    0n
  );
  const networkFee = BigInt(
    isSsvCluster ? daoValues.networkFeeSSV : daoValues.networkFee
  );
  const minimumLiquidationCollateral = BigInt(
    isSsvCluster ? daoValues.minimumLiquidationCollateralSSV : daoValues.minimumLiquidationCollateral
  );
  const liquidationThreshold = BigInt(
    isSsvCluster ? daoValues.liquidationThresholdSSV : daoValues.liquidationThreshold
  );
  const vUnits = config$1.globals.VUNITS_PRECISION * Number(cluster.effectiveBalance) / 32;
  const validatorUnits = BigInt(vUnits / config$1.globals.VUNITS_PRECISION) || 1n;
  const burnRate = (operatorsFee + networkFee) * validatorUnits || 1n;
  const liquidationCollateral = config$1.bigintMax(
    minimumLiquidationCollateral,
    burnRate * liquidationThreshold
  );
  const residualBalance = computeDailyAmount(burnRate, runway);
  return residualBalance + liquidationCollateral;
};
const createUtils = (config2) => ({
  generateKeyShares,
  validateKeysharesJSON,
  validateSharesPreRegistration: validateSharesPreRegistration.bind(
    null,
    config2
  ),
  getOperatorCapacity: getOperatorCapacity.bind(
    null,
    config2
  ),
  getClusterBalance: getClusterBalance.bind(null, config2),
  calcDepositFromRunway: calcDepositFromRunway.bind(
    null,
    config2
  )
});
class SSVSDK {
  config;
  clusters;
  dao;
  operators;
  api;
  contract;
  utils;
  constructor(props) {
    this.config = isConfig(props) ? props : createConfig(props);
    this.clusters = createClusterManager(this.config);
    this.dao = createDaoManager(this.config);
    this.operators = createOperatorManager(this.config);
    this.api = this.config.api;
    this.contract = this.config.contract;
    this.utils = createUtils(this.config);
  }
}
exports.chainIds = config$1.chainIds;
exports.chains = config$1.chains;
exports.contracts = config$1.contracts;
exports.globals = config$1.globals;
exports.graph_endpoints = config$1.graph_endpoints;
exports.hoodi = config$1.hoodi;
exports.networks = config$1.networks;
exports.paid_graph_endpoints = config$1.paid_graph_endpoints;
exports.registerValidatorsByClusterSizeLimits = config$1.registerValidatorsByClusterSizeLimits;
exports.rest_endpoints = config$1.rest_endpoints;
exports.KeyShares = KeyShares.KeyShares;
exports.KeySharesItem = KeyShares.KeySharesItem;
exports.OperatorPublicKeyError = KeyShares.OperatorPublicKeyError;
exports.OperatorsCountsMismatchError = KeyShares.OperatorsCountsMismatchError;
exports.SSVKeys = KeyShares.SSVKeys;
exports.SSVKeysException = KeyShares.SSVKeysException;
exports.SSVSDK = SSVSDK;
exports.createClusterManager = createClusterManager;
exports.createConfig = createConfig;
exports.createContractInteractions = createContractInteractions;
exports.createDaoManager = createDaoManager;
exports.createOperatorManager = createOperatorManager;
exports.createQueries = createQueries;
exports.createReader = createReader;
exports.createSSVAPI = createSSVAPI;
exports.createUtils = createUtils;
exports.createWriter = createWriter;
exports.getCluster = getCluster;
exports.getClusterBalance = getClusterBalance$1;
exports.getClusters = getClusters;
exports.getDaoValues = getDaoValues;
exports.getOperator = getOperator;
exports.getOperators = getOperators;
exports.getOwnerNonce = getOwnerNonce;
exports.getQueries = getQueries;
exports.getValidator = getValidator;
exports.getValidators = getValidators;
exports.isConfig = isConfig;
exports.toSolidityCluster = toSolidityCluster;
