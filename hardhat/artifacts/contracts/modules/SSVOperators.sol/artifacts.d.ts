// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { SSVOperators$Type } from "./SSVOperators";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["SSVOperators"]: SSVOperators$Type;
    ["contracts/modules/SSVOperators.sol:SSVOperators"]: SSVOperators$Type;
  }

  interface ContractTypesMap {
    ["SSVOperators"]: GetContractReturnType<SSVOperators$Type["abi"]>;
    ["contracts/modules/SSVOperators.sol:SSVOperators"]: GetContractReturnType<SSVOperators$Type["abi"]>;
  }
}
