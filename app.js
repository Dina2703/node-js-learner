//require("express") returns a function which we store in express const
const express = require("express");
//express app. now invoking that function to create an instance of an Express app, which we're storing in app const.
const app = express();

//listen  for requests
//this also returns us an instance of the server
app.listen(3000);
//first arg is what path or URL you want to listen to. second arg is callback funtion which takes request and response object.
//send() auto sets the content type header(don't need to do setHead()) and status code for us.
app.get("/", (req, res) => {
  res.send("<p>Hello from the express</p>"); 
});
