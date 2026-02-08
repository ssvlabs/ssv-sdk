/* eslint-disable */
import { type Address } from 'viem';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: string; output: string; }
  BigInt: { input: string; output: string; }
  Bytes: { input: Address; output: Address; }
  /** 8 bytes signed integer */
  Int8: { input: any; output: any; }
  /** A string representation of microseconds UNIX timestamp (16 digits) */
  Timestamp: { input: any; output: any; }
};

export type Account = {
  clusters?: Maybe<Array<Cluster>>;
  delegatedOracles?: Maybe<Array<OracleDelegation>>;
  feeRecipient: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  nonce: Scalars['BigInt']['output'];
  operators?: Maybe<Array<Operator>>;
  stakedAmount: Scalars['BigInt']['output'];
  unstakePendingAmount: Scalars['BigInt']['output'];
  validatorCount: Scalars['BigInt']['output'];
  validators?: Maybe<Array<Validator>>;
};


export type AccountClustersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Cluster_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Cluster_Filter>;
};


export type AccountDelegatedOraclesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OracleDelegation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OracleDelegation_Filter>;
};


export type AccountOperatorsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Operator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Operator_Filter>;
};


export type AccountValidatorsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Validator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Validator_Filter>;
};

export type Account_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  clusters_?: InputMaybe<Cluster_Filter>;
  delegatedOracles_?: InputMaybe<OracleDelegation_Filter>;
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
  stakedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unstakePendingAmount?: InputMaybe<Scalars['BigInt']['input']>;
  unstakePendingAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unstakePendingAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unstakePendingAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unstakePendingAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unstakePendingAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unstakePendingAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  unstakePendingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export enum Account_OrderBy {
  Clusters = 'clusters',
  DelegatedOracles = 'delegatedOracles',
  FeeRecipient = 'feeRecipient',
  Id = 'id',
  Nonce = 'nonce',
  Operators = 'operators',
  StakedAmount = 'stakedAmount',
  UnstakePendingAmount = 'unstakePendingAmount',
  ValidatorCount = 'validatorCount',
  Validators = 'validators'
}

export enum Aggregation_Interval {
  Day = 'day',
  Hour = 'hour'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Cluster = {
  active: Scalars['Boolean']['output'];
  balance: Scalars['BigInt']['output'];
  effectiveBalance: Scalars['BigInt']['output'];
  feeAsset: ClusterFeeAssetTypes;
  id: Scalars['String']['output'];
  index: Scalars['BigInt']['output'];
  lastUpdateBlockNumber: Scalars['BigInt']['output'];
  lastUpdateBlockTimestamp: Scalars['BigInt']['output'];
  lastUpdateTransactionHash: Scalars['Bytes']['output'];
  networkFeeIndex: Scalars['BigInt']['output'];
  operatorIds: Array<Scalars['BigInt']['output']>;
  owner: Account;
  vUnits: Scalars['BigInt']['output'];
  validatorCount: Scalars['BigInt']['output'];
  validators?: Maybe<Array<Validator>>;
};


export type ClusterValidatorsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Validator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Validator_Filter>;
};

export type ClusterBalanceUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  cluster_active: Scalars['Boolean']['output'];
  cluster_balance: Scalars['BigInt']['output'];
  cluster_index: Scalars['BigInt']['output'];
  cluster_networkFeeIndex: Scalars['BigInt']['output'];
  cluster_validatorCount: Scalars['BigInt']['output'];
  effectiveBalance: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  operatorIds: Array<Scalars['BigInt']['output']>;
  owner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ClusterBalanceUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ClusterBalanceUpdated_Filter>>>;
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
  effectiveBalance?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveBalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveBalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveBalance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  effectiveBalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveBalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveBalance_not?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveBalance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  or?: InputMaybe<Array<InputMaybe<ClusterBalanceUpdated_Filter>>>;
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

export enum ClusterBalanceUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ClusterActive = 'cluster_active',
  ClusterBalance = 'cluster_balance',
  ClusterIndex = 'cluster_index',
  ClusterNetworkFeeIndex = 'cluster_networkFeeIndex',
  ClusterValidatorCount = 'cluster_validatorCount',
  EffectiveBalance = 'effectiveBalance',
  Id = 'id',
  OperatorIds = 'operatorIds',
  Owner = 'owner',
  TransactionHash = 'transactionHash'
}

export type ClusterDeposited = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  cluster_active: Scalars['Boolean']['output'];
  cluster_balance: Scalars['BigInt']['output'];
  cluster_index: Scalars['BigInt']['output'];
  cluster_networkFeeIndex: Scalars['BigInt']['output'];
  cluster_validatorCount: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  operatorIds: Array<Scalars['BigInt']['output']>;
  owner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  value: Scalars['BigInt']['output'];
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

export enum ClusterDeposited_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ClusterActive = 'cluster_active',
  ClusterBalance = 'cluster_balance',
  ClusterIndex = 'cluster_index',
  ClusterNetworkFeeIndex = 'cluster_networkFeeIndex',
  ClusterValidatorCount = 'cluster_validatorCount',
  Id = 'id',
  OperatorIds = 'operatorIds',
  Owner = 'owner',
  TransactionHash = 'transactionHash',
  Value = 'value'
}

export enum ClusterFeeAssetTypes {
  Eth = 'ETH',
  Ssv = 'SSV'
}

export type ClusterLiquidated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  cluster_active: Scalars['Boolean']['output'];
  cluster_balance: Scalars['BigInt']['output'];
  cluster_index: Scalars['BigInt']['output'];
  cluster_networkFeeIndex: Scalars['BigInt']['output'];
  cluster_validatorCount: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  operatorIds: Array<Scalars['BigInt']['output']>;
  owner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

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

export enum ClusterLiquidated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ClusterActive = 'cluster_active',
  ClusterBalance = 'cluster_balance',
  ClusterIndex = 'cluster_index',
  ClusterNetworkFeeIndex = 'cluster_networkFeeIndex',
  ClusterValidatorCount = 'cluster_validatorCount',
  Id = 'id',
  OperatorIds = 'operatorIds',
  Owner = 'owner',
  TransactionHash = 'transactionHash'
}

export type ClusterMigratedToEth = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  cluster_active: Scalars['Boolean']['output'];
  cluster_balance: Scalars['BigInt']['output'];
  cluster_index: Scalars['BigInt']['output'];
  cluster_networkFeeIndex: Scalars['BigInt']['output'];
  cluster_validatorCount: Scalars['BigInt']['output'];
  effectiveBalance: Scalars['BigInt']['output'];
  ethDeposited: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  operatorIds: Array<Scalars['BigInt']['output']>;
  owner: Scalars['Bytes']['output'];
  ssvRefunded: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ClusterMigratedToEth_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ClusterMigratedToEth_Filter>>>;
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
  effectiveBalance?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveBalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveBalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveBalance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  effectiveBalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveBalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveBalance_not?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveBalance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ethDeposited?: InputMaybe<Scalars['BigInt']['input']>;
  ethDeposited_gt?: InputMaybe<Scalars['BigInt']['input']>;
  ethDeposited_gte?: InputMaybe<Scalars['BigInt']['input']>;
  ethDeposited_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ethDeposited_lt?: InputMaybe<Scalars['BigInt']['input']>;
  ethDeposited_lte?: InputMaybe<Scalars['BigInt']['input']>;
  ethDeposited_not?: InputMaybe<Scalars['BigInt']['input']>;
  ethDeposited_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  or?: InputMaybe<Array<InputMaybe<ClusterMigratedToEth_Filter>>>;
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
  ssvRefunded?: InputMaybe<Scalars['BigInt']['input']>;
  ssvRefunded_gt?: InputMaybe<Scalars['BigInt']['input']>;
  ssvRefunded_gte?: InputMaybe<Scalars['BigInt']['input']>;
  ssvRefunded_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ssvRefunded_lt?: InputMaybe<Scalars['BigInt']['input']>;
  ssvRefunded_lte?: InputMaybe<Scalars['BigInt']['input']>;
  ssvRefunded_not?: InputMaybe<Scalars['BigInt']['input']>;
  ssvRefunded_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export enum ClusterMigratedToEth_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ClusterActive = 'cluster_active',
  ClusterBalance = 'cluster_balance',
  ClusterIndex = 'cluster_index',
  ClusterNetworkFeeIndex = 'cluster_networkFeeIndex',
  ClusterValidatorCount = 'cluster_validatorCount',
  EffectiveBalance = 'effectiveBalance',
  EthDeposited = 'ethDeposited',
  Id = 'id',
  OperatorIds = 'operatorIds',
  Owner = 'owner',
  SsvRefunded = 'ssvRefunded',
  TransactionHash = 'transactionHash'
}

export type ClusterReactivated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  cluster_active: Scalars['Boolean']['output'];
  cluster_balance: Scalars['BigInt']['output'];
  cluster_index: Scalars['BigInt']['output'];
  cluster_networkFeeIndex: Scalars['BigInt']['output'];
  cluster_validatorCount: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  operatorIds: Array<Scalars['BigInt']['output']>;
  owner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

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

export enum ClusterReactivated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ClusterActive = 'cluster_active',
  ClusterBalance = 'cluster_balance',
  ClusterIndex = 'cluster_index',
  ClusterNetworkFeeIndex = 'cluster_networkFeeIndex',
  ClusterValidatorCount = 'cluster_validatorCount',
  Id = 'id',
  OperatorIds = 'operatorIds',
  Owner = 'owner',
  TransactionHash = 'transactionHash'
}

export type ClusterWithdrawn = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  cluster_active: Scalars['Boolean']['output'];
  cluster_balance: Scalars['BigInt']['output'];
  cluster_index: Scalars['BigInt']['output'];
  cluster_networkFeeIndex: Scalars['BigInt']['output'];
  cluster_validatorCount: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  operatorIds: Array<Scalars['BigInt']['output']>;
  owner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  value: Scalars['BigInt']['output'];
};

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

