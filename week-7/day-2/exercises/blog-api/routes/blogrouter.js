const { Router } = require("express");
const {
  getAllBlogs,
  getBlogById,
  postNewBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogControllers.js");

const router = Router();

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.post("/", postNewBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
