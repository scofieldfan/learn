'use strict';
var person = new Object();
person.name = "fan";
person.age = "29";
person.job = "Software Engineer";

person.sayName = function(){
	console.log(this.name);
}

person.sayName();

var people = {
	name:"fan",
	age:"31",
	job:"Software Engineer",
	sayName:function(){
		console.log(this.name);
	}
};
people.sayName();

var person = {};

Object.defineProperty(person,"name",{
	writeable:false,
	value:"Nicholas"	
});
console.log(person.name);
//person.name = "fan zhang f";//严格模式下会抛出错误
console.log(person.name);//can't modify because writeable is false

Object.defineProperty(person, "age",{
	configurable:false,
	value:"35"
})

console.log(person.age);
//delete person.name;
//delete person.age;
console.log(person);


var book = {
	_year:2004,
	edition:1
}

Object.defineProperty(book, "year", {
	get:function(){
		return this._year;
	},
	set:function(newValue){
		if(newValue > 2004){
			this._year  = newValue;
			this.edition += newValue - 2004;
		}
	}
})
console.log(book)
book.year = 2006;
console.log(book.year)
console.log(book)





















