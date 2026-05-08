import { type ConfigReturnType } from '@/config';
import { KeySharesItem } from '@/libs/ssv-keys/KeyShares/KeySharesItem';
import mockKeySharesItemWithOperators from '@/libs/ssv-keys/KeyShares/__test__/mock-key-shares/item-with-operators.json';
import { writeKeysharesFile } from '@/libs/utils/methods/write-keyshares-file';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { afterEach, describe, expect, it, vi } from 'vitest';

const mockOperators = mockKeySharesItemWithOperators.data.operators.map(
  (operator) => ({
    id: String(operator.id),
    publicKey: Buffer.from(operator.operatorKey, 'base64').toString('utf-8'),
    validatorCount: '0',
    isPrivate: false,
    whitelisted: [],
    whitelistedContract: '0x0000000000000000000000000000000000000000',
  }),
);

const createMockConfig = () =>
  ({
    api: {
      getOperators: vi.fn().mockResolvedValue({
        blockNumber: 1,
        operators: mockOperators,
      }),
    },
  }) as unknown as ConfigReturnType;

describe('writeKeysharesFile', () => {
  const tempDirs: string[] = [];

  afterEach(async () => {
    await Promise.all(
      tempDirs.map((dir) => rm(dir, { recursive: true, force: true })),
    );
    tempDirs.length = 0;
  });

  it('writes a webapp-ready keyshares file from payload-only shares', async () => {
    const tempDir = await mkdtemp(join(tmpdir(), 'ssv-sdk-keyshares-'));
    tempDirs.push(tempDir);
    const targetPath = join(tempDir, 'nested', 'keyshares.json');
    const config = createMockConfig();

    await writeKeysharesFile(config, {
      path: targetPath,
      shares: [mockKeySharesItemWithOperators.payload],
      ownerAddress: mockKeySharesItemWithOperators.data.ownerAddress,
      nonce: mockKeySharesItemWithOperators.data.ownerNonce,
    });

    const content = JSON.parse(await readFile(targetPath, 'utf-8'));

    expect(config.api.getOperators).toHaveBeenCalledWith({
      operatorIds: mockKeySharesItemWithOperators.payload.operatorIds.map(String),
    });
    expect(content).toMatchObject({
      version: 'v1.1.0',
      shares: [mockKeySharesItemWithOperators],
    });
    expect(typeof content.createdAt).toBe('string');
  });

  it('uses provided operators without fetching them from the subgraph', async () => {
    const tempDir = await mkdtemp(join(tmpdir(), 'ssv-sdk-keyshares-'));
    tempDirs.push(tempDir);
    const targetPath = join(tempDir, 'keyshares.json');
    const config = createMockConfig();

    await writeKeysharesFile(config, {
      path: targetPath,
      shares: [mockKeySharesItemWithOperators.payload],
      ownerAddress: mockKeySharesItemWithOperators.data.ownerAddress,
      nonce: mockKeySharesItemWithOperators.data.ownerNonce,
      operators: mockKeySharesItemWithOperators.data.operators,
    });

    const content = JSON.parse(await readFile(targetPath, 'utf-8'));

    expect(config.api.getOperators).not.toHaveBeenCalled();
    expect(content.shares).toEqual([mockKeySharesItemWithOperators]);
  });

  it('writes a webapp-ready keyshares file from KeySharesItem instances', async () => {
    const tempDir = await mkdtemp(join(tmpdir(), 'ssv-sdk-keyshares-'));
    tempDirs.push(tempDir);
    const targetPath = join(tempDir, 'keyshares.json');
    const item = await KeySharesItem.fromJson(mockKeySharesItemWithOperators);

    expect(item.error).toBeUndefined();

    await writeKeysharesFile(createMockConfig(), {
      path: targetPath,
      shares: [item],
    });

    const content = JSON.parse(await readFile(targetPath, 'utf-8'));

    expect(content.shares).toEqual([mockKeySharesItemWithOperators]);
  });

  it('rejects payload-only shares when owner metadata is missing', async () => {
    const tempDir = await mkdtemp(join(tmpdir(), 'ssv-sdk-keyshares-'));
    tempDirs.push(tempDir);

    await expect(
      writeKeysharesFile(createMockConfig(), {
        path: join(tempDir, 'keyshares.json'),
        shares: [mockKeySharesItemWithOperators.payload],
      }),
    ).rejects.toThrow(
      'writeKeysharesFile requires ownerAddress and nonce when shares contain payload-only keyshares.',
    );
  });

  it('rejects empty share collections', async () => {
    const tempDir = await mkdtemp(join(tmpdir(), 'ssv-sdk-keyshares-'));
    tempDirs.push(tempDir);

    await expect(
      writeKeysharesFile(createMockConfig(), {
        path: join(tempDir, 'keyshares.json'),
        shares: [],
      }),
    ).rejects.toThrow(
      'writeKeysharesFile requires at least one keyshares item to write a file.',
    );
  });
});
