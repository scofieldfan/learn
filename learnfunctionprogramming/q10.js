/*
 * @Author: fanzhang
 * @Date:   2016-11-28 17:04:52
 * @Last Modified by:   fanzhang
 * @Last Modified time: 2016-11-28 17:11:16
 */

'use strict';

function loadUsers(userIds, load, done) {
    var users = [];
    var status = [];
    for (var i = 0; i < userIds.length; i++) {
        users.push(load(userIds[i]),function(){
            status[i] = 'ok';
            if(checkAllDone(status)){
                done();
            }
        })
    }
    return users
}

function checkAllDone(allStatus){
    return allStatus.every(function(status){
        status === 'ok';
    })

}
module.exports = loadUsers;