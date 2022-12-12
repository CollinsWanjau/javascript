//
// create a class method named "age", that return car age
//
class Car {
	constructor(name, year) {
		this.name = name;
		this.year = year;
	}
	age() {
		let date = new Date();
		return date.getFullYear() - this.year;
	}
}

let myCar = new Car("Ford", 2020)
console.log(myCar.age());
