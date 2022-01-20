// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete    functions we need to create here.
const Blog = require("../models/blog");

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 }) //it's gonna sort from the newest to the oldest(-1)
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result }); //passing result as value of blogs(property name), since index view expects blogs
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_details = (req, res) => {
  const id = req.params.id; //to excract the id use params. Whatever you call your variable comes after req.params.varName
  console.log(id);
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Blog Details" });
    })
    .catch((err) => {
      res.status(404).render("404", { title: "Blog not found" });
    });
};

const blog_create_get = (req, res) => {
  res.render("create", { title: "create a new Blog" });
};

const blog_create_post = (req, res) => {
  const blog = Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
};
const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
};
