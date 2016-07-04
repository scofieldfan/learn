'use strict';
var person = new Object();
person.name = "fan";
person.age = "29";
person.job = "Software Engineer";

person.sayName = function() {
	console.log(this.name);
}

person.sayName();

var people = {
	name: "fan",
	age: "31",
	job: "Software Engineer",
	sayName: function() {
		console.log(this.name);
	}
};
people.sayName();

var person = {};

Object.defineProperty(person, "name", {
	writeable: false,
	value: "Nicholas"
});
console.log(person.name);
//person.name = "fan zhang f";//严格模式下会抛出错误
console.log(person.name); //can't modify because writeable is false

Object.defineProperty(person, "age", {
	configurable: false,
	value: "35"
})

console.log(person.age);
//delete person.name;
//delete person.age;
console.log(person);


var book = {
	_year: 2004,
	edition: 1
}

Object.defineProperty(book, "year", {
	get: function() {
		return this._year;
	},
	set: function(newValue) {
		if (newValue > 2004) {
			this._year = newValue;
			this.edition += newValue - 2004;
		}
	}
})
console.log(book)
book.year = 2006;
console.log(book.year)
console.log(book)
book.year = 2008;
console.log(book.year);

var car = {};
Object.defineProperties(car, {
	_year: {
		value: 2004
	},
	edition: {
		value: 1
	},
	year: {
		get: function() {
			return this._year;
		},
		set: function(newValue) {
			if (newValue > 2005) {
				this._year = newValue;
				this.edition += newValue - 2004;
			}
		}
	}
});
console.log(car);
console.log(car._year);
console.log(car.edition);
console.log(car.year);

var descriptor = Object.getOwnPropertyDescriptor(car, "_year");
console.log("car.year:" + descriptor.value);
console.log("car.configurable:" + descriptor.configurable);
console.log("car.writable:" + descriptor.writable);


function createPerson(name, age, job) {
	var o = new Object();
	o.name = name;
	o.job = job;
	o.sayName = function() {
		console.log(o.name);
	}
	return o;
}
var person1 = createPerson("fanzhang f", "31", "sofeware engineer");
var person2 = createPerson("ada zhang", "3", "painter");

console.log(person1);
console.log(person2);


function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function() {
		console.log(this.name);
	}
}

var person1 = new Person("fanzhang", "31", "software engineer");
var person2 = new Person("ada zhang", "3", "painter");

console.log(person1);
console.log(person2);

console.log(person1.constructor == Person);
console.log(person2.constructor == Person);

console.log(person1 instanceof Object);
console.log(person1 instanceof Person);


console.log(person1.sayName());

//Person("li","30","software engineer");

//console.log(window.sayName());

var o = new Object();
Person.call(o, "Kristen", 25, "Nurse");
console.log(o)
console.log(o.name)
o.sayName();

function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = new Function("alert(this.name)");
}

//原型模式
function Person() {

}
Person.prototype.name = "fanzhang";
Person.prototype.age = "30";
Person.prototype.job = "software engineer";
Person.prototype.sayName = function() {
	console.log(this.name);
}
var persion1 = new Person();
console.log(person1);