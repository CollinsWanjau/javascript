// Invoking a function with a function constructor
//
// if a function invocation is preceded with the new keyword, it is a constructor invocation
//
// it looks like you create a new function, but since js functions are objects you actually create a new object

// define a function constructor
function myFunction(arg1, arg2) {
	this.firstName = arg1;
	this.lastName = arg2;
}

// create a new object
const myObj = new myFunction("John", "Doe")

console.log(myObj.firstName)
