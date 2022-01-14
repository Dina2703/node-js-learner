//GLOBAL OBJECT
//inside Browser the WINDOW is a global object of Browser, that has a list of properties and methods available to us inside Browser. And we can use all these properties and methods out of the box,  without saying - window.setTimeout(() => { console.log("Hi")}, 1000), instead we can just run setTimeout(() => {}, 2000), We can do that directly inside the browser.
//But inside the Node the globalobject is GLOBAL, it has a lsit of properties as well, so we can usse them inside Node.js
// console.log(global);
//setTimeout method runs only one TimeRanges, after the time is out
//clearInterval() stops the int (setInterval()) after 5 sec
// global.setTimeout(() => {
//   console.log("Hi");
//   clearInterval(int);
// }, 5000);
// And it does the same things as (window's) setTimeout() in Browser. And we can do the same, run this method without the global word, just setTimeout()

//setInterval() runs every 1 sec, you can stop the setInterval by control + c
// const int = setInterval(() => {
//   console.log("Hello");
// }, 1000);

console.log(__dirname);
console.log(__filename);

//DIFFER FROM WINDOW.
//global doesn't have document object, as window, So we can't use document.querySelector inside the Node.js
// MODULES & REQUIRE
