const express = require("express");
const dotenv = require("dotenv");

const productRouter = require("./product routers/product.rout.js");

const app = express();
app.use(express.json());

// Import and use cors middleware
const cors = require("cors");
app.use(cors()); // This allows all incoming requests by default

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
