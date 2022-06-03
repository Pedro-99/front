import axios from 'axios';

const baseUrl = 'http://localhost:5000';

// Get ShoppingSession
const getShoppingSession = async (userId) => {

  const response = await axios.get(baseUrl + `/session/user/${userId}`)
  if(response.data){
    localStorage.setItem('session',JSON.stringify(response.data))
  }

  return response.data
}



const shoppingService = {
  getShoppingSession,
}

export default shoppingService