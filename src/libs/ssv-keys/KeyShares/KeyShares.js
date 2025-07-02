var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import equalVersion from 'semver/functions/eq';
import validVersion from 'semver/functions/valid';
import { SSVKeysException } from '@/libs/ssv-keys/exceptions/base';
import { IsOptional, ValidateNested, validateSync } from 'class-validator';
import { KeySharesItem } from './KeySharesItem';
/**
 * Represents a collection of KeyShares items with functionality for serialization,
 * deserialization, and validation.
 */
export class KeyShares {
    constructor(shares = []) {
        Object.defineProperty(this, "shares", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.shares = [...shares];
    }
    /**
     * Add a single KeyShares item to the collection.
     * @param keySharesItem The KeyShares item to add.
     */
    add(keySharesItem) {
        this.shares.push(keySharesItem);
    }
    list() {
        return this.shares;
    }
    /**
     * Validate the KeyShares instance using class-validator.
     * @returns The validation result.
     */
    validate() {
        validateSync(this);
    }
    /**
     * Converts the KeyShares instance to a JSON string.
     * @returns The JSON string representation of the KeyShares instance.
     */
    toJson() {
        return JSON.stringify({
            version: `v1.1.0`,
            createdAt: new Date().toISOString(),
            shares: this.shares.length > 0 ? this.shares : null,
        }, null, 2);
    }
    /**
     * Initialize the KeyShares instance from JSON or object data.
     * @param content The JSON string or object to initialize from.
     * @returns The KeyShares instance.
     * @throws Error if the version is incompatible or the shares array is invalid.
     */
    static async fromJson(content) {
        const body = typeof content === 'string' ? JSON.parse(content) : content;
        if (!validVersion(body.version)) {
            throw new SSVKeysException(`The file for keyshares must contain a version mark provided by ssv-keys.`);
        }
        if (!equalVersion(body.version, 'v1.1.0') && !equalVersion(body.version, 'v1.2.0')) {
            throw new SSVKeysException(`The keyshares file you are attempting to reuse does not have the same version (v1.1.0 or v1.2.0) as supported by ssv-keys`);
        }
        const instance = new KeyShares();
        instance.shares = [];
        if (Array.isArray(body.shares)) {
            // Process each item in the array
            for (const item of body.shares) {
                instance.shares.push(await KeySharesItem.fromJson(item));
            }
        }
        else {
            // Handle old format (single item)
            instance.shares.push(await KeySharesItem.fromJson(body));
        }
        return instance;
    }
}
__decorate([
    IsOptional(),
    ValidateNested({ each: true }),
    __metadata("design:type", Array)
], KeyShares.prototype, "shares", void 0);
