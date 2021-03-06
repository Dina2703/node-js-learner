//first thing is to require http module
const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  //lodash
  const num = _.random(0, 20);
  console.log(num);

  const greet = _.once(() => {
    console.log("Hello there");
  });
  greet();


  //setting the header for the content
  res.setHeader("Content-Type", "text/html"); //html data

  //ROUTING SYSTEM
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-us":
      res.statusCode = 301;
      res.setHeader("Location", "/about"); //to redirect to the new URL
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  //send an html file. data - means data from the file we're reading from
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end(data);
    } else {
      // res.write(data); //when sending multiple things
      // res.end();
      res.end(data); //short way when sending only one things into response.
    }
  });
});
//to listen for requests we need to pass, first port number, then hostname, function which fires when we start listening
server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
