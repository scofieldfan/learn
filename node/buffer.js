/*
* @Author: Fan
* @Date:   2016-09-13 16:32:38
* @Last Modified by:   Fan
* @Last Modified time: 2016-09-13 16:53:50
*/

'use strict';
// var Buffer = require('Buffer');
var buf = new Buffer(100);
var len = buf.write("hello fanzhang f");
console.log(len);
var buf = new Buffer(26);
for(var i = 0;i < 26; i++){
	buf[i] = i + 97;
}
console.log(buf.toString('utf8',0,30));

buf = new Buffer("hello world");
console.log(buf.toJSON());