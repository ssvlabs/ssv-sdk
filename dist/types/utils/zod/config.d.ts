import type { Address, PublicClient, WalletClient } from 'viem';
import { z } from 'zod';
export declare const configArgsSchema: z.ZodType<ConfigArgs>;
export type ConfigArgs = {
    walletClient: WalletClient;
    publicClient: PublicClient;
    _?: {
        graphUrl?: string;
        restUrl?: string;
        contractAddresses?: {
            setter?: Address;
            getter?: Address;
            token?: Address;
        };
    };
};
