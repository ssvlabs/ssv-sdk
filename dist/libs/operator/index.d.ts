import { ConfigReturnType } from '../../config/create';
import { RemoveConfigArg } from '../../types/methods';
export declare const createOperatorManager: (config: ConfigReturnType) => {
    registerOperator: RemoveConfigArg<(config: ConfigReturnType, { args: { isPrivate, yearlyFee, publicKey }, ...writeOptions }: Omit<import('viem').SimulateContractParameters, "address" | "value" | "account" | "args" | "chain" | "abi" | "functionName"> & {
        args: {
            isPrivate: boolean;
            yearlyFee: bigint;
            publicKey: string;
        };
    }) => Promise<{
        hash: `0x${string}`;
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
    }>>;
    removeOperator: {
        (props: {
            args: {
                operatorId: bigint;
            };
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            nonce?: number | undefined;
            blockNumber?: bigint | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem/experimental').AuthorizationList<number, boolean> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }): import('../../contract-interactions/types').WriteReturnType<{
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
        }>;
        simulate: (props: {
            args: {
                operatorId: bigint;
            };
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            nonce?: number | undefined;
            blockNumber?: bigint | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem/experimental').AuthorizationList<number, boolean> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }) => import('viem').SimulateContractReturnType<import('../../contract-interactions/types').SupportedAbis, "removeOperator">;
        getTransactionData: (props: {
            operatorId: bigint;
        }) => `0x${string}`;
    };
    withdraw: RemoveConfigArg<(config: ConfigReturnType, { args: { operatorId, amount }, ...writeOptions }: Omit<import('viem').SimulateContractParameters, "address" | "value" | "account" | "args" | "chain" | "abi" | "functionName"> & {
        args: {
            operatorId: string;
            amount: bigint;
        };
    }) => Promise<{
        hash: `0x${string}`;
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
    }>>;
    setOperatorWhitelists: {
        (props: {
            args: {
                operatorIds: readonly bigint[];
                whitelistAddresses: readonly `0x${string}`[];
            };
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            nonce?: number | undefined;
            blockNumber?: bigint | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem/experimental').AuthorizationList<number, boolean> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }): import('../../contract-interactions/types').WriteReturnType<{
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
        }>;
        simulate: (props: {
            args: {
                operatorIds: readonly bigint[];
                whitelistAddresses: readonly `0x${string}`[];
            };
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            nonce?: number | undefined;
            blockNumber?: bigint | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem/experimental').AuthorizationList<number, boolean> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }) => import('viem').SimulateContractReturnType<import('../../contract-interactions/types').SupportedAbis, "setOperatorsWhitelists">;
        getTransactionData: (props: {
            operatorIds: readonly bigint[];
            whitelistAddresses: readonly `0x${string}`[];
        }) => `0x${string}`;
    };
    removeOperatorWhitelists: {
        (props: {
            args: {
                operatorIds: readonly bigint[];
                whitelistAddresses: readonly `0x${string}`[];
            };
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            nonce?: number | undefined;
            blockNumber?: bigint | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem/experimental').AuthorizationList<number, boolean> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }): import('../../contract-interactions/types').WriteReturnType<{
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
        }>;
        simulate: (props: {
            args: {
                operatorIds: readonly bigint[];
                whitelistAddresses: readonly `0x${string}`[];
            };
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            nonce?: number | undefined;
            blockNumber?: bigint | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem/experimental').AuthorizationList<number, boolean> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }) => import('viem').SimulateContractReturnType<import('../../contract-interactions/types').SupportedAbis, "removeOperatorsWhitelists">;
        getTransactionData: (props: {
            operatorIds: readonly bigint[];
            whitelistAddresses: readonly `0x${string}`[];
        }) => `0x${string}`;
    };
    setOperatorsPrivate: {
        (props: {
            args: {
                operatorIds: readonly bigint[];
            };
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            nonce?: number | undefined;
            blockNumber?: bigint | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem/experimental').AuthorizationList<number, boolean> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }): import('../../contract-interactions/types').WriteReturnType<{
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
        }>;
        simulate: (props: {
            args: {
                operatorIds: readonly bigint[];
            };
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            nonce?: number | undefined;
            blockNumber?: bigint | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem/experimental').AuthorizationList<number, boolean> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }) => import('viem').SimulateContractReturnType<import('../../contract-interactions/types').SupportedAbis, "setOperatorsPrivateUnchecked">;
        getTransactionData: (props: {
            operatorIds: readonly bigint[];
        }) => `0x${string}`;
    };
    setOperatorsPublic: {
        (props: {
            args: {
                operatorIds: readonly bigint[];
            };
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            nonce?: number | undefined;
            blockNumber?: bigint | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem/experimental').AuthorizationList<number, boolean> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }): import('../../contract-interactions/types').WriteReturnType<{
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
        }>;
        simulate: (props: {
            args: {
                operatorIds: readonly bigint[];
            };
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            nonce?: number | undefined;
            blockNumber?: bigint | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem/experimental').AuthorizationList<number, boolean> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }) => import('viem').SimulateContractReturnType<import('../../contract-interactions/types').SupportedAbis, "setOperatorsPublicUnchecked">;
        getTransactionData: (props: {
            operatorIds: readonly bigint[];
        }) => `0x${string}`;
    };
    setOperatorWhitelistingContract: RemoveConfigArg<(config: ConfigReturnType, { args: { operatorIds, contractAddress }, ...writeOptions }: Omit<import('viem').SimulateContractParameters, "address" | "value" | "account" | "args" | "chain" | "abi" | "functionName"> & {
        args: {
            operatorIds: string[];
            contractAddress: `0x${string}`;
        };
    }) => Promise<{
        hash: `0x${string}`;
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
    }>>;
    removeOperatorWhitelistingContract: {
        (props: {
            args: {
                operatorIds: readonly bigint[];
                whitelistAddresses: readonly `0x${string}`[];
            };
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            nonce?: number | undefined;
            blockNumber?: bigint | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem/experimental').AuthorizationList<number, boolean> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }): import('../../contract-interactions/types').WriteReturnType<{
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
        }>;
        simulate: (props: {
            args: {
                operatorIds: readonly bigint[];
                whitelistAddresses: readonly `0x${string}`[];
            };
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            nonce?: number | undefined;
            blockNumber?: bigint | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem/experimental').AuthorizationList<number, boolean> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }) => import('viem').SimulateContractReturnType<import('../../contract-interactions/types').SupportedAbis, "removeOperatorsWhitelists">;
        getTransactionData: (props: {
            operatorIds: readonly bigint[];
            whitelistAddresses: readonly `0x${string}`[];
        }) => `0x${string}`;
    };
    declareOperatorFee: {
        (props: {
            args: {
                operatorId: bigint;
                fee: bigint;
            };
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            nonce?: number | undefined;
            blockNumber?: bigint | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem/experimental').AuthorizationList<number, boolean> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }): import('../../contract-interactions/types').WriteReturnType<{
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
        }>;
        simulate: (props: {
            args: {
                operatorId: bigint;
                fee: bigint;
            };
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            nonce?: number | undefined;
            blockNumber?: bigint | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem/experimental').AuthorizationList<number, boolean> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }) => import('viem').SimulateContractReturnType<import('../../contract-interactions/types').SupportedAbis, "declareOperatorFee">;
        getTransactionData: (props: {
            operatorId: bigint;
            fee: bigint;
        }) => `0x${string}`;
    };
    executeOperatorFee: {
        (props: {
            args: {
                operatorId: bigint;
            };
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            nonce?: number | undefined;
            blockNumber?: bigint | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem/experimental').AuthorizationList<number, boolean> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }): import('../../contract-interactions/types').WriteReturnType<{
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
        }>;
        simulate: (props: {
            args: {
                operatorId: bigint;
            };
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            nonce?: number | undefined;
            blockNumber?: bigint | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem/experimental').AuthorizationList<number, boolean> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }) => import('viem').SimulateContractReturnType<import('../../contract-interactions/types').SupportedAbis, "executeOperatorFee">;
        getTransactionData: (props: {
            operatorId: bigint;
        }) => `0x${string}`;
    };
    cancelDeclaredOperatorFee: {
        (props: {
            args: {
                operatorId: bigint;
            };
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            nonce?: number | undefined;
            blockNumber?: bigint | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem/experimental').AuthorizationList<number, boolean> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }): import('../../contract-interactions/types').WriteReturnType<{
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
        }>;
        simulate: (props: {
            args: {
                operatorId: bigint;
            };
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            nonce?: number | undefined;
            blockNumber?: bigint | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem/experimental').AuthorizationList<number, boolean> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }) => import('viem').SimulateContractReturnType<import('../../contract-interactions/types').SupportedAbis, "cancelDeclaredOperatorFee">;
        getTransactionData: (props: {
            operatorId: bigint;
        }) => `0x${string}`;
    };
    reduceOperatorFee: {
        (props: {
            args: {
                operatorId: bigint;
                fee: bigint;
            };
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            nonce?: number | undefined;
            blockNumber?: bigint | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem/experimental').AuthorizationList<number, boolean> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }): import('../../contract-interactions/types').WriteReturnType<{
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
        }>;
        simulate: (props: {
            args: {
                operatorId: bigint;
                fee: bigint;
            };
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            nonce?: number | undefined;
            blockNumber?: bigint | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem/experimental').AuthorizationList<number, boolean> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }) => import('viem').SimulateContractReturnType<import('../../contract-interactions/types').SupportedAbis, "reduceOperatorFee">;
        getTransactionData: (props: {
            operatorId: bigint;
            fee: bigint;
        }) => `0x${string}`;
    };
};
