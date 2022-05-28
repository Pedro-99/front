import React from "react";
import ProductsCard from "./Card";
import Title from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css/effect-coverflow";
const LatestProducts = () => {
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
                <SwiperSlide><ProductsCard /></SwiperSlide>
                <SwiperSlide><ProductsCard /></SwiperSlide>
                <SwiperSlide><ProductsCard /></SwiperSlide>
                <SwiperSlide><ProductsCard /></SwiperSlide>
                <SwiperSlide><ProductsCard /></SwiperSlide>
                <SwiperSlide><ProductsCard /></SwiperSlide>
                <SwiperSlide><ProductsCard /></SwiperSlide>
                <SwiperSlide><ProductsCard /></SwiperSlide>
                <SwiperSlide><ProductsCard /></SwiperSlide>
            </Swiper>
        </>
    )
}

export default LatestProducts;