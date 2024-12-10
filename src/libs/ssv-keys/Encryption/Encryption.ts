import JSEncrypt from '@/libs/ssv-keys/JSEncrypt';
import type { IShares, IEncryptShare } from '@/libs/ssv-keys/interfaces';
import { OperatorPublicKeyValidator } from '@/libs/ssv-keys/validators';
import { OperatorPublicKeyError } from '@/libs/ssv-keys/exceptions/operator';

export default class Encryption {
  private readonly operatorPublicKeys: string[];
  private readonly shares: IShares[];


  constructor(operatorPublicKeys: string[], shares: IShares[]) {
    this.operatorPublicKeys = [...operatorPublicKeys];
    this.shares = shares;
  }

  encrypt(): IEncryptShare[] {
    const encryptedShares: IEncryptShare[] = [];
    for (const [idx, operatorPublicKey] of this.operatorPublicKeys.entries()) {
      OperatorPublicKeyValidator(operatorPublicKey);
      const jsEncrypt = new JSEncrypt({});
      jsEncrypt.setPublicKey(operatorPublicKey)
      const encryptedPrivateKey = jsEncrypt.encrypt(this.shares[idx].privateKey);
      if (!encryptedPrivateKey) {
        throw new OperatorPublicKeyError(
          {
            rsa: operatorPublicKey,
            base64: encryptedPrivateKey,
          },
          'Private key encryption failed.',
        );
      }
      const encryptedShare: IEncryptShare = {
          operatorPublicKey,
          privateKey: encryptedPrivateKey,
          publicKey: this.shares[idx].publicKey,
      };
      encryptedShares.push(encryptedShare);
    }
    return encryptedShares;
  }
}
