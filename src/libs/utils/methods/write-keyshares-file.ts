import type { ConfigReturnType } from '@/config';
import { KeySharesItem } from '@/libs/ssv-keys/KeyShares/KeySharesItem';
import type {
  IKeySharesPartialData,
  IKeySharesPartialPayload,
  IOperator,
} from '@/libs/ssv-keys/interfaces';
import { isKeySharesItem } from '@/utils';

export type KeySharesFileShare = {
  data: IKeySharesPartialData;
  payload: IKeySharesPartialPayload;
};

type SerializedKeySharesFile = {
  version: 'v1.1.0';
  createdAt: string;
  shares: KeySharesFileShare[] | null;
};

type WriteKeysharesFileArgs = {
  path: string;
  shares: Array<KeySharesItem | KeySharesFileShare | IKeySharesPartialPayload>;
  ownerAddress?: string;
  nonce?: number;
  operators?: IOperator[];
};

const isKeySharesFileShare = (share: unknown): share is KeySharesFileShare => {
  return (
    !!share &&
    typeof share === 'object' &&
    'data' in share &&
    'payload' in share
  );
};

const isPayloadOnlyShare = (
  share: unknown,
): share is IKeySharesPartialPayload => {
  return (
    !!share &&
    typeof share === 'object' &&
    'sharesData' in share &&
    'publicKey' in share &&
    'operatorIds' in share &&
    !('data' in share) &&
    !('payload' in share)
  );
};

const toWebappOperatorKey = (operatorKey: string) => {
  if (operatorKey.startsWith('LS0tLS1CRUdJTi')) {
    return operatorKey;
  }

  return Buffer.from(operatorKey, 'utf-8').toString('base64');
};

const buildOperatorMap = async (
  config: ConfigReturnType,
  shares: Array<KeySharesItem | KeySharesFileShare | IKeySharesPartialPayload>,
  providedOperators?: IOperator[],
) => {
  if (providedOperators) {
    return new Map(
      providedOperators.map((operator) => [
        operator.id,
        {
          ...operator,
          operatorKey: toWebappOperatorKey(operator.operatorKey),
        } satisfies IOperator,
      ]),
    );
  }

  const payloadShares = shares.filter(isPayloadOnlyShare);
  if (!payloadShares.length) {
    return new Map<number, IOperator>();
  }

  const uniqueOperatorIds = [
    ...new Set(payloadShares.flatMap((share) => share.operatorIds)),
  ];
  const { operators } = await config.api.getOperators({
    operatorIds: uniqueOperatorIds.map(String),
  });

  if (operators.length !== uniqueOperatorIds.length) {
    throw new Error(
      'writeKeysharesFile could not fetch all operators required to build the webapp keyshares format.',
    );
  }

  return new Map(
    operators.map((operator) => [
      Number(operator.id),
      {
        id: Number(operator.id),
        operatorKey: toWebappOperatorKey(operator.publicKey),
      } satisfies IOperator,
    ]),
  );
};

const normalizeKeySharesItem = async (
  share: KeySharesItem | KeySharesFileShare | IKeySharesPartialPayload,
  index: number,
  args: WriteKeysharesFileArgs,
  operatorMap: Map<number, IOperator>,
) => {
  if (isKeySharesItem(share)) {
    return JSON.parse(share.toJson()) as KeySharesFileShare;
  }

  if (isKeySharesFileShare(share)) {
    return share;
  }

  if (!isPayloadOnlyShare(share)) {
    throw new Error(
      'writeKeysharesFile received an unsupported keyshares shape.',
    );
  }

  if (!args.ownerAddress || typeof args.nonce !== 'number') {
    throw new Error(
      'writeKeysharesFile requires ownerAddress and nonce when shares contain payload-only keyshares.',
    );
  }

  const operators = share.operatorIds.map((operatorId) => {
    const operator = operatorMap.get(operatorId);
    if (!operator) {
      throw new Error(
        `writeKeysharesFile could not resolve operator ${operatorId} for the webapp keyshares format.`,
      );
    }
    return operator;
  });

  return {
    data: {
      ownerAddress: args.ownerAddress,
      ownerNonce: args.nonce + index,
      publicKey: share.publicKey,
      operators,
    },
    payload: share,
  } satisfies KeySharesFileShare;
};

const getParentDirectory = (filePath: string) => {
  const normalizedPath = filePath.replace(/\\/g, '/');
  const lastSeparatorIndex = normalizedPath.lastIndexOf('/');

  if (lastSeparatorIndex === -1) {
    return '.';
  }

  if (lastSeparatorIndex === 0) {
    return normalizedPath[0];
  }

  return normalizedPath.slice(0, lastSeparatorIndex);
};

export const writeKeysharesFile = async (
  config: ConfigReturnType,
  args: WriteKeysharesFileArgs,
): Promise<void> => {
  const { path, shares } = args;

  if (!shares.length) {
    throw new Error(
      'writeKeysharesFile requires at least one keyshares item to write a file.',
    );
  }

  const operatorMap = await buildOperatorMap(config, shares, args.operators);
  const normalizedShares = await Promise.all(
    shares.map((share, index) =>
      normalizeKeySharesItem(share, index, args, operatorMap),
    ),
  );
  const keySharesFile: SerializedKeySharesFile = {
    version: 'v1.1.0',
    createdAt: new Date().toISOString(),
    shares: normalizedShares.length > 0 ? normalizedShares : null,
  };
  const { mkdir, writeFile } = await import('node:fs/promises');

  await mkdir(getParentDirectory(path), { recursive: true });
  await writeFile(path, JSON.stringify(keySharesFile, null, 2), {
    encoding: 'utf-8',
  });
};
