const { Router } = require("express");
const register = require("../controllers/registerControlls.js");

const router = Router();

router.post("register", register);

module.exports = router;
