const mongoose = require("mongoose");
const Schema = mongoose.Schema; // it's like a constuctor.

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
); // this creates a new instance of a schema object. pass the structure of the document you want to store in the blogs collection as an object, the second argument

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
