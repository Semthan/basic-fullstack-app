const express = require('express')
const router = express.Router()
const productController = require('../controller/productController')

router
  .get('/', productController.getAllProducts)
  .get('/:id', productController.getSingleProduct)
  .post('/', productController.addProduct)

router
  .put('/:id', productController.updateProduct)
  .delete('/:id', productController.deleteProduct)

module.exports = router