import type { Address } from "abitype"

export type Operator = {
  publicKey: string
  whitelisted: Address[]
  id: string
  validatorCount: string
  isPrivate: boolean
  whitelistedContract: Address
}
