import axios from 'axios';
import authHeader from '../../services/auth-header';

// const baseUrl = process.env.REACT_APP_BASEURL ;
const baseUrl = 'http://localhost:5000';

// Create new product
const createProduct = async (productData) => {
  const config = {
    headers: authHeader() 
  }

  const response = await axios.post(baseUrl + "/products/create", productData, config)

  return response.data
}
// Update product
const updateProduct = async (productData,productId) => {
  const config = {
    headers: authHeader() 
  }

  const response = await axios.put(baseUrl + `/products/update/${productId}`, productData, config)

  return response.data
}

// Get products
const getProducts = async () => {

  const response = await axios.get(baseUrl + `/products`)

  return response.data
}
// Get products with pagination
const getProductsPagination = async (page,size) => {

  const response = await axios.get(baseUrl + `/pagination/products?page=${page}&size=${size}`)

  return response.data
}
// Get latest products
const getLatestProducts = async () => {
  // const config = {
  //   headers: authHeader() 
  // }

  const response = await axios.get(baseUrl + '/products/new')

  return response.data
}
const getProductById = async (pid) => {
  // const config = {
  //   headers: authHeader() 
  // }

  const response = await axios.get(baseUrl + `/products/${pid}`)

  return response.data
}


const deleteProduct = async (productId) => {
  const config = {
    headers: authHeader() 
  }

  const response = await axios.delete(baseUrl + `/products/delete/${productId}`, config)

  return response.data
}

const productService = {
  createProduct,
  getProducts,
  getProductsPagination,
  deleteProduct,
  updateProduct,
  getLatestProducts,
  getProductById,
}

export default productService