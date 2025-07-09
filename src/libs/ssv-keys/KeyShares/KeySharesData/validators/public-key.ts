import { registerDecorator, ValidatorConstraint } from 'class-validator';
import type { ValidatorConstraintInterface, ValidationOptions } from 'class-validator';
import bls from '@/libs/ssv-keys/BLS';
import { BLSDeserializeError } from '@/libs/ssv-keys/exceptions/bls';

/* Try to BLS deserialize validator public key. */
@ValidatorConstraint({ name: 'publicKey', async: true })
export class PublicKeyValidatorConstraint implements ValidatorConstraintInterface {
  async validate(value: any) {
    try {
      if (typeof value === 'string') {
        bls.deserializeHexStrToPublicKey(value.replace('0x', ''));
      } else {
        value.forEach((item: string) => bls.deserializeHexStrToPublicKey(item.replace('0x', '')));
      }
    } catch (e) {
      throw new BLSDeserializeError( value, 'Failed to BLS deserialize validator public key');
    }
    return true;
  }

  defaultMessage() {
    return 'Invalid public key';
  }
}

export function PublicKeyValidator(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    if (!object || typeof object !== 'object') {
      throw new Error(
        `@PublicKeyValidator must be used on a class property — received ${typeof object} for ${propertyName}`
      );
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
