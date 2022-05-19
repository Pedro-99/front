import React from "react";
import "./CustomersReviews.css";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const Title = () => {
    return (
        <div id="reviews">
            <div class="section-head mt-5">
                <h2 class="section-title" data-wow-duration="1000ms" data-wow-delay="0.3s">Customers <span>Reviews</span></h2>
                <hr class="lines " data-wow-delay="0.3s" />
            </div>
        </div>
    );
}
const Card = () => {
    return (
        <div id="reviews">
            <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
                <div className="card p-4">
                    <div className=" image d-flex flex-column justify-content-center align-items-center">
                        <img className="rounded-circle" src="./assests/m.png" height="100" width="100" />
                        <span className="name mt-3">User Full Name</span>
                        <span className="idd">@Username</span>
                        <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span className="idd1"> review</span>
                        </div>
                        <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                            <span className="follow"> Comment of user </span>
                        </div>
                        <div className="text mt-3">
                        </div>
                        <div className=" px-2 rounded mt-2 date ">
                            <span className="join">Joined May,2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



const CustomersReviews = () => {
    return (
        <>
            <Title />
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                pagination={true}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
            </Swiper>
        </>
    );
}


export default CustomersReviews;