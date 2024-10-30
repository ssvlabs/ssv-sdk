import { TokenABI } from '@/abi/token'
import { AbiInputsToParams, paramsToArray } from '@/types/contract-intercations'
import { Address, ExtractAbiFunctions } from 'abitype'
import {
    ContractFunctionArgs,
    PublicClient,
    ReadContractReturnType,
    WalletClient,
    WriteContractReturnType,
} from 'viem'

type ReadFns = ExtractAbiFunctions<typeof TokenABI, 'view' | 'pure'>
type WriteFns = ExtractAbiFunctions<typeof TokenABI, 'nonpayable' | 'payable'>

// This type maps through each function in ReadFns and creates the desired structure
type ReaderFunctions = {
  [K in ReadFns as K['name']]: (
    args: AbiInputsToParams<K['inputs']>,
  ) => Promise<
    ReadContractReturnType<
      typeof TokenABI,
      K['name'],
      ContractFunctionArgs<typeof TokenABI, 'pure' | 'view', K['name']>
    >
  >
}

type WriteProps = {
  walletClient: WalletClient
  publicClient: PublicClient
  contractAddress: Address
}

// This type maps through each function in WriteFns and creates the desired structure
type WriterFunctions = {
  [K in WriteFns as K['name']]: (
    args: AbiInputsToParams<K['inputs']>,
  ) => Promise<WriteContractReturnType>
}

export const createToken = ({
  walletClient,
  publicClient,
  contractAddress,
}: WriteProps): {
  read: ReaderFunctions
  write: WriterFunctions
} => {
  const writeFnsMainnet = TokenABI.filter(
    (item) => item.type === 'function' && item.stateMutability !== 'view',
  ) as WriteFns[]

  const readFnsMainnet = TokenABI.filter(
    (item) =>
      item.type === 'function' &&
      (item.stateMutability == 'view' || item.stateMutability == 'nonpayable'),
  ) as ReadFns[]

  return {
    write: Object.fromEntries(
      writeFnsMainnet.map((fn) => {
        const func = async (args: any) => {
          const { request } = await publicClient.simulateContract({
            address: contractAddress,
            abi: TokenABI,
            functionName: fn.name as any,
            args: paramsToArray({ params: args, abiFunction: fn }),
            account: walletClient.account!,
          })
          return await walletClient.writeContract(request)
        }
        return [fn.name, func]
      }),
    ) as unknown as WriterFunctions,
    read: Object.fromEntries(
      readFnsMainnet.map((fn) => {
        const func = async (args: any) => {
          return await publicClient.readContract({
            address: contractAddress,
            abi: TokenABI,
            functionName: fn.name as any,
            args: paramsToArray({ params: args, abiFunction: fn }),
          })
        }
        return [fn.name, func]
      }),
    ) as unknown as ReaderFunctions,
  }
}
