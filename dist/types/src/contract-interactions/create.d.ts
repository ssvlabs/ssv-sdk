import type { ContractNames, ReadProps, ReaderFunctions, WriteProps, WriterFunctions } from './types';
export declare const createWriter: <T extends ContractNames>({ abi, publicClient, walletClient, contractAddress, }: WriteProps) => WriterFunctions<T>;
export declare const createReader: <T extends ContractNames>({ abi, publicClient, contractAddress, }: ReadProps) => ReaderFunctions<T>;
