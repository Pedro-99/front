import React from "react";
import { Link } from 'react-router-dom'
import Header from "../Pages/Dashboard/Header";
import Sidebar from "../Pages/Dashboard/Sidebar";

const DashboardLayout = (props) => {
    return (
        <div className="container-fluid">
            <div className="col">
                <div className="row border">
                    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                        <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/">Arynass</Link>
                        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                    </header>
                </div>
                <div className="row">
                    <div className="col">
                        <Sidebar />
                    </div>
                    <div className="col-9 border">{props.children}</div>
                </div>

            </div>


        </div>
    )
}

export default DashboardLayout;




//        