import { SSVKeysException } from './base';
export class DuplicatedOperatorIdError extends SSVKeysException {
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
export class DuplicatedOperatorPublicKeyError extends SSVKeysException {
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
export class OperatorsCountsMismatchError extends SSVKeysException {
    constructor(propertyListOne, propertyListTwo, message) {
        super(message);
        Object.defineProperty(this, "listOne", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "listTwo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.listOne = propertyListOne;
        this.listTwo = propertyListTwo;
    }
}
export class OperatorPublicKeyError extends SSVKeysException {
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
