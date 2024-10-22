import { createData } from '@/libs/data'
import { utils } from '@/libs/utils'
import { ConfigReturnType, createConfig } from './config/create'
import { ConfigArgs } from './utils/zod/config'

export class SSVSDK {
  readonly core: ConfigReturnType
  readonly data: ReturnType<typeof createData>
  readonly utils: typeof utils

  constructor(props: ConfigArgs) {
    this.core = createConfig(props)
    this.data = createData(this.core.client)
    this.utils = utils
  }
}
