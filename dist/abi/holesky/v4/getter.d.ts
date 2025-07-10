export declare const HoleskyV4GetterABI: readonly [{
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
    readonly name: "acceptOwnership";
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
    readonly name: "getBalance";
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
    readonly name: "getBurnRate";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
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
    readonly name: "getMaximumOperatorFee";
    readonly outputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "";
        readonly type: "uint64";
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
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }, {
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }, {
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }, {
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
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
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }, {
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint64";
        readonly name: "";
        readonly type: "uint64";
    }, {
        readonly internalType: "uint64";
        readonly name: "";
        readonly type: "uint64";
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
        readonly internalType: "uint64";
        readonly name: "";
        readonly type: "uint64";
    }, {
        readonly internalType: "uint64";
        readonly name: "";
        readonly type: "uint64";
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
