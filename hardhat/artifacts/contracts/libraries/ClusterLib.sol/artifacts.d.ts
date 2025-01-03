// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { ClusterLib$Type } from "./ClusterLib";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["ClusterLib"]: ClusterLib$Type;
    ["contracts/libraries/ClusterLib.sol:ClusterLib"]: ClusterLib$Type;
  }

  interface ContractTypesMap {
    ["ClusterLib"]: GetContractReturnType<ClusterLib$Type["abi"]>;
    ["contracts/libraries/ClusterLib.sol:ClusterLib"]: GetContractReturnType<ClusterLib$Type["abi"]>;
  }
}
