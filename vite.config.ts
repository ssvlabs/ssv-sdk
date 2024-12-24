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
    target: 'es2022',
    minify: false,
    lib: {
      entry: {
        main: resolve(__dirname, 'src/main.ts'),
        utils: resolve(__dirname, 'src/utils/index.ts'),
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      output: {
        globals: {
          'ssv-keys': 'ssv-keys',
        },
      },
      external: [
        'viem',
        'ssv-keys',
        '@chainsafe/bls',
        '@chainsafe/bls/herumi',
        '@chainsafe/blst',
        // '@chainsafe/bls-keygen',
        // '@chainsafe/bls-keystore',
        // '@chainsafe/ssz',
        // '@lodestar/config',
        // '@lodestar/params',
        // '@lodestar/state-transition',
        // '@lodestar/types/phase0',
        // '@lodestar/types',
        // '@lodestar/api',
        // '@lodestar/db',
        // '@lodestar/utils',
        // '@lodestar/validator',
        // '@lodestar/beacon-node',
      ],
    },
  },
  optimizeDeps: {
    include: ['src/graphql/graphql.ts'],
  },
})
