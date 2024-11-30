const express = require("express");
const dotenv = require("dotenv");

const productRouter = require("./product routers/product.rout.js");

const app = express();
app.use(express.json());

const connectDB = require("./db.js");

dotenv.config();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello world 2");
});

app.use("/products", productRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

connectDB();
