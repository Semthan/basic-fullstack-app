import axios from 'axios'


const url = axios.create({
  baseURL: 'https://basic-mern-app.onrender.com'
})

export const getAllProducts = () => url.get('/product')
export const getSingleProduct = (id) => url.get(`/product/${id}`)
export const addProduct = (payload) => url.post('/product', payload)
export const updateProduct = (payload, id) => url.put(`/product/${id}`, payload)
export const deleteProduct = (id) => url.delete(`/product/${id}`)