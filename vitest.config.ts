import dotenv from 'dotenv'
import path from 'path'
import { defineConfig } from 'vitest/config'
dotenv.config() // This line loads the .env file

export default defineConfig({
  test: {
    testTimeout: 60000,
    include: ['**/*.test.ts'],
    env: process.env as Record<string, string>, // This line makes environment variables available in tests
    coverage: {
      include: ['src/**/*.ts'],
      exclude: [
        'src/mock/**/*.ts',
        'src/abi',
        'src/main.ts',
        'src/api/ssv-api/index.ts',
        'src/api/subgraph/index.ts',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
})
