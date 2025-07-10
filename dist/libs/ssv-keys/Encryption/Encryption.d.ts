import { IEncryptShare, IShares } from '../interfaces';
export default class Encryption {
    private readonly operatorPublicKeys;
    private readonly shares;
    constructor(operatorPublicKeys: string[], shares: IShares[]);
    encrypt(): IEncryptShare[];
}
