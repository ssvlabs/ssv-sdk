import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import path from 'path'
import { defineConfig } from 'rollup'
import del from 'rollup-plugin-delete'
import tsConfigPaths from 'rollup-plugin-tsconfig-paths'
import packageJson from './package.json' assert { type: 'json' }

console.log('🌶 rollup current mode: ', process.env.BUILD)

const InjectPlugin =
  process.env.BUILD === 'production'
    ? [
        json(),
        terser(),
        nodeResolve({
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          mainFields: ['browser', 'module', 'main'],
        }),
        commonjs(),
        tsConfigPaths(),
        typescript(),
        del({ targets: 'dist/*', verbose: true }),
      ]
    : [
        nodeResolve({
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          mainFields: ['browser', 'module', 'main'],
        }),
        alias({
          entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
        }),
        typescript(),
        tsConfigPaths(),
      ]

export default defineConfig({
  input: 'src/main.ts',
  plugins: [...InjectPlugin],
  external: ['node:url', 'node:path', 'viem', 'ssv-keys'],
  output: [
    // commonjs
    {
      dir: path.dirname(packageJson.main),
      format: 'commonjs',
      entryFileNames: path.basename(packageJson.main),
    },
    // es module
    {
      dir: path.dirname(packageJson.module),
      format: 'esm',
      entryFileNames: path.basename(packageJson.module),
    },
  ],
})
