var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { registerDecorator, ValidatorConstraint } from 'class-validator';
import bls from '@/libs/ssv-keys/BLS';
import { BLSDeserializeError } from '@/libs/ssv-keys/exceptions/bls';
/* Try to BLS deserialize validator public key. */
let PublicKeyValidatorConstraint = class PublicKeyValidatorConstraint {
    async validate(value) {
        try {
            if (typeof value === 'string') {
                bls.deserializeHexStrToPublicKey(value.replace('0x', ''));
            }
            else {
                value.forEach((item) => bls.deserializeHexStrToPublicKey(item.replace('0x', '')));
            }
        }
        catch (e) {
            throw new BLSDeserializeError(value, 'Failed to BLS deserialize validator public key');
        }
        return true;
    }
    defaultMessage() {
        return 'Invalid public key';
    }
};
PublicKeyValidatorConstraint = __decorate([
    ValidatorConstraint({ name: 'publicKey', async: true })
], PublicKeyValidatorConstraint);
export { PublicKeyValidatorConstraint };
export function PublicKeyValidator(validationOptions) {
    return function (object, propertyName) {
        if (!object || typeof object !== 'object') {
            throw new Error(`@PublicKeyValidator must be used on a class property — received ${typeof object} for ${propertyName}`);
        }
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: PublicKeyValidatorConstraint,
        });
    };
}
