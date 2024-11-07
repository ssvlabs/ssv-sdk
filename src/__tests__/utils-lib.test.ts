import { createValidatorKeys } from '@/libs/utils/methods/create-validator-keys'
import { saveKeystores } from '@/utils/file'
import path from 'node:path'
import { describe, it } from 'vitest'
describe('Utils 🛜  Holesky', () => {
  // it('can get cluster balance', async () => {
  //   const sdk = new SSVSDK({
  //     chain: 'holesky',
  //     private_key: process.env.PRIVATE_KEY,
  //   })

  //   const res = await sdk.utils.getClusterBalance({ operatorIds: [5, 8, 9, 10] })
  //   expect(res).toBeDefined()
  // })

  it('can get cluster balance', async () => {
    const a = await createValidatorKeys({
      count: 20,
      chain: 'holesky',
      withdrawal: '0x012f55B6Cc5D57F943F1E79cF00214B652513f88',
      password: '123123123',
    })
    await saveKeystores(a, path.resolve(process.cwd(), 'sumbat/keystores'))
    console.log('a:', a.keystores)
  })
})
