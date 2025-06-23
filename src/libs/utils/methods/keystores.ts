import type { IOperator } from '@/libs/ssv-keys/interfaces'
import type { KeySharesPayload } from '@/libs/ssv-keys/KeyShares/KeySharesData/KeySharesPayload'
import { KeySharesItem } from '@/libs/ssv-keys/KeyShares/KeySharesItem'
import { SSVKeys } from '@/libs/ssv-keys/SSVKeys'

export const ssvKeys = new SSVKeys()

const createAndEncryptShares = async (privateKey: string, operators: IOperator[]) => {
  const threshold = await ssvKeys.createThreshold(privateKey, operators)
  const encryptedShares = await ssvKeys.encryptShares(operators, threshold.shares)
  return {
    threshold,
    encryptedShares,
  }
}

type GenerateKeySharesArgs = {
  operator_keys: string[]
  operator_ids: number[]
  keystore: string | string[]
  keystore_password: string
  owner_address: string
  nonce: number
}

export const generateKeyShares = async (args: GenerateKeySharesArgs) => {
  const keystores = Array.isArray(args.keystore) ? args.keystore : [args.keystore]
  const shares: KeySharesPayload[] = []

  for (let i = 0; i < keystores.length; i++) {
    const keystore = keystores[i]
    const extracted = await ssvKeys.extractKeys(keystore, args.keystore_password)
    const operators = args.operator_keys.map((key, index) => ({
      id: args.operator_ids[index],
      operatorKey: key,
    }))

    const { threshold, encryptedShares } = await createAndEncryptShares(
      extracted.privateKey,
      operators,
    )

    shares.push(
      (await new KeySharesItem().buildPayload(
        {
          publicKey: threshold.publicKey,
          operators,
          encryptedShares,
        },
        {
          ownerAddress: args.owner_address,
          ownerNonce: args.nonce + i,
          privateKey: extracted.privateKey,
        },
      )) as KeySharesPayload,
    )
  }

  return shares
}
