var fs = require('fs');
var path = require('path');


module.exports = function (directory, ext,callback) {
    fs.readdir(directory, function (err, files) {
        if (err) {
            return callback(err);
        }
        var result = files.filter(function (file) {
            return path.extname(file) === "."+ ext;
        })
        callback(null,result);
    });

};