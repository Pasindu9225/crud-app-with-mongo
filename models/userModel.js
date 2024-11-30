const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "User name is required"],
      unique: true,
    },
    passweord: {
      type: String,
      required: [true, "User password is required"],
    },
    email: {
      type: String,
      required: [true, "User email is required"],
      unique: true,
    },
    role: {
      type: String,
      required: [true, "User role is required"],
      enum: ["admin", "user", "manager"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);