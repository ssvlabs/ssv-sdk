import { ForgeEncrypt } from '@/libs/ssv-keys/Encryption/utils';
import { OperatorPublicKeyError } from '@/libs/ssv-keys/exceptions/operator';
import { OperatorPublicKeyValidator } from '@/libs/ssv-keys/validators';
export default class Encryption {
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
            OperatorPublicKeyValidator(operatorPublicKey);
            const forgeEncrypt = new ForgeEncrypt();
            forgeEncrypt.setPublicKey(operatorPublicKey);
            const encryptedPrivateKey = forgeEncrypt.encrypt(this.shares[idx].privateKey);
            if (!encryptedPrivateKey) {
                throw new OperatorPublicKeyError({
                    rsa: operatorPublicKey,
                    base64: encryptedPrivateKey,
                }, 'Private key encryption failed.');
            }
            const encryptedShare = {
                operatorPublicKey,
                privateKey: encryptedPrivateKey,
                publicKey: this.shares[idx].publicKey,
            };
            encryptedShares.push(encryptedShare);
        }
        return encryptedShares;
    }
}
