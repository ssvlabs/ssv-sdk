export declare const MainnetV4GetterABI: readonly [{
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
    readonly name: "MaxRequestsAmountReached";
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
    readonly inputs: readonly [];
    readonly name: "accEthPerShare";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "acceptOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "cooldownDuration";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getActiveOracleIds";
    readonly outputs: readonly [{
        readonly internalType: "uint32[4]";
        readonly name: "";
        readonly type: "uint32[4]";
    }];
    readonly stateMutability: "view";
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
    readonly name: "getBalance";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "balance";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
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
    readonly name: "getBalanceSSV";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "balance";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
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
    readonly name: "getBurnRate";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
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
    readonly name: "getBurnRateSSV";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "uint64[]";
        readonly name: "operatorIds";
        readonly type: "uint64[]";
    }];
    readonly name: "getClusterAssetType";
    readonly outputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "blockNum";
        readonly type: "uint64";
    }];
    readonly name: "getCommittedRoot";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
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
    readonly name: "getEffectiveBalance";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "effectiveBalance";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getLiquidationThresholdPeriod";
    readonly outputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "";
        readonly type: "uint64";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getLiquidationThresholdPeriodSSV";
    readonly outputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "";
        readonly type: "uint64";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getMaximumOperatorFee";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getMaximumOperatorFeeSSV";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getMinimumLiquidationCollateral";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getMinimumLiquidationCollateralSSV";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getMinimumOperatorEthFee";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getNetworkEarnings";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getNetworkEarningsSSV";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getNetworkFee";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getNetworkFeeSSV";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getNetworkValidatorsCount";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "operatorId";
        readonly type: "uint64";
    }];
    readonly name: "getOperatorById";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "fee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint32";
            readonly name: "validatorCount";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "whitelistedAddress";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "isPrivate";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "isActive";
            readonly type: "bool";
        }];
        readonly internalType: "struct ISSVViewsTypes.OperatorData";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "operatorId";
        readonly type: "uint64";
    }];
    readonly name: "getOperatorByIdSSV";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "fee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint32";
            readonly name: "validatorCount";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "whitelistedAddress";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "isPrivate";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "isActive";
            readonly type: "bool";
        }];
        readonly internalType: "struct ISSVViewsTypes.OperatorData";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "operatorId";
        readonly type: "uint64";
    }];
    readonly name: "getOperatorDeclaredFee";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "bool";
            readonly name: "isFeeDeclared";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "fee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint64";
            readonly name: "approvalBeginTime";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "approvalEndTime";
            readonly type: "uint64";
        }];
        readonly internalType: "struct ISSVViewsTypes.OperatorDeclaredFeeData";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "id";
        readonly type: "uint64";
    }];
    readonly name: "getOperatorEarnings";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "id";
        readonly type: "uint64";
    }];
    readonly name: "getOperatorEarningsSSV";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "operatorId";
        readonly type: "uint64";
    }];
    readonly name: "getOperatorFee";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getOperatorFeeIncreaseLimit";
    readonly outputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "";
        readonly type: "uint64";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getOperatorFeePeriods";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint64";
            readonly name: "declarePeriod";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "executePeriod";
            readonly type: "uint64";
        }];
        readonly internalType: "struct ISSVViewsTypes.OperatorFeePeriodsData";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "operatorId";
        readonly type: "uint64";
    }];
    readonly name: "getOperatorFeeSSV";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "oracleId";
        readonly type: "uint32";
    }];
    readonly name: "getOracle";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "oracleId";
        readonly type: "uint32";
    }];
    readonly name: "getOracleWeight";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getQuorumBps";
    readonly outputs: readonly [{
        readonly internalType: "uint16";
        readonly name: "";
        readonly type: "uint16";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "clusterOwner";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "publicKey";
        readonly type: "bytes";
    }];
    readonly name: "getValidator";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getValidatorsPerOperatorLimit";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getVersion";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint64[]";
        readonly name: "operatorIds";
        readonly type: "uint64[]";
    }, {
        readonly internalType: "address";
        readonly name: "whitelistedAddress";
        readonly type: "address";
    }];
    readonly name: "getWhitelistedOperators";
    readonly outputs: readonly [{
        readonly internalType: "uint64[]";
        readonly name: "whitelistedOperatorIds";
        readonly type: "uint64[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract ISSVViews";
        readonly name: "ssvNetwork_";
        readonly type: "address";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "addressToCheck";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "operatorId";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "whitelistingContract";
        readonly type: "address";
    }];
    readonly name: "isAddressWhitelistedInWhitelistingContract";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "isWhitelisted";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
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
    readonly name: "isLiquidatable";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
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
    readonly name: "isLiquidatableSSV";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
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
    readonly name: "isLiquidated";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "contractAddress";
        readonly type: "address";
    }];
    readonly name: "isWhitelistingContract";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
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
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
    }];
    readonly name: "pendingUnstake";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "unlockTime";
            readonly type: "uint256";
        }];
        readonly internalType: "struct ISSVViewsTypes.UnstakeRequestsData[]";
        readonly name: "";
        readonly type: "tuple[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
    }];
    readonly name: "previewClaimableEth";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
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
    readonly inputs: readonly [];
    readonly name: "renounceOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "ssvNetwork";
    readonly outputs: readonly [{
        readonly internalType: "contract ISSVViews";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
    }];
    readonly name: "stakedBalanceOf";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "stakingEthPoolBalance";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalStaked";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
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
}];
