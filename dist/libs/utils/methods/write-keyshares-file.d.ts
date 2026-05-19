import { ConfigReturnType } from '../../../config';
import { KeySharesItem } from '../../ssv-keys/KeyShares/KeySharesItem';
import { IKeySharesPartialData, IKeySharesPartialPayload, IOperator } from '../../ssv-keys/interfaces';
export type KeySharesFileShare = {
    data: IKeySharesPartialData;
    payload: IKeySharesPartialPayload;
};
type WriteKeysharesFileArgs = {
    path: string;
    shares: Array<KeySharesItem | KeySharesFileShare | IKeySharesPartialPayload>;
    ownerAddress?: string;
    nonce?: number;
    operators?: IOperator[];
};
export declare const writeKeysharesFile: (config: ConfigReturnType, args: WriteKeysharesFileArgs) => Promise<void>;
export {};
