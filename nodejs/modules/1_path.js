const path = require('path')

console.log(path.normalize('./myApp//src/util//index.js'));

console.log(path.join('/myApp', '/src' , 'util', '..', 'index.js'));
