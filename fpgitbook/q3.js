/*
* @Author: fanzhang
* @Date:   2016-12-12 20:55:50
* @Last Modified by:   fanzhang
* @Last Modified time: 2016-12-12 21:09:59
*/

'use strict';



module.exports = function (a){
    return function(b){
        return a + b;
    }
}