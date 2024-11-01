import { createClusterManager } from '@/libs/cluster'
import { createOperatorManager } from '@/libs/operator'
import { createUtils } from '@/libs/utils'
import { ConfigReturnType, createConfig } from './config/create'
import { ConfigArgs } from './utils/zod/config'

export class SSVSDK {
  readonly core: ConfigReturnType
  readonly clusters: ReturnType<typeof createClusterManager>
  readonly operators: ReturnType<typeof createOperatorManager>
  readonly api: ConfigReturnType['api']
  readonly contract: ConfigReturnType['contract']
  readonly utils: ReturnType<typeof createUtils>

  constructor(props: ConfigArgs) {
    this.core = createConfig(props)
    this.clusters = createClusterManager(this.core)
    this.operators = createOperatorManager(this.core)
    this.api = this.core.api
    this.contract = this.core.contract
    this.utils = createUtils(this.core)
  }
}
