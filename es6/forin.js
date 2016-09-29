/*
* @Author: Fan
* @Date:   2016-09-21 09:58:56
* @Last Modified by:   Fan
* @Last Modified time: 2016-09-26 22:21:30
*/

'use strict';

let nums = [1,2,3,4];

for(let num of nums ){
	console.log(num);
}
var lastSubs = [3,5,7];
var curSubs = [5,9];

function getUnSubscribe(lastSubs,curSubs){
	return lastSubs.filter(function(lastItem){
		return !curSubs.some(function(curItem){
			return curItem === lastItem;
		})
	})
}