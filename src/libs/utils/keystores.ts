import { KeySharesItem, SSVKeys } from 'ssv-keys'
import { IOperator } from 'ssv-keys/dist/tsc/src/lib/KeyShares/KeySharesData/IOperator'
import { KeySharesPayload } from 'ssv-keys/dist/tsc/src/lib/KeyShares/KeySharesData/KeySharesPayload'

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
  keystore: string
  keystore_password: string
  owner_address: string
  nonce: number
}

export const generateKeyShares = async (args: GenerateKeySharesArgs) => {
  const extracted = await ssvKeys.extractKeys(args.keystore, args.keystore_password)

  const operators = args.operator_keys.map((key, index) => ({
    id: args.operator_ids[index],
    operatorKey: key,
  }))

  const { threshold, encryptedShares } = await createAndEncryptShares(
    extracted.privateKey,
    operators,
  )

  const shares = (await new KeySharesItem().buildPayload(
    {
      publicKey: threshold.publicKey,
      operators,
      encryptedShares,
    },
    {
      ownerAddress: args.owner_address,
      ownerNonce: args.nonce,
      privateKey: extracted.privateKey,
    },
  )) as KeySharesPayload
  return shares
}
