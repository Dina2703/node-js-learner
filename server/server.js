//first thing is to require http module
const http = require("http");
//createServer() method which creates a server. it's optional: we can store the server in a constant.
//As an argument it takes ina callback function. this callback function is gonna run every time a request comes into our server. Inside this function we get access to two different objects: request and response objects.
//The request object comes loaded full of information about the request such as the URL that is being requested, and request type and other stuff.
//The response object we use to actually send a response to the user.
const server = http.createServer((req, res) => {
  // console.log('request made');
  console.log(req.url, req.method);

  // set header content type. The way we set a header is by using the response object and then using the mehtod setHeader(). There is a lots of different types of headers. We say text\plain, that means we're sending back some text to the browser.
  //1 step setting the header for the content that being sent back to the browser
  // res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Type", "text/html"); //html data
  //2 step writing the content we want to send back to the browser
  // res.write("hello. world"); plain text
  res.write("<h4>hello. world</h4>");
  res.write("<p>hello, again world</p>");

  //3 step ending the response, which then sends to the browser
  res.end();
});
//to listen for requests we need to pass, first port number, then hostname, function which fires when we start listening
server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
