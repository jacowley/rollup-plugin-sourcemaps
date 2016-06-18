import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',
  sourceMap: true,
  plugins: [
    babel({
      runtimeHelpers: true,
    }),
  ],
  external: [
    'fs',
    'path',
    'rollup-pluginutils',
    'babel-runtime/regenerator',
    'babel-runtime/core-js/promise',
    'babel-runtime/helpers/toConsumableArray',
    'babel-runtime/helpers/slicedToArray',
    'babel-runtime/helpers/asyncToGenerator',
  ],
  targets: [
    { dest: 'dist/rollup-plugin-sourcemaps.js', format: 'cjs' },
    { dest: 'dist/rollup-plugin-sourcemaps.esm.js', format: 'es6' },
  ],
};
