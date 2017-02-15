/*
 * @Author: Fan
 * @Date:   2016-09-21 21:01:59
 * @Last Modified by:   fanzhang
 * @Last Modified time: 2016-11-20 21:48:47
 */

var io = require('socket.io-client');
var $ = require('jquery');
//var socket = io("ws://127.0.0.1:8080");


var socket = io();
$('form').submit(function() {
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
});
socket.on('chat message', function(msg) {
    $('#messages').append($('<li>').text(msg));
});