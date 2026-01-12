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
  delegators: Array<Delegation>;
  deposits: Array<StrategyUserBalance>;
  feeRecipient: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  metadataURI?: Maybe<Scalars['String']['output']>;
  nonce: Scalars['BigInt']['output'];
  operators?: Maybe<Array<Operator>>;
  receivers: Array<Delegation>;
  strategies: Array<Strategy>;
  totalDelegatedPercentage: Scalars['BigInt']['output'];
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


export type AccountDelegatorsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Delegation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Delegation_Filter>;
};


export type AccountDepositsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StrategyUserBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StrategyUserBalance_Filter>;
};


export type AccountOperatorsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Operator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Operator_Filter>;
};


export type AccountReceiversArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Delegation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Delegation_Filter>;
};


export type AccountStrategiesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Strategy_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Strategy_Filter>;
};


export type AccountValidatorsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Validator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Validator_Filter>;
};

export type AccountMetadataUriUpdated = {
  account: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  metadataURI: Scalars['String']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AccountMetadataUriUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AccountMetadataUriUpdated_Filter>>>;
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
  metadataURI?: InputMaybe<Scalars['String']['input']>;
  metadataURI_contains?: InputMaybe<Scalars['String']['input']>;
  metadataURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_gt?: InputMaybe<Scalars['String']['input']>;
  metadataURI_gte?: InputMaybe<Scalars['String']['input']>;
  metadataURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadataURI_lt?: InputMaybe<Scalars['String']['input']>;
  metadataURI_lte?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadataURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<AccountMetadataUriUpdated_Filter>>>;
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

export enum AccountMetadataUriUpdated_OrderBy {
  Account = 'account',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  MetadataUri = 'metadataURI',
  TransactionHash = 'transactionHash'
}

export type Account_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  clusters_?: InputMaybe<Cluster_Filter>;
  delegators_?: InputMaybe<Delegation_Filter>;
  deposits_?: InputMaybe<StrategyUserBalance_Filter>;
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
  metadataURI?: InputMaybe<Scalars['String']['input']>;
  metadataURI_contains?: InputMaybe<Scalars['String']['input']>;
  metadataURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_gt?: InputMaybe<Scalars['String']['input']>;
  metadataURI_gte?: InputMaybe<Scalars['String']['input']>;
  metadataURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadataURI_lt?: InputMaybe<Scalars['String']['input']>;
  metadataURI_lte?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadataURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
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
  receivers_?: InputMaybe<Delegation_Filter>;
  strategies_?: InputMaybe<Strategy_Filter>;
  totalDelegatedPercentage?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatedPercentage_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatedPercentage_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatedPercentage_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDelegatedPercentage_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatedPercentage_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatedPercentage_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegatedPercentage_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  Delegators = 'delegators',
  Deposits = 'deposits',
  FeeRecipient = 'feeRecipient',
  Id = 'id',
  MetadataUri = 'metadataURI',
  Nonce = 'nonce',
  Operators = 'operators',
  Receivers = 'receivers',
  Strategies = 'strategies',
  TotalDelegatedPercentage = 'totalDelegatedPercentage',
  ValidatorCount = 'validatorCount',
  Validators = 'validators'
}

export enum Aggregation_Interval {
  Day = 'day',
  Hour = 'hour'
}

export type BApp = {
  bAppTokens: Array<BAppToken>;
  id: Scalars['Bytes']['output'];
  metadataURI?: Maybe<Scalars['String']['output']>;
  strategies: Array<StrategyBAppOptIn>;
};


export type BAppBAppTokensArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BAppToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BAppToken_Filter>;
};


export type BAppStrategiesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StrategyBAppOptIn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StrategyBAppOptIn_Filter>;
};

export type BAppConstants = {
  _feeExpireTime: Scalars['BigInt']['output'];
  _feeTimelockPeriod: Scalars['BigInt']['output'];
  _obligationExpireTime: Scalars['BigInt']['output'];
  _obligationTimelockPeriod: Scalars['BigInt']['output'];
  _strategyMaxFeeIncrement: Scalars['BigInt']['output'];
  _strategyMaxShares: Scalars['BigInt']['output'];
  _withdrawalExpireTime: Scalars['BigInt']['output'];
  _withdrawalTimelockPeriod: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  totalAccounts: Scalars['BigInt']['output'];
  totalBApps: Scalars['BigInt']['output'];
  totalStrategies: Scalars['BigInt']['output'];
};

export type BAppConstants_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  _feeExpireTime?: InputMaybe<Scalars['BigInt']['input']>;
  _feeExpireTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  _feeExpireTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  _feeExpireTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  _feeExpireTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  _feeExpireTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  _feeExpireTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  _feeExpireTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  _feeTimelockPeriod?: InputMaybe<Scalars['BigInt']['input']>;
  _feeTimelockPeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
  _feeTimelockPeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
  _feeTimelockPeriod_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  _feeTimelockPeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
  _feeTimelockPeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
  _feeTimelockPeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
  _feeTimelockPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  _obligationExpireTime?: InputMaybe<Scalars['BigInt']['input']>;
  _obligationExpireTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  _obligationExpireTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  _obligationExpireTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  _obligationExpireTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  _obligationExpireTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  _obligationExpireTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  _obligationExpireTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  _obligationTimelockPeriod?: InputMaybe<Scalars['BigInt']['input']>;
  _obligationTimelockPeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
  _obligationTimelockPeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
  _obligationTimelockPeriod_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  _obligationTimelockPeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
  _obligationTimelockPeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
  _obligationTimelockPeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
  _obligationTimelockPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  _strategyMaxFeeIncrement?: InputMaybe<Scalars['BigInt']['input']>;
  _strategyMaxFeeIncrement_gt?: InputMaybe<Scalars['BigInt']['input']>;
  _strategyMaxFeeIncrement_gte?: InputMaybe<Scalars['BigInt']['input']>;
  _strategyMaxFeeIncrement_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  _strategyMaxFeeIncrement_lt?: InputMaybe<Scalars['BigInt']['input']>;
  _strategyMaxFeeIncrement_lte?: InputMaybe<Scalars['BigInt']['input']>;
  _strategyMaxFeeIncrement_not?: InputMaybe<Scalars['BigInt']['input']>;
  _strategyMaxFeeIncrement_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  _strategyMaxShares?: InputMaybe<Scalars['BigInt']['input']>;
  _strategyMaxShares_gt?: InputMaybe<Scalars['BigInt']['input']>;
  _strategyMaxShares_gte?: InputMaybe<Scalars['BigInt']['input']>;
  _strategyMaxShares_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  _strategyMaxShares_lt?: InputMaybe<Scalars['BigInt']['input']>;
  _strategyMaxShares_lte?: InputMaybe<Scalars['BigInt']['input']>;
  _strategyMaxShares_not?: InputMaybe<Scalars['BigInt']['input']>;
  _strategyMaxShares_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  _withdrawalExpireTime?: InputMaybe<Scalars['BigInt']['input']>;
  _withdrawalExpireTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  _withdrawalExpireTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  _withdrawalExpireTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  _withdrawalExpireTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  _withdrawalExpireTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  _withdrawalExpireTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  _withdrawalExpireTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  _withdrawalTimelockPeriod?: InputMaybe<Scalars['BigInt']['input']>;
  _withdrawalTimelockPeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
  _withdrawalTimelockPeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
  _withdrawalTimelockPeriod_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  _withdrawalTimelockPeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
  _withdrawalTimelockPeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
  _withdrawalTimelockPeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
  _withdrawalTimelockPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<BAppConstants_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<BAppConstants_Filter>>>;
  totalAccounts?: InputMaybe<Scalars['BigInt']['input']>;
  totalAccounts_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAccounts_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAccounts_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAccounts_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAccounts_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAccounts_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAccounts_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBApps?: InputMaybe<Scalars['BigInt']['input']>;
  totalBApps_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBApps_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBApps_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBApps_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBApps_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBApps_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalBApps_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalStrategies?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategies_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategies_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategies_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalStrategies_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategies_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategies_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalStrategies_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum BAppConstants_OrderBy {
  FeeExpireTime = '_feeExpireTime',
  FeeTimelockPeriod = '_feeTimelockPeriod',
  ObligationExpireTime = '_obligationExpireTime',
  ObligationTimelockPeriod = '_obligationTimelockPeriod',
  StrategyMaxFeeIncrement = '_strategyMaxFeeIncrement',
  StrategyMaxShares = '_strategyMaxShares',
  WithdrawalExpireTime = '_withdrawalExpireTime',
  WithdrawalTimelockPeriod = '_withdrawalTimelockPeriod',
  Id = 'id',
  TotalAccounts = 'totalAccounts',
  TotalBApps = 'totalBApps',
  TotalStrategies = 'totalStrategies'
}

