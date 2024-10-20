import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import packageJson from "./package.json" assert { type: "json" };
import terser from "@rollup/plugin-terser";
import del from 'rollup-plugin-delete'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import path from 'path';

console.log("🌶 rollup current mode: ", process.env.BUILD);

const InjectPlugin = process.env.BUILD === 'production' ?
  [
    terser(),
    nodeResolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      mainFields: ['browser', 'module', 'main'],
    }),
    typescript(),
    del({ targets: 'dist/*', verbose: true })
  ] :
  [
    nodeResolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      mainFields: ['browser', 'module', 'main'],
    }),
    typescript(),
  ]

export default defineConfig({
  input: "lib/main.ts",
  plugins: [
    alias({
      entries: [
        { find: '@', replacement: path.resolve(__dirname) },
      ]
    }),
    ...InjectPlugin
  ],
  external: ["node:url", "node:path"],
  output: [
    // commonjs
    {
      file: packageJson.main,
      format: "commonjs",
    },
    // es module
    {
      file: packageJson.module,
      format: "esm",
    },
  ],
});
