import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import userService from '../features/users/userService';
import cartService from '../features/Cart/cartService'
import orderService from '../features/order/orderService';
import { placeOrder } from '../features/order/orderSlice';
import HomeLayout from "../Layouts/HomeLayout";
import DeliveryInfo from '../Components/DeliveryBanner/DeliveryInfo'
import CheckoutLayout from '../Layouts/CheckoutLayout'
import axios from 'axios';



const CheckoutForm = () => {
  const {orderId} = useParams()
  let session = JSON.parse(localStorage.getItem('session'));
  
  let cart = JSON.parse(localStorage.getItem('cart'));
  const [localUser, setLocalUser] = useState(null)
  const { user } = useSelector((state) => state.auth)
  const { order } = useSelector((state) => state.order)
  const [localOrder, setLocalOrder] = useState(null)
  const [orderItems, setOrderItems] = useState(null)
  const [error, setError] = useState(null)
  const [countries, setCountries] = useState([]);
  const [Cities, setCities] = useState([]);
  const [code_postal, setCode_postal] = useState("");
  const [singleCountry, setSingleCountry] = useState("");
  const [singleCity, setSingleCity] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [phone, setPhone] = useState("");
  const [localCart, setLocalCart] = useState(cart);
  const [localSession, setSession] = useState(session);
  const [deliveryInfo, setDeliveryInfo] = useState(false);
  // console.log("ordced",localOrder)
  // console.log(localCart)
  // console.log(localSession)

  useEffect(()=>{
    orderService.getOrder(parseInt(orderId))
                .then((res) => {
                  setLocalOrder(res)
                })
                .catch((err) => {
                  setError(err.response.data.msg)
                
                })
  },[orderId])


  const dispatch = useDispatch();

  const createOrder = () => {
    const order = {
      total: localSession.total,
      userId: localSession.userId,
      isPaid: false,
      isDelivered: false,
    }

    // orderService.addOrder(order)
    dispatch(placeOrder(order))

  }
  // const createOrderItem = () => {
  //   const order = {
  //     total: localSession.total,
  //     userId: localSession.userId,
  //     isPaid: false,
  //     isDelivered: false,
  //   }

  //   dispatch(placeOrder(order))

  // }

    const addOrderItems = () => {
 
    cart.map( async(cartItem) => {
      
      const orderItem = {
        productId : cartItem.productId,
        // orderDetailId : parseInt(orderId)
      }
      
       await orderService.addOrderItem(orderItem, parseInt(orderId))
                    .then((done) => {
                     if(done){
                      cartService.clearCartItems(session.id); 
                      // localStorage.removeItem('order')
                     }

                    })
                 


      
    })
    
  }

  useEffect(() => {
    addOrderItems()
  },[orderId])



  const fetchCountries = async () => {
    let country = await axios.get(
      "https://countriesnow.space/api/v0.1/countries"
    );


    setCountries(country.data.data);
  };
  const fetchCities = (country) => {
    const Cities = countries.find((c) => c.country === country);
    setCities(Cities.cities);
  };

  const createUserAddress = () => {
    const address = {
      "address1": address1,
      "address2": address2,
      "country": singleCountry,
      "city": singleCity,
      "phone": phone,
      "postal_code": code_postal,
      "userId": user.id,
    }
    // console.log(address)
    userService.createUserAddress(user.id, address)
  }

  useEffect(() => {
    fetchCountries();

  }, []);

  useEffect(() => {
    userService.getUserById(user.id).then((user) => setLocalUser(user))
  }, [])
  useEffect(() => {
    orderService.getOrderItems(parseInt(orderId)).then((data) => setOrderItems(data))
  }, [orderId])



  // console.log(orderItems)
  // console.log(localOrder)
  // const submitUserAddress = () => {

  // }


  return (
    <HomeLayout>

      <div id="checkout" className="py-5 mt-5">
        <div className="container">
          <CheckoutLayout>
          <main>
            {/* {
      (order !== null) ?  <DeliveryInfo
      username={user.username}
      email={user.email}
      isPaid={order.isPaid}
      
       />
       :
       <></>
    } */}

{
  localOrder ?  <DeliveryInfo
  isDelivered={localOrder.isDelivered}
  isPaid={localOrder.isPaid} 
  />
  :
  <div>
   <h2>op's ! {error}</h2>
  </div>
}
     
            <div className="py-5 text-center">
              <h2>Checkout form</h2>
            </div>
            <div className="row g-5">
              <div className="col-md-5 col-lg-4 order-md-last">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary">Your cart</span>
                  <span className="badge bg-primary rounded-pill">{cart.length}</span>
                </h4>
                <ul className="list-group mb-3">
                  {
                    orderItems && orderItems.map((item, index) => {
                      return (
                        <li key={index} className="list-group-item d-flex justify-content-between lh-sm">
                          <div>
                            <h6 className="my-0"><strong>product {index + 1} </strong>{item.product.name}</h6>
                          </div>
                          <span className="text-success ">${item.product.price}</span>
                        </li>
                      )
                    })

                  }
                  {/* <li className="list-group-item d-flex justify-content-between">
            <span>Shipping</span>
            <strong className='text-info'>xxx</strong>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Tax</span>
            <strong className='text-info'>xxx</strong>
          </li> */}
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Subtotal (USD)</span>
                    {
                      localOrder &&<strong className='text-info'>${localOrder.total}</strong>
                    }
                    
                  </li>
                  {/* <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong className='text-info'>xxx</strong>
          </li> */}
                </ul>
                {
                  localOrder && !localOrder.isPaid &&   <button
                      onClick={() => {
                        createOrder();

                   
                      }}
                      className="bg-warning p-2 text-light fw-bolder text-center w-100 border-success">Paypal</button>
                }
              
                {/* {
                  (order.isPaid !== null) ?
                    (order.isPaid === true) ? <button
                      onClick={() => {

                        createOrder();
                 
                      }}
                      className="bg-success p-2 text-light fw-bolder text-center w-100 border-success">Place an order </button>
                      :
                      <></> :
                    <button
                      onClick={() => {
                        createOrder();

                   
                      }}
                      className="bg-success p-2 text-light fw-bolder text-center w-100 border-success">Place an order </button>
                } */}

            

              
              

              
              {/* <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Delivery address</h4>
        <form className="needs-validation" novalidate>
          <div className="row g-3">
           

            <div className="col-12">
              <label for="username" className="form-label">Username</label>
              <div className="input-group has-validation">
              
                <span className="input-group-text">@</span>
                {
                  localUser &&
                <input type="text" className="form-control" id="username" value={localUser.username} placeholder="Username" required />
                }
              <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div className="col-12">
              <label for="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
              {
              localUser &&
              <input type="email" className="form-control" id="email" value={localUser.email} placeholder="you@example.com" />
              }
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="col-12">
              <label for="address" className="form-label">Address 1</label>
              {
                  (localUser && (localUser.addresses.length !== 0)) ?
              <input type="text" className="form-control" value={localUser.addresses[0].address1} id="address" placeholder="1234 Main St" required />
              :
              <input
              onChange={(e) => {setAddress1(e.target.value)}}
               type="text" className="form-control" id="address" value={address1}  placeholder="1234 Main St" required />

              }
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="col-12">
              <label for="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
              {
                  (localUser && (localUser.addresses.length !== 0)) ?
              <input type="text" className="form-control" id="address2" value={localUser.addresses[0].address2} placeholder="Apartment or suite" />
              :
              <input
              onChange={(e) => {setAddress2(e.target.value)}}
               type="text" className="form-control" id="address2" name="address2" value={address2} placeholder="Apartment or suite" />
              }
            </div>
            <div className="col-12">
              <label for="address2" className="form-label">phone <span className="text-muted"></span></label>
              {
                  (localUser && (localUser.addresses.length !== 0)) ?
              <input type="text" className="form-control" id="address2" value={localUser.addresses[0].phone} placeholder="Apartment or suite" />
              :
              <input
              onChange={(e) => {setPhone(e.target.value)}}
               type="text" className="form-control" id="phone" name="phone" value={phone} placeholder="type your phone number" />
              }
            </div>

            <div className="col-md-5">
              <label for="country" className="form-label">Country</label>
              {
                (localUser && (localUser.addresses.length !== 0)) ? 
                <input className="form-control" value={localUser.addresses[0].country} />
                :
                <>
                {
                  countries &&
                  <select 
                    onChange={(e) => {
                      fetchCities(e.target.value);
                      setSingleCountry(e.target.value);
                    }}
                    className="form-select" id="country" required>
                      <option selected hidden disabled>
                    Select your country
                  </option>
                  {countries.map((country) => {
                    return(
                    <option  value={country.country}>
                      {country.country}
                    </option>
                  )})}
                    </select>
                  
                }
                </>
            
          }
           
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div className="col-md-4">
              <label for="city" className="form-label">City</label>
               {
                 (localUser && (localUser.addresses.length !== 0)) ? 
                 <input className="form-control" value={localUser.addresses[0].city} />
                 :
               <>
               {
                   Cities && (
                    <select
                    onChange={(e) => {
                    
                      setSingleCity(e.target.value);
                    }}
                     className="form-select" id="city" required>
                  
                   <option selected hidden disabled>
                Select your city
              </option>
              {Cities.map((city) => (
                <option  value={city} >
                  {city}
                </option>
              ))}
                  </select>
                   )
               }
               </>
                 
              }
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div className="col-md-3">
              <label for="zip" className="form-label">Zip</label>
             {
               (localUser && localUser.addresses.length !== 0) ? 
               <input 
              
               type="text" className="form-control" id="zip" value={localUser.addresses[0].postal_code}  placeholder="" required /> 
               :
               <input 
               onChange={(e) => setCode_postal(e.target.value)}
               type="text" className="form-control" id="zip" value={code_postal}  placeholder="" required />
             }
              <div className="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>

          <hr className="my-4" />

          
          <button
          onClick={createUserAddress}
           className="bg-warning text-light fw-bolder p-2 border border-white rounded">Save info for next time</button>
          

          <hr className="my-4" />

          <h4 className="mb-3">Payment</h4>

          <div className="my-3">
            <div className="form-check">
              <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required />
              <label className="form-check-label" for="credit">Credit card</label>
            </div>
            <div className="form-check">
              <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
              <label className="form-check-label" for="debit">Debit card</label>
            </div>
            <div className="form-check">
              <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
              <label className="form-check-label" for="paypal">PayPal</label>
            </div>
          </div>

         

          <hr className="my-4" />

          <button className="w-100 btn btn-primary btn-lg" type="submit">Continue </button>
        </form>
      </div> */}
            </div>
            </div>
          </main>
          </CheckoutLayout>
        </div>
      </ div>
    </HomeLayout>
  );
}

export default CheckoutForm;