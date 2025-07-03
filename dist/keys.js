"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const KeySharesItem = require("./KeySharesItem-8wu5nyDn.js");
const bls = require("bls-eth-wasm");
class SSVKeys {
  threshold;
  /**
   * Extract private key from keystore data using keystore password.
   * Generally can be used in browsers when the keystore data has been provided by browser.
   * @param data
   * @param password
   */
  async extractKeys(data, password) {
    const privateKey = await new KeySharesItem.EthereumKeyStore(data).getPrivateKey(password);
    if (!bls.deserializeHexStrToSecretKey) {
      await bls.init(bls.BLS12_381);
    }
    return {
      privateKey: `0x${privateKey}`,
      publicKey: `0x${bls.deserializeHexStrToSecretKey(privateKey).getPublicKey().serializeToHexStr()}`
    };
  }
  /**
   * Build threshold using private key and list of operators.
   * @param privateKey
   * @param operators
   */
  async createThreshold(privateKey, operators) {
    const sortedOperators = KeySharesItem.operatorSortedList(operators);
    this.threshold = await new KeySharesItem.Threshold().create(privateKey, sortedOperators.map((item) => item.id));
    return this.threshold;
  }
  /**
   * Encrypt operators shares using operators list (id, publicKey).
   * @param operators
   * @param shares
   */
  async encryptShares(operators, shares) {
    const sortedOperators = KeySharesItem.operatorSortedList(operators);
    const decodedOperatorPublicKeys = sortedOperators.map((item) => Buffer.from(item.operatorKey, "base64").toString());
    return new KeySharesItem.Encryption(decodedOperatorPublicKeys, shares).encrypt();
  }
  /**
   * Build shares from private key, operators list
   * @param privateKey
   * @param operators
   */
  async buildShares(privateKey, operators) {
    const threshold = await this.createThreshold(privateKey, operators);
    return this.encryptShares(operators, threshold.shares);
  }
  /**
   * Getting threshold if it has been created before.
   */
  getThreshold() {
    return this.threshold;
  }
  async validateSharesPostRegistration({
    shares,
    operatorsCount,
    validatorPublicKey,
    isAccountExists,
    ownerAddress,
    ownerNonce,
    blockNumber
  }) {
    const keySharesItem = new KeySharesItem.KeySharesItem();
    let restoredSharesPublicKeys;
    let restoredSharesEncryptedKeys;
    let sharesError = "";
    let sharesErrorMessage = "";
    let signatureError = "";
    let signatureErrorMessage = "";
    let errorMessage = "";
    try {
      const restoredShares = keySharesItem.buildSharesFromBytes(shares, operatorsCount);
      const { sharesPublicKeys, encryptedKeys } = restoredShares;
      restoredSharesPublicKeys = sharesPublicKeys;
      restoredSharesEncryptedKeys = encryptedKeys;
    } catch (e) {
      sharesError = e.stack || e.trace || e;
      sharesErrorMessage = e.message;
      errorMessage = "Can not extract shares from bytes";
    }
    if (!sharesError && !errorMessage) {
      const signatureData = { ownerNonce, publicKey: validatorPublicKey, ownerAddress };
      try {
        await keySharesItem.validateSingleShares(shares, signatureData);
      } catch (e) {
        signatureError = e.stack || e.trace || e;
        signatureErrorMessage = e.message;
        errorMessage = "Failed to validate single shares";
        if (isAccountExists) {
          errorMessage += `. Account exist for owner address: ${ownerAddress}`;
        } else {
          errorMessage += `. Account is not synced for owner address: ${ownerAddress}`;
        }
        if (ownerNonce) {
          errorMessage += `. Used nonce: ${ownerNonce}`;
        }
        errorMessage += `. Signature Data: ${JSON.stringify(signatureData)}`;
      }
    }
    return {
      isValid: !sharesError && !signatureError && !errorMessage,
      isSharesValid: !sharesError,
      sharesPublicKeys: restoredSharesPublicKeys,
      encryptedKeys: restoredSharesEncryptedKeys,
      memo: !!sharesError || !!signatureError ? [{
        message: errorMessage,
        error: sharesError || signatureError,
        data: `${sharesErrorMessage}${signatureErrorMessage ? ". " + signatureErrorMessage : ""}`,
        blockNumber
      }] : []
    };
  }
}
exports.SSVKeys = SSVKeys;
