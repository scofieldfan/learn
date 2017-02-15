/*
* @Author: fanzhang
* @Date:   2016-11-14 10:24:02
* @Last Modified by:   fanzhang
* @Last Modified time: 2016-11-14 10:51:03
*/

'use strict';


module.exports = function arrayMap(arr,fn){

    return arr.reduce(function(pre,item,index,array){
        pre.push(fn.call(null,item));
        return pre;
    },[]);

}