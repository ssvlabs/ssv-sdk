import { createClusterManager } from './libs/cluster';
import { createDaoManager } from './libs/dao';
import { createOperatorManager } from './libs/operator';
import { createUtils } from './libs/utils';
import { WalletClient } from 'viem';
import { ConfigReturnType } from './config';
import { ConfigArgs } from './utils';
export declare class SSVSDK {
    readonly config: ConfigReturnType;
    readonly clusters: ReturnType<typeof createClusterManager>;
    readonly dao: ReturnType<typeof createDaoManager>;
    operators: ReturnType<typeof createOperatorManager>;
    readonly api: ConfigReturnType['api'];
    contract: ConfigReturnType['contract'];
    readonly utils: ReturnType<typeof createUtils>;
    constructor(props: ConfigArgs | ConfigReturnType);
    connectWallet(walletClient: WalletClient): this;
}
