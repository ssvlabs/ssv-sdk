// import JSEncrypt from '@/libs/ssv-keys/JSEncrypt';
import { ForgeEncrypt }from '@/libs/ssv-keys/Encryption/utils';
import { OperatorPublicKeyError } from '@/libs/ssv-keys/exceptions/operator';
import type { IEncryptShare, IShares } from '@/libs/ssv-keys/interfaces';
import { OperatorPublicKeyValidator } from '@/libs/ssv-keys/validators';

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
      const forgeEncrypt = new ForgeEncrypt();
      forgeEncrypt.setPublicKey(operatorPublicKey)
      const encryptedPrivateKey = forgeEncrypt.encrypt(this.shares[idx].privateKey);
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
