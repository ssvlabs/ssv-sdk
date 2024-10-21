import { holesky, mainnet } from 'viem/chains'
export const chains = {
  mainnet,
  holesky,
} as const

export const subgraph = {
  holesky: 'https://api.studio.thegraph.com/query/71118/ssv-network-ethereum/version/latest',
  mainnet: 'https://api.studio.thegraph.com/query/71118/ssv-network-holesky/version/latest',
}
