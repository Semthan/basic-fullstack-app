const Product = require('../models/productModel')

exports.getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find({})
    res.status(200).json(allProducts)
  } catch (error) {
    console.error(error)
    res.status(500).send
  }
}

exports.addProduct = async (req, res) => {
  try {
    const product = await Product.create({
      title: req.body.title,
      price: req.body.price
    })
    res.status(200).json(product)
  } catch (error) {
    console.error(error)
    res.status(500).send
  }
}