import { SSVSDK } from '../src/sdk'

const sdk = new SSVSDK({
  chain: 'mainnet', // or holesky
  private_key: '0x.......',
})

// API Interactions
const operators = await sdk.api.getOperators({
  operatorIds: ['220', '221', '223', '224'],
})

const nonce = await sdk.api.getOwnerNonce({
  owner: '0x....',
})

import { parseEther } from 'viem'

await sdk.clusters.deposit({
  id: '...',
  amount: parseEther('1.5'),
  options: {
    approve: true, // Whether to approve the deposit amount if the allowance is insufficient
  },
})
