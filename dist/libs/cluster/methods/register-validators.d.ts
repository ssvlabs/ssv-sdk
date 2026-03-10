import { ConfigReturnType } from '../../../config/create';
import { SmartFnWriteOptions } from '../../../contract-interactions/types';
import { IKeySharesPartialPayload } from '../../ssv-keys/interfaces';
import { KeySharesItem } from '../../ssv-keys/KeyShares/KeySharesItem';
import { KeySharesPayload } from '../../ssv-keys/KeyShares/KeySharesData/KeySharesPayload';
import { SSVKeys } from '../../ssv-keys/SSVKeys';
import { Address, Hex } from 'viem';
type RegisterValidatorsProps = SmartFnWriteOptions<{
    keyshares: KeySharesItem[] | KeySharesPayload[] | IKeySharesPartialPayload[];
    depositAmount?: bigint;
    ownerAddress?: Address;
}>;
export declare const registerValidators: (config: ConfigReturnType, { args: { keyshares, depositAmount }, ...writeOptions }: RegisterValidatorsProps) => Promise<{
    hash: import('viem').Hash;
    wait: () => Promise<import('viem').TransactionReceipt & {
        events: ({
            eventName: "AdminChanged";
            args: {
                previousAdmin: `0x${string}`;
                newAdmin: `0x${string}`;
            };
        } | {
            eventName: "BeaconUpgraded";
            args: {
                beacon: `0x${string}`;
            };
        } | {
            eventName: "Initialized";
            args: {
                version: number;
            };
        } | {
            eventName: "OwnershipTransferStarted";
            args: {
                previousOwner: `0x${string}`;
                newOwner: `0x${string}`;
            };
        } | {
            eventName: "OwnershipTransferred";
            args: {
                previousOwner: `0x${string}`;
                newOwner: `0x${string}`;
            };
        } | {
            eventName: "Upgraded";
            args: {
                implementation: `0x${string}`;
            };
        } | {
            eventName: "ClusterBalanceUpdated";
            args: {
                owner: `0x${string}`;
                operatorIds: readonly bigint[];
                blockNum: bigint;
                effectiveBalance: number;
                cluster: {
                    validatorCount: number;
                    networkFeeIndex: bigint;
                    index: bigint;
                    active: boolean;
                    balance: bigint;
                };
            };
        } | {
            eventName: "ClusterDeposited";
            args: {
                owner: `0x${string}`;
                operatorIds: readonly bigint[];
                value: bigint;
                cluster: {
                    validatorCount: number;
                    networkFeeIndex: bigint;
                    index: bigint;
                    active: boolean;
                    balance: bigint;
                };
            };
        } | {
            eventName: "ClusterLiquidated";
            args: {
                owner: `0x${string}`;
                operatorIds: readonly bigint[];
                cluster: {
                    validatorCount: number;
                    networkFeeIndex: bigint;
                    index: bigint;
                    active: boolean;
                    balance: bigint;
                };
            };
        } | {
            eventName: "ClusterMigratedToETH";
            args: {
                owner: `0x${string}`;
                operatorIds: readonly bigint[];
                ethDeposited: bigint;
                ssvRefunded: bigint;
                effectiveBalance: number;
                cluster: {
                    validatorCount: number;
                    networkFeeIndex: bigint;
                    index: bigint;
                    active: boolean;
                    balance: bigint;
                };
            };
        } | {
            eventName: "ClusterReactivated";
            args: {
                owner: `0x${string}`;
                operatorIds: readonly bigint[];
                cluster: {
                    validatorCount: number;
                    networkFeeIndex: bigint;
                    index: bigint;
                    active: boolean;
                    balance: bigint;
                };
            };
        } | {
            eventName: "ClusterWithdrawn";
            args: {
                owner: `0x${string}`;
                operatorIds: readonly bigint[];
                value: bigint;
                cluster: {
                    validatorCount: number;
                    networkFeeIndex: bigint;
                    index: bigint;
                    active: boolean;
                    balance: bigint;
                };
            };
        } | {
            eventName: "CooldownDurationUpdated";
            args: {
                newCooldownDuration: bigint;
            };
        } | {
            eventName: "DeclareOperatorFeePeriodUpdated";
            args: {
                value: bigint;
            };
        } | {
            eventName: "ERC20Rescued";
            args: {
                token: `0x${string}`;
                to: `0x${string}`;
                amount: bigint;
            };
        } | {
            eventName: "ExecuteOperatorFeePeriodUpdated";
            args: {
                value: bigint;
            };
        } | {
            eventName: "FeeRecipientAddressUpdated";
            args: {
                owner: `0x${string}`;
                recipientAddress: `0x${string}`;
            };
        } | {
            eventName: "FeesSynced";
            args: {
                newFeesWei: bigint;
                accEthPerShare: bigint;
            };
        } | {
            eventName: "LiquidationThresholdPeriodSSVUpdated";
            args: {
                value: bigint;
            };
        } | {
            eventName: "LiquidationThresholdPeriodUpdated";
            args: {
                value: bigint;
            };
        } | {
            eventName: "MinBlocksBetweenUpdatesUpdated";
            args: {
                newMinBlocksBetweenUpdates: number;
            };
        } | {
            eventName: "MinimumLiquidationCollateralSSVUpdated";
            args: {
                value: bigint;
            };
        } | {
            eventName: "MinimumLiquidationCollateralUpdated";
            args: {
                value: bigint;
            };
        } | {
            eventName: "MinimumOperatorEthFeeUpdated";
            args: {
                minFee: bigint;
            };
        } | {
            eventName: "ModuleUpgraded";
            args: {
                moduleId: number;
                moduleAddress: `0x${string}`;
            };
        } | {
            eventName: "NetworkEarningsWithdrawn";
            args: {
                value: bigint;
                recipient: `0x${string}`;
            };
        } | {
            eventName: "NetworkFeeUpdated";
            args: {
                oldFee: bigint;
                newFee: bigint;
            };
        } | {
            eventName: "NetworkFeeUpdatedSSV";
            args: {
                oldFee: bigint;
                newFee: bigint;
            };
        } | {
            eventName: "OperatorAdded";
            args: {
                operatorId: bigint;
                owner: `0x${string}`;
                publicKey: `0x${string}`;
                fee: bigint;
            };
        } | {
            eventName: "OperatorFeeDeclarationCancelled";
            args: {
                owner: `0x${string}`;
                operatorId: bigint;
            };
        } | {
            eventName: "OperatorFeeDeclared";
            args: {
                owner: `0x${string}`;
                operatorId: bigint;
                blockNumber: bigint;
                fee: bigint;
            };
        } | {
            eventName: "OperatorFeeExecuted";
            args: {
                owner: `0x${string}`;
                operatorId: bigint;
                blockNumber: bigint;
                fee: bigint;
            };
        } | {
            eventName: "OperatorFeeIncreaseLimitUpdated";
            args: {
                value: bigint;
            };
        } | {
            eventName: "OperatorMaximumFeeUpdated";
            args: {
                maxFee: bigint;
            };
        } | {
            eventName: "OperatorMultipleWhitelistRemoved";
            args: {
                operatorIds: readonly bigint[];
                whitelistAddresses: readonly `0x${string}`[];
            };
        } | {
            eventName: "OperatorMultipleWhitelistUpdated";
            args: {
                operatorIds: readonly bigint[];
                whitelistAddresses: readonly `0x${string}`[];
            };
        } | {
            eventName: "OperatorPrivacyStatusUpdated";
            args: {
                operatorIds: readonly bigint[];
                toPrivate: boolean;
            };
        } | {
            eventName: "OperatorRemoved";
            args: {
                operatorId: bigint;
            };
        } | {
            eventName: "OperatorWhitelistUpdated";
            args: {
                operatorId: bigint;
                whitelisted: `0x${string}`;
            };
        } | {
            eventName: "OperatorWhitelistingContractUpdated";
            args: {
                operatorIds: readonly bigint[];
                whitelistingContract: `0x${string}`;
            };
        } | {
            eventName: "OperatorWithdrawn";
            args: {
                owner: `0x${string}`;
                operatorId: bigint;
                value: bigint;
            };
        } | {
            eventName: "OperatorWithdrawnSSV";
            args: {
                owner: `0x${string}`;
                operatorId: bigint;
                value: bigint;
            };
        } | {
            eventName: "OracleReplaced";
            args: {
                oracleId: number;
                oldOracle: `0x${string}`;
                newOracle: `0x${string}`;
            };
        } | {
            eventName: "QuorumUpdated";
            args: {
                newQuorum: number;
            };
        } | {
            eventName: "RewardsClaimed";
            args: {
                user: `0x${string}`;
                amount: bigint;
            };
        } | {
            eventName: "RewardsSettled";
            args: {
                user: `0x${string}`;
                pending: bigint;
                accrued: bigint;
                userIndex: bigint;
            };
        } | {
            eventName: "RootCommitted";
            args: {
                merkleRoot: `0x${string}`;
                blockNum: bigint;
            };
        } | {
            eventName: "SSVNetworkUpgradeBlock";
            args: {
                version: string;
                blockNumber: bigint;
            };
        } | {
            eventName: "Staked";
            args: {
                user: `0x${string}`;
                amount: bigint;
            };
        } | {
            eventName: "UnstakeRequested";
            args: {
                user: `0x${string}`;
                amount: bigint;
                unlockTime: bigint;
            };
        } | {
            eventName: "UnstakedWithdrawn";
            args: {
                user: `0x${string}`;
                amount: bigint;
            };
        } | {
            eventName: "ValidatorAdded";
            args: {
                owner: `0x${string}`;
                operatorIds: readonly bigint[];
                publicKey: `0x${string}`;
                shares: `0x${string}`;
                cluster: {
                    validatorCount: number;
                    networkFeeIndex: bigint;
                    index: bigint;
                    active: boolean;
                    balance: bigint;
                };
            };
        } | {
            eventName: "ValidatorExited";
            args: {
                owner: `0x${string}`;
                operatorIds: readonly bigint[];
                publicKey: `0x${string}`;
            };
        } | {
            eventName: "ValidatorRemoved";
            args: {
                owner: `0x${string}`;
                operatorIds: readonly bigint[];
                publicKey: `0x${string}`;
                cluster: {
                    validatorCount: number;
                    networkFeeIndex: bigint;
                    index: bigint;
                    active: boolean;
                    balance: bigint;
                };
            };
        } | {
            eventName: "WeightedRootProposed";
            args: {
                merkleRoot: `0x${string}`;
                blockNum: bigint;
                accumulatedWeight: bigint;
                quorum: bigint;
                oracleId: number;
                oracle: `0x${string}`;
            };
        } | {
            eventName: "OwnershipTransferred";
            args: {
                previousOwner: `0x${string}`;
                newOwner: `0x${string}`;
            };
        } | {
            eventName: "Approval";
            args: {
                owner: `0x${string}`;
                spender: `0x${string}`;
                value: bigint;
            };
        } | {
            eventName: "Transfer";
            args: {
                from: `0x${string}`;
                to: `0x${string}`;
                value: bigint;
            };
        })[];
    }>;
}>;
export declare const registerValidatorsRawData: (config: ConfigReturnType, { args: { keyshares, ownerAddress } }: RegisterValidatorsProps) => Promise<`0x${string}`>;
declare const ssvKeys: SSVKeys;
export declare const validateSharesPostRegistration: (config: ConfigReturnType, args: {
    txHash: Hex;
    ownerAddress?: Address;
}) => Promise<{
    isValid: boolean;
    validations: {
        event: import('viem').Log<bigint, number, false, undefined, undefined, readonly [{
            readonly inputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "constructor";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "contractAddress";
                readonly type: "address";
            }];
            readonly name: "AddressIsWhitelistingContract";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "AlreadyVoted";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "ApprovalNotWithinTimeframe";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "CallerNotOwner";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "caller";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }];
            readonly name: "CallerNotOwnerWithData";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "CallerNotWhitelisted";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }];
            readonly name: "CallerNotWhitelistedWithData";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "ClusterAlreadyEnabled";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "ClusterDoesNotExist";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "ClusterIsLiquidated";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "ClusterNotLiquidatable";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "EBBelowMinimum";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "EBExceedsMaximum";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "ETHTransferFailed";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "EmptyPublicKeysList";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }];
            readonly name: "ExceedValidatorLimit";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }];
            readonly name: "ExceedValidatorLimitWithData";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "FeeExceedsIncreaseLimit";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "FeeIncreaseNotAllowed";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "FeeTooHigh";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "FeeTooLow";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "FutureBlockNumber";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "IncorrectClusterState";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "IncorrectClusterVersion";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint8";
                readonly name: "operatorVersion";
                readonly type: "uint8";
            }];
            readonly name: "IncorrectOperatorVersion";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "IncorrectValidatorState";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes";
                readonly name: "publicKey";
                readonly type: "bytes";
            }];
            readonly name: "IncorrectValidatorStateWithData";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "InsufficientBalance";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "InvalidOperatorIdsLength";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "InvalidOracleId";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "InvalidProof";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "InvalidPublicKeyLength";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "InvalidQuorum";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "InvalidToken";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "InvalidWhitelistAddressesLength";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "contractAddress";
                readonly type: "address";
            }];
            readonly name: "InvalidWhitelistingContract";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "LegacyOperatorFeeDeclarationInvalid";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "MaxPrecisionExceeded";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "MaxRequestsAmountReached";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "MaxValueExceeded";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "MaxValueExceeded";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "MustUseLatestRoot";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "NewBlockPeriodIsBelowMinimum";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "NoFeeDeclared";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "NotCSSV";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "NotOracle";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "NothingToClaim";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "NothingToWithdraw";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "OperatorAlreadyExists";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "OperatorDoesNotExist";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "OperatorsListNotUnique";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "OracleAlreadyAssigned";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "OracleHasZeroWeight";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "PublicKeysSharesLengthMismatch";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "RootNotFound";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "SameFeeChangeNotAllowed";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "SameOracleAddressNotAllowed";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "StakeTooLow";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "StaleBlockNumber";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "StaleUpdate";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "TargetModuleDoesNotExist";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint8";
                readonly name: "moduleId";
                readonly type: "uint8";
            }];
            readonly name: "TargetModuleDoesNotExistWithData";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "TokenTransferFailed";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "UnsortedOperatorsList";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "UnstakeAmountExceedsBalance";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "UpdateTooFrequent";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "ValidatorAlreadyExists";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes";
                readonly name: "publicKey";
                readonly type: "bytes";
            }];
            readonly name: "ValidatorAlreadyExistsWithData";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes";
                readonly name: "publicKey";
                readonly type: "bytes";
            }, {
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }];
            readonly name: "ValidatorAlreadyRegistered";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "ValidatorDoesNotExist";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "ZeroAddress";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "ZeroAddressNotAllowed";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "ZeroAmount";
            readonly type: "error";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "address";
                readonly name: "previousAdmin";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "address";
                readonly name: "newAdmin";
                readonly type: "address";
            }];
            readonly name: "AdminChanged";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "beacon";
                readonly type: "address";
            }];
            readonly name: "BeaconUpgraded";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly indexed: true;
                readonly internalType: "uint64";
                readonly name: "blockNum";
                readonly type: "uint64";
            }, {
                readonly indexed: false;
                readonly internalType: "uint32";
                readonly name: "effectiveBalance";
                readonly type: "uint32";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly indexed: false;
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "ClusterBalanceUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly indexed: false;
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "ClusterDeposited";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly indexed: false;
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "ClusterLiquidated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "ethDeposited";
                readonly type: "uint256";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "ssvRefunded";
                readonly type: "uint256";
            }, {
                readonly indexed: false;
                readonly internalType: "uint32";
                readonly name: "effectiveBalance";
                readonly type: "uint32";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly indexed: false;
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "ClusterMigratedToETH";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly indexed: false;
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "ClusterReactivated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly indexed: false;
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "ClusterWithdrawn";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint64";
                readonly name: "newCooldownDuration";
                readonly type: "uint64";
            }];
            readonly name: "CooldownDurationUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint64";
                readonly name: "value";
                readonly type: "uint64";
            }];
            readonly name: "DeclareOperatorFeePeriodUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "ERC20Rescued";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint64";
                readonly name: "value";
                readonly type: "uint64";
            }];
            readonly name: "ExecuteOperatorFeePeriodUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "address";
                readonly name: "recipientAddress";
                readonly type: "address";
            }];
            readonly name: "FeeRecipientAddressUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "newFeesWei";
                readonly type: "uint256";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "accEthPerShare";
                readonly type: "uint256";
            }];
            readonly name: "FeesSynced";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint8";
                readonly name: "version";
                readonly type: "uint8";
            }];
            readonly name: "Initialized";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint64";
                readonly name: "value";
                readonly type: "uint64";
            }];
            readonly name: "LiquidationThresholdPeriodSSVUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint64";
                readonly name: "value";
                readonly type: "uint64";
            }];
            readonly name: "LiquidationThresholdPeriodUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint32";
                readonly name: "newMinBlocksBetweenUpdates";
                readonly type: "uint32";
            }];
            readonly name: "MinBlocksBetweenUpdatesUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }];
            readonly name: "MinimumLiquidationCollateralSSVUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }];
            readonly name: "MinimumLiquidationCollateralUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "minFee";
                readonly type: "uint256";
            }];
            readonly name: "MinimumOperatorEthFeeUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "enum SSVModules";
                readonly name: "moduleId";
                readonly type: "uint8";
            }, {
                readonly indexed: false;
                readonly internalType: "address";
                readonly name: "moduleAddress";
                readonly type: "address";
            }];
            readonly name: "ModuleUpgraded";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }, {
                readonly indexed: false;
                readonly internalType: "address";
                readonly name: "recipient";
                readonly type: "address";
            }];
            readonly name: "NetworkEarningsWithdrawn";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "oldFee";
                readonly type: "uint256";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "newFee";
                readonly type: "uint256";
            }];
            readonly name: "NetworkFeeUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "oldFee";
                readonly type: "uint256";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "newFee";
                readonly type: "uint256";
            }];
            readonly name: "NetworkFeeUpdatedSSV";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }, {
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "bytes";
                readonly name: "publicKey";
                readonly type: "bytes";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "fee";
                readonly type: "uint256";
            }];
            readonly name: "OperatorAdded";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }];
            readonly name: "OperatorFeeDeclarationCancelled";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "blockNumber";
                readonly type: "uint256";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "fee";
                readonly type: "uint256";
            }];
            readonly name: "OperatorFeeDeclared";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "blockNumber";
                readonly type: "uint256";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "fee";
                readonly type: "uint256";
            }];
            readonly name: "OperatorFeeExecuted";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint64";
                readonly name: "value";
                readonly type: "uint64";
            }];
            readonly name: "OperatorFeeIncreaseLimitUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "maxFee";
                readonly type: "uint256";
            }];
            readonly name: "OperatorMaximumFeeUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly indexed: false;
                readonly internalType: "address[]";
                readonly name: "whitelistAddresses";
                readonly type: "address[]";
            }];
            readonly name: "OperatorMultipleWhitelistRemoved";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly indexed: false;
                readonly internalType: "address[]";
                readonly name: "whitelistAddresses";
                readonly type: "address[]";
            }];
            readonly name: "OperatorMultipleWhitelistUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly indexed: false;
                readonly internalType: "bool";
                readonly name: "toPrivate";
                readonly type: "bool";
            }];
            readonly name: "OperatorPrivacyStatusUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }];
            readonly name: "OperatorRemoved";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }, {
                readonly indexed: false;
                readonly internalType: "address";
                readonly name: "whitelisted";
                readonly type: "address";
            }];
            readonly name: "OperatorWhitelistUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly indexed: false;
                readonly internalType: "address";
                readonly name: "whitelistingContract";
                readonly type: "address";
            }];
            readonly name: "OperatorWhitelistingContractUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }];
            readonly name: "OperatorWithdrawn";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }];
            readonly name: "OperatorWithdrawnSSV";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "uint32";
                readonly name: "oracleId";
                readonly type: "uint32";
            }, {
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "oldOracle";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "newOracle";
                readonly type: "address";
            }];
            readonly name: "OracleReplaced";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "previousOwner";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "newOwner";
                readonly type: "address";
            }];
            readonly name: "OwnershipTransferStarted";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "previousOwner";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "newOwner";
                readonly type: "address";
            }];
            readonly name: "OwnershipTransferred";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint16";
                readonly name: "newQuorum";
                readonly type: "uint16";
            }];
            readonly name: "QuorumUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "RewardsClaimed";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "pending";
                readonly type: "uint256";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "accrued";
                readonly type: "uint256";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "userIndex";
                readonly type: "uint256";
            }];
            readonly name: "RewardsSettled";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "bytes32";
                readonly name: "merkleRoot";
                readonly type: "bytes32";
            }, {
                readonly indexed: true;
                readonly internalType: "uint64";
                readonly name: "blockNum";
                readonly type: "uint64";
            }];
            readonly name: "RootCommitted";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "string";
                readonly name: "version";
                readonly type: "string";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "blockNumber";
                readonly type: "uint256";
            }];
            readonly name: "SSVNetworkUpgradeBlock";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "Staked";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "unlockTime";
                readonly type: "uint256";
            }];
            readonly name: "UnstakeRequested";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "UnstakedWithdrawn";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "implementation";
                readonly type: "address";
            }];
            readonly name: "Upgraded";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly indexed: false;
                readonly internalType: "bytes";
                readonly name: "publicKey";
                readonly type: "bytes";
            }, {
                readonly indexed: false;
                readonly internalType: "bytes";
                readonly name: "shares";
                readonly type: "bytes";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly indexed: false;
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "ValidatorAdded";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly indexed: false;
                readonly internalType: "bytes";
                readonly name: "publicKey";
                readonly type: "bytes";
            }];
            readonly name: "ValidatorExited";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly indexed: false;
                readonly internalType: "bytes";
                readonly name: "publicKey";
                readonly type: "bytes";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly indexed: false;
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "ValidatorRemoved";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "bytes32";
                readonly name: "merkleRoot";
                readonly type: "bytes32";
            }, {
                readonly indexed: true;
                readonly internalType: "uint64";
                readonly name: "blockNum";
                readonly type: "uint64";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "accumulatedWeight";
                readonly type: "uint256";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "quorum";
                readonly type: "uint256";
            }, {
                readonly indexed: false;
                readonly internalType: "uint32";
                readonly name: "oracleId";
                readonly type: "uint32";
            }, {
                readonly indexed: false;
                readonly internalType: "address";
                readonly name: "oracle";
                readonly type: "address";
            }];
            readonly name: "WeightedRootProposed";
            readonly type: "event";
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "fallback";
        }, {
            readonly inputs: readonly [];
            readonly name: "acceptOwnership";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes[]";
                readonly name: "publicKeys";
                readonly type: "bytes[]";
            }, {
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }];
            readonly name: "bulkExitValidator";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes[]";
                readonly name: "publicKeys";
                readonly type: "bytes[]";
            }, {
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly internalType: "bytes[]";
                readonly name: "sharesData";
                readonly type: "bytes[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "bulkRegisterValidator";
            readonly outputs: readonly [];
            readonly stateMutability: "payable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes[]";
                readonly name: "publicKeys";
                readonly type: "bytes[]";
            }, {
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "bulkRemoveValidator";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }];
            readonly name: "cancelDeclaredOperatorFee";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "claimEthRewards";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes32";
                readonly name: "merkleRoot";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "blockNum";
                readonly type: "uint64";
            }];
            readonly name: "commitRoot";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint256";
                readonly name: "fee";
                readonly type: "uint256";
            }];
            readonly name: "declareOperatorFee";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "clusterOwner";
                readonly type: "address";
            }, {
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "deposit";
            readonly outputs: readonly [];
            readonly stateMutability: "payable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }];
            readonly name: "executeOperatorFee";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes";
                readonly name: "publicKey";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }];
            readonly name: "exitValidator";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "getVersion";
            readonly outputs: readonly [{
                readonly internalType: "string";
                readonly name: "version";
                readonly type: "string";
            }];
            readonly stateMutability: "pure";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "contract IERC20";
                readonly name: "token_";
                readonly type: "address";
            }, {
                readonly internalType: "contract ISSVOperators";
                readonly name: "ssvOperators_";
                readonly type: "address";
            }, {
                readonly internalType: "contract ISSVClusters";
                readonly name: "ssvClusters_";
                readonly type: "address";
            }, {
                readonly internalType: "contract ISSVDAO";
                readonly name: "ssvDAO_";
                readonly type: "address";
            }, {
                readonly internalType: "contract ISSVViews";
                readonly name: "ssvViews_";
                readonly type: "address";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint64";
                    readonly name: "minimumBlocksBeforeLiquidation";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "minimumLiquidationCollateral";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "validatorsPerOperatorLimit";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "declareOperatorFeePeriod";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "executeOperatorFeePeriod";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "operatorMaxFeeIncrease";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint32[4]";
                    readonly name: "defaultOracleIds";
                    readonly type: "uint32[4]";
                }, {
                    readonly internalType: "uint16";
                    readonly name: "quorumBps";
                    readonly type: "uint16";
                }];
                readonly internalType: "struct ISSVNetwork.NetworkInitParams";
                readonly name: "params";
                readonly type: "tuple";
            }];
            readonly name: "initialize";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "clusterOwner";
                readonly type: "address";
            }, {
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "liquidate";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "clusterOwner";
                readonly type: "address";
            }, {
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "liquidateSSV";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "migrateClusterToETH";
            readonly outputs: readonly [];
            readonly stateMutability: "payable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "onCSSVTransfer";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "owner";
            readonly outputs: readonly [{
                readonly internalType: "address";
                readonly name: "";
                readonly type: "address";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "pendingOwner";
            readonly outputs: readonly [{
                readonly internalType: "address";
                readonly name: "";
                readonly type: "address";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "proxiableUUID";
            readonly outputs: readonly [{
                readonly internalType: "bytes32";
                readonly name: "";
                readonly type: "bytes32";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "reactivate";
            readonly outputs: readonly [];
            readonly stateMutability: "payable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint256";
                readonly name: "fee";
                readonly type: "uint256";
            }];
            readonly name: "reduceOperatorFee";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes";
                readonly name: "publicKey";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint256";
                readonly name: "fee";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "setPrivate";
                readonly type: "bool";
            }];
            readonly name: "registerOperator";
            readonly outputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "id";
                readonly type: "uint64";
            }];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes";
                readonly name: "publicKey";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly internalType: "bytes";
                readonly name: "sharesData";
                readonly type: "bytes";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "registerValidator";
            readonly outputs: readonly [];
            readonly stateMutability: "payable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }];
            readonly name: "removeOperator";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }];
            readonly name: "removeOperatorsWhitelistingContract";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly internalType: "address[]";
                readonly name: "whitelistAddresses";
                readonly type: "address[]";
            }];
            readonly name: "removeOperatorsWhitelists";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes";
                readonly name: "publicKey";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "removeValidator";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "renounceOwnership";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint32";
                readonly name: "oracleId";
                readonly type: "uint32";
            }, {
                readonly internalType: "address";
                readonly name: "newOracle";
                readonly type: "address";
            }];
            readonly name: "replaceOracle";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "requestUnstake";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "rescueERC20";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "recipientAddress";
                readonly type: "address";
            }];
            readonly name: "setFeeRecipientAddress";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }];
            readonly name: "setOperatorsPrivateUnchecked";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }];
            readonly name: "setOperatorsPublicUnchecked";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly internalType: "contract ISSVWhitelistingContract";
                readonly name: "whitelistingContract";
                readonly type: "address";
            }];
            readonly name: "setOperatorsWhitelistingContract";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly internalType: "address[]";
                readonly name: "whitelistAddresses";
                readonly type: "address[]";
            }];
            readonly name: "setOperatorsWhitelists";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint16";
                readonly name: "quorum";
                readonly type: "uint16";
            }];
            readonly name: "setQuorumBps";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "duration";
                readonly type: "uint64";
            }];
            readonly name: "setUnstakeCooldownDuration";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "stake";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "syncFees";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "newOwner";
                readonly type: "address";
            }];
            readonly name: "transferOwnership";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "blockNum";
                readonly type: "uint64";
            }, {
                readonly internalType: "address";
                readonly name: "clusterOwner";
                readonly type: "address";
            }, {
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint32";
                readonly name: "effectiveBalance";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32[]";
                readonly name: "merkleProof";
                readonly type: "bytes32[]";
            }];
            readonly name: "updateClusterBalance";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "timeInSeconds";
                readonly type: "uint64";
            }];
            readonly name: "updateDeclareOperatorFeePeriod";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "timeInSeconds";
                readonly type: "uint64";
            }];
            readonly name: "updateExecuteOperatorFeePeriod";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "blocks";
                readonly type: "uint64";
            }];
            readonly name: "updateLiquidationThresholdPeriod";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "blocks";
                readonly type: "uint64";
            }];
            readonly name: "updateLiquidationThresholdPeriodSSV";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "maxFee";
                readonly type: "uint256";
            }];
            readonly name: "updateMaximumOperatorFee";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint32";
                readonly name: "blocks";
                readonly type: "uint32";
            }];
            readonly name: "updateMinBlocksBetweenUpdates";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "updateMinimumLiquidationCollateral";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "updateMinimumLiquidationCollateralSSV";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "minFee";
                readonly type: "uint256";
            }];
            readonly name: "updateMinimumOperatorEthFee";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "enum SSVModules";
                readonly name: "moduleId";
                readonly type: "uint8";
            }, {
                readonly internalType: "address";
                readonly name: "moduleAddress";
                readonly type: "address";
            }];
            readonly name: "updateModule";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "fee";
                readonly type: "uint256";
            }];
            readonly name: "updateNetworkFee";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "fee";
                readonly type: "uint256";
            }];
            readonly name: "updateNetworkFeeSSV";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "percentage";
                readonly type: "uint64";
            }];
            readonly name: "updateOperatorFeeIncreaseLimit";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "newImplementation";
                readonly type: "address";
            }];
            readonly name: "upgradeTo";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "newImplementation";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly name: "upgradeToAndCall";
            readonly outputs: readonly [];
            readonly stateMutability: "payable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "withdraw";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }];
            readonly name: "withdrawAllOperatorEarnings";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }];
            readonly name: "withdrawAllOperatorEarningsSSV";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }];
            readonly name: "withdrawAllVersionOperatorEarnings";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "withdrawNetworkSSVEarnings";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "withdrawOperatorEarnings";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "withdrawOperatorEarningsSSV";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "withdrawUnlocked";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }], "ValidatorAdded">;
        validation: Awaited<ReturnType<typeof ssvKeys.validateSharesPostRegistration>>;
    }[];
    invalids: {
        event: import('viem').Log<bigint, number, false, undefined, undefined, readonly [{
            readonly inputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "constructor";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "contractAddress";
                readonly type: "address";
            }];
            readonly name: "AddressIsWhitelistingContract";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "AlreadyVoted";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "ApprovalNotWithinTimeframe";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "CallerNotOwner";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "caller";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }];
            readonly name: "CallerNotOwnerWithData";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "CallerNotWhitelisted";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }];
            readonly name: "CallerNotWhitelistedWithData";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "ClusterAlreadyEnabled";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "ClusterDoesNotExist";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "ClusterIsLiquidated";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "ClusterNotLiquidatable";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "EBBelowMinimum";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "EBExceedsMaximum";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "ETHTransferFailed";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "EmptyPublicKeysList";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }];
            readonly name: "ExceedValidatorLimit";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }];
            readonly name: "ExceedValidatorLimitWithData";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "FeeExceedsIncreaseLimit";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "FeeIncreaseNotAllowed";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "FeeTooHigh";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "FeeTooLow";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "FutureBlockNumber";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "IncorrectClusterState";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "IncorrectClusterVersion";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint8";
                readonly name: "operatorVersion";
                readonly type: "uint8";
            }];
            readonly name: "IncorrectOperatorVersion";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "IncorrectValidatorState";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes";
                readonly name: "publicKey";
                readonly type: "bytes";
            }];
            readonly name: "IncorrectValidatorStateWithData";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "InsufficientBalance";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "InvalidOperatorIdsLength";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "InvalidOracleId";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "InvalidProof";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "InvalidPublicKeyLength";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "InvalidQuorum";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "InvalidToken";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "InvalidWhitelistAddressesLength";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "contractAddress";
                readonly type: "address";
            }];
            readonly name: "InvalidWhitelistingContract";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "LegacyOperatorFeeDeclarationInvalid";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "MaxPrecisionExceeded";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "MaxRequestsAmountReached";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "MaxValueExceeded";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "MaxValueExceeded";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "MustUseLatestRoot";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "NewBlockPeriodIsBelowMinimum";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "NoFeeDeclared";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "NotCSSV";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "NotOracle";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "NothingToClaim";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "NothingToWithdraw";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "OperatorAlreadyExists";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "OperatorDoesNotExist";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "OperatorsListNotUnique";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "OracleAlreadyAssigned";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "OracleHasZeroWeight";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "PublicKeysSharesLengthMismatch";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "RootNotFound";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "SameFeeChangeNotAllowed";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "SameOracleAddressNotAllowed";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "StakeTooLow";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "StaleBlockNumber";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "StaleUpdate";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "TargetModuleDoesNotExist";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint8";
                readonly name: "moduleId";
                readonly type: "uint8";
            }];
            readonly name: "TargetModuleDoesNotExistWithData";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "TokenTransferFailed";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "UnsortedOperatorsList";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "UnstakeAmountExceedsBalance";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "UpdateTooFrequent";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "ValidatorAlreadyExists";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes";
                readonly name: "publicKey";
                readonly type: "bytes";
            }];
            readonly name: "ValidatorAlreadyExistsWithData";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes";
                readonly name: "publicKey";
                readonly type: "bytes";
            }, {
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }];
            readonly name: "ValidatorAlreadyRegistered";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "ValidatorDoesNotExist";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "ZeroAddress";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "ZeroAddressNotAllowed";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "ZeroAmount";
            readonly type: "error";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "address";
                readonly name: "previousAdmin";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "address";
                readonly name: "newAdmin";
                readonly type: "address";
            }];
            readonly name: "AdminChanged";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "beacon";
                readonly type: "address";
            }];
            readonly name: "BeaconUpgraded";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly indexed: true;
                readonly internalType: "uint64";
                readonly name: "blockNum";
                readonly type: "uint64";
            }, {
                readonly indexed: false;
                readonly internalType: "uint32";
                readonly name: "effectiveBalance";
                readonly type: "uint32";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly indexed: false;
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "ClusterBalanceUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly indexed: false;
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "ClusterDeposited";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly indexed: false;
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "ClusterLiquidated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "ethDeposited";
                readonly type: "uint256";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "ssvRefunded";
                readonly type: "uint256";
            }, {
                readonly indexed: false;
                readonly internalType: "uint32";
                readonly name: "effectiveBalance";
                readonly type: "uint32";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly indexed: false;
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "ClusterMigratedToETH";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly indexed: false;
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "ClusterReactivated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly indexed: false;
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "ClusterWithdrawn";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint64";
                readonly name: "newCooldownDuration";
                readonly type: "uint64";
            }];
            readonly name: "CooldownDurationUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint64";
                readonly name: "value";
                readonly type: "uint64";
            }];
            readonly name: "DeclareOperatorFeePeriodUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "ERC20Rescued";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint64";
                readonly name: "value";
                readonly type: "uint64";
            }];
            readonly name: "ExecuteOperatorFeePeriodUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "address";
                readonly name: "recipientAddress";
                readonly type: "address";
            }];
            readonly name: "FeeRecipientAddressUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "newFeesWei";
                readonly type: "uint256";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "accEthPerShare";
                readonly type: "uint256";
            }];
            readonly name: "FeesSynced";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint8";
                readonly name: "version";
                readonly type: "uint8";
            }];
            readonly name: "Initialized";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint64";
                readonly name: "value";
                readonly type: "uint64";
            }];
            readonly name: "LiquidationThresholdPeriodSSVUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint64";
                readonly name: "value";
                readonly type: "uint64";
            }];
            readonly name: "LiquidationThresholdPeriodUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint32";
                readonly name: "newMinBlocksBetweenUpdates";
                readonly type: "uint32";
            }];
            readonly name: "MinBlocksBetweenUpdatesUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }];
            readonly name: "MinimumLiquidationCollateralSSVUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }];
            readonly name: "MinimumLiquidationCollateralUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "minFee";
                readonly type: "uint256";
            }];
            readonly name: "MinimumOperatorEthFeeUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "enum SSVModules";
                readonly name: "moduleId";
                readonly type: "uint8";
            }, {
                readonly indexed: false;
                readonly internalType: "address";
                readonly name: "moduleAddress";
                readonly type: "address";
            }];
            readonly name: "ModuleUpgraded";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }, {
                readonly indexed: false;
                readonly internalType: "address";
                readonly name: "recipient";
                readonly type: "address";
            }];
            readonly name: "NetworkEarningsWithdrawn";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "oldFee";
                readonly type: "uint256";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "newFee";
                readonly type: "uint256";
            }];
            readonly name: "NetworkFeeUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "oldFee";
                readonly type: "uint256";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "newFee";
                readonly type: "uint256";
            }];
            readonly name: "NetworkFeeUpdatedSSV";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }, {
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "bytes";
                readonly name: "publicKey";
                readonly type: "bytes";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "fee";
                readonly type: "uint256";
            }];
            readonly name: "OperatorAdded";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }];
            readonly name: "OperatorFeeDeclarationCancelled";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "blockNumber";
                readonly type: "uint256";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "fee";
                readonly type: "uint256";
            }];
            readonly name: "OperatorFeeDeclared";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "blockNumber";
                readonly type: "uint256";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "fee";
                readonly type: "uint256";
            }];
            readonly name: "OperatorFeeExecuted";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint64";
                readonly name: "value";
                readonly type: "uint64";
            }];
            readonly name: "OperatorFeeIncreaseLimitUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "maxFee";
                readonly type: "uint256";
            }];
            readonly name: "OperatorMaximumFeeUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly indexed: false;
                readonly internalType: "address[]";
                readonly name: "whitelistAddresses";
                readonly type: "address[]";
            }];
            readonly name: "OperatorMultipleWhitelistRemoved";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly indexed: false;
                readonly internalType: "address[]";
                readonly name: "whitelistAddresses";
                readonly type: "address[]";
            }];
            readonly name: "OperatorMultipleWhitelistUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly indexed: false;
                readonly internalType: "bool";
                readonly name: "toPrivate";
                readonly type: "bool";
            }];
            readonly name: "OperatorPrivacyStatusUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }];
            readonly name: "OperatorRemoved";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }, {
                readonly indexed: false;
                readonly internalType: "address";
                readonly name: "whitelisted";
                readonly type: "address";
            }];
            readonly name: "OperatorWhitelistUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly indexed: false;
                readonly internalType: "address";
                readonly name: "whitelistingContract";
                readonly type: "address";
            }];
            readonly name: "OperatorWhitelistingContractUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }];
            readonly name: "OperatorWithdrawn";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }];
            readonly name: "OperatorWithdrawnSSV";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "uint32";
                readonly name: "oracleId";
                readonly type: "uint32";
            }, {
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "oldOracle";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "newOracle";
                readonly type: "address";
            }];
            readonly name: "OracleReplaced";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "previousOwner";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "newOwner";
                readonly type: "address";
            }];
            readonly name: "OwnershipTransferStarted";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "previousOwner";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "newOwner";
                readonly type: "address";
            }];
            readonly name: "OwnershipTransferred";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "uint16";
                readonly name: "newQuorum";
                readonly type: "uint16";
            }];
            readonly name: "QuorumUpdated";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "RewardsClaimed";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "pending";
                readonly type: "uint256";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "accrued";
                readonly type: "uint256";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "userIndex";
                readonly type: "uint256";
            }];
            readonly name: "RewardsSettled";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "bytes32";
                readonly name: "merkleRoot";
                readonly type: "bytes32";
            }, {
                readonly indexed: true;
                readonly internalType: "uint64";
                readonly name: "blockNum";
                readonly type: "uint64";
            }];
            readonly name: "RootCommitted";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "string";
                readonly name: "version";
                readonly type: "string";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "blockNumber";
                readonly type: "uint256";
            }];
            readonly name: "SSVNetworkUpgradeBlock";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "Staked";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "unlockTime";
                readonly type: "uint256";
            }];
            readonly name: "UnstakeRequested";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "user";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "UnstakedWithdrawn";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "implementation";
                readonly type: "address";
            }];
            readonly name: "Upgraded";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly indexed: false;
                readonly internalType: "bytes";
                readonly name: "publicKey";
                readonly type: "bytes";
            }, {
                readonly indexed: false;
                readonly internalType: "bytes";
                readonly name: "shares";
                readonly type: "bytes";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly indexed: false;
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "ValidatorAdded";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly indexed: false;
                readonly internalType: "bytes";
                readonly name: "publicKey";
                readonly type: "bytes";
            }];
            readonly name: "ValidatorExited";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly indexed: false;
                readonly internalType: "bytes";
                readonly name: "publicKey";
                readonly type: "bytes";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly indexed: false;
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "ValidatorRemoved";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "bytes32";
                readonly name: "merkleRoot";
                readonly type: "bytes32";
            }, {
                readonly indexed: true;
                readonly internalType: "uint64";
                readonly name: "blockNum";
                readonly type: "uint64";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "accumulatedWeight";
                readonly type: "uint256";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "quorum";
                readonly type: "uint256";
            }, {
                readonly indexed: false;
                readonly internalType: "uint32";
                readonly name: "oracleId";
                readonly type: "uint32";
            }, {
                readonly indexed: false;
                readonly internalType: "address";
                readonly name: "oracle";
                readonly type: "address";
            }];
            readonly name: "WeightedRootProposed";
            readonly type: "event";
        }, {
            readonly stateMutability: "nonpayable";
            readonly type: "fallback";
        }, {
            readonly inputs: readonly [];
            readonly name: "acceptOwnership";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes[]";
                readonly name: "publicKeys";
                readonly type: "bytes[]";
            }, {
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }];
            readonly name: "bulkExitValidator";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes[]";
                readonly name: "publicKeys";
                readonly type: "bytes[]";
            }, {
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly internalType: "bytes[]";
                readonly name: "sharesData";
                readonly type: "bytes[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "bulkRegisterValidator";
            readonly outputs: readonly [];
            readonly stateMutability: "payable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes[]";
                readonly name: "publicKeys";
                readonly type: "bytes[]";
            }, {
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "bulkRemoveValidator";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }];
            readonly name: "cancelDeclaredOperatorFee";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "claimEthRewards";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes32";
                readonly name: "merkleRoot";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint64";
                readonly name: "blockNum";
                readonly type: "uint64";
            }];
            readonly name: "commitRoot";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint256";
                readonly name: "fee";
                readonly type: "uint256";
            }];
            readonly name: "declareOperatorFee";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "clusterOwner";
                readonly type: "address";
            }, {
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "deposit";
            readonly outputs: readonly [];
            readonly stateMutability: "payable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }];
            readonly name: "executeOperatorFee";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes";
                readonly name: "publicKey";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }];
            readonly name: "exitValidator";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "getVersion";
            readonly outputs: readonly [{
                readonly internalType: "string";
                readonly name: "version";
                readonly type: "string";
            }];
            readonly stateMutability: "pure";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "contract IERC20";
                readonly name: "token_";
                readonly type: "address";
            }, {
                readonly internalType: "contract ISSVOperators";
                readonly name: "ssvOperators_";
                readonly type: "address";
            }, {
                readonly internalType: "contract ISSVClusters";
                readonly name: "ssvClusters_";
                readonly type: "address";
            }, {
                readonly internalType: "contract ISSVDAO";
                readonly name: "ssvDAO_";
                readonly type: "address";
            }, {
                readonly internalType: "contract ISSVViews";
                readonly name: "ssvViews_";
                readonly type: "address";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint64";
                    readonly name: "minimumBlocksBeforeLiquidation";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "minimumLiquidationCollateral";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "validatorsPerOperatorLimit";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "declareOperatorFeePeriod";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "executeOperatorFeePeriod";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "operatorMaxFeeIncrease";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint32[4]";
                    readonly name: "defaultOracleIds";
                    readonly type: "uint32[4]";
                }, {
                    readonly internalType: "uint16";
                    readonly name: "quorumBps";
                    readonly type: "uint16";
                }];
                readonly internalType: "struct ISSVNetwork.NetworkInitParams";
                readonly name: "params";
                readonly type: "tuple";
            }];
            readonly name: "initialize";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "clusterOwner";
                readonly type: "address";
            }, {
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "liquidate";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "clusterOwner";
                readonly type: "address";
            }, {
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "liquidateSSV";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "migrateClusterToETH";
            readonly outputs: readonly [];
            readonly stateMutability: "payable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "onCSSVTransfer";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "owner";
            readonly outputs: readonly [{
                readonly internalType: "address";
                readonly name: "";
                readonly type: "address";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "pendingOwner";
            readonly outputs: readonly [{
                readonly internalType: "address";
                readonly name: "";
                readonly type: "address";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "proxiableUUID";
            readonly outputs: readonly [{
                readonly internalType: "bytes32";
                readonly name: "";
                readonly type: "bytes32";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "reactivate";
            readonly outputs: readonly [];
            readonly stateMutability: "payable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint256";
                readonly name: "fee";
                readonly type: "uint256";
            }];
            readonly name: "reduceOperatorFee";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes";
                readonly name: "publicKey";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint256";
                readonly name: "fee";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "setPrivate";
                readonly type: "bool";
            }];
            readonly name: "registerOperator";
            readonly outputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "id";
                readonly type: "uint64";
            }];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes";
                readonly name: "publicKey";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly internalType: "bytes";
                readonly name: "sharesData";
                readonly type: "bytes";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "registerValidator";
            readonly outputs: readonly [];
            readonly stateMutability: "payable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }];
            readonly name: "removeOperator";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }];
            readonly name: "removeOperatorsWhitelistingContract";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly internalType: "address[]";
                readonly name: "whitelistAddresses";
                readonly type: "address[]";
            }];
            readonly name: "removeOperatorsWhitelists";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes";
                readonly name: "publicKey";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "removeValidator";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "renounceOwnership";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint32";
                readonly name: "oracleId";
                readonly type: "uint32";
            }, {
                readonly internalType: "address";
                readonly name: "newOracle";
                readonly type: "address";
            }];
            readonly name: "replaceOracle";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "requestUnstake";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "rescueERC20";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "recipientAddress";
                readonly type: "address";
            }];
            readonly name: "setFeeRecipientAddress";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }];
            readonly name: "setOperatorsPrivateUnchecked";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }];
            readonly name: "setOperatorsPublicUnchecked";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly internalType: "contract ISSVWhitelistingContract";
                readonly name: "whitelistingContract";
                readonly type: "address";
            }];
            readonly name: "setOperatorsWhitelistingContract";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly internalType: "address[]";
                readonly name: "whitelistAddresses";
                readonly type: "address[]";
            }];
            readonly name: "setOperatorsWhitelists";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint16";
                readonly name: "quorum";
                readonly type: "uint16";
            }];
            readonly name: "setQuorumBps";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "duration";
                readonly type: "uint64";
            }];
            readonly name: "setUnstakeCooldownDuration";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "stake";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "syncFees";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "newOwner";
                readonly type: "address";
            }];
            readonly name: "transferOwnership";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "blockNum";
                readonly type: "uint64";
            }, {
                readonly internalType: "address";
                readonly name: "clusterOwner";
                readonly type: "address";
            }, {
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint32";
                readonly name: "effectiveBalance";
                readonly type: "uint32";
            }, {
                readonly internalType: "bytes32[]";
                readonly name: "merkleProof";
                readonly type: "bytes32[]";
            }];
            readonly name: "updateClusterBalance";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "timeInSeconds";
                readonly type: "uint64";
            }];
            readonly name: "updateDeclareOperatorFeePeriod";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "timeInSeconds";
                readonly type: "uint64";
            }];
            readonly name: "updateExecuteOperatorFeePeriod";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "blocks";
                readonly type: "uint64";
            }];
            readonly name: "updateLiquidationThresholdPeriod";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "blocks";
                readonly type: "uint64";
            }];
            readonly name: "updateLiquidationThresholdPeriodSSV";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "maxFee";
                readonly type: "uint256";
            }];
            readonly name: "updateMaximumOperatorFee";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint32";
                readonly name: "blocks";
                readonly type: "uint32";
            }];
            readonly name: "updateMinBlocksBetweenUpdates";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "updateMinimumLiquidationCollateral";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "updateMinimumLiquidationCollateralSSV";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "minFee";
                readonly type: "uint256";
            }];
            readonly name: "updateMinimumOperatorEthFee";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "enum SSVModules";
                readonly name: "moduleId";
                readonly type: "uint8";
            }, {
                readonly internalType: "address";
                readonly name: "moduleAddress";
                readonly type: "address";
            }];
            readonly name: "updateModule";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "fee";
                readonly type: "uint256";
            }];
            readonly name: "updateNetworkFee";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "fee";
                readonly type: "uint256";
            }];
            readonly name: "updateNetworkFeeSSV";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "percentage";
                readonly type: "uint64";
            }];
            readonly name: "updateOperatorFeeIncreaseLimit";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "newImplementation";
                readonly type: "address";
            }];
            readonly name: "upgradeTo";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "newImplementation";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly name: "upgradeToAndCall";
            readonly outputs: readonly [];
            readonly stateMutability: "payable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64[]";
                readonly name: "operatorIds";
                readonly type: "uint64[]";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint32";
                    readonly name: "validatorCount";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "networkFeeIndex";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "uint64";
                    readonly name: "index";
                    readonly type: "uint64";
                }, {
                    readonly internalType: "bool";
                    readonly name: "active";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "balance";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ISSVNetworkCore.Cluster";
                readonly name: "cluster";
                readonly type: "tuple";
            }];
            readonly name: "withdraw";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }];
            readonly name: "withdrawAllOperatorEarnings";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }];
            readonly name: "withdrawAllOperatorEarningsSSV";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }];
            readonly name: "withdrawAllVersionOperatorEarnings";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "withdrawNetworkSSVEarnings";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "withdrawOperatorEarnings";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint64";
                readonly name: "operatorId";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "withdrawOperatorEarningsSSV";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "withdrawUnlocked";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }], "ValidatorAdded">;
        validation: Awaited<ReturnType<typeof ssvKeys.validateSharesPostRegistration>>;
    }[];
    ownerNonceAtBlock: number;
    block: number;
}>;
export {};
