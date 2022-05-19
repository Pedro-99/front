import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css/effect-coverflow";
import "./LastestProducts.css"
const Title = () =>{
    return(
        <div>
        <div className="container py-5">
            <div className="row">
                <div className="col-12 ">
                    <h1 className="display-6 fw-bolder text-center">latest Products</h1>
                    <hr />
                </div>
            </div>
            </div>
            </div>
    );
}

const Card = () =>{
    return(
        <div  id='products' >
        <div className="product-grid">
            <div className="product-image">
                <a href="#" className="image">
                    <img src="/assests/frontpro1.jpeg" className="img-1" />
                    <img src="/assests/backpro1.jpeg" className="img-2" />
                </a>
                <ul class="product-links">
                    <li><a href="#"><i class="fa fa-heart"></i></a></li>
                    <li><a href="#"><i class="fa fa-random"></i></a></li>
                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                </ul>
                <a href="#" class="product-view"><i class="fa fa-search"></i></a>
            </div>
            <div class="product-content">
                <ul class="rating">
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star disable"></li>
                    <li class="disable">(1 reviews)</li>
                </ul>
                <h3 class="title"><a href="#">Women's Blouse Top</a></h3>
                <div class="price">$65.99</div>
            </div>
        </div>
        </div>
    );
}

export default function ProCaros() {
  return (
    <>
    <Title />
      <Swiper
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={3}
              loop={true}
              loopFillGroupWithBlank={true}
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
        //...........................
        // slidesPerView={1}
        // spaceBetween={10}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   768: {
        //     slidesPerView: 4,
        //     spaceBetween: 40,
        //   },
        //   1024: {
        //     slidesPerView: 5,
        //     spaceBetween: 50,
        //   },
        // }}
        // modules={[Pagination]}
        // className="mySwiper"
      >
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
      </Swiper>
    </>
  );
}
