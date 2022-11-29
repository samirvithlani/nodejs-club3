const express = require("express");
var router = express.Router();
const productController = require("../controller/ProductController");
router.post('/addproduct',productController.addProduct);
router.get('/getproduct',productController.getAllProducts)
module.exports = router;



