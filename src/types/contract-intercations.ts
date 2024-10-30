import { stringifyBigints } from '@/utils/bigint'
import { AbiParametersToPrimitiveTypes, AbiType, AbiTypeToPrimitiveType } from 'abitype'
import { isUndefined } from 'lodash-es'
import { AbiFunction, AbiParameter, AbiParameterToPrimitiveType } from 'viem'

export type AbiInputsToParams<T extends readonly AbiParameter[]> = {
  [K in T[number] as K['name'] extends string ? K['name'] : never]: AbiParameterToPrimitiveType<K>
}

export const paramsToArray = <
  Fn extends AbiFunction,
  Params extends Record<string, AbiTypeToPrimitiveType<AbiType>>,
>({
  params,
  abiFunction,
}: {
  params: Params
  abiFunction: Fn
}) => {
  return stringifyBigints(
    abiFunction.inputs.reduce(
      (acc, param) => {
        if (param.name && !isUndefined(params[param.name])) {
          return [...acc, params[param.name]] as AbiParametersToPrimitiveTypes<Fn['inputs']>
        } else {
          console.error(`Missing argument for ${param}`)
        }
        return acc
      },
      [] as AbiParametersToPrimitiveTypes<Fn['inputs']>,
    ),
  ) as AbiParametersToPrimitiveTypes<Fn['inputs']>
}
