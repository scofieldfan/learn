/*
 * @Author: Fan
 * @Date:   2016-09-29 22:51:15
 * @Last Modified by:   Fan
 * @Last Modified time: 2016-09-29 22:53:54
 */

'use strict';

var carManager = {

	// request information
	requestInfo: function(model, id) {
		return "The information for " + model + " with ID " + id + " is foobar";
	},

	// purchase the car
	buyVehicle: function(model, id) {
		return "You have successfully purchased Item " + id + ", a " + model;
	},

	// arrange a viewing
	arrangeViewing: function(model, id) {
		return "You have successfully booked a viewing of " + model + " ( " + id + " ) ";
	}

};

carManager.execute = function(name) {//slice 去掉第一个命令参数,其他的参数传给函数
	return console.log(carManager[name] && carManager[name].apply(carManager, [].slice.call(arguments, 1)));
};

carManager.execute( "arrangeViewing", "Ferrari", "14523" );
carManager.execute( "requestInfo", "Ford Mondeo", "54323" );
carManager.execute( "requestInfo", "Ford Escort", "34232" );
carManager.execute( "buyVehicle", "Ford Escort", "34232" );