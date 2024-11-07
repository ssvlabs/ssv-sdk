import type { createValidatorKeys } from '@/libs/utils/methods/create-validator-keys'
import fs from 'node:fs'
import path from 'node:path'
export const saveKeystores = async (
  { keystores, deposit_data }: Awaited<ReturnType<typeof createValidatorKeys>>,
  folder: string,
) => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true })
  }

  keystores.forEach((keystore) => {
    fs.writeFileSync(
      path.join(
        folder,
        `keystore-${keystore.path.replace(/\//g, '_')}-${Math.floor(Date.now() / 1000)}.json`,
      ),
      JSON.stringify(keystore, null, 2),
    )
  })
  fs.writeFileSync(
    path.join(folder, `deposit_data-${Math.floor(Date.now() / 1000)}.json`),
    JSON.stringify(deposit_data, null, 2),
  )
}
