import { useState } from "react";
import { addProduct } from "../fetches";

function NewProductForm() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = async e => {
    e.preventDefault()
    const payload = {title,price,description}
    await addProduct(payload)
  }

  const onChange = e => {
    if(e.target.name === "title") {
      setTitle(e.target.value)
    }else if (e.target.name === "price"){
      setPrice(e.target.value)
    }else if (e.target.name === "description"){
      setDescription(e.target.value)
    }
  }

  return (
    <>
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="product title"
        onChange={onChange}
      />
      <input type="number" name="price" id="price" placeholder="product price" onChange={onChange}/>
      <input type="text" name="description" id="description" placeholder="product description" onChange={onChange}/>
      <input type="submit" value="Add new product" />
    </form>
    </>
  )
}

export default NewProductForm