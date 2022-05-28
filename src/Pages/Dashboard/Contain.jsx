import React from "react";
import "./Contain.css";

const Contain = () => {
    return (
        <div className="row">
            <div  className="col-md-3 mb-3">
                <div  className="card bg-primary text-white h-100 shadow">
                    <div  className="card-body py-4">
                    <h5 className="">Sales</h5>
                        <span className="">
                        <h1 className="float-start">150</h1>
                            <i className="fa fa-3x fa-chart-bar float-end" aria-hidden="true"></i>
                        </span>
                        
                    </div>
                    <a className="text-white" href="">
                        <div  className="card-footer d-flex">
                            View Details
                            <span  className="ms-auto">
                                <i  className="fa fa-share"></i>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
            <div  className="col-md-3 mb-3">
                <div  className="card bg-warning text-white h-100 shadow">
                    <div  className="card-body py-4">
                    <h5 className="">Users</h5>
                        <span className="">
                        <h1 className="float-start">150</h1>
                            <i className="fa fa-3x fa-users float-end" aria-hidden="true"></i>
                        </span>
                        
                    </div>
                    <a className="text-white" href="/Dashboard/Users">
                        <div  className="card-footer d-flex">
                            View Details
                            <span  className="ms-auto">
                                <i  className="fa fa-share"></i>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
            <div  className="col-md-3 mb-3">
                <div  className="card bg-success text-white h-100 shadow">
                    <div  className="card-body py-4">
                    <h5 className="">Products</h5>
                        <span className="">
                        <h1 className="float-start">150</h1>
                            <i className="fa fa-3x fa-tasks float-end" aria-hidden="true"></i>
                        </span>
                        
                    </div>
                    <a className="text-white" href="/Dashboard/Products">
                        <div  className="card-footer d-flex">
                            View Details
                            <span  className="ms-auto">
                                <i  className="fa fa-share"></i>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
            <div  className="col-md-3 mb-3">
                <div  className="card bg-danger text-white h-100 shadow">
                    <div  className="card-body py-4">
                    <h5 className="">Orders</h5>
                        <span className="">
                        <h1 className="float-start">150</h1>
                            <i className="fa fa-3x fa-gift float-end" aria-hidden="true"></i>
                        </span>
                        
                    </div>
                    <a className="text-white" href="/Dashboard/Orders">
                        <div  className="card-footer d-flex">
                            View Details
                            <span  className="ms-auto">
                                <i  className="fa fa-share"></i>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
            {/* <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card card-stats">
            <div className="card-header">
                <div className="icon icon-warning">
                    <span className="material-icons"><i className="fa fa-bar-chart"></i></span>
                </div>
            </div>
            <div className="card-content">
                <p className="category"><strong>Visits</strong></p>
                <h3 className="card-title">70,340</h3>
            </div>
            <div className="card-footer">
                <div className="stats">
                    <i className="fa fa-info-circle text-info"></i>
                    <a href="#pablo">See detailed report</a>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card card-stats">
            <div className="card-header">
                <div className="icon icon-warning">
                    <span className="material-icons"><i className="fa fa-user"></i></span>
                </div>
            </div>
            <div className="card-content">
                <p className="category"><strong>Visits</strong></p>
                <h3 className="card-title">70,340</h3>
            </div>
            <div className="card-footer">
                <div className="stats">
                    <i className="material-icons text-info">info</i>
                    <a href="#pablo">See detailed report</a>
                </div>
            </div>
        </div>
    </div> */}
        </div>
    );
}

export default Contain;