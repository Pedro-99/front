import React from "react";
import HomeLayout from "../../Layouts/HomeLayout";
import HomeCrousel from "../../Components/Carousel/HomeCarousel";
import LatestProducts from "../../Components/Products/LatestProducts";
import HeroServices from "../../Components/Services/HeroServices";
import CustomersReviews from "../../Components/Reviews/CustomersReviews";
import BottomServices from "../../Components/Services/BottomServices";
import AboutServices from "../../Components/Services/AboutServices";
import ContactDetails from "../../Components/Contact/ContactDetails";

const HomePage = (props) => {
    return (
        <>
            <HomeLayout>
                <HomeCrousel />
                <div className="container mb-5">
                    <LatestProducts />
                </div>
                <HeroServices />
                <AboutServices />
                <ContactDetails />
                <div className="container mb-4">
                    <CustomersReviews />
                </div>
                
                <BottomServices />
            </HomeLayout>
        </>
    );
}

export default HomePage;