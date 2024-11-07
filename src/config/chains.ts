import { holesky, mainnet } from 'viem/chains'
export const chains = {
  mainnet,
  holesky,
} as const

export type SupportedChains = keyof typeof chains

export const subgraph = {
  mainnet: 'https://api.studio.thegraph.com/query/71118/ssv-network-ethereum/version/latest',
  holesky: 'https://api.studio.thegraph.com/query/71118/ssv-network-holesky/version/latest',
}
