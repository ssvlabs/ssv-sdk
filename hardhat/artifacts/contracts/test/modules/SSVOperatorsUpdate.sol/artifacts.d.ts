// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { SSVOperatorsUpdate$Type } from "./SSVOperatorsUpdate";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["SSVOperatorsUpdate"]: SSVOperatorsUpdate$Type;
    ["contracts/test/modules/SSVOperatorsUpdate.sol:SSVOperatorsUpdate"]: SSVOperatorsUpdate$Type;
  }

  interface ContractTypesMap {
    ["SSVOperatorsUpdate"]: GetContractReturnType<SSVOperatorsUpdate$Type["abi"]>;
    ["contracts/test/modules/SSVOperatorsUpdate.sol:SSVOperatorsUpdate"]: GetContractReturnType<SSVOperatorsUpdate$Type["abi"]>;
  }
}
