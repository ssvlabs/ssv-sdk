import type { ConfigReturnType } from '@/config/create';
import { getClusterBalance, getOperatorCapacity } from '@/libs/utils/methods';
import { calcDepositFromRunway } from '@/libs/utils/methods/calc-deposit-from-runway';
import {
  validateKeysharesJSON,
  validateSharesPreRegistration,
} from '@/libs/utils/methods/keyshares';
import { generateKeyShares } from '@/libs/utils/methods/keystores';
import type { RemoveConfigArg } from '@/types/methods';

export const createUtils = (config: ConfigReturnType) => ({
  generateKeyShares,
  validateKeysharesJSON,
  validateSharesPreRegistration: validateSharesPreRegistration.bind(
    null,
    config,
  ) as RemoveConfigArg<typeof validateSharesPreRegistration>,
  getOperatorCapacity: getOperatorCapacity.bind(
    null,
    config,
  ) as RemoveConfigArg<typeof getOperatorCapacity>,
  getClusterBalance: getClusterBalance.bind(null, config) as RemoveConfigArg<
    typeof getClusterBalance
  >,
  calcDepositFromRunway: calcDepositFromRunway.bind(
    null,
    config,
  ) as RemoveConfigArg<typeof calcDepositFromRunway>,
});
