const { Router } = require("express");
const {
  getAllUsers,
  getUsersByUsername,
} = require("../controllers/usersControlls.js");

const router = Router();

router.get("/", getAllUsers);
router.get("/:username", getUsersByUsername);

module.exports = router;
