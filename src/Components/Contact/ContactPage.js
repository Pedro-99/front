import React from "react";
import HomeLayout from "../Layouts/HomeLayout";
import "./ContactPage.css";

const ContactPage = () => {
    return (
        <HomeLayout>
            <section id="contact" className="pb-1 pt-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-3 mt-4">
                            <h1 className="display-6 fw-bolder text-center">Contact With Us</h1>
                            <hr className="lines" />
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-xs-12">
                                <div className="contact-us">
                                    <h3>Contact Us</h3>
                                    <div className="contact-address">
                                        <p>Centerville Road, DE 19808, US </p>
                                        <p className="phone">Phone: <span>(+94 123 456 789)</span></p>
                                        <p className="email">E-mail: <span>(email@email.com)</span></p>
                                    </div>
                                    <div className="social-icons">
                                        <ul>
                                            <li className="facebook"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li className="twitter"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li className="google-plus"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                            <li className="linkedin"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                            <li className="dribbble"><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-xs-12">
                                <div className="contact-block">
                                    <form className="mb-5">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required data-error="Please enter your name" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" placeholder="Your Email" id="email" className="form-control" name="name" required data-error="Please enter your email" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea className="form-control" id="message" placeholder="Your Message" rows="8" data-error="Write your message" required></textarea>
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                                <div className="submit-button text-center">
                                                    <button className="btn btn-common sub-btn" type="submit">Send Message&nbsp; <i className="fa fa-telegram"></i></button>
                                                    <div className="h3 text-center hidden"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </HomeLayout>
    );
}

export default ContactPage;