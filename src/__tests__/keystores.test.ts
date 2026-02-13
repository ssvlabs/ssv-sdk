import { operators } from '@/mock';
import { createMockConfig } from '@/mock/config';
import keystores from '@/mock/keystores.json';
import { SSVSDK } from '@/sdk';
import hre from 'hardhat';
import { initializeContract } from 'hardhat/contract-helpers';
import { describe, expect, it } from 'vitest';

describe('SSV Keys', () => {
  it(
    'can extract keys from keystore',
    async () => {
      const { ssvNetwork, ssvNetworkViews, ssvToken } =
        await initializeContract();
      const publicClient = await hre.viem.getPublicClient();
      const wallets = await hre.viem.getWalletClients();

      const sdk = new SSVSDK(
        createMockConfig({
          addresses: {
            setter: ssvNetwork.address,
            getter: ssvNetworkViews.address,
            token: ssvToken.address,
          },
          publicClient,
          walletClient: wallets[0],
          chain: publicClient.chain,
        }),
      );

      const extracted = await sdk.utils.generateKeyShares({
        keystore: JSON.stringify(keystores),
        keystorePassword: '123123123',
        operatorKeys: operators.keys,
        operatorIds: operators.ids.map((id) => Number(id)),
        ownerAddress: wallets[0].account.address,
        nonce: 1,
      });

      expect(extracted).toBeTruthy();
      expect(Array.isArray(extracted)).toBe(true);
      expect(extracted[0]).toEqual(
        expect.objectContaining({
          sharesData: expect.any(String),
          publicKey: expect.any(String),
          operatorIds: operators.ids.map((id) => Number(id)),
        }),
      );
    },
    {
      timeout: 60000,
    },
  );
});
