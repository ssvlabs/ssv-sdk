import { ConfigReturnType } from '../config/create';
import { Address } from 'abitype';
import { TransactionReceipt } from 'viem';
export declare const waitForTransaction: <T extends Promise<Address>>(config: ConfigReturnType, fn: T) => Promise<TransactionReceipt>;
