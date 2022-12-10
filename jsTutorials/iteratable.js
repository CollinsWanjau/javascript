// an object becomes an iterable when it implements next()

// the next() method must return a an object with two properties
// value(the next value) - the value returned by the operator(can be ommited if done is true)
// done(true or false) - true if the operator is true - false if the iterator has produced a new value

// home made iteratable
function myNumbers() {
	let n = 0;
	return {
		next: function(){
			n += 10;
			return {value: n, done:false}
		}
	};
}

// create an iterable
const n = myNumbers();
n.next();
n.next();
n.next();

console.log(n.next().value)

