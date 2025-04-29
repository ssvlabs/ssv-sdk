import type { AbiType, AbiTypeToPrimitiveType } from 'abitype';
import type { AbiFunction, AbiParameter, AbiParameterToPrimitiveType } from 'viem';
import type { MainnetV4SetterABI } from '@/abi/mainnet/v4/setter';
import type { TokenABI } from '@/abi/token';
import type { ExtractAbiFunction } from 'abitype';
import type { DecodeEventLogReturnType } from 'viem';
export type MainnetEvent = DecodeEventLogReturnType<typeof MainnetV4SetterABI>;
export type TokenEvent = DecodeEventLogReturnType<typeof TokenABI>;
export type ValidatorAddedEvent = Extract<MainnetEvent, {
    eventName: 'ValidatorAdded';
}>;
type DepositFN = ExtractAbiFunction<typeof MainnetV4SetterABI, 'deposit'>;
export type ClusterSnapshot = AbiParameterToPrimitiveType<Extract<DepositFN['inputs'][number], {
    internalType: 'struct ISSVNetworkCore.Cluster';
}>>;
export type AbiInputsToParams<T extends readonly AbiParameter[]> = {
    [K in T[number] as K['name'] extends string ? K['name'] : never]: AbiParameterToPrimitiveType<K>;
};
export declare const paramsToArray: <Fn extends AbiFunction, Params extends Record<string, AbiTypeToPrimitiveType<AbiType>>>({ params, abiFunction, }: {
    params: Params;
    abiFunction: Fn;
}) => (Fn["inputs"] extends infer T_2 extends readonly import("abitype").AbiParameter[] ? { [key_1 in keyof T_2]: import("abitype").AbiParameterToPrimitiveType<Fn["inputs"][key_1], import("abitype").AbiParameterKind>; } : never) extends infer T ? { [key in keyof T]: (Fn["inputs"] extends infer T_1 extends readonly import("abitype").AbiParameter[] ? { [key_1 in keyof T_1]: import("abitype").AbiParameterToPrimitiveType<Fn["inputs"][key_1], import("abitype").AbiParameterKind>; } : never)[key]; } : never;
export {};
