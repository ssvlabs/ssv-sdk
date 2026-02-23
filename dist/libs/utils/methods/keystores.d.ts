import { KeySharesPayload } from '../../ssv-keys/KeyShares/KeySharesData/KeySharesPayload';
import { SSVKeys } from '../../ssv-keys/SSVKeys';
export declare const ssvKeys: SSVKeys;
type GenerateKeySharesArgs = {
    operatorKeys: string[];
    operatorIds: number[];
    keystore: string | string[];
    keystorePassword: string;
    ownerAddress: string;
    nonce: number;
};
export declare const generateKeyShares: (args: GenerateKeySharesArgs) => Promise<KeySharesPayload[]>;
export {};
