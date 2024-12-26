[![codecov](https://codecov.io/gh/ssvlabs/ssv-sdk/graph/badge.svg?token=2j2HCF1fSb)](https://codecov.io/gh/ssvlabs/ssv-sdk)

**⚠ READ BEFORE USING: This SDK is Under Heavy Development**

> This repository is still under active development and testing. It is **not recommended for use** in production or live environments at this time.
>
> For updates on the progress and when this SDK will be ready for general use, please refer to our official [SSV documentation](https://docs.ssv.network) and follow along.

# SSV SDK

A TypeScript SDK for interacting with the SSV (Secret Shared Validator) network, enabling distributed validator operations on Ethereum.

## Installation

```bash
pnpm install ssv-sdk ssv-keys viem
# or
npm install ssv-sdk ssv-keys viem
# or
yarn add ssv-sdk ssv-keys viem
```

## Usage

### Initialize the SDK

```typescript
import { SSVSDK, chains } from 'ssv-sdk'
import { createPublicClient, createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'

// Setup viem clients
const chain = chains.mainnet // or chains.holesky
const transport = http()

const publicClient = createPublicClient({
  chain,
  transport,
})

const account = privateKeyToAccount('0x...')
const walletClient = createWalletClient({
  account,
  chain,
  transport,
})

// Initialize SDK with viem clients
const sdk = new SSVSDK({
  publicClient,
  walletClient,
})
```

### API Interactions

```typescript
const operators = await sdk.api.getOperators({
  operatorIds: ['220', '221', '223', '224'],
})

const nonce = await sdk.api.getOwnerNonce({
  owner: 'your_wallet_address',
})
```

### Cluster Management

```typescript
import { parseEther } from 'viem'

await sdk.clusters.deposit(
  {
    id: 'your_cluster_id',
    amount: parseEther('30'), // (30 SSV token)
  },
  {
    approve: true, // Automatically triggers token approval  transaction if the allowance is lower than the deposit amount
  },
)
```

### Register Validators

To register validators, you'll need to:

1. Create shares from your keyshares JSON file
2. Register the validator using the created shares

```typescript
import { parseEther } from 'viem'

// Your keyshares JSON file containing the validator's data
import keyshares from 'path/to/keyshares.json'

// First, validate and create shares from your keyshares
try {
  const result = await sdk.utils.validateSharesPreRegistration({
    operatorIds: ['220', '221', '223', '224'],
    keyshares,
  })

  // Register validators using the clusters API
  const receipt = await sdk.clusters
    .registerValidators({
      args: {
        keyshares: result.available,
        depositAmount: parseEther('2'),
      },
    })
    .then((tx) => tx.wait())
} catch (e) {
  // something went wrong
}
```

The `keyshares` JSON contains the validator's public key and encrypted shares for each operator. The `validateSharesPreRegistration` method will validate the keyshares and return the available validators that can be registered.
