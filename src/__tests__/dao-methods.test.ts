import { type Hex } from 'viem';
import { describe, expect, it, vi } from 'vitest';
import { type ConfigReturnType } from '../config/create';

const mockConfig = {
  contract: {
    ssv: {
      write: {
        updateNetworkFeeSSV: vi.fn().mockResolvedValue({ hash: '0x123' }),
        withdrawNetworkSSVEarnings: vi
          .fn()
          .mockResolvedValue({ hash: '0x123' }),
        commitRoot: vi.fn().mockResolvedValue({ hash: '0x123' }),
      },
    },
  },
} as unknown as ConfigReturnType;

describe('DAO Methods', () => {
  it('should update network fee in SSV', async () => {
    const { updateNetworkFeeSSV } = await import('../libs/dao/methods');

    const result = await updateNetworkFeeSSV(mockConfig, {
      args: {
        fee: 1000n,
      },
    });

    expect(result).toBeDefined();
    expect(
      mockConfig.contract.ssv.write.updateNetworkFeeSSV,
    ).toHaveBeenCalledWith({
      args: {
        fee: 1000n,
      },
    });
  });

  it('should withdraw network SSV earnings', async () => {
    const { withdrawNetworkSSVEarnings } = await import('../libs/dao/methods');

    const result = await withdrawNetworkSSVEarnings(mockConfig, {
      args: {
        amount: 500n,
      },
    });

    expect(result).toBeDefined();
    expect(
      mockConfig.contract.ssv.write.withdrawNetworkSSVEarnings,
    ).toHaveBeenCalledWith({
      args: {
        amount: 500n,
      },
    });
  });

  it('should commit root', async () => {
    const { commitRoot } = await import('../libs/dao/methods');

    const result = await commitRoot(mockConfig, {
      args: {
        merkleRoot: '0x1234' as Hex,
        blockNum: 123n,
      },
    });

    expect(result).toBeDefined();
    expect(mockConfig.contract.ssv.write.commitRoot).toHaveBeenCalledWith({
      args: {
        merkleRoot: '0x1234',
        blockNum: 123n,
      },
    });
  });
});
