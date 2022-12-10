// Managing Objects
//
// Create an object with an existing object prototype
Object.create()

// Adding or changing an object property
Object.defineProperty(object, property, Description)

// Adding or changing object properties
Object.defineProperties(object, Descriptor)

// Accessing properties
Object.getOwnPropertyDescriptor(object, property)

// Return all properties as an array
Object.getOwnProperty(object)

// Accessing the prototype
Object.getPrototypeof(object)

// PROTECTING OBJECTS
//
// Prevents adding properties to an object
Object.preventExtensions(object)

// Return true if properties can be added to an object
Object.isExtensible(object)

// Prevents changes of object properties (not values)
Object.seal(object)

// Retrun true if object is sealed
Object.isSealed(object)

// prevents any changes to to an object
Object.freeze(object)

// CHANGING A  PROPERTY VALUE
Object.defineProperty(object, property, {value: value})

// CHANGING METADATA
writable : true      // Property value can be changed
enumerable : true    // Property can be enumerated
configurable : true  // Property can be reconfigured

writable : false     // Property value can not be changed
enumerable : false   // Property can be not enumerated
configurable : false // Property can be not reconfigured

// ES5 allows setters and getters to be changed
//
// Defining getter
get : function() {return langauge}

// Defining setter
set : function(value) {return {value : value}}

// This example makes language read-only:
Object.defineProperty(person, "language", writeable: false)

// This example makes language not enumerable
Object.defineProperty(person, "language", enumarable: false)
