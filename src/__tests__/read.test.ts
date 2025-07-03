import { SSVSDK } from '@/sdk'
import { describe, expect, test } from 'vitest'

import { chains } from '@/config'
import { createPublicClient, createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'

describe('Communications', () => {
  test.skipIf(!import.meta.env.VITE_CUSTOM_RPC_URL)(
    'can communicate with mainnet contract',
    async () => {
      const chain = chains.mainnet
      const transport = http(import.meta.env.VITE_CUSTOM_RPC_URL)

      const publicClient = createPublicClient({
        chain,
        transport,
      })

      const account = privateKeyToAccount(
        '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', // Hardhat Account,
      )
      const walletClient = createWalletClient({
        account,
        chain,
        transport,
      })

      const sdk = new SSVSDK({
        publicClient,
        walletClient,
      })

      const result = await sdk.contract.ssv.read.getNetworkFee()

      expect(result).toBeTypeOf('bigint')
    },
  )

  test('can communicate with mainnet the subgraph', async () => {
    const chain = chains.mainnet // or chains.mainnet
    const transport = http()

    const publicClient = createPublicClient({
      chain,
      transport,
    })

    const account = privateKeyToAccount(
      '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', // Hardhat Account,
    )
    const walletClient = createWalletClient({
      account,
      chain,
      transport,
    })

    const sdk = new SSVSDK({
      publicClient,
      walletClient,
    })

    const result = await sdk.api.getOperator({
      id: '1',
    })
    expect(result).toHaveProperty('publicKey')
  })
  test.skipIf(!import.meta.env.VITE_SUBGRAPH_API_KEY)(
    'can communicate with mainnet the subgraph(apikey)',
    async () => {
      const chain = chains.mainnet // or chains.mainnet
      const transport = http()

      const publicClient = createPublicClient({
        chain,
        transport,
      })

      const account = privateKeyToAccount(
        '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', // Hardhat Account,
      )
      const walletClient = createWalletClient({
        account,
        chain,
        transport,
      })

      const sdk = new SSVSDK({
        publicClient,
        walletClient,
        extendedConfig: {
          subgraph: {
            apiKey: import.meta.env.VITE_SUBGRAPH_API_KEY,
          },
        },
      })

      const result = await sdk.api.getOperator({
        id: '1',
      })
      expect(result).toHaveProperty('publicKey')
    },
  )

  test('can communicate with hoodi contract', async () => {
    const chain = chains.hoodi
    const transport = http()

    const publicClient = createPublicClient({
      chain,
      transport,
    })

    const account = privateKeyToAccount(
      '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', // Hardhat Account,
    )
    const walletClient = createWalletClient({
      account,
      chain,
      transport,
    })

    const sdk = new SSVSDK({
      publicClient,
      walletClient,
    })

    const result = await sdk.contract.ssv.read.getNetworkFee()

    expect(result).toBeTypeOf('bigint')
  })

  test('can communicate with hoodi the subgraph', async () => {
    const chain = chains.hoodi // or chains.mainnet
    const transport = http()

    const publicClient = createPublicClient({
      chain,
      transport,
    })

    const account = privateKeyToAccount(
      '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', // Hardhat Account,
    )
    const walletClient = createWalletClient({
      account,
      chain,
      transport,
    })

    const sdk = new SSVSDK({
      publicClient,
      walletClient,
    })

    const result = await sdk.api.getOperator({
      id: '1',
    })
    expect(result).toHaveProperty('publicKey')
  })
  test.skipIf(!import.meta.env.VITE_SUBGRAPH_API_KEY)(
    'can communicate with hoodi the subgraph(apikey)',
    async () => {
      const chain = chains.hoodi // or chains.mainnet
      const transport = http()

      const publicClient = createPublicClient({
        chain,
        transport,
      })

      const account = privateKeyToAccount(
        '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', // Hardhat Account,
      )
      const walletClient = createWalletClient({
        account,
        chain,
        transport,
      })

      const sdk = new SSVSDK({
        publicClient,
        walletClient,
        extendedConfig: {
          subgraph: {
            apiKey: import.meta.env.VITE_SUBGRAPH_API_KEY,
          },
        },
      })

      const result = await sdk.api.getOperator({
        id: '1',
      })
      expect(result).toHaveProperty('publicKey')
    },
  )

  // test.skipIf(!import.meta.env.VITE_SUBGRAPH_API_KEY)(
  //   'can communicate with the subgraph(apikey)',
  //   async () => {
  //     const chain = chains.hoodi // or chains.mainnet
  //     const transport = http()

  //     const publicClient = createPublicClient({
  //       chain,
  //       transport,
  //     })

  //     const account = privateKeyToAccount(
  //       '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', // Hardhat Account,
  //     )
  //     const walletClient = createWalletClient({
  //       account,
  //       chain,
  //       transport,
  //     })

  //     const sdk = new BasedAppsSDK({
  //       beaconchainUrl: 'https://example.com/beacon',
  //       publicClient,
  //       walletClient,
  //       extendedConfig: {
  //         subgraph: {
  //           apiKey: import.meta.env.VITE_SUBGRAPH_API_KEY,
  //         },
  //       },
  //     })

  //     const result = await sdk.api.getValidatorsBalance({
  //       account: '0x0000000000000000000000000000000000000000',
  //     })

  //     expect(result).toHaveProperty('account')
  //     expect(result).toHaveProperty('validators')
  //     expect(result).toHaveProperty('balance')
  //   },
  // )
})
