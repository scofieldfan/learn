/*
* @Author: Fan
* @Date:   2016-09-13 17:00:51
* @Last Modified by:   Fan
* @Last Modified time: 2016-09-13 17:18:12
*/

'use strict';

var fs = require("fs");
var data = '';

var readerStream = fs.createReadStream('input.txt');

readerStream.setEncoding('UTF8');

readerStream.on('data',function(chunk){
	data += chunk;
});

readerStream.on('end',function(){
	console.log(data);
});

readerStream.on('error',function(error){
	console.log(err.stack);
});

var writeStream = fs.createWriteStream('test.txt');



writeStream.write("node write a file",'UTF8');



//writeStream.end();
writeStream.on('finish',function(){
	console.log("i am finish");
});

console.log("程序执行完毕");
