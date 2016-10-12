/*
* @Author: fanzhang
* @Date:   2016-11-06 18:35:31
* @Last Modified by:   fanzhang
* @Last Modified time: 2016-11-06 18:41:51
*/

'use strict';

if(process.argv){
    var sum = 0;
    for(var i = 2 ; i<process.argv.length; i++){

            sum += Number(process.argv[i]);
    }
/*    process.argv.forEach(function(item){

            console.log("..........");
            console.log(item);
            console.log(parseInt(item));
            console.log(Number(item));
            console.log(parseInt(item));
            sum += Number(item);
    })*/
    console.log(sum);
}