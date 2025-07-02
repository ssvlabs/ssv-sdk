import { SSVKeysException } from './base';
export class BLSDeserializeError extends SSVKeysException {
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
export class SingleSharesSignatureInvalid extends SSVKeysException {
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
