var http = require('http');
var bl = require('bl');
var async = require('async');


async.eachSeries([process.argv[2],process.argv[3],process.argv[4]], function (item, callback) {
    http.get(item, function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err);
            }
            data = data.toString();
            console.log(data);
            callback(err,data);
        }));

    }).on('error', console.error);

});
