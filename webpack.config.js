const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: './src/js/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'js/main.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Page - My Page',
			template: 'index.html',
			filename: 'index.html',
			style: 'css/main.css'
		}
	)]
}
