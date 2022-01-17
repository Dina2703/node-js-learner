//require("express") returns a function which we store in express const
const express = require("express");
const res = require("express/lib/response");
//express app. now invoking that function to create an instance of an Express app, which we're storing in app const.
const app = express();

//register view engine
// below we're saying to use ejs as our view engine of choice
app.set("view engine", "ejs"); // automatically Express and ejs is going to look in the views folder for ejs views.
//if you're using differente folder for views, you can set it like so:
//app.set('views', 'myviews'); we don't do that because, we have the views folder which is fehault folder for views.
//listen  for requests
//this also returns us an instance of the server
app.listen(3000);
//first arg is what path or URL you want to listen to. second arg is callback funtion which takes request and response object.
//Express going to look inside the views folder, then find the index and using jsx view engine to render  that and send it back to the browser.
app.get("/", (req, res) => {
  res.render("index", { title: "home" });
}); //if the path is relative we need to tell Express where is it relative from, because default is going to look for an absolute path, the path from the root of our computer. So what we need to do is pass second arg which is an obj, where we can specify what the root should be(root: __dirname) which is NODE_JS folder.
app.get("/about", (req, res) => {
  res.render("about", { title: "about" });
});

// //redirects
// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "create" });
});

// 404 page
//use() method we use to create  middleware and fire middleware functions in Express. If the code reaches this point, if we don't have a match up to here, because Express goes top to button looking for match in URL path to response fro the request, we're sending this 404 page to the browser.
//The position of the use() for redirecting is matter it should be the last in the routing system.
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
