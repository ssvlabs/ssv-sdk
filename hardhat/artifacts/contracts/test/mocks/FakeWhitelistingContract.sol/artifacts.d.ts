// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { FakeWhitelistingContract$Type } from "./FakeWhitelistingContract";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["FakeWhitelistingContract"]: FakeWhitelistingContract$Type;
    ["contracts/test/mocks/FakeWhitelistingContract.sol:FakeWhitelistingContract"]: FakeWhitelistingContract$Type;
  }

  interface ContractTypesMap {
    ["FakeWhitelistingContract"]: GetContractReturnType<FakeWhitelistingContract$Type["abi"]>;
    ["contracts/test/mocks/FakeWhitelistingContract.sol:FakeWhitelistingContract"]: GetContractReturnType<FakeWhitelistingContract$Type["abi"]>;
  }
}