import type { IOperator, IOperatorData } from '@/libs/ssv-keys/interfaces';
import { OperatorPublicKeyValidator } from '@/libs/ssv-keys/KeyShares/KeySharesData/validators/operator-public-key';
import { IsDefined, IsInt, IsNotEmpty, IsString, validateSync } from 'class-validator';

export class OperatorData implements IOperatorData {
  @IsNotEmpty({ message: 'The operator id is null'})
  @IsDefined({ message: 'The operator id is undefined'})
  @IsInt({ message: 'The operator id must be an integer'})
  public id: number;

  @IsNotEmpty({ message: 'The operator public key is null'})
  @IsDefined({ message: 'The operator public key is undefined'})
  @IsString({ message: 'The operator public key must be a string'})
  @OperatorPublicKeyValidator()
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
