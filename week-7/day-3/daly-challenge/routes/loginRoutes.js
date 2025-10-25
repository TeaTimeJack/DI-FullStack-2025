const { Router } = require("express");
const {
  tryLogin,
  getUsersPassword,
} = require("../controllers/loginControlls2.js");

const router = Router();

router.get("/", getUsersPassword);
router.post("/", tryLogin);

module.exports = router;
