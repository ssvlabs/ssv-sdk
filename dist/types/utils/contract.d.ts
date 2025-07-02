import type { ConfigReturnType } from '@/config/create';
import type { Address } from 'abitype';
import type { TransactionReceipt } from 'viem';
export declare const waitForTransaction: <T extends Promise<Address>>(config: ConfigReturnType, fn: T) => Promise<TransactionReceipt>;
