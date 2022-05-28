import React from "react";
import Footer from "../Components/Footer/Footer"
import NavbarRes from "../Components/Navbar/NavbarRes";
import Navbar from "../Components/Navbar/Navbar.jsx";
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