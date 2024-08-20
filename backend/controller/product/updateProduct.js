const uploadProductPermission = require("../../helpers/permission");
const productModel = require("../../models/productModel");
async function updateProductController(req, res) {
  try {
    if (!uploadProductPermission(req.userId)) {
      throw new Error("Limited Permission");
    }
    const { _id, ...resBody } = req.body;
    const updateProduct = await productModel.findByIdAndUpdate(_id, resBody);

    const productId = req?._id;
    res.status(200).json({
      message: "Product updated successfully",
      error: false,
      success: true,
      data: updateProduct,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = updateProductController;
