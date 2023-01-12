import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import clean from '@rollup-extras/plugin-clean';
import binify from '@rollup-extras/plugin-binify';
import externals from '@rollup-extras/plugin-externals';

const input = 'src/index.ts';

const lib = require('./package.json');
const dest = 'dist';
const year = new Date().getFullYear();
const banner = `// NordClan-UI v${lib.version} Copyright (c) ${year} ${lib.author} and contributors`;

const plugins = [
  clean({ targets: ['dist'] }),
  externals(),
  resolve({ browser: true, extensions: ['.js', '.ts', '.tsx'] }),
  typescript({ tsconfig: './tsconfig.build.json' }),
  commonjs(),
  binify(),
];

export default {
  input,

  output: {
    format: 'cjs',
    dir: dest,
    entryFileNames: '[name].js',
    chunkFileNames: '[name].js',
    banner,
  },

  plugins: plugins,
};
