"use strict";
// import JSEncrypt from '@/libs/ssv-keys/JSEncrypt'
// import { Threshold } from '@/libs/ssv-keys/Threshold'
// import type { IEncryptShare, ISharesKeyPairs } from '@/libs/ssv-keys/interfaces'
// import { ForgeEncrypt } from '../utils'
// import * as operatorKeys from './RsaKeys'
//
// /**
//  * Manual comparison script using real project data
//  * Run this with: npx tsx src/libs/ssv-keys/Encryption/__test__/manual-comparison.ts
//  */
// async function compareRealProjectImplementations() {
//   console.log('🔍 Comparing JSEncrypt vs Node-Forge using REAL PROJECT DATA...\n')
//
//   // Use the exact same test data as the original Encryption.test.ts
//   console.log('📝 Setting up test data from original project...')
//   const privateKey = '0x12f1cf0ecf8086a7e1d84b3b77da48761664e3cdc73f165c644e7f0594f98bdd'
//   const threshold: Threshold = new Threshold()
//   const thresholdResult: ISharesKeyPairs = await threshold.create(privateKey, [9, 10, 11, 12])
//   const decodedOperatorPublicKeys = operatorKeys.publicKeys.map((operator: string) =>
//     Buffer.from(operator, 'base64').toString()
//   )
//   console.log(`✅ Generated ${thresholdResult.shares.length} threshold shares`)
//   console.log(`✅ Using ${decodedOperatorPublicKeys.length} operator public keys\n`)
//
//   // Test 1: Encryption with JSEncrypt
//   console.log('🔐 Testing encryption with JSEncrypt...')
//   const jsEncryptShares: IEncryptShare[] = []
//   const jsStart = Date.now()
//
//   for (const [idx, operatorPublicKey] of decodedOperatorPublicKeys.entries()) {
//     const jsEncrypt = new JSEncrypt()
//     jsEncrypt.setPublicKey(operatorPublicKey)
//     const encryptedPrivateKey = jsEncrypt.encrypt(thresholdResult.shares[idx].privateKey)
//     if (!encryptedPrivateKey) {
//       throw new Error('JSEncrypt encryption failed')
//     }
//     jsEncryptShares.push({
//       operatorPublicKey,
//       privateKey: encryptedPrivateKey,
//       publicKey: thresholdResult.shares[idx].publicKey,
//     })
//   }
//   const jsTime = Date.now() - jsStart
//   console.log(`✅ JSEncrypt encrypted ${jsEncryptShares.length} shares in ${jsTime}ms\n`)
//
//   // Test 2: Encryption with ForgeEncrypt
//   console.log('🔐 Testing encryption with ForgeEncrypt...')
//   const forgeEncryptShares: IEncryptShare[] = []
//   const forgeStart = Date.now()
//
//   for (const [idx, operatorPublicKey] of decodedOperatorPublicKeys.entries()) {
//     const forgeEncrypt = new ForgeEncrypt()
//     forgeEncrypt.setPublicKey(operatorPublicKey)
//     const encryptedPrivateKey = forgeEncrypt.encrypt(thresholdResult.shares[idx].privateKey)
//     if (!encryptedPrivateKey) {
//       throw new Error('ForgeEncrypt encryption failed')
//     }
//     forgeEncryptShares.push({
//       operatorPublicKey,
//       privateKey: encryptedPrivateKey,
//       publicKey: thresholdResult.shares[idx].publicKey,
//     })
//   }
//   const forgeTime = Date.now() - forgeStart
//   console.log(`✅ ForgeEncrypt encrypted ${forgeEncryptShares.length} shares in ${forgeTime}ms\n`)
//
//   // Test 3: Decryption and cross-compatibility
//   console.log('🔓 Testing decryption and cross-compatibility...')
//   let allDecryptionsSuccessful = true
//
//   jsEncryptShares.forEach((share: IEncryptShare, index: number) => {
//     const privateKey = Buffer.from(operatorKeys.privateKeys[index], 'base64').toString()
//
//     // Decrypt JSEncrypt result with JSEncrypt
//     const jsDecrypt = new JSEncrypt()
//     jsDecrypt.setPrivateKey(privateKey)
//     const jsDecrypted = jsDecrypt.decrypt(share.privateKey)
//     const jsSuccess = jsDecrypted === thresholdResult.shares[index].privateKey
//
//     // Decrypt JSEncrypt result with ForgeEncrypt
//     const forgeDecrypt = new ForgeEncrypt()
//     forgeDecrypt.setPrivateKey(privateKey)
//     const forgeDecrypted = forgeDecrypt.decrypt(share.privateKey)
//     const forgeSuccess = forgeDecrypted === thresholdResult.shares[index].privateKey
//
//     // Decrypt ForgeEncrypt result with JSEncrypt
//     const forgeShare = forgeEncryptShares[index]
//     const jsDecryptedFromForge = jsDecrypt.decrypt(forgeShare.privateKey)
//     const jsFromForgeSuccess = jsDecryptedFromForge === thresholdResult.shares[index].privateKey
//
//     // Decrypt ForgeEncrypt result with ForgeEncrypt
//     const forgeDecryptedFromForge = forgeDecrypt.decrypt(forgeShare.privateKey)
//     const forgeFromForgeSuccess = forgeDecryptedFromForge === thresholdResult.shares[index].privateKey
//
//     if (!jsSuccess || !forgeSuccess || !jsFromForgeSuccess || !forgeFromForgeSuccess) {
//       allDecryptionsSuccessful = false
//       console.log(`❌ Decryption failed for share ${index}`)
//     }
//   })
//
//   if (allDecryptionsSuccessful) {
//     console.log('✅ All decryptions successful and cross-compatible\n')
//   } else {
//     console.log('❌ Some decryptions failed\n')
//   }
//
//   // Test 4: Public key validation
//   console.log('🔑 Testing public key validation...')
//   let allValidationsSuccessful = true
//
//   operatorKeys.publicKeys.forEach((base64Key: string, index: number) => {
//     const decodedKey = Buffer.from(base64Key, 'base64').toString()
//
//     // Test JSEncrypt validation
//     const jsEncrypt = new JSEncrypt()
//     let jsValidationSuccess = false
//     try {
//       jsEncrypt.setPublicKey(decodedKey)
//       jsValidationSuccess = true
//     } catch (error) {
//       jsValidationSuccess = false
//     }
//
//     // Test ForgeEncrypt validation
//     const forgeEncrypt = new ForgeEncrypt()
//     let forgeValidationSuccess = false
//     try {
//       forgeEncrypt.setPublicKey(decodedKey)
//       forgeValidationSuccess = true
//     } catch (error) {
//       forgeValidationSuccess = false
//     }
//
//     if (!jsValidationSuccess || !forgeValidationSuccess) {
//       allValidationsSuccessful = false
//       console.log(`❌ Validation failed for key ${index}`)
//     }
//   })
//
//   if (allValidationsSuccessful) {
//     console.log('✅ All public key validations successful\n')
//   } else {
//     console.log('❌ Some validations failed\n')
//   }
//
//   // Performance comparison
//   console.log('⚡ Performance comparison...')
//   console.log(`JSEncrypt encryption time: ${jsTime}ms`)
//   console.log(`ForgeEncrypt encryption time: ${forgeTime}ms`)
//   console.log(`Performance ratio: ${(jsTime / forgeTime).toFixed(2)}x`)
//   console.log(`ForgeEncrypt is ${forgeTime < jsTime ? 'faster' : 'slower'} than JSEncrypt\n`)
//
//   // Summary
//   console.log('🎉 Comparison complete!')
//   console.log('\n📊 Summary:')
//   console.log(`- Both implementations processed ${jsEncryptShares.length} shares`)
//   console.log(`- Cross-compatibility: ${allDecryptionsSuccessful ? '✅ PASS' : '❌ FAIL'}`)
//   console.log(`- Public key validation: ${allValidationsSuccessful ? '✅ PASS' : '❌ FAIL'}`)
//   console.log(`- Performance: ForgeEncrypt is ${forgeTime < jsTime ? 'faster' : 'slower'}`)
//   console.log('\n🚀 Recommendation:')
//   if (allDecryptionsSuccessful && allValidationsSuccessful) {
//     console.log('✅ ForgeEncrypt is ready to replace JSEncrypt!')
//   } else {
//     console.log('❌ Issues found - needs further investigation')
//   }
// }
//
// // Run the comparison if this file is executed directly
// if (require.main === module) {
//   compareRealProjectImplementations().catch(console.error)
// }
//
// export { compareRealProjectImplementations }
//
