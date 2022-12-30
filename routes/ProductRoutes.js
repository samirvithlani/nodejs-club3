const express = require("express");
var router = express.Router();
const productController = require("../controller/ProductController");
const productValidation = require("../util/ProductSchemaValidation");
const zodMiddleware = require("../middleware/ZodMiddleware");
const AuthMiddleware = require("../middleware/AuthMiddleware");

router.post('/addproduct',zodMiddleware.validate(productValidation),productController.addProduct);
router.get('/getproduct',AuthMiddleware.auth(),productController.getAllProducts)
router.delete('/deleteproduct/:id',productController.deleteProduct)
router.put('/updateproduct/:id',productController.updateProduct)
router.get('/productbyid/:id',productController.getProductById)

module.exports = router;


