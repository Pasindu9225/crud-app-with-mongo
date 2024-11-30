const express = require("express");
const app = express();

const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("hello world 2");
});

app.listen(port, () => {
  console.log("server is running on port 3000");
});
