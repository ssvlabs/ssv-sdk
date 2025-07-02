import { globals } from '@/config';
import { roundOperatorFee } from '@/utils';
import { encodeAbiParameters, isAddressEqual, parseAbiParameters, zeroAddress } from 'viem';
export const withdraw = async (config, { args: { operatorId, amount }, ...writeOptions }) => {
    const balance = await config.contract.ssv.read.getOperatorEarnings({
        id: BigInt(operatorId),
    });
    const isWithdrawingAll = amount >= balance;
    if (isWithdrawingAll) {
        return config.contract.ssv.write.withdrawAllOperatorEarnings({
            args: {
                operatorId: BigInt(operatorId),
            },
            ...writeOptions,
        });
    }
    return config.contract.ssv.write.withdrawOperatorEarnings({
        args: {
            operatorId: BigInt(operatorId),
            amount,
        },
        ...writeOptions,
    });
};
export const registerOperator = async (config, { args: { isPrivate, yearlyFee, publicKey }, ...writeOptions }) => {
    return config.contract.ssv.write.registerOperator({
        args: {
            publicKey: encodeAbiParameters(parseAbiParameters('string'), [publicKey]),
            fee: roundOperatorFee(yearlyFee / globals.BLOCKS_PER_YEAR),
            setPrivate: isPrivate,
        },
        ...writeOptions,
    });
};
export const setOperatorWhitelists = async (config, { args: { operatorIds, contractAddress }, ...writeOptions }) => {
    const isWhitelistingContract = await config.contract.ssv.read.isWhitelistingContract({
        contractAddress,
    });
    if (!isWhitelistingContract) {
        throw new Error('The provided contract is not whitelisting contract');
    }
    return config.contract.ssv.write.setOperatorsWhitelists({
        args: {
            operatorIds: operatorIds.map(BigInt),
            whitelistAddresses: [contractAddress],
        },
        ...writeOptions,
    });
};
export const canAccountUseOperator = async (config, operator, account) => {
    if (!operator)
        return false;
    if (!operator.isPrivate)
        return true;
    const isWhitelisted = operator.whitelisted.some((addr) => isAddressEqual(addr, account));
    if (isWhitelisted)
        return true;
    const hasExternalContract = Boolean(operator.whitelistedContract && operator.whitelistedContract !== zeroAddress);
    if (!hasExternalContract)
        return false;
    return config.contract.ssv.read.isAddressWhitelistedInWhitelistingContract({
        addressToCheck: account,
        operatorId: BigInt(operator.id),
        whitelistingContract: operator.whitelistedContract,
    });
};
