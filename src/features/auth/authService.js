import axios from 'axios' 
const BASE_URL = 'http://localhost:5000';

// console.log('url',process.env.REACT_APP_BASEURL);

// Register user
const register = async (userData) => {
  const response = await axios.post(BASE_URL + '/user/auth/signup', userData)

  // if (response.data) {
  //   localStorage.setItem('user', JSON.stringify(response.data))
  // }

  return response.data
}

// Login user
const login = async (userData) => {

  const response = await axios.post(BASE_URL + '/user/auth/signin', userData)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify({...response.data,isLoggedIn : true}))
  }

  return {
    isLoggedIn : true,
    ...response.data
  }
}

// Logout user
const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('session');
  localStorage.removeItem('cart');
}

const authService = {
  register,
  logout,
  login,
}

export default authService