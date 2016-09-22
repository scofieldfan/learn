/*
 * @Author: Fan
 * @Date:   2016-09-22 11:15:23
 * @Last Modified by:   Fan
 * @Last Modified time: 2016-09-22 16:57:13
 */
var webpack = require('webpack');

module.exports = {
  entry: {
    app: './main.js',
    vendor: ['jquery']
  },
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ]
};