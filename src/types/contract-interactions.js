import { stringifyBigints } from '@/utils/bigint';
import { isUndefined } from 'lodash-es';
export const paramsToArray = ({ params, abiFunction, }) => {
    return stringifyBigints(abiFunction.inputs.reduce((acc, param) => {
        if (param.name && !isUndefined(params[param.name])) {
            return [...acc, params[param.name]];
        }
        else {
            console.error(`Missing argument for ${param}`);
        }
        return acc;
    }, []));
};
