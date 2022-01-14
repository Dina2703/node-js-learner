const people = ["sam", "jhon", "mario", "anna"];
const ages = [20, 25, 30, 35];
console.log(people);

//how to manually say to export something to the module.js
//what ever we put after equal sign is going to be put into the xyz variable with require()
module.exports = {
  people,
  ages,
};