export type BAppMetadataUriUpdated = {
  bAppAddress: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  metadataURI: Scalars['String']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type BAppMetadataUriUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BAppMetadataUriUpdated_Filter>>>;
  bAppAddress?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  bAppAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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
  metadataURI?: InputMaybe<Scalars['String']['input']>;
  metadataURI_contains?: InputMaybe<Scalars['String']['input']>;
  metadataURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_gt?: InputMaybe<Scalars['String']['input']>;
  metadataURI_gte?: InputMaybe<Scalars['String']['input']>;
  metadataURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadataURI_lt?: InputMaybe<Scalars['String']['input']>;
  metadataURI_lte?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadataURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<BAppMetadataUriUpdated_Filter>>>;
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

export enum BAppMetadataUriUpdated_OrderBy {
  BAppAddress = 'bAppAddress',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  MetadataUri = 'metadataURI',
  TransactionHash = 'transactionHash'
}

export type BAppOptedInByStrategy = {
  bApp: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  data: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  obligationPercentages: Array<Scalars['BigInt']['output']>;
  strategyId: Scalars['BigInt']['output'];
  tokens: Array<Scalars['Bytes']['output']>;
  transactionHash: Scalars['Bytes']['output'];
};

export type BAppOptedInByStrategy_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BAppOptedInByStrategy_Filter>>>;
  bApp?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  bApp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_not?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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
  data?: InputMaybe<Scalars['Bytes']['input']>;
  data_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_gt?: InputMaybe<Scalars['Bytes']['input']>;
  data_gte?: InputMaybe<Scalars['Bytes']['input']>;
  data_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_lt?: InputMaybe<Scalars['Bytes']['input']>;
  data_lte?: InputMaybe<Scalars['Bytes']['input']>;
  data_not?: InputMaybe<Scalars['Bytes']['input']>;
  data_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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
  obligationPercentages?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  obligationPercentages_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  obligationPercentages_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  obligationPercentages_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  obligationPercentages_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  obligationPercentages_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<BAppOptedInByStrategy_Filter>>>;
  strategyId?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  strategyId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_not?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokens?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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

export enum BAppOptedInByStrategy_OrderBy {
  BApp = 'bApp',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Data = 'data',
  Id = 'id',
  ObligationPercentages = 'obligationPercentages',
  StrategyId = 'strategyId',
  Tokens = 'tokens',
  TransactionHash = 'transactionHash'
}

export type BAppRegistered = {
  bAppAddress: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  metadataURI: Scalars['String']['output'];
  sharedRiskLevel: Array<Scalars['BigInt']['output']>;
  tokens: Array<Scalars['Bytes']['output']>;
  transactionHash: Scalars['Bytes']['output'];
};

export type BAppRegistered_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BAppRegistered_Filter>>>;
  bAppAddress?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  bAppAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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
  metadataURI?: InputMaybe<Scalars['String']['input']>;
  metadataURI_contains?: InputMaybe<Scalars['String']['input']>;
  metadataURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_gt?: InputMaybe<Scalars['String']['input']>;
  metadataURI_gte?: InputMaybe<Scalars['String']['input']>;
  metadataURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadataURI_lt?: InputMaybe<Scalars['String']['input']>;
  metadataURI_lte?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadataURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<BAppRegistered_Filter>>>;
  sharedRiskLevel?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharedRiskLevel_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharedRiskLevel_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharedRiskLevel_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharedRiskLevel_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharedRiskLevel_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokens?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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

export enum BAppRegistered_OrderBy {
  BAppAddress = 'bAppAddress',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  MetadataUri = 'metadataURI',
  SharedRiskLevel = 'sharedRiskLevel',
  Tokens = 'tokens',
  TransactionHash = 'transactionHash'
}

export type BAppToken = {
  bApp: BApp;
  id: Scalars['String']['output'];
  sharedRiskLevel: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  totalObligatedBalance: Scalars['BigInt']['output'];
};

export type BAppToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BAppToken_Filter>>>;
  bApp?: InputMaybe<Scalars['String']['input']>;
  bApp_?: InputMaybe<BApp_Filter>;
  bApp_contains?: InputMaybe<Scalars['String']['input']>;
  bApp_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bApp_ends_with?: InputMaybe<Scalars['String']['input']>;
  bApp_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bApp_gt?: InputMaybe<Scalars['String']['input']>;
  bApp_gte?: InputMaybe<Scalars['String']['input']>;
  bApp_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bApp_lt?: InputMaybe<Scalars['String']['input']>;
  bApp_lte?: InputMaybe<Scalars['String']['input']>;
  bApp_not?: InputMaybe<Scalars['String']['input']>;
  bApp_not_contains?: InputMaybe<Scalars['String']['input']>;
  bApp_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bApp_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  bApp_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bApp_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bApp_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  bApp_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bApp_starts_with?: InputMaybe<Scalars['String']['input']>;
  bApp_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
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
  or?: InputMaybe<Array<InputMaybe<BAppToken_Filter>>>;
  sharedRiskLevel?: InputMaybe<Scalars['BigInt']['input']>;
  sharedRiskLevel_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sharedRiskLevel_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sharedRiskLevel_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharedRiskLevel_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sharedRiskLevel_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sharedRiskLevel_not?: InputMaybe<Scalars['BigInt']['input']>;
  sharedRiskLevel_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  totalObligatedBalance?: InputMaybe<Scalars['BigInt']['input']>;
  totalObligatedBalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalObligatedBalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalObligatedBalance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalObligatedBalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalObligatedBalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalObligatedBalance_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalObligatedBalance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum BAppToken_OrderBy {
  BApp = 'bApp',
  BAppId = 'bApp__id',
  BAppMetadataUri = 'bApp__metadataURI',
  Id = 'id',
  SharedRiskLevel = 'sharedRiskLevel',
  Token = 'token',
  TotalObligatedBalance = 'totalObligatedBalance'
}

export type BAppTokensCreated = {
  bAppAddress: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  sharedRiskLevels: Array<Scalars['BigInt']['output']>;
  tokens: Array<Scalars['Bytes']['output']>;
  transactionHash: Scalars['Bytes']['output'];
};

export type BAppTokensCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BAppTokensCreated_Filter>>>;
  bAppAddress?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  bAppAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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
  or?: InputMaybe<Array<InputMaybe<BAppTokensCreated_Filter>>>;
  sharedRiskLevels?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharedRiskLevels_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharedRiskLevels_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharedRiskLevels_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharedRiskLevels_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharedRiskLevels_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokens?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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

export enum BAppTokensCreated_OrderBy {
  BAppAddress = 'bAppAddress',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  SharedRiskLevels = 'sharedRiskLevels',
  Tokens = 'tokens',
  TransactionHash = 'transactionHash'
}

export type BAppTokensRemoved = {
  bAppAddress: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  tokens: Array<Scalars['Bytes']['output']>;
  transactionHash: Scalars['Bytes']['output'];
};

export type BAppTokensRemoved_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BAppTokensRemoved_Filter>>>;
  bAppAddress?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  bAppAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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
  or?: InputMaybe<Array<InputMaybe<BAppTokensRemoved_Filter>>>;
  tokens?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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

export enum BAppTokensRemoved_OrderBy {
  BAppAddress = 'bAppAddress',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Tokens = 'tokens',
  TransactionHash = 'transactionHash'
}

export type BAppTokensUpdated = {
  bAppAddress: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  sharedRiskLevels: Array<Scalars['BigInt']['output']>;
  tokens: Array<Scalars['Bytes']['output']>;
  transactionHash: Scalars['Bytes']['output'];
};

export type BAppTokensUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BAppTokensUpdated_Filter>>>;
  bAppAddress?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  bAppAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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
  or?: InputMaybe<Array<InputMaybe<BAppTokensUpdated_Filter>>>;
  sharedRiskLevels?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharedRiskLevels_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharedRiskLevels_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharedRiskLevels_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharedRiskLevels_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharedRiskLevels_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokens?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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

export enum BAppTokensUpdated_OrderBy {
  BAppAddress = 'bAppAddress',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  SharedRiskLevels = 'sharedRiskLevels',
  Tokens = 'tokens',
  TransactionHash = 'transactionHash'
}

export type BApp_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BApp_Filter>>>;
  bAppTokens_?: InputMaybe<BAppToken_Filter>;
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
  metadataURI?: InputMaybe<Scalars['String']['input']>;
  metadataURI_contains?: InputMaybe<Scalars['String']['input']>;
  metadataURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_gt?: InputMaybe<Scalars['String']['input']>;
  metadataURI_gte?: InputMaybe<Scalars['String']['input']>;
  metadataURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadataURI_lt?: InputMaybe<Scalars['String']['input']>;
  metadataURI_lte?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadataURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<BApp_Filter>>>;
  strategies_?: InputMaybe<StrategyBAppOptIn_Filter>;
};

