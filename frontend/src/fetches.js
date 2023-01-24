import axios from 'axios'


const url = axios.create({
  baseURL: 'http://127.0.0.1:5000'
})

export const getAllProducts = () => url.get('/product')
export const addProduct = (payload) => url.post('/product', payload)
export const deleteProduct = (id) => url.delete(`/product/${id}`)