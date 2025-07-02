import { merge } from 'lodash-es';
import { beforeEach, describe, expect, it, vi } from 'vitest';
// Mock data
const mockAddress = '0x012f55B6Cc5D57F943F1E79cF00214B652513f88';
const _mockOperators = [
    {
        id: 378,
        operatorKey: 'LS0tLS1CRUdJTiBSU0EgUFVCTElDIEtFWS0tLS0tCk1JSUJJakFOQmdrcWhraUc5dzBCQVFFRkFBT0NBUThBTUlJQkNnS0NBUUVBdTQrN001aDVsamtVNWszRnBrSmMKb1haK2hKZXdEZ2V2ZzBiUTFwSmppcndpS01FWU9yZ2d0V3l4eTVlWDRVMjBuTENLVjkweVVXL1d5ekpScExETgpkSnlBaGVpejdHcWNjQ0pGUjFVNGd6OE1vcXM3UVpZdWFTWXA1ZkdzWWRQaGF5ZUgyUlo2K0ZlbVE2SnlSNy9DClNvYlVaOVFjaHhjNVRIRG5JR3FKYjBmUXlkWW9sYks1dGJUbkZDTDZxMTRyY0x6USsrY0JEQWVsUWxjbitFcFgKQk9PSjNWQ1JGbnpxQ3UvUmVmM3ZwTURkWjhYUTJOV1UvSTI4REtUV3hscDV1eTQxMFZnQ3BiQXpBUkl5U0w1UwpERGRSTGQvSnVCcFZnWWJJUVVCVXdNcmNlNFVjbnpTcDFNOFFrVEFSaUFUNFV1ckhZN1pQQzFJZDlINWEvUlR1Cmx3SURBUUFCCi0tLS0tRU5EIFJTQSBQVUJMSUMgS0VZLS0tLS0K',
    },
    {
        id: 379,
        operatorKey: 'LS0tLS1CRUdJTiBSU0EgUFVCTElDIEtFWS0tLS0tCk1JSUJJVEFOQmdrcWhraUc5dzBCQVFFRkFBT0NBUTRBTUlJQkNRS0NBUUJUS25pRlN3Q1ExM3VFTXhEZy8wMFMKYTlYRWxFOE45N1ltYmRNMXVOSkxMMytVcHlKR2VLa0VuazR5YzU2NjhDRVNFNVRGUWVuaHE5bTEzS21qK3BWVgpSa1grOEtyYnE1WjFvcXVCeUQvdUpMSlppeWNScWJqdDMrMVBlK2FSUlFrSjRHZ01nbGwycmcxKzFVRHZDUkxvCmVMdnA0NEtTbDVUTG1xbU9qeFlTakxQNFBCZkdxd3dPZlJpcjNQTjhHU2w4RGFlbkJuS2xZU25DYWlUZytheHIKUE1xNDFzNURYR0RqWlVncnBhWFNwb3kxdFlHUXZoZFRwMS9Bc01oZ0ZISXdFNmZDcUNnekgwbGpVM0pEcmZTWApEcjFlS09JZmRtU1I0a1luZGtJSDRrYU41QUUvcVBGYStHaXVpdFpCVUlXSnM3Z1d2T2VxU1pBN0hGdzhOVDN4CkFnTUJBQUU9Ci0tLS0tRU5EIFJTQSBQVUJMSUMgS0VZLS0tLS0K',
    },
    {
        id: 381,
        operatorKey: 'LS0tLS1CRUdJTiBSU0EgUFVCTElDIEtFWS0tLS0tCk1JSUJJakFOQmdrcWhraUc5dzBCQVFFRkFBT0NBUThBTUlJQkNnS0NBUUVBc3N5K1M0TzQrZmhSVVlURFpHSFEKVGtkSnhEV1NpUEpwMENCUXoyWnpiWCsybm9iQ0FYMStrVE15WkJUckFtcGhMWStZSFBhVU5GQ294OXgrUFVrNQpmTStUUys5RXZ1eUtIbWNzUCsyZS9iMmVpVlpwK2QzWHgyQXltTmVSR1MzNHo2bkNWemRuQ0RBQVl0OWEzejh2CkZRMHF2b1M2NStidHRDWHJzODduRkxEa29TZmprSFZRVHJDSVhyZWxaeXZqTWN4Nm9ZdXA3YSs2ZXQzckhuV3UKa3RpTlYwMzhoV0lYTnJtb0l5WnFZNVduYUxTRGMxNjlmL3Njcmc2dExOTEtEcDRlQ3o0SW9JaE9ESUFTTlVSYQpocC9Ydzl3Mk43YTRDczFKS0crbHgxaUIyVGtXS0ZWbWtYZFdLRTRmeVgrZWVJSTlpK2J6MUFBRGl1cktsVk81ClhRSURBUUFCCi0tLS0tRU5EIFJTQSBQVUJMSUMgS0VZLS0tLS0K',
    },
    {
        id: 382,
        operatorKey: 'LS0tLS1CRUdJTiBSU0EgUFVCTElDIEtFWS0tLS0tCk1JSUJJakFOQmdrcWhraUc5dzBCQVFFRkFBT0NBUThBTUlJQkNnS0NBUUVBamk2SHFaU2NuYmFBNFpCelVzcVoKYnYrcmt3bDczdjVhMERrVGNkdUVJUVJXY1MyRXY3WEVFd2luQWVDQ3ErZ25ULzJLamVEQzQ4dktGMy9DdzQ5egpaSDRYZW94alVFQzhSMlZCaG9zM2lEdHdGWE5uYXpya050QUp1YllVQllOYytidm9oQlJkbU9yRWNZclZqdmt0Ci9iTXk3d0lacU1Xc2dXWlFZTktiUVBLYlRUNlNwVGZYekdLWENwT1BueXdZOXM2Y0g1UU1QNXZ6M0JVeVpIWCsKTnFoOXpuK2JRSHU3V1oyYjRpaVNSM2ZER1FYYnFnbitrK291Rkhkc2RzbFRVQmhQK0M3aXpYK2czdDJBc1M0agpRd2hlRDNjQ3hOV0I1OGFwa3U3SjE0QVRMWWloL0xTYW42L1M1MlpIZ1hFa3FFOUZYT0ZFdkZGbSsxb3ZmRHhxCkl3SURBUUFCCi0tLS0tRU5EIFJTQSBQVUJMSUMgS0VZLS0tLS0K',
    },
];
const mockOperatorIds = _mockOperators.map((o) => o.id);
const mockOperators = _mockOperators.map((o) => ({
    id: String(o.id),
    publicKey: o.operatorKey,
    validatorCount: '5',
    fee: '1000000',
    feeIndex: '0',
    feeIndexBlockNumber: '1000',
    isPrivate: false,
    whitelisted: [],
    whitelistedContract: mockAddress,
}));
const mockClusterBalanceData = {
    cluster: {
        validatorCount: '1',
        networkFeeIndex: '0',
        index: '0',
        balance: '1000000',
    },
    daovalues: {
        networkFeeIndex: '0',
        networkFeeIndexBlockNumber: '1000',
        networkFee: '1000000',
        minimumLiquidationCollateral: '100000',
        liquidationThreshold: '100',
    },
    operators: mockOperators,
    _meta: {
        block: {
            number: 2000,
        },
    },
};
const mockApi = {
    getOperator: vi.fn().mockResolvedValue(mockOperators[0]),
    getOperators: vi.fn().mockResolvedValue(mockOperators),
    getValidator: vi.fn().mockResolvedValue(null),
    getOwnerNonce: vi.fn().mockResolvedValue('833'),
    getClusterBalance: vi.fn().mockResolvedValue(mockClusterBalanceData),
};
const mockConfig = {
    walletClient: {
        account: {
            address: mockAddress,
        },
    },
    publicClient: {
        waitForTransactionReceipt: vi.fn().mockResolvedValue({
            logs: [
                {
                    data: '0x1234',
                    topics: ['0x5678'],
                    blockNumber: 1n,
                    address: mockAddress,
                    transactionHash: '0x123',
                    logIndex: 0,
                },
            ],
            blockNumber: 1n,
            status: 'success',
            transactionHash: '0x123',
        }),
    },
    contract: {
        ssv: {
            read: {
                getValidatorsPerOperatorLimit: vi.fn().mockResolvedValue(10),
            },
        },
    },
    api: {
        getOperator: vi.fn().mockResolvedValue(mockOperators[0]),
        getOperators: vi.fn().mockResolvedValue(mockOperators),
        getValidator: vi.fn().mockResolvedValue(null),
        getOwnerNonce: vi.fn().mockResolvedValue('833'),
        getClusterBalance: vi.fn().mockResolvedValue(mockClusterBalanceData),
    },
    contractAddresses: {
        setter: mockAddress,
    },
};
describe('SDK Utils', () => {
    beforeEach(() => {
        mockApi.getOperator.mockResolvedValue(mockOperators[0]);
        mockApi.getOperators.mockResolvedValue(mockOperators);
        mockApi.getValidator.mockResolvedValue(null);
        mockApi.getOwnerNonce.mockResolvedValue('1');
        mockApi.getClusterBalance.mockResolvedValue(mockClusterBalanceData);
    });
    describe('getOperatorCapacity', () => {
        it('should return operator capacity', async () => {
            const { getOperatorCapacity } = await import('../libs/utils/methods/methods');
            const result = await getOperatorCapacity(mockConfig, '1');
            expect(result).toBe(5); // limit (10) - validatorCount (5)
            expect(mockConfig.api.getOperator).toHaveBeenCalledWith({ id: '1' });
            expect(mockConfig.contract.ssv.read.getValidatorsPerOperatorLimit).toHaveBeenCalled();
        });
        it('should return 0 for non-existent operator', async () => {
            const { getOperatorCapacity } = await import('../libs/utils/methods/methods');
            mockApi.getOperator.mockResolvedValue(null);
            const noOperatorConfig = merge({}, mockConfig, {
                api: {
                    ...mockConfig.api,
                    getOperator: vi.fn().mockResolvedValue(null),
                },
            });
            const result = await getOperatorCapacity(noOperatorConfig, '999');
            expect(result).toBe(0);
        });
    });
    describe('getClusterBalance', () => {
        it('should calculate cluster balance and operational runway', async () => {
            const { getClusterBalance } = await import('../libs/utils/methods/get-cluster-balance');
            const result = await getClusterBalance(mockConfig, {
                operatorIds: mockOperatorIds,
            });
            expect(result).toHaveProperty('balance');
            expect(result).toHaveProperty('operationalRunway');
            expect(mockConfig.api.getClusterBalance).toHaveBeenCalledWith({
                daoAddress: mockAddress,
                operatorIds: mockOperatorIds.map(String),
                clusterId: expect.any(String),
            });
        });
        it('should throw error when cluster data is missing', async () => {
            const { getClusterBalance } = await import('../libs/utils/methods/get-cluster-balance');
            const noClusterConfig = merge({}, mockConfig, {
                api: {
                    ...mockConfig.api,
                    getClusterBalance: vi.fn().mockResolvedValue({
                        operators: [],
                        _meta: { block: { number: 2000 } },
                    }),
                },
            });
            await expect(getClusterBalance(noClusterConfig, {
                operatorIds: mockOperatorIds,
            })).rejects.toThrow('Could not fetch cluster balance');
        });
    });
});
