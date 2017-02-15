/*
 * @Author: fanzhang
 * @Date:   2016-11-18 09:11:10
 * @Last Modified by:   fanzhang
 * @Last Modified time: 2016-11-18 09:22:40
 */

'use strict';


function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    if (num <= 0) return
    operation()
    return  function(){

        repeat(operation, --num);
    } 
}

function trampoline(fn) {
    // You probably want to implement a trampoline!
}

module.exports = function(operation, num) {
    // You probably want to call your trampoline here!
    return trampoline(repeat);
    //return repeat(operation, num)
}