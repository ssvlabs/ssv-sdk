import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://api.studio.thegraph.com/query/71118/ssv-network-ethereum/version/latest',
  documents: ['src/**/*.graphql'],
  ignoreNoDocuments: true,
  generates: {
    './src/graphql/': {
      preset: 'client',
      config: {
        scalars: {
          BigInt: 'string', // or 'string' if you prefer string representation
          BigDecimal: 'string',
          Bytes: 'Address',
          Account: 'Address',
        },
        additionalImports: ['import { type Address } from "viem"'],
        skipTypename: true,
      },
      plugins: [
        {
          add: {
            content: "import { type Address } from 'viem';",
          },
        },
      ],

      //   plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
    },
    './schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true,
      },
    },
  },
}

export default config
