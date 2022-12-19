const path = require('path')

// enables you to get the absolute path from a relative path
console.log(path.resolve('2_index.js'))

// normalizes any path by removing instances of '.' , turning double
// slashes into single slashes and removing a directory when '..' is found
console.log(path.normalize('./app//src//util/..'));

// concatenates strings to create a path that works across all OS.
// It joins the strings, then normalizes the result
console.log(path.join('/app', 'src', 'util', '..', 'index.js'));
