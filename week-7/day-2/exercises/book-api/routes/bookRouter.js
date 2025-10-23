const Router = require("express");
const {
  getAllBooks,
  getBookByID,
  postNewBook,
  deleteBookById,
} = require("../controllers/bookControllers.js");

const router = Router();

router.get("/", getAllBooks);
router.get("/:bookId", getBookByID);
router.post("/", postNewBook);
router.delete("/:bookId", deleteBookById);

module.exports = router;
