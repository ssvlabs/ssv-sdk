import crypto from 'crypto';
// import { keccak256, sha256 } from 'ethereumjs-util';
// import Wallet from 'ethereumjs-wallet';
import { keccak256, sha256, toHex } from 'viem';
// import { privateKeyToAccount } from 'viem/accounts';
import { syncScrypt } from 'scrypt-js';
import { EthereumWalletError, KeyStoreDataFormatError, KeyStoreInvalidError, KeyStorePasswordError } from '../exceptions/keystore';

interface V4Keystore {
  crypto: {
    kdf: {
      function: string;
      params: {
        dklen: number;
        n?: number;
        r?: number;
        p?: number;
        salt: string;
        c?: number;
        prf?: string;
      };
      message: string;
    };
    checksum: {
      function: string;
      params: any;
      message: string;
    };
    cipher: {
      function: string;
      params: {
        iv: string;
      };
      message: string;
    };
  };
  description: string;
  pubkey: string;
  path: string;
  uuid: string;
  version: number;
}

/**
 * Decrypt private key from key store data
 * Supports key store versions: v1, v3, v4
 *
 * Example of usage (Node env):
 *
 *  const keyStoreFilePath = path.join(process.cwd(), 'validator_keys', 'keystore.json');
 *  const keyStoreString: string = fs.readFileSync(keyStoreFilePath).toString();
 *  const keyStoreData = JSON.parse(keyStoreString);
 *  const keyStore = new EthereumKeyStore(keyStoreData);
 *  const password = 'testtest';
 *  console.log('Private Key:', await keyStore.getPrivateKey(password));
 */
class EthereumKeyStore {
  private readonly keyStoreData: V4Keystore;
  private privateKey = '';

  constructor(keyStoreData: any) {
    if (!keyStoreData) {
      throw new KeyStoreDataFormatError(keyStoreData, 'Key store data should be JSON or string');
    }
    this.keyStoreData = typeof keyStoreData === 'string' ? JSON.parse(keyStoreData) : keyStoreData;
    if (!this.keyStoreData.version) {
      throw new KeyStoreInvalidError(this.keyStoreData, 'Invalid keystore file');
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

  async getPrivateKey(password = ''): Promise<string> {
    if (this.privateKey) return this.privateKey;

    switch (this.keyStoreData.version) {
      case 3:
        this.privateKey = await this.fromV3(this.keyStoreData, password);
        break;
      case 4:
        this.privateKey = await this.fromCustomV4(this.keyStoreData, password);
        break;
      default:
        throw new EthereumWalletError('Unsupported keystore version');
    }

    if (!this.privateKey) {
      throw new KeyStorePasswordError('Invalid password');
    }

    return this.privateKey;
  }

  private async fromV3(json: any, password: string): Promise<string> {
    if (!json.crypto && json.Crypto) json.crypto = json.Crypto;
    const kdfparams = json.crypto.kdfparams;
    const salt = Buffer.from(kdfparams.salt, 'hex');
    const dklen = kdfparams.dklen;

    let derivedKey;
    if (json.crypto.kdf === 'scrypt') {
      derivedKey = syncScrypt(Buffer.from(password), salt, kdfparams.n, kdfparams.r, kdfparams.p, dklen);
    } else if (json.crypto.kdf === 'pbkdf2') {
      if (kdfparams.prf !== 'hmac-sha256') throw new EthereumWalletError('Unsupported PBKDF2 params');
      derivedKey = crypto.pbkdf2Sync(Buffer.from(password), salt, kdfparams.c, dklen, 'sha256');
    } else {
      throw new EthereumWalletError('Unsupported kdf type');
    }

    const ciphertext = Buffer.from(json.crypto.ciphertext, 'hex');
    const macCheck = Buffer.concat([Buffer.from(derivedKey.slice(16, 32)), ciphertext]);
    const mac = keccak256(toHex(macCheck)).replace(/^0x/, '');
    if (mac !== json.crypto.mac.toLowerCase()) {
      throw new EthereumWalletError('Invalid password');
    }

    const decipher = crypto.createDecipheriv(
      json.crypto.cipher,
      Buffer.from(derivedKey.slice(0, 16)),
      Buffer.from(json.crypto.cipherparams.iv, 'hex')
    );
    const seed = this.runCipherBuffer(decipher, ciphertext);
    return seed.toString('hex');
  }

  private async fromCustomV4(input: V4Keystore, password: string): Promise<string> {
    if (input.version !== 4) {
      throw new EthereumWalletError('Not a V4 wallet');
    }

    let derivedKey: Uint8Array;
    const { kdf, cipher, checksum } = input.crypto;

    const salt = Buffer.from(kdf.params.salt, 'hex');
    const dklen = kdf.params.dklen;

    if (kdf.function === 'scrypt') {
      const { n, r, p } = kdf.params;
      derivedKey = syncScrypt(Buffer.from(password), salt, n!, r!, p!, dklen);
    } else if (kdf.function === 'pbkdf2') {
      const { c, prf } = kdf.params;
      if (prf !== 'hmac-sha256') {
        throw new EthereumWalletError('Unsupported parameters to PBKDF2');
      }
      derivedKey = crypto.pbkdf2Sync(Buffer.from(password), salt, c!, dklen, 'sha256');
    } else {
      throw new EthereumWalletError('Unsupported key derivation scheme');
    }

    const ciphertext = Buffer.from(cipher.message, 'hex');
    const checksumBuffer = Buffer.concat([Buffer.from(derivedKey.slice(16, 32)), ciphertext]);

    const hashFn = checksum.function === 'sha256' ? sha256 : keccak256;
    const calculatedMac = hashFn(toHex(checksumBuffer));

    if (calculatedMac.replace(/^0x/, '') !== checksum.message.toLowerCase()) {
      throw new EthereumWalletError('Invalid password');
    }

    const decipher = crypto.createDecipheriv(
      cipher.function,
      Buffer.from(derivedKey.slice(0, 16)),
      Buffer.from(cipher.params.iv, 'hex')
    );
    const seed = this.runCipherBuffer(decipher, ciphertext);
    return seed.toString('hex');
  }

  private runCipherBuffer(cipher: crypto.Cipher | crypto.Decipher, data: Buffer): Buffer {
    return Buffer.concat([cipher.update(data), cipher.final()]);
  }

  // getViemAccount() {
  //   if (!this.privateKey) throw new Error('Private key not loaded yet');
  //   return privateKeyToAccount(`0x${this.privateKey}`);
  // }
}

export default EthereumKeyStore;
