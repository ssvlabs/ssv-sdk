import { SSVKeysException } from './base';
export class KeySharesAbiDecodeError extends SSVKeysException {
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
