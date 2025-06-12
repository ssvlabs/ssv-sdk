import type { ConfigReturnType } from '@/config';
import { type PublicClient } from 'viem';
export declare const createMockApi: (publicClient: PublicClient) => ConfigReturnType['api'];
