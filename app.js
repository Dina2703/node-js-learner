//require("express") returns a function which we store in express const
const express = require("express");
const res = require("express/lib/response");
//express app. now invoking that function to create an instance of an Express app, which we're storing in app const.
const app = express();

//register view engine
// below we're saying to use ejs as our view engine of choice
app.set("view engine", "ejs"); // automatically Express and ejs is going to look in the views folder for ejs views.

app.listen(4000);

//next() to say server, move on to the next code, otherwise it stacks after the last line of code inside the middleware.
app.use((req, res, next) => {
  console.log("new request made: ");
  console.log("host: ", req.hostname);
  console.log("path: ", req.path);
  console.log("method: ", req.method);
  next();
});
app.use((req, res, next) => {
  console.log("in the next middleware: ");

  next();
});

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "title name one",
      snippet: "Lorem ipsum dolor sit amet consectetur ",
    },
    {
      title: "title name two",
      snippet: "Lorem ipsum dolor sit amet consectetur ",
    },
    {
      title: "title name three",
      snippet: "Lorem ipsum dolor sit amet consectetur ",
    },
  ];
  res.render("index", { title: "home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "about" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "create" });
});

//The position of the use() for redirecting is matter it should be the last in the routing system.
//404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
