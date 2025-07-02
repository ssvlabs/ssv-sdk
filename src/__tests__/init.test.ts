import { hoodi, paid_graph_endpoints } from '@/config/chains'
import { SSVSDK } from '@/sdk'
import type { ConfigArgs } from '@/utils'
import hre from 'hardhat'
import { initializeContract } from 'hardhat/contract-helpers'
import {
  createPublicClient,
  createWalletClient,
  http,
  type PublicClient,
  type WalletClient,
} from 'viem'
import { describe, expect, it } from 'vitest'

describe('SDK Initiation', async () => {
  await hre.run('compile')
  const network = await initializeContract()

  it('should initialize the SDK', async () => {
    expect(() => {
      const transport = http(hoodi.rpcUrls.default.http[0])
      const walletClient = createWalletClient({
        chain: hoodi,
        account: network.wallets[0].account,
        transport,
      })
      const publicClient = createPublicClient({
        chain: hoodi,
        transport,
      })
      return new SSVSDK({
        publicClient,
        walletClient,
      })
    }).not.toThrowError()
  })

  it('unsupported chain should throw an error', async () => {
    const network = await initializeContract()
    // initializeContract returns a hardhat chain, which is not supported by the SDK
    expect(
      () =>
        new SSVSDK({
          publicClient: network.publicClient,
          walletClient: network.wallets[0],
        }),
    ).toThrowError()
  })

  it('should initialize with custom contract addresses and endpoints', async () => {
    const transport = http(hoodi.rpcUrls.default.http[0])
    const walletClient = createWalletClient({
      chain: hoodi,
      account: network.wallets[0].account,
      transport,
    })
    const publicClient = createPublicClient({
      chain: hoodi,
      transport,
    })

    const customAddresses = {
      setter: '0x1234567890123456789012345678901234567890' as const,
      getter: '0x0987654321098765432109876543210987654321' as const,
      token: '0xabcdef1234567890abcdef1234567890abcdef12' as const,
    }

    const extended = {
      subgraph: {
        endpoint: 'https://custom-graph-endpoint.com/graphql',
      },
      rest: {
        endpoint: 'https://custom-rest-endpoint.com/api',
      },
      contracts: customAddresses,
    } satisfies ConfigArgs['extendedConfig']

    const sdk = new SSVSDK({
      publicClient,
      walletClient,
      extendedConfig: extended,
    })

    // Verify custom contract addresses are used
    expect(sdk.config.contractAddresses).toEqual(customAddresses)
    // Verify custom endpoints are used
    expect(sdk.config.subgraph.endpoint).toBe(extended.subgraph.endpoint)
    expect(sdk.config.rest.endpoint).toBe(extended.rest.endpoint)
  })
  it('should initialize with paid subgraph', async () => {
    const transport = http(hoodi.rpcUrls.default.http[0])
    const walletClient = createWalletClient({
      chain: hoodi,
      account: network.wallets[0].account,
      transport,
    })
    const publicClient = createPublicClient({
      chain: hoodi,
      transport,
    })

    const extended = {
      subgraph: {
        apiKey: '1234567890',
      },
    } satisfies ConfigArgs['extendedConfig']

    const sdk = new SSVSDK({
      publicClient,
      walletClient,
      extendedConfig: extended,
    })

    const requestHeaders = sdk.config.subgraph.client.requestConfig.headers as Record<
      string,
      string
    >

    // Verify custom endpoints are used
    expect(sdk.config.subgraph.endpoint).toBe(paid_graph_endpoints[hoodi.id])
    expect(requestHeaders['Authorization']).toBe(`Bearer ${extended.subgraph.apiKey}`)

  })

  describe('Client Validation', () => {
    it('should throw error when publicClient is not provided', () => {
      const transport = http(hoodi.rpcUrls.default.http[0])
      const walletClient = createWalletClient({
        chain: hoodi,
        account: network.wallets[0].account,
        transport,
      })

      expect(() => {
        new SSVSDK({
          publicClient: null as unknown as PublicClient,
          walletClient,
        })
      }).toThrowError('Public client must be provided')
    })

    it('should throw error when walletClient is not provided', () => {
      const transport = http(hoodi.rpcUrls.default.http[0])
      const publicClient = createPublicClient({
        chain: hoodi,
        transport,
      })

      expect(() => {
        new SSVSDK({
          publicClient,
          walletClient: null as unknown as WalletClient,
        })
      }).toThrowError('Wallet client must be provided')
    })

    it('should throw error when publicClient has no chain property', () => {
      const transport = http(hoodi.rpcUrls.default.http[0])
      const walletClient = createWalletClient({
        chain: hoodi,
        account: network.wallets[0].account,
        transport,
      })
      const publicClient = createPublicClient({
        chain: hoodi,
        transport,
      })
      // @ts-expect-error - intentionally removing chain property for test
      delete publicClient.chain

      expect(() => {
        new SSVSDK({
          publicClient,
          walletClient,
        })
      }).toThrowError('Public client must have a chain property')
    })

    it('should throw error when walletClient has no chain property', () => {
      const transport = http(hoodi.rpcUrls.default.http[0])
      const walletClient = createWalletClient({
        chain: hoodi,
        account: network.wallets[0].account,
        transport,
      })
      const publicClient = createPublicClient({
        chain: hoodi,
        transport,
      })
      // @ts-expect-error - intentionally removing chain property for test
      delete walletClient.chain

      expect(() => {
        new SSVSDK({
          publicClient,
          walletClient,
        })
      }).toThrowError('Wallet client must have a chain property')
    })

    it('should throw error when publicClient chain is not supported', () => {
      const transport = http(hoodi.rpcUrls.default.http[0])
      const walletClient = createWalletClient({
        chain: hoodi,
        account: network.wallets[0].account,
        transport,
      })
      const publicClient = createPublicClient({
        chain: hoodi,
        transport,
      })
      // @ts-expect-error - intentionally setting unsupported chain for test
      publicClient.chain = { id: 999999 }

      expect(() => {
        new SSVSDK({
          publicClient,
          walletClient,
        })
      }).toThrowError(/Public client chain must be one of/)
    })

    it('should throw error when walletClient chain is not supported', () => {
      const transport = http(hoodi.rpcUrls.default.http[0])
      const walletClient = createWalletClient({
        chain: hoodi,
        account: network.wallets[0].account,
        transport,
      })
      const publicClient = createPublicClient({
        chain: hoodi,
        transport,
      })
      // @ts-expect-error - intentionally setting unsupported chain for test
      walletClient.chain = { id: 999999 }

      expect(() => {
        new SSVSDK({
          publicClient,
          walletClient,
        })
      }).toThrowError(/Wallet client chain must be one of/)
    })
  })
})
