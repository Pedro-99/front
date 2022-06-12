import axios from 'axios';
import authHeader from '../../services/auth-header';
const baseUrl = 'http://localhost:5000';

// place order
const addOrder = async (order) => {

  const config = {
    headers: authHeader() 
  }

  const response = await axios.post(baseUrl + '/orders/create',order,config)

  if(response.data) {

    localStorage.setItem('order',JSON.stringify(response.data))
  }

  return response.data
}
// add order item
const addOrderItem = async (order) => {

  const config = {
    headers: authHeader() 
  }

  const response = await axios.post(baseUrl + '/orderItem/create',order,config)

  // if(response.data) {

  //   localStorage.setItem('order',JSON.stringify(response.data))
  // }

  return response.data
}


// place order
const getOrder = async (orderId) => {

  const config = {
    headers: authHeader() 
  }

  const response = await axios.get(baseUrl + `/orders/${orderId}`,config)

  return response.data
}

const orderService = {
  addOrder,
  getOrder,
  addOrderItem
}

export default orderService