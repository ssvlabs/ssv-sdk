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
    if (isConfig(props)) {
      this.config = props;
    } else {
      if (hasIncompletePrebuiltConfigShape(props)) {
        throw new Error(
          'Incomplete prebuilt config object: normalized SDK configs must include a beacon field. The normalized beacon shape is required even when beacon.endpoint is undefined.',
        );
      }

      this.config = createConfig(props);
    }

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

const isNonNullObject = (
  value: unknown,
): value is Record<PropertyKey, unknown> => {
  return typeof value === 'object' && value !== null;
};

const hasIncompletePrebuiltConfigShape = (props: unknown): boolean => {
  if (!isNonNullObject(props)) {
    return false;
  }

  return (
    'publicClient' in props &&
    'chain' in props &&
    'api' in props &&
    'contractAddresses' in props &&
    'contract' in props &&
    'subgraph' in props &&
    'rest' in props &&
    !('beacon' in props && isNonNullObject(props.beacon))
  );
};
