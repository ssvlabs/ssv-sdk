// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface SSVDAO$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "SSVDAO",
  "sourceName": "contracts/modules/SSVDAO.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "contractAddress",
          "type": "address"
        }
      ],
      "name": "AddressIsWhitelistingContract",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ApprovalNotWithinTimeframe",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "CallerNotOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "caller",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "CallerNotOwnerWithData",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "CallerNotWhitelisted",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "operatorId",
          "type": "uint64"
        }
      ],
      "name": "CallerNotWhitelistedWithData",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ClusterAlreadyEnabled",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ClusterDoesNotExists",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ClusterIsLiquidated",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ClusterNotLiquidatable",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "EmptyPublicKeysList",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "operatorId",
          "type": "uint64"
        }
      ],
      "name": "ExceedValidatorLimit",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "operatorId",
          "type": "uint64"
        }
      ],
      "name": "ExceedValidatorLimitWithData",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FeeExceedsIncreaseLimit",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FeeIncreaseNotAllowed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FeeTooHigh",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FeeTooLow",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "IncorrectClusterState",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "IncorrectValidatorState",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "publicKey",
          "type": "bytes"
        }
      ],
      "name": "IncorrectValidatorStateWithData",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InsufficientBalance",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidContractAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidOperatorIdsLength",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidPublicKeyLength",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidWhitelistAddressesLength",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "contractAddress",
          "type": "address"
        }
      ],
      "name": "InvalidWhitelistingContract",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MaxValueExceeded",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NewBlockPeriodIsBelowMinimum",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NoFeeDeclared",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotAuthorized",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OperatorAlreadyExists",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OperatorDoesNotExist",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OperatorsListNotUnique",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "PublicKeysSharesLengthMismatch",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "SameFeeChangeNotAllowed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TargetModuleDoesNotExist",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "moduleId",
          "type": "uint8"
        }
      ],
      "name": "TargetModuleDoesNotExistWithData",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TokenTransferFailed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnsortedOperatorsList",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ValidatorAlreadyExists",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "publicKey",
          "type": "bytes"
        }
      ],
      "name": "ValidatorAlreadyExistsWithData",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ValidatorDoesNotExist",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ZeroAddressNotAllowed",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "value",
          "type": "uint64"
        }
      ],
      "name": "DeclareOperatorFeePeriodUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "value",
          "type": "uint64"
        }
      ],
      "name": "ExecuteOperatorFeePeriodUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "value",
          "type": "uint64"
        }
      ],
      "name": "LiquidationThresholdPeriodUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "MinimumLiquidationCollateralUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        }
      ],
      "name": "NetworkEarningsWithdrawn",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "oldFee",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newFee",
          "type": "uint256"
        }
      ],
      "name": "NetworkFeeUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "value",
          "type": "uint64"
        }
      ],
      "name": "OperatorFeeIncreaseLimitUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "maxFee",
          "type": "uint64"
        }
      ],
      "name": "OperatorMaximumFeeUpdated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "timeInSeconds",
          "type": "uint64"
        }
      ],
      "name": "updateDeclareOperatorFeePeriod",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "timeInSeconds",
          "type": "uint64"
        }
      ],
      "name": "updateExecuteOperatorFeePeriod",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "blocks",
          "type": "uint64"
        }
      ],
      "name": "updateLiquidationThresholdPeriod",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "maxFee",
          "type": "uint64"
        }
      ],
      "name": "updateMaximumOperatorFee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "updateMinimumLiquidationCollateral",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "fee",
          "type": "uint256"
        }
      ],
      "name": "updateNetworkFee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "percentage",
          "type": "uint64"
        }
      ],
      "name": "updateOperatorFeeIncreaseLimit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdrawNetworkEarnings",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561000f575f80fd5b50610c928061001d5f395ff3fe608060405234801561000f575f80fd5b5060043610610085575f3560e01c8063b4c9c40811610058578063b4c9c408146100d7578063d2231741146100ea578063e39c6744146100fd578063eb60802214610110575f80fd5b80631f1f9fd5146100895780633631983f1461009e5780636512447d146100b157806379e3e4e4146100c4575b5f80fd5b61009c610097366004610ad9565b610123565b005b61009c6100ac366004610af0565b6101a9565b61009c6100bf366004610af0565b61022c565b61009c6100d2366004610af0565b6102ef565b61009c6100e5366004610ad9565b610373565b61009c6100f8366004610ad9565b610403565b61009c61010b366004610af0565b61053a565b61009c61011e366004610af0565b6105be565b5f61012c61062f565b8054909150700100000000000000000000000000000000900467ffffffffffffffff166101598284610662565b7f8f49a76c5d617bd72673d92d3a019ff8f04f204536aae7a3d10e7ca85603f3cc61018d8267ffffffffffffffff1661073e565b60408051918252602082018690520160405180910390a1505050565b806101b261062f565b60020180547fffffffffffffffffffffffffffffffff0000000000000000ffffffffffffffff166801000000000000000067ffffffffffffffff9384160217905560405190821681527f2fff7e5a48a4befc2c2be4d77e141f6d97907798977ce452429ec55c2658a342906020015b60405180910390a150565b620189c067ffffffffffffffff82161015610273576040517f6e6c9cac00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8061027c61062f565b60010180547fffffffffffffffffffffffffffffffff0000000000000000ffffffffffffffff166801000000000000000067ffffffffffffffff9384160217905560405190821681527f42af14411036d7a50e5e92daf825781450fc8fac8fb65cbdb04720ff08efb84f90602001610221565b806102f861062f565b600101805477ffffffffffffffffffffffffffffffffffffffffffffffff16780100000000000000000000000000000000000000000000000067ffffffffffffffff9384160217905560405190821681527f5fbd75d987b37490f91aa1909db948e7ff14c6ffb495b2f8e0b2334da9b192f190602001610221565b61037c81610756565b61038461062f565b600101805467ffffffffffffffff92909216700100000000000000000000000000000000027fffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffff9092169190911790556040518181527fd363ab4392efaf967a89d8616cba1ff0c6f05a04c2f214671be365f0fab0596090602001610221565b5f61040c61062f565b90505f61041883610756565b90505f610424836107f1565b90508067ffffffffffffffff168267ffffffffffffffff161115610474576040517ff4d678b800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047e8282610b4b565b6001840180547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000001667ffffffffffffffff9290921691909117905582547fffffffffffffffffffffffffffffffffffffffff00000000ffffffffffffffff16680100000000000000004363ffffffff16021783556104fc3385610868565b604080518581523360208201527f370342c3bb9245e20bffe6dced02ba2fceca979701f881d5adc72d838e83f1c5910160405180910390a150505050565b8061054361062f565b60020180547fffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffff1670010000000000000000000000000000000067ffffffffffffffff9384160217905560405190821681527f38552bed8df52ac76c5de6da688eafcda7d7b070f6c987f391a07dd69986d78390602001610221565b806105c761062f565b60020180547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000001667ffffffffffffffff92831617905560405190821681527ff6b8a2b45d0a60381de51a7b980c4660d9e5b82db6e07a4d342bfc17a6ff96bf90602001610221565b5f8061065c60017f0f1d85405047bdb6b0a60e27531f52a1f7a948613527b9b83a7552558207aa16610b73565b92915050565b61066b82610945565b610674826109c4565b825477ffffffffffffffffffffffffffffffffffffffff0000000016780100000000000000000000000000000000000000000000000067ffffffffffffffff92909216919091027fffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000016174363ffffffff161782556106f181610756565b825467ffffffffffffffff91909116700100000000000000000000000000000000027fffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffff9091161790915550565b5f61065c6298968067ffffffffffffffff8416610b86565b5f61076d6298968068010000000000000000610b86565b82106107da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f4d61782076616c7565206578636565646564000000000000000000000000000060448201526064015b60405180910390fd5b629896806107e783610a33565b61065c9190610bca565b80545f9063ffffffff640100000000820481169167ffffffffffffffff7001000000000000000000000000000000008204169161083b916801000000000000000090041643610b4b565b6108459190610bdd565b61084f9190610bdd565b600183015461065c919067ffffffffffffffff16610c09565b610870610aac565b600701546040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152602482018490529091169063a9059cbb906044016020604051808303815f875af11580156108e7573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061090b9190610c2a565b610941576040517f045c4b0200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61094e816107f1565b6001820180547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000001667ffffffffffffffff9290921691909117905580547fffffffffffffffffffffffffffffffffffffffff00000000ffffffffffffffff16680100000000000000004363ffffffff1602179055565b80545f9067ffffffffffffffff700100000000000000000000000000000000820416906109f79063ffffffff1643610b73565b610a019190610bdd565b825461065c91907801000000000000000000000000000000000000000000000000900467ffffffffffffffff16610c09565b5f610a416298968083610c49565b15610aa8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4d617820707265636973696f6e2065786365656465640000000000000000000060448201526064016107d1565b5090565b5f8061065c60017fd56c4f4aab8ca22f9fde432777379f436593c6027698a6995e2daea890bed105610b73565b5f60208284031215610ae9575f80fd5b5035919050565b5f60208284031215610b00575f80fd5b813567ffffffffffffffff81168114610b17575f80fd5b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b67ffffffffffffffff828116828216039080821115610b6c57610b6c610b1e565b5092915050565b8181038181111561065c5761065c610b1e565b808202811582820484141761065c5761065c610b1e565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f82610bd857610bd8610b9d565b500490565b67ffffffffffffffff818116838216028082169190828114610c0157610c01610b1e565b505092915050565b67ffffffffffffffff818116838216019080821115610b6c57610b6c610b1e565b5f60208284031215610c3a575f80fd5b81518015158114610b17575f80fd5b5f82610c5757610c57610b9d565b50069056fea264697066735822122067ddc03e4f906158ba234446668a90793a0c5b4dff4d6c3ec56bc2f9e8ea5ff064736f6c63430008180033",
  "deployedBytecode": "0x608060405234801561000f575f80fd5b5060043610610085575f3560e01c8063b4c9c40811610058578063b4c9c408146100d7578063d2231741146100ea578063e39c6744146100fd578063eb60802214610110575f80fd5b80631f1f9fd5146100895780633631983f1461009e5780636512447d146100b157806379e3e4e4146100c4575b5f80fd5b61009c610097366004610ad9565b610123565b005b61009c6100ac366004610af0565b6101a9565b61009c6100bf366004610af0565b61022c565b61009c6100d2366004610af0565b6102ef565b61009c6100e5366004610ad9565b610373565b61009c6100f8366004610ad9565b610403565b61009c61010b366004610af0565b61053a565b61009c61011e366004610af0565b6105be565b5f61012c61062f565b8054909150700100000000000000000000000000000000900467ffffffffffffffff166101598284610662565b7f8f49a76c5d617bd72673d92d3a019ff8f04f204536aae7a3d10e7ca85603f3cc61018d8267ffffffffffffffff1661073e565b60408051918252602082018690520160405180910390a1505050565b806101b261062f565b60020180547fffffffffffffffffffffffffffffffff0000000000000000ffffffffffffffff166801000000000000000067ffffffffffffffff9384160217905560405190821681527f2fff7e5a48a4befc2c2be4d77e141f6d97907798977ce452429ec55c2658a342906020015b60405180910390a150565b620189c067ffffffffffffffff82161015610273576040517f6e6c9cac00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8061027c61062f565b60010180547fffffffffffffffffffffffffffffffff0000000000000000ffffffffffffffff166801000000000000000067ffffffffffffffff9384160217905560405190821681527f42af14411036d7a50e5e92daf825781450fc8fac8fb65cbdb04720ff08efb84f90602001610221565b806102f861062f565b600101805477ffffffffffffffffffffffffffffffffffffffffffffffff16780100000000000000000000000000000000000000000000000067ffffffffffffffff9384160217905560405190821681527f5fbd75d987b37490f91aa1909db948e7ff14c6ffb495b2f8e0b2334da9b192f190602001610221565b61037c81610756565b61038461062f565b600101805467ffffffffffffffff92909216700100000000000000000000000000000000027fffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffff9092169190911790556040518181527fd363ab4392efaf967a89d8616cba1ff0c6f05a04c2f214671be365f0fab0596090602001610221565b5f61040c61062f565b90505f61041883610756565b90505f610424836107f1565b90508067ffffffffffffffff168267ffffffffffffffff161115610474576040517ff4d678b800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047e8282610b4b565b6001840180547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000001667ffffffffffffffff9290921691909117905582547fffffffffffffffffffffffffffffffffffffffff00000000ffffffffffffffff16680100000000000000004363ffffffff16021783556104fc3385610868565b604080518581523360208201527f370342c3bb9245e20bffe6dced02ba2fceca979701f881d5adc72d838e83f1c5910160405180910390a150505050565b8061054361062f565b60020180547fffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffff1670010000000000000000000000000000000067ffffffffffffffff9384160217905560405190821681527f38552bed8df52ac76c5de6da688eafcda7d7b070f6c987f391a07dd69986d78390602001610221565b806105c761062f565b60020180547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000001667ffffffffffffffff92831617905560405190821681527ff6b8a2b45d0a60381de51a7b980c4660d9e5b82db6e07a4d342bfc17a6ff96bf90602001610221565b5f8061065c60017f0f1d85405047bdb6b0a60e27531f52a1f7a948613527b9b83a7552558207aa16610b73565b92915050565b61066b82610945565b610674826109c4565b825477ffffffffffffffffffffffffffffffffffffffff0000000016780100000000000000000000000000000000000000000000000067ffffffffffffffff92909216919091027fffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000016174363ffffffff161782556106f181610756565b825467ffffffffffffffff91909116700100000000000000000000000000000000027fffffffffffffffff0000000000000000ffffffffffffffffffffffffffffffff9091161790915550565b5f61065c6298968067ffffffffffffffff8416610b86565b5f61076d6298968068010000000000000000610b86565b82106107da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f4d61782076616c7565206578636565646564000000000000000000000000000060448201526064015b60405180910390fd5b629896806107e783610a33565b61065c9190610bca565b80545f9063ffffffff640100000000820481169167ffffffffffffffff7001000000000000000000000000000000008204169161083b916801000000000000000090041643610b4b565b6108459190610bdd565b61084f9190610bdd565b600183015461065c919067ffffffffffffffff16610c09565b610870610aac565b600701546040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152602482018490529091169063a9059cbb906044016020604051808303815f875af11580156108e7573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061090b9190610c2a565b610941576040517f045c4b0200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61094e816107f1565b6001820180547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000001667ffffffffffffffff9290921691909117905580547fffffffffffffffffffffffffffffffffffffffff00000000ffffffffffffffff16680100000000000000004363ffffffff1602179055565b80545f9067ffffffffffffffff700100000000000000000000000000000000820416906109f79063ffffffff1643610b73565b610a019190610bdd565b825461065c91907801000000000000000000000000000000000000000000000000900467ffffffffffffffff16610c09565b5f610a416298968083610c49565b15610aa8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4d617820707265636973696f6e2065786365656465640000000000000000000060448201526064016107d1565b5090565b5f8061065c60017fd56c4f4aab8ca22f9fde432777379f436593c6027698a6995e2daea890bed105610b73565b5f60208284031215610ae9575f80fd5b5035919050565b5f60208284031215610b00575f80fd5b813567ffffffffffffffff81168114610b17575f80fd5b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b67ffffffffffffffff828116828216039080821115610b6c57610b6c610b1e565b5092915050565b8181038181111561065c5761065c610b1e565b808202811582820484141761065c5761065c610b1e565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f82610bd857610bd8610b9d565b500490565b67ffffffffffffffff818116838216028082169190828114610c0157610c01610b1e565b505092915050565b67ffffffffffffffff818116838216019080821115610b6c57610b6c610b1e565b5f60208284031215610c3a575f80fd5b81518015158114610b17575f80fd5b5f82610c5757610c57610b9d565b50069056fea264697066735822122067ddc03e4f906158ba234446668a90793a0c5b4dff4d6c3ec56bc2f9e8ea5ff064736f6c63430008180033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "SSVDAO",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<SSVDAO$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/modules/SSVDAO.sol:SSVDAO",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<SSVDAO$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "SSVDAO",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<SSVDAO$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/modules/SSVDAO.sol:SSVDAO",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<SSVDAO$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "SSVDAO",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<SSVDAO$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/modules/SSVDAO.sol:SSVDAO",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<SSVDAO$Type["abi"]>>;
}