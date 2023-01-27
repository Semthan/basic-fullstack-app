import axios from 'axios'


const url = axios.create({
  baseURL: '/product'
})

export const getAllProducts = () => url.get('')
export const getSingleProduct = (id) => url.get(`/${id}`)
export const addProduct = (payload) => url.post('', payload)
export const updateProduct = (payload, id) => url.put(`/${id}`, payload)
export const deleteProduct = (id) => url.delete(`/${id}`)