export enum BApp_OrderBy {
  BAppTokens = 'bAppTokens',
  Id = 'id',
  MetadataUri = 'metadataURI',
  Strategies = 'strategies'
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
  id: Scalars['String']['output'];
  index: Scalars['BigInt']['output'];
  lastUpdateBlockNumber: Scalars['BigInt']['output'];
  lastUpdateBlockTimestamp: Scalars['BigInt']['output'];
  lastUpdateTransactionHash: Scalars['Bytes']['output'];
  networkFeeIndex: Scalars['BigInt']['output'];
  operatorIds: Array<Scalars['BigInt']['output']>;
  owner: Account;
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

export enum Cluster_OrderBy {
  Active = 'active',
  Balance = 'balance',
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
  OwnerMetadataUri = 'owner__metadataURI',
  OwnerNonce = 'owner__nonce',
  OwnerTotalDelegatedPercentage = 'owner__totalDelegatedPercentage',
  OwnerValidatorCount = 'owner__validatorCount',
  ValidatorCount = 'validatorCount',
  Validators = 'validators'
}

export enum DaoUpdateTypes {
  DeclareOperatorFeePeriod = 'DECLARE_OPERATOR_FEE_PERIOD',
  ExecuteOperatorFeePeriod = 'EXECUTE_OPERATOR_FEE_PERIOD',
  Initialization = 'INITIALIZATION',
  LiquidationThreshold = 'LIQUIDATION_THRESHOLD',
  MinLiquidationCollateral = 'MIN_LIQUIDATION_COLLATERAL',
  NetworkFee = 'NETWORK_FEE',
  OperatorAdded = 'OPERATOR_ADDED',
  OperatorFeeIncreaseLimit = 'OPERATOR_FEE_INCREASE_LIMIT',
  OperatorMaxFee = 'OPERATOR_MAX_FEE',
  OperatorRemoved = 'OPERATOR_REMOVED',
  ValidatorAdded = 'VALIDATOR_ADDED',
  ValidatorRemoved = 'VALIDATOR_REMOVED'
}

export type DaoValues = {
  declareOperatorFeePeriod: Scalars['BigInt']['output'];
  executeOperatorFeePeriod: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  lastUpdateBlockNumber: Scalars['BigInt']['output'];
  lastUpdateBlockTimestamp: Scalars['BigInt']['output'];
  lastUpdateTransactionHash: Scalars['Bytes']['output'];
  liquidationThreshold: Scalars['BigInt']['output'];
  minimumLiquidationCollateral: Scalars['BigInt']['output'];
  networkFee: Scalars['BigInt']['output'];
  networkFeeIndex: Scalars['BigInt']['output'];
  networkFeeIndexBlockNumber: Scalars['BigInt']['output'];
  operatorFeeIncreaseLimit: Scalars['BigInt']['output'];
  operatorMaximumFee: Scalars['BigInt']['output'];
  operatorsAdded: Scalars['BigInt']['output'];
  operatorsRemoved: Scalars['BigInt']['output'];
  totalAccounts: Scalars['BigInt']['output'];
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

export enum DaoValues_OrderBy {
  DeclareOperatorFeePeriod = 'declareOperatorFeePeriod',
  ExecuteOperatorFeePeriod = 'executeOperatorFeePeriod',
  Id = 'id',
  LastUpdateBlockNumber = 'lastUpdateBlockNumber',
  LastUpdateBlockTimestamp = 'lastUpdateBlockTimestamp',
  LastUpdateTransactionHash = 'lastUpdateTransactionHash',
  LiquidationThreshold = 'liquidationThreshold',
  MinimumLiquidationCollateral = 'minimumLiquidationCollateral',
  NetworkFee = 'networkFee',
  NetworkFeeIndex = 'networkFeeIndex',
  NetworkFeeIndexBlockNumber = 'networkFeeIndexBlockNumber',
  OperatorFeeIncreaseLimit = 'operatorFeeIncreaseLimit',
  OperatorMaximumFee = 'operatorMaximumFee',
  OperatorsAdded = 'operatorsAdded',
  OperatorsRemoved = 'operatorsRemoved',
  TotalAccounts = 'totalAccounts',
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

export type Delegation = {
  delegator: Account;
  id: Scalars['String']['output'];
  percentage: Scalars['BigInt']['output'];
  receiver: Account;
};

export type DelegationCreated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  delegator: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  percentage: Scalars['BigInt']['output'];
  receiver: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type DelegationCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DelegationCreated_Filter>>>;
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
  delegator?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  delegator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_not?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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
  or?: InputMaybe<Array<InputMaybe<DelegationCreated_Filter>>>;
  percentage?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_gt?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_gte?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  percentage_lt?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_lte?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_not?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receiver?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_contains?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_gt?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_gte?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  receiver_lt?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_lte?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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

export enum DelegationCreated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Delegator = 'delegator',
  Id = 'id',
  Percentage = 'percentage',
  Receiver = 'receiver',
  TransactionHash = 'transactionHash'
}

export type DelegationRemoved = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  delegator: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  receiver: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type DelegationRemoved_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DelegationRemoved_Filter>>>;
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
  delegator?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  delegator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_not?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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
  or?: InputMaybe<Array<InputMaybe<DelegationRemoved_Filter>>>;
  receiver?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_contains?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_gt?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_gte?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  receiver_lt?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_lte?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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

export enum DelegationRemoved_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Delegator = 'delegator',
  Id = 'id',
  Receiver = 'receiver',
  TransactionHash = 'transactionHash'
}

export type DelegationUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  delegator: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  percentage: Scalars['BigInt']['output'];
  receiver: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type DelegationUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
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
  delegator?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  delegator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_not?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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
  or?: InputMaybe<Array<InputMaybe<DelegationUpdated_Filter>>>;
  percentage?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_gt?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_gte?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  percentage_lt?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_lte?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_not?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receiver?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_contains?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_gt?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_gte?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  receiver_lt?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_lte?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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

export enum DelegationUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Delegator = 'delegator',
  Id = 'id',
  Percentage = 'percentage',
  Receiver = 'receiver',
  TransactionHash = 'transactionHash'
}

export type Delegation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Delegation_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<Delegation_Filter>>>;
  percentage?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_gt?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_gte?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  percentage_lt?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_lte?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_not?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receiver?: InputMaybe<Scalars['String']['input']>;
  receiver_?: InputMaybe<Account_Filter>;
  receiver_contains?: InputMaybe<Scalars['String']['input']>;
  receiver_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_ends_with?: InputMaybe<Scalars['String']['input']>;
  receiver_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_gt?: InputMaybe<Scalars['String']['input']>;
  receiver_gte?: InputMaybe<Scalars['String']['input']>;
  receiver_in?: InputMaybe<Array<Scalars['String']['input']>>;
  receiver_lt?: InputMaybe<Scalars['String']['input']>;
  receiver_lte?: InputMaybe<Scalars['String']['input']>;
  receiver_not?: InputMaybe<Scalars['String']['input']>;
  receiver_not_contains?: InputMaybe<Scalars['String']['input']>;
  receiver_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  receiver_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  receiver_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  receiver_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_starts_with?: InputMaybe<Scalars['String']['input']>;
  receiver_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Delegation_OrderBy {
  Delegator = 'delegator',
  DelegatorFeeRecipient = 'delegator__feeRecipient',
  DelegatorId = 'delegator__id',
  DelegatorMetadataUri = 'delegator__metadataURI',
  DelegatorNonce = 'delegator__nonce',
  DelegatorTotalDelegatedPercentage = 'delegator__totalDelegatedPercentage',
  DelegatorValidatorCount = 'delegator__validatorCount',
  Id = 'id',
  Percentage = 'percentage',
  Receiver = 'receiver',
  ReceiverFeeRecipient = 'receiver__feeRecipient',
  ReceiverId = 'receiver__id',
  ReceiverMetadataUri = 'receiver__metadataURI',
  ReceiverNonce = 'receiver__nonce',
  ReceiverTotalDelegatedPercentage = 'receiver__totalDelegatedPercentage',
  ReceiverValidatorCount = 'receiver__validatorCount'
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

export type FeeExpireTimeUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  feeExpireTime: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type FeeExpireTimeUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FeeExpireTimeUpdated_Filter>>>;
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
  feeExpireTime?: InputMaybe<Scalars['BigInt']['input']>;
  feeExpireTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeExpireTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeExpireTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeExpireTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeExpireTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeExpireTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeExpireTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  or?: InputMaybe<Array<InputMaybe<FeeExpireTimeUpdated_Filter>>>;
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

export enum FeeExpireTimeUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  FeeExpireTime = 'feeExpireTime',
  Id = 'id',
  TransactionHash = 'transactionHash'
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

export type FeeTimelockPeriodUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  feeTimelockPeriod: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type FeeTimelockPeriodUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FeeTimelockPeriodUpdated_Filter>>>;
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
  feeTimelockPeriod?: InputMaybe<Scalars['BigInt']['input']>;
  feeTimelockPeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeTimelockPeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeTimelockPeriod_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeTimelockPeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeTimelockPeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeTimelockPeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeTimelockPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  or?: InputMaybe<Array<InputMaybe<FeeTimelockPeriodUpdated_Filter>>>;
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

export enum FeeTimelockPeriodUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  FeeTimelockPeriod = 'feeTimelockPeriod',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type Initialized = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  version: Scalars['BigInt']['output'];
};

export type Initialized_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Initialized_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<Initialized_Filter>>>;
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
  version?: InputMaybe<Scalars['BigInt']['input']>;
  version_gt?: InputMaybe<Scalars['BigInt']['input']>;
  version_gte?: InputMaybe<Scalars['BigInt']['input']>;
  version_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  version_lt?: InputMaybe<Scalars['BigInt']['input']>;
  version_lte?: InputMaybe<Scalars['BigInt']['input']>;
  version_not?: InputMaybe<Scalars['BigInt']['input']>;
  version_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Initialized_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash',
  Version = 'version'
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

export type MaxFeeIncrementSet = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newMaxFeeIncrement: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type MaxFeeIncrementSet_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MaxFeeIncrementSet_Filter>>>;
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
  newMaxFeeIncrement?: InputMaybe<Scalars['BigInt']['input']>;
  newMaxFeeIncrement_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newMaxFeeIncrement_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newMaxFeeIncrement_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newMaxFeeIncrement_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newMaxFeeIncrement_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newMaxFeeIncrement_not?: InputMaybe<Scalars['BigInt']['input']>;
  newMaxFeeIncrement_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MaxFeeIncrementSet_Filter>>>;
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

export enum MaxFeeIncrementSet_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewMaxFeeIncrement = 'newMaxFeeIncrement',
  TransactionHash = 'transactionHash'
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

export type Obligation = {
  id: Scalars['String']['output'];
  obligatedBalance: Scalars['BigInt']['output'];
  percentage: Scalars['BigInt']['output'];
  percentageProposed: Scalars['BigInt']['output'];
  percentageProposedTimestamp: Scalars['BigInt']['output'];
  strategyBAppOptIn: StrategyBAppOptIn;
  token: Scalars['Bytes']['output'];
};

