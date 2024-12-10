import { IsDefined, IsInt, IsNotEmpty, IsString, validateSync } from 'class-validator';
import type { IOperator, IOperatorData } from '@/libs/ssv-keys/interfaces';
import { OperatorPublicKeyValidatorConstraint } from '@/libs/ssv-keys/KeyShares/KeySharesData/validators';

export class OperatorData implements IOperatorData {
  @IsNotEmpty({ message: 'The operator id is null'})
  @IsDefined({ message: 'The operator id is undefined'})
  @IsInt({ message: 'The operator id must be an integer'})
  public id: number;

  @IsNotEmpty({ message: 'The operator public key is null'})
  @IsDefined({ message: 'The operator public key is undefined'})
  @IsString({ message: 'The operator public key must be a string'})
  @OperatorPublicKeyValidatorConstraint()
  public operatorKey: string;

  constructor(data: IOperator) {
    this.id = data.id;
    this.operatorKey = data.operatorKey;
    this.validate();
  }

  /**
   * Validate operator id and public key
   */
  validate(): void {
    validateSync(this);
  }
}
