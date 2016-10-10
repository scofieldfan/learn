/*
* @Author: Fan
* @Date:   2016-10-10 11:35:13
* @Last Modified by:   Fan
* @Last Modified time: 2016-10-10 12:52:45
*/

// In webpack.config.js
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: [
    './app/index.js'
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  output: {
    filename: "index_bundle.js",
    path: __dirname + '/dist'
  },
  plugins: [HTMLWebpackPluginConfig]
};