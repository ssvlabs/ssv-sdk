import type { Address } from 'abitype'
import { defineChain } from 'viem'
import { holesky, mainnet } from 'viem/chains'

export const hoodi = defineChain({
  id: 560048,
  name: 'Hoodi',
  rpcUrls: {
    default: {
      http: ['https://rpc.hoodi.ethpandaops.io'],
    },
  },
  nativeCurrency: {
    name: 'Hoodi Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  testnet: true,
})

export const chains = {
  mainnet,
  holesky,
  hoodi,
} as const

export const chainIds = Object.values(chains).map((chain) => chain.id)
export const networks = Object.values(chains).map((chain) => chain.name)

export type SupportedChainsIDs = (typeof chainIds)[number]

export const graph_endpoints: Record<SupportedChainsIDs, string> = {
  [mainnet.id]: 'https://api.studio.thegraph.com/query/71118/ssv-network-ethereum/version/latest',
  [holesky.id]: 'https://api.studio.thegraph.com/query/71118/ssv-network-holesky/version/latest',
  [hoodi.id]:
    'https://graph-node-hoodi.stage.ops.ssvlabsinternal.com/subgraphs/name/ssv-bapps-hoodi',
}

export const rest_endpoints: Record<SupportedChainsIDs, string> = {
  [mainnet.id]: 'https://api.ssv.network/api/v4/mainnet',
  [holesky.id]: 'https://api.ssv.network/api/v4/holesky',
  [hoodi.id]: 'https://api.ssv.network/api/v4/hoodi',
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
  [hoodi.id]: {
    setter: '0x58410Bef803ECd7E63B23664C586A6DB72DAf59c',
    getter: '0x5AdDb3f1529C5ec70D77400499eE4bbF328368fe',
    token: '0x9F5d4Ec84fC4785788aB44F9de973cF34F7A038e',
  },
}
