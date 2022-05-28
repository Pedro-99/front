import React from "react";
import Footer from "../Components/Footer/Footer";
import NavbarRes from "../Components/Navbar/NavbarRes";

const PageDetailsLayout = (props) =>{
    return(
        <>
        <NavbarRes />
        <>
        {props.children}
        </>
        <Footer />
        </>
    )
}

export default PageDetailsLayout