import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class OperatorPublicKeyValidatorConstraint implements ValidatorConstraintInterface {
    validate(value: string): boolean;
    defaultMessage(): string;
}
export declare function OperatorPublicKeyValidator(validationOptions?: ValidationOptions): (object: object, propertyName: string) => void;
