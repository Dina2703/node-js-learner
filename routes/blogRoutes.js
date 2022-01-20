const express = require("express");
const router = express.Router(); //create a new instance of a router object.
const blogController = require("../controllers/blogController");

//blog routes
//GET request
router.get("/", blogController.blog_index);

//POST request
router.post("/", blogController.blog_create_post);

router.get("/create", blogController.blog_create_get);

//Route Parameters
router.get("/:id", blogController.blog_details);

//DELETE request
router.delete("/:id", blogController.blog_delete);

module.exports = router;