export enum ClusterWithdrawn_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ClusterActive = 'cluster_active',
  ClusterBalance = 'cluster_balance',
  ClusterIndex = 'cluster_index',
  ClusterNetworkFeeIndex = 'cluster_networkFeeIndex',
  ClusterValidatorCount = 'cluster_validatorCount',
  Id = 'id',
  OperatorIds = 'operatorIds',
  Owner = 'owner',
  TransactionHash = 'transactionHash',
  Value = 'value'
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
  effectiveBalance?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveBalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveBalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveBalance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  effectiveBalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveBalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveBalance_not?: InputMaybe<Scalars['BigInt']['input']>;
  effectiveBalance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeAsset?: InputMaybe<ClusterFeeAssetTypes>;
  feeAsset_in?: InputMaybe<Array<ClusterFeeAssetTypes>>;
  feeAsset_not?: InputMaybe<ClusterFeeAssetTypes>;
  feeAsset_not_in?: InputMaybe<Array<ClusterFeeAssetTypes>>;
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
  vUnits?: InputMaybe<Scalars['BigInt']['input']>;
  vUnits_gt?: InputMaybe<Scalars['BigInt']['input']>;
  vUnits_gte?: InputMaybe<Scalars['BigInt']['input']>;
  vUnits_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  vUnits_lt?: InputMaybe<Scalars['BigInt']['input']>;
  vUnits_lte?: InputMaybe<Scalars['BigInt']['input']>;
  vUnits_not?: InputMaybe<Scalars['BigInt']['input']>;
  vUnits_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export enum Cluster_OrderBy {
  Active = 'active',
  Balance = 'balance',
  EffectiveBalance = 'effectiveBalance',
  FeeAsset = 'feeAsset',
  Id = 'id',
  Index = 'index',
  LastUpdateBlockNumber = 'lastUpdateBlockNumber',
  LastUpdateBlockTimestamp = 'lastUpdateBlockTimestamp',
  LastUpdateTransactionHash = 'lastUpdateTransactionHash',
  NetworkFeeIndex = 'networkFeeIndex',
  OperatorIds = 'operatorIds',
  Owner = 'owner',
  OwnerFeeRecipient = 'owner__feeRecipient',
  OwnerId = 'owner__id',
  OwnerNonce = 'owner__nonce',
  OwnerStakedAmount = 'owner__stakedAmount',
  OwnerUnstakePendingAmount = 'owner__unstakePendingAmount',
  OwnerValidatorCount = 'owner__validatorCount',
  VUnits = 'vUnits',
  ValidatorCount = 'validatorCount',
  Validators = 'validators'
}

export enum DaoUpdateTypes {
  ClusterBalanceUpdated = 'CLUSTER_BALANCE_UPDATED',
  DeclareOperatorFeePeriod = 'DECLARE_OPERATOR_FEE_PERIOD',
  ExecuteOperatorFeePeriod = 'EXECUTE_OPERATOR_FEE_PERIOD',
  FeesSynced = 'FEES_SYNCED',
  Initialization = 'INITIALIZATION',
  LiquidationThreshold = 'LIQUIDATION_THRESHOLD',
  LiquidationThresholdSsv = 'LIQUIDATION_THRESHOLD_SSV',
  MinLiquidationCollateral = 'MIN_LIQUIDATION_COLLATERAL',
  MinLiquidationCollateralSsv = 'MIN_LIQUIDATION_COLLATERAL_SSV',
  NetworkFee = 'NETWORK_FEE',
  NetworkFeeSsv = 'NETWORK_FEE_SSV',
  OperatorAdded = 'OPERATOR_ADDED',
  OperatorFeeIncreaseLimit = 'OPERATOR_FEE_INCREASE_LIMIT',
  OperatorMaxFee = 'OPERATOR_MAX_FEE',
  OperatorMaxFeeSsv = 'OPERATOR_MAX_FEE_SSV',
  OperatorRemoved = 'OPERATOR_REMOVED',
  QuorumUpdated = 'QUORUM_UPDATED',
  ValidatorAdded = 'VALIDATOR_ADDED',
  ValidatorRemoved = 'VALIDATOR_REMOVED',
  WeightedRootProposed = 'WEIGHTED_ROOT_PROPOSED'
}

export type DaoValues = {
  accEthPerShare: Scalars['BigInt']['output'];
  declareOperatorFeePeriod: Scalars['BigInt']['output'];
  executeOperatorFeePeriod: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  lastUpdateBlockNumber: Scalars['BigInt']['output'];
  lastUpdateBlockTimestamp: Scalars['BigInt']['output'];
  lastUpdateTransactionHash: Scalars['Bytes']['output'];
  latestMerkleRoot: Scalars['Bytes']['output'];
  liquidationThreshold: Scalars['BigInt']['output'];
  liquidationThresholdSSV: Scalars['BigInt']['output'];
  minimumLiquidationCollateral: Scalars['BigInt']['output'];
  minimumLiquidationCollateralSSV: Scalars['BigInt']['output'];
  networkFee: Scalars['BigInt']['output'];
  networkFeeIndex: Scalars['BigInt']['output'];
  networkFeeIndexBlockNumber: Scalars['BigInt']['output'];
  networkFeeIndexBlockNumberSSV: Scalars['BigInt']['output'];
  networkFeeIndexSSV: Scalars['BigInt']['output'];
  networkFeeSSV: Scalars['BigInt']['output'];
  newFeesWei: Scalars['BigInt']['output'];
  operatorFeeIncreaseLimit: Scalars['BigInt']['output'];
  operatorMaximumFee: Scalars['BigInt']['output'];
  operatorMaximumFeeSSV: Scalars['BigInt']['output'];
  operatorsAdded: Scalars['BigInt']['output'];
  operatorsRemoved: Scalars['BigInt']['output'];
  quorum: Scalars['Int']['output'];
  totalAccounts: Scalars['BigInt']['output'];
  totalEffectiveBalance: Scalars['BigInt']['output'];
  totalOperators: Scalars['BigInt']['output'];
  totalValidators: Scalars['BigInt']['output'];
  updateType: DaoUpdateTypes;
  validatorsAdded: Scalars['BigInt']['output'];
  validatorsPerOperatorLimit: Scalars['BigInt']['output'];
  validatorsRemoved: Scalars['BigInt']['output'];
};

