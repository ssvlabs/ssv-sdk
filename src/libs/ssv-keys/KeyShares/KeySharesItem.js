var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsOptional, ValidateNested, validateSync } from 'class-validator';
import { getAddress, toBytes, toHex } from 'viem';
import { buildSignature, hexArrayToBytes, privateToPublicKey, validateSignature, } from '../helpers/web3.helper';
import { KeySharesData } from '@/libs/ssv-keys/KeyShares/KeySharesData/KeySharesData';
import { SSVKeysException } from '../exceptions/base';
import { OwnerAddressFormatError, OwnerNonceFormatError } from '../exceptions/keystore';
import { operatorSortedList } from '../helpers/operator.helper';
import { KeySharesPayload } from './KeySharesData/KeySharesPayload';
const SIGNATURE_LENGTH = 192;
const PUBLIC_KEY_LENGTH = 96;
/**
 * Key shares file data interface.
 */
export class KeySharesItem {
    constructor() {
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "payload", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "error", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: undefined
        });
        this.data = new KeySharesData();
        this.payload = new KeySharesPayload();
    }
    /**
     * Build payload from operators list, encrypted shares and validator public key
     */
    async buildPayload(metaData, toSignatureData) {
        const { ownerAddress, ownerNonce, privateKey } = toSignatureData;
        if (!Number.isInteger(ownerNonce) || ownerNonce < 0) {
            throw new OwnerNonceFormatError(ownerNonce, 'Owner nonce is not positive integer');
        }
        let address;
        try {
            address = getAddress(ownerAddress);
        }
        catch {
            throw new OwnerAddressFormatError(ownerAddress, 'Owner address is not a valid Ethereum address');
        }
        const payload = this.payload.build({
            publicKey: metaData.publicKey,
            operatorIds: operatorSortedList(metaData.operators).map((operator) => operator.id),
            encryptedShares: metaData.encryptedShares,
        });
        const signature = await buildSignature(`${address}:${ownerNonce}`, privateKey);
        const signSharesBytes = hexArrayToBytes([signature, payload.sharesData]);
        payload.sharesData = `0x${signSharesBytes.toString('hex')}`;
        // verify signature
        await this.validateSingleShares(payload.sharesData, {
            ownerAddress,
            ownerNonce,
            publicKey: await privateToPublicKey(privateKey),
        });
        return payload;
    }
    async validateSingleShares(shares, fromSignatureData) {
        const { ownerAddress, ownerNonce, publicKey } = fromSignatureData;
        if (!Number.isInteger(ownerNonce) || ownerNonce < 0) {
            throw new OwnerNonceFormatError(ownerNonce, 'Owner nonce is not positive integer');
        }
        const address = getAddress(ownerAddress);
        const signaturePt = shares.replace('0x', '').substring(0, SIGNATURE_LENGTH);
        await validateSignature(`${address}:${ownerNonce}`, `0x${signaturePt}`, publicKey);
    }
    /**
     * Build shares from bytes string and operators list length
     * @param bytes
     * @param operatorCount
     */
    buildSharesFromBytes(bytes, operatorCount) {
        // Validate the byte string format (hex string starting with '0x')
        if (!bytes.startsWith('0x') || !/^(0x)?[0-9a-fA-F]*$/.test(bytes)) {
            throw new SSVKeysException('Invalid byte string format');
        }
        // Validate the operator count (positive integer)
        if (operatorCount <= 0 || !Number.isInteger(operatorCount)) {
            throw new SSVKeysException('Invalid operator count');
        }
        const sharesPt = bytes.slice(2 + SIGNATURE_LENGTH);
        const pkSplit = sharesPt.substring(0, operatorCount * PUBLIC_KEY_LENGTH);
        const pkBytes = toBytes('0x' + pkSplit);
        // const sharesPublicKeys = this.splitArray(operatorCount, pkArray).map((item) => hexlify(item))
        const sharesPublicKeys = this.splitArray(operatorCount, pkBytes).map((item) => toHex(item));
        const eSplit = bytes.substring(operatorCount * PUBLIC_KEY_LENGTH);
        const eBytes = toBytes('0x' + eSplit);
        const encryptedKeys = this.splitArray(operatorCount, eBytes).map((item) => Buffer.from(toHex(item).slice(2), 'hex').toString('base64'));
        return { sharesPublicKeys, encryptedKeys };
    }
    /**
     * Updates the current instance with partial data and payload, and validates.
     */
    update(data) {
        this.data.update(data);
        this.validate();
    }
    /**
     * Validate everything
     */
    validate() {
        validateSync(this);
    }
    /**
     * Stringify key shares to be ready for saving in file.
     */
    toJson() {
        return JSON.stringify({
            data: this.data || null,
            payload: this.payload || null,
        }, null, 2);
    }
    splitArray(parts, arr) {
        const partLength = Math.floor(arr.length / parts);
        const partsArr = [];
        for (let i = 0; i < parts; i++) {
            const start = i * partLength;
            const end = start + partLength;
            partsArr.push(arr.slice(start, end));
        }
        return partsArr;
    }
    /**
     * Initialise from JSON or object data.
     */
    static async fromJson(content) {
        const body = typeof content === 'string' ? JSON.parse(content) : content;
        const instance = new KeySharesItem();
        try {
            instance.data.update(body.data);
            instance.payload.update(body.payload);
            instance.validate();
            // Custom validation: verify signature
            await instance.validateSingleShares(instance.payload.sharesData, {
                ownerAddress: instance.data.ownerAddress,
                ownerNonce: instance.data.ownerNonce,
                publicKey: instance.data.publicKey,
            });
        }
        catch (e) {
            instance.error = e;
        }
        return instance;
    }
}
__decorate([
    IsOptional(),
    ValidateNested(),
    __metadata("design:type", KeySharesData)
], KeySharesItem.prototype, "data", void 0);
__decorate([
    IsOptional(),
    ValidateNested(),
    __metadata("design:type", KeySharesPayload)
], KeySharesItem.prototype, "payload", void 0);
__decorate([
    IsOptional(),
    __metadata("design:type", Object)
], KeySharesItem.prototype, "error", void 0);
