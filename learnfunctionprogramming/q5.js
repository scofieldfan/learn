/*
* @Author: fanzhang
* @Date:   2016-11-14 10:13:16
* @Last Modified by:   fanzhang
* @Last Modified time: 2016-11-14 10:19:57
*/

'use strict';


module.exports = function(namespace){
    
    return    console.log.bind(console,namespace);

}