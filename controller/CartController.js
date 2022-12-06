const cartSchema = require("../model/CartSchema");

module.exports.addToCart = (req, res) => {
  const cart = new cartSchema(req.body);
  cart.save((err, data) => {
    if (err) {
      res.status(500).json({
        message: "Internal server error",
      });
    } else {
      res.status(200).json({
        message: "Product added to cart",
        data: data,
      });
    }
  });
};
module.exports.getCartData = (req, res) => {
  cartSchema
    .find()
    .populate("product").populate("employee")
    .exec((err, data) => {
      if (err) {
        res.status(500).json({
          message: "Internal server error",
        });
      } else {
        res.status(200).json({
          message: "Cart data found",
          data: data,
        });
      }
    });
};
