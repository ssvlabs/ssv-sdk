type SSVDataProps = {
  owner_address: string
  chain: string
}

export class SSVData {
  config: SSVDataProps

  constructor(props: SSVDataProps) {
    this.config = props
  } 
}