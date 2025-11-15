const { Router } = require("express");
const {
  getAllUsers,
  getUsersByUsername,
} = require("../controllers/usersControlls.js");

const router = Router();

router.get("users/", getAllUsers);
router.get("users/:username", getUsersByUsername);

module.exports = router;
