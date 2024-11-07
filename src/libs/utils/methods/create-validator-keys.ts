import type { SupportedChains, chains } from '@/config/chains'
import { deriveEth2ValidatorKeys, generateRandomSecretKey } from '@chainsafe/bls-keygen'
import { create } from '@chainsafe/bls-keystore'
import bls from '@chainsafe/bls/herumi'
import { fromHexString, toHexString } from '@chainsafe/ssz'
import type { ChainConfig } from '@lodestar/config'
import { holeskyChainConfig, mainnetChainConfig } from '@lodestar/config/networks'
import { DOMAIN_DEPOSIT } from '@lodestar/params'
import { ZERO_HASH, computeDomain, computeSigningRoot } from '@lodestar/state-transition'
import { ssz } from '@lodestar/types/phase0'
import type { Address } from 'abitype'

const chainConfigs: Record<keyof typeof chains, ChainConfig> = {
  mainnet: mainnetChainConfig,
  holesky: holeskyChainConfig,
}

type ValidatorKeysArgs = {
  count: number
  chain: SupportedChains
  withdrawal: Address
  password: string
}

export async function createValidatorKeys({
  count,
  chain,
  withdrawal,
  password,
}: ValidatorKeysArgs) {
  const masterSK = generateRandomSecretKey()
  const keystores = []
  const deposit_data = []

  const chainConfig = chainConfigs[chain]

  for (let i = 0; i < count; i++) {
    const sk = bls.SecretKey.fromBytes(deriveEth2ValidatorKeys(masterSK, i).signing)
    const pubkey = sk.toPublicKey()
    const pubkeyBytes = pubkey.toBytes()

    const keystore = await create(password, sk.toBytes(), pubkeyBytes, `m/12381/3600/${i}/0/0`)
    keystores.push(keystore)

    // Generate deposit data
    const withdrawalCredentials = fromHexString(
      '0x010000000000000000000000' + withdrawal.replace('0x', ''),
    )

    const depositMessage = {
      pubkey: pubkeyBytes,
      withdrawalCredentials,
      amount: 32e9,
    }

    const domain = computeDomain(DOMAIN_DEPOSIT, chainConfig.GENESIS_FORK_VERSION, ZERO_HASH)

    const signingRoot = computeSigningRoot(ssz.DepositMessage, depositMessage, domain)
    const depositData = {
      ...depositMessage,
      signature: sk.sign(signingRoot).toBytes(),
    }

    const depositDataRoot = ssz.DepositData.hashTreeRoot(depositData)

    const generated = {
      pubkey: toHexString(pubkey.toBytes()).replace('0x', ''),
      withdrawal_credentials: toHexString(withdrawalCredentials).replace('0x', ''),
      amount: 32000000000,
      signature: toHexString(depositData.signature).replace('0x', ''),
      deposit_message_root: toHexString(signingRoot).replace('0x', ''),
      deposit_data_root: toHexString(depositDataRoot).replace('0x', ''),
      fork_version: toHexString(chainConfig.GENESIS_FORK_VERSION).replace('0x', ''),
      network_name: chain,
    }

    // try {
    //   const isvalid = bls.verify(
    //     bls.PublicKey.fromHex(generated.pubkey),
    //     fromHexString(generated.deposit_message_root),
    //     bls.Signature.fromHex(generated.signature),
    //   )
    //   console.log('isvalid:', isvalid)
    // } catch (error) {
    //   console.error('BLS verification failed:', error)
    // }
    deposit_data.push(generated)
  }

  return {
    keystores,
    deposit_data,
  }
}
