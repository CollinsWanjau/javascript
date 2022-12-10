function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

// prototype property allows you to add new methods to object constructor
const myFather = new Person("John", "Doe", 50, "blue");
Person.prototype.name = function() {
	return this.firstName + " " + this.lastName
}
console.log("my father's name is" + myFather.name())
