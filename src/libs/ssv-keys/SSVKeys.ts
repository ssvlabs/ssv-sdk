import bls from '@/libs/ssv-keys/BLS';
import { Threshold } from '@/libs/ssv-keys/Threshold';
import type { IOperator, IShares, ISharesKeyPairs, IEncryptShare } from '@/libs/ssv-keys/interfaces';
import EthereumKeyStore from '@/libs/ssv-keys/EthereumKeyStore/EthereumKeyStore';
import Encryption from '@/libs/ssv-keys/Encryption/Encryption';
import { operatorSortedList } from '@/libs/ssv-keys/helpers/operator.helper';
import { KeySharesItem } from '@/libs/ssv-keys/KeyShares/KeySharesItem';

export interface ExtractedKeys {
  privateKey: string;
  publicKey: string;
}

interface ISharesValidation {
  shares: string;
  operatorsCount: number;
  validatorPublicKey: string;
  isAccountExists: boolean;
  ownerAddress: string;
  ownerNonce: number;
  blockNumber: number;
}

/**
 * SSVKeys class provides high-level methods to easily work with entire flow:
 *  - getting private key from keystore file using password
 *  - creating shares threshold
 *  - creating final shares
 *  - building final payload which is ready to be used in web3 transaction
 */
class SSVKeys {
  protected threshold: ISharesKeyPairs | undefined;

  /**
   * Extract private key from keystore data using keystore password.
   * Generally can be used in browsers when the keystore data has been provided by browser.
   * @param data
   * @param password
   */
  async extractKeys(data: string, password: string): Promise<ExtractedKeys> {
    const privateKey = await new EthereumKeyStore(data).getPrivateKey(password);
    // if (!bls.deserializeHexStrToSecretKey) {
    //   await bls.init(bls.BLS12_381);
    // }
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
  async createThreshold(privateKey: string, operators: IOperator[]): Promise<ISharesKeyPairs> {
    const sortedOperators = operatorSortedList(operators);
    this.threshold = await new Threshold().create(privateKey, sortedOperators.map(item => item.id));
    return this.threshold;
  }

  /**
   * Encrypt operators shares using operators list (id, publicKey).
   * @param operators
   * @param shares
   */
  async encryptShares(operators: IOperator[], shares: IShares[]): Promise<IEncryptShare[]> {
    const sortedOperators = operatorSortedList(operators);
    const decodedOperatorPublicKeys = sortedOperators.map(item => Buffer.from(item.operatorKey, 'base64').toString());
    return new Encryption(decodedOperatorPublicKeys, shares).encrypt();
  }

  /**
   * Build shares from private key, operators list
   * @param privateKey
   * @param operators
   */
  async buildShares(privateKey: string, operators: IOperator[]): Promise<IEncryptShare[]> {
    const threshold = await this.createThreshold(privateKey, operators);
    return this.encryptShares(operators, threshold.shares);
  }

  /**
   * Getting threshold if it has been created before.
   */
  getThreshold()  {
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
  }: ISharesValidation) {
    const keySharesItem = new KeySharesItem();
    let restoredSharesPublicKeys;
    let restoredSharesEncryptedKeys;
    let sharesError = '';
    let sharesErrorMessage = '';
    let signatureError = '';
    let signatureErrorMessage = '';
    let errorMessage = '';

    try {
      const restoredShares = keySharesItem.buildSharesFromBytes(shares, operatorsCount);
      const { sharesPublicKeys, encryptedKeys } = restoredShares;
      restoredSharesPublicKeys = sharesPublicKeys;
      restoredSharesEncryptedKeys = encryptedKeys;
    }
    catch (e: any) {
      sharesError = e.stack || e.trace || e;
      sharesErrorMessage = e.message;
      errorMessage = 'Can not extract shares from bytes';
    }

    if (!sharesError && !errorMessage) {
      const signatureData = { ownerNonce, publicKey: validatorPublicKey, ownerAddress };
      try {
        await keySharesItem.validateSingleShares(shares, signatureData)
      }
      catch (e: any) {
        signatureError = e.stack || e.trace || e;
        signatureErrorMessage = e.message;
        errorMessage = 'Failed to validate single shares';
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
      memo: !!sharesError || !!signatureError ?
        [{
          message: errorMessage,
          error: sharesError || signatureError,
          data: `${sharesErrorMessage}${signatureErrorMessage ? '. ' + signatureErrorMessage : ''}`, blockNumber
        }] : []
    }
  }
}

export { SSVKeys };
