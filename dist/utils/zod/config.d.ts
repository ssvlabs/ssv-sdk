import { Address, PublicClient, WalletClient } from 'viem';
import { z } from 'zod';
export declare const configArgsSchema: z.ZodType<ConfigArgs, z.ZodTypeDef, ConfigArgs>;
export type ConfigArgs = {
    walletClient: WalletClient;
    publicClient: PublicClient;
    extendedConfig?: {
        subgraph?: {
            endpoint?: string;
            apiKey?: string;
        };
        rest?: {
            endpoint?: string;
        };
        contracts?: {
            setter?: Address;
            getter?: Address;
            token?: Address;
        };
    };
};
