// create a function to input all values
//
// if a function is called with too many arguments(more than declared), this arguments can be reached using the arguments object
// 
// Arguments are passed by value
//
// js args are passed by value: the function only gets to know the values, not the arguments locations
x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
	let sum = 0;
	for (let i = 0; i < arguments.length; i++)
	{
		sum += arguments[i];
	}
	return sum;
}

console.log(x)
