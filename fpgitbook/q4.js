/*
* @Author: fanzhang
* @Date:   2016-12-13 09:33:13
* @Last Modified by:   fanzhang
* @Last Modified time: 2016-12-13 14:19:24
*/

'use strict';


var total = 0;

var delayInvoc = function(param){
    if(!param){
        return total;
    }else{
        total += param;
        return delayInvoc;
    }
}




module.exports = delayInvoc;