// rollup.config.js
import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import externals from 'rollup-plugin-node-externals';
import json from '@rollup/plugin-json';
import analyze from 'rollup-plugin-analyzer'
//? if need css
//* import styles from 'rollup-plugin-styles';

const config = defineConfig([
  // CJS config
  {
    input: ['./src/index.tsx'],
    output: {
      dir: 'dist',
      format: 'cjs',
      sourcemap: false,
    },
    plugins: [
      json(),
      commonjs(),
      externals({ peerDeps: true }),
      typescript({ declarationDir: 'dist/types', sourceMap: false, tsconfig:'tsconfig.build.json' }),
      terser(),
      analyze()
    ],
  },
  // ESM config
  {
    input: ['./src/index.tsx'],
    output: {
      dir: 'dist/esm',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: false,
    },
    plugins: [
      json(),
      commonjs(),
      externals({ peerDeps: true }),
      typescript({ outDir: 'dist/esm', declaration: false, sourceMap: false }),
      terser(),
      analyze()
    ],
  }
]);

export default config
