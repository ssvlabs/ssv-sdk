import { stringifyBigints } from '@/utils/bigint';
import type {
  AbiParametersToPrimitiveTypes,
  AbiType,
  AbiTypeToPrimitiveType,
} from 'abitype';
import { isUndefined } from 'lodash-es';
import type {
  AbiFunction,
  AbiParameter,
  AbiParameterToPrimitiveType,
} from 'viem';

import type { MainnetV4SetterABI } from '@/abi/mainnet/v4/setter';
import type { TokenABI } from '@/abi/token';
import type { ExtractAbiFunction } from 'abitype';
import type { DecodeEventLogReturnType } from 'viem';

export type MainnetEvent = DecodeEventLogReturnType<typeof MainnetV4SetterABI>;
export type TokenEvent = DecodeEventLogReturnType<typeof TokenABI>;
export type ValidatorAddedEvent = Extract<
  MainnetEvent,
  { eventName: 'ValidatorAdded' }
>;

type DepositFN = ExtractAbiFunction<typeof MainnetV4SetterABI, 'deposit'>;

export type ClusterSnapshot = AbiParameterToPrimitiveType<
  Extract<
    DepositFN['inputs'][number],
    { internalType: 'struct ISSVNetworkCore.Cluster' }
  >
>;

export type AbiInputsToParams<T extends readonly AbiParameter[]> = {
  [K in T[number] as K['name'] extends string
    ? K['name']
    : never]: AbiParameterToPrimitiveType<K>;
};

export class MissingAbiParameterError extends Error {
  readonly code = 'MISSING_ABI_PARAMETER';
  readonly functionName: string;
  readonly parameterName: string;
  readonly parameterIndex: number;

  constructor({
    functionName,
    parameterName,
    parameterIndex,
  }: {
    functionName: string;
    parameterName: string;
    parameterIndex: number;
  }) {
    super(
      `Missing required ABI parameter "${parameterName}" for function "${functionName}" at index ${parameterIndex}.`,
    );
    this.name = 'MissingAbiParameterError';
    this.functionName = functionName;
    this.parameterName = parameterName;
    this.parameterIndex = parameterIndex;
  }
}

export const paramsToArray = <
  Fn extends AbiFunction,
  Params extends Record<string, AbiTypeToPrimitiveType<AbiType>>,
>({
  params,
  abiFunction,
}: {
  params: Params;
  abiFunction: Fn;
}) => {
  const args = abiFunction.inputs.map((param, parameterIndex) => {
    const parameterName = param.name;

    if (!parameterName || isUndefined(params[parameterName])) {
      throw new MissingAbiParameterError({
        functionName: abiFunction.name,
        parameterName: parameterName || `<unnamed_${parameterIndex}>`,
        parameterIndex,
      });
    }

    return params[parameterName];
  });

  return stringifyBigints(args) as AbiParametersToPrimitiveTypes<Fn['inputs']>;
};