export type ObligationCreated = {
  bApp: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  obligationPercentage: Scalars['BigInt']['output'];
  strategyId: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ObligationCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ObligationCreated_Filter>>>;
  bApp?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  bApp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_not?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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
  obligationPercentage?: InputMaybe<Scalars['BigInt']['input']>;
  obligationPercentage_gt?: InputMaybe<Scalars['BigInt']['input']>;
  obligationPercentage_gte?: InputMaybe<Scalars['BigInt']['input']>;
  obligationPercentage_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  obligationPercentage_lt?: InputMaybe<Scalars['BigInt']['input']>;
  obligationPercentage_lte?: InputMaybe<Scalars['BigInt']['input']>;
  obligationPercentage_not?: InputMaybe<Scalars['BigInt']['input']>;
  obligationPercentage_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ObligationCreated_Filter>>>;
  strategyId?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  strategyId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_not?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export enum ObligationCreated_OrderBy {
  BApp = 'bApp',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  ObligationPercentage = 'obligationPercentage',
  StrategyId = 'strategyId',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

export type ObligationExpireTimeUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  obligationExpireTime: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ObligationExpireTimeUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ObligationExpireTimeUpdated_Filter>>>;
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
  obligationExpireTime?: InputMaybe<Scalars['BigInt']['input']>;
  obligationExpireTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  obligationExpireTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  obligationExpireTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  obligationExpireTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  obligationExpireTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  obligationExpireTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  obligationExpireTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ObligationExpireTimeUpdated_Filter>>>;
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

export enum ObligationExpireTimeUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  ObligationExpireTime = 'obligationExpireTime',
  TransactionHash = 'transactionHash'
}

export type ObligationTimelockPeriodUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  obligationTimelockPeriod: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ObligationTimelockPeriodUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ObligationTimelockPeriodUpdated_Filter>>>;
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
  obligationTimelockPeriod?: InputMaybe<Scalars['BigInt']['input']>;
  obligationTimelockPeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
  obligationTimelockPeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
  obligationTimelockPeriod_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  obligationTimelockPeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
  obligationTimelockPeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
  obligationTimelockPeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
  obligationTimelockPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ObligationTimelockPeriodUpdated_Filter>>>;
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

export enum ObligationTimelockPeriodUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  ObligationTimelockPeriod = 'obligationTimelockPeriod',
  TransactionHash = 'transactionHash'
}

export type ObligationUpdateProposed = {
  bApp: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  percentage: Scalars['BigInt']['output'];
  strategyId: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ObligationUpdateProposed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ObligationUpdateProposed_Filter>>>;
  bApp?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  bApp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_not?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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
  or?: InputMaybe<Array<InputMaybe<ObligationUpdateProposed_Filter>>>;
  percentage?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_gt?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_gte?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  percentage_lt?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_lte?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_not?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  strategyId?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  strategyId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_not?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export enum ObligationUpdateProposed_OrderBy {
  BApp = 'bApp',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Percentage = 'percentage',
  StrategyId = 'strategyId',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

export type ObligationUpdated = {
  bApp: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  percentage: Scalars['BigInt']['output'];
  strategyId: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ObligationUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ObligationUpdated_Filter>>>;
  bApp?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_gt?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_gte?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  bApp_lt?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_lte?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_not?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bApp_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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
  or?: InputMaybe<Array<InputMaybe<ObligationUpdated_Filter>>>;
  percentage?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_gt?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_gte?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  percentage_lt?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_lte?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_not?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  strategyId?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  strategyId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_not?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export enum ObligationUpdated_OrderBy {
  BApp = 'bApp',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Percentage = 'percentage',
  StrategyId = 'strategyId',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

export type Obligation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Obligation_Filter>>>;
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
  obligatedBalance?: InputMaybe<Scalars['BigInt']['input']>;
  obligatedBalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  obligatedBalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  obligatedBalance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  obligatedBalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  obligatedBalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  obligatedBalance_not?: InputMaybe<Scalars['BigInt']['input']>;
  obligatedBalance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Obligation_Filter>>>;
  percentage?: InputMaybe<Scalars['BigInt']['input']>;
  percentageProposed?: InputMaybe<Scalars['BigInt']['input']>;
  percentageProposedTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  percentageProposedTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  percentageProposedTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  percentageProposedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  percentageProposedTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  percentageProposedTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  percentageProposedTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  percentageProposedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  percentageProposed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  percentageProposed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  percentageProposed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  percentageProposed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  percentageProposed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  percentageProposed_not?: InputMaybe<Scalars['BigInt']['input']>;
  percentageProposed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  percentage_gt?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_gte?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  percentage_lt?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_lte?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_not?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  strategyBAppOptIn?: InputMaybe<Scalars['String']['input']>;
  strategyBAppOptIn_?: InputMaybe<StrategyBAppOptIn_Filter>;
  strategyBAppOptIn_contains?: InputMaybe<Scalars['String']['input']>;
  strategyBAppOptIn_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  strategyBAppOptIn_ends_with?: InputMaybe<Scalars['String']['input']>;
  strategyBAppOptIn_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  strategyBAppOptIn_gt?: InputMaybe<Scalars['String']['input']>;
  strategyBAppOptIn_gte?: InputMaybe<Scalars['String']['input']>;
  strategyBAppOptIn_in?: InputMaybe<Array<Scalars['String']['input']>>;
  strategyBAppOptIn_lt?: InputMaybe<Scalars['String']['input']>;
  strategyBAppOptIn_lte?: InputMaybe<Scalars['String']['input']>;
  strategyBAppOptIn_not?: InputMaybe<Scalars['String']['input']>;
  strategyBAppOptIn_not_contains?: InputMaybe<Scalars['String']['input']>;
  strategyBAppOptIn_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  strategyBAppOptIn_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  strategyBAppOptIn_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  strategyBAppOptIn_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  strategyBAppOptIn_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  strategyBAppOptIn_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  strategyBAppOptIn_starts_with?: InputMaybe<Scalars['String']['input']>;
  strategyBAppOptIn_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
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
};

export enum Obligation_OrderBy {
  Id = 'id',
  ObligatedBalance = 'obligatedBalance',
  Percentage = 'percentage',
  PercentageProposed = 'percentageProposed',
  PercentageProposedTimestamp = 'percentageProposedTimestamp',
  StrategyBAppOptIn = 'strategyBAppOptIn',
  StrategyBAppOptInId = 'strategyBAppOptIn__id',
  Token = 'token'
}

export type Operator = {
  declaredFee: Scalars['BigInt']['output'];
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

export enum Operator_OrderBy {
  DeclaredFee = 'declaredFee',
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
  OwnerMetadataUri = 'owner__metadataURI',
  OwnerNonce = 'owner__nonce',
  OwnerTotalDelegatedPercentage = 'owner__totalDelegatedPercentage',
  OwnerValidatorCount = 'owner__validatorCount',
  PublicKey = 'publicKey',
  Removed = 'removed',
  TotalWithdrawn = 'totalWithdrawn',
  ValidatorCount = 'validatorCount',
  Validators = 'validators',
  Whitelisted = 'whitelisted',
  WhitelistedContract = 'whitelistedContract'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type OwnershipTransferred = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newOwner: Scalars['Bytes']['output'];
  previousOwner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type OwnershipTransferred_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OwnershipTransferred_Filter>>>;
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
  newOwner?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OwnershipTransferred_Filter>>>;
  previousOwner?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  previousOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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

export enum OwnershipTransferred_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewOwner = 'newOwner',
  PreviousOwner = 'previousOwner',
  TransactionHash = 'transactionHash'
}

export type Query = {
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accountMetadataURIUpdated?: Maybe<AccountMetadataUriUpdated>;
  accountMetadataURIUpdateds: Array<AccountMetadataUriUpdated>;
  accounts: Array<Account>;
  bapp?: Maybe<BApp>;
  bappConstants?: Maybe<BAppConstants>;
  bappConstants_collection: Array<BAppConstants>;
  bappMetadataURIUpdated?: Maybe<BAppMetadataUriUpdated>;
  bappMetadataURIUpdateds: Array<BAppMetadataUriUpdated>;
  bappOptedInByStrategies: Array<BAppOptedInByStrategy>;
  bappOptedInByStrategy?: Maybe<BAppOptedInByStrategy>;
  bappRegistered?: Maybe<BAppRegistered>;
  bappRegistereds: Array<BAppRegistered>;
  bappToken?: Maybe<BAppToken>;
  bappTokens: Array<BAppToken>;
  bappTokensCreated?: Maybe<BAppTokensCreated>;
  bappTokensCreateds: Array<BAppTokensCreated>;
  bappTokensRemoved?: Maybe<BAppTokensRemoved>;
  bappTokensRemoveds: Array<BAppTokensRemoved>;
  bappTokensUpdated?: Maybe<BAppTokensUpdated>;
  bappTokensUpdateds: Array<BAppTokensUpdated>;
  bapps: Array<BApp>;
  cluster?: Maybe<Cluster>;
  clusterDeposited?: Maybe<ClusterDeposited>;
  clusterDepositeds: Array<ClusterDeposited>;
  clusterLiquidated?: Maybe<ClusterLiquidated>;
  clusterLiquidateds: Array<ClusterLiquidated>;
  clusterReactivated?: Maybe<ClusterReactivated>;
  clusterReactivateds: Array<ClusterReactivated>;
  clusterWithdrawn?: Maybe<ClusterWithdrawn>;
  clusterWithdrawns: Array<ClusterWithdrawn>;
  clusters: Array<Cluster>;
  daovalues?: Maybe<DaoValues>;
  daovalues_collection: Array<DaoValues>;
  declareOperatorFeePeriodUpdated?: Maybe<DeclareOperatorFeePeriodUpdated>;
  declareOperatorFeePeriodUpdateds: Array<DeclareOperatorFeePeriodUpdated>;
  delegation?: Maybe<Delegation>;
  delegationCreated?: Maybe<DelegationCreated>;
  delegationCreateds: Array<DelegationCreated>;
  delegationRemoved?: Maybe<DelegationRemoved>;
  delegationRemoveds: Array<DelegationRemoved>;
  delegationUpdated?: Maybe<DelegationUpdated>;
  delegationUpdateds: Array<DelegationUpdated>;
  delegations: Array<Delegation>;
  executeOperatorFeePeriodUpdated?: Maybe<ExecuteOperatorFeePeriodUpdated>;
  executeOperatorFeePeriodUpdateds: Array<ExecuteOperatorFeePeriodUpdated>;
  feeExpireTimeUpdated?: Maybe<FeeExpireTimeUpdated>;
  feeExpireTimeUpdateds: Array<FeeExpireTimeUpdated>;
  feeRecipientAddressUpdated?: Maybe<FeeRecipientAddressUpdated>;
  feeRecipientAddressUpdateds: Array<FeeRecipientAddressUpdated>;
  feeTimelockPeriodUpdated?: Maybe<FeeTimelockPeriodUpdated>;
  feeTimelockPeriodUpdateds: Array<FeeTimelockPeriodUpdated>;
  initialized?: Maybe<Initialized>;
  initializeds: Array<Initialized>;
  liquidationThresholdPeriodUpdated?: Maybe<LiquidationThresholdPeriodUpdated>;
  liquidationThresholdPeriodUpdateds: Array<LiquidationThresholdPeriodUpdated>;
  maxFeeIncrementSet?: Maybe<MaxFeeIncrementSet>;
  maxFeeIncrementSets: Array<MaxFeeIncrementSet>;
  minimumLiquidationCollateralUpdated?: Maybe<MinimumLiquidationCollateralUpdated>;
  minimumLiquidationCollateralUpdateds: Array<MinimumLiquidationCollateralUpdated>;
  networkEarningsWithdrawn?: Maybe<NetworkEarningsWithdrawn>;
  networkEarningsWithdrawns: Array<NetworkEarningsWithdrawn>;
  networkFeeUpdated?: Maybe<NetworkFeeUpdated>;
  networkFeeUpdateds: Array<NetworkFeeUpdated>;
  obligation?: Maybe<Obligation>;
  obligationCreated?: Maybe<ObligationCreated>;
  obligationCreateds: Array<ObligationCreated>;
  obligationExpireTimeUpdated?: Maybe<ObligationExpireTimeUpdated>;
  obligationExpireTimeUpdateds: Array<ObligationExpireTimeUpdated>;
  obligationTimelockPeriodUpdated?: Maybe<ObligationTimelockPeriodUpdated>;
  obligationTimelockPeriodUpdateds: Array<ObligationTimelockPeriodUpdated>;
  obligationUpdateProposed?: Maybe<ObligationUpdateProposed>;
  obligationUpdateProposeds: Array<ObligationUpdateProposed>;
  obligationUpdated?: Maybe<ObligationUpdated>;
  obligationUpdateds: Array<ObligationUpdated>;
  obligations: Array<Obligation>;
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
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
  slashingFundWithdrawn?: Maybe<SlashingFundWithdrawn>;
  slashingFundWithdrawns: Array<SlashingFundWithdrawn>;
  strategies: Array<Strategy>;
  strategy?: Maybe<Strategy>;
  strategyBAppOptIn?: Maybe<StrategyBAppOptIn>;
  strategyBAppOptIns: Array<StrategyBAppOptIn>;
  strategyCreated?: Maybe<StrategyCreated>;
  strategyCreateds: Array<StrategyCreated>;
  strategyDeposit?: Maybe<StrategyDeposit>;
  strategyDeposits: Array<StrategyDeposit>;
  strategyFeeUpdateProposed?: Maybe<StrategyFeeUpdateProposed>;
  strategyFeeUpdateProposeds: Array<StrategyFeeUpdateProposed>;
  strategyFeeUpdated?: Maybe<StrategyFeeUpdated>;
  strategyFeeUpdateds: Array<StrategyFeeUpdated>;
  strategyMaxFeeIncrementUpdated?: Maybe<StrategyMaxFeeIncrementUpdated>;
  strategyMaxFeeIncrementUpdateds: Array<StrategyMaxFeeIncrementUpdated>;
  strategyMaxSharesUpdated?: Maybe<StrategyMaxSharesUpdated>;
  strategyMaxSharesUpdateds: Array<StrategyMaxSharesUpdated>;
  strategyMetadataURIUpdated?: Maybe<StrategyMetadataUriUpdated>;
  strategyMetadataURIUpdateds: Array<StrategyMetadataUriUpdated>;
  strategySlashed?: Maybe<StrategySlashed>;
  strategySlasheds: Array<StrategySlashed>;
  strategyTokenBalance?: Maybe<StrategyTokenBalance>;
  strategyTokenBalances: Array<StrategyTokenBalance>;
  strategyUserBalance?: Maybe<StrategyUserBalance>;
  strategyUserBalances: Array<StrategyUserBalance>;
  strategyWithdrawal?: Maybe<StrategyWithdrawal>;
  strategyWithdrawalProposed?: Maybe<StrategyWithdrawalProposed>;
  strategyWithdrawalProposeds: Array<StrategyWithdrawalProposed>;
  strategyWithdrawals: Array<StrategyWithdrawal>;
  upgraded?: Maybe<Upgraded>;
  upgradeds: Array<Upgraded>;
  validator?: Maybe<Validator>;
  validatorAdded?: Maybe<ValidatorAdded>;
  validatorAddeds: Array<ValidatorAdded>;
  validatorRemoved?: Maybe<ValidatorRemoved>;
  validatorRemoveds: Array<ValidatorRemoved>;
  validators: Array<Validator>;
  withdrawalExpireTimeUpdated?: Maybe<WithdrawalExpireTimeUpdated>;
  withdrawalExpireTimeUpdateds: Array<WithdrawalExpireTimeUpdated>;
  withdrawalTimelockPeriodUpdated?: Maybe<WithdrawalTimelockPeriodUpdated>;
  withdrawalTimelockPeriodUpdateds: Array<WithdrawalTimelockPeriodUpdated>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountMetadataUriUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountMetadataUriUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountMetadataUriUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountMetadataUriUpdated_Filter>;
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


export type QueryBappArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBappConstantsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBappConstants_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BAppConstants_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BAppConstants_Filter>;
};


export type QueryBappMetadataUriUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBappMetadataUriUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BAppMetadataUriUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BAppMetadataUriUpdated_Filter>;
};


export type QueryBappOptedInByStrategiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BAppOptedInByStrategy_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BAppOptedInByStrategy_Filter>;
};


export type QueryBappOptedInByStrategyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBappRegisteredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBappRegisteredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BAppRegistered_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BAppRegistered_Filter>;
};


export type QueryBappTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBappTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BAppToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BAppToken_Filter>;
};


