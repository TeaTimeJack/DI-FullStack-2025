const { Router } = require("express");
const {
  addContributor,
  getContributorByStoryId,
  deleteContributorById,
} = require("../controllers/contributorsControlls.js");

const router = Router();

router.post("contributors", addContributor);
router.get("contributors/:story_id", getContributorByStoryId);
router.delete("contributors/:id", deleteContributorById);

module.exports = router;
