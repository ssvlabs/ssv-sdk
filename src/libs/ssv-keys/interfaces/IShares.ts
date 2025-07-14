export interface IShares {
  privateKey: string,
  publicKey: string,
  id?: any
}

export interface ISharesKeyPairs {
  privateKey: string,
  publicKey: string,
  shares: IShares[]
}
