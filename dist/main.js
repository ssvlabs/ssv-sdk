"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require$$0 = require("fs");
const require$$1 = require("path");
const require$$2 = require("os");
const crypto$1 = require("crypto");
const globals = require("./globals-DsaKgq3v.js");
const lodashEs = require("lodash-es");
const viem = require("viem");
const graphqlRequest = require("graphql-request");
const KeyShares = require("./KeyShares-7biQfDev.js");
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
    publicKey: globals.decodeOperatorPublicKey(res.operator.publicKey),
    whitelisted: res.operator.whitelisted.map((v) => v.id)
  };
});
const getOperators = (client, args) => client.request(GetOperatorsDocument, args).then(
  (res) => res.operators.map((o) => ({
    ...o,
    publicKey: globals.decodeOperatorPublicKey(o.publicKey),
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
const paramsToArray = ({
  params,
  abiFunction
}) => {
  return globals.stringifyBigints(
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
        const hash = await walletClient.writeContract(request);
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
                    globals.tryCatch(() => {
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
  const { walletClient, publicClient, extendedConfig } = globals.configArgsSchema.parse(props);
  const hasAPIKey = Boolean(extendedConfig?.subgraph?.apiKey);
  const chainId = walletClient.chain.id;
  const chainContracts = globals.contracts[chainId];
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
  const graphEndpoint = extendedConfig?.subgraph?.endpoint || (hasAPIKey ? globals.paid_graph_endpoints[chainId] : globals.graph_endpoints[chainId]);
  const restEndpoint = extendedConfig?.rest?.endpoint || globals.rest_endpoints[chainId];
  const graphQLClient = new graphqlRequest.GraphQLClient(
    graphEndpoint,
    hasAPIKey ? { headers: { Authorization: `Bearer ${extendedConfig?.subgraph?.apiKey}` } } : void 0
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
const deposit = async (config2, { args: { id, amount }, ...writeOptions }, options2 = {}) => {
  const cluster = await config2.api.getCluster({ id });
  if (!cluster) {
    throw new Error("Cluster not found");
  }
  const snapshot = globals.getClusterSnapshot(cluster);
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
      clusterOwner: config2.walletClient.account.address,
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
      cluster: globals.getClusterSnapshot(cluster),
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
      cluster: globals.getClusterSnapshot(cluster),
      amount,
      operatorIds: cluster.operatorIds.map(BigInt)
    },
    ...writeOptions
  });
};
const registerValidators = async (config2, { args: { keyshares, depositAmount = 0n }, ...writeOptions }) => {
  const shares = keyshares.map((share) => {
    return globals.isKeySharesItem(share) ? share.payload : share;
  });
  const operatorIds = shares[0].operatorIds;
  const clusterSize = operatorIds.length;
  const limit = globals.registerValidatorsByClusterSizeLimits[clusterSize];
  if (!limit) {
    throw new Error(
      `Invalid number of operators in keyshares: ${clusterSize}, should be one of: ${Object.keys(globals.registerValidatorsByClusterSizeLimits).join(", ")}`
    );
  }
  if (shares.length > limit) {
    throw new Error(`You can't register more than ${limit} validators in a single transaction`);
  }
  const clusterId = globals.createClusterId(config2.walletClient.account.address, operatorIds);
  const cluster = await config2.api.getCluster({
    id: clusterId
  });
  const snapshot = cluster ? globals.getClusterSnapshot(cluster) : globals.createEmptyCluster();
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
    return globals.isKeySharesItem(share) ? share.payload : share;
  });
  const operatorIds = shares[0].operatorIds;
  const clusterSize = operatorIds.length;
  const limit = globals.registerValidatorsByClusterSizeLimits[clusterSize];
  if (!limit) {
    throw new Error(
      `Invalid number of operators in keyshares: ${clusterSize}, should be one of: ${Object.keys(globals.registerValidatorsByClusterSizeLimits).join(", ")}`
    );
  }
  if (shares.length > limit) {
    throw new Error(`You can't register more than ${limit} validators in a single transaction`);
  }
  const clusterId = globals.createClusterId(config2.walletClient.account.address, operatorIds);
  const cluster = await config2.api.getCluster({
    id: clusterId
  });
  const snapshot = cluster ? globals.getClusterSnapshot(cluster) : globals.createEmptyCluster();
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
const ssvKeys$1 = new KeyShares.SSVKeys();
const validateSharesPostRegistration = async (config2, args) => {
  const receipt = await config2.publicClient.waitForTransactionReceipt({
    hash: args.txHash
  });
  const ownerNonce = await config2.api.getOwnerNonce({
    owner: config2.walletClient.account.address,
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
        cluster: globals.getClusterSnapshot(cluster),
        publicKey: publicKeys[0],
        operatorIds: cluster.operatorIds.map(BigInt)
      },
      ...writeOptions
    });
  }
  return config2.contract.ssv.write.bulkRemoveValidator({
    args: {
      cluster: globals.getClusterSnapshot(cluster),
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
      cluster: globals.getClusterSnapshot(cluster),
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
      publicKey: viem.encodeAbiParameters(viem.parseAbiParameters("string"), [publicKey]),
      fee: globals.roundOperatorFee(yearlyFee / globals.globals.BLOCKS_PER_YEAR),
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
    clusterId: globals.createClusterId(config2.walletClient.account.address, operatorIds)
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
  const LC = globals.bigintMax(mLc, burnRate * BigInt(query.daovalues.liquidationThreshold));
  const runwaySSV = calculatedClusterBalance - LC;
  const operationalRunway = runwaySSV / burnRate / globals.globals.BLOCKS_PER_DAY;
  return {
    balance: calculatedClusterBalance,
    operationalRunway
  };
};
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
  const shares = (await KeyShares.KeyShares.fromJson(keyshares)).list();
  globals.ensureNoKeysharesErrors(shares);
  globals.ensureValidatorsUniqueness(shares);
  globals.validateConsistentOperatorPublicKeys(shares, operators);
  await Promise.all(
    shares.map(
      (share) => share.validateSingleShares(share.payload.sharesData, {
        ownerAddress: account,
        ownerNonce: share.data.ownerNonce || 0,
        publicKey: share.data.publicKey || ""
      })
    )
  );
  const shareOperatorIds = globals.validateConsistentOperatorIds(shares);
  const operatorIds = globals.sortNumbers(operators.map((operator) => Number(operator.id)));
  if (!lodashEs.isEqual(globals.sortNumbers(shareOperatorIds), globals.sortNumbers(operatorIds))) {
    throw new globals.KeysharesValidationError(globals.KeysharesValidationErrors.ClusterMismatch);
  }
  return shares;
};
const ssvKeys = new KeyShares.SSVKeys();
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
      await new KeyShares.KeySharesItem().buildPayload(
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
exports.chainIds = globals.chainIds;
exports.chains = globals.chains;
exports.contracts = globals.contracts;
exports.globals = globals.globals;
exports.graph_endpoints = globals.graph_endpoints;
exports.hoodi = globals.hoodi;
exports.networks = globals.networks;
exports.paid_graph_endpoints = globals.paid_graph_endpoints;
exports.registerValidatorsByClusterSizeLimits = globals.registerValidatorsByClusterSizeLimits;
exports.rest_endpoints = globals.rest_endpoints;
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
exports.createOperatorManager = createOperatorManager;
exports.createQueries = createQueries;
exports.createReader = createReader;
exports.createSSVAPI = createSSVAPI;
exports.createUtils = createUtils;
exports.createWriter = createWriter;
exports.getCluster = getCluster;
exports.getClusterBalance = getClusterBalance$1;
exports.getClusterSnapshot = getClusterSnapshot;
exports.getClusters = getClusters;
exports.getOperator = getOperator;
exports.getOperators = getOperators;
exports.getOwnerNonce = getOwnerNonce;
exports.getQueries = getQueries;
exports.getValidator = getValidator;
exports.getValidators = getValidators;
exports.isConfig = isConfig;
