import { useState, useEffect } from "react"
import {useNavigate, useParams} from 'react-router-dom'
import { updateProduct, getSingleProduct } from "../fetches"

function UpdateProductForm() {

  const {id} = useParams()

  const navigate = useNavigate()

  const [product,setProduct] = useState([])

  useEffect(()=> {
    getSingleProduct(id).then((res) => setProduct(res.data))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, price, description} = product
    const payload = { title, price, description}
    
    await updateProduct(payload,id)

    navigate('/')
  }

  const handleChange = (e) => {
    let newPoduct = {...product, [e.target.name]: e.target.value}
    setProduct(newPoduct);
}

  return (
    <form onSubmit={handleSubmit}>
      <input 
          type="text"
          name="title"
          placeholder=""
          value={product?.title}
          onChange={handleChange}
      />
      <input 
          type="number"
          name="price"
          placeholder=""
          value={product?.price}
          onChange={handleChange}
      />
      <input 
          type="text"
          name="description"
          placeholder=""
          value={product?.description}
          onChange={handleChange}
      />              
      <button
          type="submit"
      >
          Update
      </button>
    </form>
  )
}

export default UpdateProductForm