const express = require("express");
const dotenv = require("dotenv");
const Router = express.Router();

const {
  createProduct,
  getProducts,
  getProductbyID,
  updateProduct,
  deleteProduct,
} = require("./controls/crudControls.js");

const app = express();
app.use(express.json());

const connectDB = require("./db.js");

dotenv.config();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello world 2");
});

app.post("/products/addproduct", createProduct);
app.get("/products", getProducts);
app.get("/products/:id", getProductbyID);
app.put("/products/:id", updateProduct);
app.delete("/products/:id", deleteProduct);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

connectDB();
