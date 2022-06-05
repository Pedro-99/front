import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'


const Header = () => {

    useEffect(() => {

        window.scrollTo(0,0);
      
      }, []);

    return (
        <>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/">Arynass</Link>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                        <a className="nav-link px-3" href="#">Sign out</a>
                    </div>
                </div>
            </header>

            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="position-sticky pt-3">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/dashboard">
                                        <i className="fa fa-bar-chart me-2"></i>
                                        Dashboard
                                    </Link>
                                </li>
                                <li className="nav-item">
                                <button className="btn btn-toggle nav-link align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                                        <i className="fa fa-gift me-2"></i>
                                        Orders
                                    </button>
                                    <div className="collapse show" id="home-collapse">
                                        <ul className="btn-toggle-nav  ml-2 fw-normal pb-1 small">
                                            <li><a href="#" className="link-dark rounded mb-2">
                                              <button className="btn">Orders List</button>  
                                                </a></li>
                                            <li><a href="#" className="link-dark rounded mb-2">
                                               <button className="btn">Returned</button> 
                                                </a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-toggle nav-link align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#products-collapse" aria-expanded="true">
                                        <i className="fa fa-tasks me-2"></i>
                                        Products
                                    </button>
                                    <div className="collapse show" id="products-collapse">
                                        <ul className="btn-toggle-nav  ml-2 fw-normal pb-1 small">
                                            <li><Link to="/dashboard/products" className="link-dark  rounded mb-2">
                                                <button className="btn ">All Products</button>

                                            </Link></li>
                                            <li><Link to="/dashboard/add/product" className="link-dark  rounded mb-2">
                                                <button className="btn ">Add Products</button>
                                            </Link></li>
                                            <li><Link to="/dashboard/products/categories" className="link-dark  rounded mb-2">
                                                <button className="btn ">Categories</button>
                                            </Link></li>
                                            {/* <li><Link to="/dashboard/products/options" className="link-dark  rounded mb-2">
                                                <button className="btn ">Options</button>
                                            </Link></li>
                                            <li><Link to="/dashboard/products/stock" className="link-dark  rounded mb-2">
                                                <button className="btn ">Out Of Stock</button>
                                            </Link></li> */}
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard/users">
                                        <i className="fa fa-users me-2"></i>
                                        Customers
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        <span data-feather="bar-chart-2"></span>
                                        Reports
                                    </Link>
                                </li>
                            </ul>

                            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                {/* <span>Saved reports</span> */}
                                <Link className="link-secondary" to="/" aria-label="Add a new report">
                                    <span data-feather="plus-circle"></span>
                                </Link>
                            </h6>
                            <div className="dropdown border-top">
                                <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="/assests/m.png" alt="mdo" width="24" height="24" className="rounded-circle" />
                                </a>
                                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                                    <li><Link className="dropdown-item" to="/">New project...</Link></li>
                                    <li><Link className="dropdown-item" to="/">Settings</Link></li>
                                    <li><Link className="dropdown-item" to="/">Profile</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/">Sign out</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
export default Header;

