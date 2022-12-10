// Default parameter values
//
// ES6 allows parameters to have default values
//
// if y is not passed or undefined value then y = 10

function myFunction(x, y = 10) {
	return x + y;
}
console.log(myFunction(5));
