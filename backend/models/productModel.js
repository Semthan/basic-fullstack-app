const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
  title: { type: String, required: [true, 'Please add a title'] },
  price: { type: Number, required: [true, 'Please add a price'] },
  describtion: { type: String, required: false }
}, {
  timestamps: true,
})

module.exports = mongoose.model('Product', productSchema)