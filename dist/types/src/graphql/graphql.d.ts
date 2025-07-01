import { type Address } from 'viem';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> = T | {
    [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: {
        input: string;
        output: string;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
    BigDecimal: {
        input: string;
        output: string;
    };
    BigInt: {
        input: string;
        output: string;
    };
    Bytes: {
        input: Address;
        output: Address;
    };
    /**
     * 8 bytes signed integer
     *
     */
    Int8: {
        input: any;
        output: any;
    };
    /**
     * A string representation of microseconds UNIX timestamp (16 digits)
     *
     */
    Timestamp: {
        input: any;
        output: any;
    };
};
export type Account_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
    clusters_?: InputMaybe<Cluster_Filter>;
    feeRecipient?: InputMaybe<Scalars['Bytes']['input']>;
    feeRecipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
    feeRecipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
    feeRecipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
    feeRecipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    feeRecipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
    feeRecipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
    feeRecipient_not?: InputMaybe<Scalars['Bytes']['input']>;
    feeRecipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    feeRecipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    nonce?: InputMaybe<Scalars['BigInt']['input']>;
    nonce_gt?: InputMaybe<Scalars['BigInt']['input']>;
    nonce_gte?: InputMaybe<Scalars['BigInt']['input']>;
    nonce_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    nonce_lt?: InputMaybe<Scalars['BigInt']['input']>;
    nonce_lte?: InputMaybe<Scalars['BigInt']['input']>;
    nonce_not?: InputMaybe<Scalars['BigInt']['input']>;
    nonce_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operators_?: InputMaybe<Operator_Filter>;
    or?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
    validatorCount?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    validatorCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_not?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    validators_?: InputMaybe<Validator_Filter>;
};
export declare enum Account_OrderBy {
    Clusters = "clusters",
    FeeRecipient = "feeRecipient",
    Id = "id",
    Nonce = "nonce",
    Operators = "operators",
    ValidatorCount = "validatorCount",
    Validators = "validators"
}
export declare enum Aggregation_Interval {
    Day = "day",
    Hour = "hour"
}
export type BlockChangedFilter = {
    number_gte: Scalars['Int']['input'];
};
export type Block_Height = {
    hash?: InputMaybe<Scalars['Bytes']['input']>;
    number?: InputMaybe<Scalars['Int']['input']>;
    number_gte?: InputMaybe<Scalars['Int']['input']>;
};
export type ClusterDeposited_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<ClusterDeposited_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_active?: InputMaybe<Scalars['Boolean']['input']>;
    cluster_active_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    cluster_active_not?: InputMaybe<Scalars['Boolean']['input']>;
    cluster_active_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    cluster_balance?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_index?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_index_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_networkFeeIndex?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_networkFeeIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_validatorCount?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_validatorCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<ClusterDeposited_Filter>>>;
    owner?: InputMaybe<Scalars['Bytes']['input']>;
    owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    value?: InputMaybe<Scalars['BigInt']['input']>;
    value_gt?: InputMaybe<Scalars['BigInt']['input']>;
    value_gte?: InputMaybe<Scalars['BigInt']['input']>;
    value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    value_lt?: InputMaybe<Scalars['BigInt']['input']>;
    value_lte?: InputMaybe<Scalars['BigInt']['input']>;
    value_not?: InputMaybe<Scalars['BigInt']['input']>;
    value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum ClusterDeposited_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    ClusterActive = "cluster_active",
    ClusterBalance = "cluster_balance",
    ClusterIndex = "cluster_index",
    ClusterNetworkFeeIndex = "cluster_networkFeeIndex",
    ClusterValidatorCount = "cluster_validatorCount",
    Id = "id",
    OperatorIds = "operatorIds",
    Owner = "owner",
    TransactionHash = "transactionHash",
    Value = "value"
}
export type ClusterLiquidated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<ClusterLiquidated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_active?: InputMaybe<Scalars['Boolean']['input']>;
    cluster_active_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    cluster_active_not?: InputMaybe<Scalars['Boolean']['input']>;
    cluster_active_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    cluster_balance?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_index?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_index_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_networkFeeIndex?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_networkFeeIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_validatorCount?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_validatorCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<ClusterLiquidated_Filter>>>;
    owner?: InputMaybe<Scalars['Bytes']['input']>;
    owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum ClusterLiquidated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    ClusterActive = "cluster_active",
    ClusterBalance = "cluster_balance",
    ClusterIndex = "cluster_index",
    ClusterNetworkFeeIndex = "cluster_networkFeeIndex",
    ClusterValidatorCount = "cluster_validatorCount",
    Id = "id",
    OperatorIds = "operatorIds",
    Owner = "owner",
    TransactionHash = "transactionHash"
}
export type ClusterReactivated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<ClusterReactivated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_active?: InputMaybe<Scalars['Boolean']['input']>;
    cluster_active_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    cluster_active_not?: InputMaybe<Scalars['Boolean']['input']>;
    cluster_active_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    cluster_balance?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_index?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_index_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_networkFeeIndex?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_networkFeeIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_validatorCount?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_validatorCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<ClusterReactivated_Filter>>>;
    owner?: InputMaybe<Scalars['Bytes']['input']>;
    owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum ClusterReactivated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    ClusterActive = "cluster_active",
    ClusterBalance = "cluster_balance",
    ClusterIndex = "cluster_index",
    ClusterNetworkFeeIndex = "cluster_networkFeeIndex",
    ClusterValidatorCount = "cluster_validatorCount",
    Id = "id",
    OperatorIds = "operatorIds",
    Owner = "owner",
    TransactionHash = "transactionHash"
}
export type ClusterWithdrawn_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<ClusterWithdrawn_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_active?: InputMaybe<Scalars['Boolean']['input']>;
    cluster_active_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    cluster_active_not?: InputMaybe<Scalars['Boolean']['input']>;
    cluster_active_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    cluster_balance?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_index?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_index_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_networkFeeIndex?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_networkFeeIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_validatorCount?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_validatorCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<ClusterWithdrawn_Filter>>>;
    owner?: InputMaybe<Scalars['Bytes']['input']>;
    owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    value?: InputMaybe<Scalars['BigInt']['input']>;
    value_gt?: InputMaybe<Scalars['BigInt']['input']>;
    value_gte?: InputMaybe<Scalars['BigInt']['input']>;
    value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    value_lt?: InputMaybe<Scalars['BigInt']['input']>;
    value_lte?: InputMaybe<Scalars['BigInt']['input']>;
    value_not?: InputMaybe<Scalars['BigInt']['input']>;
    value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum ClusterWithdrawn_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    ClusterActive = "cluster_active",
    ClusterBalance = "cluster_balance",
    ClusterIndex = "cluster_index",
    ClusterNetworkFeeIndex = "cluster_networkFeeIndex",
    ClusterValidatorCount = "cluster_validatorCount",
    Id = "id",
    OperatorIds = "operatorIds",
    Owner = "owner",
    TransactionHash = "transactionHash",
    Value = "value"
}
export type Cluster_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    active?: InputMaybe<Scalars['Boolean']['input']>;
    active_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    active_not?: InputMaybe<Scalars['Boolean']['input']>;
    active_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    and?: InputMaybe<Array<InputMaybe<Cluster_Filter>>>;
    balance?: InputMaybe<Scalars['BigInt']['input']>;
    balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
    balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
    balance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
    balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
    balance_not?: InputMaybe<Scalars['BigInt']['input']>;
    balance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    index?: InputMaybe<Scalars['BigInt']['input']>;
    index_gt?: InputMaybe<Scalars['BigInt']['input']>;
    index_gte?: InputMaybe<Scalars['BigInt']['input']>;
    index_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    index_lt?: InputMaybe<Scalars['BigInt']['input']>;
    index_lte?: InputMaybe<Scalars['BigInt']['input']>;
    index_not?: InputMaybe<Scalars['BigInt']['input']>;
    index_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateTransactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    lastUpdateTransactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    networkFeeIndex?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    networkFeeIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<Cluster_Filter>>>;
    owner?: InputMaybe<Scalars['String']['input']>;
    owner_?: InputMaybe<Account_Filter>;
    owner_contains?: InputMaybe<Scalars['String']['input']>;
    owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_gt?: InputMaybe<Scalars['String']['input']>;
    owner_gte?: InputMaybe<Scalars['String']['input']>;
    owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_lt?: InputMaybe<Scalars['String']['input']>;
    owner_lte?: InputMaybe<Scalars['String']['input']>;
    owner_not?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    validatorCount?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    validatorCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_not?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    validators_?: InputMaybe<Validator_Filter>;
};
export declare enum Cluster_OrderBy {
    Active = "active",
    Balance = "balance",
    Id = "id",
    Index = "index",
    LastUpdateBlockNumber = "lastUpdateBlockNumber",
    LastUpdateBlockTimestamp = "lastUpdateBlockTimestamp",
    LastUpdateTransactionHash = "lastUpdateTransactionHash",
    NetworkFeeIndex = "networkFeeIndex",
    OperatorIds = "operatorIds",
    Owner = "owner",
    OwnerFeeRecipient = "owner__feeRecipient",
    OwnerId = "owner__id",
    OwnerNonce = "owner__nonce",
    OwnerValidatorCount = "owner__validatorCount",
    ValidatorCount = "validatorCount",
    Validators = "validators"
}
export declare enum DaoUpdateTypes {
    DeclareOperatorFeePeriod = "DECLARE_OPERATOR_FEE_PERIOD",
    ExecuteOperatorFeePeriod = "EXECUTE_OPERATOR_FEE_PERIOD",
    Initialization = "INITIALIZATION",
    LiquidationThreshold = "LIQUIDATION_THRESHOLD",
    MinLiquidationCollateral = "MIN_LIQUIDATION_COLLATERAL",
    NetworkFee = "NETWORK_FEE",
    OperatorAdded = "OPERATOR_ADDED",
    OperatorFeeIncreaseLimit = "OPERATOR_FEE_INCREASE_LIMIT",
    OperatorMaxFee = "OPERATOR_MAX_FEE",
    OperatorRemoved = "OPERATOR_REMOVED",
    ValidatorAdded = "VALIDATOR_ADDED",
    ValidatorRemoved = "VALIDATOR_REMOVED"
}
export type DaoValues_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<DaoValues_Filter>>>;
    declareOperatorFeePeriod?: InputMaybe<Scalars['BigInt']['input']>;
    declareOperatorFeePeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
    declareOperatorFeePeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
    declareOperatorFeePeriod_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    declareOperatorFeePeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
    declareOperatorFeePeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
    declareOperatorFeePeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
    declareOperatorFeePeriod_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    executeOperatorFeePeriod?: InputMaybe<Scalars['BigInt']['input']>;
    executeOperatorFeePeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
    executeOperatorFeePeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
    executeOperatorFeePeriod_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    executeOperatorFeePeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
    executeOperatorFeePeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
    executeOperatorFeePeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
    executeOperatorFeePeriod_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    lastUpdateBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateTransactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    lastUpdateTransactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    liquidationThreshold?: InputMaybe<Scalars['BigInt']['input']>;
    liquidationThreshold_gt?: InputMaybe<Scalars['BigInt']['input']>;
    liquidationThreshold_gte?: InputMaybe<Scalars['BigInt']['input']>;
    liquidationThreshold_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    liquidationThreshold_lt?: InputMaybe<Scalars['BigInt']['input']>;
    liquidationThreshold_lte?: InputMaybe<Scalars['BigInt']['input']>;
    liquidationThreshold_not?: InputMaybe<Scalars['BigInt']['input']>;
    liquidationThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    minimumLiquidationCollateral?: InputMaybe<Scalars['BigInt']['input']>;
    minimumLiquidationCollateral_gt?: InputMaybe<Scalars['BigInt']['input']>;
    minimumLiquidationCollateral_gte?: InputMaybe<Scalars['BigInt']['input']>;
    minimumLiquidationCollateral_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    minimumLiquidationCollateral_lt?: InputMaybe<Scalars['BigInt']['input']>;
    minimumLiquidationCollateral_lte?: InputMaybe<Scalars['BigInt']['input']>;
    minimumLiquidationCollateral_not?: InputMaybe<Scalars['BigInt']['input']>;
    minimumLiquidationCollateral_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    networkFee?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndex?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndexBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndexBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndexBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndexBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    networkFeeIndexBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndexBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndexBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndexBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    networkFeeIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    networkFeeIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
    networkFeeIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    networkFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
    networkFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
    networkFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    networkFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
    networkFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
    networkFee_not?: InputMaybe<Scalars['BigInt']['input']>;
    networkFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorFeeIncreaseLimit?: InputMaybe<Scalars['BigInt']['input']>;
    operatorFeeIncreaseLimit_gt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorFeeIncreaseLimit_gte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorFeeIncreaseLimit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorFeeIncreaseLimit_lt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorFeeIncreaseLimit_lte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorFeeIncreaseLimit_not?: InputMaybe<Scalars['BigInt']['input']>;
    operatorFeeIncreaseLimit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorMaximumFee?: InputMaybe<Scalars['BigInt']['input']>;
    operatorMaximumFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorMaximumFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorMaximumFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorMaximumFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorMaximumFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorMaximumFee_not?: InputMaybe<Scalars['BigInt']['input']>;
    operatorMaximumFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorsAdded?: InputMaybe<Scalars['BigInt']['input']>;
    operatorsAdded_gt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorsAdded_gte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorsAdded_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorsAdded_lt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorsAdded_lte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorsAdded_not?: InputMaybe<Scalars['BigInt']['input']>;
    operatorsAdded_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorsRemoved?: InputMaybe<Scalars['BigInt']['input']>;
    operatorsRemoved_gt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorsRemoved_gte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorsRemoved_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorsRemoved_lt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorsRemoved_lte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorsRemoved_not?: InputMaybe<Scalars['BigInt']['input']>;
    operatorsRemoved_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<DaoValues_Filter>>>;
    totalAccounts?: InputMaybe<Scalars['BigInt']['input']>;
    totalAccounts_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalAccounts_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalAccounts_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalAccounts_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalAccounts_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalAccounts_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalAccounts_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalOperators?: InputMaybe<Scalars['BigInt']['input']>;
    totalOperators_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalOperators_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalOperators_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalOperators_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalOperators_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalOperators_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalOperators_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalValidators?: InputMaybe<Scalars['BigInt']['input']>;
    totalValidators_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalValidators_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalValidators_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalValidators_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalValidators_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalValidators_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalValidators_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    updateType?: InputMaybe<DaoUpdateTypes>;
    updateType_in?: InputMaybe<Array<DaoUpdateTypes>>;
    updateType_not?: InputMaybe<DaoUpdateTypes>;
    updateType_not_in?: InputMaybe<Array<DaoUpdateTypes>>;
    validatorsAdded?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsAdded_gt?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsAdded_gte?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsAdded_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    validatorsAdded_lt?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsAdded_lte?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsAdded_not?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsAdded_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    validatorsPerOperatorLimit?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsPerOperatorLimit_gt?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsPerOperatorLimit_gte?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsPerOperatorLimit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    validatorsPerOperatorLimit_lt?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsPerOperatorLimit_lte?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsPerOperatorLimit_not?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsPerOperatorLimit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    validatorsRemoved?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsRemoved_gt?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsRemoved_gte?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsRemoved_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    validatorsRemoved_lt?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsRemoved_lte?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsRemoved_not?: InputMaybe<Scalars['BigInt']['input']>;
    validatorsRemoved_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum DaoValues_OrderBy {
    DeclareOperatorFeePeriod = "declareOperatorFeePeriod",
    ExecuteOperatorFeePeriod = "executeOperatorFeePeriod",
    Id = "id",
    LastUpdateBlockNumber = "lastUpdateBlockNumber",
    LastUpdateBlockTimestamp = "lastUpdateBlockTimestamp",
    LastUpdateTransactionHash = "lastUpdateTransactionHash",
    LiquidationThreshold = "liquidationThreshold",
    MinimumLiquidationCollateral = "minimumLiquidationCollateral",
    NetworkFee = "networkFee",
    NetworkFeeIndex = "networkFeeIndex",
    NetworkFeeIndexBlockNumber = "networkFeeIndexBlockNumber",
    OperatorFeeIncreaseLimit = "operatorFeeIncreaseLimit",
    OperatorMaximumFee = "operatorMaximumFee",
    OperatorsAdded = "operatorsAdded",
    OperatorsRemoved = "operatorsRemoved",
    TotalAccounts = "totalAccounts",
    TotalOperators = "totalOperators",
    TotalValidators = "totalValidators",
    UpdateType = "updateType",
    ValidatorsAdded = "validatorsAdded",
    ValidatorsPerOperatorLimit = "validatorsPerOperatorLimit",
    ValidatorsRemoved = "validatorsRemoved"
}
export type DeclareOperatorFeePeriodUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<DeclareOperatorFeePeriodUpdated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<DeclareOperatorFeePeriodUpdated_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    value?: InputMaybe<Scalars['BigInt']['input']>;
    value_gt?: InputMaybe<Scalars['BigInt']['input']>;
    value_gte?: InputMaybe<Scalars['BigInt']['input']>;
    value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    value_lt?: InputMaybe<Scalars['BigInt']['input']>;
    value_lte?: InputMaybe<Scalars['BigInt']['input']>;
    value_not?: InputMaybe<Scalars['BigInt']['input']>;
    value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum DeclareOperatorFeePeriodUpdated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    TransactionHash = "transactionHash",
    Value = "value"
}
export type ExecuteOperatorFeePeriodUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<ExecuteOperatorFeePeriodUpdated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<ExecuteOperatorFeePeriodUpdated_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    value?: InputMaybe<Scalars['BigInt']['input']>;
    value_gt?: InputMaybe<Scalars['BigInt']['input']>;
    value_gte?: InputMaybe<Scalars['BigInt']['input']>;
    value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    value_lt?: InputMaybe<Scalars['BigInt']['input']>;
    value_lte?: InputMaybe<Scalars['BigInt']['input']>;
    value_not?: InputMaybe<Scalars['BigInt']['input']>;
    value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum ExecuteOperatorFeePeriodUpdated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    TransactionHash = "transactionHash",
    Value = "value"
}
export type FeeRecipientAddressUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<FeeRecipientAddressUpdated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<FeeRecipientAddressUpdated_Filter>>>;
    owner?: InputMaybe<Scalars['Bytes']['input']>;
    owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    recipientAddress?: InputMaybe<Scalars['Bytes']['input']>;
    recipientAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
    recipientAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
    recipientAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
    recipientAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    recipientAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
    recipientAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
    recipientAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
    recipientAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    recipientAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum FeeRecipientAddressUpdated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    Owner = "owner",
    RecipientAddress = "recipientAddress",
    TransactionHash = "transactionHash"
}
export type LiquidationThresholdPeriodUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<LiquidationThresholdPeriodUpdated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<LiquidationThresholdPeriodUpdated_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    value?: InputMaybe<Scalars['BigInt']['input']>;
    value_gt?: InputMaybe<Scalars['BigInt']['input']>;
    value_gte?: InputMaybe<Scalars['BigInt']['input']>;
    value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    value_lt?: InputMaybe<Scalars['BigInt']['input']>;
    value_lte?: InputMaybe<Scalars['BigInt']['input']>;
    value_not?: InputMaybe<Scalars['BigInt']['input']>;
    value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum LiquidationThresholdPeriodUpdated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    TransactionHash = "transactionHash",
    Value = "value"
}
export type MinimumLiquidationCollateralUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<MinimumLiquidationCollateralUpdated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<MinimumLiquidationCollateralUpdated_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    value?: InputMaybe<Scalars['BigInt']['input']>;
    value_gt?: InputMaybe<Scalars['BigInt']['input']>;
    value_gte?: InputMaybe<Scalars['BigInt']['input']>;
    value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    value_lt?: InputMaybe<Scalars['BigInt']['input']>;
    value_lte?: InputMaybe<Scalars['BigInt']['input']>;
    value_not?: InputMaybe<Scalars['BigInt']['input']>;
    value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum MinimumLiquidationCollateralUpdated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    TransactionHash = "transactionHash",
    Value = "value"
}
export type NetworkEarningsWithdrawn_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<NetworkEarningsWithdrawn_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<NetworkEarningsWithdrawn_Filter>>>;
    recipient?: InputMaybe<Scalars['Bytes']['input']>;
    recipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
    recipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
    recipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
    recipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    recipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
    recipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
    recipient_not?: InputMaybe<Scalars['Bytes']['input']>;
    recipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    recipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    value?: InputMaybe<Scalars['BigInt']['input']>;
    value_gt?: InputMaybe<Scalars['BigInt']['input']>;
    value_gte?: InputMaybe<Scalars['BigInt']['input']>;
    value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    value_lt?: InputMaybe<Scalars['BigInt']['input']>;
    value_lte?: InputMaybe<Scalars['BigInt']['input']>;
    value_not?: InputMaybe<Scalars['BigInt']['input']>;
    value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum NetworkEarningsWithdrawn_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    Recipient = "recipient",
    TransactionHash = "transactionHash",
    Value = "value"
}
export type NetworkFeeUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<NetworkFeeUpdated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    newFee?: InputMaybe<Scalars['BigInt']['input']>;
    newFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
    newFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
    newFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    newFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
    newFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
    newFee_not?: InputMaybe<Scalars['BigInt']['input']>;
    newFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    oldFee?: InputMaybe<Scalars['BigInt']['input']>;
    oldFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
    oldFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
    oldFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    oldFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
    oldFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
    oldFee_not?: InputMaybe<Scalars['BigInt']['input']>;
    oldFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<NetworkFeeUpdated_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum NetworkFeeUpdated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    NewFee = "newFee",
    OldFee = "oldFee",
    TransactionHash = "transactionHash"
}
export type OperatorAdded_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<OperatorAdded_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fee?: InputMaybe<Scalars['BigInt']['input']>;
    fee_gt?: InputMaybe<Scalars['BigInt']['input']>;
    fee_gte?: InputMaybe<Scalars['BigInt']['input']>;
    fee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fee_lt?: InputMaybe<Scalars['BigInt']['input']>;
    fee_lte?: InputMaybe<Scalars['BigInt']['input']>;
    fee_not?: InputMaybe<Scalars['BigInt']['input']>;
    fee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorId?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<OperatorAdded_Filter>>>;
    owner?: InputMaybe<Scalars['Bytes']['input']>;
    owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    publicKey?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_contains?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_gt?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_gte?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    publicKey_lt?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_lte?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_not?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum OperatorAdded_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Fee = "fee",
    Id = "id",
    OperatorId = "operatorId",
    Owner = "owner",
    PublicKey = "publicKey",
    TransactionHash = "transactionHash"
}
export type OperatorFeeDeclarationCancelled_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<OperatorFeeDeclarationCancelled_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorId?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<OperatorFeeDeclarationCancelled_Filter>>>;
    owner?: InputMaybe<Scalars['Bytes']['input']>;
    owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum OperatorFeeDeclarationCancelled_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    OperatorId = "operatorId",
    Owner = "owner",
    TransactionHash = "transactionHash"
}
export type OperatorFeeDeclared_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<OperatorFeeDeclared_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fee?: InputMaybe<Scalars['BigInt']['input']>;
    fee_gt?: InputMaybe<Scalars['BigInt']['input']>;
    fee_gte?: InputMaybe<Scalars['BigInt']['input']>;
    fee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fee_lt?: InputMaybe<Scalars['BigInt']['input']>;
    fee_lte?: InputMaybe<Scalars['BigInt']['input']>;
    fee_not?: InputMaybe<Scalars['BigInt']['input']>;
    fee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorId?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<OperatorFeeDeclared_Filter>>>;
    owner?: InputMaybe<Scalars['Bytes']['input']>;
    owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum OperatorFeeDeclared_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Fee = "fee",
    Id = "id",
    OperatorId = "operatorId",
    Owner = "owner",
    TransactionHash = "transactionHash"
}
export type OperatorFeeExecuted_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<OperatorFeeExecuted_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fee?: InputMaybe<Scalars['BigInt']['input']>;
    fee_gt?: InputMaybe<Scalars['BigInt']['input']>;
    fee_gte?: InputMaybe<Scalars['BigInt']['input']>;
    fee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fee_lt?: InputMaybe<Scalars['BigInt']['input']>;
    fee_lte?: InputMaybe<Scalars['BigInt']['input']>;
    fee_not?: InputMaybe<Scalars['BigInt']['input']>;
    fee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorId?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<OperatorFeeExecuted_Filter>>>;
    owner?: InputMaybe<Scalars['Bytes']['input']>;
    owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum OperatorFeeExecuted_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Fee = "fee",
    Id = "id",
    OperatorId = "operatorId",
    Owner = "owner",
    TransactionHash = "transactionHash"
}
export type OperatorFeeIncreaseLimitUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<OperatorFeeIncreaseLimitUpdated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    or?: InputMaybe<Array<InputMaybe<OperatorFeeIncreaseLimitUpdated_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    value?: InputMaybe<Scalars['BigInt']['input']>;
    value_gt?: InputMaybe<Scalars['BigInt']['input']>;
    value_gte?: InputMaybe<Scalars['BigInt']['input']>;
    value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    value_lt?: InputMaybe<Scalars['BigInt']['input']>;
    value_lte?: InputMaybe<Scalars['BigInt']['input']>;
    value_not?: InputMaybe<Scalars['BigInt']['input']>;
    value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum OperatorFeeIncreaseLimitUpdated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    TransactionHash = "transactionHash",
    Value = "value"
}
export type OperatorMaximumFeeUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<OperatorMaximumFeeUpdated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    maxFee?: InputMaybe<Scalars['BigInt']['input']>;
    maxFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
    maxFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
    maxFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    maxFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
    maxFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
    maxFee_not?: InputMaybe<Scalars['BigInt']['input']>;
    maxFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<OperatorMaximumFeeUpdated_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum OperatorMaximumFeeUpdated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    MaxFee = "maxFee",
    TransactionHash = "transactionHash"
}
export type OperatorMultipleWhitelistRemoved_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<OperatorMultipleWhitelistRemoved_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<OperatorMultipleWhitelistRemoved_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistAddresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistAddresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistAddresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistAddresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistAddresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistAddresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum OperatorMultipleWhitelistRemoved_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    OperatorIds = "operatorIds",
    TransactionHash = "transactionHash",
    WhitelistAddresses = "whitelistAddresses"
}
export type OperatorMultipleWhitelistUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<OperatorMultipleWhitelistUpdated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<OperatorMultipleWhitelistUpdated_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistAddresses?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistAddresses_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistAddresses_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistAddresses_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistAddresses_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistAddresses_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum OperatorMultipleWhitelistUpdated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    OperatorIds = "operatorIds",
    TransactionHash = "transactionHash",
    WhitelistAddresses = "whitelistAddresses"
}
export type OperatorPrivacyStatusUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<OperatorPrivacyStatusUpdated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<OperatorPrivacyStatusUpdated_Filter>>>;
    toPrivate?: InputMaybe<Scalars['Boolean']['input']>;
    toPrivate_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    toPrivate_not?: InputMaybe<Scalars['Boolean']['input']>;
    toPrivate_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum OperatorPrivacyStatusUpdated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    OperatorIds = "operatorIds",
    ToPrivate = "toPrivate",
    TransactionHash = "transactionHash"
}
export type OperatorRemoved_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<OperatorRemoved_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorId?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<OperatorRemoved_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum OperatorRemoved_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    OperatorId = "operatorId",
    TransactionHash = "transactionHash"
}
export type OperatorWhitelistUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<OperatorWhitelistUpdated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorId?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<OperatorWhitelistUpdated_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelisted?: InputMaybe<Scalars['Bytes']['input']>;
    whitelisted_contains?: InputMaybe<Scalars['Bytes']['input']>;
    whitelisted_gt?: InputMaybe<Scalars['Bytes']['input']>;
    whitelisted_gte?: InputMaybe<Scalars['Bytes']['input']>;
    whitelisted_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelisted_lt?: InputMaybe<Scalars['Bytes']['input']>;
    whitelisted_lte?: InputMaybe<Scalars['Bytes']['input']>;
    whitelisted_not?: InputMaybe<Scalars['Bytes']['input']>;
    whitelisted_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    whitelisted_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum OperatorWhitelistUpdated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    OperatorId = "operatorId",
    TransactionHash = "transactionHash",
    Whitelisted = "whitelisted"
}
export type OperatorWhitelistingContractUpdated_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<OperatorWhitelistingContractUpdated_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<OperatorWhitelistingContractUpdated_Filter>>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistingContract?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistingContract_contains?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistingContract_gt?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistingContract_gte?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistingContract_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistingContract_lt?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistingContract_lte?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistingContract_not?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistingContract_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistingContract_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum OperatorWhitelistingContractUpdated_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    OperatorIds = "operatorIds",
    TransactionHash = "transactionHash",
    WhitelistingContract = "whitelistingContract"
}
export type OperatorWithdrawn_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<OperatorWithdrawn_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorId?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<OperatorWithdrawn_Filter>>>;
    owner?: InputMaybe<Scalars['Bytes']['input']>;
    owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    value?: InputMaybe<Scalars['BigInt']['input']>;
    value_gt?: InputMaybe<Scalars['BigInt']['input']>;
    value_gte?: InputMaybe<Scalars['BigInt']['input']>;
    value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    value_lt?: InputMaybe<Scalars['BigInt']['input']>;
    value_lte?: InputMaybe<Scalars['BigInt']['input']>;
    value_not?: InputMaybe<Scalars['BigInt']['input']>;
    value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};