export type DaoValues_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accEthPerShare?: InputMaybe<Scalars['BigInt']['input']>;
  accEthPerShare_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accEthPerShare_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accEthPerShare_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accEthPerShare_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accEthPerShare_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accEthPerShare_not?: InputMaybe<Scalars['BigInt']['input']>;
  accEthPerShare_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  latestMerkleRoot?: InputMaybe<Scalars['Bytes']['input']>;
  latestMerkleRoot_contains?: InputMaybe<Scalars['Bytes']['input']>;
  latestMerkleRoot_gt?: InputMaybe<Scalars['Bytes']['input']>;
  latestMerkleRoot_gte?: InputMaybe<Scalars['Bytes']['input']>;
  latestMerkleRoot_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  latestMerkleRoot_lt?: InputMaybe<Scalars['Bytes']['input']>;
  latestMerkleRoot_lte?: InputMaybe<Scalars['Bytes']['input']>;
  latestMerkleRoot_not?: InputMaybe<Scalars['Bytes']['input']>;
  latestMerkleRoot_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  latestMerkleRoot_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  liquidationThreshold?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationThresholdSSV?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationThresholdSSV_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationThresholdSSV_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationThresholdSSV_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationThresholdSSV_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationThresholdSSV_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationThresholdSSV_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationThresholdSSV_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationThreshold_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationThreshold_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationThreshold_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationThreshold_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationThreshold_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationThreshold_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minimumLiquidationCollateral?: InputMaybe<Scalars['BigInt']['input']>;
  minimumLiquidationCollateralSSV?: InputMaybe<Scalars['BigInt']['input']>;
  minimumLiquidationCollateralSSV_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumLiquidationCollateralSSV_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumLiquidationCollateralSSV_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minimumLiquidationCollateralSSV_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minimumLiquidationCollateralSSV_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minimumLiquidationCollateralSSV_not?: InputMaybe<Scalars['BigInt']['input']>;
  minimumLiquidationCollateralSSV_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  networkFeeIndexBlockNumberSSV?: InputMaybe<Scalars['BigInt']['input']>;
  networkFeeIndexBlockNumberSSV_gt?: InputMaybe<Scalars['BigInt']['input']>;
  networkFeeIndexBlockNumberSSV_gte?: InputMaybe<Scalars['BigInt']['input']>;
  networkFeeIndexBlockNumberSSV_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  networkFeeIndexBlockNumberSSV_lt?: InputMaybe<Scalars['BigInt']['input']>;
  networkFeeIndexBlockNumberSSV_lte?: InputMaybe<Scalars['BigInt']['input']>;
  networkFeeIndexBlockNumberSSV_not?: InputMaybe<Scalars['BigInt']['input']>;
  networkFeeIndexBlockNumberSSV_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  networkFeeIndexBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  networkFeeIndexBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  networkFeeIndexBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  networkFeeIndexBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  networkFeeIndexBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  networkFeeIndexBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  networkFeeIndexBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  networkFeeIndexSSV?: InputMaybe<Scalars['BigInt']['input']>;
  networkFeeIndexSSV_gt?: InputMaybe<Scalars['BigInt']['input']>;
  networkFeeIndexSSV_gte?: InputMaybe<Scalars['BigInt']['input']>;
  networkFeeIndexSSV_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  networkFeeIndexSSV_lt?: InputMaybe<Scalars['BigInt']['input']>;
  networkFeeIndexSSV_lte?: InputMaybe<Scalars['BigInt']['input']>;
  networkFeeIndexSSV_not?: InputMaybe<Scalars['BigInt']['input']>;
  networkFeeIndexSSV_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  networkFeeIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  networkFeeIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  networkFeeIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  networkFeeIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  networkFeeIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  networkFeeIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  networkFeeIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  networkFeeSSV?: InputMaybe<Scalars['BigInt']['input']>;
  networkFeeSSV_gt?: InputMaybe<Scalars['BigInt']['input']>;
  networkFeeSSV_gte?: InputMaybe<Scalars['BigInt']['input']>;
  networkFeeSSV_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  networkFeeSSV_lt?: InputMaybe<Scalars['BigInt']['input']>;
  networkFeeSSV_lte?: InputMaybe<Scalars['BigInt']['input']>;
  networkFeeSSV_not?: InputMaybe<Scalars['BigInt']['input']>;
  networkFeeSSV_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  networkFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  networkFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  networkFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  networkFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  networkFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  networkFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  networkFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newFeesWei?: InputMaybe<Scalars['BigInt']['input']>;
  newFeesWei_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newFeesWei_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newFeesWei_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newFeesWei_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newFeesWei_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newFeesWei_not?: InputMaybe<Scalars['BigInt']['input']>;
  newFeesWei_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  operatorFeeIncreaseLimit?: InputMaybe<Scalars['BigInt']['input']>;
  operatorFeeIncreaseLimit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  operatorFeeIncreaseLimit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  operatorFeeIncreaseLimit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  operatorFeeIncreaseLimit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  operatorFeeIncreaseLimit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  operatorFeeIncreaseLimit_not?: InputMaybe<Scalars['BigInt']['input']>;
  operatorFeeIncreaseLimit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  operatorMaximumFee?: InputMaybe<Scalars['BigInt']['input']>;
  operatorMaximumFeeSSV?: InputMaybe<Scalars['BigInt']['input']>;
  operatorMaximumFeeSSV_gt?: InputMaybe<Scalars['BigInt']['input']>;
  operatorMaximumFeeSSV_gte?: InputMaybe<Scalars['BigInt']['input']>;
  operatorMaximumFeeSSV_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  operatorMaximumFeeSSV_lt?: InputMaybe<Scalars['BigInt']['input']>;
  operatorMaximumFeeSSV_lte?: InputMaybe<Scalars['BigInt']['input']>;
  operatorMaximumFeeSSV_not?: InputMaybe<Scalars['BigInt']['input']>;
  operatorMaximumFeeSSV_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  quorum?: InputMaybe<Scalars['Int']['input']>;
  quorum_gt?: InputMaybe<Scalars['Int']['input']>;
  quorum_gte?: InputMaybe<Scalars['Int']['input']>;
  quorum_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  quorum_lt?: InputMaybe<Scalars['Int']['input']>;
  quorum_lte?: InputMaybe<Scalars['Int']['input']>;
  quorum_not?: InputMaybe<Scalars['Int']['input']>;
  quorum_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalAccounts?: InputMaybe<Scalars['BigInt']['input']>;
  totalAccounts_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAccounts_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAccounts_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAccounts_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAccounts_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAccounts_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAccounts_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalEffectiveBalance?: InputMaybe<Scalars['BigInt']['input']>;
  totalEffectiveBalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalEffectiveBalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalEffectiveBalance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalEffectiveBalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalEffectiveBalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalEffectiveBalance_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalEffectiveBalance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export enum DaoValues_OrderBy {
  AccEthPerShare = 'accEthPerShare',
  DeclareOperatorFeePeriod = 'declareOperatorFeePeriod',
  ExecuteOperatorFeePeriod = 'executeOperatorFeePeriod',
  Id = 'id',
  LastUpdateBlockNumber = 'lastUpdateBlockNumber',
  LastUpdateBlockTimestamp = 'lastUpdateBlockTimestamp',
  LastUpdateTransactionHash = 'lastUpdateTransactionHash',
  LatestMerkleRoot = 'latestMerkleRoot',
  LiquidationThreshold = 'liquidationThreshold',
  LiquidationThresholdSsv = 'liquidationThresholdSSV',
  MinimumLiquidationCollateral = 'minimumLiquidationCollateral',
  MinimumLiquidationCollateralSsv = 'minimumLiquidationCollateralSSV',
  NetworkFee = 'networkFee',
  NetworkFeeIndex = 'networkFeeIndex',
  NetworkFeeIndexBlockNumber = 'networkFeeIndexBlockNumber',
  NetworkFeeIndexBlockNumberSsv = 'networkFeeIndexBlockNumberSSV',
  NetworkFeeIndexSsv = 'networkFeeIndexSSV',
  NetworkFeeSsv = 'networkFeeSSV',
  NewFeesWei = 'newFeesWei',
  OperatorFeeIncreaseLimit = 'operatorFeeIncreaseLimit',
  OperatorMaximumFee = 'operatorMaximumFee',
  OperatorMaximumFeeSsv = 'operatorMaximumFeeSSV',
  OperatorsAdded = 'operatorsAdded',
  OperatorsRemoved = 'operatorsRemoved',
  Quorum = 'quorum',
  TotalAccounts = 'totalAccounts',
  TotalEffectiveBalance = 'totalEffectiveBalance',
  TotalOperators = 'totalOperators',
  TotalValidators = 'totalValidators',
  UpdateType = 'updateType',
  ValidatorsAdded = 'validatorsAdded',
  ValidatorsPerOperatorLimit = 'validatorsPerOperatorLimit',
  ValidatorsRemoved = 'validatorsRemoved'
}

export type DeclareOperatorFeePeriodUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  transactionHash: Scalars['Bytes']['output'];
  value: Scalars['BigInt']['output'];
};

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

export enum DeclareOperatorFeePeriodUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash',
  Value = 'value'
}

export type DelegationUpdated = {
  amounts: Array<Scalars['BigInt']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  oracleIds: Array<Scalars['BigInt']['output']>;
  transactionHash: Scalars['Bytes']['output'];
  user: Scalars['Bytes']['output'];
};

export type DelegationUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amounts?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amounts_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amounts_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amounts_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<DelegationUpdated_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<DelegationUpdated_Filter>>>;
  oracleIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oracleIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oracleIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oracleIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oracleIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oracleIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  user?: InputMaybe<Scalars['Bytes']['input']>;
  user_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_gt?: InputMaybe<Scalars['Bytes']['input']>;
  user_gte?: InputMaybe<Scalars['Bytes']['input']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user_lt?: InputMaybe<Scalars['Bytes']['input']>;
  user_lte?: InputMaybe<Scalars['Bytes']['input']>;
  user_not?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum DelegationUpdated_OrderBy {
  Amounts = 'amounts',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  OracleIds = 'oracleIds',
  TransactionHash = 'transactionHash',
  User = 'user'
}

export type Erc20Rescued = {
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  to: Scalars['Bytes']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Erc20Rescued_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Erc20Rescued_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<Erc20Rescued_Filter>>>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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

export enum Erc20Rescued_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  To = 'to',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

export type ExecuteOperatorFeePeriodUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  transactionHash: Scalars['Bytes']['output'];
  value: Scalars['BigInt']['output'];
};

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

export enum ExecuteOperatorFeePeriodUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash',
  Value = 'value'
}

export type FeeRecipientAddressUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  owner: Scalars['Bytes']['output'];
  recipientAddress: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

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

export enum FeeRecipientAddressUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Owner = 'owner',
  RecipientAddress = 'recipientAddress',
  TransactionHash = 'transactionHash'
}

export type FeesSynced = {
  accEthPerShare: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  newFeesWei: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type FeesSynced_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accEthPerShare?: InputMaybe<Scalars['BigInt']['input']>;
  accEthPerShare_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accEthPerShare_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accEthPerShare_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accEthPerShare_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accEthPerShare_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accEthPerShare_not?: InputMaybe<Scalars['BigInt']['input']>;
  accEthPerShare_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<FeesSynced_Filter>>>;
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
  newFeesWei?: InputMaybe<Scalars['BigInt']['input']>;
  newFeesWei_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newFeesWei_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newFeesWei_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newFeesWei_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newFeesWei_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newFeesWei_not?: InputMaybe<Scalars['BigInt']['input']>;
  newFeesWei_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<FeesSynced_Filter>>>;
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

export enum FeesSynced_OrderBy {
  AccEthPerShare = 'accEthPerShare',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewFeesWei = 'newFeesWei',
  TransactionHash = 'transactionHash'
}

export type LiquidationThresholdPeriodSsvUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  transactionHash: Scalars['Bytes']['output'];
  value: Scalars['BigInt']['output'];
};

export type LiquidationThresholdPeriodSsvUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LiquidationThresholdPeriodSsvUpdated_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<LiquidationThresholdPeriodSsvUpdated_Filter>>>;
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

export enum LiquidationThresholdPeriodSsvUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash',
  Value = 'value'
}

export type LiquidationThresholdPeriodUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  transactionHash: Scalars['Bytes']['output'];
  value: Scalars['BigInt']['output'];
};

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

export enum LiquidationThresholdPeriodUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash',
  Value = 'value'
}

export type MinimumLiquidationCollateralSsvUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  transactionHash: Scalars['Bytes']['output'];
  value: Scalars['BigInt']['output'];
};

export type MinimumLiquidationCollateralSsvUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MinimumLiquidationCollateralSsvUpdated_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<MinimumLiquidationCollateralSsvUpdated_Filter>>>;
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

export enum MinimumLiquidationCollateralSsvUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash',
  Value = 'value'
}

export type MinimumLiquidationCollateralUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  transactionHash: Scalars['Bytes']['output'];
  value: Scalars['BigInt']['output'];
};

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

export enum MinimumLiquidationCollateralUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash',
  Value = 'value'
}

export type NetworkEarningsWithdrawn = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  recipient: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  value: Scalars['BigInt']['output'];
};

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

export enum NetworkEarningsWithdrawn_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Recipient = 'recipient',
  TransactionHash = 'transactionHash',
  Value = 'value'
}

export type NetworkFeeUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  newFee: Scalars['BigInt']['output'];
  oldFee: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type NetworkFeeUpdatedSsv = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  newFee: Scalars['BigInt']['output'];
  oldFee: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type NetworkFeeUpdatedSsv_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NetworkFeeUpdatedSsv_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<NetworkFeeUpdatedSsv_Filter>>>;
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

export enum NetworkFeeUpdatedSsv_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewFee = 'newFee',
  OldFee = 'oldFee',
  TransactionHash = 'transactionHash'
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

