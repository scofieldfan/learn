/*
* @Author: fanzhang
* @Date:   2016-11-15 19:50:48
* @Last Modified by:   fanzhang
* @Last Modified time: 2016-11-15 20:20:31
*/

'use strict';

function repeat(operation,num){


    if(num <= 0){
        return;
    }
    operation();

    setTimeout(function(){
      repeat(operation,--num);
    },0);

}

module.exports = repeat;
