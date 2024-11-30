const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async (mongodburl) => {
  try {
    const mongodburl = process.env.ConnectionString;
    await mongoose.connect(mongodburl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected...");
  } catch (error) {
    console.log("Error connecting to database:", error);
  }
};

module.exports = connectDB;
