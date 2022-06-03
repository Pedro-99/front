import axios from 'axios';

const baseUrl = 'http://localhost:5000';

// Get user product rating
const getCategories = async () => {

  const response = await axios.get(baseUrl + '/categories')

  return response.data
}



const categoryService = {
  getCategories
}

export default categoryService