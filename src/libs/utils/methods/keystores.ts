import type { IOperator } from '@/libs/ssv-keys/interfaces';
import type { KeySharesPayload } from '@/libs/ssv-keys/KeyShares/KeySharesData/KeySharesPayload';
import { KeySharesItem } from '@/libs/ssv-keys/KeyShares/KeySharesItem';
import { SSVKeys } from '@/libs/ssv-keys/SSVKeys';

export const ssvKeys = new SSVKeys();

const createAndEncryptShares = async (
  privateKey: string,
  operators: IOperator[],
) => {
  const threshold = await ssvKeys.createThreshold(privateKey, operators);
  const encryptedShares = await ssvKeys.encryptShares(
    operators,
    threshold.shares,
  );
  return {
    threshold,
    encryptedShares,
  };
};

type GenerateKeySharesArgs = {
  operatorKeys: string[];
  operatorIds: number[];
  keystore: string | string[];
  keystorePassword: string;
  ownerAddress: string;
  nonce: number;
};

export const generateKeyShares = async (
  args: GenerateKeySharesArgs,
): Promise<KeySharesPayload[]> => {
  const keystores = Array.isArray(args.keystore)
    ? args.keystore
    : [args.keystore];
  const shares: KeySharesPayload[] = [];

  for (let i = 0; i < keystores.length; i++) {
    const keystore = keystores[i];
    const extracted = await ssvKeys.extractKeys(
      keystore,
      args.keystorePassword,
    );
    const operators = args.operatorKeys.map((key, index) => ({
      id: args.operatorIds[index],
      operatorKey: key,
    }));

    const { threshold, encryptedShares } = await createAndEncryptShares(
      extracted.privateKey,
      operators,
    );

    const payload = await new KeySharesItem().buildPayload(
      {
        publicKey: threshold.publicKey,
        operators,
        encryptedShares,
      },
      {
        ownerAddress: args.ownerAddress,
        ownerNonce: args.nonce + i,
        privateKey: extracted.privateKey,
      },
    );

    shares.push(payload);
  }

  return shares;
};
