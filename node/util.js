/*
* @Author: Fan
* @Date:   2016-09-13 18:04:58
* @Last Modified by:   Fan
* @Last Modified time: 2016-09-13 18:15:43
*/

'use strict';

var util = require("util");

function Base(){
	this.name = "base";
	this.sayHello = function(){
		console.log('Hello:'+this.name);
	}
}

Base.prototype.showName = function(){
	console.log(this.name);
}

function Sub(){
	this.name = 'son';
}


Sub.prototype = new Base();
Sub.prototype.constructor = Sub;

//util.inherits(Sub,Base);//不会继承Base里的this的函数 ,只继承了showName。

var base = new Base();

base.showName();

base.sayHello();

console.log(base);

var sub = new Sub();
sub.showName();
sub.sayHello();
console.log(sub);
console.log("*************************");
console.log(util.inspect(base, true));
console.log(util.inspect(sub, true));


