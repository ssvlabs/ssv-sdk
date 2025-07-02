var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { registerDecorator, ValidatorConstraint } from 'class-validator';
import { DuplicatedOperatorIdError, DuplicatedOperatorPublicKeyError } from '@/libs/ssv-keys/exceptions/operator';
let OpeatorsListValidatorConstraint = class OpeatorsListValidatorConstraint {
    validate(operatorsList) {
        const operatorIds = new Set(), operatorPublicKeys = new Set();
        for (const operator of operatorsList || []) {
            if (operatorIds.has(operator.id)) {
                throw new DuplicatedOperatorIdError(operator, `The operator ID '${operator.id}' is duplicated in the list`);
            }
            operatorIds.add(operator.id);
            if (operatorPublicKeys.has(operator.operatorKey)) {
                throw new DuplicatedOperatorPublicKeyError(operator, `The public key for operator ID ${operator.id} is duplicated in the list`);
            }
            operatorPublicKeys.add(operator.operatorKey);
        }
        return true;
    }
    defaultMessage() {
        return 'The list of operators contains duplicate entries';
    }
};
OpeatorsListValidatorConstraint = __decorate([
    ValidatorConstraint({ name: 'uniqueList', async: false })
], OpeatorsListValidatorConstraint);
export { OpeatorsListValidatorConstraint };
export function OpeatorsListValidator(validationOptions) {
    return function (object, propertyName) {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: OpeatorsListValidatorConstraint,
        });
    };
}
