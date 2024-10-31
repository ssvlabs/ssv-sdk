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
      entry: {
        main: resolve(__dirname, 'src/main.ts'),
        utils: resolve(__dirname, 'src/utils/index.ts'),
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['viem', 'ssv-keys'],
      output: {
        globals: {
          viem: 'viem',
          'ssv-keys': 'ssvKeys',
        },
      },
    },
  },
  optimizeDeps: {
    include: ['src/graphql/graphql.ts'],
  },
})
