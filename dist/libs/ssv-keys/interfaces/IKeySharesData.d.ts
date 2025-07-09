import { IOperator } from './IOperator.ts';
import { IOperatorData } from './IOperatorData.ts';
export interface IKeySharesData {
    ownerNonce?: number | null;
    ownerAddress?: string | null;
    publicKey?: string | null;
    operators?: IOperatorData[] | null;
    update(data: IKeySharesPartialData): void;
    validate(): void;
    get operatorIds(): number[];
    get operatorPublicKeys(): string[];
}
export interface IKeySharesPartialData {
    ownerNonce?: number | null;
    ownerAddress?: string | null;
    publicKey?: string | null;
    operators?: IOperator[] | null;
}
