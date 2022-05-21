import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar.jsx";
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