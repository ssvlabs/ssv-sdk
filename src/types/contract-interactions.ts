import { stringifyBigints } from '@/utils/bigint'
import type { AbiParametersToPrimitiveTypes, AbiType, AbiTypeToPrimitiveType } from 'abitype'
import { isUndefined } from 'lodash-es'
import type { AbiFunction, AbiParameter, AbiParameterToPrimitiveType } from 'viem'

import type { MainnetV4SetterABI } from '@/abi/mainnet/v4/setter'
import type { TokenABI } from '@/abi/token'
import type { ExtractAbiFunction } from 'abitype'
import type { DecodeEventLogReturnType } from 'viem'

export type MainnetEvent = DecodeEventLogReturnType<typeof MainnetV4SetterABI>
export type TokenEvent = DecodeEventLogReturnType<typeof TokenABI>
export type ValidatorAddedEvent = Extract<MainnetEvent, { eventName: 'ValidatorAdded' }>

type DepositFN = ExtractAbiFunction<typeof MainnetV4SetterABI, 'deposit'>

export type ClusterSnapshot = AbiParameterToPrimitiveType<
  Extract<DepositFN['inputs'][number], { internalType: 'struct ISSVNetworkCore.Cluster' }>
>

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
