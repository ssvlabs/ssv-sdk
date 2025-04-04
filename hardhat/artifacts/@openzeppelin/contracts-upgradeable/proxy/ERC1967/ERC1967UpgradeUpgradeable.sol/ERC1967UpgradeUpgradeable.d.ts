// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface ERC1967UpgradeUpgradeable$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "ERC1967UpgradeUpgradeable",
  "sourceName": "@openzeppelin/contracts-upgradeable/proxy/ERC1967/ERC1967UpgradeUpgradeable.sol",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "previousAdmin",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newAdmin",
          "type": "address"
        }
      ],
      "name": "AdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "beacon",
          "type": "address"
        }
      ],
      "name": "BeaconUpgraded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "version",
          "type": "uint8"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        }
      ],
      "name": "Upgraded",
      "type": "event"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "ERC1967UpgradeUpgradeable",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<ERC1967UpgradeUpgradeable$Type["abi"]>>;
  export function deployContract(
    contractName: "@openzeppelin/contracts-upgradeable/proxy/ERC1967/ERC1967UpgradeUpgradeable.sol:ERC1967UpgradeUpgradeable",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<ERC1967UpgradeUpgradeable$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "ERC1967UpgradeUpgradeable",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<ERC1967UpgradeUpgradeable$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "@openzeppelin/contracts-upgradeable/proxy/ERC1967/ERC1967UpgradeUpgradeable.sol:ERC1967UpgradeUpgradeable",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<ERC1967UpgradeUpgradeable$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "ERC1967UpgradeUpgradeable",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<ERC1967UpgradeUpgradeable$Type["abi"]>>;
  export function getContractAt(
    contractName: "@openzeppelin/contracts-upgradeable/proxy/ERC1967/ERC1967UpgradeUpgradeable.sol:ERC1967UpgradeUpgradeable",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<ERC1967UpgradeUpgradeable$Type["abi"]>>;
}
