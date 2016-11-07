
var fs = require('fs');

var file = process.argv[2];


var content = fs.readFileSync(file);

console.log(content.toString().split("\n").length - 1);