export enum NetworkFeeUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewFee = 'newFee',
  OldFee = 'oldFee',
  TransactionHash = 'transactionHash'
}

export type Operator = {
  declaredFee: Scalars['BigInt']['output'];
  declaredSSVFee: Scalars['BigInt']['output'];
  fee: Scalars['BigInt']['output'];
  feeIndex: Scalars['BigInt']['output'];
  feeIndexBlockNumber: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  isPrivate: Scalars['Boolean']['output'];
  lastUpdateBlockNumber: Scalars['BigInt']['output'];
  lastUpdateBlockTimestamp: Scalars['BigInt']['output'];
  lastUpdateTransactionHash: Scalars['Bytes']['output'];
  operatorId: Scalars['BigInt']['output'];
  owner: Account;
  publicKey: Scalars['Bytes']['output'];
  removed: Scalars['Boolean']['output'];
  ssvFee: Scalars['BigInt']['output'];
  ssvFeeIndex: Scalars['BigInt']['output'];
  ssvFeeIndexBlockNumber: Scalars['BigInt']['output'];
  totalEffectiveBalance: Scalars['BigInt']['output'];
  totalWithdrawn: Scalars['BigInt']['output'];
  validatorCount: Scalars['BigInt']['output'];
  validators?: Maybe<Array<Validator>>;
  whitelisted: Array<Account>;
  whitelistedContract: Scalars['Bytes']['output'];
};


export type OperatorValidatorsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Validator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Validator_Filter>;
};


export type OperatorWhitelistedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Account_Filter>;
};

export type OperatorAdded = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  fee: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  operatorId: Scalars['BigInt']['output'];
  owner: Scalars['Bytes']['output'];
  publicKey: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

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

export enum OperatorAdded_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Fee = 'fee',
  Id = 'id',
  OperatorId = 'operatorId',
  Owner = 'owner',
  PublicKey = 'publicKey',
  TransactionHash = 'transactionHash'
}

export type OperatorFeeDeclarationCancelled = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  operatorId: Scalars['BigInt']['output'];
  owner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

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

export enum OperatorFeeDeclarationCancelled_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  OperatorId = 'operatorId',
  Owner = 'owner',
  TransactionHash = 'transactionHash'
}

export type OperatorFeeDeclared = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  fee: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  operatorId: Scalars['BigInt']['output'];
  owner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

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

export enum OperatorFeeDeclared_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Fee = 'fee',
  Id = 'id',
  OperatorId = 'operatorId',
  Owner = 'owner',
  TransactionHash = 'transactionHash'
}

export type OperatorFeeExecuted = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  fee: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  operatorId: Scalars['BigInt']['output'];
  owner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

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

export enum OperatorFeeExecuted_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Fee = 'fee',
  Id = 'id',
  OperatorId = 'operatorId',
  Owner = 'owner',
  TransactionHash = 'transactionHash'
}

export type OperatorFeeIncreaseLimitUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  transactionHash: Scalars['Bytes']['output'];
  value: Scalars['BigInt']['output'];
};

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

export enum OperatorFeeIncreaseLimitUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash',
  Value = 'value'
}

export type OperatorMaximumFeeSsvUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  maxFee: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type OperatorMaximumFeeSsvUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OperatorMaximumFeeSsvUpdated_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<OperatorMaximumFeeSsvUpdated_Filter>>>;
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

export enum OperatorMaximumFeeSsvUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  MaxFee = 'maxFee',
  TransactionHash = 'transactionHash'
}

export type OperatorMaximumFeeUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  maxFee: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

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

export enum OperatorMaximumFeeUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  MaxFee = 'maxFee',
  TransactionHash = 'transactionHash'
}

export type OperatorMultipleWhitelistRemoved = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  operatorIds: Array<Scalars['BigInt']['output']>;
  transactionHash: Scalars['Bytes']['output'];
  whitelistAddresses?: Maybe<Array<Scalars['Bytes']['output']>>;
};

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

export enum OperatorMultipleWhitelistRemoved_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  OperatorIds = 'operatorIds',
  TransactionHash = 'transactionHash',
  WhitelistAddresses = 'whitelistAddresses'
}

export type OperatorMultipleWhitelistUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  operatorIds: Array<Scalars['BigInt']['output']>;
  transactionHash: Scalars['Bytes']['output'];
  whitelistAddresses?: Maybe<Array<Scalars['Bytes']['output']>>;
};

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

export enum OperatorMultipleWhitelistUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  OperatorIds = 'operatorIds',
  TransactionHash = 'transactionHash',
  WhitelistAddresses = 'whitelistAddresses'
}

export type OperatorPrivacyStatusUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  operatorIds: Array<Scalars['BigInt']['output']>;
  toPrivate: Scalars['Boolean']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

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

export enum OperatorPrivacyStatusUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  OperatorIds = 'operatorIds',
  ToPrivate = 'toPrivate',
  TransactionHash = 'transactionHash'
}

export type OperatorRemoved = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  operatorId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

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

export enum OperatorRemoved_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  OperatorId = 'operatorId',
  TransactionHash = 'transactionHash'
}

export type OperatorWhitelistUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  operatorId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  whitelisted: Scalars['Bytes']['output'];
};

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

export enum OperatorWhitelistUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  OperatorId = 'operatorId',
  TransactionHash = 'transactionHash',
  Whitelisted = 'whitelisted'
}

export type OperatorWhitelistingContractUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  operatorIds: Array<Scalars['BigInt']['output']>;
  transactionHash: Scalars['Bytes']['output'];
  whitelistingContract: Scalars['Bytes']['output'];
};

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

export enum OperatorWhitelistingContractUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  OperatorIds = 'operatorIds',
  TransactionHash = 'transactionHash',
  WhitelistingContract = 'whitelistingContract'
}

export type OperatorWithdrawn = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  operatorId: Scalars['BigInt']['output'];
  owner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  value: Scalars['BigInt']['output'];
};

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

export enum OperatorWithdrawn_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  OperatorId = 'operatorId',
  Owner = 'owner',
  TransactionHash = 'transactionHash',
  Value = 'value'
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
  declaredSSVFee?: InputMaybe<Scalars['BigInt']['input']>;
  declaredSSVFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  declaredSSVFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  declaredSSVFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  declaredSSVFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  declaredSSVFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  declaredSSVFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  declaredSSVFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  ssvFee?: InputMaybe<Scalars['BigInt']['input']>;
  ssvFeeIndex?: InputMaybe<Scalars['BigInt']['input']>;
  ssvFeeIndexBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  ssvFeeIndexBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  ssvFeeIndexBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  ssvFeeIndexBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ssvFeeIndexBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  ssvFeeIndexBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  ssvFeeIndexBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  ssvFeeIndexBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ssvFeeIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  ssvFeeIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  ssvFeeIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ssvFeeIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  ssvFeeIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  ssvFeeIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  ssvFeeIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ssvFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  ssvFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  ssvFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ssvFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  ssvFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  ssvFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  ssvFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalEffectiveBalance?: InputMaybe<Scalars['BigInt']['input']>;
  totalEffectiveBalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalEffectiveBalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalEffectiveBalance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalEffectiveBalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalEffectiveBalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalEffectiveBalance_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalEffectiveBalance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export enum Operator_OrderBy {
  DeclaredFee = 'declaredFee',
  DeclaredSsvFee = 'declaredSSVFee',
  Fee = 'fee',
  FeeIndex = 'feeIndex',
  FeeIndexBlockNumber = 'feeIndexBlockNumber',
  Id = 'id',
  IsPrivate = 'isPrivate',
  LastUpdateBlockNumber = 'lastUpdateBlockNumber',
  LastUpdateBlockTimestamp = 'lastUpdateBlockTimestamp',
  LastUpdateTransactionHash = 'lastUpdateTransactionHash',
  OperatorId = 'operatorId',
  Owner = 'owner',
  OwnerFeeRecipient = 'owner__feeRecipient',
  OwnerId = 'owner__id',
  OwnerNonce = 'owner__nonce',
  OwnerStakedAmount = 'owner__stakedAmount',
  OwnerUnstakePendingAmount = 'owner__unstakePendingAmount',
  OwnerValidatorCount = 'owner__validatorCount',
  PublicKey = 'publicKey',
  Removed = 'removed',
  SsvFee = 'ssvFee',
  SsvFeeIndex = 'ssvFeeIndex',
  SsvFeeIndexBlockNumber = 'ssvFeeIndexBlockNumber',
  TotalEffectiveBalance = 'totalEffectiveBalance',
  TotalWithdrawn = 'totalWithdrawn',
  ValidatorCount = 'validatorCount',
  Validators = 'validators',
  Whitelisted = 'whitelisted',
  WhitelistedContract = 'whitelistedContract'
}

export type Oracle = {
  delegators?: Maybe<Array<OracleDelegation>>;
  id: Scalars['String']['output'];
  lastUpdateBlockNumber: Scalars['BigInt']['output'];
  lastUpdateBlockTimestamp: Scalars['BigInt']['output'];
  lastUpdateTransactionHash: Scalars['Bytes']['output'];
  oracleAddress: Scalars['Bytes']['output'];
  oracleId: Scalars['BigInt']['output'];
  totalDelegatedAmount: Scalars['BigInt']['output'];
};


export type OracleDelegatorsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OracleDelegation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OracleDelegation_Filter>;
};

export type OracleDelegation = {
  amount: Scalars['BigInt']['output'];
  delegatedOracle: Oracle;
  delegator: Account;
  id: Scalars['String']['output'];
};

