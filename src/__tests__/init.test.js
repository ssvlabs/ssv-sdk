import { SSVSDK } from '@/sdk';
import hre from 'hardhat';
import { initializeContract } from 'hardhat/contract-helpers';
import { createPublicClient, createWalletClient, http } from 'viem';
import { holesky } from 'viem/chains';
import { describe, expect, it } from 'vitest';
describe('SDK Initiation', async () => {
    await hre.run('compile');
    const network = await initializeContract();
    it('should initialize the SDK', async () => {
        expect(() => {
            const transport = http(holesky.rpcUrls.default.http[0]);
            const walletClient = createWalletClient({
                chain: holesky,
                account: network.wallets[0].account,
                transport,
            });
            const publicClient = createPublicClient({
                chain: holesky,
                transport,
            });
            return new SSVSDK({
                publicClient,
                walletClient,
                _: {},
            });
        }).not.toThrowError();
    });
    it('unsupported chain should throw an error', async () => {
        const network = await initializeContract();
        // initializeContract returns a hardhat chain, which is not supported by the SDK
        expect(() => new SSVSDK({
            publicClient: network.publicClient,
            walletClient: network.wallets[0],
            _: {},
        })).toThrowError();
    });
    it('should initialize with custom contract addresses and endpoints', async () => {
        const transport = http(holesky.rpcUrls.default.http[0]);
        const walletClient = createWalletClient({
            chain: holesky,
            account: network.wallets[0].account,
            transport,
        });
        const publicClient = createPublicClient({
            chain: holesky,
            transport,
        });
        const customAddresses = {
            setter: '0x1234567890123456789012345678901234567890',
            getter: '0x0987654321098765432109876543210987654321',
            token: '0xabcdef1234567890abcdef1234567890abcdef12',
        };
        const customEndpoints = {
            graphUrl: 'https://custom-graph-endpoint.com/graphql',
            restUrl: 'https://custom-rest-endpoint.com/api',
        };
        const sdk = new SSVSDK({
            publicClient,
            walletClient,
            _: {
                contractAddresses: customAddresses,
                ...customEndpoints,
            },
        });
        // Verify custom contract addresses are used
        expect(sdk.config.contractAddresses).toEqual(customAddresses);
        // Verify custom endpoints are used
        expect(sdk.config.graphEndpoint).toBe(customEndpoints.graphUrl);
        expect(sdk.config.restEndpoint).toBe(customEndpoints.restUrl);
    });
    describe('Client Validation', () => {
        it('should throw error when publicClient is not provided', () => {
            const transport = http(holesky.rpcUrls.default.http[0]);
            const walletClient = createWalletClient({
                chain: holesky,
                account: network.wallets[0].account,
                transport,
            });
            expect(() => {
                new SSVSDK({
                    publicClient: null,
                    walletClient,
                    _: {},
                });
            }).toThrowError('Public client must be provided');
        });
        it('should throw error when walletClient is not provided', () => {
            const transport = http(holesky.rpcUrls.default.http[0]);
            const publicClient = createPublicClient({
                chain: holesky,
                transport,
            });
            expect(() => {
                new SSVSDK({
                    publicClient,
                    walletClient: null,
                    _: {},
                });
            }).toThrowError('Wallet client must be provided');
        });
        it('should throw error when publicClient has no chain property', () => {
            const transport = http(holesky.rpcUrls.default.http[0]);
            const walletClient = createWalletClient({
                chain: holesky,
                account: network.wallets[0].account,
                transport,
            });
            const publicClient = createPublicClient({
                chain: holesky,
                transport,
            });
            // @ts-expect-error - intentionally removing chain property for test
            delete publicClient.chain;
            expect(() => {
                new SSVSDK({
                    publicClient,
                    walletClient,
                    _: {},
                });
            }).toThrowError('Public client must have a chain property');
        });
        it('should throw error when walletClient has no chain property', () => {
            const transport = http(holesky.rpcUrls.default.http[0]);
            const walletClient = createWalletClient({
                chain: holesky,
                account: network.wallets[0].account,
                transport,
            });
            const publicClient = createPublicClient({
                chain: holesky,
                transport,
            });
            // @ts-expect-error - intentionally removing chain property for test
            delete walletClient.chain;
            expect(() => {
                new SSVSDK({
                    publicClient,
                    walletClient,
                    _: {},
                });
            }).toThrowError('Wallet client must have a chain property');
        });
        it('should throw error when publicClient chain is not supported', () => {
            const transport = http(holesky.rpcUrls.default.http[0]);
            const walletClient = createWalletClient({
                chain: holesky,
                account: network.wallets[0].account,
                transport,
            });
            const publicClient = createPublicClient({
                chain: holesky,
                transport,
            });
            // @ts-expect-error - intentionally setting unsupported chain for test
            publicClient.chain = { id: 999999 };
            expect(() => {
                new SSVSDK({
                    publicClient,
                    walletClient,
                    _: {},
                });
            }).toThrowError(/Public client chain must be one of/);
        });
        it('should throw error when walletClient chain is not supported', () => {
            const transport = http(holesky.rpcUrls.default.http[0]);
            const walletClient = createWalletClient({
                chain: holesky,
                account: network.wallets[0].account,
                transport,
            });
            const publicClient = createPublicClient({
                chain: holesky,
                transport,
            });
            // @ts-expect-error - intentionally setting unsupported chain for test
            walletClient.chain = { id: 999999 };
            expect(() => {
                new SSVSDK({
                    publicClient,
                    walletClient,
                    _: {},
                });
            }).toThrowError(/Wallet client chain must be one of/);
        });
    });
});
