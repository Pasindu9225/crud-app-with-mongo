const express = require("express");
const router = express.Router();

const {
  createProduct,
  getProducts,
  getProductbyID,
  updateProduct,
  deleteProduct,
} = require("../controls/crudControls");

router.post("/addproduct", createProduct);
router.get("/", getProducts);
router.get("/:id", getProductbyID);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
