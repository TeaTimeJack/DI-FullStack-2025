const { Router } = require("express");
const {
  getAllstories,
  getStoriesByTitle,
  addAstory,
  updateAstoryById,
  deleteAstoryById,
} = require("../controllers/storiesControlls.js");

const router = Router();

router.get("stories", getAllstories);
router.get("stories/:title", getStoriesByTitle);
router.post("stories", addAstory);
router.patch("stories/:id", updateAstoryById);
router.delete("stories/:id", deleteAstoryById);

module.exports = router;
