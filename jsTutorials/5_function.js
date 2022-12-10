// javascript arrow functions
// ES5
// var x = function(x, y) {
//	return x * y;
// }

// ES6
// with arrow functions you don't have to type the function keyword, the return
// keyword, and the curly brackets
//
// arrow functions are not well suited for describing arrow functions
//
// arrow functions are not hoisted .They must be defined before they are used
//
// using const is safer than var keyword, because a function expression is always constant
const x = (x, y) => {return x * y};
console.log(x(5, 5));
