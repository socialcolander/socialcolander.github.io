import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: './assets/scripts/main.js',
  dest: './assets/scripts/build/main.js',
  format: 'umd',
  plugins: [
    babel(),
    uglify()
  ]
};
