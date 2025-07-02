var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { hexArrayToBytes } from '../../helpers/web3.helper';
import { IsNumber, IsString, Length, validateSync } from 'class-validator';
import { PublicKeyValidator } from './validators';
/**
 * Key Shares Payload
 */
export class KeySharesPayload {
    constructor() {
        Object.defineProperty(this, "sharesData", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "publicKey", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "operatorIds", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    /**
     * Converts arrays of public and private keys to a single hexadecimal string.
     * @param publicKeys Array of public keys.
     * @param privateKeys Array of private keys.
     * @returns Hexadecimal string representation of keys.
     */
    _sharesToBytes(publicKeys, privateKeys) {
        const encryptedShares = [...privateKeys].map((item) => '0x' + Buffer.from(item, 'base64').toString('hex'));
        const pkPsBytes = hexArrayToBytes([...publicKeys, ...encryptedShares]);
        return `0x${pkPsBytes.toString('hex')}`;
    }
    /**
     * Updates the payload with new data and validates it.
     * @param data Partial key shares payload to update.
     */
    update(data) {
        this.publicKey = data.publicKey;
        this.sharesData = data.sharesData;
        this.operatorIds = data.operatorIds;
        this.validate();
    }
    /**
     * Validates the current state of the instance.
     * @returns {void | ValidationError[]} Validation errors if any, otherwise undefined.
     */
    validate() {
        validateSync(this);
    }
    /**
     * Builds the payload from the given data.
     * @param data Data to build the payload.
     * @returns {KeySharesPayload} The current instance for chaining.
     */
    build(data) {
        this.publicKey = data.publicKey;
        this.operatorIds = data.operatorIds;
        this.sharesData = this._sharesToBytes(data.encryptedShares.map((share) => share.publicKey), data.encryptedShares.map((share) => share.privateKey));
        return this;
    }
}
__decorate([
    IsString(),
    __metadata("design:type", String)
], KeySharesPayload.prototype, "sharesData", void 0);
__decorate([
    IsString(),
    Length(98, 98),
    PublicKeyValidator(),
    __metadata("design:type", String)
], KeySharesPayload.prototype, "publicKey", void 0);
__decorate([
    IsNumber({}, { each: true }),
    __metadata("design:type", Array)
], KeySharesPayload.prototype, "operatorIds", void 0);
