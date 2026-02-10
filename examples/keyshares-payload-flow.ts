import { readFile, writeFile } from 'node:fs/promises';
import { chains, SSVSDK } from '@ssv-labs/ssv-sdk';
import { createPublicClient, createWalletClient, http, parseEther } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import keystores from './path_to_your_keystores.json';

// Setup viem clients
const chain = chains.mainnet; // or chains.hoodi
const transport = http();

const publicClient = createPublicClient({
  chain,
  transport,
});

const account = privateKeyToAccount('0x_your_privatekey');
const walletClient = createWalletClient({
  account,
  chain,
  transport,
});

const sdk = new SSVSDK({
  publicClient,
  walletClient,
});

try {
  const ownerAddress = walletClient.account.address;
  const operatorIds = [1, 2, 3, 4];
  const operatorKeys = [
    'LS0...operator_key_1...',
    'LS0...operator_key_2...',
    'LS0...operator_key_3...',
    'LS0...operator_key_4...',
  ];

  const nonce = Number(
    await sdk.api.getOwnerNonce({
      owner: ownerAddress,
    }),
  );

  const keysharesPayload = await sdk.utils.generateKeyShares({
    keystore: JSON.stringify(keystores),
    keystore_password: 'your_password',
    operator_keys: operatorKeys,
    operator_ids: operatorIds,
    owner_address: ownerAddress,
    nonce,
  });

  const payloadPath = './keyshares-payloads.json';
  await writeFile(payloadPath, JSON.stringify(keysharesPayload, null, 2));

  const storedPayloads = JSON.parse(await readFile(payloadPath, 'utf-8'));

  const { available } = await sdk.utils.validateSharesPreRegistration({
    keyshares: storedPayloads,
    operatorIds: operatorIds.map(String),
  });

  const tx = await sdk.clusters.registerValidators({
    args: {
      keyshares: available,
      depositAmount: parseEther('10'),
    },
  });

  const receipt = await tx.wait();
  console.log(receipt);
} catch (e) {
  console.log(e);
}
