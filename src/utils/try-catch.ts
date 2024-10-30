export const tryCatch = <T>(fn: () => T): [T | null, Error | null] => {
  try {
    return [fn(), null]
  } catch (e) {
    return [null, e as Error]
  }
}
