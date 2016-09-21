/*
* @Author: Fan
* @Date:   2016-09-21 10:19:20
* @Last Modified by:   Fan
* @Last Modified time: 2016-09-21 10:25:27
*/

'use strict';
var [a, b, c] = [1, 2, 3];
//console.log(a);
//console.log(b);
//console.log(c);

//let [,,third] = ["foo","bar","baz"];
//console.log(third);

let [x,,y] = [1,2,3];
console.log(x);
console.log(y);

let [head,...tail] = [ 1,2,3,4];
console.log(head);
console.log(tail);

let [m ,q ] = [1,3,4];
console.log(m);
console.log(q);
{
console.log("*************");
let [a , b, d] = [1 , [2,3],4];

console.log(b);
}

{
	let [x,y,z] = new Set(["a","b","z"]);
	console.log(x);
}
{
	console.log("*************");
	function *fibs(){
		var a = 0;
		var b = 1;
		while (true){
			yield a;
			[a,b] = [b,a+b];
			
		}
	}
	//var test = fibs();	
	var [first, second, third, fourth, fifth, sixth] = fibs();
	console.log(first);
	console.log(second);
	console.log(third);
	console.log(fourth);
	console.log(fifth);
}
{
	console.log("*************");
	let [foo = true] =  [2];
	console.log(foo)
}
{
	console.log("*************");
}
{
	console.log("*************");
	var {bar,foo} = {foo:"aaa",bar:"bbb"};
	console.log(foo);
	console.log(bar);
	
}
{
	console.log('x'.repeat(5))
	console.log('hello'.repeat(5))
}

{
	let name = "Bob" , day = "today";
	console.log(` Hello ${name}, ${day} is a nice day!!`)
}


{
	console.log("*************");
	console.log(Number.isFinite(14));
	console.log(Number.isFinite(1/3));

}

{
	console.log("*************");
	console.log(Number.parseInt("3.3"));
	console.log(Number.parseInt("3.3asdfasdf"));
}
{
	let arrayLike = {
		'0':'a',
		'1':'b',
		'2':'c',
		length:3
	}
	console.log(Array.from(arrayLike));

}