export declare enum OperatorWithdrawn_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    Id = "id",
    OperatorId = "operatorId",
    Owner = "owner",
    TransactionHash = "transactionHash",
    Value = "value"
}
export type Operator_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Operator_Filter>>>;
    declaredFee?: InputMaybe<Scalars['BigInt']['input']>;
    declaredFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
    declaredFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
    declaredFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    declaredFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
    declaredFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
    declaredFee_not?: InputMaybe<Scalars['BigInt']['input']>;
    declaredFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fee?: InputMaybe<Scalars['BigInt']['input']>;
    feeIndex?: InputMaybe<Scalars['BigInt']['input']>;
    feeIndexBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    feeIndexBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    feeIndexBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    feeIndexBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    feeIndexBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    feeIndexBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    feeIndexBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    feeIndexBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    feeIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
    feeIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
    feeIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    feeIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
    feeIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
    feeIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
    feeIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fee_gt?: InputMaybe<Scalars['BigInt']['input']>;
    fee_gte?: InputMaybe<Scalars['BigInt']['input']>;
    fee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    fee_lt?: InputMaybe<Scalars['BigInt']['input']>;
    fee_lte?: InputMaybe<Scalars['BigInt']['input']>;
    fee_not?: InputMaybe<Scalars['BigInt']['input']>;
    fee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
    isPrivate_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    isPrivate_not?: InputMaybe<Scalars['Boolean']['input']>;
    isPrivate_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    lastUpdateBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateTransactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    lastUpdateTransactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    operatorId?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_gte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorId_lt?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_lte?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not?: InputMaybe<Scalars['BigInt']['input']>;
    operatorId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<Operator_Filter>>>;
    owner?: InputMaybe<Scalars['String']['input']>;
    owner_?: InputMaybe<Account_Filter>;
    owner_contains?: InputMaybe<Scalars['String']['input']>;
    owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_gt?: InputMaybe<Scalars['String']['input']>;
    owner_gte?: InputMaybe<Scalars['String']['input']>;
    owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_lt?: InputMaybe<Scalars['String']['input']>;
    owner_lte?: InputMaybe<Scalars['String']['input']>;
    owner_not?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    publicKey?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_contains?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_gt?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_gte?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    publicKey_lt?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_lte?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_not?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    removed?: InputMaybe<Scalars['Boolean']['input']>;
    removed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    removed_not?: InputMaybe<Scalars['Boolean']['input']>;
    removed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    totalWithdrawn?: InputMaybe<Scalars['BigInt']['input']>;
    totalWithdrawn_gt?: InputMaybe<Scalars['BigInt']['input']>;
    totalWithdrawn_gte?: InputMaybe<Scalars['BigInt']['input']>;
    totalWithdrawn_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    totalWithdrawn_lt?: InputMaybe<Scalars['BigInt']['input']>;
    totalWithdrawn_lte?: InputMaybe<Scalars['BigInt']['input']>;
    totalWithdrawn_not?: InputMaybe<Scalars['BigInt']['input']>;
    totalWithdrawn_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    validatorCount?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    validatorCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_not?: InputMaybe<Scalars['BigInt']['input']>;
    validatorCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    validators_?: InputMaybe<Validator_Filter>;
    whitelisted?: InputMaybe<Array<Scalars['String']['input']>>;
    whitelistedContract?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistedContract_contains?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistedContract_gt?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistedContract_gte?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistedContract_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelistedContract_lt?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistedContract_lte?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistedContract_not?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistedContract_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    whitelistedContract_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    whitelisted_?: InputMaybe<Account_Filter>;
    whitelisted_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    whitelisted_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    whitelisted_not?: InputMaybe<Array<Scalars['String']['input']>>;
    whitelisted_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    whitelisted_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
};
export declare enum Operator_OrderBy {
    DeclaredFee = "declaredFee",
    Fee = "fee",
    FeeIndex = "feeIndex",
    FeeIndexBlockNumber = "feeIndexBlockNumber",
    Id = "id",
    IsPrivate = "isPrivate",
    LastUpdateBlockNumber = "lastUpdateBlockNumber",
    LastUpdateBlockTimestamp = "lastUpdateBlockTimestamp",
    LastUpdateTransactionHash = "lastUpdateTransactionHash",
    OperatorId = "operatorId",
    Owner = "owner",
    OwnerFeeRecipient = "owner__feeRecipient",
    OwnerId = "owner__id",
    OwnerNonce = "owner__nonce",
    OwnerValidatorCount = "owner__validatorCount",
    PublicKey = "publicKey",
    Removed = "removed",
    TotalWithdrawn = "totalWithdrawn",
    ValidatorCount = "validatorCount",
    Validators = "validators",
    Whitelisted = "whitelisted",
    WhitelistedContract = "whitelistedContract"
}
/** Defines the order direction, either ascending or descending */
export declare enum OrderDirection {
    Asc = "asc",
    Desc = "desc"
}
export type ValidatorAdded_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<ValidatorAdded_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_active?: InputMaybe<Scalars['Boolean']['input']>;
    cluster_active_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    cluster_active_not?: InputMaybe<Scalars['Boolean']['input']>;
    cluster_active_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    cluster_balance?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_index?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_index_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_networkFeeIndex?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_networkFeeIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_validatorCount?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_validatorCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<ValidatorAdded_Filter>>>;
    owner?: InputMaybe<Scalars['Bytes']['input']>;
    owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    publicKey?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_contains?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_gt?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_gte?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    publicKey_lt?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_lte?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_not?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    shares?: InputMaybe<Scalars['Bytes']['input']>;
    shares_contains?: InputMaybe<Scalars['Bytes']['input']>;
    shares_gt?: InputMaybe<Scalars['Bytes']['input']>;
    shares_gte?: InputMaybe<Scalars['Bytes']['input']>;
    shares_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    shares_lt?: InputMaybe<Scalars['Bytes']['input']>;
    shares_lte?: InputMaybe<Scalars['Bytes']['input']>;
    shares_not?: InputMaybe<Scalars['Bytes']['input']>;
    shares_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    shares_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum ValidatorAdded_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    ClusterActive = "cluster_active",
    ClusterBalance = "cluster_balance",
    ClusterIndex = "cluster_index",
    ClusterNetworkFeeIndex = "cluster_networkFeeIndex",
    ClusterValidatorCount = "cluster_validatorCount",
    Id = "id",
    OperatorIds = "operatorIds",
    Owner = "owner",
    PublicKey = "publicKey",
    Shares = "shares",
    TransactionHash = "transactionHash"
}
export type ValidatorRemoved_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<ValidatorRemoved_Filter>>>;
    blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_active?: InputMaybe<Scalars['Boolean']['input']>;
    cluster_active_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    cluster_active_not?: InputMaybe<Scalars['Boolean']['input']>;
    cluster_active_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    cluster_balance?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_balance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_index?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_index_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_index_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_networkFeeIndex?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_networkFeeIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_networkFeeIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_validatorCount?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    cluster_validatorCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_not?: InputMaybe<Scalars['BigInt']['input']>;
    cluster_validatorCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    id?: InputMaybe<Scalars['String']['input']>;
    id_contains?: InputMaybe<Scalars['String']['input']>;
    id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_gt?: InputMaybe<Scalars['String']['input']>;
    id_gte?: InputMaybe<Scalars['String']['input']>;
    id_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_lt?: InputMaybe<Scalars['String']['input']>;
    id_lte?: InputMaybe<Scalars['String']['input']>;
    id_not?: InputMaybe<Scalars['String']['input']>;
    id_not_contains?: InputMaybe<Scalars['String']['input']>;
    id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id_starts_with?: InputMaybe<Scalars['String']['input']>;
    id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    operatorIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    operatorIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    or?: InputMaybe<Array<InputMaybe<ValidatorRemoved_Filter>>>;
    owner?: InputMaybe<Scalars['Bytes']['input']>;
    owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
    owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    publicKey?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_contains?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_gt?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_gte?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    publicKey_lt?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_lte?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_not?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    publicKey_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum ValidatorRemoved_OrderBy {
    BlockNumber = "blockNumber",
    BlockTimestamp = "blockTimestamp",
    ClusterActive = "cluster_active",
    ClusterBalance = "cluster_balance",
    ClusterIndex = "cluster_index",
    ClusterNetworkFeeIndex = "cluster_networkFeeIndex",
    ClusterValidatorCount = "cluster_validatorCount",
    Id = "id",
    OperatorIds = "operatorIds",
    Owner = "owner",
    PublicKey = "publicKey",
    TransactionHash = "transactionHash"
}
export type Validator_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Validator_Filter>>>;
    cluster?: InputMaybe<Scalars['String']['input']>;
    cluster_?: InputMaybe<Cluster_Filter>;
    cluster_contains?: InputMaybe<Scalars['String']['input']>;
    cluster_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    cluster_ends_with?: InputMaybe<Scalars['String']['input']>;
    cluster_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    cluster_gt?: InputMaybe<Scalars['String']['input']>;
    cluster_gte?: InputMaybe<Scalars['String']['input']>;
    cluster_in?: InputMaybe<Array<Scalars['String']['input']>>;
    cluster_lt?: InputMaybe<Scalars['String']['input']>;
    cluster_lte?: InputMaybe<Scalars['String']['input']>;
    cluster_not?: InputMaybe<Scalars['String']['input']>;
    cluster_not_contains?: InputMaybe<Scalars['String']['input']>;
    cluster_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    cluster_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    cluster_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    cluster_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    cluster_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    cluster_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    cluster_starts_with?: InputMaybe<Scalars['String']['input']>;
    cluster_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['Bytes']['input']>;
    id_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_gt?: InputMaybe<Scalars['Bytes']['input']>;
    id_gte?: InputMaybe<Scalars['Bytes']['input']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    id_lt?: InputMaybe<Scalars['Bytes']['input']>;
    id_lte?: InputMaybe<Scalars['Bytes']['input']>;
    id_not?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    lastUpdateBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateBlockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
    lastUpdateBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
    lastUpdateTransactionHash?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    lastUpdateTransactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    lastUpdateTransactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    operators?: InputMaybe<Array<Scalars['String']['input']>>;
    operators_?: InputMaybe<Operator_Filter>;
    operators_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    operators_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    operators_not?: InputMaybe<Array<Scalars['String']['input']>>;
    operators_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
    operators_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
    or?: InputMaybe<Array<InputMaybe<Validator_Filter>>>;
    owner?: InputMaybe<Scalars['String']['input']>;
    owner_?: InputMaybe<Account_Filter>;
    owner_contains?: InputMaybe<Scalars['String']['input']>;
    owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_gt?: InputMaybe<Scalars['String']['input']>;
    owner_gte?: InputMaybe<Scalars['String']['input']>;
    owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_lt?: InputMaybe<Scalars['String']['input']>;
    owner_lte?: InputMaybe<Scalars['String']['input']>;
    owner_not?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains?: InputMaybe<Scalars['String']['input']>;
    owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
    owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with?: InputMaybe<Scalars['String']['input']>;
    owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
    removed?: InputMaybe<Scalars['Boolean']['input']>;
    removed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    removed_not?: InputMaybe<Scalars['Boolean']['input']>;
    removed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
    shares?: InputMaybe<Scalars['Bytes']['input']>;
    shares_contains?: InputMaybe<Scalars['Bytes']['input']>;
    shares_gt?: InputMaybe<Scalars['Bytes']['input']>;
    shares_gte?: InputMaybe<Scalars['Bytes']['input']>;
    shares_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
    shares_lt?: InputMaybe<Scalars['Bytes']['input']>;
    shares_lte?: InputMaybe<Scalars['Bytes']['input']>;
    shares_not?: InputMaybe<Scalars['Bytes']['input']>;
    shares_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
    shares_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};
