import axios from 'axios'


const url = axios.create({
  baseURL: 'https://basic-mern-app-api.up.railway.app/'
})

export const getAllProducts = () => url.get('/api')
export const getSingleProduct = (id) => url.get(`/api/${id}`)
export const addProduct = (payload) => url.post('/api', payload)
export const updateProduct = (payload, id) => url.put(`/api/${id}`, payload)
export const deleteProduct = (id) => url.delete(`/api/${id}`)