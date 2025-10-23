const { blogs } = require("../config/database.js");
console.log(blogs);

const getAllBlogs = (req, res) => {
  res.json(blogs);
};
const getBlogById = (request, respons) => {
  const { id } = request.params;
  const blog = blogs.find((element) => {
    if (element.id == id) {
      return id;
    }
  });
  if (!blog) {
    respons.sendStatus(404).json({ message: "there is no Blog with that ID" });
  } else {
    respons.send(blog);
  }
};
const postNewBlog = (request, respons) => {
  const { title, content } = request.body;
  const newBlog = { id: blogs.length + 1, title, content };
  data.push(newBlog);
  respons.json(blogs);
};
const updateBlog = (request, respons) => {
  const { id } = request.params;
  const { title, content } = request.body;
  const blogIndex = blogs.findIndex((element) => element.id == id);
  if (blogIndex === -1) {
    respons.status(404).json({ message: "Blog to update not found" });
    return;
  }

  blogs[blogIndex] = { ...blogs[blogIndex], title, content };
  respons.json(blogs);
};
const deleteBlog = (request, respons) => {
  const { id } = request.params;
  const blogIndex = blogs.findIndex((element) => element.id == id);
  if (blogIndex === -1) {
    respons.status(404).json({ message: "Blog to update not found" });
    return;
  }
  blogs.splice(blogIndex, 1);
  respons.json(blogs);
};

module.exports = {
  getAllBlogs,
  getBlogById,
  postNewBlog,
  updateBlog,
  deleteBlog,
};
