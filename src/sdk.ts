import { createClusterManager } from '@/libs/cluster';
import { createDaoManager } from '@/libs/dao';
import { createOperatorManager } from '@/libs/operator';
import { createUtils } from '@/libs/utils';
import type { ConfigReturnType } from './config/create';
import { createConfig, isConfig } from './config/create';
import type { ConfigArgs } from './utils/zod/config';

export class SSVSDK {
  readonly config: ConfigReturnType;
  readonly clusters: ReturnType<typeof createClusterManager>;
  readonly dao: ReturnType<typeof createDaoManager>;
  readonly operators: ReturnType<typeof createOperatorManager>;
  readonly api: ConfigReturnType['api'];
  readonly contract: ConfigReturnType['contract'];
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
}
