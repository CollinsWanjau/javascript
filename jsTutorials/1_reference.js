// List all properties

const person = {
	firstName: "John",
	lastName : "Doe",
	language : "EN"
};

// Change Property
Object.defineProperty(person, "language", {enumarable: false})

// return an array of properties
// dislay contents
console.log(Object.getOwnPropertyNames(person))
