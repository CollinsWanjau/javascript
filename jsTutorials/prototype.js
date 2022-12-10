function Person(first, last, age, eyecolor) {
	  this.firstName = first;
	  this.lastName = last;
	  this.age = age;
	  this.eyeColor = eyecolor;
}

// javascript prototype property allows you to add new properties to object constructors
Person.prototype.nationality = "English"
const myFather = new Person("John", "Doe", 50, "blue")
console.log(myFather.nationality)
