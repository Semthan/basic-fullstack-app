import React from 'react'
import "../styles/products.css"

function ProductItem({product}) {
  return (
    <tr>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{product.description}</td>
    </tr>
  )
}

export default ProductItem