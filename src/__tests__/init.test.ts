import { isConfig } from '@/config';
import { chains, hoodi, paid_graph_endpoints } from '@/config/chains';
import { SSVSDK } from '@/sdk';
import type { ConfigArgs } from '@/utils';
import 'hardhat';
import { initializeContract } from 'hardhat/contract-helpers';
import {
  createPublicClient,
  createWalletClient,
  http,
  type PublicClient,
} from 'viem';
import { describe, expect, it } from 'vitest';

describe('SDK Initiation', async () => {
  const network = await initializeContract();

  it('should initialize the SDK', async () => {
    expect(() => {
      const transport = http(hoodi.rpcUrls.default.http[0]);
      const walletClient = createWalletClient({
        chain: hoodi,
        account: network.wallets[0].account,
        transport,
      });
      const publicClient = createPublicClient({
        chain: hoodi,
        transport,
      });
      return new SSVSDK({
        publicClient,
        walletClient,
      });
    }).not.toThrowError();
  });

  it('unsupported chain should throw an error', async () => {
    const network = await initializeContract();
    // initializeContract returns a hardhat chain, which is not supported by the SDK
    expect(
      () =>
        new SSVSDK({
          publicClient: network.publicClient,
          walletClient: network.wallets[0],
        }),
    ).toThrowError();
  });

  it('should initialize with custom contract addresses and endpoints', async () => {
    const transport = http(hoodi.rpcUrls.default.http[0]);
    const walletClient = createWalletClient({
      chain: hoodi,
      account: network.wallets[0].account,
      transport,
    });
    const publicClient = createPublicClient({
      chain: hoodi,
      transport,
    });

    const customAddresses = {
      setter: '0x1234567890123456789012345678901234567890' as const,
      getter: '0x0987654321098765432109876543210987654321' as const,
      token: '0xabcdef1234567890abcdef1234567890abcdef12' as const,
    };

    const extended = {
      subgraph: {
        endpoint: 'https://custom-graph-endpoint.com/graphql',
      },
      rest: {
        endpoint: 'https://custom-rest-endpoint.com/api',
      },
      beacon: {
        endpoint: 'https://custom-beacon-endpoint.com',
      },
      contracts: customAddresses,
    } satisfies ConfigArgs['extendedConfig'];

    const sdk = new SSVSDK({
      publicClient,
      walletClient,
      extendedConfig: extended,
    });

    // Verify custom contract addresses are used
    expect(sdk.config.contractAddresses).toEqual(customAddresses);
    // Verify custom endpoints are used
    expect(sdk.config.subgraph.endpoint).toBe(extended.subgraph.endpoint);
    expect(sdk.config.rest.endpoint).toBe(extended.rest.endpoint);
    expect(sdk.config.beacon.endpoint).toBe(extended.beacon.endpoint);
  });

  it('should expose bound beacon helpers on sdk.api', () => {
    const transport = http(hoodi.rpcUrls.default.http[0]);
    const publicClient = createPublicClient({
      chain: hoodi,
      transport,
    });

    const sdk = new SSVSDK({
      publicClient,
    });

    expect(sdk.api.getBeaconValidator).toBeTypeOf('function');
    expect(sdk.api.getBeaconValidators).toBeTypeOf('function');
    expect(sdk.api.getBeaconValidatorState).toBeTypeOf('function');
    expect(sdk.api.getBeaconValidatorStates).toBeTypeOf('function');
    expect(sdk.api.getBeaconValidatorLifecycleStage).toBeTypeOf('function');
    expect(sdk.api.waitForBeaconValidatorActivation).toBeTypeOf('function');
  });

  it('should initialize without beacon endpoint in normal config args', () => {
    const transport = http(hoodi.rpcUrls.default.http[0]);
    const publicClient = createPublicClient({
      chain: hoodi,
      transport,
    });

    const sdk = new SSVSDK({
      publicClient,
    });

    expect(sdk.config.beacon.endpoint).toBeUndefined();
  });

  it('should only treat normalized configs as ConfigReturnType', () => {
    const transport = http(hoodi.rpcUrls.default.http[0]);
    const publicClient = createPublicClient({
      chain: hoodi,
      transport,
    });

    const sdk = new SSVSDK({
      publicClient,
    });
    const { beacon: _beacon, ...legacyConfig } = sdk.config;

    expect(isConfig(sdk.config)).toBe(true);
    expect(isConfig(legacyConfig)).toBe(false);
  });

  it('should reject malformed configs with an invalid beacon shape', () => {
    const transport = http(hoodi.rpcUrls.default.http[0]);
    const publicClient = createPublicClient({
      chain: hoodi,
      transport,
    });

    const sdk = new SSVSDK({
      publicClient,
    });

    expect(
      isConfig({
        ...sdk.config,
        beacon: undefined,
      }),
    ).toBe(false);
    expect(
      isConfig({
        ...sdk.config,
        beacon: null,
      }),
    ).toBe(false);
  });

  it('should reject an incomplete prebuilt config object missing beacon', () => {
    const transport = http(hoodi.rpcUrls.default.http[0]);
    const publicClient = createPublicClient({
      chain: hoodi,
      transport,
    });

    const originalSdk = new SSVSDK({
      publicClient,
    });
    const { beacon: _beacon, ...incompleteConfig } = originalSdk.config;

    expect(isConfig(incompleteConfig)).toBe(false);
    expect(
      () => new SSVSDK(incompleteConfig as unknown as typeof originalSdk.config),
    ).toThrowError(
      'Incomplete prebuilt config object: normalized SDK configs must include a beacon field. The normalized beacon shape is required even when beacon.endpoint is undefined.',
    );
  });

  it('should accept a fully normalized prebuilt config with beacon', () => {
    const transport = http(hoodi.rpcUrls.default.http[0]);
    const publicClient = createPublicClient({
      chain: hoodi,
      transport,
    });

    const existingConfig = new SSVSDK({
      publicClient,
      extendedConfig: {
        beacon: {
          endpoint: 'https://custom-beacon-endpoint.com',
        },
      },
    }).config;

    const sdk = new SSVSDK(existingConfig);

    expect(sdk.config).toBe(existingConfig);
    expect(sdk.config.beacon.endpoint).toBe(
      'https://custom-beacon-endpoint.com',
    );
  });

  it('should initialize with paid subgraph', async () => {
    const transport = http(hoodi.rpcUrls.default.http[0]);
    const walletClient = createWalletClient({
      chain: hoodi,
      account: network.wallets[0].account,
      transport,
    });
    const publicClient = createPublicClient({
      chain: hoodi,
      transport,
    });

    const extended = {
      subgraph: {
        apiKey: '1234567890',
      },
    } satisfies ConfigArgs['extendedConfig'];

    const sdk = new SSVSDK({
      publicClient,
      walletClient,
      extendedConfig: extended,
    });

    const requestHeaders = sdk.config.subgraph.client.requestConfig
      .headers as Record<string, string>;

    // Verify custom endpoints are used
    expect(sdk.config.subgraph.endpoint).toBe(paid_graph_endpoints[hoodi.id]);
    expect(requestHeaders['Authorization']).toBe(
      `Bearer ${extended.subgraph.apiKey}`,
    );
  });

  describe('Client Validation', () => {
    it('should throw error when publicClient is not provided', () => {
      const transport = http(hoodi.rpcUrls.default.http[0]);
      const walletClient = createWalletClient({
        chain: hoodi,
        account: network.wallets[0].account,
        transport,
      });

      expect(() => {
        new SSVSDK({
          publicClient: null as unknown as PublicClient,
          walletClient,
        });
      }).toThrowError('Public client must be provided');
    });

    it('should throw error when beacon endpoint is invalid', () => {
      const transport = http(hoodi.rpcUrls.default.http[0]);
      const publicClient = createPublicClient({
        chain: hoodi,
        transport,
      });

      expect(() => {
        new SSVSDK({
          publicClient,
          extendedConfig: {
            beacon: {
              endpoint: 'not-a-url',
            },
          },
        });
      }).toThrowError('Invalid url');
    });

    it('should initialize without walletClient', () => {
      const transport = http(hoodi.rpcUrls.default.http[0]);
      const publicClient = createPublicClient({
        chain: hoodi,
        transport,
      });

      expect(() => {
        new SSVSDK({
          publicClient,
        });
      }).not.toThrowError();
    });

    it('should build write transaction data without walletClient', () => {
      const transport = http(hoodi.rpcUrls.default.http[0]);
      const publicClient = createPublicClient({
        chain: hoodi,
        transport,
      });

      const sdk = new SSVSDK({
        publicClient,
      });

      const txData = sdk.contract.token.write.transfer.getTransactionData({
        amount: 1n,
        recipient: network.wallets[0].account.address,
      });

      expect(txData.startsWith('0x')).toBe(true);
    });

    it('should throw when executing write without walletClient', async () => {
      const transport = http(hoodi.rpcUrls.default.http[0]);
      const publicClient = createPublicClient({
        chain: hoodi,
        transport,
      });

      const sdk = new SSVSDK({
        publicClient,
      });

      await expect(
        sdk.contract.token.write.transfer({
          args: {
            amount: 1n,
            recipient: network.wallets[0].account.address,
          },
        }),
      ).rejects.toThrowError(
        'Wallet client is required for write method "transfer". Provide walletClient in SDK config.',
      );
    });

    it('should refresh operator write bindings when connectWallet is called', () => {
      const transport = http(hoodi.rpcUrls.default.http[0]);
      const publicClient = createPublicClient({
        chain: hoodi,
        transport,
      });
      const walletClient = createWalletClient({
        chain: hoodi,
        account: network.wallets[0].account,
        transport,
      });

      const sdk = new SSVSDK({
        publicClient,
      });
      const previousRemoveOperator = sdk.operators.removeOperator;

      sdk.connectWallet(walletClient);

      expect(sdk.operators.removeOperator).not.toBe(previousRemoveOperator);
    });

    it('should throw error when publicClient has no chain property', () => {
      const transport = http(hoodi.rpcUrls.default.http[0]);
      const walletClient = createWalletClient({
        chain: hoodi,
        account: network.wallets[0].account,
        transport,
      });
      const publicClient = createPublicClient({
        chain: hoodi,
        transport,
      });
      // @ts-expect-error - intentionally removing chain property for test
      delete publicClient.chain;

      expect(() => {
        new SSVSDK({
          publicClient,
          walletClient,
        });
      }).toThrowError('Public client must have a chain property');
    });

    it('should throw error when walletClient has no chain property', () => {
      const transport = http(hoodi.rpcUrls.default.http[0]);
      const walletClient = createWalletClient({
        chain: hoodi,
        account: network.wallets[0].account,
        transport,
      });
      const publicClient = createPublicClient({
        chain: hoodi,
        transport,
      });
      // @ts-expect-error - intentionally removing chain property for test
      delete walletClient.chain;

      expect(() => {
        new SSVSDK({
          publicClient,
          walletClient,
        });
      }).toThrowError('Wallet client must have a chain property');
    });

    it('should throw error when walletClient chain differs from publicClient chain', () => {
      const transport = http(hoodi.rpcUrls.default.http[0]);
      const walletClient = createWalletClient({
        chain: chains.mainnet,
        account: network.wallets[0].account,
        transport,
      });
      const publicClient = createPublicClient({
        chain: hoodi,
        transport,
      });

      expect(() => {
        new SSVSDK({
          publicClient,
          walletClient,
        });
      }).toThrowError('Public and wallet client chains must be the same');
    });

    it('should throw error when publicClient chain is not supported', () => {
      const transport = http(hoodi.rpcUrls.default.http[0]);
      const walletClient = createWalletClient({
        chain: hoodi,
        account: network.wallets[0].account,
        transport,
      });
      const publicClient = createPublicClient({
        chain: hoodi,
        transport,
      });
      // @ts-expect-error - intentionally setting unsupported chain for test
      publicClient.chain = { id: 999999 };

      expect(() => {
        new SSVSDK({
          publicClient,
          walletClient,
        });
      }).toThrowError(/Public client chain must be one of/);
    });

    it('should throw error when walletClient chain is not supported', () => {
      const transport = http(hoodi.rpcUrls.default.http[0]);
      const walletClient = createWalletClient({
        chain: hoodi,
        account: network.wallets[0].account,
        transport,
      });
      const publicClient = createPublicClient({
        chain: hoodi,
        transport,
      });
      // @ts-expect-error - intentionally setting unsupported chain for test
      walletClient.chain = { id: 999999 };

      expect(() => {
        new SSVSDK({
          publicClient,
          walletClient,
        });
      }).toThrowError(/Wallet client chain must be one of/);
    });
  });
});
