<p align="center">
  <img src="https://ssv.network/wp-content/uploads/2024/06/full_logo_white.svg" alt="SSV Network" width="300"/>
</p>

<h1 align="center">SSV SDK</h1>

<p align="center">
  <a href="https://codecov.io/gh/ssvlabs/ssv-sdk">
    <img src="https://codecov.io/gh/ssvlabs/ssv-sdk/graph/badge.svg?token=2j2HCF1fSb" alt="codecov"/>
  </a>
</p>

> **⚠️ Development Notice**: This SDK is currently under active development and testing. It is not recommended for production use at this time. For updates and documentation, please refer to our [official documentation](https://docs.ssv.network).

## Overview

The SSV SDK is a TypeScript library for interacting with the SSV network, enabling distributed validator operations on Ethereum.

## Core Modules

The SDK consists of four main modules:

- **Clusters**: Manage validator clusters, handle deposits, and register validators
- **Operators**: Interact with network operators and manage operator relationships
- **API**: Access network data, query states, and retrieve operational information
- **Utils**: Helper functions for keyshare validation, share generation, and other utilities

## Installation

```bash
# Using npm
npm install ssv-sdk ssv-keys viem

# Using yarn
yarn add ssv-sdk ssv-keys viem

# Using pnpm
pnpm install ssv-sdk ssv-keys viem
```

## Quick Start

### Initialize the SDK

```typescript
import { SSVSDK, chains } from 'ssv-sdk'
import { createPublicClient, createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'

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

const sdk = new SSVSDK({
  publicClient,
  walletClient,
})
```

### API Examples

```typescript
// Query operators
const operators = await sdk.api.getOperators({
  operatorIds: ['220', '221', '223', '224'],
})

// Get owner nonce
const nonce = await sdk.api.getOwnerNonce({
  owner: 'your_wallet_address',
})
```

### Cluster Management

```typescript
import { parseEther } from 'viem'

// Deposit to cluster
await sdk.clusters.deposit(
  {
    id: 'your_cluster_id',
    amount: parseEther('30'),
  },
  {
    approve: true, // Auto-approve token if needed
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

## Documentation

For detailed documentation and examples, visit our [official documentation](https://docs.ssv.network).
