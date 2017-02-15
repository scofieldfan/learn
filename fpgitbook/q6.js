/*
* @Author: fanzhang
* @Date:   2016-12-14 09:41:51
* @Last Modified by:   fanzhang
* @Last Modified time: 2016-12-14 10:24:44
*/

'use strict';

function abc(a,b,c){

}
function test(a){
    return function(b){
        return a + b;
    }
}
var curryFunc = function(method){
    var params = [];
    return function proxy(param){
        if(!param){
            method.apply(null,params);
        }else{
            params.push(param);
            return proxy;
        }

    }
}

module.exports = curryFunc;