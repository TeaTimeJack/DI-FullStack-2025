const { products } = require("../config/db.js");
const {
  getAllProductsDB,
  getProductByIdDB,
} = require("../models/productsModel.js");

const getAllProducts = (req, res) => {
  // res.json(products);
  getAllProductsDB()
    .then((rows) => {
      res.json(rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ message: "somthing went wrong" });
    });
};

const getProductById = (req, res) => {
  // res.json(products);
  const { id } = req.params;
  getProductByIdDB(id)
    .then((rows) => {
      res.json(rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ message: "somthing went wrong" });
    });
};

module.exports = {
  getAllProducts,
  getProductById
};
