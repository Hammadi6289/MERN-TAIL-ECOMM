const productModel = require("../../models/productModel");

const getCategoryProduct = async (req, res) => {
  try {
    const productCategory = await productModel.distinct("category");
    //console.log("category", productCategory);
    const productByCat = []; //arr to store one product from eact category
    for (const category of productCategory) {
      const product = await productModel.findOne({ category });
      if (product) {
        productByCat.push(product);
      }
    }
    res.status(200).json({
      message: "Category products",
      data: productByCat,
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};
module.exports = getCategoryProduct;
