// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface StorageSlotUpgradeable$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "StorageSlotUpgradeable",
  "sourceName": "@openzeppelin/contracts-upgradeable/utils/StorageSlotUpgradeable.sol",
  "abi": [],
  "bytecode": "0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f80fdfea2646970667358221220cc50720c35439012f7378278a5a7c9feb03a850b4f8ff42d3ec2f7d1144b8ec964736f6c63430008180033",
  "deployedBytecode": "0x730000000000000000000000000000000000000000301460806040525f80fdfea2646970667358221220cc50720c35439012f7378278a5a7c9feb03a850b4f8ff42d3ec2f7d1144b8ec964736f6c63430008180033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "StorageSlotUpgradeable",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<StorageSlotUpgradeable$Type["abi"]>>;
  export function deployContract(
    contractName: "@openzeppelin/contracts-upgradeable/utils/StorageSlotUpgradeable.sol:StorageSlotUpgradeable",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<StorageSlotUpgradeable$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "StorageSlotUpgradeable",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<StorageSlotUpgradeable$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "@openzeppelin/contracts-upgradeable/utils/StorageSlotUpgradeable.sol:StorageSlotUpgradeable",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<StorageSlotUpgradeable$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "StorageSlotUpgradeable",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<StorageSlotUpgradeable$Type["abi"]>>;
  export function getContractAt(
    contractName: "@openzeppelin/contracts-upgradeable/utils/StorageSlotUpgradeable.sol:StorageSlotUpgradeable",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<StorageSlotUpgradeable$Type["abi"]>>;
}
