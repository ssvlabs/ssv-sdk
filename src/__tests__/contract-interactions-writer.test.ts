import { createWriter } from '@/contract-interactions/create';
import { getAddress } from 'viem';
import { describe, expect, it, vi } from 'vitest';

describe('createWriter', () => {
  it('allows zero-input write methods to omit props', async () => {
    const account = getAddress('0x1234567890123456789012345678901234567890');
    const contractAddress = getAddress(
      '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
    );
    const simulateContract = vi.fn().mockResolvedValue({
      request: {
        address: contractAddress,
        abi: [],
        functionName: 'acceptOwnership',
        account,
      },
    });
    const writeContract = vi.fn().mockResolvedValue(
      '0x1234567890123456789012345678901234567890123456789012345678901234',
    );

    const writer = createWriter<'setter'>({
      abi: [
        {
          type: 'function',
          name: 'acceptOwnership',
          stateMutability: 'nonpayable',
          inputs: [],
          outputs: [],
        },
      ],
      publicClient: {
        simulateContract,
      } as never,
      walletClient: {
        account: { address: account },
        writeContract,
      } as never,
      contractAddress,
    });

    await expect(writer.acceptOwnership()).resolves.toMatchObject({
      hash: expect.any(String),
      wait: expect.any(Function),
    });

    expect(simulateContract).toHaveBeenCalledWith(
      expect.objectContaining({
        functionName: 'acceptOwnership',
        args: undefined,
        account: { address: account },
      }),
    );
    expect(writeContract).toHaveBeenCalledTimes(1);
  });
});
