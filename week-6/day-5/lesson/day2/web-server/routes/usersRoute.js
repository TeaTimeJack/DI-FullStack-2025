const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  searchUser,
  addNewUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController.js");

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.get("/search", searchUser);
router.post("/", addNewUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
