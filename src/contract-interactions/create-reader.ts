/* eslint-disable @typescript-eslint/no-explicit-any */
import { MainnetV4GetterABI } from '@/abi/mainnet/v4/getter'
import type { AbiInputsToParams } from '@/types/contract-interactions'
import { paramsToArray } from '@/types/contract-interactions'
import type { Prettify } from '@/types/utils'
import type { Address, ExtractAbiFunctions } from 'abitype'
import type { ContractFunctionArgs, PublicClient, ReadContractReturnType } from 'viem'

type Props = {
  publicClient: PublicClient
  contractAddress: Address
}

type ReadFns = ExtractAbiFunctions<typeof MainnetV4GetterABI, 'view' | 'pure'>

// This type maps through each function in ReadFns and creates the desired structure
type ReaderFunctions = {
  [K in ReadFns as K['name']]: (
    args: Prettify<AbiInputsToParams<K['inputs']>>,
  ) => Promise<
    ReadContractReturnType<
      typeof MainnetV4GetterABI,
      K['name'],
      ContractFunctionArgs<typeof MainnetV4GetterABI, 'pure' | 'view', K['name']>
    >
  >
}

export const createContractReader = ({ publicClient, contractAddress }: Props) => {
  const readFnsMainnet = MainnetV4GetterABI.filter(
    (item) =>
      item.type === 'function' &&
      (item.stateMutability == 'view' || item.stateMutability == 'nonpayable'),
  ) as ReadFns[]

  return Object.fromEntries(
    readFnsMainnet.map((fn) => {
      const func = async (args: any) => {
        return await publicClient.readContract({
          address: contractAddress,
          abi: MainnetV4GetterABI,
          functionName: fn.name as any,
          args: paramsToArray({ params: args, abiFunction: fn }),
        })
      }
      return [fn.name, func]
    }),
  ) as unknown as ReaderFunctions
}
