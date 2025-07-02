import { getClusterBalance, getOperatorCapacity } from '@/libs/utils/methods';
import { validateKeysharesJSON, validateSharesPreRegistration } from '@/libs/utils/methods/keyshares';
import { generateKeyShares } from '@/libs/utils/methods/keystores';
export const createUtils = (config) => ({
    generateKeyShares,
    validateKeysharesJSON,
    validateSharesPreRegistration: validateSharesPreRegistration.bind(null, config),
    getOperatorCapacity: getOperatorCapacity.bind(null, config),
    getClusterBalance: getClusterBalance.bind(null, config),
});
