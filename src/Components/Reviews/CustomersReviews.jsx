import React from "react";
import "./CustomersReviews.css";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import Title from "./Title";
import ReviewsCard from "./ReviewsCard";
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
                    <ReviewsCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewsCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewsCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewsCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewsCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewsCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewsCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewsCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewsCard />
                </SwiperSlide>
            </Swiper>
        </>
    );
}


export default CustomersReviews;