import React from "react";
import Header from "../Pages/Dashboard/Header";
import Sidebar from "../Pages/Dashboard/Sidebar";

const DashboardLayout = (props) => {
    return (
        <>
        {/* <Header /> */}

                    <Header />
                    <>
                       {props.children}
                    </>

        </>
    )
}

export default DashboardLayout;