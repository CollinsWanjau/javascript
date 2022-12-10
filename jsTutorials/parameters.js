// Parameter rules
// js function definitions do not specify data types for parameters
// js functions do not perform type checking on passed arguments
// js functions do not check the number of arguments received
//
// Default parameters
//
// If a function is called with missing arguments(less than declared), the missing values are set to undefined
function myFunction(x, y) {
	if (y === undefined) {
		y = 2;
	}
	return x * y;
}
console.log(myFunction(4))
