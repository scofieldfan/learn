/**
 * Created by fanzhang on 16/11/6.
 */


var http = require('http');
var bl = require('bl');
http.get(process.argv[2], function ( response) {
    //response.setEncoding('utf-8');
    response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err);
        }
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));

}).on('error', console.error);