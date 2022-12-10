//  a javascript iterable is an object that has a 'Symbol.iterator'
//  the symbol.iterator is a function that return a next() function
//  an iteratble can be iterated over with the code: for (const x of iteratable)

// Create an object
myNumber = {}

// make it iteratable
myNumber[Symbol.iterator] = function() {
	let n = 0;
	done = false;
	return {
		next() {
			n += 10;
			if (n == 100) {done = true}
			return {value:n, done:done}
		}
	};
}

// now you can use for..of
let text = "";
for (const num of myNumber) {
	text += num;
}

console.log(text)
