const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./db.js");

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;
const mongodburl = process.env.ConnectionString;

app.get("/", (req, res) => {
  res.send("hello world 2");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

connectDB();
