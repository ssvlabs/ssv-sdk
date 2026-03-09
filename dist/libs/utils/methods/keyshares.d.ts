import { ConfigReturnType } from '../../../config/create';
import { KeySharesItem } from '../../ssv-keys/KeyShares/KeySharesItem';
import { IKeySharesPartialPayload } from '../../ssv-keys/interfaces';
import { Operator } from '../../../types/operator';
import { Address, Hash } from 'viem';
type ValidatedKeysharesArgs = {
    keyshares: string | object | IKeySharesPartialPayload[];
    operatorIds: string[];
    ownerAddress?: Address;
};
export declare const validateSharesPreRegistration: (config: ConfigReturnType, { keyshares, operatorIds, ownerAddress }: ValidatedKeysharesArgs) => Promise<{
    available: KeySharesItem[];
    registered: KeySharesItem[];
    incorrect: KeySharesItem[];
}>;
type ValidatedKeysharesJSONArgs = {
    account: Address;
    operators: Pick<Operator, 'id' | 'publicKey'>[];
    keyshares: string | object;
};
export declare const validateKeysharesJSON: ({ account, operators, keyshares, }: ValidatedKeysharesJSONArgs) => Promise<KeySharesItem[]>;
export declare const validateEvent: (config: ConfigReturnType, hash: Hash) => Promise<false | {
    sharesPublicKeys: string[];
    encryptedKeys: string[];
}>;
export {};
