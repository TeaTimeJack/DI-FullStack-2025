const { Router } = require("express");
const {
  getAllUsers,
  getUsersById,
  updateUserById,
} = require("../controllers/usersControlls.js");

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUsersById);
router.put("/:id", updateUserById);

module.exports = router;
