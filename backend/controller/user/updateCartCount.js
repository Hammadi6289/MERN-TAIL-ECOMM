const addToCartModel = require("../../models/cartProduct");

const updateCartCount = async (req, res) => {
  try {
    //const currentUserId = req.userId;
    const addToCartProductId = req?.body?._id;
    const qty = req.body.quantity;
    const updateCart = await addToCartModel.updateOne(
      { _id: addToCartProductId },
      {
        ...(qty && { quantity: qty }),
      }
    );
    res.status(204).json({
      message: "Quantity updated",
      data: updateCart,
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
module.exports = updateCartCount;
