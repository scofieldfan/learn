/*
function timeout(ms) {

    return new Promise ((resolve,reject) => {
        setTimeout(resolve,ms,'done');
    });

}

timeout(1000).then((value) => {
    console.log(value);
});


let promise  = new Promise(function(resolve,reject){

    console.log('new Promise');
    resolve();
});


promise.then(function(){
    console.log('Resolved');
});

console.log('Hi');

var p1 = new Promise(function (resolve, reject) {
   //resolve("done"); 
   setTimeout(function(){
    resolve('p1 done');
   },3000)
});

var p2 = new Promise(function (resolve, reject) {
  resolve(p1);
});

p2.then(function(value){
    console.log(value);
    console.log('p2 done');
});

*/



var p1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('p1 done');
    }, 1000)
});

var p2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('p2 done');
    }, 1000)
});

p1.then(function(value) {
    console.log(value);
    return p2;
}).then(function(value){
    console.log(value);
});