export type QueryBappTokensCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBappTokensCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BAppTokensCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BAppTokensCreated_Filter>;
};


export type QueryBappTokensRemovedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBappTokensRemovedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BAppTokensRemoved_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BAppTokensRemoved_Filter>;
};


export type QueryBappTokensUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBappTokensUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BAppTokensUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BAppTokensUpdated_Filter>;
};


export type QueryBappsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BApp_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BApp_Filter>;
};


export type QueryClusterArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
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


export type QueryDelegationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDelegationCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDelegationCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DelegationCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DelegationCreated_Filter>;
};


export type QueryDelegationRemovedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDelegationRemovedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DelegationRemoved_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DelegationRemoved_Filter>;
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


export type QueryDelegationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Delegation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Delegation_Filter>;
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


export type QueryFeeExpireTimeUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFeeExpireTimeUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FeeExpireTimeUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FeeExpireTimeUpdated_Filter>;
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


export type QueryFeeTimelockPeriodUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFeeTimelockPeriodUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FeeTimelockPeriodUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FeeTimelockPeriodUpdated_Filter>;
};


export type QueryInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Initialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Initialized_Filter>;
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


export type QueryMaxFeeIncrementSetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMaxFeeIncrementSetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MaxFeeIncrementSet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MaxFeeIncrementSet_Filter>;
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


export type QueryNetworkFeeUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NetworkFeeUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NetworkFeeUpdated_Filter>;
};


export type QueryObligationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryObligationCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryObligationCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ObligationCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ObligationCreated_Filter>;
};


export type QueryObligationExpireTimeUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryObligationExpireTimeUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ObligationExpireTimeUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ObligationExpireTimeUpdated_Filter>;
};


export type QueryObligationTimelockPeriodUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryObligationTimelockPeriodUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ObligationTimelockPeriodUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ObligationTimelockPeriodUpdated_Filter>;
};


export type QueryObligationUpdateProposedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryObligationUpdateProposedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ObligationUpdateProposed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ObligationUpdateProposed_Filter>;
};


export type QueryObligationUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryObligationUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ObligationUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ObligationUpdated_Filter>;
};


export type QueryObligationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Obligation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Obligation_Filter>;
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


export type QueryOwnershipTransferredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOwnershipTransferredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnershipTransferred_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnershipTransferred_Filter>;
};


export type QuerySlashingFundWithdrawnArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySlashingFundWithdrawnsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SlashingFundWithdrawn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SlashingFundWithdrawn_Filter>;
};


export type QueryStrategiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Strategy_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Strategy_Filter>;
};


export type QueryStrategyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStrategyBAppOptInArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStrategyBAppOptInsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StrategyBAppOptIn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StrategyBAppOptIn_Filter>;
};


export type QueryStrategyCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStrategyCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StrategyCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StrategyCreated_Filter>;
};


