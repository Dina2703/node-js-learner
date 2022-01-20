const express = require("express");
const router = express.Router(); //create a new instance of a router object.
const Blog = require("../models/blog");



//blog routes
//GET request
router.get("/", (req, res) => {
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
router.post("/", (req, res) => {
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

router.get("/create", (req, res) => {
  res.render("create", { title: "create a new Blog" });
});

//Route Parameters
router.get("/:id", (req, res) => {
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
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
