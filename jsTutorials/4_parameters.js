// the argumentsd object
//
// the argument object contains an array of the arguments used when the function was called
//
// this way you can use a function to find the highest number

function findMax() {
	let max = -Infinity
	for (let i = 0; i < arguments.length; i++)
	{
		if (arguments[i] > max) {
			max = arguments[i];
		}
	}
	return (max);
}

let x = findMax(1, 123, 500, 115, 44, 88);
console.log(x)
