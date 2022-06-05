import axios from 'axios';
import authHeader from '../../services/auth-header';
const baseUrl = 'http://localhost:5000';

// Get user product categories
const getCategories = async () => {

  const response = await axios.get(baseUrl + '/categories')

  return response.data
}

// add categoty
const addCategory = async (category) => {

  const config = {
    headers: authHeader() 
  }

  const response = await axios.post(baseUrl + '/categories/create',category,config)

  return response.data
}
// delete categoty
const deleteCategory = async (categoryId) => {

  const config = {
    headers: authHeader() 
  }

  const response = await axios.delete(baseUrl + `/categories/delete/${categoryId}`,config)

  return response.data
}



const categoryService = {
  getCategories,
  deleteCategory,
  addCategory
}

export default categoryService