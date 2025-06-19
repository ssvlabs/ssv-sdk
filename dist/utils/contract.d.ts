import { ConfigReturnType } from '../config/create';
import { TransactionReceipt } from 'viem';
export declare const waitForTransaction: <T extends Promise<`0x${string}`>>(config: ConfigReturnType, fn: T) => Promise<TransactionReceipt>;
