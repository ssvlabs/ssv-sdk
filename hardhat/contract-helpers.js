import hre, { ethers, upgrades } from 'hardhat';
import { parseEther } from 'viem';
export const CONFIG = {
    initialVersion: 'v1.1.0',
    operatorMaxFeeIncrease: 1000,
    declareOperatorFeePeriod: 3600, // HOUR
    executeOperatorFeePeriod: 86400, // DAY
    minimalOperatorFee: 1000000000n,
    minimalBlocksBeforeLiquidation: 100800,
    minimumLiquidationCollateral: 200000000,
    validatorsPerOperatorLimit: 500,
    maximumOperatorFee: BigInt(76528650000000),
};
export const DEFAULT_OPERATOR_IDS = {
    4: [1, 2, 3, 4],
    7: [1, 2, 3, 4, 5, 6, 7],
    10: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    13: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
};
export const initialBalance = parseEther('1000');
export const initializeContract = async function () {
    const ssvToken = await hre.viem.deployContract('SSVToken');
    const ssvOperatorsMod = await hre.viem.deployContract('SSVOperators');
    const ssvClustersMod = await hre.viem.deployContract('SSVClusters');
    const ssvDAOMod = await hre.viem.deployContract('SSVDAO');
    const ssvViewsMod = await hre.viem.deployContract('contracts/modules/SSVViews.sol:SSVViews');
    const ssvWhitelistMod = await hre.viem.deployContract('SSVOperatorsWhitelist');
    const ssvNetworkFactory = await ethers.getContractFactory('SSVNetwork');
    const ssvNetworkProxy = await await upgrades.deployProxy(ssvNetworkFactory, [
        ssvToken.address,
        ssvOperatorsMod.address,
        ssvClustersMod.address,
        ssvDAOMod.address,
        ssvViewsMod.address,
        CONFIG.minimalBlocksBeforeLiquidation,
        CONFIG.minimumLiquidationCollateral,
        CONFIG.validatorsPerOperatorLimit,
        CONFIG.declareOperatorFeePeriod,
        CONFIG.executeOperatorFeePeriod,
        CONFIG.operatorMaxFeeIncrease,
    ], {
        kind: 'uups',
        unsafeAllow: ['delegatecall'],
    });
    await ssvNetworkProxy.waitForDeployment();
    const ssvNetworkAddress = await ssvNetworkProxy.getAddress();
    const ssvNetwork = await hre.viem.getContractAt('SSVNetwork', ssvNetworkAddress);
    const ssvNetworkViewsFactory = await ethers.getContractFactory('SSVNetworkViews');
    const ssvNetworkViewsProxy = await await upgrades.deployProxy(ssvNetworkViewsFactory, [ssvNetworkAddress], {
        kind: 'uups',
        unsafeAllow: ['delegatecall'],
    });
    await ssvNetworkViewsProxy.waitForDeployment();
    const ssvNetworkViewsAddress = await ssvNetworkViewsProxy.getAddress();
    const ssvNetworkViews = await hre.viem.getContractAt('SSVNetworkViews', ssvNetworkViewsAddress);
    await ssvNetwork.write.updateMaximumOperatorFee([CONFIG.maximumOperatorFee]);
    ssvNetwork.write.updateModule([4, await ssvWhitelistMod.address]);
    const publicClient = await hre.viem.getPublicClient();
    const wallets = await hre.viem.getWalletClients();
    for (let i = 1; i < 7; i++) {
        await ssvToken.write.mint([wallets[i].account.address, initialBalance]);
    }
    return {
        ssvContractsOwner: wallets[0].account,
        publicClient,
        wallets,
        ssvNetwork,
        ssvNetworkViews,
        ssvToken,
        initialBalance,
    };
};
