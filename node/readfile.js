/*
* @Author: Fan
* @Date:   2016-09-13 15:44:13
* @Last Modified by:   Fan
* @Last Modified time: 2016-09-13 15:44:23
*/

'use strict';

var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err){
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});
console.log("程序执行完毕");