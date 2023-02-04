import axios from 'axios'


/* const url = axios.create({
  baseURL: 'https://basic-mern-app-api.onrender.com'
}) */

export const getAllProducts = () => axios.get('/api')
export const getSingleProduct = (id) => axios.get(`/api/${id}`)
export const addProduct = (payload) => axios.post('/api', payload)
export const updateProduct = (payload, id) => axios.put(`/api/${id}`, payload)
export const deleteProduct = (id) => axios.delete(`/api/${id}`)