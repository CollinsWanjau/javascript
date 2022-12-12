// a javascript class it's not an object
// the class has two properties:"name and year"
//
// a js class is not an object
//
// it's a template for js objects
//
// A constructor Method - if you do not define a constructor method, js will add an empty constructor method
class Car {
	constructor(name, year) {
		this.name = name;
		this.year = year;
}
}

const myCar = new Car("Ford", 2020);
console.log(myCar.year);