export declare enum Validator_OrderBy {
    Cluster = "cluster",
    ClusterActive = "cluster__active",
    ClusterBalance = "cluster__balance",
    ClusterId = "cluster__id",
    ClusterIndex = "cluster__index",
    ClusterLastUpdateBlockNumber = "cluster__lastUpdateBlockNumber",
    ClusterLastUpdateBlockTimestamp = "cluster__lastUpdateBlockTimestamp",
    ClusterLastUpdateTransactionHash = "cluster__lastUpdateTransactionHash",
    ClusterNetworkFeeIndex = "cluster__networkFeeIndex",
    ClusterValidatorCount = "cluster__validatorCount",
    Id = "id",
    LastUpdateBlockNumber = "lastUpdateBlockNumber",
    LastUpdateBlockTimestamp = "lastUpdateBlockTimestamp",
    LastUpdateTransactionHash = "lastUpdateTransactionHash",
    Operators = "operators",
    Owner = "owner",
    OwnerFeeRecipient = "owner__feeRecipient",
    OwnerId = "owner__id",
    OwnerNonce = "owner__nonce",
    OwnerValidatorCount = "owner__validatorCount",
    Removed = "removed",
    Shares = "shares"
}
export declare enum _SubgraphErrorPolicy_ {
    /** Data will be returned even if the subgraph has indexing errors */
    Allow = "allow",
    /** If the subgraph has indexing errors, data will be omitted. The default. */
    Deny = "deny"
}
export type GetClusterSnapshotQueryVariables = Exact<{
    id: Scalars['ID']['input'];
}>;
export type GetClusterSnapshotQuery = {
    cluster?: {
        active: boolean;
        validatorCount: string;
        balance: string;
        index: string;
        networkFeeIndex: string;
    } | null;
};
export type GetClusterQueryVariables = Exact<{
    id: Scalars['ID']['input'];
}>;
export type GetClusterQuery = {
    cluster?: {
        active: boolean;
        validatorCount: string;
        balance: string;
        index: string;
        networkFeeIndex: string;
        operatorIds: Array<string>;
    } | null;
};
export type GetClustersQueryVariables = Exact<{
    owner: Scalars['String']['input'];
}>;
export type GetClustersQuery = {
    clusters: Array<{
        id: string;
        active: boolean;
        validatorCount: string;
        balance: string;
        index: string;
        networkFeeIndex: string;
        operatorIds: Array<string>;
    }>;
};
export type GetOwnerNonceQueryVariables = Exact<{
    owner: Scalars['ID']['input'];
}>;
export type GetOwnerNonceQuery = {
    account?: {
        nonce: string;
    } | null;
};
export type GetOwnerNonceByBlockQueryVariables = Exact<{
    owner: Scalars['ID']['input'];
    block?: InputMaybe<Scalars['Int']['input']>;
}>;
export type GetOwnerNonceByBlockQuery = {
    account?: {
        nonce: string;
    } | null;
};
export type GetOperatorQueryVariables = Exact<{
    id: Scalars['ID']['input'];
}>;
export type GetOperatorQuery = {
    operator?: {
        id: string;
        publicKey: Address;
        validatorCount: string;
        isPrivate: boolean;
        whitelistedContract: Address;
        whitelisted: Array<{
            id: Address;
        }>;
    } | null;
};
export type GetOperatorsQueryVariables = Exact<{
    operatorIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;
export type GetOperatorsQuery = {
    operators: Array<{
        id: string;
        publicKey: Address;
        validatorCount: string;
        isPrivate: boolean;
        whitelistedContract: Address;
        whitelisted: Array<{
            id: Address;
        }>;
    }>;
};
export type GetValidatorsQueryVariables = Exact<{
    ids: Array<Scalars['Bytes']['input']> | Scalars['Bytes']['input'];
}>;
export type GetValidatorsQuery = {
    validators: Array<{
        id: Address;
    }>;
};
export type GetValidatorQueryVariables = Exact<{
    id: Scalars['ID']['input'];
}>;
export type GetValidatorQuery = {
    validator?: {
        id: Address;
    } | null;
};
export type GetClusterBalanceQueryVariables = Exact<{
    clusterId: Scalars['ID']['input'];
    daoAddress: Scalars['ID']['input'];
    operatorIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;
export type GetClusterBalanceQuery = {
    _meta?: {
        block: {
            number: number;
        };
    } | null;
    daovalues?: {
        networkFee: string;
        networkFeeIndex: string;
        networkFeeIndexBlockNumber: string;
        liquidationThreshold: string;
        minimumLiquidationCollateral: string;
    } | null;
    operators: Array<{
        fee: string;
        feeIndex: string;
        feeIndexBlockNumber: string;
    }>;
    cluster?: {
        validatorCount: string;
        networkFeeIndex: string;
        index: string;
        balance: string;
    } | null;
};
export declare const GetClusterSnapshotDocument: DocumentNode<GetClusterSnapshotQuery, GetClusterSnapshotQueryVariables>;
export declare const GetClusterDocument: DocumentNode<GetClusterQuery, GetClusterQueryVariables>;
export declare const GetClustersDocument: DocumentNode<GetClustersQuery, GetClustersQueryVariables>;
export declare const GetOwnerNonceDocument: DocumentNode<GetOwnerNonceQuery, GetOwnerNonceQueryVariables>;
export declare const GetOwnerNonceByBlockDocument: DocumentNode<GetOwnerNonceByBlockQuery, GetOwnerNonceByBlockQueryVariables>;
export declare const GetOperatorDocument: DocumentNode<GetOperatorQuery, GetOperatorQueryVariables>;
export declare const GetOperatorsDocument: DocumentNode<GetOperatorsQuery, GetOperatorsQueryVariables>;
export declare const GetValidatorsDocument: DocumentNode<GetValidatorsQuery, GetValidatorsQueryVariables>;
export declare const GetValidatorDocument: DocumentNode<GetValidatorQuery, GetValidatorQueryVariables>;
export declare const GetClusterBalanceDocument: DocumentNode<GetClusterBalanceQuery, GetClusterBalanceQueryVariables>;
