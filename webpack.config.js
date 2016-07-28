const webpack = require('webpack')
const isProd = process.env.NODE_ENV === 'production'

const config = {
	root: './dist',
	extensions: ['', '.js'],
	cache: true,
	entry: [
		// 'babel-polyfill',
		'./src/index.js'
	],
	output: {
		path: './dist',
		filename: 'index.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
		}]
	},
	plugins: [
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: "commons",
		// 	filename: "commons.js",
		// }),
		// new webpack.optimize.DedupePlugin(),
		// new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 2048 }),
		// new webpack.optimize.AggressiveMergingPlugin()
	]
}

module.exports = config
