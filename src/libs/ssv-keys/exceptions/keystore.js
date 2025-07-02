import { SSVKeysException } from './base';
export class KeyStoreDataFormatError extends SSVKeysException {
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
export class KeyStoreInvalidError extends SSVKeysException {
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
export class KeyStorePasswordError extends SSVKeysException {
    constructor(message) {
        super(message);
    }
}
export class EthereumWalletError extends SSVKeysException {
    constructor(message) {
        super(message);
    }
}
export class PrivateKeyFormatError extends SSVKeysException {
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
export class OwnerAddressFormatError extends SSVKeysException {
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
export class OwnerNonceFormatError extends SSVKeysException {
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
