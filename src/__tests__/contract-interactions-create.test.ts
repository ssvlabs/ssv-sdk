import { MainnetV4SetterABI } from '@/abi/mainnet/v4/setter';
import { TokenABI } from '@/abi/token';
import { createWriter } from '@/contract-interactions/create';
import {
  encodeAbiParameters,
  encodeEventTopics,
  type Address,
  type Hash,
} from 'viem';
import { describe, expect, it, vi } from 'vitest';

const setterAddress = '0x0000000000000000000000000000000000000011' as Address;
const tokenAddress = '0x0000000000000000000000000000000000000022' as Address;
const thirdPartyAddress =
  '0x0000000000000000000000000000000000000033' as Address;
const owner = '0x0000000000000000000000000000000000000044' as Address;
const spender = '0x0000000000000000000000000000000000000055' as Address;
const txHash =
  '0x1111111111111111111111111111111111111111111111111111111111111111' as Hash;

const createApprovalLog = (address: Address, value: bigint) => ({
  address,
  data: encodeAbiParameters([{ name: 'value', type: 'uint256' }], [value]),
  topics: encodeEventTopics({
    abi: TokenABI,
    eventName: 'Approval',
    args: {
      owner,
      spender,
    },
  }),
  blockNumber: 1n,
  transactionHash: txHash,
  logIndex: 0,
});

const createOperatorAddedLog = () => ({
  address: setterAddress,
  data: encodeAbiParameters(
    [
      { name: 'publicKey', type: 'bytes' },
      { name: 'fee', type: 'uint256' },
    ],
    ['0x1234', 42n],
  ),
  topics: encodeEventTopics({
    abi: MainnetV4SetterABI,
    eventName: 'OperatorAdded',
    args: {
      operatorId: 7n,
      owner,
    },
  }),
  blockNumber: 1n,
  transactionHash: txHash,
  logIndex: 1,
});

describe('createWriter receipt event parsing', () => {
  it('decodes only logs from configured event source addresses', async () => {
    const publicClient = {
      simulateContract: vi.fn().mockResolvedValue({ request: {} }),
      waitForTransactionReceipt: vi.fn().mockResolvedValue({
        logs: [
          createOperatorAddedLog(),
          createApprovalLog(tokenAddress, 10n),
          createApprovalLog(thirdPartyAddress, 999n),
        ],
        blockNumber: 1n,
        status: 'success',
        transactionHash: txHash,
      }),
    };
    const walletClient = {
      account: {
        address: owner,
      },
      writeContract: vi.fn().mockResolvedValue(txHash),
    };

    const writer = createWriter<'setter'>({
      abi: MainnetV4SetterABI,
      publicClient: publicClient as never,
      walletClient: walletClient as never,
      contractAddress: setterAddress,
      eventSources: [
        {
          abi: MainnetV4SetterABI,
          address: setterAddress,
        },
        {
          abi: TokenABI,
          address: tokenAddress,
        },
      ],
    });

    const receipt = await writer.claimEthRewards({}).then((tx) => tx.wait());

    expect(receipt.events).toHaveLength(2);
    expect(receipt.events.map((event) => event.eventName)).toEqual([
      'OperatorAdded',
      'Approval',
    ]);
    expect(
      receipt.events.find((event) => event.eventName === 'Approval')?.args.value,
    ).toBe(10n);
  });
});
