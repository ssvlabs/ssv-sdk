import { chains } from '@/config/chains'
import type { Hex, WalletClient } from 'viem'
import { isHex } from 'viem'
import { z } from 'zod'

// Create a type for the chain keys
export type ChainKey = keyof typeof chains

// Update the BaseConfigSchema
export const baseConfigArgsSchema = z.object({
  chain: z.enum(Object.keys(chains) as [ChainKey, ...ChainKey[]]),
  rpc_endpoint: z.string().url().optional(),
})

export const configArgsSchema = baseConfigArgsSchema.and(
  z.union([
    z.object({
      private_key: z.custom<Hex>(isHex, {
        message: 'Invalid private key',
      }),
      wallet_client: z.undefined(),
    }),
    z.object({
      private_key: z.undefined(),
      wallet_client: z.custom<WalletClient>((val) => typeof val === 'object' && val !== null, {
        message: 'Invalid wallet client',
      }),
    }),
  ]),
) as z.ZodType<ConfigArgs>

export type ConfigArgs = z.infer<typeof baseConfigArgsSchema> &
  (
    | { private_key: Hex; wallet_client?: undefined }
    | { private_key?: undefined; wallet_client: WalletClient }
  )
