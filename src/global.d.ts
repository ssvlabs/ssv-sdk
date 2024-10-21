import { type Hex, type Address } from 'viem'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PRIVATE_KEY: Hex
      OWNER_ADDRESS: Address
    }
  }
}

// This empty export is necessary to make this a module
export {}
