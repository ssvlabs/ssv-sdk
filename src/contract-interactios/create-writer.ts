import { MainnetV4SetterABI } from '@/abi/mainnet/v4/setter'
import { AbiInputsToParams, paramsToArray } from '@/types/contract-intercations'
import { Prettify } from '@/types/utils'
import { Address, ExtractAbiFunctions } from 'abitype'
import { PublicClient, WalletClient, WriteContractReturnType } from 'viem'

type Props = {
  walletClient: WalletClient
  publicClient: PublicClient
  contractAddress: Address
}

type WriteFns = ExtractAbiFunctions<typeof MainnetV4SetterABI>

// This type maps through each function in WriteFns and creates the desired structure
type WriterFunctions = {
  [K in WriteFns as K['name']]: (
    args: Prettify<AbiInputsToParams<K['inputs']>>,
  ) => Promise<WriteContractReturnType>
}

export const createWriters = ({
  walletClient,
  publicClient,
  contractAddress,
}: Props): WriterFunctions => {
  const writeFnsMainnet = MainnetV4SetterABI.filter(
    (item) =>
      item.type === 'function' &&
      item.stateMutability !== 'view' &&
      item.stateMutability !== 'pure',
  ) as WriteFns[]

  return Object.fromEntries(
    writeFnsMainnet.map((fn) => {
      const func = async (args: any) => {
        const { request } = await publicClient.simulateContract({
          address: contractAddress,
          abi: MainnetV4SetterABI,
          functionName: fn.name as any,
          args: paramsToArray({ params: args, abiFunction: fn }),
          account: walletClient.account!,
        })
        return await walletClient.writeContract(request)
      }
      return [fn.name, func]
    }),
  ) as WriterFunctions
}
