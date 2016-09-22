/*
* @Author: Fan
* @Date:   2016-09-21 21:01:59
* @Last Modified by:   Fan
* @Last Modified time: 2016-09-21 21:05:34
*/

'use strict';
 var io = require('socket.io-client');
 var socket = io("ws://127.0.0.1:5555");
 socket.on('msg',function(data){
     socket.emit('msg', {rp:"fine,thank you"});
    console.log(data);
 });