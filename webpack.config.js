const path = require('path')
const webpack = require('webpack')
const Webpack2Polyfill = require("webpack2-polyfill-plugin")
// const isProd = process.env.NODE_ENV === 'production'

const config = {
	cache: true,
	devtool: 'source-map',
	entry: {
		home: './assets/scripts/home.js',
		settings: './assets/scripts/settings.js'
	},
	output: {
		path: path.join(__dirname, "assets/scripts"),
		filename: '[name].min.js',
		publicPath: '/assets/scripts/',
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
			// pages: path.resolve(__dirname, 'src/pages/'),
		}
	},
	plugins: [
		new Webpack2Polyfill(),
		new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
		// new webpack.optimize.CommonsChunkPlugin({ name: "commons" }),
	]
}

module.exports = config
