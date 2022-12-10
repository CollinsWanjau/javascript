// constructor function for Person objects
// to create an object type we use an object constructor function
// this way object property have default values
// you cannot add a new method to an object constructor the same way you add a new method to an existing object
function Person(firstName, lastName, age, eye)
{
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.eyecolor = eye;
	this.nationality = "English"
	// this.name = function() {
	//	return this.firstName + " " + this.lastName;
	this.changeName = function (name) {
		this.lastName = name;
	}

}

// you cannot add a new PROPERTY to a constructor function
// Person.nationality = "English"

// objects of the same type are created by calling function with new keyword
const myFather = new Person("John", "Doe", 50, "blue");

// change last name
// the changeName() assigns the value of name to the person's lastname property
myFather.changeName("Njoro");

// adding a property to an object
// myFather.nationality = "English"

// adding a method to an object
// myFather.name = function() {
//	return this.firstName + " " + this.lastName;
// }
console.log("My father's last name is " + myFather.lastName);

// Built-in Javascript Constructor
//
// A new String object -  new String()
// A new Number object - new Number()
// A new Boolean object - new Boolean()
// A new Object object - new Object()
// A new Array object - new Array()
// A new RegExp object - new RegExp()
// A new Function object - new Function()
// A new Date object - new Date()
//
// Did you Know?
// Use string literals "" instead of new String()
// Use number literals 50 instead of new Number()
// Use boolean literals true / false instead of new Boolean()
// Use object literals {} instead of new Object()
// Use array literals [] instead of new Array()
// Use pattern literals /()/ instead of new RegExp()
// Use function expressions () {} instead of new Function()
