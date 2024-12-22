import { createContractInteractions, type ConfigReturnType, type ContractAddresses } from '@/config'
import { vi } from 'vitest'

type MockConfigArgs = Pick<ConfigReturnType, 'publicClient' | 'walletClient' | 'chain'> & {
  addresses: ContractAddresses
}
export const createMockConfig = (args: MockConfigArgs): ConfigReturnType => {
  const contract = createContractInteractions({
    walletClient: args.walletClient,
    publicClient: args.publicClient,
    addresses: args.addresses,
  })

  return {
    chain: args.chain,
    publicClient: args.publicClient,
    walletClient: args.walletClient,
    contract,
    api: {
      getOwnerNonce: vi.fn().mockImplementation(() => Promise.resolve(1)),
      getClusterSnapshot: vi.fn().mockImplementation(() => Promise.resolve(1)),
      getCluster: vi.fn().mockImplementation(() => Promise.resolve(1)),
      getClusters: vi.fn().mockImplementation(() => Promise.resolve(1)),
      getOperator: vi.fn().mockImplementation(() => Promise.resolve(1)),
      getOperators: vi.fn().mockImplementation(() => Promise.resolve(1)),
      getValidators: vi.fn().mockImplementation(() => Promise.resolve(1)),
      getValidator: vi.fn().mockImplementation(() => Promise.resolve(1)),
      getClusterBalance: vi.fn().mockImplementation(() => Promise.resolve(1)),
    } as unknown as ConfigReturnType['api'],
    graphEndpoint: {} as unknown as ConfigReturnType['graphEndpoint'],
    restEndpoint: {} as unknown as ConfigReturnType['restEndpoint'],
    graphQLClient: {} as unknown as ConfigReturnType['graphQLClient'],
    contractAddresses: args.addresses,
  }
}
