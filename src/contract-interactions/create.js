/* eslint-disable @typescript-eslint/no-explicit-any */
import { HoleskyV4GetterABI } from '@/abi/holesky/v4/getter';
import { MainnetV4SetterABI } from '@/abi/mainnet/v4/setter';
import { TokenABI } from '@/abi/token';
import { paramsToArray } from '@/types/contract-interactions';
import { tryCatch } from '@/utils';
import { decodeEventLog, encodeFunctionData } from 'viem';
const ABIS = [TokenABI, MainnetV4SetterABI, HoleskyV4GetterABI];
export const createWriter = ({ abi, publicClient, walletClient, contractAddress, }) => {
    const writeFnsMainnet = abi.filter((item) => item.type === 'function' &&
        (item.stateMutability === 'nonpayable' || item.stateMutability === 'payable'));
    return Object.fromEntries(writeFnsMainnet.map((fn) => {
        const simulate = async (options) => publicClient.simulateContract({
            ...options,
            address: contractAddress,
            abi,
            functionName: fn.name,
            args: paramsToArray({ params: options.args, abiFunction: fn }),
            account: walletClient.account,
        });
        const getTransactionData = (params) => {
            return encodeFunctionData({
                abi,
                functionName: fn.name,
                args: paramsToArray({ params, abiFunction: fn }),
            });
        };
        const func = async (options) => {
            const { request } = await simulate(options);
            const hash = await walletClient.writeContract(request);
            return {
                hash,
                wait: () => publicClient.waitForTransactionReceipt({ hash }).then((receipt) => ({
                    ...receipt,
                    events: receipt.logs.reduce((acc, log) => {
                        try {
                            const event = decodeEventLog({
                                abi: abi,
                                data: log.data,
                                topics: log.topics,
                            });
                            acc.push(event);
                        }
                        catch {
                            for (const eventAbi of ABIS) {
                                tryCatch(() => {
                                    const event = decodeEventLog({
                                        abi: eventAbi,
                                        data: log.data,
                                        topics: log.topics,
                                    });
                                    acc.push(event);
                                });
                            }
                        }
                        return acc;
                    }, []),
                })),
            };
        };
        func.simulate = simulate;
        func.getTransactionData = getTransactionData;
        return [fn.name, func];
    }));
};
export const createReader = ({ abi, publicClient, contractAddress, }) => {
    const readFnsMainnet = abi.filter((item) => item.type === 'function' &&
        (item.stateMutability === 'view' || item.stateMutability === 'pure'));
    return Object.fromEntries(readFnsMainnet.map((fn) => {
        const func = async (args) => {
            return await publicClient.readContract({
                abi,
                address: contractAddress,
                functionName: fn.name,
                args: paramsToArray({ params: args, abiFunction: fn }),
            });
        };
        return [fn.name, func];
    }));
};
