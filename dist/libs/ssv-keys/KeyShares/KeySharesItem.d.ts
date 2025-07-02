import { IEncryptShare, IKeySharesPartialData, IOperator } from '../interfaces';
import { KeySharesData } from './KeySharesData/KeySharesData';
import { SSVKeysException } from '../exceptions/base';
import { KeySharesPayload } from './KeySharesData/KeySharesPayload';
export interface IKeySharesPayloadData {
    publicKey: string;
    operators: IOperator[];
    encryptedShares: IEncryptShare[];
}
export interface IKeySharesToSignatureData {
    ownerAddress: string;
    ownerNonce: number;
    privateKey: string;
}
export interface IKeySharesFromSignatureData {
    ownerAddress: string;
    ownerNonce: number;
    publicKey: string;
}
/**
 * Key shares file data interface.
 */
declare class KeySharesItem {
    data: KeySharesData;
    payload: KeySharesPayload;
    error: SSVKeysException | undefined;
    constructor();
    /**
     * Build payload from operators list, encrypted shares and validator public key
     */
    buildPayload(metaData: IKeySharesPayloadData, toSignatureData: IKeySharesToSignatureData): Promise<any>;
    validateSingleShares(shares: string, fromSignatureData: IKeySharesFromSignatureData): Promise<void>;
    /**
     * Build shares from bytes string and operators list length
     * @param bytes
     * @param operatorCount
     */
    buildSharesFromBytes(bytes: string, operatorCount: number): {
        sharesPublicKeys: string[];
        encryptedKeys: string[];
    };
    /**
     * Updates the current instance with partial data and payload, and validates.
     */
    update(data: IKeySharesPartialData): void;
    /**
     * Validate everything
     */
    validate(): void;
    /**
     * Stringify key shares to be ready for saving in file.
     */
    toJson(): string;
    private splitArray;
    /**
     * Initialise from JSON or object data.
     */
    static fromJson(content: string | unknown): Promise<KeySharesItem>;
}
export { KeySharesItem };
export type IKeySharesItem = InstanceType<typeof KeySharesItem>;
