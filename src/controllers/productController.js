const Product = require("../models/productModel");

exports.getProducts = async (req, res) => {
  const listOfProducts = await Product.find();
  if (!listOfProducts) {
    res.status(400).send({ message: "Products not found!" });
  }
  res.status(200).send({ data: listOfProducts });
};

exports.createProduct = async (req, res) => {
  const product = await Product.insertMany(req.body);
  res.send({ data: product });
};

exports.editProduct = async (req, res) => {
  const id = req.params.id;
  const editProduct = await Product.updateMany({ _id: id }, { $set: req.body });
  if (editProduct) {
    res.send({ data: editProduct });
  } else {
    res.send({ message: "Error on update product" });
  }
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  const deleteProduct = await Product.deleteMany({ _id: id });
  if (deleteProduct) {
    res.status(200).send({ message: "Deleted product!" });
  } else {
    res.status(400).send({ message: "Product deleted failed!" });
  }
};
