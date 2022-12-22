const Product = require('../models/productModel')

exports.getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find({})
    res.status(200).json(allProducts)
  } catch (error) {

  }
}