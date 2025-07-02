import * as forge from "node-forge";
import { util } from "node-forge";
import bls from "bls-eth-wasm";
import crypto from "crypto";
import { keccak256, toHex, sha256, toBytes, fromHex, getAddress } from "viem";
import { syncScrypt } from "scrypt-js";
import { ValidatorConstraint, registerDecorator, IsNotEmpty, IsDefined, IsInt, IsString, validateSync, IsOptional, IsNumber, Length, ValidateNested } from "class-validator";
(async () => {
  await bls.init(bls.BLS12_381);
})();
class SSVKeysException extends Error {
  constructor(message) {
    super(message);
    Object.defineProperty(this, "trace", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
    this.trace = this.stack;
    this.stack = `${this.name}: ${this.message}`;
  }
}
class KeyStoreDataFormatError extends SSVKeysException {
  constructor(data, message) {
    super(message);
    Object.defineProperty(this, "data", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.data = data;
  }
}
class KeyStoreInvalidError extends SSVKeysException {
  constructor(data, message) {
    super(message);
    Object.defineProperty(this, "data", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.data = data;
  }
}
class KeyStorePasswordError extends SSVKeysException {
  constructor(message) {
    super(message);
  }
}
class EthereumWalletError extends SSVKeysException {
  constructor(message) {
    super(message);
  }
}
class PrivateKeyFormatError extends SSVKeysException {
  constructor(data, message) {
    super(message);
    Object.defineProperty(this, "data", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.data = data;
  }
}
class OwnerAddressFormatError extends SSVKeysException {
  constructor(data, message) {
    super(message);
    Object.defineProperty(this, "data", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.data = data;
  }
}
class OwnerNonceFormatError extends SSVKeysException {
  constructor(data, message) {
    super(message);
    Object.defineProperty(this, "data", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.data = data;
  }
}
class ForgeEncrypt {
  constructor() {
    Object.defineProperty(this, "publicKey", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    });
    Object.defineProperty(this, "privateKey", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    });
  }
  /**
   * Set the public key (equivalent to JSEncrypt.setPublicKey)
   * Matches JSEncrypt's permissive behavior - doesn't throw on invalid keys
   */
  setPublicKey(publicKeyPem) {
    try {
      this.publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
    } catch (error) {
      this.publicKey = null;
    }
  }
  /**
   * Set the private key (equivalent to JSEncrypt.setPrivateKey)
   * Matches JSEncrypt's permissive behavior - doesn't throw on invalid keys
   */
  setPrivateKey(privateKeyPem) {
    try {
      this.privateKey = forge.pki.privateKeyFromPem(privateKeyPem);
    } catch (error) {
      this.privateKey = null;
    }
  }
  /**
   * Encrypt data with public key (equivalent to JSEncrypt.encrypt)
   * Returns base64 encoded encrypted data or false if encryption fails
   */
  encrypt(data) {
    if (!this.publicKey) {
      return false;
    }
    try {
      const encrypted = this.publicKey.encrypt(data, "RSAES-PKCS1-V1_5");
      return forge.util.encode64(encrypted);
    } catch (error) {
      return false;
    }
  }
  /**
   * Decrypt data with private key (equivalent to JSEncrypt.decrypt)
   * Expects base64 encoded encrypted data, returns false if decryption fails
   */
  decrypt(encryptedData) {
    if (!this.privateKey) {
      return false;
    }
    try {
      const encryptedBytes = forge.util.decode64(encryptedData);
      const decrypted = this.privateKey.decrypt(encryptedBytes, "RSAES-PKCS1-V1_5");
      return decrypted;
    } catch (error) {
      return false;
    }
  }
  /**
   * Get the public key in PEM format
   */
  getPublicKey() {
    if (!this.publicKey) {
      throw new Error("Public key not set");
    }
    return forge.pki.publicKeyToPem(this.publicKey);
  }
  /**
   * Get the private key in PEM format
   */
  getPrivateKey() {
    if (!this.privateKey) {
      throw new Error("Private key not set");
    }
    return forge.pki.privateKeyToPem(this.privateKey);
  }
}
class DuplicatedOperatorIdError extends SSVKeysException {
  constructor(operator, message) {
    super(message);
    Object.defineProperty(this, "operator", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.operator = operator;
  }
}
class DuplicatedOperatorPublicKeyError extends SSVKeysException {
  constructor(operator, message) {
    super(message);
    Object.defineProperty(this, "operator", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.operator = operator;
  }
}
class OperatorsCountsMismatchError extends SSVKeysException {
  constructor(propertyListOne, propertyListTwo, message) {
    super(message);
    Object.defineProperty(this, "listOne", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "listTwo", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.listOne = propertyListOne;
    this.listTwo = propertyListTwo;
  }
}
class OperatorPublicKeyError extends SSVKeysException {
  constructor(operator, message) {
    super(message);
    Object.defineProperty(this, "operator", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.operator = operator;
  }
}
const OperatorPublicKeyValidator$1 = (publicKey) => {
  publicKey = publicKey.trim();
  const begin = "-----BEGIN RSA PUBLIC KEY-----";
  const end = "-----END RSA PUBLIC KEY-----";
  const encrypt = new ForgeEncrypt();
  let decodedOperator = "";
  try {
    let decodedPublicKey = "";
    if (!publicKey.startsWith(begin)) {
      if (publicKey.length < 98) {
        throw new Error("The length of the operator public key must be at least 98 characters.");
      }
      try {
        decodedPublicKey = util.decode64(publicKey).trim();
      } catch (error) {
        throw new Error("Failed to decode the operator public key. Ensure it's correctly base64 encoded.");
      }
      if (!decodedPublicKey.startsWith(begin)) {
        throw new Error(`Operator public key does not start with '${begin}'`);
      }
    } else {
      decodedPublicKey = publicKey;
    }
    if (!decodedPublicKey.endsWith(end)) {
      throw new Error(`Operator public key does not end with '${end}'`);
    }
    try {
      const content = decodedPublicKey.slice(begin.length, publicKey.length - end.length).trim();
      decodedOperator = util.decode64(content);
    } catch {
      throw new Error("Failed to decode the RSA public key. Ensure it's correctly base64 encoded.");
    }
    try {
      encrypt.setPublicKey(decodedOperator);
    } catch {
      throw new Error("Invalid operator key format, make sure the operator exists in the network.");
    }
  } catch (error) {
    throw new OperatorPublicKeyError({
      rsa: decodedOperator,
      base64: publicKey
    }, error.message);
  }
  return true;
};
const isOperatorsLengthValid = (length) => length >= 4 && length <= 13 && length % 3 === 1;
class ThresholdInvalidOperatorsLengthError extends SSVKeysException {
  constructor(operators, message) {
    super(message);
    Object.defineProperty(this, "operators", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.operators = operators;
  }
}
class ThresholdInvalidOperatorIdError extends SSVKeysException {
  constructor(operator, message) {
    super(message);
    Object.defineProperty(this, "operator", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.operator = operator;
  }
}
class Threshold {
  constructor() {
    Object.defineProperty(this, "publicKey", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "privateKey", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "shares", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
  }
  static get DEFAULT_THRESHOLD_NUMBER() {
    return 3;
  }
  /**
   * Receives list of operators IDs.
   *  len(operator IDs) := 3 * F + 1
   *
   * If F calculated from this formula is not integer number - it will raise exception.
   * Generate keys and return promise
   */
  async create(privateKeyString, operatorIds) {
    if (!privateKeyString.startsWith("0x")) {
      throw new PrivateKeyFormatError(privateKeyString, "The private key must be provided in the 0x format.");
    }
    operatorIds.map((operatorId) => {
      if (!Number.isInteger(operatorId)) {
        throw new ThresholdInvalidOperatorIdError(operatorId, `Operator must be integer. Got: ${operatorId}`);
      }
    });
    if (!isOperatorsLengthValid(operatorIds.length)) {
      throw new ThresholdInvalidOperatorsLengthError(operatorIds, "Invalid operators amount. Enter an 3f+1 compatible amount of operator ids.");
    }
    const msk = [];
    const mpk = [];
    if (!bls.deserializeHexStrToSecretKey) {
      await bls.init(bls.BLS12_381);
    }
    this.privateKey = bls.deserializeHexStrToSecretKey(privateKeyString.replace("0x", ""));
    this.publicKey = this.privateKey.getPublicKey();
    msk.push(this.privateKey);
    mpk.push(this.publicKey);
    const F = (operatorIds.length - 1) / 3;
    for (let i = 1; i < operatorIds.length - F; i += 1) {
      const sk = new bls.SecretKey();
      sk.setByCSPRNG();
      msk.push(sk);
      const pk = sk.getPublicKey();
      mpk.push(pk);
    }
    for (const operatorId of operatorIds) {
      const id = new bls.Id();
      id.setInt(operatorId);
      const shareSecretKey = new bls.SecretKey();
      shareSecretKey.share(msk, id);
      const sharePublicKey = new bls.PublicKey();
      sharePublicKey.share(mpk, id);
      this.shares.push({
        privateKey: `0x${shareSecretKey.serializeToHexStr()}`,
        publicKey: `0x${sharePublicKey.serializeToHexStr()}`,
        id
      });
    }
    const response = {
      privateKey: `0x${this.privateKey.serializeToHexStr()}`,
      publicKey: `0x${this.publicKey.serializeToHexStr()}`,
      shares: this.shares
    };
    return response;
  }
}
class EthereumKeyStore {
  constructor(keyStoreData) {
    Object.defineProperty(this, "keyStoreData", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "privateKey", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ""
    });
    if (!keyStoreData) {
      throw new KeyStoreDataFormatError(keyStoreData, "Key store data should be JSON or string");
    }
    this.keyStoreData = typeof keyStoreData === "string" ? JSON.parse(keyStoreData) : keyStoreData;
    if (!this.keyStoreData.version) {
      throw new KeyStoreInvalidError(this.keyStoreData, "Invalid keystore file");
    }
  }
  // getPublicKey(): string {
  //   if (this.keyStoreData) {
  //     switch (this.keyStoreData.version ?? this.keyStoreData.Version) {
  //       case 1:
  //         return this.keyStoreData.Address;
  //       case 3:
  //         return this.keyStoreData.id;
  //       case 4:
  //         return this.keyStoreData.pubkey;
  //     }
  //   }
  //   return '';
  // }
  async getPrivateKey(password = "") {
    if (this.privateKey)
      return this.privateKey;
    switch (this.keyStoreData.version) {
      case 3:
        this.privateKey = await this.fromV3(this.keyStoreData, password);
        break;
      case 4:
        this.privateKey = await this.fromCustomV4(this.keyStoreData, password);
        break;
      default:
        throw new EthereumWalletError("Unsupported keystore version");
    }
    if (!this.privateKey) {
      throw new KeyStorePasswordError("Invalid password");
    }
    return this.privateKey;
  }
  async fromV3(json, password) {
    if (!json.crypto && json.Crypto)
      json.crypto = json.Crypto;
    const kdfparams = json.crypto.kdfparams;
    const salt = Buffer.from(kdfparams.salt, "hex");
    const dklen = kdfparams.dklen;
    let derivedKey;
    if (json.crypto.kdf === "scrypt") {
      derivedKey = syncScrypt(Buffer.from(password), salt, kdfparams.n, kdfparams.r, kdfparams.p, dklen);
    } else if (json.crypto.kdf === "pbkdf2") {
      if (kdfparams.prf !== "hmac-sha256")
        throw new EthereumWalletError("Unsupported PBKDF2 params");
      derivedKey = crypto.pbkdf2Sync(Buffer.from(password), salt, kdfparams.c, dklen, "sha256");
    } else {
      throw new EthereumWalletError("Unsupported kdf type");
    }
    const ciphertext = Buffer.from(json.crypto.ciphertext, "hex");
    const macCheck = Buffer.concat([Buffer.from(derivedKey.slice(16, 32)), ciphertext]);
    const mac = keccak256(toHex(macCheck)).replace(/^0x/, "");
    if (mac !== json.crypto.mac.toLowerCase()) {
      throw new EthereumWalletError("Invalid password");
    }
    const decipher = crypto.createDecipheriv(json.crypto.cipher, Buffer.from(derivedKey.slice(0, 16)), Buffer.from(json.crypto.cipherparams.iv, "hex"));
    const seed = this.runCipherBuffer(decipher, ciphertext);
    return seed.toString("hex");
  }
  async fromCustomV4(input, password) {
    if (input.version !== 4) {
      throw new EthereumWalletError("Not a V4 wallet");
    }
    let derivedKey;
    const { kdf, cipher, checksum } = input.crypto;
    const salt = Buffer.from(kdf.params.salt, "hex");
    const dklen = kdf.params.dklen;
    if (kdf.function === "scrypt") {
      const { n, r, p } = kdf.params;
      derivedKey = syncScrypt(Buffer.from(password), salt, n, r, p, dklen);
    } else if (kdf.function === "pbkdf2") {
      const { c, prf } = kdf.params;
      if (prf !== "hmac-sha256") {
        throw new EthereumWalletError("Unsupported parameters to PBKDF2");
      }
      derivedKey = crypto.pbkdf2Sync(Buffer.from(password), salt, c, dklen, "sha256");
    } else {
      throw new EthereumWalletError("Unsupported key derivation scheme");
    }
    const ciphertext = Buffer.from(cipher.message, "hex");
    const checksumBuffer = Buffer.concat([Buffer.from(derivedKey.slice(16, 32)), ciphertext]);
    const hashFn = checksum.function === "sha256" ? sha256 : keccak256;
    const calculatedMac = hashFn(toHex(checksumBuffer));
    if (calculatedMac.replace(/^0x/, "") !== checksum.message.toLowerCase()) {
      throw new EthereumWalletError("Invalid password");
    }
    const decipher = crypto.createDecipheriv(cipher.function, Buffer.from(derivedKey.slice(0, 16)), Buffer.from(cipher.params.iv, "hex"));
    const seed = this.runCipherBuffer(decipher, ciphertext);
    return seed.toString("hex");
  }
  runCipherBuffer(cipher, data) {
    return Buffer.concat([cipher.update(data), cipher.final()]);
  }
}
class Encryption {
  constructor(operatorPublicKeys, shares) {
    Object.defineProperty(this, "operatorPublicKeys", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "shares", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.operatorPublicKeys = [...operatorPublicKeys];
    this.shares = shares;
  }
  encrypt() {
    const encryptedShares = [];
    for (const [idx, operatorPublicKey] of this.operatorPublicKeys.entries()) {
      OperatorPublicKeyValidator$1(operatorPublicKey);
      const forgeEncrypt = new ForgeEncrypt();
      forgeEncrypt.setPublicKey(operatorPublicKey);
      const encryptedPrivateKey = forgeEncrypt.encrypt(this.shares[idx].privateKey);
      if (!encryptedPrivateKey) {
        throw new OperatorPublicKeyError({
          rsa: operatorPublicKey,
          base64: encryptedPrivateKey
        }, "Private key encryption failed.");
      }
      const encryptedShare = {
        operatorPublicKey,
        privateKey: encryptedPrivateKey,
        publicKey: this.shares[idx].publicKey
      };
      encryptedShares.push(encryptedShare);
    }
    return encryptedShares;
  }
}
var __decorate$9 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let OperatorPublicKeyValidatorConstraint = class OperatorPublicKeyValidatorConstraint2 {
  validate(value) {
    return OperatorPublicKeyValidator$1(value);
  }
  defaultMessage() {
    return "Invalid operator public key";
  }
};
OperatorPublicKeyValidatorConstraint = __decorate$9([
  ValidatorConstraint({ name: "operatorKey", async: false })
], OperatorPublicKeyValidatorConstraint);
function OperatorPublicKeyValidator(validationOptions) {
  return function(object, propertyName) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: OperatorPublicKeyValidatorConstraint
    });
  };
}
var __decorate$8 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class OperatorData {
  constructor(data) {
    Object.defineProperty(this, "id", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "operatorKey", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.id = data.id;
    this.operatorKey = data.operatorKey;
    this.validate();
  }
  /**
   * Validate operator id and public key
   */
  validate() {
    validateSync(this);
  }
}
__decorate$8([
  IsNotEmpty({ message: "The operator id is null" }),
  IsDefined({ message: "The operator id is undefined" }),
  IsInt({ message: "The operator id must be an integer" }),
  __metadata$3("design:type", Number)
], OperatorData.prototype, "id", void 0);
__decorate$8([
  IsNotEmpty({ message: "The operator public key is null" }),
  IsDefined({ message: "The operator public key is undefined" }),
  IsString({ message: "The operator public key must be a string" }),
  OperatorPublicKeyValidator(),
  __metadata$3("design:type", String)
], OperatorData.prototype, "operatorKey", void 0);
const operatorSortedList = (operators) => {
  const ids = operators.map((op) => op.id);
  const operatorKeys = operators.map((op) => op.operatorKey);
  const validatedOperators = operators.map((operator) => {
    const id = parseInt(`${operator.id}`, 10);
    if (isNaN(id)) {
      throw new OperatorsCountsMismatchError(ids, operatorKeys, `Invalid operator ID: ${operator.id}`);
    }
    if (!operator.operatorKey) {
      throw new OperatorsCountsMismatchError(ids, operatorKeys, `Operator key is missing for operator ID: ${id}`);
    }
    return { ...operator, id };
  });
  validatedOperators.sort((a, b) => a.id - b.id);
  return validatedOperators.map((operator) => new OperatorData(operator));
};
class BLSDeserializeError extends SSVKeysException {
  constructor(publicKey, message) {
    super(message);
    Object.defineProperty(this, "publicKey", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.publicKey = publicKey;
  }
}
class SingleSharesSignatureInvalid extends SSVKeysException {
  constructor(data, message) {
    super(message);
    Object.defineProperty(this, "data", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.data = data;
  }
}
const hexArrayToBytes = (hexArr) => {
  const uint8Array = new Uint8Array(hexArr.flatMap((hex) => Array.from(toBytes(hex))));
  return Buffer.from(uint8Array);
};
const buildSignature = async (dataToSign, privateKeyHex) => {
  const privateKey = bls.deserializeHexStrToSecretKey(privateKeyHex.replace("0x", ""));
  const messageHash = keccak256(toBytes(dataToSign));
  const messageBytes = fromHex(messageHash, "bytes");
  const signature = privateKey.sign(messageBytes);
  const signatureHex = signature.serializeToHexStr();
  return `0x${signatureHex}`;
};
const validateSignature = async (signedData, signatureHex, publicKey) => {
  const blsPublicKey = bls.deserializeHexStrToPublicKey(publicKey.replace("0x", ""));
  const signature = bls.deserializeHexStrToSignature(signatureHex.replace("0x", ""));
  const messageHashHex = keccak256(toBytes(signedData));
  const messageHashBytes = fromHex(messageHashHex, "bytes");
  if (!blsPublicKey.verify(signature, messageHashBytes)) {
    throw new SingleSharesSignatureInvalid(signatureHex, "Single shares signature is invalid");
  }
};
const privateToPublicKey = async (privateKey) => {
  return `0x${bls.deserializeHexStrToSecretKey(privateKey.replace("0x", "")).getPublicKey().serializeToHexStr()}`;
};
var __decorate$7 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let OpeatorsListValidatorConstraint = class OpeatorsListValidatorConstraint2 {
  validate(operatorsList) {
    const operatorIds = /* @__PURE__ */ new Set(), operatorPublicKeys = /* @__PURE__ */ new Set();
    for (const operator of operatorsList || []) {
      if (operatorIds.has(operator.id)) {
        throw new DuplicatedOperatorIdError(operator, `The operator ID '${operator.id}' is duplicated in the list`);
      }
      operatorIds.add(operator.id);
      if (operatorPublicKeys.has(operator.operatorKey)) {
        throw new DuplicatedOperatorPublicKeyError(operator, `The public key for operator ID ${operator.id} is duplicated in the list`);
      }
      operatorPublicKeys.add(operator.operatorKey);
    }
    return true;
  }
  defaultMessage() {
    return "The list of operators contains duplicate entries";
  }
};
OpeatorsListValidatorConstraint = __decorate$7([
  ValidatorConstraint({ name: "uniqueList", async: false })
], OpeatorsListValidatorConstraint);
function OpeatorsListValidator(validationOptions) {
  return function(object, propertyName) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: OpeatorsListValidatorConstraint
    });
  };
}
var __decorate$6 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let PublicKeyValidatorConstraint = class PublicKeyValidatorConstraint2 {
  async validate(value) {
    try {
      if (typeof value === "string") {
        bls.deserializeHexStrToPublicKey(value.replace("0x", ""));
      } else {
        value.forEach((item) => bls.deserializeHexStrToPublicKey(item.replace("0x", "")));
      }
    } catch (e) {
      throw new BLSDeserializeError(value, "Failed to BLS deserialize validator public key");
    }
    return true;
  }
  defaultMessage() {
    return "Invalid public key";
  }
};
PublicKeyValidatorConstraint = __decorate$6([
  ValidatorConstraint({ name: "publicKey", async: true })
], PublicKeyValidatorConstraint);
function PublicKeyValidator(validationOptions) {
  return function(object, propertyName) {
    if (!object || typeof object !== "object") {
      throw new Error(`@PublicKeyValidator must be used on a class property — received ${typeof object} for ${propertyName}`);
    }
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: PublicKeyValidatorConstraint
    });
  };
}
var __decorate$5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let OwnerAddressValidatorConstraint = class OwnerAddressValidatorConstraint2 {
  validate(value) {
    try {
      getAddress(value);
    } catch {
      throw new OwnerAddressFormatError(value, "Owner address is not a valid Ethereum address");
    }
    return true;
  }
  defaultMessage() {
    return "Invalid owner address";
  }
};
OwnerAddressValidatorConstraint = __decorate$5([
  ValidatorConstraint({ name: "ownerAddress", async: false })
], OwnerAddressValidatorConstraint);
function OwnerAddressValidator(validationOptions) {
  return function(object, propertyName) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: OwnerAddressValidatorConstraint
    });
  };
}
var __decorate$4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let OwnerNonceValidatorConstraint = class OwnerNonceValidatorConstraint2 {
  validate(value) {
    if (!Number.isInteger(value) || value < 0) {
      throw new OwnerNonceFormatError(value, "Owner nonce is not positive integer");
    }
    return true;
  }
  defaultMessage() {
    return "Invalid owner nonce";
  }
};
OwnerNonceValidatorConstraint = __decorate$4([
  ValidatorConstraint({ name: "ownerNonce", async: false })
], OwnerNonceValidatorConstraint);
function OwnerNonceValidator(validationOptions) {
  return function(object, propertyName) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: OwnerNonceValidatorConstraint
    });
  };
}
var __decorate$3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let MatchLengthValidatorConstraint = class MatchLengthValidatorConstraint2 {
  validate(value, args) {
    const [relatedPropertyName, customError] = args.constraints;
    const relatedLength = args.object[relatedPropertyName].length;
    if (!Array.isArray(value)) {
      Object.values(value).forEach((arr) => {
        if (relatedLength !== arr.length) {
          throw new OperatorsCountsMismatchError(args.object[relatedPropertyName], value, customError.message);
        }
      });
    } else {
      if (relatedLength !== value.length) {
        throw new OperatorsCountsMismatchError(args.object[relatedPropertyName], value, customError.message);
      }
    }
    return true;
  }
  defaultMessage() {
    return "The length of the entries lists are not equal";
  }
};
MatchLengthValidatorConstraint = __decorate$3([
  ValidatorConstraint({ name: "matchLength", async: false })
], MatchLengthValidatorConstraint);
var __decorate$2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class KeySharesData {
  constructor() {
    Object.defineProperty(this, "ownerNonce", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    });
    Object.defineProperty(this, "ownerAddress", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    });
    Object.defineProperty(this, "publicKey", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    });
    Object.defineProperty(this, "operators", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    });
  }
  update(data) {
    if (data.ownerAddress) {
      this.ownerAddress = data.ownerAddress;
    }
    if (typeof data.ownerNonce === "number") {
      this.ownerNonce = data.ownerNonce;
    }
    if (data.publicKey) {
      this.publicKey = data.publicKey;
    }
    if (data.operators) {
      this.operators = operatorSortedList(data.operators);
    }
  }
  /**
   * Do all possible validations.
   */
  async validate() {
    validateSync(this);
  }
  /**
   * Get the list of operators IDs.
   */
  get operatorIds() {
    if (!this.operators?.length) {
      return [];
    }
    return this.operators.map((operator) => parseInt(String(operator.id), 10));
  }
  /**
   * Get the list of operators public keys.
   */
  get operatorPublicKeys() {
    if (!this.operators?.length) {
      return [];
    }
    return this.operators.map((operator) => String(operator.operatorKey));
  }
}
__decorate$2([
  IsOptional(),
  IsNumber(),
  OwnerNonceValidator(),
  __metadata$2("design:type", Object)
], KeySharesData.prototype, "ownerNonce", void 0);
__decorate$2([
  IsOptional(),
  IsString(),
  OwnerAddressValidator(),
  __metadata$2("design:type", Object)
], KeySharesData.prototype, "ownerAddress", void 0);
__decorate$2([
  IsOptional(),
  IsString(),
  Length(98, 98),
  PublicKeyValidator(),
  __metadata$2("design:type", Object)
], KeySharesData.prototype, "publicKey", void 0);
__decorate$2([
  IsOptional(),
  ValidateNested({ each: true }),
  OpeatorsListValidator(),
  __metadata$2("design:type", Object)
], KeySharesData.prototype, "operators", void 0);
var __decorate$1 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class KeySharesPayload {
  constructor() {
    Object.defineProperty(this, "sharesData", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "publicKey", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "operatorIds", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  /**
   * Converts arrays of public and private keys to a single hexadecimal string.
   * @param publicKeys Array of public keys.
   * @param privateKeys Array of private keys.
   * @returns Hexadecimal string representation of keys.
   */
  _sharesToBytes(publicKeys, privateKeys) {
    const encryptedShares = [...privateKeys].map((item) => "0x" + Buffer.from(item, "base64").toString("hex"));
    const pkPsBytes = hexArrayToBytes([...publicKeys, ...encryptedShares]);
    return `0x${pkPsBytes.toString("hex")}`;
  }
  /**
   * Updates the payload with new data and validates it.
   * @param data Partial key shares payload to update.
   */
  update(data) {
    this.publicKey = data.publicKey;
    this.sharesData = data.sharesData;
    this.operatorIds = data.operatorIds;
    this.validate();
  }
  /**
   * Validates the current state of the instance.
   * @returns {void | ValidationError[]} Validation errors if any, otherwise undefined.
   */
  validate() {
    validateSync(this);
  }
  /**
   * Builds the payload from the given data.
   * @param data Data to build the payload.
   * @returns {KeySharesPayload} The current instance for chaining.
   */
  build(data) {
    this.publicKey = data.publicKey;
    this.operatorIds = data.operatorIds;
    this.sharesData = this._sharesToBytes(data.encryptedShares.map((share) => share.publicKey), data.encryptedShares.map((share) => share.privateKey));
    return this;
  }
}
__decorate$1([
  IsString(),
  __metadata$1("design:type", String)
], KeySharesPayload.prototype, "sharesData", void 0);
__decorate$1([
  IsString(),
  Length(98, 98),
  PublicKeyValidator(),
  __metadata$1("design:type", String)
], KeySharesPayload.prototype, "publicKey", void 0);
__decorate$1([
  IsNumber({}, { each: true }),
  __metadata$1("design:type", Array)
], KeySharesPayload.prototype, "operatorIds", void 0);
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const SIGNATURE_LENGTH = 192;
const PUBLIC_KEY_LENGTH = 96;
class KeySharesItem {
  constructor() {
    Object.defineProperty(this, "data", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "payload", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "error", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.data = new KeySharesData();
    this.payload = new KeySharesPayload();
  }
  /**
   * Build payload from operators list, encrypted shares and validator public key
   */
  async buildPayload(metaData, toSignatureData) {
    const { ownerAddress, ownerNonce, privateKey } = toSignatureData;
    if (!Number.isInteger(ownerNonce) || ownerNonce < 0) {
      throw new OwnerNonceFormatError(ownerNonce, "Owner nonce is not positive integer");
    }
    let address;
    try {
      address = getAddress(ownerAddress);
    } catch {
      throw new OwnerAddressFormatError(ownerAddress, "Owner address is not a valid Ethereum address");
    }
    const payload = this.payload.build({
      publicKey: metaData.publicKey,
      operatorIds: operatorSortedList(metaData.operators).map((operator) => operator.id),
      encryptedShares: metaData.encryptedShares
    });
    const signature = await buildSignature(`${address}:${ownerNonce}`, privateKey);
    const signSharesBytes = hexArrayToBytes([signature, payload.sharesData]);
    payload.sharesData = `0x${signSharesBytes.toString("hex")}`;
    await this.validateSingleShares(payload.sharesData, {
      ownerAddress,
      ownerNonce,
      publicKey: await privateToPublicKey(privateKey)
    });
    return payload;
  }
  async validateSingleShares(shares, fromSignatureData) {
    const { ownerAddress, ownerNonce, publicKey } = fromSignatureData;
    if (!Number.isInteger(ownerNonce) || ownerNonce < 0) {
      throw new OwnerNonceFormatError(ownerNonce, "Owner nonce is not positive integer");
    }
    const address = getAddress(ownerAddress);
    const signaturePt = shares.replace("0x", "").substring(0, SIGNATURE_LENGTH);
    await validateSignature(`${address}:${ownerNonce}`, `0x${signaturePt}`, publicKey);
  }
  /**
   * Build shares from bytes string and operators list length
   * @param bytes
   * @param operatorCount
   */
  buildSharesFromBytes(bytes, operatorCount) {
    if (!bytes.startsWith("0x") || !/^(0x)?[0-9a-fA-F]*$/.test(bytes)) {
      throw new SSVKeysException("Invalid byte string format");
    }
    if (operatorCount <= 0 || !Number.isInteger(operatorCount)) {
      throw new SSVKeysException("Invalid operator count");
    }
    const sharesPt = bytes.slice(2 + SIGNATURE_LENGTH);
    const pkSplit = sharesPt.substring(0, operatorCount * PUBLIC_KEY_LENGTH);
    const pkBytes = toBytes("0x" + pkSplit);
    const sharesPublicKeys = this.splitArray(operatorCount, pkBytes).map((item) => toHex(item));
    const eSplit = bytes.substring(operatorCount * PUBLIC_KEY_LENGTH);
    const eBytes = toBytes("0x" + eSplit);
    const encryptedKeys = this.splitArray(operatorCount, eBytes).map((item) => Buffer.from(toHex(item).slice(2), "hex").toString("base64"));
    return { sharesPublicKeys, encryptedKeys };
  }
  /**
   * Updates the current instance with partial data and payload, and validates.
   */
  update(data) {
    this.data.update(data);
    this.validate();
  }
  /**
   * Validate everything
   */
  validate() {
    validateSync(this);
  }
  /**
   * Stringify key shares to be ready for saving in file.
   */
  toJson() {
    return JSON.stringify({
      data: this.data || null,
      payload: this.payload || null
    }, null, 2);
  }
  splitArray(parts, arr) {
    const partLength = Math.floor(arr.length / parts);
    const partsArr = [];
    for (let i = 0; i < parts; i++) {
      const start = i * partLength;
      const end = start + partLength;
      partsArr.push(arr.slice(start, end));
    }
    return partsArr;
  }
  /**
   * Initialise from JSON or object data.
   */
  static async fromJson(content) {
    const body = typeof content === "string" ? JSON.parse(content) : content;
    const instance = new KeySharesItem();
    try {
      instance.data.update(body.data);
      instance.payload.update(body.payload);
      instance.validate();
      await instance.validateSingleShares(instance.payload.sharesData, {
        ownerAddress: instance.data.ownerAddress,
        ownerNonce: instance.data.ownerNonce,
        publicKey: instance.data.publicKey
      });
    } catch (e) {
      instance.error = e;
    }
    return instance;
  }
}
__decorate([
  IsOptional(),
  ValidateNested(),
  __metadata("design:type", KeySharesData)
], KeySharesItem.prototype, "data", void 0);
__decorate([
  IsOptional(),
  ValidateNested(),
  __metadata("design:type", KeySharesPayload)
], KeySharesItem.prototype, "payload", void 0);
__decorate([
  IsOptional(),
  __metadata("design:type", Object)
], KeySharesItem.prototype, "error", void 0);
export {
  EthereumKeyStore as E,
  KeySharesItem as K,
  SSVKeysException as S,
  Threshold as T,
  Encryption as a,
  operatorSortedList as o
};
