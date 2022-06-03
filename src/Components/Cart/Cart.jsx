import { useState, useEffect,useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import HomeLayout from '../../Layouts/HomeLayout';
import {incrementQty} from '../../features/Cart/cartSlice'
import cartService from '../../features/Cart/cartService'
import './Cart.css';

const Cart = () => {
    const { cart } = useSelector( (state) => state.cart)
    
    const [cartItems, setCartItems] = useState(cart)
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [onDelete, setOnDelete] = useState(false)
    // const [productId, setProductId] = useState(null)
    // const [quantity, setQuantity] = useState(0);
// const handlePId = (pid) => {
//     setProductId(pid);
//     return pid
// }
 

    // const increment = (sessionid,productid) => {
    //      cartService.addToCart(sessionid,productid)
    // }
    // const decrement =  (sessionid,productid) => {
    //      cartService.removeFromCart(sessionid,productid)
    // }


   
   

   useEffect( () => {
       
    
    cartService.getCartItems(2)
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

    // const { 
    //     isEmpty,
    //     totalUniqueItems,
    //     items,
    //     totalItems,
    //     cartTotal,
    //     updateItemQuantity,
    //     removeItem,
    //     emptyCart,
    // } = useCart();


  

    
    // const productQty = (qty) => {
    //     setQuantity(qty) 
        
        
    // }
    // const incrementItem = (qty) => {
    //     setQuantity(quantity + 1) 
        
    // }
    // const decrementItem = () => {
    //     setQuantity(quantity - 1) 

    // }

    // console.log('cartItemwws',cartItems.map( (item) => item.quantity))
    // if(isEmpty) return <h5 className='text-center py-5'>My Cart is Empty.</h5>

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
                {/* <h4 className="text-center py-3 text-decoration-underline">My Cart</h4> */}
                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 py-4">
                    <div className="d-flex justify-content-center py-3">
                        <p className='position-relative fw-bolder text-title'>Cart <span className="postition-absolute translate-middle rounded-pill badge bg-danger mx-1"></span></p>
                        <p className='fw-bolder text-title'>Total Items <span className="postition-absolute translate-middle rounded-pill badge bg-success mx-1"></span></p>
                    </div>
                    <div>
                        <table className="table table-light table-hover m-0">
                            <tbody>
                                {/* {items.map((item, index) => {
                                    return( */}
                                    {
                                        data && data.map( (item,index) => {
                                           
                                            return(
                                                <tr className='align-middle' key={index}>
                                                <td><img src={item.product.image} className='img-cart' alt="{item.title}" /></td>
                                                <td>{item.product.name}</td>
                                                <td>${item.product.price}</td>
                                                <td>Quantity: {item.quantity}</td>
                                                <td>
                                              
                                                  
                                                    <button onClick={() => {
                                                        cartService.removeCartItem(item.product.id,2)  ;
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
                            cartService.clearCartItems(); 
                            setOnDelete(!onDelete); 
                            toast.error('cart is cleared successfully');
                            }}  className="btn btn-outline-danger">Clear All</button>
                        
                        <h3>Total Price: ${
                            data &&  data.reduce( (total,cartItem) => {

                            let result = total + (cartItem.product.price * cartItem.quantity)
                               return parseFloat(result)
                              
                            },0)
                        } </h3>
                       
                       
                    </div>
                </div>
            </div>
        </div>
        </HomeLayout>
        </>
    )
}

export default Cart;
