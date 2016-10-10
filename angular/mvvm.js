/*
 * @Author: Fan
 * @Date:   2016-10-09 17:48:37
 * @Last Modified by:   Fan
 * @Last Modified time: 2016-10-10 08:28:37
 */

'use strict';

function Scope() {
	this.$$watchers = [];
}
Scope.prototype.$digest = function(){
  var dirty;
  do {
    dirty = this.$$digestOnce();
  } while (dirty);
};
Scope.prototype.$watch = function(watchFn, listenerFn) {
	var watcher = {
		watchFn: watchFn,
		listenerFn: listenerFn
	};
	this.$$watchers.unshift(watcher);
};

Scope.prototype.$$digestOnce = function(){
  var length = this.$$watchers.length;
  var watcher, newValue, oldValue, dirty;
  while(length--){
    watcher = this.$$watchers[length];
    newValue = watcher.watchFn(this);
    oldValue= watcher.last;
    if(newValue !== oldValue){
      watcher.last == newValue;
      watcher.listenerFn(newValue, oldValue, this);
      dirty = true;
    }
  }
   return dirty;
};
//dirty check.
// 1、每个双向绑定的元素都有一个watcher,Watcher来监听数据变化的时候更新view
// 2、在某些事件发生的时候，调用digest脏数据检测。
// 这些事件有：表单元素内容变化、Ajax请求响应、点击按钮执行的函数等。
// 3、脏数据检测会检测rootscope下所有被watcher的元素。
var watchFn = function() { return 'wat'; };
//var listenerFn = jasmine.createSpy();
scope.$watch(watchFn, function(){
	console.log("watch... update the view");
});
scope.$digest();//调用apply 会触发digest，进行脏值检查

