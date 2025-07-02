var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { registerDecorator, ValidatorConstraint } from 'class-validator';
import { OwnerNonceFormatError } from '@/libs/ssv-keys/exceptions/keystore';
/* Try to validate owner nonce. */
let OwnerNonceValidatorConstraint = class OwnerNonceValidatorConstraint {
    validate(value) {
        if (!Number.isInteger(value) || value < 0) {
            throw new OwnerNonceFormatError(value, 'Owner nonce is not positive integer');
        }
        return true;
    }
    defaultMessage() {
        return 'Invalid owner nonce';
    }
};
OwnerNonceValidatorConstraint = __decorate([
    ValidatorConstraint({ name: 'ownerNonce', async: false })
], OwnerNonceValidatorConstraint);
export { OwnerNonceValidatorConstraint };
export function OwnerNonceValidator(validationOptions) {
    return function (object, propertyName) {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: OwnerNonceValidatorConstraint,
        });
    };
}
