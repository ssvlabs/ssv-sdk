import { deriveEth2ValidatorKeys, generateRandomSecretKey } from '@chainsafe/bls-keygen';
import { create } from '@chainsafe/bls-keystore';
import bls from '@chainsafe/bls/herumi'; // Using herumi implementation for browser compatibility (WebAssembly-based)

export const createValidatorKeys = async (password: string, index: number) => {
  // Generate master secret key if not already generated
  const masterSK = generateRandomSecretKey()
  
  // Derive validator keys for the given index
  const validatorKeys = deriveEth2ValidatorKeys(masterSK, index)
  
  // Create BLS secret key from the derived signing key
  const sk = bls.SecretKey.fromBytes(validatorKeys.signing)
  
  // Get public key
  const publicKey = sk.toPublicKey().toBytes()
  
  // Create keystore
  const path = `m/12381/3600/${index}/0/0` // Standard path for Ethereum validators
  const keystore = await create(password, validatorKeys.signing, publicKey, path)
  
  return {
    keystore,
    publicKey: sk.toPublicKey().toHex(),
    privateKey: sk.toHex()
  }
}