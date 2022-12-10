// ARGUMENTS OBJECT

// The argument object contains an array of the arguments used when the function was invoked

const myObject = {
	firstName: "John",
	lastName: "Doe",
	fullName: function () {
		return this.firstName + " " + this.lastName;
	}
}

console.log(myObject.fullName())
