const express = require("express");
const {
  getUser,
  createUser,
  editUser,
  deleteUser,
} = require("../controllers/userController");

const userRoute = express.Router();

userRoute.get("/user", getUser); //R
userRoute.post("/user", createUser); //C
userRoute.put("/user/:id", editUser); //U
userRoute.delete("/user/:id", deleteUser); //D

module.exports = userRoute;
