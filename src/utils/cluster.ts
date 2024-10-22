export const createClusterId = (ownerAddress: string, operatorIds: number[]) => {
  return `${ownerAddress.toLowerCase()}-${operatorIds.join('-')}`
}
