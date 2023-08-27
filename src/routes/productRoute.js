const express = require("express");
const {
  createProduct,
  getProducts,
  editProduct,
  deleteProduct,
} = require("../controllers/productController");
const productRoute = express.Router();

productRoute.get("/products", getProducts); //C
productRoute.post("/product", createProduct); //C
productRoute.put("/products/:id", editProduct); //C
productRoute.delete("/products/:id", deleteProduct); //C

module.exports = productRoute;
