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

exports.getSingleProduct = async (req, res) => {
  try {
    const id = req.params.id
    const singelProduct = await Product.findById(id)
    res.status(200).json(singelProduct)
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
      description: req.body.description,
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

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    if (!product) {
      res.status(400).json('Product not found');
    }

    const deleteProduct = await product.remove()
    res.status(200).json(deleteProduct)
  } catch (error) {

  }
}