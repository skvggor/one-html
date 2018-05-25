const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: './src/js/index.js',
	output: {
		path: __dirname + '/dist/js',
		filename: 'index_bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'DuPont - Nomex',
			template: 'index.html',
			filename: 'index.html'
		})
	]
}