export type QueryStrategyDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStrategyDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StrategyDeposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StrategyDeposit_Filter>;
};


export type QueryStrategyFeeUpdateProposedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStrategyFeeUpdateProposedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StrategyFeeUpdateProposed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StrategyFeeUpdateProposed_Filter>;
};


export type QueryStrategyFeeUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStrategyFeeUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StrategyFeeUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StrategyFeeUpdated_Filter>;
};


export type QueryStrategyMaxFeeIncrementUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStrategyMaxFeeIncrementUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StrategyMaxFeeIncrementUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StrategyMaxFeeIncrementUpdated_Filter>;
};


export type QueryStrategyMaxSharesUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStrategyMaxSharesUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StrategyMaxSharesUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StrategyMaxSharesUpdated_Filter>;
};


export type QueryStrategyMetadataUriUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStrategyMetadataUriUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StrategyMetadataUriUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StrategyMetadataUriUpdated_Filter>;
};


export type QueryStrategySlashedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStrategySlashedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StrategySlashed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StrategySlashed_Filter>;
};


export type QueryStrategyTokenBalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStrategyTokenBalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StrategyTokenBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StrategyTokenBalance_Filter>;
};


export type QueryStrategyUserBalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStrategyUserBalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StrategyUserBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StrategyUserBalance_Filter>;
};


export type QueryStrategyWithdrawalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStrategyWithdrawalProposedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStrategyWithdrawalProposedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StrategyWithdrawalProposed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StrategyWithdrawalProposed_Filter>;
};


export type QueryStrategyWithdrawalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StrategyWithdrawal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StrategyWithdrawal_Filter>;
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


export type QueryWithdrawalExpireTimeUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWithdrawalExpireTimeUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WithdrawalExpireTimeUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WithdrawalExpireTimeUpdated_Filter>;
};


export type QueryWithdrawalTimelockPeriodUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWithdrawalTimelockPeriodUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WithdrawalTimelockPeriodUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WithdrawalTimelockPeriodUpdated_Filter>;
};

export type SlashingFundWithdrawn = {
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type SlashingFundWithdrawn_Filter = {
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
  and?: InputMaybe<Array<InputMaybe<SlashingFundWithdrawn_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<SlashingFundWithdrawn_Filter>>>;
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

export enum SlashingFundWithdrawn_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

export type Strategy = {
  bApps: Array<StrategyBAppOptIn>;
  balances: Array<StrategyTokenBalance>;
  deposits: Array<StrategyUserBalance>;
  fee: Scalars['BigInt']['output'];
  feeProposed: Scalars['BigInt']['output'];
  feeProposedTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  metadataURI?: Maybe<Scalars['String']['output']>;
  owner: Account;
  strategyId: Scalars['BigInt']['output'];
};


export type StrategyBAppsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StrategyBAppOptIn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StrategyBAppOptIn_Filter>;
};


export type StrategyBalancesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StrategyTokenBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StrategyTokenBalance_Filter>;
};


export type StrategyDepositsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StrategyUserBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StrategyUserBalance_Filter>;
};

export type StrategyBAppOptIn = {
  bApp: BApp;
  id: Scalars['String']['output'];
  obligations: Array<Obligation>;
  strategy: Strategy;
};


export type StrategyBAppOptInObligationsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Obligation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Obligation_Filter>;
};

export type StrategyBAppOptIn_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StrategyBAppOptIn_Filter>>>;
  bApp?: InputMaybe<Scalars['String']['input']>;
  bApp_?: InputMaybe<BApp_Filter>;
  bApp_contains?: InputMaybe<Scalars['String']['input']>;
  bApp_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bApp_ends_with?: InputMaybe<Scalars['String']['input']>;
  bApp_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bApp_gt?: InputMaybe<Scalars['String']['input']>;
  bApp_gte?: InputMaybe<Scalars['String']['input']>;
  bApp_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bApp_lt?: InputMaybe<Scalars['String']['input']>;
  bApp_lte?: InputMaybe<Scalars['String']['input']>;
  bApp_not?: InputMaybe<Scalars['String']['input']>;
  bApp_not_contains?: InputMaybe<Scalars['String']['input']>;
  bApp_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bApp_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  bApp_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bApp_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bApp_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  bApp_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bApp_starts_with?: InputMaybe<Scalars['String']['input']>;
  bApp_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
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
  obligations_?: InputMaybe<Obligation_Filter>;
  or?: InputMaybe<Array<InputMaybe<StrategyBAppOptIn_Filter>>>;
  strategy?: InputMaybe<Scalars['String']['input']>;
  strategy_?: InputMaybe<Strategy_Filter>;
  strategy_contains?: InputMaybe<Scalars['String']['input']>;
  strategy_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  strategy_ends_with?: InputMaybe<Scalars['String']['input']>;
  strategy_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  strategy_gt?: InputMaybe<Scalars['String']['input']>;
  strategy_gte?: InputMaybe<Scalars['String']['input']>;
  strategy_in?: InputMaybe<Array<Scalars['String']['input']>>;
  strategy_lt?: InputMaybe<Scalars['String']['input']>;
  strategy_lte?: InputMaybe<Scalars['String']['input']>;
  strategy_not?: InputMaybe<Scalars['String']['input']>;
  strategy_not_contains?: InputMaybe<Scalars['String']['input']>;
  strategy_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  strategy_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  strategy_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  strategy_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  strategy_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  strategy_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  strategy_starts_with?: InputMaybe<Scalars['String']['input']>;
  strategy_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum StrategyBAppOptIn_OrderBy {
  BApp = 'bApp',
  BAppId = 'bApp__id',
  BAppMetadataUri = 'bApp__metadataURI',
  Id = 'id',
  Obligations = 'obligations',
  Strategy = 'strategy',
  StrategyFee = 'strategy__fee',
  StrategyFeeProposed = 'strategy__feeProposed',
  StrategyFeeProposedTimestamp = 'strategy__feeProposedTimestamp',
  StrategyId = 'strategy__id',
  StrategyMetadataUri = 'strategy__metadataURI',
  StrategyStrategyId = 'strategy__strategyId'
}

export type StrategyCreated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  fee: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  metadataURI?: Maybe<Scalars['String']['output']>;
  owner: Scalars['Bytes']['output'];
  strategyId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type StrategyCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StrategyCreated_Filter>>>;
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
  metadataURI?: InputMaybe<Scalars['String']['input']>;
  metadataURI_contains?: InputMaybe<Scalars['String']['input']>;
  metadataURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_gt?: InputMaybe<Scalars['String']['input']>;
  metadataURI_gte?: InputMaybe<Scalars['String']['input']>;
  metadataURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadataURI_lt?: InputMaybe<Scalars['String']['input']>;
  metadataURI_lte?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadataURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<StrategyCreated_Filter>>>;
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
  strategyId?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  strategyId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_not?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export enum StrategyCreated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Fee = 'fee',
  Id = 'id',
  MetadataUri = 'metadataURI',
  Owner = 'owner',
  StrategyId = 'strategyId',
  TransactionHash = 'transactionHash'
}

export type StrategyDeposit = {
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  contributor: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  strategyId: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type StrategyDeposit_Filter = {
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
  and?: InputMaybe<Array<InputMaybe<StrategyDeposit_Filter>>>;
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
  contributor?: InputMaybe<Scalars['Bytes']['input']>;
  contributor_contains?: InputMaybe<Scalars['Bytes']['input']>;
  contributor_gt?: InputMaybe<Scalars['Bytes']['input']>;
  contributor_gte?: InputMaybe<Scalars['Bytes']['input']>;
  contributor_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  contributor_lt?: InputMaybe<Scalars['Bytes']['input']>;
  contributor_lte?: InputMaybe<Scalars['Bytes']['input']>;
  contributor_not?: InputMaybe<Scalars['Bytes']['input']>;
  contributor_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  contributor_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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
  or?: InputMaybe<Array<InputMaybe<StrategyDeposit_Filter>>>;
  strategyId?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  strategyId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_not?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export enum StrategyDeposit_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Contributor = 'contributor',
  Id = 'id',
  StrategyId = 'strategyId',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

export type StrategyFeeUpdateProposed = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  owner: Scalars['Bytes']['output'];
  proposedFee: Scalars['BigInt']['output'];
  strategyId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type StrategyFeeUpdateProposed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StrategyFeeUpdateProposed_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<StrategyFeeUpdateProposed_Filter>>>;
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
  proposedFee?: InputMaybe<Scalars['BigInt']['input']>;
  proposedFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  proposedFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  proposedFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proposedFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  proposedFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  proposedFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  proposedFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  strategyId?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  strategyId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_not?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export enum StrategyFeeUpdateProposed_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Owner = 'owner',
  ProposedFee = 'proposedFee',
  StrategyId = 'strategyId',
  TransactionHash = 'transactionHash'
}

export type StrategyFeeUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  fee: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  isFast: Scalars['Boolean']['output'];
  owner: Scalars['Bytes']['output'];
  strategyId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type StrategyFeeUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StrategyFeeUpdated_Filter>>>;
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
  isFast?: InputMaybe<Scalars['Boolean']['input']>;
  isFast_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isFast_not?: InputMaybe<Scalars['Boolean']['input']>;
  isFast_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  or?: InputMaybe<Array<InputMaybe<StrategyFeeUpdated_Filter>>>;
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
  strategyId?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  strategyId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_not?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export enum StrategyFeeUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Fee = 'fee',
  Id = 'id',
  IsFast = 'isFast',
  Owner = 'owner',
  StrategyId = 'strategyId',
  TransactionHash = 'transactionHash'
}

export type StrategyMaxFeeIncrementUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  strategyMaxFeeIncrement: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type StrategyMaxFeeIncrementUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StrategyMaxFeeIncrementUpdated_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<StrategyMaxFeeIncrementUpdated_Filter>>>;
  strategyMaxFeeIncrement?: InputMaybe<Scalars['BigInt']['input']>;
  strategyMaxFeeIncrement_gt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyMaxFeeIncrement_gte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyMaxFeeIncrement_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  strategyMaxFeeIncrement_lt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyMaxFeeIncrement_lte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyMaxFeeIncrement_not?: InputMaybe<Scalars['BigInt']['input']>;
  strategyMaxFeeIncrement_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export enum StrategyMaxFeeIncrementUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  StrategyMaxFeeIncrement = 'strategyMaxFeeIncrement',
  TransactionHash = 'transactionHash'
}

export type StrategyMaxSharesUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  strategyMaxShares: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type StrategyMaxSharesUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StrategyMaxSharesUpdated_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<StrategyMaxSharesUpdated_Filter>>>;
  strategyMaxShares?: InputMaybe<Scalars['BigInt']['input']>;
  strategyMaxShares_gt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyMaxShares_gte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyMaxShares_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  strategyMaxShares_lt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyMaxShares_lte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyMaxShares_not?: InputMaybe<Scalars['BigInt']['input']>;
  strategyMaxShares_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export enum StrategyMaxSharesUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  StrategyMaxShares = 'strategyMaxShares',
  TransactionHash = 'transactionHash'
}

export type StrategyMetadataUriUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  metadataURI: Scalars['String']['output'];
  strategyId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type StrategyMetadataUriUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StrategyMetadataUriUpdated_Filter>>>;
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
  metadataURI?: InputMaybe<Scalars['String']['input']>;
  metadataURI_contains?: InputMaybe<Scalars['String']['input']>;
  metadataURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_gt?: InputMaybe<Scalars['String']['input']>;
  metadataURI_gte?: InputMaybe<Scalars['String']['input']>;
  metadataURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadataURI_lt?: InputMaybe<Scalars['String']['input']>;
  metadataURI_lte?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadataURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<StrategyMetadataUriUpdated_Filter>>>;
  strategyId?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  strategyId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_not?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export enum StrategyMetadataUriUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  MetadataUri = 'metadataURI',
  StrategyId = 'strategyId',
  TransactionHash = 'transactionHash'
}

export type StrategySlashed = {
  bAppAddress: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  percentage: Scalars['BigInt']['output'];
  receiver: Scalars['Bytes']['output'];
  strategyId: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type StrategySlashed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StrategySlashed_Filter>>>;
  bAppAddress?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  bAppAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bAppAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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
  or?: InputMaybe<Array<InputMaybe<StrategySlashed_Filter>>>;
  percentage?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_gt?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_gte?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  percentage_lt?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_lte?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_not?: InputMaybe<Scalars['BigInt']['input']>;
  percentage_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receiver?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_contains?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_gt?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_gte?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  receiver_lt?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_lte?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  receiver_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  strategyId?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  strategyId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_not?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export enum StrategySlashed_OrderBy {
  BAppAddress = 'bAppAddress',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Percentage = 'percentage',
  Receiver = 'receiver',
  StrategyId = 'strategyId',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

export type StrategyTokenBalance = {
  balance: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  riskValue: Scalars['BigInt']['output'];
  strategy: Strategy;
  token: Scalars['Bytes']['output'];
};

export type StrategyTokenBalance_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StrategyTokenBalance_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<StrategyTokenBalance_Filter>>>;
  riskValue?: InputMaybe<Scalars['BigInt']['input']>;
  riskValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  riskValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  riskValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  riskValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  riskValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  riskValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  riskValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  strategy?: InputMaybe<Scalars['String']['input']>;
  strategy_?: InputMaybe<Strategy_Filter>;
  strategy_contains?: InputMaybe<Scalars['String']['input']>;
  strategy_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  strategy_ends_with?: InputMaybe<Scalars['String']['input']>;
  strategy_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  strategy_gt?: InputMaybe<Scalars['String']['input']>;
  strategy_gte?: InputMaybe<Scalars['String']['input']>;
  strategy_in?: InputMaybe<Array<Scalars['String']['input']>>;
  strategy_lt?: InputMaybe<Scalars['String']['input']>;
  strategy_lte?: InputMaybe<Scalars['String']['input']>;
  strategy_not?: InputMaybe<Scalars['String']['input']>;
  strategy_not_contains?: InputMaybe<Scalars['String']['input']>;
  strategy_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  strategy_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  strategy_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  strategy_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  strategy_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  strategy_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  strategy_starts_with?: InputMaybe<Scalars['String']['input']>;
  strategy_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
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
};

export enum StrategyTokenBalance_OrderBy {
  Balance = 'balance',
  Id = 'id',
  RiskValue = 'riskValue',
  Strategy = 'strategy',
  StrategyFee = 'strategy__fee',
  StrategyFeeProposed = 'strategy__feeProposed',
  StrategyFeeProposedTimestamp = 'strategy__feeProposedTimestamp',
  StrategyId = 'strategy__id',
  StrategyMetadataUri = 'strategy__metadataURI',
  StrategyStrategyId = 'strategy__strategyId',
  Token = 'token'
}

export type StrategyUserBalance = {
  contributor: Account;
  depositAmount: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  proposedWithdrawal: Scalars['BigInt']['output'];
  proposedWithdrawalTimestamp: Scalars['BigInt']['output'];
  strategy: Strategy;
  token: Scalars['Bytes']['output'];
};

export type StrategyUserBalance_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StrategyUserBalance_Filter>>>;
  contributor?: InputMaybe<Scalars['String']['input']>;
  contributor_?: InputMaybe<Account_Filter>;
  contributor_contains?: InputMaybe<Scalars['String']['input']>;
  contributor_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contributor_ends_with?: InputMaybe<Scalars['String']['input']>;
  contributor_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contributor_gt?: InputMaybe<Scalars['String']['input']>;
  contributor_gte?: InputMaybe<Scalars['String']['input']>;
  contributor_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contributor_lt?: InputMaybe<Scalars['String']['input']>;
  contributor_lte?: InputMaybe<Scalars['String']['input']>;
  contributor_not?: InputMaybe<Scalars['String']['input']>;
  contributor_not_contains?: InputMaybe<Scalars['String']['input']>;
  contributor_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contributor_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  contributor_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contributor_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contributor_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  contributor_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contributor_starts_with?: InputMaybe<Scalars['String']['input']>;
  contributor_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  depositAmount?: InputMaybe<Scalars['BigInt']['input']>;
  depositAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  depositAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  depositAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  depositAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  depositAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  depositAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  depositAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  or?: InputMaybe<Array<InputMaybe<StrategyUserBalance_Filter>>>;
  proposedWithdrawal?: InputMaybe<Scalars['BigInt']['input']>;
  proposedWithdrawalTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  proposedWithdrawalTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  proposedWithdrawalTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  proposedWithdrawalTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proposedWithdrawalTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  proposedWithdrawalTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  proposedWithdrawalTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  proposedWithdrawalTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proposedWithdrawal_gt?: InputMaybe<Scalars['BigInt']['input']>;
  proposedWithdrawal_gte?: InputMaybe<Scalars['BigInt']['input']>;
  proposedWithdrawal_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proposedWithdrawal_lt?: InputMaybe<Scalars['BigInt']['input']>;
  proposedWithdrawal_lte?: InputMaybe<Scalars['BigInt']['input']>;
  proposedWithdrawal_not?: InputMaybe<Scalars['BigInt']['input']>;
  proposedWithdrawal_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  strategy?: InputMaybe<Scalars['String']['input']>;
  strategy_?: InputMaybe<Strategy_Filter>;
  strategy_contains?: InputMaybe<Scalars['String']['input']>;
  strategy_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  strategy_ends_with?: InputMaybe<Scalars['String']['input']>;
  strategy_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  strategy_gt?: InputMaybe<Scalars['String']['input']>;
  strategy_gte?: InputMaybe<Scalars['String']['input']>;
  strategy_in?: InputMaybe<Array<Scalars['String']['input']>>;
  strategy_lt?: InputMaybe<Scalars['String']['input']>;
  strategy_lte?: InputMaybe<Scalars['String']['input']>;
  strategy_not?: InputMaybe<Scalars['String']['input']>;
  strategy_not_contains?: InputMaybe<Scalars['String']['input']>;
  strategy_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  strategy_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  strategy_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  strategy_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  strategy_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  strategy_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  strategy_starts_with?: InputMaybe<Scalars['String']['input']>;
  strategy_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
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
};

export enum StrategyUserBalance_OrderBy {
  Contributor = 'contributor',
  ContributorFeeRecipient = 'contributor__feeRecipient',
  ContributorId = 'contributor__id',
  ContributorMetadataUri = 'contributor__metadataURI',
  ContributorNonce = 'contributor__nonce',
  ContributorTotalDelegatedPercentage = 'contributor__totalDelegatedPercentage',
  ContributorValidatorCount = 'contributor__validatorCount',
  DepositAmount = 'depositAmount',
  Id = 'id',
  ProposedWithdrawal = 'proposedWithdrawal',
  ProposedWithdrawalTimestamp = 'proposedWithdrawalTimestamp',
  Strategy = 'strategy',
  StrategyFee = 'strategy__fee',
  StrategyFeeProposed = 'strategy__feeProposed',
  StrategyFeeProposedTimestamp = 'strategy__feeProposedTimestamp',
  StrategyId = 'strategy__id',
  StrategyMetadataUri = 'strategy__metadataURI',
  StrategyStrategyId = 'strategy__strategyId',
  Token = 'token'
}

