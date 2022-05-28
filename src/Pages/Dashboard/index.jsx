import React from "react";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Contain from "./Contain";
import ProductsOutOfStock from "./Stock";

import "./Style.css";

const DashboardPage = () => {
    return (
        <>
            <DashboardLayout>
                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-5">
                    <Contain />

                </main>
            </DashboardLayout>
        </>

    );
}
export default DashboardPage