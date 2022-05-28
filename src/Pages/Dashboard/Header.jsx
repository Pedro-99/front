import React from "react";


const Header = () => {
    return (
        <>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Arynass</a>
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
                                    <a className="nav-link active" aria-current="page" href="/Dashboard">
                                        <i className="fa fa-bar-chart me-2"></i>
                                        Dashboard
                                    </a>
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
                                            <li><a href="/Dashboard/Products" className="link-dark  rounded mb-2">
                                                <button className="btn ">All Products</button>

                                            </a></li>
                                            <li><a href="/Dashboard/Add/Product" className="link-dark  rounded mb-2">
                                                <button className="btn ">Add Products</button>
                                            </a></li>
                                            <li><a href="/Dashboard/products/Categories" className="link-dark  rounded mb-2">
                                                <button className="btn ">Categories</button>
                                            </a></li>
                                            <li><a href="/Dashboard/products/Options" className="link-dark  rounded mb-2">
                                                <button className="btn ">Options</button>
                                            </a></li>
                                            <li><a href="/Dashboard/products/stock" className="link-dark  rounded mb-2">
                                                <button className="btn ">Out Of Stock</button>
                                            </a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Dashboard/Users">
                                        <i className="fa fa-users me-2"></i>
                                        Customers
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="bar-chart-2"></span>
                                        Reports
                                    </a>
                                </li>
                            </ul>

                            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                {/* <span>Saved reports</span> */}
                                <a className="link-secondary" href="#" aria-label="Add a new report">
                                    <span data-feather="plus-circle"></span>
                                </a>
                            </h6>
                            <div className="dropdown border-top">
                                <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="/assests/m.png" alt="mdo" width="24" height="24" className="rounded-circle" />
                                </a>
                                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                                    <li><a className="dropdown-item" href="#">New project...</a></li>
                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Sign out</a></li>
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