export type StrategyWithdrawal = {
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  contributor: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  isFast: Scalars['Boolean']['output'];
  strategyId: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type StrategyWithdrawalProposed = {
  account: Scalars['Bytes']['output'];
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  strategyId: Scalars['BigInt']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type StrategyWithdrawalProposed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<StrategyWithdrawalProposed_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<StrategyWithdrawalProposed_Filter>>>;
  strategyId?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  strategyId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_not?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export enum StrategyWithdrawalProposed_OrderBy {
  Account = 'account',
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  StrategyId = 'strategyId',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

export type StrategyWithdrawal_Filter = {
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
  and?: InputMaybe<Array<InputMaybe<StrategyWithdrawal_Filter>>>;
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
  contributor?: InputMaybe<Scalars['Bytes']['input']>;
  contributor_contains?: InputMaybe<Scalars['Bytes']['input']>;
  contributor_gt?: InputMaybe<Scalars['Bytes']['input']>;
  contributor_gte?: InputMaybe<Scalars['Bytes']['input']>;
  contributor_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  contributor_lt?: InputMaybe<Scalars['Bytes']['input']>;
  contributor_lte?: InputMaybe<Scalars['Bytes']['input']>;
  contributor_not?: InputMaybe<Scalars['Bytes']['input']>;
  contributor_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  contributor_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
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
  isFast?: InputMaybe<Scalars['Boolean']['input']>;
  isFast_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isFast_not?: InputMaybe<Scalars['Boolean']['input']>;
  isFast_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  or?: InputMaybe<Array<InputMaybe<StrategyWithdrawal_Filter>>>;
  strategyId?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  strategyId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_not?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export enum StrategyWithdrawal_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Contributor = 'contributor',
  Id = 'id',
  IsFast = 'isFast',
  StrategyId = 'strategyId',
  Token = 'token',
  TransactionHash = 'transactionHash'
}

export type Strategy_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Strategy_Filter>>>;
  bApps_?: InputMaybe<StrategyBAppOptIn_Filter>;
  balances_?: InputMaybe<StrategyTokenBalance_Filter>;
  deposits_?: InputMaybe<StrategyUserBalance_Filter>;
  fee?: InputMaybe<Scalars['BigInt']['input']>;
  feeProposed?: InputMaybe<Scalars['BigInt']['input']>;
  feeProposedTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  feeProposedTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeProposedTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeProposedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeProposedTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeProposedTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeProposedTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeProposedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeProposed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeProposed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeProposed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeProposed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeProposed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeProposed_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeProposed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  metadataURI?: InputMaybe<Scalars['String']['input']>;
  metadataURI_contains?: InputMaybe<Scalars['String']['input']>;
  metadataURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_gt?: InputMaybe<Scalars['String']['input']>;
  metadataURI_gte?: InputMaybe<Scalars['String']['input']>;
  metadataURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadataURI_lt?: InputMaybe<Scalars['String']['input']>;
  metadataURI_lte?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadataURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadataURI_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadataURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Strategy_Filter>>>;
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
  strategyId?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  strategyId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_not?: InputMaybe<Scalars['BigInt']['input']>;
  strategyId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Strategy_OrderBy {
  BApps = 'bApps',
  Balances = 'balances',
  Deposits = 'deposits',
  Fee = 'fee',
  FeeProposed = 'feeProposed',
  FeeProposedTimestamp = 'feeProposedTimestamp',
  Id = 'id',
  MetadataUri = 'metadataURI',
  Owner = 'owner',
  OwnerFeeRecipient = 'owner__feeRecipient',
  OwnerId = 'owner__id',
  OwnerMetadataUri = 'owner__metadataURI',
  OwnerNonce = 'owner__nonce',
  OwnerTotalDelegatedPercentage = 'owner__totalDelegatedPercentage',
  OwnerValidatorCount = 'owner__validatorCount',
  StrategyId = 'strategyId'
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
  ClusterId = 'cluster__id',
  ClusterIndex = 'cluster__index',
  ClusterLastUpdateBlockNumber = 'cluster__lastUpdateBlockNumber',
  ClusterLastUpdateBlockTimestamp = 'cluster__lastUpdateBlockTimestamp',
  ClusterLastUpdateTransactionHash = 'cluster__lastUpdateTransactionHash',
  ClusterNetworkFeeIndex = 'cluster__networkFeeIndex',
  ClusterValidatorCount = 'cluster__validatorCount',
  Id = 'id',
  LastUpdateBlockNumber = 'lastUpdateBlockNumber',
  LastUpdateBlockTimestamp = 'lastUpdateBlockTimestamp',
  LastUpdateTransactionHash = 'lastUpdateTransactionHash',
  Operators = 'operators',
  Owner = 'owner',
  OwnerFeeRecipient = 'owner__feeRecipient',
  OwnerId = 'owner__id',
  OwnerMetadataUri = 'owner__metadataURI',
  OwnerNonce = 'owner__nonce',
  OwnerTotalDelegatedPercentage = 'owner__totalDelegatedPercentage',
  OwnerValidatorCount = 'owner__validatorCount',
  Removed = 'removed',
  Shares = 'shares'
}

export type WithdrawalExpireTimeUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  withdrawalExpireTime: Scalars['BigInt']['output'];
};

export type WithdrawalExpireTimeUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<WithdrawalExpireTimeUpdated_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<WithdrawalExpireTimeUpdated_Filter>>>;
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
  withdrawalExpireTime?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalExpireTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalExpireTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalExpireTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  withdrawalExpireTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalExpireTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalExpireTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalExpireTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum WithdrawalExpireTimeUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash',
  WithdrawalExpireTime = 'withdrawalExpireTime'
}

export type WithdrawalTimelockPeriodUpdated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  withdrawalTimelockPeriod: Scalars['BigInt']['output'];
};

export type WithdrawalTimelockPeriodUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<WithdrawalTimelockPeriodUpdated_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<WithdrawalTimelockPeriodUpdated_Filter>>>;
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
  withdrawalTimelockPeriod?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalTimelockPeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalTimelockPeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalTimelockPeriod_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  withdrawalTimelockPeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalTimelockPeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalTimelockPeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalTimelockPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum WithdrawalTimelockPeriodUpdated_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash',
  WithdrawalTimelockPeriod = 'withdrawalTimelockPeriod'
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


export type GetClusterQuery = { cluster?: { active: boolean, validatorCount: string, balance: string, index: string, networkFeeIndex: string, operatorIds: Array<string>, owner: { id: Address } } | null };

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


export type GetOperatorsQuery = { operators: Array<{ id: string, publicKey: Address, validatorCount: string, isPrivate: boolean, whitelistedContract: Address, whitelisted: Array<{ id: Address }> }> };

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


export const GetClusterSnapshotDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClusterSnapshot"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cluster"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"validatorCount"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"networkFeeIndex"}}]}}]}}]} as unknown as DocumentNode<GetClusterSnapshotQuery, GetClusterSnapshotQueryVariables>;
export const GetClusterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCluster"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cluster"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"validatorCount"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"networkFeeIndex"}},{"kind":"Field","name":{"kind":"Name","value":"operatorIds"}}]}}]}}]} as unknown as DocumentNode<GetClusterQuery, GetClusterQueryVariables>;
export const GetClustersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClusters"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clusters"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"owner"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"validatorCount"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"networkFeeIndex"}},{"kind":"Field","name":{"kind":"Name","value":"operatorIds"}}]}}]}}]} as unknown as DocumentNode<GetClustersQuery, GetClustersQueryVariables>;
export const GetOwnerNonceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOwnerNonce"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}}]}}]} as unknown as DocumentNode<GetOwnerNonceQuery, GetOwnerNonceQueryVariables>;
export const GetOwnerNonceByBlockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOwnerNonceByBlock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"block"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}},{"kind":"Argument","name":{"kind":"Name","value":"block"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"block"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}}]}}]} as unknown as DocumentNode<GetOwnerNonceByBlockQuery, GetOwnerNonceByBlockQueryVariables>;
export const GetOperatorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOperator"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"operator"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"validatorCount"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"whitelistedContract"}},{"kind":"Field","name":{"kind":"Name","value":"whitelisted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetOperatorQuery, GetOperatorQueryVariables>;
export const GetOperatorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOperators"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"operatorIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"operators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"operatorIds"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"validatorCount"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"whitelistedContract"}},{"kind":"Field","name":{"kind":"Name","value":"whitelisted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetOperatorsQuery, GetOperatorsQueryVariables>;
export const GetValidatorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetValidators"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Bytes"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"validators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetValidatorsQuery, GetValidatorsQueryVariables>;
export const GetValidatorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetValidator"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"validator"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetValidatorQuery, GetValidatorQueryVariables>;
export const GetClusterBalanceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClusterBalance"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clusterId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"daoAddress"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"operatorIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"number"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"daovalues"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"daoAddress"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"networkFee"}},{"kind":"Field","name":{"kind":"Name","value":"networkFeeIndex"}},{"kind":"Field","name":{"kind":"Name","value":"networkFeeIndexBlockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"liquidationThreshold"}},{"kind":"Field","name":{"kind":"Name","value":"minimumLiquidationCollateral"}}]}},{"kind":"Field","name":{"kind":"Name","value":"operators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"operatorIds"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"feeIndex"}},{"kind":"Field","name":{"kind":"Name","value":"feeIndexBlockNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cluster"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clusterId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"validatorCount"}},{"kind":"Field","name":{"kind":"Name","value":"networkFeeIndex"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}}]}}]} as unknown as DocumentNode<GetClusterBalanceQuery, GetClusterBalanceQueryVariables>;
