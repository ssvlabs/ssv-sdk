import { ConfigReturnType, ContractAddresses } from '../config';
type MockConfigArgs = Pick<ConfigReturnType, 'publicClient' | 'walletClient' | 'chain'> & {
    addresses: ContractAddresses;
};
export declare const createMockConfig: (args: MockConfigArgs) => ConfigReturnType;
export {};
