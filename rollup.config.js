import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: './src/assets/script/main.js',
  dest: './src/assets/script/main.min.js',
  format: 'umd',
  moduleName: 'SC',
  plugins: [
    babel({
        exclude: './node_modules/**',
    }),
    // uglify()
  ]
};
