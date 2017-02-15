var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket){

    var time = strftime('%F %H:%M',new Date())+"\n";

    socket.end(time);
});
server.listen(Number(process.argv[2]));

