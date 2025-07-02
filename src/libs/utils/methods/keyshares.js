import { MainnetV4SetterABI } from '@/abi/mainnet/v4/setter';
import { canAccountUseOperator } from '@/libs/operator/methods';
import { KeyShares } from '@/libs/ssv-keys/KeyShares/KeyShares';
import { KeySharesItem } from '@/libs/ssv-keys/KeyShares/KeySharesItem';
import { KeysharesValidationError, KeysharesValidationErrors, ensureNoKeysharesErrors, ensureValidatorsUniqueness, validateConsistentOperatorIds, validateConsistentOperatorPublicKeys, } from '@/utils/keyshares';
import { sortNumbers } from '@/utils/number';
import { isEqual } from 'lodash-es';
import { decodeEventLog } from 'viem';
export const validateSharesPreRegistration = async (config, { keyshares, operatorIds }) => {
    const operators = await config.api.getOperators({ operatorIds });
    const shares = await validateKeysharesJSON({
        account: config.walletClient.account.address,
        operators,
        keyshares,
    });
    const statuses = await Promise.all(shares.map((share) => {
        return config.api
            .getValidator({ id: share.data.publicKey })
            .then((res) => [share, Boolean(res)])
            .catch(() => [share, false]);
    }));
    if (statuses.every(([, isRegistered]) => isRegistered)) {
        throw new Error('All validators are already registered');
    }
    const nonce = await config.api
        .getOwnerNonce({ owner: config.walletClient.account.address })
        .then((nonce) => {
        if (!nonce)
            throw new Error('Failed to get owner nonce');
        return Number(nonce);
    });
    let i = 0;
    const sharesWithStatuses = statuses.reduce((acc, [share, isRegistered]) => {
        if (isRegistered) {
            acc.registered.push(share);
        }
        else {
            const validNonce = nonce + i === share.data.ownerNonce;
            if (validNonce)
                i++;
            if (validNonce) {
                acc.available.push(share);
            }
            else {
                acc.incorrect.push(share);
            }
        }
        return acc;
    }, { available: [], registered: [], incorrect: [] });
    if (!sharesWithStatuses.available.length) {
        throw new Error(`No available keyshares to register. ${sharesWithStatuses.incorrect.length} keyshares have incorrect nonce and ${sharesWithStatuses.registered.length} are already registered`);
    }
    const limit = await config.contract.ssv.read.getValidatorsPerOperatorLimit();
    for (const operator of operators) {
        if (!(await canAccountUseOperator(config, operator, config.walletClient.account.address))) {
            throw new Error(`Operator ${operator.id} is private and the account is not whitelisted`);
        }
        if (Number(operator.validatorCount) + sharesWithStatuses.available.length > limit) {
            throw new Error(`Operator ${operator.id} has reached the limit of ${limit} validators`);
        }
    }
    return sharesWithStatuses;
};
export const validateKeysharesJSON = async ({ account, operators, keyshares, }) => {
    const shares = (await KeyShares.fromJson(keyshares)).list();
    ensureNoKeysharesErrors(shares);
    ensureValidatorsUniqueness(shares);
    validateConsistentOperatorPublicKeys(shares, operators);
    await Promise.all(shares.map((share) => share.validateSingleShares(share.payload.sharesData, {
        ownerAddress: account,
        ownerNonce: share.data.ownerNonce || 0,
        publicKey: share.data.publicKey || '',
    })));
    const shareOperatorIds = validateConsistentOperatorIds(shares);
    const operatorIds = sortNumbers(operators.map((operator) => Number(operator.id)));
    if (!isEqual(sortNumbers(shareOperatorIds), sortNumbers(operatorIds))) {
        throw new KeysharesValidationError(KeysharesValidationErrors.ClusterMismatch);
    }
    return shares;
};
export const validateEvent = async (config, hash) => {
    const receipt = await config.publicClient.waitForTransactionReceipt({ hash });
    const events = receipt.logs.reduce((acc, log) => {
        try {
            acc.push(decodeEventLog({
                abi: MainnetV4SetterABI,
                data: log.data,
                topics: log.topics,
            }));
        }
        catch (e) {
            console.error(e);
        }
        return acc;
    }, []);
    const validatorAdded = events.find((event) => event.eventName === 'ValidatorAdded');
    if (!validatorAdded)
        return false;
    const keysharesItem = new KeySharesItem();
    const shares = keysharesItem.buildSharesFromBytes(validatorAdded.args.shares, validatorAdded.args.operatorIds.length);
    return shares;
    // const keySharesItem = new KeySharesItem()
    // let ownerNonce: number | null = null
    // // Try to save public keys and encrypted keys anywhere regardless of further validations
    // const [shares, error] = tryCatch(
    //   () =>
    //     keySharesItem.buildSharesFromBytes(event.args.shares, event.args.operatorIds.length) as {
    //       sharesPublicKeys: string[]
    //       encryptedKeys: string[]
    //     },
    // )
    // // Now validate signature, regardless if shares extracted or not
    // let fromSignatureData: IKeySharesFromSignatureData
    // try {
    //   // To properly check shares nonce should be increase as it would
    //   // happen on webapp side
    //   fromSignatureData = {
    //     ownerNonce:
    //     publicKey: event.args.publicKey,
    //     ownerAddress: event.args.owner,
    //   }
    //   await keySharesItem.validateSingleShares(event.args.shares, fromSignatureData)
    // } catch (e) {
    //   return false
    // }
    // return true
};
