/*
* @Author: fanzhang
* @Date:   2016-12-23 10:30:29
* @Last Modified by:   fanzhang
* @Last Modified time: 2016-12-23 15:51:53
*/

'use strict';

require('./support')
let R = require('ramda');

let addNumber = (a,b,c,d) => a + b + c + d;

console.log(addNumber(2,3,4,5));



let curried = R.curry(addNumber);

var f = curried(2,3);
console.log(f(4)(5));
console.log(f(10)(11));
console.log(f(20)(30));
console.log(curried(2,3,4,5));

console.log(add(3,3));

var words = split(' ');
console.log(splitSpace);
var split
console.log(splitSpace);
/*
var words = function(str) {
//  return split(' ', str);
    return ramda.curry(split);
};
*/
