var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { registerDecorator, ValidatorConstraint } from 'class-validator';
import { OperatorsCountsMismatchError } from '../../../exceptions/operator';
let MatchLengthValidatorConstraint = class MatchLengthValidatorConstraint {
    validate(value, args) {
        const [relatedPropertyName, customError] = args.constraints;
        const relatedLength = args.object[relatedPropertyName].length;
        if (!Array.isArray(value)) {
            Object.values(value).forEach((arr) => {
                if (relatedLength !== arr.length) {
                    throw new OperatorsCountsMismatchError(args.object[relatedPropertyName], value, customError.message);
                }
            });
        }
        else {
            if (relatedLength !== value.length) {
                throw new OperatorsCountsMismatchError(args.object[relatedPropertyName], value, customError.message);
            }
        }
        return true;
    }
    defaultMessage() {
        return 'The length of the entries lists are not equal';
    }
};
MatchLengthValidatorConstraint = __decorate([
    ValidatorConstraint({ name: 'matchLength', async: false })
], MatchLengthValidatorConstraint);
export { MatchLengthValidatorConstraint };
export function MatchLengthValidator(property, validationOptions) {
    return function (object, propertyName) {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [property, validationOptions],
            validator: MatchLengthValidatorConstraint,
        });
    };
}
