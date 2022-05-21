import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
                <div className=" w-100 d-flex justify-content-between  ">
                    <div> 
                         <a className="navbar-brand fw-bold fs-4" to="/">
                        Arynass
                        {/* <img className="align-top py-1" src="/assests/logo.png" height="3%" width="20%" /> */}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/link">Categories</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link disabled" to="/Login">Best Sales</NavLink>
                            </li>
                        </ul>
                   
                    </div>
                    <div className="buttons">
                            <NavLink className="btn btn-outline-dark" to="/login">
                               <i className="fa fa-sign-in me-1"></i> Login
                            </NavLink>
                            <NavLink className="btn btn-outline-dark ms-2" to="/register">
                               <i className="fa fa-user-plus me-1"></i> Register
                            </NavLink>
                            <NavLink className="btn btn-outline-dark ms-2" to="/cart">
                               <i className="fa fa-shopping-cart me-1"></i> Cart (0)
                            </NavLink>
                        </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;