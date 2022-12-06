const express = require("express");
const { route } = require("./ProductRoutes");
const router = express.Router();
const cartController = require("../controller/CartController");

router.post('/addtocart',cartController.addToCart);
router.get('/getcartdata',cartController.getCartData);

module.exports = router;