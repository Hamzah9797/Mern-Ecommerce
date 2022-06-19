const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
} = require("../controller/productControllers");

// get all products from db
// route get /api/products
// access public
router.get("/", getAllProducts);

router.get("/:id", getProductById);

module.exports = router;
