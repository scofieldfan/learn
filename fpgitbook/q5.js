/*
* @Author: fanzhang
* @Date:   2016-12-14 09:34:22
* @Last Modified by:   fanzhang
* @Last Modified time: 2016-12-14 09:41:12
*/

'use strict';


var callAndApply = {
      caller: function (object, method, nameArg, ageArg, tShirtSizeArg) {
        //your code
        method.call(object,nameArg,ageArg,tShirtSizeArg);
      },
      applier: function (object, method, argumentsArr) {
        // your code
        method.apply(object,argumentsArr);
      }
};

module.exports = callAndApply;