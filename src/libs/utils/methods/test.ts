import { deriveEth2ValidatorKeys, generateRandomSecretKey } from '@chainsafe/bls-keygen'
import { create } from '@chainsafe/bls-keystore'
// Change the BLS import to use the pure JavaScript implementation
import bls from '@chainsafe/bls/herumi'

export const createValidatorKeys = async (password: string, index: number) => {
  // Generate master secret key if not already generated
  const masterSK = generateRandomSecretKey()

  // Derive validator keys for the given index
  const validatorKeys = deriveEth2ValidatorKeys(masterSK, index)

  // Create BLS secret key from the derived signing key
  const sk = bls.SecretKey.fromBytes(validatorKeys.signing)

  // Get public key as bytes
  const publicKey = sk.toPublicKey().toBytes()

  // Create keystore
  const path = `m/12381/3600/${index}/0/0` // Standard path for Ethereum validators
  const keystore = await create(password, validatorKeys.signing, publicKey, path)

  return {
    keystore,
    publicKey: Buffer.from(publicKey).toString('hex'),
    privateKey: Buffer.from(sk.toBytes()).toString('hex'),
  }
}
