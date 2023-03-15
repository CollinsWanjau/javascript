#!/usr/bin/node
function createPerson(name) {
    // the object is created using object literal notation ('{}') and then the
    // name property is set to the 'name' parameter
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
}
module.exports = createPerson;
