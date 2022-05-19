import React from "react";
import SwiperC from "../Carousel/Swiper";
import Contact from "../Contact/Contact";
import Contact2 from "../Contact/Contact2";
import HomeLayout from "../Layouts/HomeLayout";
import LastestProducts from "../Products/LastestProducts";
import ProCaros from "../Products/ProductsCarousel";
import CustomersReviews from "../Reviews/CustomersReviews";
import Services1 from "../Services/Services";
import Services2 from "../Services/Services2";
import Profile from "../UsersProfile/Profile";
import Bottom from "./Bottom";
const Home = (props) => {
    return (
        <>
            <HomeLayout>
                <SwiperC />
                <div className="container mb-5">
                    <ProCaros />
                </div>
                <Services2 />
                {/* <Profile /> */}
                <Services1 />
                <div className="container">
                    <CustomersReviews />
                </div>
                <Contact2 />
                <Bottom />
                {/* <Contact /> */}
            </HomeLayout>
        </>
    );
}

export default Home;