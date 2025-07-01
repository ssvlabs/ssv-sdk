import { ConfigReturnType } from '../../../config/create';
import { SmartFnWriteOptions } from '../../../contract-interactions/types';
import { SSVKeys, KeySharesItem } from 'ssv-keys';
import { Hex } from 'viem';
type RegisterValidatorsProps = Pick<SmartFnWriteOptions<{
    keyshares: KeySharesItem[] | KeySharesItem['payload'][];
    depositAmount?: bigint;
}>, 'args'>;
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
            eventName: "DeclareOperatorFeePeriodUpdated";
            args: {
                value: bigint;
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
            eventName: "LiquidationThresholdPeriodUpdated";
            args: {
                value: bigint;
            };
        } | {
            eventName: "MinimumLiquidationCollateralUpdated";
            args: {
                value: bigint;
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
export declare const registerValidatorsRawData: (config: ConfigReturnType, { args: { keyshares, depositAmount } }: RegisterValidatorsProps) => Promise<`0x${string}`>;
declare const ssvKeys: SSVKeys;
export declare const validateSharesPostRegistration: (config: ConfigReturnType, args: {
    txHash: Hex;
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
            readonly name: "ClusterDoesNotExists";
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
            readonly name: "IncorrectClusterState";
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
            readonly name: "InvalidContractAddress";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "InvalidOperatorIdsLength";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "InvalidPublicKeyLength";
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
            readonly name: "MaxValueExceeded";
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
            readonly name: "NotAuthorized";
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
            readonly name: "PublicKeysSharesLengthMismatch";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "SameFeeChangeNotAllowed";
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
            readonly inputs: readonly [];
            readonly name: "ValidatorDoesNotExist";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "ZeroAddressNotAllowed";
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
                readonly name: "value";
                readonly type: "uint64";
            }];
            readonly name: "DeclareOperatorFeePeriodUpdated";
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
            readonly name: "LiquidationThresholdPeriodUpdated";
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
                readonly internalType: "uint64";
                readonly name: "maxFee";
                readonly type: "uint64";
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
            readonly name: "bulkRegisterValidator";
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
            readonly name: "deposit";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
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
                readonly internalType: "uint64";
                readonly name: "minimumBlocksBeforeLiquidation_";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint256";
                readonly name: "minimumLiquidationCollateral_";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "validatorsPerOperatorLimit_";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "declareOperatorFeePeriod_";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "executeOperatorFeePeriod_";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "operatorMaxFeeIncrease_";
                readonly type: "uint64";
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
            readonly name: "reactivate";
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
            readonly name: "registerValidator";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
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
                readonly name: "maxFee";
                readonly type: "uint64";
            }];
            readonly name: "updateMaximumOperatorFee";
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
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "withdrawNetworkEarnings";
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
            readonly name: "ClusterDoesNotExists";
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
            readonly name: "IncorrectClusterState";
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
            readonly name: "InvalidContractAddress";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "InvalidOperatorIdsLength";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "InvalidPublicKeyLength";
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
            readonly name: "MaxValueExceeded";
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
            readonly name: "NotAuthorized";
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
            readonly name: "PublicKeysSharesLengthMismatch";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "SameFeeChangeNotAllowed";
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
            readonly inputs: readonly [];
            readonly name: "ValidatorDoesNotExist";
            readonly type: "error";
        }, {
            readonly inputs: readonly [];
            readonly name: "ZeroAddressNotAllowed";
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
                readonly name: "value";
                readonly type: "uint64";
            }];
            readonly name: "DeclareOperatorFeePeriodUpdated";
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
            readonly name: "LiquidationThresholdPeriodUpdated";
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
                readonly internalType: "uint64";
                readonly name: "maxFee";
                readonly type: "uint64";
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
            readonly name: "bulkRegisterValidator";
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
            readonly name: "deposit";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
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
                readonly internalType: "uint64";
                readonly name: "minimumBlocksBeforeLiquidation_";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint256";
                readonly name: "minimumLiquidationCollateral_";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint32";
                readonly name: "validatorsPerOperatorLimit_";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "declareOperatorFeePeriod_";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "executeOperatorFeePeriod_";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint64";
                readonly name: "operatorMaxFeeIncrease_";
                readonly type: "uint64";
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
            readonly name: "reactivate";
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
            readonly name: "registerValidator";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
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
                readonly name: "maxFee";
                readonly type: "uint64";
            }];
            readonly name: "updateMaximumOperatorFee";
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
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly name: "withdrawNetworkEarnings";
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
        }], "ValidatorAdded">;
        validation: Awaited<ReturnType<typeof ssvKeys.validateSharesPostRegistration>>;
    }[];
    ownerNonceAtBlock: number;
    block: number;
}>;
export {};
