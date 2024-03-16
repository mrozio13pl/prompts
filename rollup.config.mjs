import commonjs from '@rollup/plugin-commonjs';
import { minify } from 'rollup-plugin-esbuild';
import { dts } from 'rollup-plugin-dts';
import { copy } from '@web/rollup-plugin-copy';

export default [
	{
		input: 'lib/index.js',
    output: {
      file: 'dist/index.js',
      format: 'cjs'
    },
		plugins: [commonjs(), minify(), copy({ patterns: 'index.d.ts' })]
	},
	{
		input: 'lib/index.js',
    output: {
      file: 'dist/index.mjs',
      format: 'es'
    },
		plugins: [commonjs(), minify()]
	},
	{
		input: './index.d.ts',
		output: [
			{
				file: 'dist/index.d.mts',
				format: 'es'
			}
		],
		plugins: [
			dts()
		],
	}
];
