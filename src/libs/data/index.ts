import { ConfigReturnType } from '@/config/create'

export class SSVData {
  config: ConfigReturnType
  constructor(config: ConfigReturnType) {
    this.config = config
  }
}
