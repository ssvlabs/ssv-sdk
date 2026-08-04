import { createClusterManager } from '@/libs/cluster';
import { createDaoManager } from '@/libs/dao';
import { createOperatorManager } from '@/libs/operator';
import { createUtils } from '@/libs/utils';
import type { WalletClient } from 'viem';
import type { ConfigReturnType } from '@/config';
import {
  createConfig,
  createContractInteractions,
  isConfig,
  isNonNullObject,
} from '@/config';
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
          'Incomplete prebuilt config object: this looks like a normalized SDK config but is missing or has an invalid value for one of its required fields (publicClient, chain, api, contractAddresses, contract, subgraph, rest, beacon). Provide a complete config object, or pass ConfigArgs (publicClient/walletClient/extendedConfig) instead.',
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

// Fields that only ever appear on a normalized ConfigReturnType, never on
// raw ConfigArgs (publicClient/walletClient/extendedConfig) — their presence
// signals "this was meant to be a prebuilt config."
const CONFIG_RETURN_TYPE_ONLY_KEYS = [
  'chain',
  'api',
  'contractAddresses',
  'contract',
  'subgraph',
  'rest',
  'beacon',
] as const;

const hasIncompletePrebuiltConfigShape = (props: unknown): boolean => {
  if (!isNonNullObject(props)) {
    return false;
  }

  const looksPrebuilt = CONFIG_RETURN_TYPE_ONLY_KEYS.some(
    (key) => key in props,
  );

  // isConfig validates every field's presence and shape symmetrically, so
  // reuse it here instead of re-deriving which one field is broken — a
  // prebuilt-looking object that fails isConfig for ANY reason (not just an
  // invalid beacon) must not silently fall through to createConfig, which
  // would rebuild everything from chain defaults and discard custom values.
  return looksPrebuilt && !isConfig(props);
};
