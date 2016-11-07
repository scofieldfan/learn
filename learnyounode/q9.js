var http = require('http');
var bl = require('bl');
var result = [];
var num = 0;
function getData(index, url) {
    http.get(url, function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err);
            }
            data = data.toString();
            result[index] = data;
            num++;
            if (num === 3) {
                printData();
            }
        }));

    }).on('error', console.error);
}
function printData() {
    result.forEach(function (item) {
        console.log(item);
    });
}
getData(0, process.argv[2]);
getData(1, process.argv[3]);
getData(2, process.argv[4]);
