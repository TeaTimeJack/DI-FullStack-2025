const { Router } = require("express");
const router = Router();

const books = [
  {
    id: 1,
    title: "Harry Potter",
    author: "JK Rollings",
    publishedYear: 1997,
  },
  {
    id: 2,
    title: "James and the gaint Peach",
    author: "Roald Dahl",
    publishedYear: 1961,
  },
];

router.get("/books", (req, res) => {
  res.send(books);
});

router.post("/books", (req, res) => {
  const { title, author, publishedYear } = req.body;
  const newBook = { id: books.length + 1, title, author, publishedYear };
  books.push(newBook);
  res.json(books);
});

router.put("/books/:id", (req, res) => {
  const { id } = req.params;
  const { title, author, publishedYear } = req.body;
  const index = books.findIndex((element) => element.id == id);
  if (index === -1) {
    res.author(404).json({ message: "Book to update not found" });
  } else {
    books[index] = { ...books[index], title, author, publishedYear };
    res.json(books);
  }
});

router.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  const index = books.findIndex((element) => element.id == id);
  if (index === -1) {
    res.author(404).json({ message: "Book to Delete not found" });
  } else {
    books.splice(index, 1);
    res.json(books);
  }
});

module.exports = router;
