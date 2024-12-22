import { chains, type SupportedChains } from '@/config/chains'
import type { WalletClient } from 'viem'
import { z } from 'zod'

type ZodConfigArgs = {
  chain: z.ZodEnum<[SupportedChains, ...SupportedChains[]]>
  rpc_endpoint: z.ZodOptional<z.ZodString>
  wallet_client: z.ZodType<WalletClient>
}

export const configArgsSchema = z.object<ZodConfigArgs>({
  chain: z.enum(Object.keys(chains) as [SupportedChains, ...SupportedChains[]]),
  rpc_endpoint: z.string().url().optional(),
  wallet_client: z.custom<WalletClient>((val) => typeof val === 'object' && val !== null, {}),
})

export type ConfigArgs = z.infer<z.ZodObject<ZodConfigArgs>>
