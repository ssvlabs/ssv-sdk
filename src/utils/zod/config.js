import { chainIds, networks } from '@/config';
import { z } from 'zod';
export const configArgsSchema = z.object({
    publicClient: z.custom().superRefine((val, ctx) => {
        const client = val;
        if (!client) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Public client must be provided',
            });
            return false;
        }
        if (client.chain === undefined) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Public client must have a chain property',
            });
            return false;
        }
        if (!chainIds.includes(client.chain?.id)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: `Public client chain must be one of [${networks.join(', ')}]`,
            });
            return false;
        }
        return true;
    }),
    walletClient: z.custom().superRefine((val, ctx) => {
        const client = val;
        if (!client) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Wallet client must be provided',
            });
            return false;
        }
        if (client.chain === undefined) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Wallet client must have a chain property',
            });
            return false;
        }
        if (!chainIds.includes(client.chain?.id)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: `Wallet client chain must be one of [${networks.join(', ')}]`,
            });
            return false;
        }
        return true;
    }),
    _: z
        .object({
        graphUrl: z.string().url().optional(),
        restUrl: z.string().url().optional(),
        contractAddresses: z
            .object({
            setter: z.string().optional(),
            getter: z.string().optional(),
            token: z.string().optional(),
        })
            .optional(),
    })
        .optional(),
});
