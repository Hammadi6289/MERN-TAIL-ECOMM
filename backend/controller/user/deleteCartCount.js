const addToCartModel = require("../../models/cartProduct");

const deleteCartCount = async (req, res) => {
  try {
    const addToCartProductId = req.body._id;
    const deleteCart = await addToCartModel.deleteOne({
      _id: addToCartProductId,
    });
    res.status(200).json({
      message: "Product deleted from the cart",
      data: deleteCart,
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err?.message || err,
      success: false,
      error: true,
    });
  }
};
module.exports = deleteCartCount;
