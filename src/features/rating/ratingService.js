import axios from 'axios';

const baseUrl = 'http://localhost:5000';

// Get user product rating
const getProductRating = async () => {

  const response = await axios.get(baseUrl + '/products/rating/avg')

  return response.data
}
const getOneProductRating = async (id) => {

  const response = await axios.get(baseUrl + `/products/${id}/rating`)

  return response.data
}


const ratingService = {
  getProductRating,
  getOneProductRating
}

export default ratingService