const express = require("express");
const { getUser } = require("../controllers/userController");

const userRoute = express.Router();

userRoute.get("/user", getUser);

module.exports = userRoute;
