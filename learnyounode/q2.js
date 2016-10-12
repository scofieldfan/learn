/*
* @Author: fanzhang
* @Date:   2016-11-06 18:42:23
* @Last Modified by:   fanzhang
* @Last Modified time: 2016-11-06 18:45:44
*/

'use strict';

var fs = require('fs');

var file = process.argv[2];

fs.readFile(file,function(err,data){
    if(err){
        return console.log(err);
    }
    console.log(data.toString().split("\n").length-1);
});