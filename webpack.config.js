const path = require('path')
const webpack = require('webpack')
const Webpack2Polyfill = require("webpack2-polyfill-plugin")
// const isProd = process.env.NODE_ENV === 'production'

const config = {
	cache: true,
	devtool: 'source-map',
	entry: {
		home: './assets/scripts/home.js',
		settings: './assets/scripts/settings.js',
		activate: './assets/scripts/activate.js',
		unscribe: './assets/scripts/unscribe.js',
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
		}, {
			test: /\.css$/,
			loader: [ 'style-loader', 'css-loader' ]
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