export type OracleDelegation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<OracleDelegation_Filter>>>;
  delegatedOracle?: InputMaybe<Scalars['String']['input']>;
  delegatedOracle_?: InputMaybe<Oracle_Filter>;
  delegatedOracle_contains?: InputMaybe<Scalars['String']['input']>;
  delegatedOracle_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegatedOracle_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegatedOracle_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegatedOracle_gt?: InputMaybe<Scalars['String']['input']>;
  delegatedOracle_gte?: InputMaybe<Scalars['String']['input']>;
  delegatedOracle_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegatedOracle_lt?: InputMaybe<Scalars['String']['input']>;
  delegatedOracle_lte?: InputMaybe<Scalars['String']['input']>;
  delegatedOracle_not?: InputMaybe<Scalars['String']['input']>;
  delegatedOracle_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegatedOracle_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegatedOracle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegatedOracle_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegatedOracle_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegatedOracle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegatedOracle_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegatedOracle_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegatedOracle_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator?: InputMaybe<Scalars['String']['input']>;
  delegator_?: InputMaybe<Account_Filter>;
  delegator_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_gt?: InputMaybe<Scalars['String']['input']>;
  delegator_gte?: InputMaybe<Scalars['String']['input']>;
  delegator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_lt?: InputMaybe<Scalars['String']['input']>;
  delegator_lte?: InputMaybe<Scalars['String']['input']>;
  delegator_not?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
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
  or?: InputMaybe<Array<InputMaybe<OracleDelegation_Filter>>>;
};

export enum OracleDelegation_OrderBy {
  Amount = 'amount',
  DelegatedOracle = 'delegatedOracle',
  DelegatedOracleId = 'delegatedOracle__id',
  DelegatedOracleLastUpdateBlockNumber = 'delegatedOracle__lastUpdateBlockNumber',
  DelegatedOracleLastUpdateBlockTimestamp = 'delegatedOracle__lastUpdateBlockTimestamp',
  DelegatedOracleLastUpdateTransactionHash = 'delegatedOracle__lastUpdateTransactionHash',
  DelegatedOracleOracleAddress = 'delegatedOracle__oracleAddress',
  DelegatedOracleOracleId = 'delegatedOracle__oracleId',
  DelegatedOracleTotalDelegatedAmount = 'delegatedOracle__totalDelegatedAmount',
  Delegator = 'delegator',
  DelegatorFeeRecipient = 'delegator__feeRecipient',
  DelegatorId = 'delegator__id',
  DelegatorNonce = 'delegator__nonce',
  DelegatorStakedAmount = 'delegator__stakedAmount',
  DelegatorUnstakePendingAmount = 'delegator__unstakePendingAmount',
  DelegatorValidatorCount = 'delegator__validatorCount',
  Id = 'id'
}

export type OracleReplaced = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  newOracle: Scalars['Bytes']['output'];
  oldOracle: Scalars['Bytes']['output'];
  oracleId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type OracleReplaced_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OracleReplaced_Filter>>>;
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
  newOracle?: InputMaybe<Scalars['Bytes']['input']>;
  newOracle_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newOracle_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newOracle_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newOracle_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newOracle_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newOracle_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newOracle_not?: InputMaybe<Scalars['Bytes']['input']>;
  newOracle_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newOracle_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  oldOracle?: InputMaybe<Scalars['Bytes']['input']>;
  oldOracle_contains?: InputMaybe<Scalars['Bytes']['input']>;
  oldOracle_gt?: InputMaybe<Scalars['Bytes']['input']>;
  oldOracle_gte?: InputMaybe<Scalars['Bytes']['input']>;
  oldOracle_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  oldOracle_lt?: InputMaybe<Scalars['Bytes']['input']>;
  oldOracle_lte?: InputMaybe<Scalars['Bytes']['input']>;
  oldOracle_not?: InputMaybe<Scalars['Bytes']['input']>;
  oldOracle_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  oldOracle_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OracleReplaced_Filter>>>;
  oracleId?: InputMaybe<Scalars['BigInt']['input']>;
  oracleId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oracleId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oracleId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oracleId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oracleId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oracleId_not?: InputMaybe<Scalars['BigInt']['input']>;
  oracleId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export enum OracleReplaced_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewOracle = 'newOracle',
  OldOracle = 'oldOracle',
  OracleId = 'oracleId',
  TransactionHash = 'transactionHash'
}

export type Oracle_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Oracle_Filter>>>;
  delegators_?: InputMaybe<OracleDelegation_Filter>;
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
  or?: InputMaybe<Array<InputMaybe<Oracle_Filter>>>;
  oracleAddress?: InputMaybe<Scalars['Bytes']['input']>;
  oracleAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  oracleAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  oracleAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  oracleAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  oracleAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  oracleAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  oracleAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  oracleAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  oracleAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  oracleId?: InputMaybe<Scalars['BigInt']['input']>;
  oracleId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oracleId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oracleId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oracleId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oracleId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oracleId_not?: InputMaybe<Scalars['BigInt']['input']>;
  oracleId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDelegatedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDelegatedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Oracle_OrderBy {
  Delegators = 'delegators',
  Id = 'id',
  LastUpdateBlockNumber = 'lastUpdateBlockNumber',
  LastUpdateBlockTimestamp = 'lastUpdateBlockTimestamp',
  LastUpdateTransactionHash = 'lastUpdateTransactionHash',
  OracleAddress = 'oracleAddress',
  OracleId = 'oracleId',
  TotalDelegatedAmount = 'totalDelegatedAmount'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  cluster?: Maybe<Cluster>;
  clusterBalanceUpdated?: Maybe<ClusterBalanceUpdated>;
  clusterBalanceUpdateds: Array<ClusterBalanceUpdated>;
  clusterDeposited?: Maybe<ClusterDeposited>;
  clusterDepositeds: Array<ClusterDeposited>;
  clusterLiquidated?: Maybe<ClusterLiquidated>;
  clusterLiquidateds: Array<ClusterLiquidated>;
  clusterMigratedToETH?: Maybe<ClusterMigratedToEth>;
  clusterMigratedToETHs: Array<ClusterMigratedToEth>;
  clusterReactivated?: Maybe<ClusterReactivated>;
  clusterReactivateds: Array<ClusterReactivated>;
  clusterWithdrawn?: Maybe<ClusterWithdrawn>;
  clusterWithdrawns: Array<ClusterWithdrawn>;
  clusters: Array<Cluster>;
  daovalues?: Maybe<DaoValues>;
  daovalues_collection: Array<DaoValues>;
  declareOperatorFeePeriodUpdated?: Maybe<DeclareOperatorFeePeriodUpdated>;
  declareOperatorFeePeriodUpdateds: Array<DeclareOperatorFeePeriodUpdated>;
  delegationUpdated?: Maybe<DelegationUpdated>;
  delegationUpdateds: Array<DelegationUpdated>;
  erc20Rescued?: Maybe<Erc20Rescued>;
  erc20Rescueds: Array<Erc20Rescued>;
  executeOperatorFeePeriodUpdated?: Maybe<ExecuteOperatorFeePeriodUpdated>;
  executeOperatorFeePeriodUpdateds: Array<ExecuteOperatorFeePeriodUpdated>;
  feeRecipientAddressUpdated?: Maybe<FeeRecipientAddressUpdated>;
  feeRecipientAddressUpdateds: Array<FeeRecipientAddressUpdated>;
  feesSynced?: Maybe<FeesSynced>;
  feesSynceds: Array<FeesSynced>;
  liquidationThresholdPeriodSSVUpdated?: Maybe<LiquidationThresholdPeriodSsvUpdated>;
  liquidationThresholdPeriodSSVUpdateds: Array<LiquidationThresholdPeriodSsvUpdated>;
  liquidationThresholdPeriodUpdated?: Maybe<LiquidationThresholdPeriodUpdated>;
  liquidationThresholdPeriodUpdateds: Array<LiquidationThresholdPeriodUpdated>;
  minimumLiquidationCollateralSSVUpdated?: Maybe<MinimumLiquidationCollateralSsvUpdated>;
  minimumLiquidationCollateralSSVUpdateds: Array<MinimumLiquidationCollateralSsvUpdated>;
  minimumLiquidationCollateralUpdated?: Maybe<MinimumLiquidationCollateralUpdated>;
  minimumLiquidationCollateralUpdateds: Array<MinimumLiquidationCollateralUpdated>;
  networkEarningsWithdrawn?: Maybe<NetworkEarningsWithdrawn>;
  networkEarningsWithdrawns: Array<NetworkEarningsWithdrawn>;
  networkFeeUpdated?: Maybe<NetworkFeeUpdated>;
  networkFeeUpdatedSSV?: Maybe<NetworkFeeUpdatedSsv>;
  networkFeeUpdatedSSVs: Array<NetworkFeeUpdatedSsv>;
  networkFeeUpdateds: Array<NetworkFeeUpdated>;
  operator?: Maybe<Operator>;
  operatorAdded?: Maybe<OperatorAdded>;
  operatorAddeds: Array<OperatorAdded>;
  operatorFeeDeclarationCancelled?: Maybe<OperatorFeeDeclarationCancelled>;
  operatorFeeDeclarationCancelleds: Array<OperatorFeeDeclarationCancelled>;
  operatorFeeDeclared?: Maybe<OperatorFeeDeclared>;
  operatorFeeDeclareds: Array<OperatorFeeDeclared>;
  operatorFeeExecuted?: Maybe<OperatorFeeExecuted>;
  operatorFeeExecuteds: Array<OperatorFeeExecuted>;
  operatorFeeIncreaseLimitUpdated?: Maybe<OperatorFeeIncreaseLimitUpdated>;
  operatorFeeIncreaseLimitUpdateds: Array<OperatorFeeIncreaseLimitUpdated>;
  operatorMaximumFeeSSVUpdated?: Maybe<OperatorMaximumFeeSsvUpdated>;
  operatorMaximumFeeSSVUpdateds: Array<OperatorMaximumFeeSsvUpdated>;
  operatorMaximumFeeUpdated?: Maybe<OperatorMaximumFeeUpdated>;
  operatorMaximumFeeUpdateds: Array<OperatorMaximumFeeUpdated>;
  operatorMultipleWhitelistRemoved?: Maybe<OperatorMultipleWhitelistRemoved>;
  operatorMultipleWhitelistRemoveds: Array<OperatorMultipleWhitelistRemoved>;
  operatorMultipleWhitelistUpdated?: Maybe<OperatorMultipleWhitelistUpdated>;
  operatorMultipleWhitelistUpdateds: Array<OperatorMultipleWhitelistUpdated>;
  operatorPrivacyStatusUpdated?: Maybe<OperatorPrivacyStatusUpdated>;
  operatorPrivacyStatusUpdateds: Array<OperatorPrivacyStatusUpdated>;
  operatorRemoved?: Maybe<OperatorRemoved>;
  operatorRemoveds: Array<OperatorRemoved>;
  operatorWhitelistUpdated?: Maybe<OperatorWhitelistUpdated>;
  operatorWhitelistUpdateds: Array<OperatorWhitelistUpdated>;
  operatorWhitelistingContractUpdated?: Maybe<OperatorWhitelistingContractUpdated>;
  operatorWhitelistingContractUpdateds: Array<OperatorWhitelistingContractUpdated>;
  operatorWithdrawn?: Maybe<OperatorWithdrawn>;
  operatorWithdrawns: Array<OperatorWithdrawn>;
  operators: Array<Operator>;
  oracle?: Maybe<Oracle>;
  oracleDelegation?: Maybe<OracleDelegation>;
  oracleDelegations: Array<OracleDelegation>;
  oracleReplaced?: Maybe<OracleReplaced>;
  oracleReplaceds: Array<OracleReplaced>;
  oracles: Array<Oracle>;
  quorumUpdated?: Maybe<QuorumUpdated>;
  quorumUpdateds: Array<QuorumUpdated>;
  rewardsClaimed?: Maybe<RewardsClaimed>;
  rewardsClaimeds: Array<RewardsClaimed>;
  rewardsSettled?: Maybe<RewardsSettled>;
  rewardsSettleds: Array<RewardsSettled>;
  rootCommitted?: Maybe<RootCommitted>;
  rootCommitteds: Array<RootCommitted>;
  rootProposed?: Maybe<RootProposed>;
  rootProposeds: Array<RootProposed>;
  staked?: Maybe<Staked>;
  stakeds: Array<Staked>;
  unstakeRequested?: Maybe<UnstakeRequested>;
  unstakeRequesteds: Array<UnstakeRequested>;
  unstakedWithdrawn?: Maybe<UnstakedWithdrawn>;
  unstakedWithdrawns: Array<UnstakedWithdrawn>;
  upgraded?: Maybe<Upgraded>;
  upgradeds: Array<Upgraded>;
  validator?: Maybe<Validator>;
  validatorAdded?: Maybe<ValidatorAdded>;
  validatorAddeds: Array<ValidatorAdded>;
  validatorRemoved?: Maybe<ValidatorRemoved>;
  validatorRemoveds: Array<ValidatorRemoved>;
  validators: Array<Validator>;
  weightedRootProposed?: Maybe<WeightedRootProposed>;
  weightedRootProposeds: Array<WeightedRootProposed>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type QueryClusterArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryClusterBalanceUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryClusterBalanceUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ClusterBalanceUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ClusterBalanceUpdated_Filter>;
};


