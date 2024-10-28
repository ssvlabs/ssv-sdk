import path from 'path'
import { defineConfig } from 'vitest/config'
import dotenv from 'dotenv'
dotenv.config() // This line loads the .env file

export default defineConfig({
  test: {
    include: ['**/*.test.ts'],
    env: process.env as Record<string, string>, // This line makes environment variables available in tests
  },
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
})
