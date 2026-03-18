import { ConfigReturnType } from '../../config/create';
import { registerOperator, setOperatorWhitelists, withdraw, withdrawAllOperatorEarningsSSV, withdrawAllVersionOperatorEarnings, withdrawOperatorEarningsSSV } from './methods';
import { RemoveConfigArg } from '../../types/methods';
export declare const createOperatorManager: (config: ConfigReturnType) => {
    registerOperator: RemoveConfigArg<typeof registerOperator>;
    removeOperator: {
        (props: {
            args: {
                operatorId: bigint;
            };
            nonce?: number | undefined;
            blockNumber?: bigint | undefined | undefined;
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly import('viem').ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem').AuthorizationList<number, boolean> | undefined;
            blockOverrides?: import('viem').BlockOverrides<bigint, number> | undefined;
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
        }>;
        simulate: (props: {
            args: {
                operatorId: bigint;
            };
            nonce?: number | undefined;
            blockNumber?: bigint | undefined | undefined;
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly import('viem').ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem').AuthorizationList<number, boolean> | undefined;
            blockOverrides?: import('viem').BlockOverrides<bigint, number> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }) => import('viem').SimulateContractReturnType<import('../../contract-interactions/types').SupportedAbis, "removeOperator">;
        getTransactionData: (props: {
            operatorId: bigint;
        }) => import('viem').Hex;
    };
    withdraw: RemoveConfigArg<typeof withdraw>;
    withdrawOperatorEarningsSSV: RemoveConfigArg<typeof withdrawOperatorEarningsSSV>;
    withdrawAllOperatorEarningsSSV: RemoveConfigArg<typeof withdrawAllOperatorEarningsSSV>;
    withdrawAllVersionOperatorEarnings: RemoveConfigArg<typeof withdrawAllVersionOperatorEarnings>;
    setOperatorWhitelists: {
        (props: {
            args: {
                operatorIds: readonly bigint[];
                whitelistAddresses: readonly `0x${string}`[];
            };
            nonce?: number | undefined;
            blockNumber?: bigint | undefined | undefined;
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly import('viem').ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem').AuthorizationList<number, boolean> | undefined;
            blockOverrides?: import('viem').BlockOverrides<bigint, number> | undefined;
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
        }>;
        simulate: (props: {
            args: {
                operatorIds: readonly bigint[];
                whitelistAddresses: readonly `0x${string}`[];
            };
            nonce?: number | undefined;
            blockNumber?: bigint | undefined | undefined;
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly import('viem').ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem').AuthorizationList<number, boolean> | undefined;
            blockOverrides?: import('viem').BlockOverrides<bigint, number> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }) => import('viem').SimulateContractReturnType<import('../../contract-interactions/types').SupportedAbis, "setOperatorsWhitelists">;
        getTransactionData: (props: {
            operatorIds: readonly bigint[];
            whitelistAddresses: readonly `0x${string}`[];
        }) => import('viem').Hex;
    };
    removeOperatorWhitelists: {
        (props: {
            args: {
                operatorIds: readonly bigint[];
                whitelistAddresses: readonly `0x${string}`[];
            };
            nonce?: number | undefined;
            blockNumber?: bigint | undefined | undefined;
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly import('viem').ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem').AuthorizationList<number, boolean> | undefined;
            blockOverrides?: import('viem').BlockOverrides<bigint, number> | undefined;
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
        }>;
        simulate: (props: {
            args: {
                operatorIds: readonly bigint[];
                whitelistAddresses: readonly `0x${string}`[];
            };
            nonce?: number | undefined;
            blockNumber?: bigint | undefined | undefined;
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly import('viem').ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem').AuthorizationList<number, boolean> | undefined;
            blockOverrides?: import('viem').BlockOverrides<bigint, number> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }) => import('viem').SimulateContractReturnType<import('../../contract-interactions/types').SupportedAbis, "removeOperatorsWhitelists">;
        getTransactionData: (props: {
            operatorIds: readonly bigint[];
            whitelistAddresses: readonly `0x${string}`[];
        }) => import('viem').Hex;
    };
    setOperatorsPrivate: {
        (props: {
            args: {
                operatorIds: readonly bigint[];
            };
            nonce?: number | undefined;
            blockNumber?: bigint | undefined | undefined;
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly import('viem').ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem').AuthorizationList<number, boolean> | undefined;
            blockOverrides?: import('viem').BlockOverrides<bigint, number> | undefined;
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
        }>;
        simulate: (props: {
            args: {
                operatorIds: readonly bigint[];
            };
            nonce?: number | undefined;
            blockNumber?: bigint | undefined | undefined;
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly import('viem').ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem').AuthorizationList<number, boolean> | undefined;
            blockOverrides?: import('viem').BlockOverrides<bigint, number> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }) => import('viem').SimulateContractReturnType<import('../../contract-interactions/types').SupportedAbis, "setOperatorsPrivateUnchecked">;
        getTransactionData: (props: {
            operatorIds: readonly bigint[];
        }) => import('viem').Hex;
    };
    setOperatorsPublic: {
        (props: {
            args: {
                operatorIds: readonly bigint[];
            };
            nonce?: number | undefined;
            blockNumber?: bigint | undefined | undefined;
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly import('viem').ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem').AuthorizationList<number, boolean> | undefined;
            blockOverrides?: import('viem').BlockOverrides<bigint, number> | undefined;
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
        }>;
        simulate: (props: {
            args: {
                operatorIds: readonly bigint[];
            };
            nonce?: number | undefined;
            blockNumber?: bigint | undefined | undefined;
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly import('viem').ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem').AuthorizationList<number, boolean> | undefined;
            blockOverrides?: import('viem').BlockOverrides<bigint, number> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }) => import('viem').SimulateContractReturnType<import('../../contract-interactions/types').SupportedAbis, "setOperatorsPublicUnchecked">;
        getTransactionData: (props: {
            operatorIds: readonly bigint[];
        }) => import('viem').Hex;
    };
    setOperatorWhitelistingContract: RemoveConfigArg<typeof setOperatorWhitelists>;
    removeOperatorWhitelistingContract: {
        (props: {
            args: {
                operatorIds: readonly bigint[];
                whitelistAddresses: readonly `0x${string}`[];
            };
            nonce?: number | undefined;
            blockNumber?: bigint | undefined | undefined;
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly import('viem').ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem').AuthorizationList<number, boolean> | undefined;
            blockOverrides?: import('viem').BlockOverrides<bigint, number> | undefined;
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
        }>;
        simulate: (props: {
            args: {
                operatorIds: readonly bigint[];
                whitelistAddresses: readonly `0x${string}`[];
            };
            nonce?: number | undefined;
            blockNumber?: bigint | undefined | undefined;
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly import('viem').ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem').AuthorizationList<number, boolean> | undefined;
            blockOverrides?: import('viem').BlockOverrides<bigint, number> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }) => import('viem').SimulateContractReturnType<import('../../contract-interactions/types').SupportedAbis, "removeOperatorsWhitelists">;
        getTransactionData: (props: {
            operatorIds: readonly bigint[];
            whitelistAddresses: readonly `0x${string}`[];
        }) => import('viem').Hex;
    };
    declareOperatorFee: {
        (props: {
            args: {
                operatorId: bigint;
                fee: bigint;
            };
            nonce?: number | undefined;
            blockNumber?: bigint | undefined | undefined;
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly import('viem').ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem').AuthorizationList<number, boolean> | undefined;
            blockOverrides?: import('viem').BlockOverrides<bigint, number> | undefined;
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
        }>;
        simulate: (props: {
            args: {
                operatorId: bigint;
                fee: bigint;
            };
            nonce?: number | undefined;
            blockNumber?: bigint | undefined | undefined;
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly import('viem').ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem').AuthorizationList<number, boolean> | undefined;
            blockOverrides?: import('viem').BlockOverrides<bigint, number> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }) => import('viem').SimulateContractReturnType<import('../../contract-interactions/types').SupportedAbis, "declareOperatorFee">;
        getTransactionData: (props: {
            operatorId: bigint;
            fee: bigint;
        }) => import('viem').Hex;
    };
    executeOperatorFee: {
        (props: {
            args: {
                operatorId: bigint;
            };
            nonce?: number | undefined;
            blockNumber?: bigint | undefined | undefined;
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly import('viem').ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem').AuthorizationList<number, boolean> | undefined;
            blockOverrides?: import('viem').BlockOverrides<bigint, number> | undefined;
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
        }>;
        simulate: (props: {
            args: {
                operatorId: bigint;
            };
            nonce?: number | undefined;
            blockNumber?: bigint | undefined | undefined;
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly import('viem').ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem').AuthorizationList<number, boolean> | undefined;
            blockOverrides?: import('viem').BlockOverrides<bigint, number> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }) => import('viem').SimulateContractReturnType<import('../../contract-interactions/types').SupportedAbis, "executeOperatorFee">;
        getTransactionData: (props: {
            operatorId: bigint;
        }) => import('viem').Hex;
    };
    cancelDeclaredOperatorFee: {
        (props: {
            args: {
                operatorId: bigint;
            };
            nonce?: number | undefined;
            blockNumber?: bigint | undefined | undefined;
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly import('viem').ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem').AuthorizationList<number, boolean> | undefined;
            blockOverrides?: import('viem').BlockOverrides<bigint, number> | undefined;
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
        }>;
        simulate: (props: {
            args: {
                operatorId: bigint;
            };
            nonce?: number | undefined;
            blockNumber?: bigint | undefined | undefined;
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly import('viem').ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem').AuthorizationList<number, boolean> | undefined;
            blockOverrides?: import('viem').BlockOverrides<bigint, number> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }) => import('viem').SimulateContractReturnType<import('../../contract-interactions/types').SupportedAbis, "cancelDeclaredOperatorFee">;
        getTransactionData: (props: {
            operatorId: bigint;
        }) => import('viem').Hex;
    };
    reduceOperatorFee: {
        (props: {
            args: {
                operatorId: bigint;
                fee: bigint;
            };
            nonce?: number | undefined;
            blockNumber?: bigint | undefined | undefined;
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly import('viem').ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem').AuthorizationList<number, boolean> | undefined;
            blockOverrides?: import('viem').BlockOverrides<bigint, number> | undefined;
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
        }>;
        simulate: (props: {
            args: {
                operatorId: bigint;
                fee: bigint;
            };
            nonce?: number | undefined;
            blockNumber?: bigint | undefined | undefined;
            type?: "legacy" | "eip2930" | "eip1559" | "eip4844" | "eip7702" | undefined;
            gas?: bigint | undefined;
            blobs?: readonly `0x${string}`[] | readonly import('viem').ByteArray[] | undefined;
            blobVersionedHashes?: readonly `0x${string}`[] | undefined;
            kzg?: import('viem').Kzg | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import('viem').AccessList | undefined;
            sidecars?: readonly import('viem').BlobSidecar<`0x${string}`>[] | undefined;
            authorizationList?: import('viem').AuthorizationList<number, boolean> | undefined;
            blockOverrides?: import('viem').BlockOverrides<bigint, number> | undefined;
            blockTag?: import('viem').BlockTag | undefined;
            stateOverride?: import('viem').StateOverride | undefined;
            dataSuffix?: `0x${string}` | undefined;
        }) => import('viem').SimulateContractReturnType<import('../../contract-interactions/types').SupportedAbis, "reduceOperatorFee">;
        getTransactionData: (props: {
            operatorId: bigint;
            fee: bigint;
        }) => import('viem').Hex;
    };
};