export type QueryClusterDepositedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryClusterDepositedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ClusterDeposited_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ClusterDeposited_Filter>;
};


export type QueryClusterLiquidatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryClusterLiquidatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ClusterLiquidated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ClusterLiquidated_Filter>;
};


export type QueryClusterMigratedToEthArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryClusterMigratedToEtHsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ClusterMigratedToEth_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ClusterMigratedToEth_Filter>;
};


export type QueryClusterReactivatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryClusterReactivatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ClusterReactivated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ClusterReactivated_Filter>;
};


export type QueryClusterWithdrawnArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryClusterWithdrawnsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ClusterWithdrawn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ClusterWithdrawn_Filter>;
};


export type QueryClustersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Cluster_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Cluster_Filter>;
};


export type QueryDaovaluesArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDaovalues_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DaoValues_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DaoValues_Filter>;
};


export type QueryDeclareOperatorFeePeriodUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDeclareOperatorFeePeriodUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DeclareOperatorFeePeriodUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DeclareOperatorFeePeriodUpdated_Filter>;
};


export type QueryDelegationUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDelegationUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DelegationUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DelegationUpdated_Filter>;
};


export type QueryErc20RescuedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc20RescuedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc20Rescued_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc20Rescued_Filter>;
};


export type QueryExecuteOperatorFeePeriodUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryExecuteOperatorFeePeriodUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ExecuteOperatorFeePeriodUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ExecuteOperatorFeePeriodUpdated_Filter>;
};


export type QueryFeeRecipientAddressUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFeeRecipientAddressUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FeeRecipientAddressUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FeeRecipientAddressUpdated_Filter>;
};


export type QueryFeesSyncedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFeesSyncedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FeesSynced_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FeesSynced_Filter>;
};


export type QueryLiquidationThresholdPeriodSsvUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLiquidationThresholdPeriodSsvUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LiquidationThresholdPeriodSsvUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidationThresholdPeriodSsvUpdated_Filter>;
};


export type QueryLiquidationThresholdPeriodUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLiquidationThresholdPeriodUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LiquidationThresholdPeriodUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidationThresholdPeriodUpdated_Filter>;
};


export type QueryMinimumLiquidationCollateralSsvUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMinimumLiquidationCollateralSsvUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MinimumLiquidationCollateralSsvUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MinimumLiquidationCollateralSsvUpdated_Filter>;
};


export type QueryMinimumLiquidationCollateralUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMinimumLiquidationCollateralUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MinimumLiquidationCollateralUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MinimumLiquidationCollateralUpdated_Filter>;
};


export type QueryNetworkEarningsWithdrawnArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNetworkEarningsWithdrawnsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NetworkEarningsWithdrawn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NetworkEarningsWithdrawn_Filter>;
};


export type QueryNetworkFeeUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNetworkFeeUpdatedSsvArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNetworkFeeUpdatedSsVsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NetworkFeeUpdatedSsv_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NetworkFeeUpdatedSsv_Filter>;
};


export type QueryNetworkFeeUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NetworkFeeUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NetworkFeeUpdated_Filter>;
};


export type QueryOperatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOperatorAddedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOperatorAddedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatorAdded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OperatorAdded_Filter>;
};


export type QueryOperatorFeeDeclarationCancelledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOperatorFeeDeclarationCancelledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatorFeeDeclarationCancelled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OperatorFeeDeclarationCancelled_Filter>;
};


export type QueryOperatorFeeDeclaredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOperatorFeeDeclaredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatorFeeDeclared_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OperatorFeeDeclared_Filter>;
};


export type QueryOperatorFeeExecutedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOperatorFeeExecutedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatorFeeExecuted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OperatorFeeExecuted_Filter>;
};


export type QueryOperatorFeeIncreaseLimitUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOperatorFeeIncreaseLimitUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatorFeeIncreaseLimitUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OperatorFeeIncreaseLimitUpdated_Filter>;
};


export type QueryOperatorMaximumFeeSsvUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOperatorMaximumFeeSsvUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatorMaximumFeeSsvUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OperatorMaximumFeeSsvUpdated_Filter>;
};


export type QueryOperatorMaximumFeeUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOperatorMaximumFeeUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatorMaximumFeeUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OperatorMaximumFeeUpdated_Filter>;
};


export type QueryOperatorMultipleWhitelistRemovedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOperatorMultipleWhitelistRemovedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatorMultipleWhitelistRemoved_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OperatorMultipleWhitelistRemoved_Filter>;
};


export type QueryOperatorMultipleWhitelistUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOperatorMultipleWhitelistUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatorMultipleWhitelistUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OperatorMultipleWhitelistUpdated_Filter>;
};


export type QueryOperatorPrivacyStatusUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOperatorPrivacyStatusUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatorPrivacyStatusUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OperatorPrivacyStatusUpdated_Filter>;
};


export type QueryOperatorRemovedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOperatorRemovedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatorRemoved_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OperatorRemoved_Filter>;
};


export type QueryOperatorWhitelistUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOperatorWhitelistUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatorWhitelistUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OperatorWhitelistUpdated_Filter>;
};


export type QueryOperatorWhitelistingContractUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOperatorWhitelistingContractUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatorWhitelistingContractUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OperatorWhitelistingContractUpdated_Filter>;
};


export type QueryOperatorWithdrawnArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOperatorWithdrawnsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatorWithdrawn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OperatorWithdrawn_Filter>;
};


export type QueryOperatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Operator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Operator_Filter>;
};


export type QueryOracleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOracleDelegationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOracleDelegationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OracleDelegation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OracleDelegation_Filter>;
};


export type QueryOracleReplacedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOracleReplacedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OracleReplaced_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OracleReplaced_Filter>;
};


export type QueryOraclesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Oracle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Oracle_Filter>;
};


export type QueryQuorumUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryQuorumUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<QuorumUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<QuorumUpdated_Filter>;
};


export type QueryRewardsClaimedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRewardsClaimedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RewardsClaimed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RewardsClaimed_Filter>;
};


export type QueryRewardsSettledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRewardsSettledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RewardsSettled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RewardsSettled_Filter>;
};


export type QueryRootCommittedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRootCommittedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RootCommitted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RootCommitted_Filter>;
};


export type QueryRootProposedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRootProposedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RootProposed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RootProposed_Filter>;
};


export type QueryStakedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStakedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Staked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Staked_Filter>;
};


export type QueryUnstakeRequestedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUnstakeRequestedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UnstakeRequested_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UnstakeRequested_Filter>;
};


export type QueryUnstakedWithdrawnArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUnstakedWithdrawnsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UnstakedWithdrawn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UnstakedWithdrawn_Filter>;
};


export type QueryUpgradedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUpgradedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Upgraded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Upgraded_Filter>;
};


export type QueryValidatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryValidatorAddedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryValidatorAddedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ValidatorAdded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ValidatorAdded_Filter>;
};


export type QueryValidatorRemovedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryValidatorRemovedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ValidatorRemoved_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ValidatorRemoved_Filter>;
};


export type QueryValidatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Validator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Validator_Filter>;
};


export type QueryWeightedRootProposedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWeightedRootProposedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WeightedRootProposed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WeightedRootProposed_Filter>;
};

