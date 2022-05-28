import React from "react";
// import "./index.js";
import "./Contain.css";


const Sidebar = () => {
  return (
    <>
      <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Arynass</a>
        <button class="navbar-toggler position-absolute d-md-none collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
        <div class="navbar-nav">
          <div class="nav-item text-nowrap">
            <a class="nav-link px-3" href="#">Search</a>
          </div>
        </div>
      </header>
      <div class="container-fluid">
        <div class="row">
          <nav id="sidebarMenu" className="col-md-3 py+5 col-lg-2 d-md-block d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar collapse" data-toggle="collapse" data-target=".navbar-collapse">
            {/* <div  className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" > */}
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <div className="mt-5" >
                <img src="/assests/logo.png" width="100%" height="50px" />
              </div>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">

              <li>
                <a href="/Dashboard" className="nav-link text-white">
                  <i className="fa fa-bar-chart me-2"></i>
                  Dashboard
                </a>
              </li>
              <li className="mb-1">
                <button class="btn btn-toggle nav-link text-white align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                  <i className="fa fa-gift me-2"></i>Orders
                </button>
                <div class="collapse show" id="home-collapse">
                  <ul class="btn-toggle-nav  ml-2 fw-normal pb-1 small">
                    <li><a href="#" class="link-light list-group-item rounded mb-2">Orders List</a></li>
                    <li><a href="#" class="link-light list-group-item rounded mb-2">Returned</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <button class="btn btn-toggle nav-link text-white align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#products-collapse" aria-expanded="true">
                  <i className="fa fa-tasks me-2"></i>Products
                </button>
                <div class="collapse show" id="products-collapse">
                  <ul class="btn-toggle-nav  ml-2 fw-normal pb-1 small">
                    <li><a href="/Dashboard/Products" class="link-light list-group-item rounded mb-2">All Products</a></li>
                    <li><a href="/Dashboard/Add/Product" class="link-light list-group-item rounded mb-2">Add Products</a></li>
                    <li><a href="/Dashboard/Add/Product" class="link-light list-group-item rounded mb-2">Out Of Stock</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="/Dashboard/Users" className="nav-link text-white">
                  <i className="fa fa-users me-2"></i>
                  Customers
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link active" aria-current="page">
                  <i className="fa fa-home me-2"></i>
                  Home
                </a>
              </li>
            </ul>
            <hr />
            <div className="dropdown">
              <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="/assests/m.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                <strong>mdo</strong>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                <li><a className="dropdown-item" href="#">
                  <i className="fa fa-tasks ms-1"></i> New project...
                </a></li>
                <li><a className="dropdown-item" href="#">
                <i className="fa fa-bell ms-1"></i> Notifications
                </a></li>
                <li><a className="dropdown-item" href="#">
                <i className="fa fa-user ms-1"></i> Profile
                </a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">
                <i className="fa fa-sign-out ms-1"></i> Sign out
                </a></li>
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