import { ConfigReturnType } from '../config';
import { PublicClient } from 'viem';
export declare const createMockApi: (publicClient: PublicClient) => ConfigReturnType["api"];
