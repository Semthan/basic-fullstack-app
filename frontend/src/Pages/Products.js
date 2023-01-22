import { useEffect, useState } from "react"
import ProductCard from "../Components/ProductCard"
import { getAllProducts } from '../fetches'

export const Products = () => {

  const [Products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts().then((res) => setProducts(res.data))
  })


  return (
    <div>
      <h1>Testano</h1>
      {!Products && <p> loading...</p>}
      {Products && Object.entries(Products).map(item => {
        const key = item[0]
        const value = item[1]
        return <ProductCard key={key} product={value} />
      })}
    </div>
  )
}