import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import esbuild from 'rollup-plugin-esbuild';
import svgr from '@svgr/rollup';
import path from 'node:path';
import crypto from 'node:crypto';

const md5 = str => crypto.createHash('md5').update(str).digest('hex');

const external = [
  'react',
  'react-dom',
  'react/jsx-runtime',
  '@internationalized/date',
  '@react-aria/focus',
  '@react-spring/web',
  'classnames',
  'highlight.js',
  'lucide-react',
  'react-aria-components',
  'react-hook-form',
  'react-icons',
  'react-icons/fa',
  'react-icons/fa6',
  'react-icons/fi',
  'react-icons/md',
  'react-icons/ri',
  'react-icons/tb',
  'thenby',
  'zustand',
  'zustand/shallow',
];

const customResolver = resolve({
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
});

const convertCase = str => {
  return str
    .split(/(?=[A-Z])/)
    .join('_')
    .toLowerCase();
};

export default {
  input: 'src/components/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourceMap: true,
    },
    {
      file: 'dist/index.mjs',
      format: 'es',
      sourceMap: true,
    },
  ],
  plugins: [
    del({ targets: ['dist/*.js', 'dist/*.mjs', 'dist/*.css', 'dist/*.map'], runOnce: true }),
    copy({ targets: [{ src: 'src/styles/zen.css', dest: 'dist' }] }),
    postcss({
      extract: 'styles.css',
      sourceMap: true,
      minimize: true,
      modules: {
        generateScopedName: function (name, filename, css) {
          const file = path.basename(filename, '.css').replace('.module', '');
          const hash = Buffer.from(md5(`${name}:${filename}:${css}`))
            .toString('base64')
            .substring(0, 5);

          return `zen-${convertCase(file)}-${name}-${hash}`;
        },
      },
    }),
    svgr({ icon: true }),
    alias({
      entries: [{ find: /^@/, replacement: path.resolve('./src') }],
      customResolver,
    }),
    resolve(),
    commonjs(),
    esbuild(),
  ],
  external,
  onwarn(warning, warn) {
    // Ignore all warnings
  },
};
