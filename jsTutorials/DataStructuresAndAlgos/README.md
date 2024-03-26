# Array.prototype.shift()

* The shift() method of Array instances removes the first element from an array and returns the removed element. This method changes the length of the array.

### Description

* The `shift()` method removes the element at the zeroth index and shifts the values at consecutive indexes down, then returns the removed value. If the length property is 0, `undefined` is returned.

* The `shift()` method is a mutating method. It changes the length and the content of this. In case you want the value of this to be the same, but return a new array with the first element removed, you can use `arr.slice(1)` instead.
