import axios from 'axios';

const baseUrl = 'http://localhost:5000';



const getCartItems = async (sessionId) => {

  const response  = await axios.get(baseUrl + `/cart/session/${sessionId}`);

  if(response.data) {

    localStorage.setItem('cart',JSON.stringify(response.data))
  }

  return response.data

}
const addToCart = async (sessionId,productId) => {
  const response  = await axios.post(baseUrl + `/cart/addToCart/session/${sessionId}/product/${productId}`);

  return response.data

}
const removeFromCart = async (sessionId,productId) => {
  const response  = await axios.post(baseUrl + `/cart/removeFromCart/session/${sessionId}/product/${productId}`);

  return response.data

}

const incrementProductQty = async (productId,sessionId,quantity) => {
  
  const response = await axios.post(baseUrl + `/cart/product/${productId}/session/${sessionId}/increment`,quantity);

  if(response.data) {
    const result  = await axios.get(baseUrl + `/cart/session/${sessionId}`);

    if(result.data) {
  
      localStorage.setItem('cart',JSON.stringify(result.data))
    }
    return {
      data : result.data,
      response:response.data
    }
  }

}
const removeCartItem = async (productId,sessionId) => {
  
  const response = await axios.delete(baseUrl + `/cart/delete/product/${productId}/session/${sessionId}`);

  if(response.data) {
    const result  = await axios.get(baseUrl + `/cart/session/${sessionId}`);

    if(result.data) {
  
      localStorage.setItem('cart',JSON.stringify(result.data))
    }
    return {
      data : result.data,
      response:response.data
    }
  }
 
}
const clearCartItems = async (sessionId) => {
  
  const response = await axios.delete(baseUrl + `/cart/session/${sessionId}/delete/all`);
  if(response.data) {
    const result  = await axios.get(baseUrl + `/cart/session/${sessionId}`);

    if(result.data) {
  
      localStorage.setItem('cart',JSON.stringify(result.data))
    }
    return {
      data : result.data,
      response:response.data
    }
  }
}

const cartService = {

  getCartItems,
  addToCart,
  removeFromCart,
  clearCartItems,
  removeCartItem,
  incrementProductQty
}

export default cartService