const express = require("express");
const userRoute = require("./routes/userRoutes");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const db = process.env.DB;

const app = express();

async function connection() {
  const conn = await mongoose.connect(`mongodb://127.0.0.1:27017/${db}`);
  console.log(conn.connections.map((e) => console.log(e.port)));
}

connection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Home page");
});

app.use("/api", userRoute);

module.exports = app;
