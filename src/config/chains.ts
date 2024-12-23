import type { Address } from 'abitype'
import { holesky, mainnet } from 'viem/chains'
export const chains = {
  mainnet,
  holesky,
} as const

export const chainIds = Object.values(chains).map((chain) => chain.id)

export type SupportedChainsIDs = (typeof chainIds)[number]

export const graph_endpoints: Record<SupportedChainsIDs, string> = {
  [mainnet.id]: 'https://api.studio.thegraph.com/query/71118/ssv-network-ethereum/version/latest',
  [holesky.id]: 'https://api.studio.thegraph.com/query/71118/ssv-network-holesky/version/latest',
}

export const rest_endpoints: Record<SupportedChainsIDs, string> = {
  [mainnet.id]: 'https://api.ssv.network/api/v4/mainnet',
  [holesky.id]: 'https://api.ssv.network/api/v4/holesky',
}

export type ContractAddresses = {
  setter: Address
  getter: Address
  token: Address
}
export const contracts: Record<SupportedChainsIDs, ContractAddresses> = {
  [mainnet.id]: {
    setter: '0xDD9BC35aE942eF0cFa76930954a156B3fF30a4E1',
    getter: '0xafE830B6Ee262ba11cce5F32fDCd760FFE6a66e4',
    token: '0x9D65fF81a3c488d585bBfb0Bfe3c7707c7917f54',
  },
  [holesky.id]: {
    setter: '0x38A4794cCEd47d3baf7370CcC43B560D3a1beEFA',
    getter: '0x352A18AEe90cdcd825d1E37d9939dCA86C00e281',
    token: '0xad45A78180961079BFaeEe349704F411dfF947C6',
  },
}
