export class SSVKeysException extends Error {
    constructor(message) {
        super(message);
        Object.defineProperty(this, "trace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
        this.trace = this.stack;
        this.stack = `${this.name}: ${this.message}`; // Customizing stack
    }
}
