/*
* @Author: fanzhang
* @Date:   2016-11-20 21:07:42
* @Last Modified by:   fanzhang
* @Last Modified time: 2016-11-20 21:09:18
*/

'use strict';

module.exports = {
    entry: "./client.js",
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