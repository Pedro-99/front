import React from "react";
import Slider from "../Carousel/HomeCarousel";
import Hero from "../Carousel/React-carousel";
import SwiperC from "../Carousel/Swiper";
import HomeLayout from "../Layouts/HomeLayout";
import LastestProducts from "../Products/LastestProducts";
import ProCaros from "../Products/ProductsCarousel";
const Home = (props) => {
    return (
        <>
        <HomeLayout>
            <SwiperC />
            <LastestProducts />
            {/* <ProCaros /> */}
            {/* <Hero /> */}
            {/* <Slider /> */}
        </HomeLayout>
        </>
    );
}

export default Home;