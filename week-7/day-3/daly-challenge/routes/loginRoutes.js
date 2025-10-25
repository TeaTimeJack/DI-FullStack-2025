const { Router } = require("express");
const tryLogin = require("../controllers/loginControlls.js");

const router = Router();

router.post("/", tryLogin);

module.exports = router;
