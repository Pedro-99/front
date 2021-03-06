import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import productService from '../../features/products/productService';
import cartService from '../../features/Cart/cartService';
import { incrementQty } from '../../features/Cart/cartSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./PageDetails.css";
import { FreeMode, Navigation, Thumbs } from "swiper";
// import PageDetailsLayout from "../../Layouts/PageDetailsLayout";

import HomeLayout from "../../Layouts/HomeLayout";
import Stars from '../../Components/rating/stars';
import { toast } from 'react-toastify';


const PageDetails = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [productQty, setProductQty] = useState(0);
    const [data, setData] = useState(null);
    const {user} = useSelector((state) => state.auth);
    const { shopping_session } = useSelector((state) => state.shopping);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [product, setProduct] = useState([]);
    let { pid } = useParams();

    useEffect(() => {
  
      productService.getProductById(parseInt(pid))
        .then((data) => setProduct(data[0]))
        .catch((err) => console.log(err))
  
  
    }, [])

    const decrement = () => {setProductQty(productQty - 1)  }
    const increment = () => {setProductQty(Math.min(product.quantity,productQty + 1))  } 
  

    return (
<>
  <HomeLayout>
  {/* <PageDetailsLayout > */}
        <section className="mt-5 py-4">
                  
        <div id="details" className="container mt-5 mb-5">
            <div className="card">
                <div className="container-fliud">
                    <div className="wrapper row">
                        <div className="preview col-md-6">
                            <Swiper
                                style={{
                                    "--swiper-navigation-color": "#fff",
                                    "--swiper-pagination-color": "#fff",
                                }}
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2"
                            >
                                <SwiperSlide>
                                  { product ? <img src={product.image} alt={product.name} style={{'object-fit' : 'contain' }} />  : <>Loading...</>}
                                </SwiperSlide>
                          

                            </Swiper>
                    
                        </div>
                        <div className="details col-md-6">
                            
                           {
                              product ? <h3 className="product-title mb-3">{product.name}</h3> : <h3>Loading...</h3>
                           } 
                            <div className="rating">
                         
                           {
                              (product && product.id) ?  <Stars id={product.id} /> : <></>
                           }
                            </div>
                            <div>
                               {
                                (product && product.quantity === 0) ? <h5 className="text-warning">Not Available</h5> : <h5 className="text-info">Still only {product.quantity} items</h5>
                               }
                            </div>
                            <div>
                            {
                                (productQty === 0) ? <>
                                    <button className="btn btn-secondary" onClick = {increment}>+</button>
                            <span className='mx-3 '>{productQty}</span>
                            <button className="btn btn-secondary" disabled={true} onClick = {decrement }>-</button>
                                </> : 
                                <>    <button className="btn btn-secondary" onClick = {increment}>+</button>
                                <span className='mx-3' >{productQty}</span>
                                <button className="btn btn-secondary" onClick = {decrement }>-</button></>
                            }
                        
                            </div>
                            {
                                product ?   <p className="product-description text-secondary fw-bolder mt-3"> {product.description}</p> : <>Loading...</>
                            }
                           {
                               product ?  <h4 className="price">current price: <span>${parseFloat(product.price * productQty).toFixed(2)}</span></h4> : <>Loading</>
                           }
                     
                            <div className="action d-flex w-20 h-20">

                       
                             {
                                 (productQty !== 0) ? ((user !== null) ? 
                               (  
                               <div className="d-flex flex-row justify-content-between flex-wrap w-100">
                                  <button
                                 onClick={() => {
                               
                                     const data = {
                                        productId : parseInt(pid),
                                        sessionId : shopping_session.id,
                                        productQty : productQty

                                     }
                                  if(  dispatch(incrementQty(data))){

                                      toast.success('product added into cart');
                                  }
                                    // cartService.incrementProductQty(parseInt(pid),shopping_session.id,{ 'quantity' : productQty});
                                    }  } 
                                   className="add-to-cart btn btn-default ms-2"
                                   type="button"
                             >
                                 add to cart
                                 </button>
                                      <Link className='text-decoration-none bg-warning text-light fw-bolder rounded p-3' to="/products">Add more products</Link>
                               </div>
                               ) :

                                   ( <button 
                                    onClick= {() => {
                                               if(!user) {
                                                   toast.warning('you are not logged in');
                                                   navigate("/login", {replace:true})
                                                }

                                           }}
                                 
                                 
                                     className="add-to-cart btn btn-default ms-2" 
                                     type="button">
                                         add to cart
                                     </button>)):
                                   (  <button 
                                    
                                    disabled={true}
                                     className="add-to-cart btn btn-default ms-2" 
                                     type="button">
                                         add to cart
                                     </button>)
                                 
                                 
                             }


                              
                               
                             
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
               
        </section>
        {/* </PageDetailsLayout> */}
         </HomeLayout>
        </>
    );
}

export default PageDetails;



{/* <section className="mt-5 py-4">
<div id="details" className="container mt-5 mb-5">
    <div className="card">
        <div className="container-fliud">
            <div className="wrapper row">
                <div className="preview col-md-6">

                </div>
                <div className="details col-md-6">
                    <h3 className="product-title mb-3">Products Title</h3>
                    <div className="rating mb-5">
                        <div className="stars">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <span className="review-no">41 reviews</span>
                    </div>
                    <p className="product-description"> Products Description =
                        Suspendisse quos? Tempus cras iure temporibus?
                        Eu laudantium cubilia sem sem!.</p>
                    <h4 className="price">current price: <span>$180</span></h4>
                    <p className="vote mb-4 mt-2"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                    <h5 className="sizes mb-5">sizes:
                        <span className="size" data-toggle="tooltip" title="small">s</span>
                        <span className="size" data-toggle="tooltip" title="medium">m</span>
                        <span className="size" data-toggle="tooltip" title="large">l</span>
                        <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
                    </h5>
                    <div className="action d-flex w-20 h-20">
                        <button className="add-to-cart btn btn-default ms-2" type="button">add to cart</button>
                        <button className="like btn btn-default ms-3" type="button"><span className="fa fa-heart"></span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section> */}

{/* <div className="row">                                
<Swiper
style={{
    "--swiper-navigation-color": "#fff",
    "--swiper-pagination-color": "#fff",
}}
spaceBetween={10}
navigation={true}
thumbs={{ swiper: thumbsSwiper }}
modules={[FreeMode, Navigation, Thumbs]}
className="mySwiper2"
>
<SwiperSlide>
    <img src="/assests/frontpro1.jpeg" />
</SwiperSlide>
<SwiperSlide>
    <img src="/assests/backpro1.jpeg" />
</SwiperSlide>

</Swiper>
</div>
<div>
<Swiper
onSwiper={setThumbsSwiper}
spaceBetween={10}
slidesPerView={4}
freeMode={true}
watchSlidesProgress={true}
modules={[FreeMode, Navigation, Thumbs]}
className="mySwiper"
>
<SwiperSlide>
    <img src="/assests/frontpro1.jpeg" />
</SwiperSlide>
<SwiperSlide>
    <img src="/assests/backpro1.jpeg" />
</SwiperSlide>
</Swiper>
</div> */}