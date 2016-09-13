/*
* @Author: Fan
* @Date:   2016-09-13 15:48:34
* @Last Modified by:   Fan
* @Last Modified time: 2016-09-13 16:11:11
*/

'use strict';

// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

eventEmitter.on("do",function(){
	console.log('received do event');
});

setTimeout(function(){
	eventEmitter.emit("do");
}, 2000);


eventEmitter.on("someevent",function(arg){
	console.log("receive someevent:"+arg);
});

eventEmitter.on("someevent",function(arg){
	console.log("receive someevent:"+arg);
});

eventEmitter.emit("someevent","hello fan");

