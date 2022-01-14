//first thing is to require http module
const http = require("http");
//createServer() method which creates a server. it's optional: we can store the server in a constant.
//As an argument it takes ina callback function. this callback function is gonna run every time a request comes into our server. Inside this function we get access to two different objects: request and response objects. 
//The request object comes loaded full of information about the request such as the URL that is being requested, and request type and other stuff. 
//The response object we use to actually send a response to the user.
const server = http.createServer((req, res) => {
console.log('request made');
});
//to listen for requests we need to pass, first port number, then hostname, function which fires when we start listening 
server.listen(3000, 'localhost', () => {
  console.log('listening for request on port 3000');
})