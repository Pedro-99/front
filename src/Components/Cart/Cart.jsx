import { useState, useEffect,useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import {Link} from 'react-router-dom'
import HomeLayout from '../../Layouts/HomeLayout';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import {incrementQty} from '../../features/Cart/cartSlice'
import cartService from '../../features/Cart/cartService'
import { removeCartItem, clearAllcartItems } from '../../features/Cart/cartSlice'
import sessionService from '../../features/session/shoppingService'
import './Cart.css';

const Cart = () => {
    const { cart } = useSelector( (state) => state.cart);
    const { shopping_session } = useSelector((state) => state.shopping)
    const { user } = useSelector((state) => state.auth)
    
    const [cartItems, setCartItems] = useState(cart)
    const [data, setData] = useState(null)
    const [total, setTotal] = useState(0)
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [onDelete, setOnDelete] = useState(false);
    const dispatch = useDispatch()

   
    useEffect(() => {

        window.scrollTo(0,0);
      
      }, []);

   useEffect( () => {
       
    
    cartService.getCartItems(shopping_session.id)
    .then( (items) => {
         setIsLoading(true);
         setData(items);
         setIsLoading(false);
         
    })
    .catch((err) => {
        console.log(err);
        setIsError(true)
    })

   },[onDelete])


   useEffect(() => {
       if(data) {
         
         const res =  data.reduce( (total,cartItem) => {

            let result = total + (cartItem.product.price * cartItem.quantity)
          
              return result
             
           },0)
           setTotal(parseFloat(res).toFixed(2))
        }
        
        sessionService.updateShoppingSession(user.id,total )
   

   },[data,total])
    


    if(isError){
        return <>Error...</>
    }

    if(isLoading) {
        return <>Loading...</>
    }
    return (
        <>
        <HomeLayout>
        <div className='container-fluid py-5 mt-5'>
            <div className="row justify-content-center">
               {
                   (parseInt(total) !== 0) ?  <h4 className="text-center py-3 ">My cart</h4> :
                   <h4 className="text-center py-3">Cart is empty</h4>
               }
                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 py-4">
                  
                    <div>
                        <table className="table table-light table-hover m-0">
                            <tbody>
                                {/* {items.map((item, index) => {
                                    return( */}
                                    {
                                        data && data.map( (item,index) => {
                                           
                                            return(
                                                <tr className='align-middle' key={index}>
                                                <td>
                                                    <Link to={`/products/${item.product.id}`} >
                                                <LazyLoadImage effect="blur" className='img-cart' src={item.product.image} alt={item.product.name} />
                                                
                                                    </Link>
                                                    
                                                    </td>
                                                <td>{item.product.name}</td>
                                                <td>${item.product.price * item.quantity}</td>
                                                <td>Quantity: {item.quantity}</td>
                                                <td>
                                              
                                                  
                                                    <button onClick={() => {
                                                        const data = {
                                                            productId : item.product.id,
                                                            sessionId : shopping_session.id,
                                                        }
                                                        dispatch(removeCartItem(data))
                                                        // cartService.removeCartItem(item.product.id,shopping_session.id)  ;
                                                        setOnDelete(!onDelete);
                                                       
                                                        toast.error('product removed from cart');
                                                    }}  className='btn btn-outline-danger ms-5'>Remove Item</button>
                                        
                                                </td>
                                            </tr>
                                            )
                                        })
                                    }
                                      
                                    {/* )
                                })} */}
                            </tbody>
                        </table>
                    </div>
                    <div className="d-flex justify-content-between py-5">
                        <button onClick={() => {
                            if(parseInt(total) !== 0) {
                                dispatch(clearAllcartItems(shopping_session.id))
                                // cartService.clearCartItems(shopping_session.id); 
                                setOnDelete(!onDelete); 
                                
                                toast.error('cart is cleared successfully');
                            }

                            

                          
                            }}  className="btn btn-outline-danger">Clear All</button>
                        
                        <h3>Subtotal : ${

                              

                            data &&  data.reduce( (total,cartItem) => {

                            let result = total + (cartItem.product.price * cartItem.quantity)
                               return (parseFloat(result).toFixed(2) - 0)
                              
                            },0)
                        } </h3>
                       
                       
                    </div>
                    <div className="d-flex justify-content-between">
                        {
                             (parseInt(total) !== 0) ? 
                <Link className='text-decoration-none bg-warning text-light fw-bolder rounded p-3' to="/products">Add more products</Link>
                 :
                <Link className='text-decoration-none bg-warning text-light fw-bolder rounded p-3' to="/products">Add  products</Link>

                        }
                {/* <button className='text-decoration-none bg-success text-light fw-bolder rounded p-3'  onClick={()=>{calculateTotal(data)}}>Checkout</button> */}
              {
                  (total != 0) ?   <Link className='text-decoration-none bg-success text-light fw-bolder rounded p-3' to="/cart/checkout" >Checkout</Link> :
                  <button disabled = {true} className='text-decoration-none bg-secondary text-light fw-bolder rounded p-3' to="/cart/checkout" >Checkout</button>
              }
            </div>
                </div>
             
            </div>
       
        </div>
        </HomeLayout>
        </>
    )
}

export default Cart;
