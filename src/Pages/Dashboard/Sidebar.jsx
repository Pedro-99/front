import React from "react";
import {Link} from 'react-router-dom'
// import "./index.js";
import "./Contain.css";


const Sidebar = () => {
  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/">Arynass</Link>
        <button className="navbar-toggler position-absolute d-md-none collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a className="nav-link px-3" href="#">Search</a>
          </div>
        </div>
      </header>
      <div className="container-fluid">
        <div className="row">
          <nav id="sidebarMenu" classNameName="col-md-3 py+5 col-lg-2 d-md-block d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar collapse" data-toggle="collapse" data-target=".navbar-collapse">
            {/* <div  classNameName="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" > */}
            <Link to="/" classNameName="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <div classNameName="mt-5" >
                <img src="/assests/logo.png" width="100%" height="50px" />
              </div>
            </Link>
            <hr />
            <ul classNameName="nav nav-pills flex-column mb-auto">

              <li>
                <Link to="/dashboard" classNameName="nav-link text-white">
                  <i classNameName="fa fa-bar-chart me-2"></i>
                  Dashboard
                </Link>
              </li>
              <li classNameName="mb-1">
                <button className="btn btn-toggle nav-link text-white align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                  <i classNameName="fa fa-gift me-2"></i>Orders
                </button>
                <div className="collapse show" id="home-collapse">
                  <ul className="btn-toggle-nav  ml-2 fw-normal pb-1 small">
                    <li><a href="#" className="link-light list-group-item rounded mb-2">Orders List</a></li>
                    <li><a href="#" className="link-light list-group-item rounded mb-2">Returned</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <button className="btn btn-toggle nav-link text-white align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#products-collapse" aria-expanded="true">
                  <i classNameName="fa fa-tasks me-2"></i>Products
                </button>
                <div className="collapse show" id="products-collapse">
                  <ul className="btn-toggle-nav  ml-2 fw-normal pb-1 small">
                    <li><Link href="/Dashboard/Products" className="link-light list-group-item rounded mb-2">All Products</Link></li>
                    <li><Link to="/dashboard/add/product" className="link-light list-group-item rounded mb-2">Add Products</Link></li>
                    <li><Link to="/Dashboard/Add/Product" className="link-light list-group-item rounded mb-2">Out Of Stock</Link></li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/Dashboard/Users" classNameName="nav-link text-white">
                  <i classNameName="fa fa-users me-2"></i>
                  Customers
                </Link>
              </li>
              <li classNameName="nav-item">
                <Link to="/" classNameName="nav-link active" aria-current="page">
                  <i classNameName="fa fa-home me-2"></i>
                  Home
                </Link>
              </li>
            </ul>
            <hr />
            <div classNameName="dropdown">
              <Link to="#" classNameName="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="/assests/m.png" alt="" width="32" height="32" classNameName="rounded-circle me-2" />
                <strong>mdo</strong>
              </Link>
              <ul classNameName="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                <li><Link classNameName="dropdown-item" to="#">
                  <i classNameName="fa fa-tasks ms-1"></i> New project...
                </Link></li>
                <li><Link classNameName="dropdown-item" to="#">
                <i classNameName="fa fa-bell ms-1"></i> Notifications
                </Link></li>
                <li><Link classNameName="dropdown-item" to="#">
                <i classNameName="fa fa-user ms-1"></i> Profile
                </Link></li>
                <li><hr classNameName="dropdown-divider" /></li>
                <li><Link classNameName="dropdown-item" to="#">
                <i classNameName="fa fa-sign-out ms-1"></i> Sign out
                </Link></li>
              </ul>
            </div>
            {/* </div> */}
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar;