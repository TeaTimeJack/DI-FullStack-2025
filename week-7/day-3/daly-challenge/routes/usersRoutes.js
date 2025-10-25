const { Router } = require("express");
const {
  getAllUsers,
  // getUsersById,
  getUsersByUsername,
  updateUserById,
} = require("../controllers/usersControlls.js");

const router = Router();

router.get("/", getAllUsers);
// router.get("/:id", getUsersById);
router.get("/:username", getUsersByUsername);
router.put("/:id", updateUserById);

module.exports = router;
