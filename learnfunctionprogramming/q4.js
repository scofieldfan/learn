/*
 * @Author: fanzhang
 * @Date:   2016-11-14 09:56:13
 * @Last Modified by:   fanzhang
 * @Last Modified time: 2016-11-14 10:23:23
 */

'use strict';

var partialApply = function(fun, x) {
    return function(y) {
        return fun.call(null, x,y);
    }
};

var add = function(x, y) {
    return x + y;
}

var addTen = partialApply(add, 10);

/*
console.log(addTen);
console.log(addTen(10));
console.log(addTen(0));
console.log(addTen(20));
console.log(addTen(30));
*/

/*
var logger = function(head){
    return function(sth){
        console.log.apply(console,[head,sth]);
    }
}
*/
var logger = function(head){
    return function(){
        console.log.apply(console,[head].concat([].slice.call(arguments)));
    }
}
module.exports = logger;