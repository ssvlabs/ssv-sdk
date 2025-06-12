import { SSVSDK, chains } from 'ssv-sdk';
import { createPublicClient, createWalletClient, http, parseEther } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import keyshares from './path_to_your_keyshares.json'; // this is a json file that contains the keyshares

// Setup viem clients
const chain = chains.mainnet // or chains.holesky
const transport = http()

const publicClient = createPublicClient({
  chain,
  transport,
})

const account = privateKeyToAccount('0x_your_privatekey')
const walletClient = createWalletClient({
  account,
  chain,
  transport,
})

const sdk = new SSVSDK({
  publicClient,
  walletClient,
})

try {
  // this will throw an error if something is wrong or there is no available keyshares to register
  const { available } = await sdk.utils.validateSharesPreRegistration({
    keyshares,
    operatorIds: ['1', '2', '3', '4'], // These operator IDs must match the operator IDs used when generating the keyshares
  })

  const tx = await sdk.clusters.registerValidators({
    args: {
      keyshares: available,
      depositAmount: parseEther('10'), // this is the amount of SSV tokens to deposit for the validators (10 SSV)
      /*
       * Note: The validators will be added to a cluster determined by your wallet address
       * and the selected operator IDs. If a cluster with these operators already exists
       * for your wallet, the validators will be added to that cluster. If no matching
       * cluster exists, a new cluster will be automatically created.
       */
    },
  })

  /*
   * The 'tx' object contains the transaction hash and a wait() method to wait for the transaction to be mined
   */

  const receipt = await tx.wait()

  /*
   * The 'receipt' contains:
   * - events: Array of events emitted by the contract during execution
   * - Standard transaction receipt data (gasUsed, blockNumber, etc.)
   */
} catch (e) {
  console.log(e)
}
