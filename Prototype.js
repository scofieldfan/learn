//原型模式
function Person() {

}
Person.prototype.name = "fanzhang";
Person.prototype.age = "30";
Person.prototype.job = "software engineer";
Person.prototype.sayName = function() {
	console.log(this.name);
}
var person1 = new Person();
console.log(person1);
console.log(person1.name);
console.log(person1.age);
person1.sayName();
var person2 = new Person();
console.log(person1.sayName == person2.sayName);

console.log(Person.prototype.isPrototypeOf(person1));
console.log(Person.prototype.isPrototypeOf(person2));


console.log(Object.getPrototypeOf(person1) == Person.prototype);
console.log(Object.getPrototypeOf(person2).name);

person1.name = "test";
person1.sayName();
person2.sayName();
//hasOwnProperty 来判断属性是否属于对象内部
console.log("name is prototype :" + person1.hasOwnProperty("name"));
console.log("name is prototype :" + person2.hasOwnProperty("name"));
//for in 循环中 可以返回prototype 中的属性。也可以返回本身对象里的属性
for (key in person1) {
	console.log("key in person：" + key);
}
delete person1.name;
person1.sayName();
person2.sayName();

//对象本身含有，并且不属于自身的。才说明prototyep中含有这个对象
function hasPrototypeProperty(object, name) {
	return !object.hasOwnProperty(name) && (name in object);
}
var o = {
	toString: function() {
		return "My Object";
	}
}
for (var prop in o) {
	console.log(prop == "toString");
	console.log(typeof prop);
	console.log(o[prop]());
}

var keys = Object.keys(Object.getPrototypeOf(person1));
console.log(keys);

var p1 = new Person();
p1.name = "p1";
p1.age = 31;


//只含有本身的那些属性
var p1Keys = Object.keys(p1);
console.log(p1Keys);

var keys2 = Object.getOwnPropertyNames(p1);
console.log(keys2);

<<<<<<< Updated upstream


//原型的动态性

function Company() {}
var friend = new Company();
Company.prototype.sayName = function(argument) {
	console.log("hi company! make money!!");
}; //未覆盖本来的prototype对象，所以原来的链接关系存在
friend.sayName();

console.log(Company.prototype.isPrototypeOf(friend));
console.log(Company.prototype);


//call && apply
var person1 = {
	name: 'sky',
	age: 30,
	race: 'HUM'
};
var person2 = {
	name: 'Moon',
	age: 22,
	race: 'NE'
};

var sayHello = function() {
	console.log('Hello ' + this.name);
}

var sayGoodbye = function() {
	console.log('Bye,' + this.name);
}
sayHello.call(person1);
sayHello.call(person2);

sayHello.apply(person1);
sayHello.apply(person2);
function Book(){}

var book1 = new Book();
//book1.sayName();
console.log(book1.prototype);
console.log(book1  instanceof Book);//true
console.log(book1  instanceof Object);//true
console.log(book1.constructor == Book);//true
console.log(book1.constructor == Object);//false


Book.prototype = {
	constructor:Book,	
	name:"free to choose",
	age:32,
	job:"software Engineer",
	sayName: function(){
		console.log(this.name)
	}
}
var book2 = new Book();
console.log(book2  instanceof Book);// true
console.log(book2  instanceof Object);//true
console.log(book2.constructor == Book);//true 
console.log(book2.constructor == Object);// false



