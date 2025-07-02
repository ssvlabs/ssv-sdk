import { chains } from '@/config';
import { SSVSDK } from '@/sdk';
import hre from 'hardhat';
import { createPublicClient, createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { describe, expect, it } from 'vitest';
describe('SDK Initiation', async () => {
    await hre.run('compile');
    it('should initialize the SDK', async () => {
        const chain = chains.mainnet; // or chains.holesky
        const transport = http();
        const publicClient = createPublicClient({
            chain,
            transport,
        });
        const account = privateKeyToAccount('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80');
        const walletClient = createWalletClient({
            account,
            chain,
            transport,
        });
        const sdk = new SSVSDK({
            publicClient,
            walletClient,
        });
        const txData = sdk.contract.token.write.transfer.getTransactionData({
            amount: 1000000000000n,
            recipient: '0x012f55B6Cc5D57F943F1E79cF00214B652513f88',
        });
        const reg = /012f55B6Cc5D57F943F1E79cF00214B652513f88/i;
        expect(reg.test(txData)).toBe(true);
    });
});