export type QuorumUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  newQuorum: Scalars['Int']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type QuorumUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<QuorumUpdated_Filter>>>;
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
  newQuorum?: InputMaybe<Scalars['Int']['input']>;
  newQuorum_gt?: InputMaybe<Scalars['Int']['input']>;
  newQuorum_gte?: InputMaybe<Scalars['Int']['input']>;
  newQuorum_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  newQuorum_lt?: InputMaybe<Scalars['Int']['input']>;
  newQuorum_lte?: InputMaybe<Scalars['Int']['input']>;
  newQuorum_not?: InputMaybe<Scalars['Int']['input']>;
  newQuorum_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  or?: InputMaybe<Array<InputMaybe<QuorumUpdated_Filter>>>;
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

export enum QuorumUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewQuorum = 'newQuorum',
  TransactionHash = 'transactionHash'
}

export type RewardsClaimed = {
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  transactionHash: Scalars['Bytes']['output'];
  user: Scalars['Bytes']['output'];
};

export type RewardsClaimed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<RewardsClaimed_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<RewardsClaimed_Filter>>>;
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
  user?: InputMaybe<Scalars['Bytes']['input']>;
  user_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_gt?: InputMaybe<Scalars['Bytes']['input']>;
  user_gte?: InputMaybe<Scalars['Bytes']['input']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user_lt?: InputMaybe<Scalars['Bytes']['input']>;
  user_lte?: InputMaybe<Scalars['Bytes']['input']>;
  user_not?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum RewardsClaimed_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash',
  User = 'user'
}

export type RewardsSettled = {
  accrued: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  pending: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  user: Scalars['Bytes']['output'];
  userIndex: Scalars['BigInt']['output'];
};

export type RewardsSettled_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accrued?: InputMaybe<Scalars['BigInt']['input']>;
  accrued_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accrued_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accrued_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accrued_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accrued_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accrued_not?: InputMaybe<Scalars['BigInt']['input']>;
  accrued_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<RewardsSettled_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<RewardsSettled_Filter>>>;
  pending?: InputMaybe<Scalars['BigInt']['input']>;
  pending_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pending_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pending_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pending_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pending_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pending_not?: InputMaybe<Scalars['BigInt']['input']>;
  pending_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  user?: InputMaybe<Scalars['Bytes']['input']>;
  userIndex?: InputMaybe<Scalars['BigInt']['input']>;
  userIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  userIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  userIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  userIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  userIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  userIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  userIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  user_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_gt?: InputMaybe<Scalars['Bytes']['input']>;
  user_gte?: InputMaybe<Scalars['Bytes']['input']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user_lt?: InputMaybe<Scalars['Bytes']['input']>;
  user_lte?: InputMaybe<Scalars['Bytes']['input']>;
  user_not?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum RewardsSettled_OrderBy {
  Accrued = 'accrued',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Pending = 'pending',
  TransactionHash = 'transactionHash',
  User = 'user',
  UserIndex = 'userIndex'
}

export type RootCommitted = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  merkleRoot: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RootCommitted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RootCommitted_Filter>>>;
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
  merkleRoot?: InputMaybe<Scalars['Bytes']['input']>;
  merkleRoot_contains?: InputMaybe<Scalars['Bytes']['input']>;
  merkleRoot_gt?: InputMaybe<Scalars['Bytes']['input']>;
  merkleRoot_gte?: InputMaybe<Scalars['Bytes']['input']>;
  merkleRoot_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  merkleRoot_lt?: InputMaybe<Scalars['Bytes']['input']>;
  merkleRoot_lte?: InputMaybe<Scalars['Bytes']['input']>;
  merkleRoot_not?: InputMaybe<Scalars['Bytes']['input']>;
  merkleRoot_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  merkleRoot_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RootCommitted_Filter>>>;
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

export enum RootCommitted_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  MerkleRoot = 'merkleRoot',
  TransactionHash = 'transactionHash'
}

export type RootProposed = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  merkleRoot: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type RootProposed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RootProposed_Filter>>>;
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
  merkleRoot?: InputMaybe<Scalars['Bytes']['input']>;
  merkleRoot_contains?: InputMaybe<Scalars['Bytes']['input']>;
  merkleRoot_gt?: InputMaybe<Scalars['Bytes']['input']>;
  merkleRoot_gte?: InputMaybe<Scalars['Bytes']['input']>;
  merkleRoot_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  merkleRoot_lt?: InputMaybe<Scalars['Bytes']['input']>;
  merkleRoot_lte?: InputMaybe<Scalars['Bytes']['input']>;
  merkleRoot_not?: InputMaybe<Scalars['Bytes']['input']>;
  merkleRoot_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  merkleRoot_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RootProposed_Filter>>>;
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

export enum RootProposed_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  MerkleRoot = 'merkleRoot',
  TransactionHash = 'transactionHash'
}

export type Staked = {
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  transactionHash: Scalars['Bytes']['output'];
  user: Scalars['Bytes']['output'];
};

export type Staked_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Staked_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<Staked_Filter>>>;
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
  user?: InputMaybe<Scalars['Bytes']['input']>;
  user_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_gt?: InputMaybe<Scalars['Bytes']['input']>;
  user_gte?: InputMaybe<Scalars['Bytes']['input']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user_lt?: InputMaybe<Scalars['Bytes']['input']>;
  user_lte?: InputMaybe<Scalars['Bytes']['input']>;
  user_not?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Staked_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash',
  User = 'user'
}

export type UnstakeRequested = {
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  transactionHash: Scalars['Bytes']['output'];
  unlockTime: Scalars['BigInt']['output'];
  user: Scalars['Bytes']['output'];
};

export type UnstakeRequested_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<UnstakeRequested_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<UnstakeRequested_Filter>>>;
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
  unlockTime?: InputMaybe<Scalars['BigInt']['input']>;
  unlockTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unlockTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unlockTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unlockTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unlockTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unlockTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  unlockTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  user?: InputMaybe<Scalars['Bytes']['input']>;
  user_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_gt?: InputMaybe<Scalars['Bytes']['input']>;
  user_gte?: InputMaybe<Scalars['Bytes']['input']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user_lt?: InputMaybe<Scalars['Bytes']['input']>;
  user_lte?: InputMaybe<Scalars['Bytes']['input']>;
  user_not?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum UnstakeRequested_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash',
  UnlockTime = 'unlockTime',
  User = 'user'
}

export type UnstakedWithdrawn = {
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  transactionHash: Scalars['Bytes']['output'];
  user: Scalars['Bytes']['output'];
};

export type UnstakedWithdrawn_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<UnstakedWithdrawn_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<UnstakedWithdrawn_Filter>>>;
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
  user?: InputMaybe<Scalars['Bytes']['input']>;
  user_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_gt?: InputMaybe<Scalars['Bytes']['input']>;
  user_gte?: InputMaybe<Scalars['Bytes']['input']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user_lt?: InputMaybe<Scalars['Bytes']['input']>;
  user_lte?: InputMaybe<Scalars['Bytes']['input']>;
  user_not?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum UnstakedWithdrawn_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash',
  User = 'user'
}

export type Upgraded = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  implementation: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Upgraded_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Upgraded_Filter>>>;
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
  implementation?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_contains?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_gt?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_gte?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  implementation_lt?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_lte?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_not?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Upgraded_Filter>>>;
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

export enum Upgraded_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Implementation = 'implementation',
  TransactionHash = 'transactionHash'
}

export type Validator = {
  cluster: Cluster;
  id: Scalars['Bytes']['output'];
  lastUpdateBlockNumber: Scalars['BigInt']['output'];
  lastUpdateBlockTimestamp: Scalars['BigInt']['output'];
  lastUpdateTransactionHash: Scalars['Bytes']['output'];
  operators: Array<Operator>;
  owner: Account;
  removed: Scalars['Boolean']['output'];
  shares: Scalars['Bytes']['output'];
};


export type ValidatorOperatorsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Operator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Operator_Filter>;
};

export type ValidatorAdded = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  cluster_active: Scalars['Boolean']['output'];
  cluster_balance: Scalars['BigInt']['output'];
  cluster_index: Scalars['BigInt']['output'];
  cluster_networkFeeIndex: Scalars['BigInt']['output'];
  cluster_validatorCount: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  operatorIds: Array<Scalars['BigInt']['output']>;
  owner: Scalars['Bytes']['output'];
  publicKey: Scalars['Bytes']['output'];
  shares: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

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

export enum ValidatorAdded_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ClusterActive = 'cluster_active',
  ClusterBalance = 'cluster_balance',
  ClusterIndex = 'cluster_index',
  ClusterNetworkFeeIndex = 'cluster_networkFeeIndex',
  ClusterValidatorCount = 'cluster_validatorCount',
  Id = 'id',
  OperatorIds = 'operatorIds',
  Owner = 'owner',
  PublicKey = 'publicKey',
  Shares = 'shares',
  TransactionHash = 'transactionHash'
}

export type ValidatorRemoved = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  cluster_active: Scalars['Boolean']['output'];
  cluster_balance: Scalars['BigInt']['output'];
  cluster_index: Scalars['BigInt']['output'];
  cluster_networkFeeIndex: Scalars['BigInt']['output'];
  cluster_validatorCount: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  operatorIds: Array<Scalars['BigInt']['output']>;
  owner: Scalars['Bytes']['output'];
  publicKey: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

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

export enum ValidatorRemoved_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  ClusterActive = 'cluster_active',
  ClusterBalance = 'cluster_balance',
  ClusterIndex = 'cluster_index',
  ClusterNetworkFeeIndex = 'cluster_networkFeeIndex',
  ClusterValidatorCount = 'cluster_validatorCount',
  Id = 'id',
  OperatorIds = 'operatorIds',
  Owner = 'owner',
  PublicKey = 'publicKey',
  TransactionHash = 'transactionHash'
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

