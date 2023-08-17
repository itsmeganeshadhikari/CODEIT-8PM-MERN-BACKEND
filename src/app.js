const express = require("express");
const userRoute = require("./routes/userRoutes");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Home page");
});

app.use("/api", userRoute);

module.exports = app;
