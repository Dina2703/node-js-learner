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
  //res.send("<p>Hello from the express</p>");
  res.sendFile("./views/index.html", {
    root: __dirname,
  });
}); //if the path is relative we need to tell Express where is it relative from, because default is going to look for an absolute path, the path from the root of our computer. So what we need to do is pass second arg which is an obj, where we can specify what the root should be(root: __dirname) which is NODE_JS folder.
app.get("/about", (req, res) => {
  //res.send("<p>About page from Express</p>");
  res.sendFile("./views/about.html", {
    root: __dirname,
  });
});
