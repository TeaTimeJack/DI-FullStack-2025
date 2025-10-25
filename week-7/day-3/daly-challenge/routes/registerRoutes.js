const { Router } = require("express");
const register = require("../controllers/registerControlls2.js");

const router = Router();

router.post("/", register);

module.exports = router;
