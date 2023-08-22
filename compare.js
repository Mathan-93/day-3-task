
const _ = require('lodash');

let obj1 = { name: "person 1", age: 5 };
let obj2 = { name: "person 1", age: 5 };

console.log(_.isEqual(obj1, obj2));
