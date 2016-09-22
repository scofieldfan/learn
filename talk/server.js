/*
* @Author: Fan
* @Date:   2016-09-21 19:11:01
* @Last Modified by:   Fan
* @Last Modified time: 2016-09-21 19:18:02
*/

'use strict';
var http = require('http');
    //创建一个服务器  
/*server = http.createServer(function(req, res) {  
        res.writeHead(200, {  
            'Content-Type': 'text/plain' 
        });  
        res.write('hello world!');  
        res.end();  
});  
//监听80端口  
server.listen(80);  */

var express = require('express'), //引入express模块
    app = express(),
    server = http.createServer(app);
app.use('/', express.static(__dirname + '/www')); //指定静态HTML文件的位置
server.listen(80);
console.log('server started'); 