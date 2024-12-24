import { createContractInteractions, type ConfigReturnType, type ContractAddresses } from '@/config'
import { createMockApi } from './api'

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
    api: createMockApi(args.publicClient),
    graphEndpoint: {} as unknown as ConfigReturnType['graphEndpoint'],
    restEndpoint: {} as unknown as ConfigReturnType['restEndpoint'],
    graphQLClient: {} as unknown as ConfigReturnType['graphQLClient'],
    contractAddresses: args.addresses,
  }
}
