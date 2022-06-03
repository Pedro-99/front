import axios from 'axios';
import authHeader from '../../services/auth-header';

// const baseUrl = process.env.REACT_APP_BASEURL ;
const baseUrl = 'http://localhost:5000';

// Create new product
const createProduct = async (productData, token) => {
  const config = {
    headers: authHeader() 
  }

  const response = await axios.post(baseUrl, productData, config)

  return response.data
}

// Get user products
const getProducts = async () => {
  // const config = {
  //   headers: authHeader() 
  // }

  const response = await axios.get(baseUrl + '/products')

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


const deleteProduct = async (productId, authHeader) => {
  const config = {
    headers: authHeader() 
  }

  const response = await axios.delete(baseUrl + productId, config)

  return response.data
}

const productService = {
  createProduct,
  getProducts,
  deleteProduct,
  getLatestProducts,
  getProductById,
}

export default productService