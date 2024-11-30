const express = require("express");
const router = express.Router();

const verifyToken = require("../../middlewares/authMiddleware.js");
const authorizeRoles = require("../../middlewares/authorizeRoles.js");

router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) => {
  res.send("hello admin");
});

router.get(
  "/manager",
  verifyToken,
  authorizeRoles("admin", "manager"),
  (req, res) => {
    res.send("hello manager");
  }
);

router.get(
  "/user",
  verifyToken,
  authorizeRoles("admin", "manager", "user"),
  (req, res) => {
    res.send("hello user");
  }
);

module.exports = router;
