//when we require() node looks for that file and runs that file, which we poited inside the require()
// const xyz = require("./people");
const { people, ages } = require("./people"); // to get different objects, we can use destructuring, name whatever properties we want to extract from the object.

// console.log(xyz); // {} - it's an empty object, we have to manually say to export the value to the xyz from people.jsyz
//console.log(people); // people is not defined. we can only access it inside the people.js file, where it was created.
// console.log(xyz.ages, xyz.people); // we can access them like so
console.log(people, ages);

const os = require("os"); // this is built-in in node.js, we're importing that into modules.js
console.log(os); //this is an object with a lot of information about the  current operating system that this is running on.
console.log(os.platform(), os.homedir());// common used info about your operating system
