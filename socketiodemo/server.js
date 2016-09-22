/*
* @Author: Fan
* @Date:   2016-09-21 20:59:25
* @Last Modified by:   Fan
* @Last Modified time: 2016-09-21 21:01:11
*/

'use strict';

var Server = require('socket.io');
var io = new Server(5555);

io.on('connection',function(socket){
	socket.emit('msg',{hi:"fanzhang"})
	socket.on('msg',function(data){
		console.log(data);
	});
});