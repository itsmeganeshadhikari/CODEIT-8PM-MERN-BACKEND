const express = require("express");
const { getUser, createUser } = require("../controllers/userController");

const userRoute = express.Router();

userRoute.get("/user", getUser);
userRoute.post("/user", createUser);

module.exports = userRoute;
