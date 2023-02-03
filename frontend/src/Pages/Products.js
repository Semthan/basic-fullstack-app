import { useEffect, useState } from "react"
import ProductItem from "../Components/ProductItem"
import NewProductForm from '../Components/NewProductForm'
import { getAllProducts } from '../fetches'
import "../styles/products.css"

export const Products = () => {

  const [Products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts().then((res) => setProducts(res.data))
  })


  return (
    <div>
      <h1>Products</h1>

      <h3>Add new product</h3>

      <NewProductForm />
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>description</th>
            <th>Update</th>
            <th>Remove</th>
          </tr>
          {!Products && <p> loading...</p>}
          {Products && Object.entries(Products).map(item => {
            const key = item[0]
            const value = item[1]
            return <ProductItem key={key} product={value} />
          })}
        </tbody>
      </table>
    </div>
  )
}