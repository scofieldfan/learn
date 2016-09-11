var Request = function(){
	return new Promise(function(resolve, reject) {
		var now = new Date().getTime();
		if(now % 2 === 0 ){
			resolve("even");
		}else{
			reject("odd");
		}
	})
};


Request("name").then(function(result){
	console.log("success:"+result);
	// return Request("name.....")
},function(result){
	console.log("fail:"+result);
}).then(function(){
	console.log("second success");
},function(){
	console.log("second failed");
})