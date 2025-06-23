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
        keys: resolve(__dirname, 'src/libs/ssv-keys/SSVKeys.ts'),
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        'viem',
      ],
    },
  },
  optimizeDeps: {
    include: ['src/graphql/graphql.ts'],
  },
})
