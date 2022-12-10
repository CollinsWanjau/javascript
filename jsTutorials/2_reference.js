// Listing enumarable properties
//
// liist only the enumarable properties of an object:
const person = {
	firstName: "John",
	lastName : "Doe",
	language : "EN"
}

// Managing property
Object.defineProperty(person, "language", {enumarable: false})

// Display properties
console.log(Object.keys(person))
