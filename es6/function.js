{
	let log =function(x, y = 'World'){
		console.log(x,y);
	}
	function test(){

	}
	log('Hello');
	log('Hello','Test');
}


{
// log('Hello') //Exception
}
{
	console.log(Math.max(3,5))
	console.log(Math.max(3,5,2,21312,1231231231))
	console.log(Math.max.apply(null,[14,3,77,200]))
	console.log(Math.max(...[14,3,77,88]));
}

{
	var f = () => 5;
	var sum = (sum1,sum2) => sum1 + sum2;
	console.log(f());
	console.log(sum(4,5));
	var f = v => v;
	console.log(f(500))
	var sum = (num1,num2) => {
		return num1 + num2;
	}
	console.log(sum(5,10));
	const full = ({first,last}) => first + '' + last;
	console.log(full({first:"fan",last:"zhang"}));
}
{
	let result = [1,2,4].map( x => x*x );
	console.log(result);
	
}

	

