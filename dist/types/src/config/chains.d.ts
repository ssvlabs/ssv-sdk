import type { Address } from 'abitype';
export declare const hoodi: {
    blockExplorers?: {
        [key: string]: {
            name: string;
            url: string;
            apiUrl?: string | undefined;
        };
        default: {
            name: string;
            url: string;
            apiUrl?: string | undefined;
        };
    } | undefined;
    contracts?: {
        [x: string]: import("viem").ChainContract | {
            [sourceId: number]: import("viem").ChainContract | undefined;
        } | undefined;
        ensRegistry?: import("viem").ChainContract | undefined;
        ensUniversalResolver?: import("viem").ChainContract | undefined;
        multicall3?: import("viem").ChainContract | undefined;
        universalSignatureVerifier?: import("viem").ChainContract | undefined;
    } | undefined;
    id: 560048;
    name: "Hoodi";
    nativeCurrency: {
        readonly name: "Hoodi Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.hoodi.ethpandaops.io"];
        };
    };
    sourceId?: number | undefined;
    testnet: true;
    custom?: Record<string, unknown> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
};
export declare const chains: {
    readonly mainnet: {
        blockExplorers: {
            readonly default: {
                readonly name: "Etherscan";
                readonly url: "https://etherscan.io";
                readonly apiUrl: "https://api.etherscan.io/api";
            };
        };
        contracts: {
            readonly ensRegistry: {
                readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
            };
            readonly ensUniversalResolver: {
                readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
                readonly blockCreated: 19258213;
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 14353601;
            };
        };
        id: 1;
        name: "Ethereum";
        nativeCurrency: {
            readonly name: "Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://cloudflare-eth.com"];
            };
        };
        sourceId?: number | undefined;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable<bigint, number>> | undefined;
    };
    readonly holesky: {
        blockExplorers: {
            readonly default: {
                readonly name: "Etherscan";
                readonly url: "https://holesky.etherscan.io";
                readonly apiUrl: "https://api-holesky.etherscan.io/api";
            };
        };
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 77;
            };
            readonly ensRegistry: {
                readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
                readonly blockCreated: 801613;
            };
            readonly ensUniversalResolver: {
                readonly address: "0xa6AC935D4971E3CD133b950aE053bECD16fE7f3b";
                readonly blockCreated: 973484;
            };
        };
        id: 17000;
        name: "Holesky";
        nativeCurrency: {
            readonly name: "Holesky Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://ethereum-holesky-rpc.publicnode.com"];
            };
        };
        sourceId?: number | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable<bigint, number>> | undefined;
    };
    readonly hoodi: {
        blockExplorers?: {
            [key: string]: {
                name: string;
                url: string;
                apiUrl?: string | undefined;
            };
            default: {
                name: string;
                url: string;
                apiUrl?: string | undefined;
            };
        } | undefined;
        contracts?: {
            [x: string]: import("viem").ChainContract | {
                [sourceId: number]: import("viem").ChainContract | undefined;
            } | undefined;
            ensRegistry?: import("viem").ChainContract | undefined;
            ensUniversalResolver?: import("viem").ChainContract | undefined;
            multicall3?: import("viem").ChainContract | undefined;
            universalSignatureVerifier?: import("viem").ChainContract | undefined;
        } | undefined;
        id: 560048;
        name: "Hoodi";
        nativeCurrency: {
            readonly name: "Hoodi Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://rpc.hoodi.ethpandaops.io"];
            };
        };
        sourceId?: number | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, import("viem").TransactionSerializable> | undefined;
    };
};
export declare const chainIds: (1 | 560048 | 17000)[];
export declare const networks: ("Hoodi" | "Ethereum" | "Holesky")[];
export type SupportedChainsIDs = (typeof chainIds)[number];
export declare const graph_endpoints: Record<SupportedChainsIDs, string>;
export declare const rest_endpoints: Record<SupportedChainsIDs, string>;
export type ContractAddresses = {
    setter: Address;
    getter: Address;
    token: Address;
};
export declare const contracts: Record<SupportedChainsIDs, ContractAddresses>;
