import { SSVSDK } from '@/sdk'
import { describe, expect, it } from 'vitest'

describe('ssvapi 🛜  Holesky', () => {
  it('can check dkg health', async () => {
    const sdk = new SSVSDK({
      chain: 'mainnet',
      private_key: process.env.PRIVATE_KEY,
    })

    expect(sdk.api.checkOperatorDKGEnabled).toBeDefined()
    expect(
      sdk.api.checkOperatorDKGEnabled([
        {
          id: '21',
          address: 'https://holesky-ssv-lido-dkg.ipetkov.eu:443',
        },
      ]),
    ).resolves.toStrictEqual([
      {
        id: '21',
        isHealthy: true,
      },
    ])
    expect(
      sdk.api.checkOperatorDKGEnabled([
        {
          id: '1',
          address: 'https://incorrect-address:443',
        },
      ]),
    ).resolves.toStrictEqual([
      {
        id: '1',
        isHealthy: false,
      },
    ])
  })
})
