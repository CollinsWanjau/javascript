// call() inbuilt method can be used to invoke (call) a method with an owner object as an argument (parameter)
//
// with "call()", an object can use a method belongning to another object
//
// this example calls the fullName method of person, using it on person1:

const person = {
	fullname: function() {
		return this.firstName + " " + this.lastName;
	}
}
const person1 = {
	firstName: "John",
	lastName:  "Doe"
 }

const person2 = {
	firstName: "Mary",
	lastName: "Doe"
}

// this will return "John Doe"
console.log(person.fullname.call(person1))

