/*
* @Author: Fan
* @Date:   2016-09-13 17:34:27
* @Last Modified by:   Fan
* @Last Modified time: 2016-09-13 17:45:34
*/

'use strict';

function Hello(){

	this.setName = function(theName){
		this.name = theName;
	}
	this.sayHello = function(){
		console.log('Hello....'+this.name);	
	}
}
// module.exports = Hello;

/*exports可以通过 require 获得 */
module.exports = {
	test:function(){
		console.log("test.....");
	}
};