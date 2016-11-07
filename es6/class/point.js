/*
* @Author: fanzhang
* @Date:   2016-11-07 17:23:29
* @Last Modified by:   fanzhang
* @Last Modified time: 2016-11-07 17:24:43
*/

'use strict';

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
let point = new Point(5,6);
console.log(point.toString());