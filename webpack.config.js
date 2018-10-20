const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/main.ts'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },{
      test: /\.js$/,
      use: ['source-map-loader'],
      enforce: 'pre',
      exclude: /node_modules/
    }]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Dev'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
