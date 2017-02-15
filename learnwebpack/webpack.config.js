/*
* @Author: fanzhang
* @Date:   2016-11-11 19:45:56
* @Last Modified by:   fanzhang
* @Last Modified time: 2016-11-11 19:46:08
*/

'use strict';
module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};