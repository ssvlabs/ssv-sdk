var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { decode } from 'js-base64';
import { util } from 'node-forge';
import { registerDecorator, ValidatorConstraint } from 'class-validator';
import { decodeAbiParameters } from 'viem';
import { KeySharesAbiDecodeError } from '@/libs/ssv-keys/exceptions/keyshares';
/* Try to BLS deserialize validator public key. */
let EncryptedKeyValidatorConstraint = class EncryptedKeyValidatorConstraint {
    validate(value) {
        let keyWithError = '';
        try {
            const encryptedKeys = Array.isArray(value) ? value : [value];
            encryptedKeys.forEach((key) => {
                keyWithError = key;
                util.decode64(key.startsWith('0x') ? decodeAbiParameters([{ type: 'string' }], key)[0] : key);
            });
        }
        catch (e) {
            throw new KeySharesAbiDecodeError(keyWithError, `Filed ABI decode shares encrypted key. Error: ${e.message}`);
        }
        return true;
    }
    defaultMessage() {
        return 'Filed ABI decode shares encrypted key';
    }
};
EncryptedKeyValidatorConstraint = __decorate([
    ValidatorConstraint({ name: 'encryptedKey', async: false })
], EncryptedKeyValidatorConstraint);
export { EncryptedKeyValidatorConstraint };
export function EncryptedKeyValidator(validationOptions) {
    return function (object, propertyName) {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: EncryptedKeyValidatorConstraint,
        });
    };
}
