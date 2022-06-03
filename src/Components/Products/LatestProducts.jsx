import React, { useState, useEffect } from "react";
import Card from "./Card";
import Title from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import productService from '../../features/products/productService';
import ratingService  from '../../features/rating/ratingService';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css/effect-coverflow";

const LatestProducts = () => {

  const [products, setProducts] = useState([]);
  const [rating, setRating] = useState([])

  useEffect(() => {

    productService.getLatestProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.log(err))


  }, [])

  useEffect( () => {
    ratingService.getProductRating()
    .then( (data) => {
      setRating(data)
    })
    .catch((err) => {
      console.log(err)
    }) 
     
  },[])

  return (
    <>
      <Title />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}

        // loop={true}
        // loopFillGroupWithBlank={true}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        pagination={{
          clickable: true,
        }}
        style={{
          "--swiper-navigation-color": "rgb(230, 217, 152)",
          "--swiper-pagination-color": "#fff",
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
          {/* {
            products ? (products.map( (product, index) => {
              console.log("image",product.image)
              return(
                <SwiperSlide>
                  <Card
                  key = {index}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                  reviews={element.count}
                  average={element.avg}
                   />
              </SwiperSlide>
              )
            })) : <>Loading...</>
          } */}

{
          products?.map( (product, index) => {
            
            return(
             rating && rating.map( (element) => {
           
              return(
                (element.productId === product.id) ?    <SwiperSlide key={index}>   
                <Card
                  key = {index}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                  reviews={element.count}
                  average={element.avg}
                />
              </SwiperSlide> :<></>
              )
              } )
              
            )
          } )
        }
          
        

      </Swiper>
    </>
  )
}

export default LatestProducts;