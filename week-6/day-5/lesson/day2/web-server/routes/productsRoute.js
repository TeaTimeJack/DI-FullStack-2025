const { Router } = require("express");

const { getAllProducts } = require("../controllers/productsController.js");

const router = Router();

router.get("/", getAllProducts);

module.exports = router;
