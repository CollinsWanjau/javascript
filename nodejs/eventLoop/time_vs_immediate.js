const fs =  require('fs');
// the main advantage of using  setImmediate over setTimeout() is 
fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log("timeout");
  }, 0);
  setImmediate(() => {
    console.log("immediate");
  });
});