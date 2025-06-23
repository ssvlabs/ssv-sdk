import { OperatorPublicKeyValidator as OperatorPKValidator } from '@/libs/ssv-keys/validators'
import type { ValidationOptions, ValidatorConstraintInterface } from 'class-validator'
import { registerDecorator, ValidatorConstraint } from 'class-validator'

@ValidatorConstraint({ name: 'operatorKey', async: false })
export class OperatorPublicKeyValidatorConstraint implements ValidatorConstraintInterface {
  validate(value: string) {
    return OperatorPKValidator(value)
  }

  defaultMessage() {
    return 'Invalid operator public key'
  }
}

export function OperatorPublicKeyValidator(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: OperatorPublicKeyValidatorConstraint,
    })
  }
}
