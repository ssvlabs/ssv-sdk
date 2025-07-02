import type { IEncryptShare, IShares } from '@/libs/ssv-keys/interfaces';
export default class Encryption {
    private readonly operatorPublicKeys;
    private readonly shares;
    constructor(operatorPublicKeys: string[], shares: IShares[]);
    encrypt(): IEncryptShare[];
}
