const { products } = require("../config/db.js");

const getAllProducts = (req, res) => {
  res.json(products);
};

module.exports = {
  getAllProducts,
};
