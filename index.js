const express = require("express");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 3000;
const app = express();
app.get("/", (req, res) => {
  res.send({
    data: {
      message: "Hello to home page",
    },
  });
});
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