export enum Validator_OrderBy {
  Cluster = 'cluster',
  ClusterActive = 'cluster__active',
  ClusterBalance = 'cluster__balance',
  ClusterEffectiveBalance = 'cluster__effectiveBalance',
  ClusterFeeAsset = 'cluster__feeAsset',
  ClusterId = 'cluster__id',
  ClusterIndex = 'cluster__index',
  ClusterLastUpdateBlockNumber = 'cluster__lastUpdateBlockNumber',
  ClusterLastUpdateBlockTimestamp = 'cluster__lastUpdateBlockTimestamp',
  ClusterLastUpdateTransactionHash = 'cluster__lastUpdateTransactionHash',
  ClusterNetworkFeeIndex = 'cluster__networkFeeIndex',
  ClusterVUnits = 'cluster__vUnits',
  ClusterValidatorCount = 'cluster__validatorCount',
  Id = 'id',
  LastUpdateBlockNumber = 'lastUpdateBlockNumber',
  LastUpdateBlockTimestamp = 'lastUpdateBlockTimestamp',
  LastUpdateTransactionHash = 'lastUpdateTransactionHash',
  Operators = 'operators',
  Owner = 'owner',
  OwnerFeeRecipient = 'owner__feeRecipient',
  OwnerId = 'owner__id',
  OwnerNonce = 'owner__nonce',
  OwnerStakedAmount = 'owner__stakedAmount',
  OwnerUnstakePendingAmount = 'owner__unstakePendingAmount',
  OwnerValidatorCount = 'owner__validatorCount',
  Removed = 'removed',
  Shares = 'shares'
}

export type WeightedRootProposed = {
  accumulatedWeight: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  merkleRoot: Scalars['Bytes']['output'];
  oracle: Scalars['Bytes']['output'];
  oracleId: Scalars['BigInt']['output'];
  quorum: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type WeightedRootProposed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accumulatedWeight?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedWeight_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedWeight_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedWeight_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accumulatedWeight_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedWeight_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedWeight_not?: InputMaybe<Scalars['BigInt']['input']>;
  accumulatedWeight_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<WeightedRootProposed_Filter>>>;
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
  merkleRoot?: InputMaybe<Scalars['Bytes']['input']>;
  merkleRoot_contains?: InputMaybe<Scalars['Bytes']['input']>;
  merkleRoot_gt?: InputMaybe<Scalars['Bytes']['input']>;
  merkleRoot_gte?: InputMaybe<Scalars['Bytes']['input']>;
  merkleRoot_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  merkleRoot_lt?: InputMaybe<Scalars['Bytes']['input']>;
  merkleRoot_lte?: InputMaybe<Scalars['Bytes']['input']>;
  merkleRoot_not?: InputMaybe<Scalars['Bytes']['input']>;
  merkleRoot_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  merkleRoot_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<WeightedRootProposed_Filter>>>;
  oracle?: InputMaybe<Scalars['Bytes']['input']>;
  oracleId?: InputMaybe<Scalars['BigInt']['input']>;
  oracleId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  oracleId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  oracleId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oracleId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  oracleId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  oracleId_not?: InputMaybe<Scalars['BigInt']['input']>;
  oracleId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  oracle_contains?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_gt?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_gte?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  oracle_lt?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_lte?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_not?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  quorum?: InputMaybe<Scalars['BigInt']['input']>;
  quorum_gt?: InputMaybe<Scalars['BigInt']['input']>;
  quorum_gte?: InputMaybe<Scalars['BigInt']['input']>;
  quorum_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quorum_lt?: InputMaybe<Scalars['BigInt']['input']>;
  quorum_lte?: InputMaybe<Scalars['BigInt']['input']>;
  quorum_not?: InputMaybe<Scalars['BigInt']['input']>;
  quorum_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export enum WeightedRootProposed_OrderBy {
  AccumulatedWeight = 'accumulatedWeight',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  MerkleRoot = 'merkleRoot',
  Oracle = 'oracle',
  OracleId = 'oracleId',
  Quorum = 'quorum',
  TransactionHash = 'transactionHash'
}

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type GetClusterSnapshotQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetClusterSnapshotQuery = { cluster?: { active: boolean, validatorCount: string, balance: string, index: string, networkFeeIndex: string } | null };

export type GetClusterQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetClusterQuery = { cluster?: { active: boolean, validatorCount: string, balance: string, index: string, networkFeeIndex: string, operatorIds: Array<string>, effectiveBalance: string, owner: { id: Address } } | null };

export type GetClustersQueryVariables = Exact<{
  owner: Scalars['String']['input'];
}>;


export type GetClustersQuery = { clusters: Array<{ id: string, active: boolean, validatorCount: string, balance: string, index: string, networkFeeIndex: string, operatorIds: Array<string> }> };

export type GetOwnerNonceQueryVariables = Exact<{
  owner: Scalars['ID']['input'];
}>;


export type GetOwnerNonceQuery = { account?: { nonce: string } | null };

export type GetOwnerNonceByBlockQueryVariables = Exact<{
  owner: Scalars['ID']['input'];
  block?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetOwnerNonceByBlockQuery = { account?: { nonce: string } | null };

export type GetOperatorQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetOperatorQuery = { operator?: { id: string, publicKey: Address, validatorCount: string, isPrivate: boolean, whitelistedContract: Address, whitelisted: Array<{ id: Address }> } | null };

export type GetOperatorsQueryVariables = Exact<{
  operatorIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type GetOperatorsQuery = { operators: Array<{ id: string, publicKey: Address, validatorCount: string, isPrivate: boolean, whitelistedContract: Address, fee: string, whitelisted: Array<{ id: Address }> }> };

export type GetValidatorsQueryVariables = Exact<{
  ids: Array<Scalars['Bytes']['input']> | Scalars['Bytes']['input'];
}>;


export type GetValidatorsQuery = { validators: Array<{ id: Address }> };

export type GetValidatorQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetValidatorQuery = { validator?: { id: Address } | null };

export type GetClusterBalanceQueryVariables = Exact<{
  clusterId: Scalars['ID']['input'];
  daoAddress: Scalars['ID']['input'];
  operatorIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type GetClusterBalanceQuery = { _meta?: { block: { number: number } } | null, daovalues?: { networkFee: string, networkFeeIndex: string, networkFeeIndexBlockNumber: string, liquidationThreshold: string, minimumLiquidationCollateral: string } | null, operators: Array<{ fee: string, feeIndex: string, feeIndexBlockNumber: string }>, cluster?: { validatorCount: string, networkFeeIndex: string, index: string, balance: string } | null };

export type GetDaoValuesQueryVariables = Exact<{
  daoAddress: Scalars['ID']['input'];
}>;


export type GetDaoValuesQuery = { daovalues?: { networkFee: string, networkFeeIndex: string, networkFeeIndexBlockNumber: string, liquidationThreshold: string, minimumLiquidationCollateral: string } | null };


export const GetClusterSnapshotDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClusterSnapshot"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cluster"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"validatorCount"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"networkFeeIndex"}}]}}]}}]} as unknown as DocumentNode<GetClusterSnapshotQuery, GetClusterSnapshotQueryVariables>;
export const GetClusterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCluster"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cluster"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"validatorCount"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"networkFeeIndex"}},{"kind":"Field","name":{"kind":"Name","value":"operatorIds"}},{"kind":"Field","name":{"kind":"Name","value":"effectiveBalance"}}]}}]}}]} as unknown as DocumentNode<GetClusterQuery, GetClusterQueryVariables>;
export const GetClustersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClusters"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clusters"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"owner"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"validatorCount"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"networkFeeIndex"}},{"kind":"Field","name":{"kind":"Name","value":"operatorIds"}}]}}]}}]} as unknown as DocumentNode<GetClustersQuery, GetClustersQueryVariables>;
export const GetOwnerNonceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOwnerNonce"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}}]}}]} as unknown as DocumentNode<GetOwnerNonceQuery, GetOwnerNonceQueryVariables>;
export const GetOwnerNonceByBlockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOwnerNonceByBlock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"block"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}},{"kind":"Argument","name":{"kind":"Name","value":"block"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"block"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}}]}}]} as unknown as DocumentNode<GetOwnerNonceByBlockQuery, GetOwnerNonceByBlockQueryVariables>;
export const GetOperatorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOperator"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"operator"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"validatorCount"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"whitelistedContract"}},{"kind":"Field","name":{"kind":"Name","value":"whitelisted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetOperatorQuery, GetOperatorQueryVariables>;
export const GetOperatorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOperators"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"operatorIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"operators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"operatorIds"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"validatorCount"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"whitelistedContract"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"whitelisted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetOperatorsQuery, GetOperatorsQueryVariables>;
export const GetValidatorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetValidators"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Bytes"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"validators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetValidatorsQuery, GetValidatorsQueryVariables>;
export const GetValidatorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetValidator"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"validator"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetValidatorQuery, GetValidatorQueryVariables>;
export const GetClusterBalanceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClusterBalance"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clusterId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"daoAddress"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"operatorIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"number"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"daovalues"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"daoAddress"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"networkFee"}},{"kind":"Field","name":{"kind":"Name","value":"networkFeeIndex"}},{"kind":"Field","name":{"kind":"Name","value":"networkFeeIndexBlockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"liquidationThreshold"}},{"kind":"Field","name":{"kind":"Name","value":"minimumLiquidationCollateral"}}]}},{"kind":"Field","name":{"kind":"Name","value":"operators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"operatorIds"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"feeIndex"}},{"kind":"Field","name":{"kind":"Name","value":"feeIndexBlockNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cluster"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clusterId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"validatorCount"}},{"kind":"Field","name":{"kind":"Name","value":"networkFeeIndex"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}}]}}]} as unknown as DocumentNode<GetClusterBalanceQuery, GetClusterBalanceQueryVariables>;
export const GetDaoValuesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDaoValues"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"daoAddress"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"daovalues"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"daoAddress"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"networkFee"}},{"kind":"Field","name":{"kind":"Name","value":"networkFeeIndex"}},{"kind":"Field","name":{"kind":"Name","value":"networkFeeIndexBlockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"liquidationThreshold"}},{"kind":"Field","name":{"kind":"Name","value":"minimumLiquidationCollateral"}}]}}]}}]} as unknown as DocumentNode<GetDaoValuesQuery, GetDaoValuesQueryVariables>;