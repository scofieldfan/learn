/*
* @Author: fanzhang
* @Date:   2016-11-29 10:31:09
* @Last Modified by:   fanzhang
* @Last Modified time: 2016-11-29 20:03:12
*/

'use strict';


var add = function(x) {
  return function(y) {
    return x + y;
  };
};

var increment = add(1);
var addTen = add(10);

console.log(increment(2));
// 3

console.log(addTen(2));

var curry = require('lodash').curry;

var match = curry(function(what, str) {
  return str.match(what);
});

var replace = curry(function(what, replacement, str) {
  return str.replace(what, replacement);
});

var filter = curry(function(f, ary) {
  return ary.filter(f);
});

var map = curry(function(f, ary) {
  return ary.map(f);
});

console.log(match(/\s+/g)("hello world"));
console.log(match(/\s+/g)("helloworld"));

var hasSpaces = match(/\s+/g);

console.log(hasSpaces("he llo worl d"));


console.log(hasSpaces("helloworld"));

console.log(filter(hasSpaces,["tori_spelling.","tori amo s","a 3 33"]));

