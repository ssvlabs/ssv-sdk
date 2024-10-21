import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import packageJson from './package.json' assert { type: 'json' }
import terser from '@rollup/plugin-terser'
import del from 'rollup-plugin-delete'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import alias from '@rollup/plugin-alias'
import path from 'path'

console.log('🌶 rollup current mode: ', process.env.BUILD)
console.log([
  // commonjs
  {
    dir: path.dirname(packageJson.main),
    file: path.basename(packageJson.main),
    format: 'commonjs',
  },
  // es module
  {
    dir: path.dirname(packageJson.module),
    file: path.basename(packageJson.module),
    format: 'esm',
  },
])

const InjectPlugin =
  process.env.BUILD === 'production'
    ? [
        terser(),
        nodeResolve({
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          mainFields: ['browser', 'module', 'main'],
        }),
        typescript(),
        del({ targets: 'dist/*', verbose: true }),
      ]
    : [
        nodeResolve({
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          mainFields: ['browser', 'module', 'main'],
        }),
        typescript(),
      ]

export default defineConfig({
  input: 'src/main.ts',
  plugins: [
    alias({
      entries: [{ find: '@', replacement: path.resolve('./src') }],
    }),
    ...InjectPlugin,
  ],
  external: ['node:url', 'node:path'],
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
