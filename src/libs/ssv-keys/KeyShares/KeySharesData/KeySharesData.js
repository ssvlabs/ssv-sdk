var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsNumber, IsOptional, IsString, Length, ValidateNested, validateSync } from 'class-validator';
import { operatorSortedList } from '../../helpers/operator.helper';
import { OpeatorsListValidator, OwnerAddressValidator, OwnerNonceValidator, PublicKeyValidator } from './validators';
export class KeySharesData {
    constructor() {
        Object.defineProperty(this, "ownerNonce", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "ownerAddress", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "publicKey", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "operators", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
    }
    update(data) {
        if (data.ownerAddress) {
            this.ownerAddress = data.ownerAddress;
        }
        if (typeof data.ownerNonce === 'number') {
            this.ownerNonce = data.ownerNonce;
        }
        if (data.publicKey) {
            this.publicKey = data.publicKey;
        }
        if (data.operators) {
            this.operators = operatorSortedList(data.operators);
        }
    }
    /**
     * Do all possible validations.
     */
    async validate() {
        validateSync(this);
    }
    /**
     * Get the list of operators IDs.
     */
    get operatorIds() {
        if (!this.operators?.length) {
            return [];
        }
        return this.operators.map(operator => parseInt(String(operator.id), 10));
    }
    /**
     * Get the list of operators public keys.
     */
    get operatorPublicKeys() {
        if (!this.operators?.length) {
            return [];
        }
        return this.operators.map(operator => String(operator.operatorKey));
    }
}
__decorate([
    IsOptional(),
    IsNumber(),
    OwnerNonceValidator(),
    __metadata("design:type", Object)
], KeySharesData.prototype, "ownerNonce", void 0);
__decorate([
    IsOptional(),
    IsString(),
    OwnerAddressValidator(),
    __metadata("design:type", Object)
], KeySharesData.prototype, "ownerAddress", void 0);
__decorate([
    IsOptional(),
    IsString(),
    Length(98, 98),
    PublicKeyValidator(),
    __metadata("design:type", Object)
], KeySharesData.prototype, "publicKey", void 0);
__decorate([
    IsOptional(),
    ValidateNested({ each: true }),
    OpeatorsListValidator(),
    __metadata("design:type", Object)
], KeySharesData.prototype, "operators", void 0);
