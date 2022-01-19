//require("express") returns a function which we store in express const
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

const res = require("express/lib/response");
const { result } = require("lodash");
const { render } = require("express/lib/response");
//express app. now invoking that function to create an instance of an Express app, which we're storing in app const.
const app = express();

//connect to mongoDB
const dbURI =
  "mongodb+srv://user-1:test123@cluster0.xbjwj.mongodb.net/Cluster0?retryWrites=true&w=majority";
//connect Mongoose to the database from MongoDb Cloud.

mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//register view engine
// below we're saying to use ejs as our view engine of choice
app.set("view engine", "ejs"); // automatically Express and ejs is going to look in the views folder for ejs views.

// middleware & static files(css. images we ganna make public)
app.use(express.static("public")); // that means anything inside public folder is gonna be available as a static file to the browser.
app.use(express.urlencoded({ extended: true })); // this middleware  comes with express, which passes data from the form into a  workable format that we can use and it attaches the data to req object in callback function which we're passing in POST request.
app.use(morgan("dev")); //third-party middleware

//routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "about" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "create a new Blog" });
});

//blog routes
//GET request
app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 }) //it's gonna sort from the newest to the oldest(-1)
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result }); //passing result as value of blogs(property name), since index view expects blogs
    })
    .catch((err) => {
      console.log(err);
    });
});

//POST request
app.post("/blogs", (req, res) => {
  const blog = Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

//Route Parameters
app.get("/blogs/:id", (req, res) => {
  const id = req.params.id; //to excract the id use params. Whatever you call your variable comes after req.params.varName
  console.log(id);
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Blog Details" });
    })
    .catch((err) => {
      console.log(err);
    });
});

//DELETE request
app.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
});

//The position of the use() for redirecting is matter it should be the last in the routing system.
//404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
