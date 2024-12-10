import { decode } from 'js-base64';
import { registerDecorator, ValidatorConstraint } from 'class-validator';
import type { ValidatorConstraintInterface, ValidationOptions } from 'class-validator';
import { decodeParameter } from '@/libs/ssv-keys/helpers/web3.helper';
import { KeySharesAbiDecodeError } from '@/libs/ssv-keys/exceptions/keyshares';

/* Try to BLS deserialize validator public key. */
@ValidatorConstraint({ name: 'encryptedKey', async: false })
export class EncryptedKeyValidatorConstraint implements ValidatorConstraintInterface {
  validate(value: any) {
    let keyWithError = '';
    try {
      const encryptedKeys = Array.isArray(value) ? value : [value];
      encryptedKeys.forEach((key: any) => {
        keyWithError = key;
        decode(key.startsWith('0x') ? decodeParameter('string', key): key);
      });
    } catch (e: any) {
      throw new KeySharesAbiDecodeError(keyWithError, `Filed ABI decode shares encrypted key. Error: ${e.message}`);
    }

    return true;
  }

  defaultMessage() {
    return 'Filed ABI decode shares encrypted key';
  }
}

export function EncryptedKeyValidator(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: EncryptedKeyValidatorConstraint,
    });
  };
}