// import {
//   deriveEth2ValidatorKeys,
//   generateRandomSecretKey
// } from '@chainsafe/bls-keygen'
// import bls from '@chainsafe/bls/blst-native'
// import { fromHexString } from '@chainsafe/ssz'
// import { mainnetChainConfig } from '@lodestar/config/networks'
// import { DOMAIN_DEPOSIT } from '@lodestar/params'
// import { ZERO_HASH, computeDomain, computeSigningRoot } from '@lodestar/state-transition'
// import { ssz } from '@lodestar/types/phase0'
// const masterSK = generateRandomSecretKey()
// const newValidatorCounts = 2
// const ownerAddress = '0xe20B1678AE31E02a1B16693852328c77a4913b72'
// const eth1Address = '0xF82f77f8e5121A6efC69EB8Dd2f7A88C29bC59ef'
// for (
//   var i = clusterData.validatorCount + 1;
//   i < clusterData.validatorCount + newValidatorCounts + 1;
//   i++
// ) {
//   const sk = bls.SecretKey.fromBytes(deriveEth2ValidatorKeys(masterSK, i).signing)
//   console.log('Pubkey: ' + sk.toPublicKey().toHex())
//   const pubkey = sk.toPublicKey().toHex()
//   const privateKey = sk.toHex()
//   const withdrawalCredentials = fromHexString(
//     '0x010000000000000000000000' + eth1Address.replace('0x', ''),
//   )
//   const depositMessage = { pubkey, withdrawalCredentials, amount: 32e9 }
//   const domain = computeDomain(DOMAIN_DEPOSIT, mainnetChainConfig.GENESIS_FORK_VERSION, ZERO_HASH)
//   const signingRoot = computeSigningRoot(ssz.DepositMessage, depositMessage, domain)
//   const depositData = { ...depositMessage, signature: sk.sign(signingRoot).toBytes() }
//   console.log('Deposit data: %o', ssz.DepositData.toJson(depositData))
//   const depositDataRoot = ssz.DepositData.hashTreeRoot(depositData)
// }
