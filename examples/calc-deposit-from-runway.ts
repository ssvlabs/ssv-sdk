import { chains, SSVSDK } from '@ssv-labs/ssv-sdk';
import {
  createPublicClient,
  createWalletClient,
  formatEther,
  http,
} from 'viem';
import { privateKeyToAccount } from 'viem/accounts';

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
  const clusterId = '0x_your_cluster_id'; // computed cluster id
  const runwayDays = 45;

  const depositWei = await sdk.utils.calcDepositFromRunway({
    clusterId,
    runway: runwayDays,
  });

  console.log(`Deposit needed (wei): ${depositWei.toString()}`);
  console.log(`Deposit needed (ETH): ${formatEther(depositWei)}`);
} catch (e) {
  console.log(e);
}
