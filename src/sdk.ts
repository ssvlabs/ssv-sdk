import { createClusterManager } from '@/libs/cluster';
import { createDaoManager } from '@/libs/dao';
import { createOperatorManager } from '@/libs/operator';
import { createUtils } from '@/libs/utils';
import type { WalletClient } from 'viem';
import type { ConfigReturnType } from '@/config';
import { createConfig, createContractInteractions, isConfig } from '@/config';
import type { ConfigArgs } from '@/utils';
import { configArgsSchema } from '@/utils';

export class SSVSDK {
  readonly config: ConfigReturnType;
  readonly clusters: ReturnType<typeof createClusterManager>;
  readonly dao: ReturnType<typeof createDaoManager>;
  operators: ReturnType<typeof createOperatorManager>;
  readonly api: ConfigReturnType['api'];
  contract: ConfigReturnType['contract'];
  readonly utils: ReturnType<typeof createUtils>;

  constructor(props: ConfigArgs | ConfigReturnType) {
    this.config = isConfig(props) ? props : createConfig(props);
    this.clusters = createClusterManager(this.config);
    this.dao = createDaoManager(this.config);
    this.operators = createOperatorManager(this.config);
    this.api = this.config.api;
    this.contract = this.config.contract;
    this.utils = createUtils(this.config);
  }

  connectWallet(walletClient: WalletClient) {
    configArgsSchema.parse({
      publicClient: this.config.publicClient,
      walletClient,
    });

    this.config.walletClient = walletClient;
    this.config.contract = createContractInteractions({
      walletClient,
      publicClient: this.config.publicClient,
      addresses: this.config.contractAddresses,
    });
    this.contract = this.config.contract;
    this.operators = createOperatorManager(this.config);
    return this;
  }
}
