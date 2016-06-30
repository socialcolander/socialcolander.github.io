import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: './src/index.js',
  dest: './dist/index.min.js',
  format: 'umd',
  moduleName: 'SC',
  plugins: [
    babel({
        exclude: './node_modules/**',
    }),
    // uglify()
  ]
};
