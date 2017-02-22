const webpack = require('webpack')
const path = require('path')
const Webpack2Polyfill = require("webpack2-polyfill-plugin")
const isProd = process.env.NODE_ENV === 'production'

const config = {
	cache: true,
	devtool: 'source-map',
	entry: [
		'./src/index.js'
	],
	output: {
		path: './dist',
		filename: 'index.min.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
		}]
	},
	resolve: {
		alias: {
			pages: path.resolve(__dirname, 'src/pages/'),
			components: path.resolve(__dirname, 'src/components/'),
			services: path.resolve(__dirname, 'src/services/'),
		}
	},
	plugins: [
		new Webpack2Polyfill(),
		new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
	]
}

module.exports = config
