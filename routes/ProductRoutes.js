const express = require("express");
var router = express.Router();
const productController = require("../controller/ProductController");
router.post('/addproduct',productController.addProduct);
router.get('/getproduct',productController.getAllProducts)
router.delete('/deleteproduct/:id',productController.deleteProduct)
router.put('/updateproduct/:id',productController.updateProduct)
router.get('/productbyid/:id',productController.getProductById)

module.exports = router;


