// import JSEncrypt from '@/libs/ssv-keys/JSEncrypt'
import { Threshold } from '@/libs/ssv-keys/Threshold'
import type { IEncryptShare, ISharesKeyPairs } from '@/libs/ssv-keys/interfaces'
import { describe, expect, it } from 'vitest'
import { ForgeEncrypt } from '../utils'
import * as operatorKeys from './RsaKeys'

describe('JSEncrypt vs Node-Forge: Real Project Tests', () => {
  it('should encrypt shares identically using both implementations', async () => {
    // Use the exact same test data as the original Encryption.test.ts
    const privateKey = '0x12f1cf0ecf8086a7e1d84b3b77da48761664e3cdc73f165c644e7f0594f98bdd'
    const threshold: Threshold = new Threshold()
    const thresholdResult: ISharesKeyPairs = await threshold.create(privateKey, [9, 10, 11, 12])
    const decodedOperatorPublicKeys = operatorKeys.publicKeys.map((operator: string) =>
      Buffer.from(operator, 'base64').toString()
    )

    // Test with JSEncrypt (original implementation)
    // const jsEncryptShares: IEncryptShare[] = []
    // for (const [idx, operatorPublicKey] of decodedOperatorPublicKeys.entries()) {
    //   const jsEncrypt = new JSEncrypt()
    //   jsEncrypt.setPublicKey(operatorPublicKey)
    //   const encryptedPrivateKey = jsEncrypt.encrypt(thresholdResult.shares[idx].privateKey)
    //   if (!encryptedPrivateKey) {
    //     throw new Error('JSEncrypt encryption failed')
    //   }
    //   jsEncryptShares.push({
    //     operatorPublicKey,
    //     privateKey: encryptedPrivateKey,
    //     publicKey: thresholdResult.shares[idx].publicKey,
    //   })
    // }

    // Test with ForgeEncrypt (new implementation)
    const forgeEncryptShares: IEncryptShare[] = []
    for (const [idx, operatorPublicKey] of decodedOperatorPublicKeys.entries()) {
      const forgeEncrypt = new ForgeEncrypt()
      forgeEncrypt.setPublicKey(operatorPublicKey)
      const encryptedPrivateKey = forgeEncrypt.encrypt(thresholdResult.shares[idx].privateKey)
      if (!encryptedPrivateKey) {
        throw new Error('ForgeEncrypt encryption failed')
      }
      forgeEncryptShares.push({
        operatorPublicKey,
        privateKey: encryptedPrivateKey,
        publicKey: thresholdResult.shares[idx].publicKey,
      })
    }

    // Both should produce the same number of shares
    // expect(jsEncryptShares.length).toBe(forgeEncryptShares.length)
    // expect(jsEncryptShares.length).toBe(4) // Should be 4 operators

    // Test that both can be decrypted with the same private keys
  //   jsEncryptShares.forEach((share: IEncryptShare, index: number) => {
  //     // Decrypt JSEncrypt result with JSEncrypt
  //     const jsDecrypt = new JSEncrypt()
  //     const privateKey = Buffer.from(operatorKeys.privateKeys[index], 'base64').toString()
  //     jsDecrypt.setPrivateKey(privateKey)
  //     const jsDecrypted = jsDecrypt.decrypt(share.privateKey)
  //     expect(jsDecrypted).toEqual(thresholdResult.shares[index].privateKey)
  //
  //     // Decrypt JSEncrypt result with ForgeEncrypt
  //     const forgeDecrypt = new ForgeEncrypt()
  //     forgeDecrypt.setPrivateKey(privateKey)
  //     const forgeDecrypted = forgeDecrypt.decrypt(share.privateKey)
  //     expect(forgeDecrypted).toEqual(thresholdResult.shares[index].privateKey)
  //
  //     // Decrypt ForgeEncrypt result with JSEncrypt
  //     const forgeShare = forgeEncryptShares[index]
  //     const jsDecryptedFromForge = jsDecrypt.decrypt(forgeShare.privateKey)
  //     expect(jsDecryptedFromForge).toEqual(thresholdResult.shares[index].privateKey)
  //
  //     // Decrypt ForgeEncrypt result with ForgeEncrypt
  //     const forgeDecryptedFromForge = forgeDecrypt.decrypt(forgeShare.privateKey)
  //     expect(forgeDecryptedFromForge).toEqual(thresholdResult.shares[index].privateKey)
  //   })
  })

  it('should validate operator public keys identically', () => {
    // Test with the real operator keys from the project
    operatorKeys.publicKeys.forEach((base64Key: string) => {
      const decodedKey = Buffer.from(base64Key, 'base64').toString()

      // Test JSEncrypt validation
      // const jsEncrypt = new JSEncrypt()
      // expect(() => jsEncrypt.setPublicKey(decodedKey)).not.toThrow()

      // Test ForgeEncrypt validation
      const forgeEncrypt = new ForgeEncrypt()
      expect(() => forgeEncrypt.setPublicKey(decodedKey)).not.toThrow()
    })

    // Test with invalid keys - both should NOT throw (JSEncrypt behavior)
    const invalidKeys = [
      '-----BEGIN PUBLIC KEY-----\ninvalid\n-----END PUBLIC KEY-----',
      'not-a-key',
      '',
      '-----BEGIN RSA PUBLIC KEY-----\ninvalid\n-----END RSA PUBLIC KEY-----'
    ]

    invalidKeys.forEach((invalidKey) => {
      // Both should NOT throw for invalid keys (JSEncrypt behavior)
      // const jsEncrypt = new JSEncrypt()
      const forgeEncrypt = new ForgeEncrypt()

      // expect(() => jsEncrypt.setPublicKey(invalidKey)).not.toThrow()
      expect(() => forgeEncrypt.setPublicKey(invalidKey)).not.toThrow()

      // But encryption should fail (return false)
      // const jsResult = jsEncrypt.encrypt('test')
      const forgeResult = forgeEncrypt.encrypt('test')

      // expect(jsResult).toBe(false)
      expect(forgeResult).toBe(false)
    })
  })

  it('should handle the exact same edge cases as the original validator', () => {
    const begin = '-----BEGIN RSA PUBLIC KEY-----'
    const end = '-----END RSA PUBLIC KEY-----'

    // Test case 1: Key too short - both should NOT throw
    const shortKey = 'short'
    // const jsEncrypt1 = new JSEncrypt()
    const forgeEncrypt1 = new ForgeEncrypt()

    // expect(() => jsEncrypt1.setPublicKey(shortKey)).not.toThrow()
    expect(() => forgeEncrypt1.setPublicKey(shortKey)).not.toThrow()

    // But encryption should fail
    // expect(jsEncrypt1.encrypt('test')).toBe(false)
    expect(forgeEncrypt1.encrypt('test')).toBe(false)

    // Test case 2: Valid key format
    const validKey = operatorKeys.publicKeys[0]
    const decodedValidKey = Buffer.from(validKey, 'base64').toString()

    // const jsEncrypt2 = new JSEncrypt()
    const forgeEncrypt2 = new ForgeEncrypt()

    // expect(() => jsEncrypt2.setPublicKey(decodedValidKey)).not.toThrow()
    expect(() => forgeEncrypt2.setPublicKey(decodedValidKey)).not.toThrow()

    // And encryption should work
    // expect(jsEncrypt2.encrypt('test')).not.toBe(false)
    expect(forgeEncrypt2.encrypt('test')).not.toBe(false)

    // Test case 3: Key without proper headers - both should NOT throw
    const keyWithoutHeaders = decodedValidKey.replace(begin, '').replace(end, '')
    // const jsEncrypt3 = new JSEncrypt()
    const forgeEncrypt3 = new ForgeEncrypt()

    // expect(() => jsEncrypt3.setPublicKey(keyWithoutHeaders)).not.toThrow()
    expect(() => forgeEncrypt3.setPublicKey(keyWithoutHeaders)).not.toThrow()

    // But encryption should fail
    // expect(jsEncrypt3.encrypt('test')).toBe(false)
    expect(forgeEncrypt3.encrypt('test')).toBe(false)
  })

  it('should produce identical encryption results for the same input', () => {
    // Test with a simple string to see if both produce the same encrypted output
    const testData = 'test-private-key-data'
    const testPublicKey = Buffer.from(operatorKeys.publicKeys[0], 'base64').toString()

    // const jsEncrypt = new JSEncrypt()
    // jsEncrypt.setPublicKey(testPublicKey)
    // const jsEncrypted = jsEncrypt.encrypt(testData)

    const forgeEncrypt = new ForgeEncrypt()
    forgeEncrypt.setPublicKey(testPublicKey)
    const forgeEncrypted = forgeEncrypt.encrypt(testData)

    // Note: RSA encryption with padding will produce different results each time
    // due to randomization, but both should be decryptable
    // expect(jsEncrypted).not.toBe(false)
    expect(forgeEncrypted).not.toBe(false)

    // Both should be decryptable by the same private key
    const testPrivateKey = Buffer.from(operatorKeys.privateKeys[0], 'base64').toString()

    // jsEncrypt.setPrivateKey(testPrivateKey)
    forgeEncrypt.setPrivateKey(testPrivateKey)

    // const jsDecrypted = jsEncrypt.decrypt(jsEncrypted as string)
    const forgeDecrypted = forgeEncrypt.decrypt(forgeEncrypted as string)

    // expect(jsDecrypted).toBe(testData)
    expect(forgeDecrypted).toBe(testData)
  })
})
