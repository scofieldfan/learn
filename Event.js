/*
* @Author: fanzhang
* @Date:   2016-09-05 10:50:35
* @Last Modified by:   fanzhang
* @Last Modified time: 2016-09-05 12:09:57
*/

'use strict';


//DOM0 Event
var btn = document.getElementById("testbtn")
btn.onclick = function(){
	alert(this.id);
	alert(this.className);
}


//DOM2 Event
var btn2 = document.getElementById("testdom2");
var handler = function(){
	alert(this.id);
}
if(btn2.addEventListener){
	btn2.addEventListener("click", handler,false);//false代表冒泡阶段会触发
}

// btn2.removeEventListener("click", handler);

//IE Event handler
var btn3 = document.getElementById("testIE");

var ieHandler = function(){
	alert("clicked");	
}
if(btn3.attachEvent){
	btn3.attachEvent("onclick",ieHandler);
}

if(btn3.detachEvent){
	btn3.detachEvent("onclick",ieHandler)
}


var EventUtil = {
	addHandler :function(element,type,handler){
		if (element.addEventListener) {
			element.addEventListener(type, listener,false);
		} else if (element.attachEvent) {
			element.attachEvent(type, listener,false);
		}else {
			element["on"+type] = handler;
		}
	},
	removeHandler:function(element,type,handler){
		if(element.removeEventListener)	{
			element.removeEventLister(type,handler);	
		}else if(element.detachEvent){
			element.detachEvent(type,handler);	
		}else {
			element["on"+type] = null;
		}
	},
	getEvent : function(event){
		return event?event:window.event;
	},
	getTarget : function(event){
		return event.target || event.srcElement;
	},
	preventDefault:function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
	},
	stopPropagation : function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelable = true;
		}
	}

}