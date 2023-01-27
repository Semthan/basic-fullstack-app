import axios from 'axios'


const url = axios.create({
  baseURL: 'http://127.0.0.1:10000'
})

export const getAllProducts = () => url.get('/product')
export const getSingleProduct = (id) => url.get(`/product/${id}`)
export const addProduct = (payload) => url.post('/product', payload)
export const updateProduct = (payload, id) => url.put(`/product/${id}`, payload)
export const deleteProduct = (id) => url.delete(`/product/${id}`)