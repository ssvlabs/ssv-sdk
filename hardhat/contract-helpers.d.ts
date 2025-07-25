import { type Address } from 'viem';
import type { SSVConfig } from './types';
export declare const CONFIG: SSVConfig;
export declare const DEFAULT_OPERATOR_IDS: {
    4: number[];
    7: number[];
    10: number[];
    13: number[];
};
export declare const initialBalance: bigint;
export declare const initializeContract: () => Promise<{
    ssvContractsOwner: import("viem").Account;
    publicClient: {
        account: undefined;
        batch?: {
            multicall?: boolean | import("viem").Prettify<import("viem").MulticallBatchOptions> | undefined;
        } | undefined;
        cacheTime: number;
        ccipRead?: false | {
            request?: (parameters: import("viem").CcipRequestParameters) => Promise<import("node_modules/viem/_types/utils/ccip").CcipRequestReturnType>;
        } | undefined;
        chain: import("viem").Chain;
        key: string;
        name: string;
        pollingInterval: number;
        request: import("viem").EIP1193RequestFn<import("viem").PublicRpcSchema>;
        transport: import("viem").TransportConfig<string, import("viem").EIP1193RequestFn> & Record<string, any>;
        type: string;
        uid: string;
        call: (parameters: import("viem").CallParameters<import("viem").Chain>) => Promise<import("viem").CallReturnType>;
        createAccessList: (parameters: import("viem").CreateAccessListParameters<import("viem").Chain>) => Promise<{
            accessList: import("viem").AccessList;
            gasUsed: bigint;
        }>;
        createBlockFilter: () => Promise<import("viem").CreateBlockFilterReturnType>;
        createContractEventFilter: <const abi extends import("abitype").Abi | readonly unknown[], eventName extends import("viem").ContractEventName<abi> | undefined, args extends import("viem").MaybeExtractEventArgsFromAbi<abi, eventName> | undefined, strict extends boolean | undefined = undefined, fromBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined, toBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined>(args: import("viem").CreateContractEventFilterParameters<abi, eventName, args, strict, fromBlock, toBlock>) => Promise<import("viem").CreateContractEventFilterReturnType<abi, eventName, args, strict, fromBlock, toBlock>>;
        createEventFilter: <const abiEvent extends import("abitype").AbiEvent | undefined = undefined, const abiEvents extends readonly import("abitype").AbiEvent[] | readonly unknown[] | undefined = abiEvent extends import("abitype").AbiEvent ? [abiEvent] : undefined, strict extends boolean | undefined = undefined, fromBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined, toBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined, _EventName extends string | undefined = import("viem").MaybeAbiEventName<abiEvent>, _Args extends import("viem").MaybeExtractEventArgsFromAbi<abiEvents, _EventName> | undefined = undefined>(args?: import("viem").CreateEventFilterParameters<abiEvent, abiEvents, strict, fromBlock, toBlock, _EventName, _Args> | undefined) => Promise<import("viem").CreateEventFilterReturnType<abiEvent, abiEvents, strict, fromBlock, toBlock, _EventName, _Args>>;
        createPendingTransactionFilter: () => Promise<import("viem").CreatePendingTransactionFilterReturnType>;
        estimateContractGas: <chain extends import("viem").Chain | undefined, const abi extends import("abitype").Abi | readonly unknown[], functionName extends import("viem").ContractFunctionName<abi, "nonpayable" | "payable">, args extends import("viem").ContractFunctionArgs<abi, "nonpayable" | "payable", functionName>>(args: import("viem").EstimateContractGasParameters<abi, functionName, args, chain>) => Promise<import("viem").EstimateContractGasReturnType>;
        estimateGas: (args: import("viem").EstimateGasParameters<import("viem").Chain>) => Promise<import("viem").EstimateGasReturnType>;
        getBalance: (args: import("viem").GetBalanceParameters) => Promise<import("viem").GetBalanceReturnType>;
        getBlobBaseFee: () => Promise<import("viem").GetBlobBaseFeeReturnType>;
        getBlock: <includeTransactions extends boolean = false, blockTag extends import("viem").BlockTag = "latest">(args?: import("viem").GetBlockParameters<includeTransactions, blockTag> | undefined) => Promise<{
            number: blockTag extends "pending" ? null : bigint;
            nonce: blockTag extends "pending" ? null : `0x${string}`;
            hash: blockTag extends "pending" ? null : `0x${string}`;
            logsBloom: blockTag extends "pending" ? null : `0x${string}`;
            baseFeePerGas: bigint | null;
            blobGasUsed: bigint;
            difficulty: bigint;
            excessBlobGas: bigint;
            extraData: import("viem").Hex;
            gasLimit: bigint;
            gasUsed: bigint;
            miner: Address;
            mixHash: import("viem").Hash;
            parentBeaconBlockRoot?: `0x${string}` | undefined;
            parentHash: import("viem").Hash;
            receiptsRoot: import("viem").Hex;
            sealFields: import("viem").Hex[];
            sha3Uncles: import("viem").Hash;
            size: bigint;
            stateRoot: import("viem").Hash;
            timestamp: bigint;
            totalDifficulty: bigint | null;
            transactionsRoot: import("viem").Hash;
            uncles: import("viem").Hash[];
            withdrawals?: import("viem").Withdrawal[] | undefined | undefined;
            withdrawalsRoot?: `0x${string}` | undefined;
            transactions: includeTransactions extends true ? ({
                type: "legacy";
                input: import("viem").Hex;
                nonce: number;
                value: bigint;
                from: Address;
                gas: bigint;
                to: Address | null;
                r: import("viem").Hex;
                s: import("viem").Hex;
                v: bigint;
                yParity?: undefined | undefined;
                blobVersionedHashes?: undefined | undefined;
                gasPrice: bigint;
                maxFeePerBlobGas?: undefined | undefined;
                maxFeePerGas?: undefined | undefined;
                maxPriorityFeePerGas?: undefined | undefined;
                chainId?: number | undefined;
                accessList?: undefined | undefined;
                authorizationList?: undefined | undefined;
                hash: import("viem").Hash;
                typeHex: import("viem").Hex | null;
                blockNumber: (blockTag extends "pending" ? true : false) extends infer T ? T extends (blockTag extends "pending" ? true : false) ? T extends true ? null : bigint : never : never;
                blockHash: (blockTag extends "pending" ? true : false) extends infer T_1 ? T_1 extends (blockTag extends "pending" ? true : false) ? T_1 extends true ? null : `0x${string}` : never : never;
                transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_2 ? T_2 extends (blockTag extends "pending" ? true : false) ? T_2 extends true ? null : number : never : never;
            } | {
                type: "eip2930";
                input: import("viem").Hex;
                nonce: number;
                value: bigint;
                from: Address;
                gas: bigint;
                to: Address | null;
                r: import("viem").Hex;
                s: import("viem").Hex;
                v: bigint;
                yParity: number;
                blobVersionedHashes?: undefined | undefined;
                gasPrice: bigint;
                maxFeePerBlobGas?: undefined | undefined;
                maxFeePerGas?: undefined | undefined;
                maxPriorityFeePerGas?: undefined | undefined;
                chainId: number;
                accessList: import("viem").AccessList;
                authorizationList?: undefined | undefined;
                hash: import("viem").Hash;
                typeHex: import("viem").Hex | null;
                blockNumber: (blockTag extends "pending" ? true : false) extends infer T_3 ? T_3 extends (blockTag extends "pending" ? true : false) ? T_3 extends true ? null : bigint : never : never;
                blockHash: (blockTag extends "pending" ? true : false) extends infer T_4 ? T_4 extends (blockTag extends "pending" ? true : false) ? T_4 extends true ? null : `0x${string}` : never : never;
                transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_5 ? T_5 extends (blockTag extends "pending" ? true : false) ? T_5 extends true ? null : number : never : never;
            } | {
                type: "eip1559";
                input: import("viem").Hex;
                nonce: number;
                value: bigint;
                from: Address;
                gas: bigint;
                to: Address | null;
                r: import("viem").Hex;
                s: import("viem").Hex;
                v: bigint;
                yParity: number;
                blobVersionedHashes?: undefined | undefined;
                gasPrice?: undefined | undefined;
                maxFeePerBlobGas?: undefined | undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                chainId: number;
                accessList: import("viem").AccessList;
                authorizationList?: undefined | undefined;
                hash: import("viem").Hash;
                typeHex: import("viem").Hex | null;
                blockNumber: (blockTag extends "pending" ? true : false) extends infer T_6 ? T_6 extends (blockTag extends "pending" ? true : false) ? T_6 extends true ? null : bigint : never : never;
                blockHash: (blockTag extends "pending" ? true : false) extends infer T_7 ? T_7 extends (blockTag extends "pending" ? true : false) ? T_7 extends true ? null : `0x${string}` : never : never;
                transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_8 ? T_8 extends (blockTag extends "pending" ? true : false) ? T_8 extends true ? null : number : never : never;
            } | {
                type: "eip4844";
                input: import("viem").Hex;
                nonce: number;
                value: bigint;
                from: Address;
                gas: bigint;
                to: Address | null;
                r: import("viem").Hex;
                s: import("viem").Hex;
                v: bigint;
                yParity: number;
                blobVersionedHashes: readonly import("viem").Hex[];
                gasPrice?: undefined | undefined;
                maxFeePerBlobGas: bigint;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                chainId: number;
                accessList: import("viem").AccessList;
                authorizationList?: undefined | undefined;
                hash: import("viem").Hash;
                typeHex: import("viem").Hex | null;
                blockNumber: (blockTag extends "pending" ? true : false) extends infer T_9 ? T_9 extends (blockTag extends "pending" ? true : false) ? T_9 extends true ? null : bigint : never : never;
                blockHash: (blockTag extends "pending" ? true : false) extends infer T_10 ? T_10 extends (blockTag extends "pending" ? true : false) ? T_10 extends true ? null : `0x${string}` : never : never;
                transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_11 ? T_11 extends (blockTag extends "pending" ? true : false) ? T_11 extends true ? null : number : never : never;
            } | {
                type: "eip7702";
                input: import("viem").Hex;
                nonce: number;
                value: bigint;
                from: Address;
                gas: bigint;
                to: Address | null;
                r: import("viem").Hex;
                s: import("viem").Hex;
                v: bigint;
                yParity: number;
                blobVersionedHashes?: undefined | undefined;
                gasPrice?: undefined | undefined;
                maxFeePerBlobGas?: undefined | undefined;
                maxFeePerGas: bigint;
                maxPriorityFeePerGas: bigint;
                chainId: number;
                accessList: import("viem").AccessList;
                authorizationList: import("viem").SignedAuthorizationList;
                hash: import("viem").Hash;
                typeHex: import("viem").Hex | null;
                blockNumber: (blockTag extends "pending" ? true : false) extends infer T_12 ? T_12 extends (blockTag extends "pending" ? true : false) ? T_12 extends true ? null : bigint : never : never;
                blockHash: (blockTag extends "pending" ? true : false) extends infer T_13 ? T_13 extends (blockTag extends "pending" ? true : false) ? T_13 extends true ? null : `0x${string}` : never : never;
                transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_14 ? T_14 extends (blockTag extends "pending" ? true : false) ? T_14 extends true ? null : number : never : never;
            })[] : `0x${string}`[];
        }>;
        getBlockNumber: (args?: import("viem").GetBlockNumberParameters | undefined) => Promise<import("viem").GetBlockNumberReturnType>;
        getBlockTransactionCount: (args?: import("viem").GetBlockTransactionCountParameters | undefined) => Promise<import("viem").GetBlockTransactionCountReturnType>;
        getBytecode: (args: import("viem").GetBytecodeParameters) => Promise<import("viem").GetBytecodeReturnType>;
        getChainId: () => Promise<import("viem").GetChainIdReturnType>;
        getCode: (args: import("viem").GetBytecodeParameters) => Promise<import("viem").GetBytecodeReturnType>;
        getContractEvents: <const abi extends import("abitype").Abi | readonly unknown[], eventName extends import("viem").ContractEventName<abi> | undefined = undefined, strict extends boolean | undefined = undefined, fromBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined, toBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined>(args: import("viem").GetContractEventsParameters<abi, eventName, strict, fromBlock, toBlock>) => Promise<import("viem").GetContractEventsReturnType<abi, eventName, strict, fromBlock, toBlock>>;
        getEip712Domain: (args: import("viem").GetEip712DomainParameters) => Promise<import("viem").GetEip712DomainReturnType>;
        getEnsAddress: (args: import("viem").GetEnsAddressParameters) => Promise<import("viem").GetEnsAddressReturnType>;
        getEnsAvatar: (args: import("viem").GetEnsAvatarParameters) => Promise<import("viem").GetEnsAvatarReturnType>;
        getEnsName: (args: import("viem").GetEnsNameParameters) => Promise<import("viem").GetEnsNameReturnType>;
        getEnsResolver: (args: import("viem").GetEnsResolverParameters) => Promise<import("viem").GetEnsResolverReturnType>;
        getEnsText: (args: import("viem").GetEnsTextParameters) => Promise<import("viem").GetEnsTextReturnType>;
        getFeeHistory: (args: import("viem").GetFeeHistoryParameters) => Promise<import("viem").GetFeeHistoryReturnType>;
        estimateFeesPerGas: <chainOverride extends import("viem").Chain | undefined = undefined, type extends import("viem").FeeValuesType = "eip1559">(args?: import("viem").EstimateFeesPerGasParameters<import("viem").Chain, chainOverride, type> | undefined) => Promise<import("viem").EstimateFeesPerGasReturnType<type>>;
        getFilterChanges: <filterType extends import("viem").FilterType, const abi extends import("abitype").Abi | readonly unknown[] | undefined, eventName extends string | undefined, strict extends boolean | undefined = undefined, fromBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined, toBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined>(args: import("viem").GetFilterChangesParameters<filterType, abi, eventName, strict, fromBlock, toBlock>) => Promise<import("viem").GetFilterChangesReturnType<filterType, abi, eventName, strict, fromBlock, toBlock>>;
        getFilterLogs: <const abi extends import("abitype").Abi | readonly unknown[] | undefined, eventName extends string | undefined, strict extends boolean | undefined = undefined, fromBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined, toBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined>(args: import("viem").GetFilterLogsParameters<abi, eventName, strict, fromBlock, toBlock>) => Promise<import("viem").GetFilterLogsReturnType<abi, eventName, strict, fromBlock, toBlock>>;
        getGasPrice: () => Promise<import("viem").GetGasPriceReturnType>;
        getLogs: <const abiEvent extends import("abitype").AbiEvent | undefined = undefined, const abiEvents extends readonly import("abitype").AbiEvent[] | readonly unknown[] | undefined = abiEvent extends import("abitype").AbiEvent ? [abiEvent] : undefined, strict extends boolean | undefined = undefined, fromBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined, toBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined>(args?: import("viem").GetLogsParameters<abiEvent, abiEvents, strict, fromBlock, toBlock> | undefined) => Promise<import("viem").GetLogsReturnType<abiEvent, abiEvents, strict, fromBlock, toBlock>>;
        getProof: (args: import("viem").GetProofParameters) => Promise<import("viem").GetProofReturnType>;
        estimateMaxPriorityFeePerGas: <chainOverride extends import("viem").Chain | undefined = undefined>(args?: {
            chain?: chainOverride | null | undefined;
        } | undefined) => Promise<import("viem").EstimateMaxPriorityFeePerGasReturnType>;
        getStorageAt: (args: import("viem").GetStorageAtParameters) => Promise<import("viem").GetStorageAtReturnType>;
        getTransaction: <blockTag extends import("viem").BlockTag = "latest">(args: import("viem").GetTransactionParameters<blockTag>) => Promise<{
            type: "legacy";
            input: import("viem").Hex;
            nonce: number;
            value: bigint;
            from: Address;
            gas: bigint;
            to: Address | null;
            r: import("viem").Hex;
            s: import("viem").Hex;
            v: bigint;
            yParity?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice: bigint;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
            chainId?: number | undefined;
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            hash: import("viem").Hash;
            typeHex: import("viem").Hex | null;
            blockNumber: (blockTag extends "pending" ? true : false) extends infer T ? T extends (blockTag extends "pending" ? true : false) ? T extends true ? null : bigint : never : never;
            blockHash: (blockTag extends "pending" ? true : false) extends infer T_1 ? T_1 extends (blockTag extends "pending" ? true : false) ? T_1 extends true ? null : `0x${string}` : never : never;
            transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_2 ? T_2 extends (blockTag extends "pending" ? true : false) ? T_2 extends true ? null : number : never : never;
        } | {
            type: "eip2930";
            input: import("viem").Hex;
            nonce: number;
            value: bigint;
            from: Address;
            gas: bigint;
            to: Address | null;
            r: import("viem").Hex;
            s: import("viem").Hex;
            v: bigint;
            yParity: number;
            blobVersionedHashes?: undefined | undefined;
            gasPrice: bigint;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
            chainId: number;
            accessList: import("viem").AccessList;
            authorizationList?: undefined | undefined;
            hash: import("viem").Hash;
            typeHex: import("viem").Hex | null;
            blockNumber: (blockTag extends "pending" ? true : false) extends infer T_3 ? T_3 extends (blockTag extends "pending" ? true : false) ? T_3 extends true ? null : bigint : never : never;
            blockHash: (blockTag extends "pending" ? true : false) extends infer T_4 ? T_4 extends (blockTag extends "pending" ? true : false) ? T_4 extends true ? null : `0x${string}` : never : never;
            transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_5 ? T_5 extends (blockTag extends "pending" ? true : false) ? T_5 extends true ? null : number : never : never;
        } | {
            type: "eip1559";
            input: import("viem").Hex;
            nonce: number;
            value: bigint;
            from: Address;
            gas: bigint;
            to: Address | null;
            r: import("viem").Hex;
            s: import("viem").Hex;
            v: bigint;
            yParity: number;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            chainId: number;
            accessList: import("viem").AccessList;
            authorizationList?: undefined | undefined;
            hash: import("viem").Hash;
            typeHex: import("viem").Hex | null;
            blockNumber: (blockTag extends "pending" ? true : false) extends infer T_6 ? T_6 extends (blockTag extends "pending" ? true : false) ? T_6 extends true ? null : bigint : never : never;
            blockHash: (blockTag extends "pending" ? true : false) extends infer T_7 ? T_7 extends (blockTag extends "pending" ? true : false) ? T_7 extends true ? null : `0x${string}` : never : never;
            transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_8 ? T_8 extends (blockTag extends "pending" ? true : false) ? T_8 extends true ? null : number : never : never;
        } | {
            type: "eip4844";
            input: import("viem").Hex;
            nonce: number;
            value: bigint;
            from: Address;
            gas: bigint;
            to: Address | null;
            r: import("viem").Hex;
            s: import("viem").Hex;
            v: bigint;
            yParity: number;
            blobVersionedHashes: readonly import("viem").Hex[];
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas: bigint;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            chainId: number;
            accessList: import("viem").AccessList;
            authorizationList?: undefined | undefined;
            hash: import("viem").Hash;
            typeHex: import("viem").Hex | null;
            blockNumber: (blockTag extends "pending" ? true : false) extends infer T_9 ? T_9 extends (blockTag extends "pending" ? true : false) ? T_9 extends true ? null : bigint : never : never;
            blockHash: (blockTag extends "pending" ? true : false) extends infer T_10 ? T_10 extends (blockTag extends "pending" ? true : false) ? T_10 extends true ? null : `0x${string}` : never : never;
            transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_11 ? T_11 extends (blockTag extends "pending" ? true : false) ? T_11 extends true ? null : number : never : never;
        } | {
            type: "eip7702";
            input: import("viem").Hex;
            nonce: number;
            value: bigint;
            from: Address;
            gas: bigint;
            to: Address | null;
            r: import("viem").Hex;
            s: import("viem").Hex;
            v: bigint;
            yParity: number;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            chainId: number;
            accessList: import("viem").AccessList;
            authorizationList: import("viem").SignedAuthorizationList;
            hash: import("viem").Hash;
            typeHex: import("viem").Hex | null;
            blockNumber: (blockTag extends "pending" ? true : false) extends infer T_12 ? T_12 extends (blockTag extends "pending" ? true : false) ? T_12 extends true ? null : bigint : never : never;
            blockHash: (blockTag extends "pending" ? true : false) extends infer T_13 ? T_13 extends (blockTag extends "pending" ? true : false) ? T_13 extends true ? null : `0x${string}` : never : never;
            transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_14 ? T_14 extends (blockTag extends "pending" ? true : false) ? T_14 extends true ? null : number : never : never;
        }>;
        getTransactionConfirmations: (args: import("viem").GetTransactionConfirmationsParameters<import("viem").Chain>) => Promise<import("viem").GetTransactionConfirmationsReturnType>;
        getTransactionCount: (args: import("viem").GetTransactionCountParameters) => Promise<import("viem").GetTransactionCountReturnType>;
        getTransactionReceipt: (args: import("viem").GetTransactionReceiptParameters) => Promise<import("viem").TransactionReceipt>;
        multicall: <const contracts extends readonly unknown[], allowFailure extends boolean = true>(args: import("viem").MulticallParameters<contracts, allowFailure>) => Promise<import("viem").MulticallReturnType<contracts, allowFailure>>;
        prepareTransactionRequest: <const request extends import("viem").PrepareTransactionRequestRequest<import("viem").Chain, chainOverride>, chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | Address | undefined = undefined>(args: import("viem").PrepareTransactionRequestParameters<import("viem").Chain, import("viem").Account | undefined, chainOverride, accountOverride, request>) => Promise<import("viem").UnionRequiredBy<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<import("viem").Chain, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> & (import("viem").DeriveChain<import("viem").Chain, chainOverride> extends infer T_14 ? T_14 extends import("viem").DeriveChain<import("viem").Chain, chainOverride> ? T_14 extends import("viem").Chain ? {
            chain: T_14;
        } : {
            chain?: undefined;
        } : never : never) & (import("viem").DeriveAccount<import("viem").Account | undefined, accountOverride> extends infer T_15 ? T_15 extends import("viem").DeriveAccount<import("viem").Account | undefined, accountOverride> ? T_15 extends import("viem").Account ? {
            account: T_15;
            from: Address;
        } : {
            account?: undefined;
            from?: undefined;
        } : never : never), import("viem").IsNever<((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_16 ? T_16 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_16 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_17 ? T_17 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_17 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_18 ? T_18 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_18 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_19 ? T_19 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_19 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_20 ? T_20 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_20 extends "eip7702" ? import("viem").TransactionRequestEIP7702 : never : never : never)> extends true ? unknown : import("viem").ExactPartial<((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_21 ? T_21 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_21 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_22 ? T_22 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_22 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_23 ? T_23 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_23 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_24 ? T_24 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_24 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_25 ? T_25 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_25 extends "eip7702" ? import("viem").TransactionRequestEIP7702 : never : never : never)>> & {
            chainId?: number | undefined;
        }, (request["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request["parameters"][number] : "type" | "nonce" | "fees" | "gas" | "blobVersionedHashes" | "chainId") extends infer T_26 ? T_26 extends (request["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request["parameters"][number] : "type" | "nonce" | "fees" | "gas" | "blobVersionedHashes" | "chainId") ? T_26 extends "fees" ? "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" : T_26 : never : never> & (unknown extends request["kzg"] ? {} : Pick<request, "kzg">) extends infer T ? { [K in keyof T]: (import("viem").UnionRequiredBy<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<import("viem").Chain, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> & (import("viem").DeriveChain<import("viem").Chain, chainOverride> extends infer T_1 ? T_1 extends import("viem").DeriveChain<import("viem").Chain, chainOverride> ? T_1 extends import("viem").Chain ? {
            chain: T_1;
        } : {
            chain?: undefined;
        } : never : never) & (import("viem").DeriveAccount<import("viem").Account | undefined, accountOverride> extends infer T_2 ? T_2 extends import("viem").DeriveAccount<import("viem").Account | undefined, accountOverride> ? T_2 extends import("viem").Account ? {
            account: T_2;
            from: Address;
        } : {
            account?: undefined;
            from?: undefined;
        } : never : never), import("viem").IsNever<((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_3 ? T_3 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_3 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_4 ? T_4 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_4 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_5 ? T_5 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_5 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_6 ? T_6 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_6 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_7 ? T_7 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_7 extends "eip7702" ? import("viem").TransactionRequestEIP7702 : never : never : never)> extends true ? unknown : import("viem").ExactPartial<((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_8 ? T_8 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_8 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_9 ? T_9 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_9 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_10 ? T_10 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_10 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_11 ? T_11 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_11 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_12 ? T_12 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_12 extends "eip7702" ? import("viem").TransactionRequestEIP7702 : never : never : never)>> & {
            chainId?: number | undefined;
        }, (request["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request["parameters"][number] : "type" | "nonce" | "fees" | "gas" | "blobVersionedHashes" | "chainId") extends infer T_13 ? T_13 extends (request["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request["parameters"][number] : "type" | "nonce" | "fees" | "gas" | "blobVersionedHashes" | "chainId") ? T_13 extends "fees" ? "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" : T_13 : never : never> & (unknown extends request["kzg"] ? {} : Pick<request, "kzg">))[K]; } : never>;
        readContract: <const abi extends import("abitype").Abi | readonly unknown[], functionName extends import("viem").ContractFunctionName<abi, "pure" | "view">, const args extends import("viem").ContractFunctionArgs<abi, "pure" | "view", functionName>>(args: import("viem").ReadContractParameters<abi, functionName, args>) => Promise<import("viem").ReadContractReturnType<abi, functionName, args>>;
        sendRawTransaction: (args: import("viem").SendRawTransactionParameters) => Promise<import("viem").SendRawTransactionReturnType>;
        simulate: <const calls extends readonly unknown[]>(args: import("viem").SimulateBlocksParameters<calls>) => Promise<import("viem").SimulateBlocksReturnType<calls>>;
        simulateBlocks: <const calls extends readonly unknown[]>(args: import("viem").SimulateBlocksParameters<calls>) => Promise<import("viem").SimulateBlocksReturnType<calls>>;
        simulateCalls: <const calls extends readonly unknown[]>(args: import("viem").SimulateCallsParameters<calls>) => Promise<import("viem").SimulateCallsReturnType<calls>>;
        simulateContract: <const abi extends import("abitype").Abi | readonly unknown[], functionName extends import("viem").ContractFunctionName<abi, "nonpayable" | "payable">, const args_1 extends import("viem").ContractFunctionArgs<abi, "nonpayable" | "payable", functionName>, chainOverride extends import("viem").Chain | undefined, accountOverride extends import("viem").Account | Address | undefined = undefined>(args: import("viem").SimulateContractParameters<abi, functionName, args_1, import("viem").Chain, chainOverride, accountOverride>) => Promise<import("viem").SimulateContractReturnType<abi, functionName, args_1, import("viem").Chain, import("viem").Account | undefined, chainOverride, accountOverride>>;
        verifyMessage: (args: import("viem").VerifyMessageActionParameters) => Promise<import("viem").VerifyMessageActionReturnType>;
        verifySiweMessage: (args: import("node_modules/viem/_types/actions/siwe/verifySiweMessage").VerifySiweMessageParameters) => Promise<import("node_modules/viem/_types/actions/siwe/verifySiweMessage").VerifySiweMessageReturnType>;
        verifyTypedData: (args: import("viem").VerifyTypedDataActionParameters) => Promise<import("viem").VerifyTypedDataActionReturnType>;
        uninstallFilter: (args: import("viem").UninstallFilterParameters) => Promise<import("viem").UninstallFilterReturnType>;
        waitForTransactionReceipt: (args: import("viem").WaitForTransactionReceiptParameters<import("viem").Chain>) => Promise<import("viem").TransactionReceipt>;
        watchBlockNumber: (args: import("viem").WatchBlockNumberParameters) => import("viem").WatchBlockNumberReturnType;
        watchBlocks: <includeTransactions extends boolean = false, blockTag extends import("viem").BlockTag = "latest">(args: import("viem").WatchBlocksParameters<import("viem").Transport, import("viem").Chain, includeTransactions, blockTag>) => import("viem").WatchBlocksReturnType;
        watchContractEvent: <const abi extends import("abitype").Abi | readonly unknown[], eventName extends import("viem").ContractEventName<abi>, strict extends boolean | undefined = undefined>(args: import("viem").WatchContractEventParameters<abi, eventName, strict, import("viem").Transport>) => import("viem").WatchContractEventReturnType;
        watchEvent: <const abiEvent extends import("abitype").AbiEvent | undefined = undefined, const abiEvents extends readonly import("abitype").AbiEvent[] | readonly unknown[] | undefined = abiEvent extends import("abitype").AbiEvent ? [abiEvent] : undefined, strict extends boolean | undefined = undefined>(args: import("viem").WatchEventParameters<abiEvent, abiEvents, strict, import("viem").Transport>) => import("viem").WatchEventReturnType;
        watchPendingTransactions: (args: import("viem").WatchPendingTransactionsParameters<import("viem").Transport>) => import("viem").WatchPendingTransactionsReturnType;
        extend: <const client extends {
            [x: string]: unknown;
            account?: undefined;
            batch?: undefined;
            cacheTime?: undefined;
            ccipRead?: undefined;
            chain?: undefined;
            key?: undefined;
            name?: undefined;
            pollingInterval?: undefined;
            request?: undefined;
            transport?: undefined;
            type?: undefined;
            uid?: undefined;
        } & import("viem").ExactPartial<Pick<import("viem").PublicActions<import("viem").Transport, import("viem").Chain, undefined>, "call" | "createContractEventFilter" | "createEventFilter" | "estimateContractGas" | "estimateGas" | "getBlock" | "getBlockNumber" | "getChainId" | "getContractEvents" | "getEnsText" | "getFilterChanges" | "getGasPrice" | "getLogs" | "getTransaction" | "getTransactionCount" | "getTransactionReceipt" | "prepareTransactionRequest" | "readContract" | "sendRawTransaction" | "simulateContract" | "uninstallFilter" | "watchBlockNumber" | "watchContractEvent"> & Pick<import("viem").WalletActions<import("viem").Chain, undefined>, "sendTransaction" | "writeContract">>>(fn: (client: import("viem").Client<import("viem").Transport, import("viem").Chain, undefined, import("viem").PublicRpcSchema, import("viem").PublicActions<import("viem").Transport, import("viem").Chain>>) => client) => import("viem").Client<import("viem").Transport, import("viem").Chain, undefined, import("viem").PublicRpcSchema, { [K in keyof client]: client[K]; } & import("viem").PublicActions<import("viem").Transport, import("viem").Chain>>;
    };
    wallets: {
        account: import("viem").Account;
        batch?: {
            multicall?: boolean | import("viem").Prettify<import("viem").MulticallBatchOptions> | undefined;
        } | undefined;
        cacheTime: number;
        ccipRead?: false | {
            request?: (parameters: import("viem").CcipRequestParameters) => Promise<import("node_modules/viem/_types/utils/ccip").CcipRequestReturnType>;
        } | undefined;
        chain: import("viem").Chain;
        key: string;
        name: string;
        pollingInterval: number;
        request: import("viem").EIP1193RequestFn<import("viem").WalletRpcSchema>;
        transport: import("viem").TransportConfig<string, import("viem").EIP1193RequestFn> & Record<string, any>;
        type: string;
        uid: string;
        addChain: (args: import("viem").AddChainParameters) => Promise<void>;
        deployContract: <const abi extends import("abitype").Abi | readonly unknown[], chainOverride extends import("viem").Chain | undefined>(args: import("viem").DeployContractParameters<abi, import("viem").Chain, import("viem").Account, chainOverride>) => Promise<import("viem").DeployContractReturnType>;
        getAddresses: () => Promise<import("viem").GetAddressesReturnType>;
        getCallsStatus: (parameters: import("viem").GetCallsStatusParameters) => Promise<import("viem").GetCallsStatusReturnType>;
        getCapabilities: <chainId extends number | undefined>(parameters?: import("viem").GetCapabilitiesParameters<chainId>) => Promise<import("viem").GetCapabilitiesReturnType<chainId>>;
        getChainId: () => Promise<import("viem").GetChainIdReturnType>;
        getPermissions: () => Promise<import("viem").GetPermissionsReturnType>;
        prepareAuthorization: (parameters: import("viem").PrepareAuthorizationParameters<import("viem").Account>) => Promise<import("viem").PrepareAuthorizationReturnType>;
        prepareTransactionRequest: <const request extends import("viem").PrepareTransactionRequestRequest<import("viem").Chain, chainOverride>, chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | Address | undefined = undefined>(args: import("viem").PrepareTransactionRequestParameters<import("viem").Chain, import("viem").Account, chainOverride, accountOverride, request>) => Promise<import("viem").UnionRequiredBy<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<import("viem").Chain, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> & (import("viem").DeriveChain<import("viem").Chain, chainOverride> extends infer T_14 ? T_14 extends import("viem").DeriveChain<import("viem").Chain, chainOverride> ? T_14 extends import("viem").Chain ? {
            chain: T_14;
        } : {
            chain?: undefined;
        } : never : never) & (import("viem").DeriveAccount<import("viem").Account, accountOverride> extends infer T_15 ? T_15 extends import("viem").DeriveAccount<import("viem").Account, accountOverride> ? T_15 extends import("viem").Account ? {
            account: T_15;
            from: Address;
        } : {
            account?: undefined;
            from?: undefined;
        } : never : never), import("viem").IsNever<((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_16 ? T_16 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_16 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_17 ? T_17 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_17 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_18 ? T_18 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_18 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_19 ? T_19 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_19 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_20 ? T_20 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_20 extends "eip7702" ? import("viem").TransactionRequestEIP7702 : never : never : never)> extends true ? unknown : import("viem").ExactPartial<((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_21 ? T_21 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_21 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_22 ? T_22 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_22 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_23 ? T_23 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_23 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_24 ? T_24 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_24 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_25 ? T_25 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_25 extends "eip7702" ? import("viem").TransactionRequestEIP7702 : never : never : never)>> & {
            chainId?: number | undefined;
        }, (request["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request["parameters"][number] : "type" | "nonce" | "fees" | "gas" | "blobVersionedHashes" | "chainId") extends infer T_26 ? T_26 extends (request["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request["parameters"][number] : "type" | "nonce" | "fees" | "gas" | "blobVersionedHashes" | "chainId") ? T_26 extends "fees" ? "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" : T_26 : never : never> & (unknown extends request["kzg"] ? {} : Pick<request, "kzg">) extends infer T ? { [K in keyof T]: (import("viem").UnionRequiredBy<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<import("viem").Chain, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> & (import("viem").DeriveChain<import("viem").Chain, chainOverride> extends infer T_1 ? T_1 extends import("viem").DeriveChain<import("viem").Chain, chainOverride> ? T_1 extends import("viem").Chain ? {
            chain: T_1;
        } : {
            chain?: undefined;
        } : never : never) & (import("viem").DeriveAccount<import("viem").Account, accountOverride> extends infer T_2 ? T_2 extends import("viem").DeriveAccount<import("viem").Account, accountOverride> ? T_2 extends import("viem").Account ? {
            account: T_2;
            from: Address;
        } : {
            account?: undefined;
            from?: undefined;
        } : never : never), import("viem").IsNever<((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_3 ? T_3 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_3 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_4 ? T_4 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_4 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_5 ? T_5 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_5 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_6 ? T_6 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_6 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_7 ? T_7 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_7 extends "eip7702" ? import("viem").TransactionRequestEIP7702 : never : never : never)> extends true ? unknown : import("viem").ExactPartial<((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_8 ? T_8 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_8 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_9 ? T_9 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_9 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_10 ? T_10 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_10 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_11 ? T_11 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_11 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_12 ? T_12 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_12 extends "eip7702" ? import("viem").TransactionRequestEIP7702 : never : never : never)>> & {
            chainId?: number | undefined;
        }, (request["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request["parameters"][number] : "type" | "nonce" | "fees" | "gas" | "blobVersionedHashes" | "chainId") extends infer T_13 ? T_13 extends (request["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request["parameters"][number] : "type" | "nonce" | "fees" | "gas" | "blobVersionedHashes" | "chainId") ? T_13 extends "fees" ? "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" : T_13 : never : never> & (unknown extends request["kzg"] ? {} : Pick<request, "kzg">))[K]; } : never>;
        requestAddresses: () => Promise<import("viem").RequestAddressesReturnType>;
        requestPermissions: (args: import("viem").RequestPermissionsParameters) => Promise<import("viem").RequestPermissionsReturnType>;
        sendCalls: <const calls extends readonly unknown[], chainOverride extends import("viem").Chain | undefined = undefined>(parameters: import("viem").SendCallsParameters<import("viem").Chain, import("viem").Account, chainOverride, calls>) => Promise<{
            capabilities?: {
                [x: string]: any;
            } | undefined;
            id: string;
        }>;
        sendRawTransaction: (args: import("viem").SendRawTransactionParameters) => Promise<import("viem").SendRawTransactionReturnType>;
        sendTransaction: <const request extends import("viem").SendTransactionRequest<import("viem").Chain, chainOverride>, chainOverride extends import("viem").Chain | undefined = undefined>(args: import("viem").SendTransactionParameters<import("viem").Chain, import("viem").Account, chainOverride, request>) => Promise<import("viem").SendTransactionReturnType>;
        showCallsStatus: (parameters: import("viem").ShowCallsStatusParameters) => Promise<import("viem").ShowCallsStatusReturnType>;
        signAuthorization: (parameters: import("viem").SignAuthorizationParameters<import("viem").Account>) => Promise<import("viem").SignAuthorizationReturnType>;
        signMessage: (args: import("viem").SignMessageParameters<import("viem").Account>) => Promise<import("viem").SignMessageReturnType>;
        signTransaction: <chainOverride extends import("viem").Chain | undefined, const request extends import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<import("viem").Chain, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> = import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<import("viem").Chain, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from">>(args: import("viem").SignTransactionParameters<import("viem").Chain, import("viem").Account, chainOverride, request>) => Promise<import("viem").TransactionSerialized<import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>, (import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends infer T ? T extends import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> ? T extends "eip1559" ? `0x02${string}` : never : never : never) | (import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends infer T_1 ? T_1 extends import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> ? T_1 extends "eip2930" ? `0x01${string}` : never : never : never) | (import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends infer T_2 ? T_2 extends import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> ? T_2 extends "eip4844" ? `0x03${string}` : never : never : never) | (import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends infer T_3 ? T_3 extends import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> ? T_3 extends "eip7702" ? `0x04${string}` : never : never : never) | (import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends infer T_4 ? T_4 extends import("viem").GetTransactionType<request, (request extends {
            accessList?: undefined | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & import("viem").FeeValuesLegacy ? "legacy" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } & (import("viem").OneOf<{
            maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
        } | {
            maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
        }, import("viem").FeeValuesEIP1559> & {
            accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
        }) ? "eip1559" : never) | (request extends {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: bigint | undefined;
            sidecars?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: undefined | undefined;
            maxPriorityFeePerGas?: undefined | undefined;
        } & {
            accessList: import("viem").TransactionSerializableEIP2930["accessList"];
        } ? "eip2930" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: undefined | undefined;
            blobs?: readonly `0x${string}`[] | readonly import("viem").ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
        }) & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
            blobs: import("viem").TransactionSerializableEIP4844["blobs"];
        } | {
            blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
        } | {
            sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
        }, import("viem").TransactionSerializableEIP4844>) ? "eip4844" : never) | (request extends ({
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        } | {
            accessList?: import("viem").AccessList | undefined;
            authorizationList?: import("viem").SignedAuthorizationList | undefined;
            blobs?: undefined | undefined;
            blobVersionedHashes?: undefined | undefined;
            gasPrice?: undefined | undefined;
            maxFeePerBlobGas?: undefined | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            sidecars?: undefined | undefined;
        }) & {
            authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
        } ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> ? T_4 extends "legacy" ? import("viem").TransactionSerializedLegacy : never : never : never)>>;
        signTypedData: <const typedData extends {
            [x: string]: readonly import("abitype").TypedDataParameter[];
            [x: `string[${string}]`]: undefined;
            [x: `function[${string}]`]: undefined;
            [x: `address[${string}]`]: undefined;
            [x: `bool[${string}]`]: undefined;
            [x: `bytes[${string}]`]: undefined;
            [x: `bytes1[${string}]`]: undefined;
            [x: `bytes2[${string}]`]: undefined;
            [x: `bytes7[${string}]`]: undefined;
            [x: `bytes4[${string}]`]: undefined;
            [x: `bytes18[${string}]`]: undefined;
            [x: `bytes3[${string}]`]: undefined;
            [x: `bytes5[${string}]`]: undefined;
            [x: `bytes6[${string}]`]: undefined;
            [x: `bytes8[${string}]`]: undefined;
            [x: `bytes9[${string}]`]: undefined;
            [x: `bytes10[${string}]`]: undefined;
            [x: `bytes11[${string}]`]: undefined;
            [x: `bytes12[${string}]`]: undefined;
            [x: `bytes13[${string}]`]: undefined;
            [x: `bytes14[${string}]`]: undefined;
            [x: `bytes15[${string}]`]: undefined;
            [x: `bytes16[${string}]`]: undefined;
            [x: `bytes17[${string}]`]: undefined;
            [x: `bytes19[${string}]`]: undefined;
            [x: `bytes20[${string}]`]: undefined;
            [x: `bytes21[${string}]`]: undefined;
            [x: `bytes22[${string}]`]: undefined;
            [x: `bytes23[${string}]`]: undefined;
            [x: `bytes24[${string}]`]: undefined;
            [x: `bytes25[${string}]`]: undefined;
            [x: `bytes26[${string}]`]: undefined;
            [x: `bytes27[${string}]`]: undefined;
            [x: `bytes28[${string}]`]: undefined;
            [x: `bytes29[${string}]`]: undefined;
            [x: `bytes30[${string}]`]: undefined;
            [x: `bytes31[${string}]`]: undefined;
            [x: `bytes32[${string}]`]: undefined;
            [x: `int[${string}]`]: undefined;
            [x: `int8[${string}]`]: undefined;
            [x: `int16[${string}]`]: undefined;
            [x: `int24[${string}]`]: undefined;
            [x: `int32[${string}]`]: undefined;
            [x: `int40[${string}]`]: undefined;
            [x: `int48[${string}]`]: undefined;
            [x: `int56[${string}]`]: undefined;
            [x: `int64[${string}]`]: undefined;
            [x: `int72[${string}]`]: undefined;
            [x: `int80[${string}]`]: undefined;
            [x: `int88[${string}]`]: undefined;
            [x: `int96[${string}]`]: undefined;
            [x: `int104[${string}]`]: undefined;
            [x: `int112[${string}]`]: undefined;
            [x: `int120[${string}]`]: undefined;
            [x: `int128[${string}]`]: undefined;
            [x: `int136[${string}]`]: undefined;
            [x: `int144[${string}]`]: undefined;
            [x: `int152[${string}]`]: undefined;
            [x: `int160[${string}]`]: undefined;
            [x: `int168[${string}]`]: undefined;
            [x: `int176[${string}]`]: undefined;
            [x: `int184[${string}]`]: undefined;
            [x: `int192[${string}]`]: undefined;
            [x: `int200[${string}]`]: undefined;
            [x: `int208[${string}]`]: undefined;
            [x: `int216[${string}]`]: undefined;
            [x: `int224[${string}]`]: undefined;
            [x: `int232[${string}]`]: undefined;
            [x: `int240[${string}]`]: undefined;
            [x: `int248[${string}]`]: undefined;
            [x: `int256[${string}]`]: undefined;
            [x: `uint[${string}]`]: undefined;
            [x: `uint8[${string}]`]: undefined;
            [x: `uint16[${string}]`]: undefined;
            [x: `uint24[${string}]`]: undefined;
            [x: `uint32[${string}]`]: undefined;
            [x: `uint40[${string}]`]: undefined;
            [x: `uint48[${string}]`]: undefined;
            [x: `uint56[${string}]`]: undefined;
            [x: `uint64[${string}]`]: undefined;
            [x: `uint72[${string}]`]: undefined;
            [x: `uint80[${string}]`]: undefined;
            [x: `uint88[${string}]`]: undefined;
            [x: `uint96[${string}]`]: undefined;
            [x: `uint104[${string}]`]: undefined;
            [x: `uint112[${string}]`]: undefined;
            [x: `uint120[${string}]`]: undefined;
            [x: `uint128[${string}]`]: undefined;
            [x: `uint136[${string}]`]: undefined;
            [x: `uint144[${string}]`]: undefined;
            [x: `uint152[${string}]`]: undefined;
            [x: `uint160[${string}]`]: undefined;
            [x: `uint168[${string}]`]: undefined;
            [x: `uint176[${string}]`]: undefined;
            [x: `uint184[${string}]`]: undefined;
            [x: `uint192[${string}]`]: undefined;
            [x: `uint200[${string}]`]: undefined;
            [x: `uint208[${string}]`]: undefined;
            [x: `uint216[${string}]`]: undefined;
            [x: `uint224[${string}]`]: undefined;
            [x: `uint232[${string}]`]: undefined;
            [x: `uint240[${string}]`]: undefined;
            [x: `uint248[${string}]`]: undefined;
            [x: `uint256[${string}]`]: undefined;
            string?: undefined;
            address?: undefined;
            bool?: undefined;
            bytes?: undefined;
            bytes1?: undefined;
            bytes2?: undefined;
            bytes7?: undefined;
            bytes4?: undefined;
            bytes18?: undefined;
            bytes3?: undefined;
            bytes5?: undefined;
            bytes6?: undefined;
            bytes8?: undefined;
            bytes9?: undefined;
            bytes10?: undefined;
            bytes11?: undefined;
            bytes12?: undefined;
            bytes13?: undefined;
            bytes14?: undefined;
            bytes15?: undefined;
            bytes16?: undefined;
            bytes17?: undefined;
            bytes19?: undefined;
            bytes20?: undefined;
            bytes21?: undefined;
            bytes22?: undefined;
            bytes23?: undefined;
            bytes24?: undefined;
            bytes25?: undefined;
            bytes26?: undefined;
            bytes27?: undefined;
            bytes28?: undefined;
            bytes29?: undefined;
            bytes30?: undefined;
            bytes31?: undefined;
            bytes32?: undefined;
            int8?: undefined;
            int16?: undefined;
            int24?: undefined;
            int32?: undefined;
            int40?: undefined;
            int48?: undefined;
            int56?: undefined;
            int64?: undefined;
            int72?: undefined;
            int80?: undefined;
            int88?: undefined;
            int96?: undefined;
            int104?: undefined;
            int112?: undefined;
            int120?: undefined;
            int128?: undefined;
            int136?: undefined;
            int144?: undefined;
            int152?: undefined;
            int160?: undefined;
            int168?: undefined;
            int176?: undefined;
            int184?: undefined;
            int192?: undefined;
            int200?: undefined;
            int208?: undefined;
            int216?: undefined;
            int224?: undefined;
            int232?: undefined;
            int240?: undefined;
            int248?: undefined;
            int256?: undefined;
            uint8?: undefined;
            uint16?: undefined;
            uint24?: undefined;
            uint32?: undefined;
            uint40?: undefined;
            uint48?: undefined;
            uint56?: undefined;
            uint64?: undefined;
            uint72?: undefined;
            uint80?: undefined;
            uint88?: undefined;
            uint96?: undefined;
            uint104?: undefined;
            uint112?: undefined;
            uint120?: undefined;
            uint128?: undefined;
            uint136?: undefined;
            uint144?: undefined;
            uint152?: undefined;
            uint160?: undefined;
            uint168?: undefined;
            uint176?: undefined;
            uint184?: undefined;
            uint192?: undefined;
            uint200?: undefined;
            uint208?: undefined;
            uint216?: undefined;
            uint224?: undefined;
            uint232?: undefined;
            uint240?: undefined;
            uint248?: undefined;
            uint256?: undefined;
        } | {
            [key: string]: unknown;
        }, primaryType extends string>(args: import("viem").SignTypedDataParameters<typedData, primaryType, import("viem").Account>) => Promise<import("viem").SignTypedDataReturnType>;
        switchChain: (args: import("viem").SwitchChainParameters) => Promise<void>;
        waitForCallsStatus: (parameters: import("viem").WaitForCallsStatusParameters) => Promise<import("viem").WaitForCallsStatusReturnType>;
        watchAsset: (args: import("viem").WatchAssetParameters) => Promise<import("viem").WatchAssetReturnType>;
        writeContract: <const abi extends import("abitype").Abi | readonly unknown[], functionName extends import("viem").ContractFunctionName<abi, "nonpayable" | "payable">, args_1 extends import("viem").ContractFunctionArgs<abi, "nonpayable" | "payable", functionName>, chainOverride extends import("viem").Chain | undefined = undefined>(args: import("viem").WriteContractParameters<abi, functionName, args_1, import("viem").Chain, import("viem").Account, chainOverride>) => Promise<import("viem").WriteContractReturnType>;
        extend: <const client extends {
            [x: string]: unknown;
            account?: undefined;
            batch?: undefined;
            cacheTime?: undefined;
            ccipRead?: undefined;
            chain?: undefined;
            key?: undefined;
            name?: undefined;
            pollingInterval?: undefined;
            request?: undefined;
            transport?: undefined;
            type?: undefined;
            uid?: undefined;
        } & import("viem").ExactPartial<Pick<import("viem").PublicActions<import("viem").Transport, import("viem").Chain, import("viem").Account>, "call" | "createContractEventFilter" | "createEventFilter" | "estimateContractGas" | "estimateGas" | "getBlock" | "getBlockNumber" | "getChainId" | "getContractEvents" | "getEnsText" | "getFilterChanges" | "getGasPrice" | "getLogs" | "getTransaction" | "getTransactionCount" | "getTransactionReceipt" | "prepareTransactionRequest" | "readContract" | "sendRawTransaction" | "simulateContract" | "uninstallFilter" | "watchBlockNumber" | "watchContractEvent"> & Pick<import("viem").WalletActions<import("viem").Chain, import("viem").Account>, "sendTransaction" | "writeContract">>>(fn: (client: import("viem").Client<import("viem").Transport, import("viem").Chain, import("viem").Account, import("viem").WalletRpcSchema, import("viem").WalletActions<import("viem").Chain, import("viem").Account>>) => client) => import("viem").Client<import("viem").Transport, import("viem").Chain, import("viem").Account, import("viem").WalletRpcSchema, { [K in keyof client]: client[K]; } & import("viem").WalletActions<import("viem").Chain, import("viem").Account>>;
    }[];
    ssvNetwork: {
        read: {
            [x: string]: (...parameters: [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<import("abitype").Abi, string, readonly unknown[]>, "address" | "args" | "abi" | "functionName">> | undefined] | [args: readonly unknown[], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<import("abitype").Abi, string, readonly unknown[]>, "address" | "args" | "abi" | "functionName">> | undefined]) => Promise<import("viem").ReadContractReturnType>;
        };
        estimateGas: {
            [x: string]: (...parameters: [options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<import("abitype").Abi, string, readonly unknown[], import("viem").Chain>, "address" | "args" | "abi" | "functionName">>] | [args: readonly unknown[], options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<import("abitype").Abi, string, readonly unknown[], import("viem").Chain>, "address" | "args" | "abi" | "functionName">>]) => Promise<import("viem").EstimateContractGasReturnType>;
        } & {
            [x: string]: (...parameters: [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<import("abitype").Abi, string, readonly unknown[], import("viem").Chain>, "address" | "args" | "abi" | "functionName">> | undefined] | [args: readonly unknown[], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<import("abitype").Abi, string, readonly unknown[], import("viem").Chain>, "address" | "args" | "abi" | "functionName">> | undefined]) => Promise<import("viem").EstimateContractGasReturnType>;
        };
        simulate: {
            [x: string]: <chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | Address | undefined = undefined>(...parameters: [options?: Omit<import("viem").SimulateContractParameters<import("abitype").Abi, string, readonly unknown[], import("viem").Chain, chainOverride, accountOverride>, "address" | "args" | "abi" | "functionName"> | undefined] | [args: readonly unknown[], options?: Omit<import("viem").SimulateContractParameters<import("abitype").Abi, string, readonly unknown[], import("viem").Chain, chainOverride, accountOverride>, "address" | "args" | "abi" | "functionName"> | undefined]) => Promise<import("viem").SimulateContractReturnType>;
        };
        createEventFilter: {
            [x: string]: <strict extends boolean | undefined = undefined>(...parameters: [options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                strict?: undefined;
                toBlock?: undefined;
                args?: undefined;
            }, options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined]) => Promise<import("viem").CreateContractEventFilterReturnType>;
        };
        getEvents: {
            [x: string]: (...parameters: [options?: {
                strict?: boolean | undefined;
                blockHash?: `0x${string}` | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined] | [args?: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            } | undefined, options?: {
                strict?: boolean | undefined;
                blockHash?: `0x${string}` | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined]) => Promise<import("viem").GetContractEventsReturnType<import("abitype").Abi, string>>;
        };
        watchEvent: {
            [x: string]: (...parameters: [options?: {
                batch?: boolean | undefined | undefined;
                pollingInterval?: number | undefined | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | undefined;
                onError?: ((error: Error) => void) | undefined | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<import("abitype").Abi, string, undefined>;
                poll?: true | undefined | undefined;
            } | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            }, options?: {
                batch?: boolean | undefined | undefined;
                pollingInterval?: number | undefined | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | undefined;
                onError?: ((error: Error) => void) | undefined | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<import("abitype").Abi, string, undefined>;
                poll?: true | undefined | undefined;
            } | undefined]) => import("viem").WatchContractEventReturnType;
        };
        write: {
            [x: string]: <chainOverride extends import("viem").Chain | undefined, options extends import("viem").UnionOmit<import("viem").WriteContractParameters<import("abitype").Abi, string, readonly unknown[], import("viem").Chain, import("viem").Account, chainOverride>, "address" | "args" | "abi" | "functionName"> extends infer T ? { [K in keyof T]: import("viem").UnionOmit<import("viem").WriteContractParameters<import("abitype").Abi, string, readonly unknown[], import("viem").Chain, import("viem").Account, chainOverride>, "address" | "args" | "abi" | "functionName">[K]; } : never, Rest extends unknown[] = [options?: options | undefined]>(...parameters: Rest | [args: readonly unknown[], ...parameters: Rest]) => Promise<import("viem").WriteContractReturnType>;
        };
        address: `0x${string}`;
        abi: import("abitype").Abi;
    };
    ssvNetworkViews: {
        read: {
            [x: string]: (...parameters: [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<import("abitype").Abi, string, readonly unknown[]>, "address" | "args" | "abi" | "functionName">> | undefined] | [args: readonly unknown[], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<import("abitype").Abi, string, readonly unknown[]>, "address" | "args" | "abi" | "functionName">> | undefined]) => Promise<import("viem").ReadContractReturnType>;
        };
        estimateGas: {
            [x: string]: (...parameters: [options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<import("abitype").Abi, string, readonly unknown[], import("viem").Chain>, "address" | "args" | "abi" | "functionName">>] | [args: readonly unknown[], options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<import("abitype").Abi, string, readonly unknown[], import("viem").Chain>, "address" | "args" | "abi" | "functionName">>]) => Promise<import("viem").EstimateContractGasReturnType>;
        } & {
            [x: string]: (...parameters: [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<import("abitype").Abi, string, readonly unknown[], import("viem").Chain>, "address" | "args" | "abi" | "functionName">> | undefined] | [args: readonly unknown[], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<import("abitype").Abi, string, readonly unknown[], import("viem").Chain>, "address" | "args" | "abi" | "functionName">> | undefined]) => Promise<import("viem").EstimateContractGasReturnType>;
        };
        simulate: {
            [x: string]: <chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | Address | undefined = undefined>(...parameters: [options?: Omit<import("viem").SimulateContractParameters<import("abitype").Abi, string, readonly unknown[], import("viem").Chain, chainOverride, accountOverride>, "address" | "args" | "abi" | "functionName"> | undefined] | [args: readonly unknown[], options?: Omit<import("viem").SimulateContractParameters<import("abitype").Abi, string, readonly unknown[], import("viem").Chain, chainOverride, accountOverride>, "address" | "args" | "abi" | "functionName"> | undefined]) => Promise<import("viem").SimulateContractReturnType>;
        };
        createEventFilter: {
            [x: string]: <strict extends boolean | undefined = undefined>(...parameters: [options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                strict?: undefined;
                toBlock?: undefined;
                args?: undefined;
            }, options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined]) => Promise<import("viem").CreateContractEventFilterReturnType>;
        };
        getEvents: {
            [x: string]: (...parameters: [options?: {
                strict?: boolean | undefined;
                blockHash?: `0x${string}` | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined] | [args?: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            } | undefined, options?: {
                strict?: boolean | undefined;
                blockHash?: `0x${string}` | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined]) => Promise<import("viem").GetContractEventsReturnType<import("abitype").Abi, string>>;
        };
        watchEvent: {
            [x: string]: (...parameters: [options?: {
                batch?: boolean | undefined | undefined;
                pollingInterval?: number | undefined | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | undefined;
                onError?: ((error: Error) => void) | undefined | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<import("abitype").Abi, string, undefined>;
                poll?: true | undefined | undefined;
            } | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            }, options?: {
                batch?: boolean | undefined | undefined;
                pollingInterval?: number | undefined | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | undefined;
                onError?: ((error: Error) => void) | undefined | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<import("abitype").Abi, string, undefined>;
                poll?: true | undefined | undefined;
            } | undefined]) => import("viem").WatchContractEventReturnType;
        };
        write: {
            [x: string]: <chainOverride extends import("viem").Chain | undefined, options extends import("viem").UnionOmit<import("viem").WriteContractParameters<import("abitype").Abi, string, readonly unknown[], import("viem").Chain, import("viem").Account, chainOverride>, "address" | "args" | "abi" | "functionName"> extends infer T ? { [K in keyof T]: import("viem").UnionOmit<import("viem").WriteContractParameters<import("abitype").Abi, string, readonly unknown[], import("viem").Chain, import("viem").Account, chainOverride>, "address" | "args" | "abi" | "functionName">[K]; } : never, Rest extends unknown[] = [options?: options | undefined]>(...parameters: Rest | [args: readonly unknown[], ...parameters: Rest]) => Promise<import("viem").WriteContractReturnType>;
        };
        address: `0x${string}`;
        abi: import("abitype").Abi;
    };
    ssvToken: {
        read: {
            [x: string]: (...parameters: [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<import("abitype").Abi, string, readonly unknown[]>, "address" | "args" | "abi" | "functionName">> | undefined] | [args: readonly unknown[], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").ReadContractParameters<import("abitype").Abi, string, readonly unknown[]>, "address" | "args" | "abi" | "functionName">> | undefined]) => Promise<import("viem").ReadContractReturnType>;
        };
        estimateGas: {
            [x: string]: (...parameters: [options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<import("abitype").Abi, string, readonly unknown[], import("viem").Chain>, "address" | "args" | "abi" | "functionName">>] | [args: readonly unknown[], options: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<import("abitype").Abi, string, readonly unknown[], import("viem").Chain>, "address" | "args" | "abi" | "functionName">>]) => Promise<import("viem").EstimateContractGasReturnType>;
        } & {
            [x: string]: (...parameters: [options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<import("abitype").Abi, string, readonly unknown[], import("viem").Chain>, "address" | "args" | "abi" | "functionName">> | undefined] | [args: readonly unknown[], options?: import("viem").Prettify<import("viem").UnionOmit<import("viem").EstimateContractGasParameters<import("abitype").Abi, string, readonly unknown[], import("viem").Chain>, "address" | "args" | "abi" | "functionName">> | undefined]) => Promise<import("viem").EstimateContractGasReturnType>;
        };
        simulate: {
            [x: string]: <chainOverride extends import("viem").Chain | undefined = undefined, accountOverride extends import("viem").Account | Address | undefined = undefined>(...parameters: [options?: Omit<import("viem").SimulateContractParameters<import("abitype").Abi, string, readonly unknown[], import("viem").Chain, chainOverride, accountOverride>, "address" | "args" | "abi" | "functionName"> | undefined] | [args: readonly unknown[], options?: Omit<import("viem").SimulateContractParameters<import("abitype").Abi, string, readonly unknown[], import("viem").Chain, chainOverride, accountOverride>, "address" | "args" | "abi" | "functionName"> | undefined]) => Promise<import("viem").SimulateContractReturnType>;
        };
        createEventFilter: {
            [x: string]: <strict extends boolean | undefined = undefined>(...parameters: [options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                strict?: undefined;
                toBlock?: undefined;
                args?: undefined;
            }, options?: ({
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } & {
                strict?: strict | undefined;
            }) | undefined]) => Promise<import("viem").CreateContractEventFilterReturnType>;
        };
        getEvents: {
            [x: string]: (...parameters: [options?: {
                strict?: boolean | undefined;
                blockHash?: `0x${string}` | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined] | [args?: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            } | undefined, options?: {
                strict?: boolean | undefined;
                blockHash?: `0x${string}` | undefined;
                fromBlock?: bigint | import("viem").BlockTag | undefined;
                toBlock?: bigint | import("viem").BlockTag | undefined;
            } | undefined]) => Promise<import("viem").GetContractEventsReturnType<import("abitype").Abi, string>>;
        };
        watchEvent: {
            [x: string]: (...parameters: [options?: {
                batch?: boolean | undefined | undefined;
                pollingInterval?: number | undefined | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | undefined;
                onError?: ((error: Error) => void) | undefined | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<import("abitype").Abi, string, undefined>;
                poll?: true | undefined | undefined;
            } | undefined] | [args: readonly unknown[] | {
                [x: string]: unknown;
                address?: undefined;
                abi?: undefined;
                args?: undefined;
                eventName?: undefined;
                fromBlock?: undefined;
                onError?: undefined;
                onLogs?: undefined;
                strict?: undefined;
                poll?: undefined;
                batch?: undefined;
                pollingInterval?: undefined;
            }, options?: {
                batch?: boolean | undefined | undefined;
                pollingInterval?: number | undefined | undefined;
                strict?: boolean | undefined;
                fromBlock?: bigint | undefined;
                onError?: ((error: Error) => void) | undefined | undefined;
                onLogs: import("viem").WatchContractEventOnLogsFn<import("abitype").Abi, string, undefined>;
                poll?: true | undefined | undefined;
            } | undefined]) => import("viem").WatchContractEventReturnType;
        };
        write: {
            [x: string]: <chainOverride extends import("viem").Chain | undefined, options extends import("viem").UnionOmit<import("viem").WriteContractParameters<import("abitype").Abi, string, readonly unknown[], import("viem").Chain, import("viem").Account, chainOverride>, "address" | "args" | "abi" | "functionName"> extends infer T ? { [K in keyof T]: import("viem").UnionOmit<import("viem").WriteContractParameters<import("abitype").Abi, string, readonly unknown[], import("viem").Chain, import("viem").Account, chainOverride>, "address" | "args" | "abi" | "functionName">[K]; } : never, Rest extends unknown[] = [options?: options | undefined]>(...parameters: Rest | [args: readonly unknown[], ...parameters: Rest]) => Promise<import("viem").WriteContractReturnType>;
        };
        address: `0x${string}`;
        abi: import("abitype").Abi;
    };
    initialBalance: bigint;
}>;
