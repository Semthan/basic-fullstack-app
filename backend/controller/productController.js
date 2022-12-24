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
      price: req.body.price,
      describtion: req.body.describtion,
    })
    res.status(200).json(product)
  } catch (error) {
    console.error(error)
    res.status(500).send
  }
}

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    if (!product) {
      res.status(400).json('Product not found');
    }

    const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updateProduct)
  } catch (error) {
    console.error(error)
    res.status(500).send
  }
}