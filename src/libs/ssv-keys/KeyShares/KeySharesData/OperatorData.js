var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { OperatorPublicKeyValidator } from '@/libs/ssv-keys/KeyShares/KeySharesData/validators/operator-public-key';
import { IsDefined, IsInt, IsNotEmpty, IsString, validateSync } from 'class-validator';
export class OperatorData {
    constructor(data) {
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "operatorKey", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = data.id;
        this.operatorKey = data.operatorKey;
        this.validate();
    }
    /**
     * Validate operator id and public key
     */
    validate() {
        validateSync(this);
    }
}
__decorate([
    IsNotEmpty({ message: 'The operator id is null' }),
    IsDefined({ message: 'The operator id is undefined' }),
    IsInt({ message: 'The operator id must be an integer' }),
    __metadata("design:type", Number)
], OperatorData.prototype, "id", void 0);
__decorate([
    IsNotEmpty({ message: 'The operator public key is null' }),
    IsDefined({ message: 'The operator public key is undefined' }),
    IsString({ message: 'The operator public key must be a string' }),
    OperatorPublicKeyValidator(),
    __metadata("design:type", String)
], OperatorData.prototype, "operatorKey", void 0);
