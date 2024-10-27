import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [
    nodePolyfills(),
    dts({ include: ['src/**/*.ts'], exclude: ['src/**/*.spec.ts', 'src/**/*.test.ts'] }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'ssv-sdk',
      formats: ['es', 'umd', 'cjs'],
      fileName: (format) => {
        switch (format) {
          case 'es':
            return 'main.esm.js'
          case 'umd':
            return 'main.min.js'
          case 'cjs':
            return 'main.min.cjs'
          default:
            return 'main.js'
        }
      },
    },
    rollupOptions: {
      external: [
        'viem',
        'ssv-keys' /* , 'zod', 'graphql-request', '@graphql-typed-document-node/core', 'ssv-keys' */,
      ],
      output: {
        globals: {
          viem: 'viem',
          'ssv-keys': 'ssvKeys',
          /* zod: 'zod',
          'graphql-request': 'graphqlRequest',
          '@graphql-typed-document-node/core': 'graphqlTypedDocumentNode',
          'ssv-keys': 'ssvKeys', */
        },
      },
    },
  },
  optimizeDeps: {
    include: ['src/graphql/graphql.ts'],
  },
})
