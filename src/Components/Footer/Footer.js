import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
    return (
        <footer id="footer" className="footer-1">
            <div className="main-footer widgets-dark typo-light">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget subscribe no-box">
                                <h4 className="widget-title">ARYNASS 
                                <h6><i className="cos-italic"> COSMITICS</i></h6>
                                <span></span> </h4>
                                <p>About the company, little description will goes here.. </p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget no-box">
                                <h5 className="widget-title">Quick Links<span></span></h5>
                                <ul className="">
                                <li>
                                        <div className="thumb-content">
                                            <a href="/Sign-IN"> Sign-IN</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content">
                                            <a href="/Sign-IN">&nbsp;Get Started</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content">
                                            <a href="#.">&nbsp;Top Leaders</a></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget no-box">
                                <h5 className="widget-title">Follow up<span></span></h5>
                                <a href=""> <i className="fa fa-facebook"> </i> </a>
                                <a to="#"> <i className="fa fa-twitter"> </i> </a>
                                <a to="#"> <i className="fa fa-youtube"> </i> </a>
                                <a to="#"> <i className="fa fa-instagram"> </i> </a>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget no-box">
                                <h5 className="widget-title">Contact Us<span></span></h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                <div className="emailfield">
                                    <input type="text" name="email" placeholder="Enter Your Email" />
                                    <input name="uri" type="hidden" value="arabiantheme" />
                                    <input name="loc" type="hidden" value="en_US" />
                                    <input className="submitbutton ripplelink" type="submit" value="Subscribe" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>Copyright © 2019. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;