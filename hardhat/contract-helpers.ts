import "@nomicfoundation/hardhat-viem"
import "@openzeppelin/hardhat-upgrades"
import hre, { ethers, upgrades } from 'hardhat'
import { parseEther, type Address } from 'viem'

import type { SSVConfig } from './types'

export const CONFIG: SSVConfig = {
  initialVersion: 'v1.1.0',
  operatorMaxFeeIncrease: 1000,
  declareOperatorFeePeriod: 3600, // HOUR
  executeOperatorFeePeriod: 86400, // DAY
  minimalOperatorFee: 1000000000n,
  minimalBlocksBeforeLiquidation: 100800,
  minimumLiquidationCollateral: 200000000,
  validatorsPerOperatorLimit: 500,
  maximumOperatorFee: BigInt(76528650000000),
  defaultOracleIds: [1, 2, 3, 4],
  quorumBps: 6667,
}

export const DEFAULT_OPERATOR_IDS = {
  4: [1, 2, 3, 4],
  7: [1, 2, 3, 4, 5, 6, 7],
  10: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  13: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
}

export const initialBalance = parseEther('1000')
export const initializeContract = async function () {
  const mockCSSV = await hre.viem.deployContract('MockCSSV')
  const ssvToken = await hre.viem.deployContract('SSVToken')
  const ssvOperatorsMod = await hre.viem.deployContract('SSVOperators', [0n])
  const ssvClustersMod = await hre.viem.deployContract('SSVClusters')
  const ssvDAOMod = await hre.viem.deployContract('SSVDAO', [mockCSSV.address])
  const ssvViewsMod = await hre.viem.deployContract('contracts/modules/SSVViews.sol:SSVViews', [mockCSSV.address])
  const ssvWhitelistMod = await hre.viem.deployContract('SSVOperatorsWhitelist')
  const ssvStakingMod = await hre.viem.deployContract('SSVStaking', [mockCSSV.address])
  const ssvValidatorsMod = await hre.viem.deployContract('SSVValidators')

  const ssvNetworkFactory = await ethers.getContractFactory('SSVNetwork')
  const ssvNetworkProxy = await await upgrades.deployProxy(
    ssvNetworkFactory,
    [
      ssvToken.address,
      ssvOperatorsMod.address,
      ssvClustersMod.address,
      ssvDAOMod.address,
      ssvViewsMod.address,
      {
        minimumBlocksBeforeLiquidation: CONFIG.minimalBlocksBeforeLiquidation,
        minimumLiquidationCollateral: CONFIG.minimumLiquidationCollateral,
        validatorsPerOperatorLimit: CONFIG.validatorsPerOperatorLimit,
        declareOperatorFeePeriod: CONFIG.declareOperatorFeePeriod,
        executeOperatorFeePeriod: CONFIG.executeOperatorFeePeriod,
        operatorMaxFeeIncrease: CONFIG.operatorMaxFeeIncrease,
        defaultOracleIds: CONFIG.defaultOracleIds,
        quorumBps: CONFIG.quorumBps,
      },
    ],
    {
      kind: 'uups',
      unsafeAllow: ['delegatecall'],
    },
  )
  await ssvNetworkProxy.waitForDeployment()
  const ssvNetworkAddress = await ssvNetworkProxy.getAddress()
  const ssvNetwork = await hre.viem.getContractAt('SSVNetwork', ssvNetworkAddress as Address)

  const ssvNetworkViewsFactory = await ethers.getContractFactory('SSVNetworkViews')
  const ssvNetworkViewsProxy = await await upgrades.deployProxy(
    ssvNetworkViewsFactory,
    [ssvNetworkAddress],
    {
      kind: 'uups',
      unsafeAllow: ['delegatecall'],
    },
  )
  await ssvNetworkViewsProxy.waitForDeployment()
  const ssvNetworkViewsAddress = await ssvNetworkViewsProxy.getAddress()
  const ssvNetworkViews = await hre.viem.getContractAt(
    'SSVNetworkViews',
    ssvNetworkViewsAddress as Address,
  )

  await ssvNetwork.write.updateMaximumOperatorFee([CONFIG.maximumOperatorFee as bigint])

  await ssvNetwork.write.updateModule([4, await ssvWhitelistMod.address])
  await ssvNetwork.write.updateModule([5, await ssvStakingMod.address])
  await ssvNetwork.write.updateModule([6, await ssvValidatorsMod.address])

  const publicClient = await hre.viem.getPublicClient()
  const wallets = await hre.viem.getWalletClients()

  for (let i = 1; i < 7; i++) {
    await ssvToken.write.mint([wallets[i].account.address, initialBalance])
  }

  return {
    ssvContractsOwner: wallets[0].account,
    publicClient,
    wallets,
    ssvNetwork,
    ssvNetworkViews,
    ssvToken,
    initialBalance,
  }
}
