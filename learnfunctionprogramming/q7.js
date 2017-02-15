

function Spy(target,method){
    var fun = target[method];
    var result = {
        count:0
    }
    target[method] = function(){
        result.count++;
        fun.apply(target,arguments);
    }
    return result;
}
var spy = new Spy(console,'error');
console.error("test");
console.log(spy.count);
console.log(console.error.toString());
console.error("test");
console.log(spy.count);

console.error("test");
console.log(spy.count);

module.exports = Spy;