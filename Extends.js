'use strict';

(function() {

	function SuperType() {
		this.property = true;
	}

	SuperType.prototype.getSuperValue = function() {
		return this.property;
	}

	function SubType() {
		this.subproperty = false;
	}

	SubType.prototype = new SuperType();

	SubType.prototype.getSubValue = function() {
		return this.subproperty;
	}

	var instance = new SubType();

	console.log(instance.getSuperValue());

	console.log(instance.getSubValue());

})();

(function() {

	function SuperType() {
		this.colors = ["red", "blue", "green"];
	}

	function SubType() {
		SuperType.call(this);
	}
	var instance1 = new SubType();
	instance1.colors.push("black");
	console.log(instance1.colors);

	var instance2 = new SubType();
	console.log(instance2.colors);


})();