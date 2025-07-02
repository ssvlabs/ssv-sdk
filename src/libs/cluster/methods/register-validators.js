import { MainnetV4SetterABI } from '@/abi/mainnet/v4/setter';
import { registerValidatorsByClusterSizeLimits } from '@/config';
import { SSVKeys } from '@/libs/ssv-keys/SSVKeys';
import { isKeySharesItem } from '@/utils';
import { createClusterId, createEmptyCluster, getClusterSnapshot } from '@/utils/cluster';
import { isUndefined } from 'lodash-es';
export const registerValidators = async (config, { args: { keyshares, depositAmount = 0n }, ...writeOptions }) => {
    const shares = keyshares.map((share) => {
        return isKeySharesItem(share) ? share.payload : share;
    });
    const operatorIds = shares[0].operatorIds;
    const clusterSize = operatorIds.length;
    const limit = registerValidatorsByClusterSizeLimits[clusterSize];
    if (!limit) {
        throw new Error(`Invalid number of operators in keyshares: ${clusterSize}, should be one of: ${Object.keys(registerValidatorsByClusterSizeLimits).join(', ')}`);
    }
    if (shares.length > limit) {
        throw new Error(`You can't register more than ${limit} validators in a single transaction`);
    }
    const clusterId = createClusterId(config.walletClient.account.address, operatorIds);
    const cluster = await config.api.getCluster({
        id: clusterId,
    });
    const snapshot = cluster ? getClusterSnapshot(cluster) : createEmptyCluster();
    if (shares.length === 1) {
        return config.contract.ssv.write.registerValidator({
            args: {
                amount: depositAmount,
                cluster: snapshot,
                operatorIds: operatorIds.map(BigInt),
                publicKey: shares[0].publicKey,
                sharesData: shares[0].sharesData,
            },
            ...writeOptions,
        });
    }
    return config.contract.ssv.write.bulkRegisterValidator({
        args: {
            cluster: snapshot,
            amount: depositAmount,
            operatorIds: operatorIds.map(BigInt),
            publicKeys: shares.map((share) => share.publicKey),
            sharesData: shares.map((share) => share.sharesData),
        },
        ...writeOptions,
    });
};
export const registerValidatorsRawData = async (config, { args: { keyshares, depositAmount = 0n } }) => {
    const shares = keyshares.map((share) => {
        return isKeySharesItem(share) ? share.payload : share;
    });
    const operatorIds = shares[0].operatorIds;
    const clusterSize = operatorIds.length;
    const limit = registerValidatorsByClusterSizeLimits[clusterSize];
    if (!limit) {
        throw new Error(`Invalid number of operators in keyshares: ${clusterSize}, should be one of: ${Object.keys(registerValidatorsByClusterSizeLimits).join(', ')}`);
    }
    if (shares.length > limit) {
        throw new Error(`You can't register more than ${limit} validators in a single transaction`);
    }
    const clusterId = createClusterId(config.walletClient.account.address, operatorIds);
    const cluster = await config.api.getCluster({
        id: clusterId,
    });
    const snapshot = cluster ? getClusterSnapshot(cluster) : createEmptyCluster();
    if (shares.length === 1) {
        return config.contract.ssv.write.registerValidator.getTransactionData({
            amount: depositAmount,
            cluster: snapshot,
            operatorIds: operatorIds.map(BigInt),
            publicKey: shares[0].publicKey,
            sharesData: shares[0].sharesData,
        });
    }
    return config.contract.ssv.write.bulkRegisterValidator.getTransactionData({
        cluster: snapshot,
        amount: depositAmount,
        operatorIds: operatorIds.map(BigInt),
        publicKeys: shares.map((share) => share.publicKey),
        sharesData: shares.map((share) => share.sharesData),
    });
};
const ssvKeys = new SSVKeys();
export const validateSharesPostRegistration = async (config, args) => {
    const receipt = await config.publicClient.waitForTransactionReceipt({
        hash: args.txHash,
    });
    const ownerNonce = await config.api.getOwnerNonce({
        owner: config.walletClient.account.address,
        block: Number(receipt.blockNumber) - 1,
    });
    if (isUndefined(ownerNonce)) {
        throw new Error('Could not fetch owner nonce');
    }
    const validatorAddedEvents = await config.publicClient.getContractEvents({
        abi: MainnetV4SetterABI,
        address: config.contractAddresses.setter,
        eventName: 'ValidatorAdded',
        args: {
            owner: config.walletClient.account.address,
        },
        fromBlock: receipt.blockNumber,
        toBlock: receipt.blockNumber,
    });
    if (!validatorAddedEvents.length) {
        throw new Error('No ValidatorAdded events found in the receipt');
    }
    const validations = [];
    for (const [index, e] of validatorAddedEvents.entries()) {
        validations.push({
            event: e,
            validation: await ssvKeys.validateSharesPostRegistration({
                blockNumber: Number(receipt.blockNumber),
                operatorsCount: e.args.operatorIds.length,
                isAccountExists: false,
                ownerAddress: config.walletClient.account.address,
                ownerNonce: Number(ownerNonce) + index,
                shares: e.args.shares,
                validatorPublicKey: e.args.publicKey,
            }),
        });
    }
    const isValid = validations.every((r) => r.validation.isValid);
    const invalids = validations.filter((r) => !r.validation.isValid);
    return {
        isValid,
        validations,
        invalids,
        ownerNonceAtBlock: Number(ownerNonce),
        block: Number(receipt.blockNumber),
    };
};
