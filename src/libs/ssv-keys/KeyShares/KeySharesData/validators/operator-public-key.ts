import { registerDecorator, ValidatorConstraint } from 'class-validator';
import type { ValidatorConstraintInterface, ValidationOptions } from 'class-validator';
import { OperatorPublicKeyValidator } from '@/libs/ssv-keys/validators';

@ValidatorConstraint({ name: 'operatorKey', async: false })
export class OperatorPublicKeyValidatorConstraint implements ValidatorConstraintInterface {
  validate(value: string) {
    return OperatorPublicKeyValidator(value);
  }

  defaultMessage() {
    return 'Invalid operator public key';
  }
}

export function OperatorPublicKeyValidator(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: OperatorPublicKeyValidatorConstraint,
    });
  };
}
