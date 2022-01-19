//require("express") returns a function which we store in express const
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

const res = require("express/lib/response");
const { result } = require("lodash");
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
app.use(morgan("dev")); //third-party middleware

//mongoose and mongo sandbox routes
//adding a new blog. first create an instance of Blog, when use save() method on that instance(because, we need to save the new instance/blog to the collection)
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog #2",
    snippet: "about my new blog",
    body: "Lorem ipsum dolor sit amet consectetur",
  }); //use the Blog modal to create a new instance of it(since we're adding a new blog to the collection), pass an object with properties wh're defined in Scheme structure

  blog
    .save()
    .then((result) => {
      res.send(result); // we need to send back the result, so we can see it in the browser.
    })
    .catch((err) => {
      console.log(err); // just in case if there is one.
    });
});

// get all the blogs from the collection.
// when we get the data, we call the find()method on the collection name, which is Blog (since we need all the data from that collection).
app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

//find the sinlge blog from the collection
app.get("/single-blog", (req, res) => {
  Blog.findById("61e76aad885009380a77d03b")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
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
