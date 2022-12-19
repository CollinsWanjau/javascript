const util = require('./utilities/util1.js')

const {lgNum, cut3} = require('./utilities/util2.js')

const number = [3, 4, 5, 6];
const wordArr = ['add', 'app', 'docs', 'nodejs'];

console.log(util.sum(number));

console.log(util.concat(number,wordArr));

console.log(lgNum(number));

console.log(cut3(wordArr));
