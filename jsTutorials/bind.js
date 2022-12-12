// with the bind method, an object can borrow a method from another object
//
// the member object borrows the fullname method from person object

const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member)
console.log(fullName())
