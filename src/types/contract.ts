import { MainnetV4SetterABI } from '@/abi/mainnet/v4/setter'
import { AbiParameterToPrimitiveType, ExtractAbiFunction } from 'abitype'
import { DecodeEventLogReturnType } from 'viem'

export type MainnetEvent = DecodeEventLogReturnType<typeof MainnetV4SetterABI>
export type ValidatorAddedEvent = Extract<MainnetEvent, { eventName: 'ValidatorAdded' }>

type DepositFN = ExtractAbiFunction<typeof MainnetV4SetterABI, 'deposit'>

export type ClusterSnapshot = AbiParameterToPrimitiveType<
  Extract<DepositFN['inputs'][number], { internalType: 'struct ISSVNetworkCore.Cluster' }>
>
