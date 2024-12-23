// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { IBeaconUpgradeable$Type } from "./IBeaconUpgradeable";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["IBeaconUpgradeable"]: IBeaconUpgradeable$Type;
    ["@openzeppelin/contracts-upgradeable/proxy/beacon/IBeaconUpgradeable.sol:IBeaconUpgradeable"]: IBeaconUpgradeable$Type;
  }

  interface ContractTypesMap {
    ["IBeaconUpgradeable"]: GetContractReturnType<IBeaconUpgradeable$Type["abi"]>;
    ["@openzeppelin/contracts-upgradeable/proxy/beacon/IBeaconUpgradeable.sol:IBeaconUpgradeable"]: GetContractReturnType<IBeaconUpgradeable$Type["abi"]>;
  }
}