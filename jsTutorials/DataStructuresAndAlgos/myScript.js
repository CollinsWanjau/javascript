// let numbers = [1,2,3,4,5]

// console.log(numbers.length)

/**
 * Finally, you can create an array by calling the Array constructor with a single argument
 * specifying the length of the array
 */
// let numbers = new Array(10)
// console.log(numbers.length)

/* Js Array elements do not all have to be of the same type */
let objects = [1, 'Joe', true, null]

console.log(objects)

/* We can verify that an object is an array by calling the Array.isArray() */

// let numbers = 3
// var arr = [7, 4, 1776]
// console.log(Array.isArray(numbers))
// console.log(Array.isArray(arr)); 

/**
 * Using the [] operator, saying it is more efficient than calling the Array Constructor.
 */

/**
 * Data is assigned to array elemnts using the [] operator in an assignment statement
 */
// let nums = []
// for (let i = 0; i < 100; ++i) {
//     nums[i] = i + 1
//     console.log(nums)
// }

// let numbers = [1,2,3,4,5]
// let sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] +
// numbers[4];
// console.log(sum)

var numbers = [1,2,3,5,8,13,21];
var sum = 0;
for (var i = 0; i < numbers.length; ++i) {
 sum += numbers[i];
}
print(sum);