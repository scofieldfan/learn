/*
* @Author: Fan
* @Date:   2016-09-13 17:18:15
* @Last Modified by:   Fan
* @Last Modified time: 2016-09-13 17:20:19
*/

'use strict';

var fs = require("fs");

var readerStream = fs.createReadStream("input.txt");

var writerStream = fs.createWriteStream("output.txt");

readerStream.pipe(writerStream);
console.log("end");