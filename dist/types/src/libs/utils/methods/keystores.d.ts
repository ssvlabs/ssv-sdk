import { SSVKeys } from 'ssv-keys';
import type { KeySharesPayload } from 'ssv-keys/dist/tsc/src/lib/KeyShares/KeySharesData/KeySharesPayload';
export declare const ssvKeys: SSVKeys;
type GenerateKeySharesArgs = {
    operator_keys: string[];
    operator_ids: number[];
    keystore: string | string[];
    keystore_password: string;
    owner_address: string;
    nonce: number;
};
export declare const generateKeyShares: (args: GenerateKeySharesArgs) => Promise<KeySharesPayload[]>;
export {};
