import React, { useState, Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import "./NavbarRes.css";

const NavbarRes = () => {
    const [isMobile, SetIsMobile] = useState(false);
    // const navigate = useNavigate()
    // const dispatch = useDispatch()
    // const { user } = useSelector((state) => state.auth)
    const [colorChange, setColorchange] = useState(false);
    // const onLogout = () => {
    //     dispatch(logout())
    //     dispatch(reset())
    //     navigate('/')
    //     toast.warn('user logged out');
    //   }
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (

<>
        <nav className={colorChange ? 'navbar navbar fixed-top  navbar-icon-top navbar-expand-lg navbar-dark background-color-down' : 'navbar fixed-top navbar-icon-top navbar-expand-lg navbar-light background-color'}>
            {/* <nav className="navbar fixed-top navbar-icon-top navbar-expand-lg navbar-dark bg-dark"> */}
            <div className="container-fluid">
                <div className=" w-100 d-flex ">
                    <div id="nav-style">
                        <a className="navbar-brand fw-bold fs-4" href="/">
                            {/* Arynass */}
                            <img className="align-top img-style" src="/assests/logo.png" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </a>
                                <ul className="dropdown-menu " aria-labelledby="navbarScrollingDropdown">
                                    <li><a className="dropdown-item" href="#">Categorie 1</a></li>
                                    <li><a className="dropdown-item" href="#">Categorie 2</a></li>
                                    <li><a className="dropdown-item" href="#">Categorie 3</a></li>
                                    <li><a className="dropdown-item" href="#">Categorie 4</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    New
                                </a>
                                <ul className="dropdown-menu " aria-labelledby="navbarScrollingDropdown">
                                    <li><a className="dropdown-item" href="#">Categorie 1</a></li>
                                    <li><a className="dropdown-item" href="#">Categorie 2</a></li>
                                    <li><a className="dropdown-item" href="#">Categorie 3</a></li>
                                    <li><a className="dropdown-item" href="#">Categorie 4</a></li>
                                </ul>
                            </li>
                        </ul>
                    <div className="buttons">
                        <a className="btn btn-outline-light" href="/Sign-IN">
                            <i className="fa fa-sign-in me-1"></i> Login
                        </a>
                        {/* <a className="btn btn-outline-dark ms-2" to="/register">
                               <i className="fa fa-user-plus me-1"></i> Register
                            </a> */}
                        <a className="btn btn-outline-light ms-2" href="/cart">
                            <i className="fa fa-shopping-cart"></i> (0)
                        </a>
                    </div>
                    </div>

                </div>
            </div>
        </nav>
        </>
    );
}

export default NavbarRes;