import React from "react";
import Slider from "../Carousel/HomeCarousel";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
const HomeLayout = (props) => {
    return (
        <>
        <Navbar />
        <>
        {props.children}
        </>
        <Footer />
        </>
    );
}

export default HomeLayout;