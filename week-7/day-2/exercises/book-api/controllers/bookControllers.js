const { data } = require("../config/dataBooks.js");

const getAllBooks = (req, res) => {
  res.send(data);
};

const getBookByID = (req, res) => {
  const { bookId } = req.params;
  const book = data.find((element) => {
    if (element.id == bookId) {
      return true;
    }
  });
  if (!book) {
    res.sendStatus(404).json({ message: "Book not found" });
  } else {
    res.json(book);
  }
};

const postNewBook = (req, res) => {
  const { title, author, publishedYear } = req.body;
  const newBook = { id: data.length + 1, title, author, publishedYear };
  data.push(newBook);
  res.json(data);
};

const deleteBookById = (req, res) => {
  const { bookId } = req.params;
  const bookIndex = data.findIndex((element) => element.id == bookId);
  if (bookIndex === -1) {
    res.status(404).json({ message: "Book to Delete not found" });
  } else {
    data.splice(bookIndex, 1);
    res.json(data);
  }
};

module.exports = {
  getAllBooks,
  getBookByID,
  postNewBook,
  deleteBookById,
};
