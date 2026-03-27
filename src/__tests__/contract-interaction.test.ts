import { globals } from '@/config';
import { mockFetchedOperators } from '@/mock';
import { createMockConfig } from '@/mock/config';
import { SSVSDK } from '@/sdk';
import { MissingAbiParameterError } from '@/types/contract-interactions';
import { decodeOperatorPublicKey, roundOperatorFee } from '@/utils';
import 'hardhat';
import { initializeContract } from 'hardhat/contract-helpers';
import { getAddress, parseEther } from 'viem';
import { describe, expect, it, vi } from 'vitest';

describe('SSV Keys', async () => {
  const { ssvNetwork, ssvNetworkViews, ssvToken, wallets, publicClient } =
    await initializeContract();

  const sdk = new SSVSDK(
    createMockConfig({
      addresses: {
        setter: ssvNetwork.address,
        getter: ssvNetworkViews.address,
        token: ssvToken.address,
      },
      publicClient,
      walletClient: wallets[0],
      chain: publicClient.chain,
    }),
  );

  it('can write to the SSVNetwork contract', async () => {
    const yearlyFee = parseEther('1');
    const blockFee = roundOperatorFee(
      yearlyFee / globals.BLOCKS_PER_YEAR,
      globals.ETH_DEDUCTED_DIGITS,
    );

    const receipt = await sdk.operators
      .registerOperator({
        args: {
          publicKey: mockFetchedOperators[0].publicKey, // LS0tLS1CRUdJTiBSU0EgUFVCTElDIE....
          yearlyFee,
          isPrivate: true,
        },
      })
      .then((tx) => tx.wait());

    expect(receipt).toBeDefined();

    const operatorAddedEvent = receipt.events.find(
      (
        event,
      ): event is typeof event & {
        eventName: 'OperatorAdded';
        args: {
          operatorId: bigint;
          publicKey: string;
          fee: bigint;
          owner: string;
        };
      } => event.eventName === 'OperatorAdded',
    );
    expect(operatorAddedEvent).toBeDefined();
    expect(operatorAddedEvent!.args.operatorId).toBe(1n);
    expect(decodeOperatorPublicKey(operatorAddedEvent!.args.publicKey)).toBe(
      mockFetchedOperators[0].publicKey,
    );
    expect(operatorAddedEvent?.args.fee).toBe(blockFee);
    expect(operatorAddedEvent?.args.owner).toBe(
      getAddress(sdk.config.walletClient!.account!.address),
    );
  });

  it('can read from SSVNetworkViews contract', async () => {
    const limit = await sdk.contract.ssv.read.getValidatorsPerOperatorLimit();
    expect(limit).toBe(500);

    const ssvBalance = await sdk.contract.token.read.balanceOf({
      account: wallets[0].account.address,
    });
    expect(ssvBalance).toBe(parseEther('1000'));
  });
  it('can read from SSVToken contract', async () => {
    const limit = await sdk.contract.ssv.read.getValidatorsPerOperatorLimit();
    expect(limit).toBe(500);

    const ssvBalance = await sdk.contract.token.read.balanceOf({
      account: wallets[0].account.address,
    });
    expect(ssvBalance).toBe(parseEther('1000'));
  });

  it('throws a structured error when a read argument is missing', async () => {
    const consoleError = vi
      .spyOn(console, 'error')
      .mockImplementation(() => undefined);

    await expect(
      sdk.contract.token.read.balanceOf({} as never),
    ).rejects.toMatchObject({
      name: 'MissingAbiParameterError',
      code: 'MISSING_ABI_PARAMETER',
      functionName: 'balanceOf',
      parameterName: 'account',
      parameterIndex: 0,
    } satisfies Partial<MissingAbiParameterError>);

    expect(consoleError).not.toHaveBeenCalled();
    consoleError.mockRestore();
  });

  it('throws a structured error when a write argument is missing', () => {
    const consoleError = vi
      .spyOn(console, 'error')
      .mockImplementation(() => undefined);

    let error: unknown;

    try {
      sdk.contract.ssv.write.registerOperator.getTransactionData({
        publicKey: mockFetchedOperators[0].publicKey,
        isPrivate: true,
      } as never);
    } catch (caughtError) {
      error = caughtError;
    }

    expect(error).toBeInstanceOf(MissingAbiParameterError);
    expect(error).toMatchObject({
      name: 'MissingAbiParameterError',
      code: 'MISSING_ABI_PARAMETER',
      functionName: 'registerOperator',
      parameterName: 'fee',
      parameterIndex: 1,
    } satisfies Partial<MissingAbiParameterError>);
    expect(consoleError).not.toHaveBeenCalled();
    consoleError.mockRestore();
  });
});
