import axios from 'axios' 
const BASE_URL = 'http://localhost:5000';

// get user by id
const getUserById = async (userId) => {
  const response = await axios.get(BASE_URL + `/users/${userId}`)

  return response.data
}

const createUserAddress = async (userId,userAddress) => {
  const response = await axios.post(BASE_URL + `/address/create/${userId}`,userAddress)

  return response.data
}

const userService = {
  getUserById,
  createUserAddress
}

export default userService