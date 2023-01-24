import React from 'react'
import "../styles/products.css"
import {deleteProduct} from '../fetches'

function ProductItem({product}) {

  function handleDelete(){
    deleteProduct(product._id)
  }

  return (
    <tr>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{product.description}</td>
      <td>Edit</td>
      <td><button onClick={handleDelete}>Delete</button></td>
    </tr>
  )
}

export default ProductItem