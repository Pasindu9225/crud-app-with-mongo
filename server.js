const express = require("express");
const dotenv = require("dotenv");

const productRouter = require("./routs/product routers/product.rout.js");
const authRouter = require("./routs/auth routs/authRoutes.js");
const userRouter = require("./routs/user routers/userRoutes.js");

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const connectDB = require("./db.js");

dotenv.config();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello world 2");
});

app.use("/products", productRouter);
app.use("/auth", authRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

connectDB();
