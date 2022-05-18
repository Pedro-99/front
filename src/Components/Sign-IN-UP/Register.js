import React from "react";
import "./Style.css";
const Register = () => {
    return (
        <div className="style-body " id="style1">
            <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <div className="card">
                    <div className="row d-flex">
                        <div className="col-lg-6">
                            <div className="card1 pb-5">
                                <div className="row">
                                    <img src="./assests/logo.png" className="icone-logo" />
                                </div>
                                <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                                    <img className="image-style" src="./assests/m6.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card border-0 style-card px-4 py-5">
                                <div className="row mb-4 px-3">
                                    <h6 className="mb-0 mr-4 mt-2 ">Sign Up with</h6>
                                    <div className="facebook text-center mr-3">
                                        <i className="fa fa-facebook"></i>
                                    </div>
                                    <div className="twitter text-center mr-3 ms-2">
                                        <i className="fa fa-twitter"></i>
                                    </div>
                                    <div className="linkedin text-center mr-3 ms-2">
                                        <i className="fa fa-linkedin"></i>
                                    </div>
                                </div>
                                <div className="row px-3 mb-4">
                                    <div className="line"></div>
                                    <small className="style-or text-center">or</small>
                                    <div className="line"></div>
                                </div>
                                <div className="row px-3">
                                    <label className="mb-1"><h6 className="mb-0 text-sm">Email Address</h6></label>
                                    <input className="mb-4" type="text" name="email" placeholder="Enter a valid email address" />
                                </div>
                                <div className="row px-3">
                                    <label className="mb-1"><h6 className="mb-0 text-sm">Password</h6></label>
                                    <input className="mb-4" type="password" name="password" placeholder="Enter a valid Password" />
                                </div>
                                <div className="row px-3">
                                    <label className="mb-1"><h6 className="mb-0 text-sm">Confirm Password</h6></label>
                                    <input className="mb-4" type="password" name="password" placeholder="Confirm Password" />
                                </div>
                                <div className="row mb-3 px-3">
                                    <button type="submit" class="btn btn-outline-dark text-center">Register</button>
                                </div>
                                <div className="row mb-4 px-3">
                                    <small className="font-weight-bold">Already have an account?
                                        <a className="text-danger " href="/Sign-In">Login</a></small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-dark text-white py-4">
                    <div class="row px-3">
                        <small class="ml-4 ml-sm-5 mb-2">Copyright &copy; 2019. All rights reserved.</small>
                        <div class="social-contact ml-4 ml-sm-auto">
                            <span class="fa fa-facebook mr-4 text-sm "></span>
                            <span class="fa fa-google-plus mr-4 text-sm ms-1 "></span>
                            <span class="fa fa-linkedin mr-4 text-sm ms-1"></span>
                            <span class="fa fa-twitter mr-4 mr-sm-5 text-sm ms-1"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Register;