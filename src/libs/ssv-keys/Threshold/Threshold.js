import bls from '@/libs/ssv-keys/BLS';
import { SSVKeysException } from '@/libs/ssv-keys/exceptions/base';
import { PrivateKeyFormatError } from '@/libs/ssv-keys/exceptions/keystore';
import { isOperatorsLengthValid } from '@/libs/ssv-keys/validators';
export class ThresholdInvalidOperatorsLengthError extends SSVKeysException {
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
export class ThresholdInvalidOperatorIdError extends SSVKeysException {
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
/**
 * Building threshold for list of operator IDs
 */
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
        if (!privateKeyString.startsWith('0x')) {
            throw new PrivateKeyFormatError(privateKeyString, 'The private key must be provided in the 0x format.');
        }
        // Validation
        operatorIds.map(operatorId => {
            if (!Number.isInteger(operatorId)) {
                throw new ThresholdInvalidOperatorIdError(operatorId, `Operator must be integer. Got: ${operatorId}`);
            }
        });
        if (!isOperatorsLengthValid(operatorIds.length)) {
            throw new ThresholdInvalidOperatorsLengthError(operatorIds, 'Invalid operators amount. Enter an 3f+1 compatible amount of operator ids.');
        }
        const msk = [];
        const mpk = [];
        if (!bls.deserializeHexStrToSecretKey) {
            await bls.init(bls.BLS12_381);
        }
        // Master key Polynomial
        this.privateKey = bls.deserializeHexStrToSecretKey(privateKeyString.replace('0x', ''));
        this.publicKey = this.privateKey.getPublicKey();
        msk.push(this.privateKey);
        mpk.push(this.publicKey);
        const F = (operatorIds.length - 1) / 3;
        // Construct poly
        for (let i = 1; i < operatorIds.length - F; i += 1) {
            const sk = new bls.SecretKey();
            sk.setByCSPRNG();
            msk.push(sk);
            const pk = sk.getPublicKey();
            mpk.push(pk);
        }
        // Evaluate shares - starting from 1 because 0 is master key
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
                id,
            });
        }
        const response = {
            privateKey: `0x${this.privateKey.serializeToHexStr()}`,
            publicKey: `0x${this.publicKey.serializeToHexStr()}`,
            shares: this.shares,
        };
        return response;
    }
}
export default Threshold;
