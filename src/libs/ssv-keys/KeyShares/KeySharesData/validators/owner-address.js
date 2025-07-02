var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { registerDecorator, ValidatorConstraint } from 'class-validator';
import { getAddress } from 'viem';
import { OwnerAddressFormatError } from '../../../exceptions/keystore';
/* Try to validate ethereum owner address. */
let OwnerAddressValidatorConstraint = class OwnerAddressValidatorConstraint {
    validate(value) {
        try {
            getAddress(value);
        }
        catch {
            throw new OwnerAddressFormatError(value, 'Owner address is not a valid Ethereum address');
        }
        return true;
    }
    defaultMessage() {
        return 'Invalid owner address';
    }
};
OwnerAddressValidatorConstraint = __decorate([
    ValidatorConstraint({ name: 'ownerAddress', async: false })
], OwnerAddressValidatorConstraint);
export { OwnerAddressValidatorConstraint };
export function OwnerAddressValidator(validationOptions) {
    return function (object, propertyName) {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: OwnerAddressValidatorConstraint,
        });
    };
}
