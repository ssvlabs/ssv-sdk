import type { PublicClient, WalletClient } from 'viem'
import { z } from 'zod'

type ZodConfigArgs = {
  walletClient: z.ZodType<WalletClient>
  publicClient: z.ZodType<PublicClient>
}

export const configArgsSchema: z.ZodObject<ZodConfigArgs> = z.object({
  walletClient: z.custom<WalletClient>((val) => typeof val === 'object' && val !== null, {}),
  publicClient: z.custom<PublicClient>((val) => typeof val === 'object' && val !== null, {}),
})

export type ConfigArgs = z.infer<z.ZodObject<ZodConfigArgs>>
