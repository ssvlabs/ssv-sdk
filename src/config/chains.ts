import type { Address } from 'abitype';
import { defineChain } from 'viem';
import { mainnet } from 'viem/chains';

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
});

export const chains = {
  mainnet,
  hoodi,
} as const;

export const chainIds = Object.values(chains).map((chain) => chain.id);
export const networks = Object.values(chains).map((chain) => chain.name);

export type SupportedChainsIDs = (typeof chainIds)[number];

export const graph_endpoints: Record<SupportedChainsIDs, string> = {
  [mainnet.id]:
    'https://api.studio.thegraph.com/query/71118/ssv-network-ethereum/version/latest',
  [hoodi.id]:
    'https://api.studio.thegraph.com/query/71118/ssv-network-hoodi-stage/version/latest',
};

export const paid_graph_endpoints: Record<SupportedChainsIDs, string> = {
  [mainnet.id]:
    'https://gateway.thegraph.com/api/subgraphs/id/7V45fKPugp9psQjgrGsfif98gWzCyC6ChN7CW98VyQnr',
  [hoodi.id]:
    'https://gateway.thegraph.com/api/subgraphs/id/F4AU5vPCuKfHvnLsusibxJEiTN7ELCoYTvnzg3YHGYbh',
};

export const rest_endpoints: Record<SupportedChainsIDs, string> = {
  [mainnet.id]: 'https://api.ssv.network/api/v4/mainnet',
  [hoodi.id]: 'https://api.ssv.network/api/v4/hoodi',
};

export type ContractAddresses = {
  setter: Address;
  getter: Address;
  token: Address;
};

export const contracts: Record<SupportedChainsIDs, ContractAddresses> = {
  [mainnet.id]: {
    setter: '0xDD9BC35aE942eF0cFa76930954a156B3fF30a4E1',
    getter: '0xafE830B6Ee262ba11cce5F32fDCd760FFE6a66e4',
    token: '0x9D65fF81a3c488d585bBfb0Bfe3c7707c7917f54',
  },
  [hoodi.id]: {
    setter: '0xdf4f52446DA26D29f10acafb8F1C4F658A0C92b5',
    getter: '0x02e67E48e64ad381C386cdB59295aD2B79675F25',
    token: '0x746c33ccc28b1363c35c09badaf41b2ffa7e6d56',
  },
};
